/* Design Stack Roadmap: Application Logic
   20 Stages (4 tools x 5 subsections), 200 Questions (10 per stage).
   Features progressive stage pop-up reveals, full localStorage caching,
   one-at-a-time checkpoint questions, celebration modals, and theme switching. */

const TOTAL = STAGES.length; // 20

// LocalStorage caching keys
const CACHE_KEY = "design_stack_roadmap_cache_v2";

const state = {
  current: 0,
  cursor: {},       // cursor[stageIndex] = number of questions answered correctly (0..10)
  flash: {},
  unlockedCount: 1  // Number of stages popped up / unlocked
};

/* ============================================================
   CACHING ENGINE: Persistent Progress Storage
   ============================================================ */
function loadCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data.cursor && typeof data.cursor === "object") {
        state.cursor = data.cursor;
      }
      if (typeof data.current === "number" && data.current >= 0 && data.current < TOTAL) {
        state.current = data.current;
      }
    }
  } catch (e) {
    console.warn("Unable to load cached progress from localStorage:", e);
  }
  updateUnlockedCount();

  // Ensure current stage is within unlocked bounds
  if (state.current >= state.unlockedCount) {
    state.current = state.unlockedCount - 1;
  }
}

function saveCache() {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      cursor: state.cursor,
      current: state.current,
      savedAt: new Date().toISOString()
    }));
    updateCacheIndicator(true);
  } catch (e) {
    console.warn("Unable to write progress cache to localStorage:", e);
    updateCacheIndicator(false);
  }
}

function resetCache() {
  const confirmed = window.confirm("Reset all 20 stages and clear all cached checkpoint progress?");
  if (confirmed) {
    try {
      localStorage.removeItem(CACHE_KEY);
    } catch (e) {
      console.warn(e);
    }
    state.current = 0;
    state.cursor = {};
    state.flash = {};
    state.unlockedCount = 1;
    saveCache();
    renderSidebar();
    renderStage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function updateCacheIndicator(success) {
  const badge = document.getElementById("cache-status");
  if (badge) {
    badge.title = success ? "Progress automatically cached in browser storage" : "Storage unavailable";
  }
}

const cursorOf = i => state.cursor[i] || 0;
const isPassed = i => cursorOf(i) >= STAGES[i].quiz.length;

function updateUnlockedCount() {
  let count = 1;
  for (let i = 0; i < TOTAL - 1; i++) {
    if (isPassed(i)) {
      count = i + 2;
    } else {
      break;
    }
  }
  state.unlockedCount = Math.min(count, TOTAL);
}

function icons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* ============================================================
   RENDER: Sidebar with Progressive Pop-Up Stages
   "Each section must only pop up when one is done"
   ============================================================ */
function renderSidebar() {
  updateUnlockedCount();
  const visibleStages = STAGES.slice(0, state.unlockedCount);

  // Group visible stages by tool
  const groups = {};
  visibleStages.forEach((s, i) => {
    (groups[s.tool] = groups[s.tool] || []).push(i);
  });

  const toolIcons = { Figma: "pen-tool", Framer: "globe", Spline: "box", Stitch: "sparkles" };

  let html = Object.keys(groups).map(tool => {
    const items = groups[tool].map(i => {
      const done = isPassed(i);
      const current = i === state.current;
      const stateIcon = done ? "check" : "circle";
      const cls = ["stage-btn", done ? "is-done" : "", current ? "is-current" : ""].join(" ");
      const subNum = STAGES[i].subNumber;

      return `<button class="${cls}" data-stage="${i}" aria-current="${current ? "step" : "false"}">
        <span class="stage-state"><i data-lucide="${stateIcon}"></i></span>
        <span class="stage-num">${String(i + 1).padStart(2, "0")}</span>
        <span><small style="opacity:0.75; font-size: 11px;">Part ${subNum}:</small> ${STAGES[i].title}</span>
      </button>`;
    }).join("");

    return `<div class="tool-group">
      <p class="tool-group-title"><i data-lucide="${toolIcons[tool] || 'layers'}"></i>${tool}</p>
      ${items}
    </div>`;
  }).join("");

  // If there are locked stages waiting, show a teaser for the next stage
  if (state.unlockedCount < TOTAL) {
    const nextStage = STAGES[state.unlockedCount];
    html += `
      <div class="tool-group" style="opacity: 0.65; margin-top: var(--s2);">
        <p class="tool-group-title"><i data-lucide="lock"></i> Up Next</p>
        <div style="padding: var(--s2) var(--s3); font-size: var(--fs-xs); color: var(--muted); border: 1px dashed var(--line); border-radius: var(--r-sm);">
          Pass Stage ${state.unlockedCount} checkpoint (10/10) to pop up <strong>${nextStage.tool} (${nextStage.subNumber}/5)</strong>.
        </div>
      </div>
    `;
  }

  document.getElementById("stage-list").innerHTML = html;
  document.querySelectorAll("[data-stage]").forEach(btn => {
    btn.addEventListener("click", () => goTo(Number(btn.dataset.stage)));
  });

  const passedCount = STAGES.filter((_, i) => isPassed(i)).length;
  const progressPercent = Math.round((passedCount / TOTAL) * 100);
  document.getElementById("progress-fill").style.width = progressPercent + "%";
  document.getElementById("progress-label").textContent = `${passedCount} of ${TOTAL} passed`;
  icons();
}

/* ============================================================
   RENDER: Stage content view
   ============================================================ */
const listItems = arr => arr.map(x => `<li>${x}</li>`).join("");

function renderStage() {
  const i = state.current;
  const s = STAGES[i];
  const isLast = i === TOTAL - 1;

  const diagramHtml = typeof s.diagram.render === "function" ? s.diagram.render() : "";

  document.getElementById("main").innerHTML = `
    <article class="stage">
      <header class="stage-head reveal">
        <p class="tool-tag">${s.tool} · Subsection ${s.subNumber} of 5 (Stage ${i + 1} of ${TOTAL})</p>
        <h2>${s.title}</h2>
        <p class="goal">${s.goal}</p>
      </header>

      <section class="block reveal" aria-labelledby="h-concepts-${i}">
        <h3 id="h-concepts-${i}">Core concepts</h3>
        <ul class="list">${listItems(s.concepts)}</ul>
      </section>

      <section class="block reveal" aria-labelledby="h-short-${i}">
        <h3 id="h-short-${i}">Shortcuts</h3>
        <table class="shortcuts">
          <tbody>
            ${s.shortcuts.map(([k, a]) => `<tr><th scope="row"><kbd>${k}</kbd></th><td>${a}</td></tr>`).join("")}
          </tbody>
        </table>
      </section>

      <section class="block reveal" aria-labelledby="h-tricks-${i}">
        <h3 id="h-tricks-${i}">Tricks</h3>
        <div class="tricks">
          ${s.tricks.map(t => `<div class="card"><i data-lucide="lightbulb"></i><p>${t}</p></div>`).join("")}
        </div>
      </section>

      <section class="split reveal">
        <div class="block do">
          <h3 class="do-dont-title"><i data-lucide="check"></i> Do</h3>
          <ul>${listItems(s.dos)}</ul>
        </div>
        <div class="block dont">
          <h3 class="do-dont-title"><i data-lucide="x"></i> Don't</h3>
          <ul>${listItems(s.donts)}</ul>
        </div>
      </section>

      <section class="block reveal" aria-labelledby="h-illus-${i}">
        <h3 id="h-illus-${i}">Illustration</h3>
        <figure class="figure">
          ${diagramHtml}
          <figcaption>${s.diagram.caption}</figcaption>
        </figure>
      </section>

      <section class="block checkpoint reveal" aria-labelledby="h-check-${i}">
        <h3 id="h-check-${i}"><i data-lucide="shield-check"></i> Checkpoint (10 Questions)</h3>
        <p class="muted small">Ten questions, one at a time. Progress is automatically saved in your browser cache. Answer each correctly to reveal the next. ${isLast ? "Passing this completes the full 20-stage curriculum." : `Passing unlocks and pops up stage ${i + 2}.`}</p>
        <div id="quiz" class="quiz" aria-live="polite"></div>
      </section>

      <nav class="stage-nav" aria-label="Stage navigation">
        <button class="btn ghost" id="prev" type="button" ${i === 0 ? "disabled" : ""}><i data-lucide="arrow-left"></i> Previous</button>
        <button class="btn primary" id="next" type="button"></button>
      </nav>
    </article>`;

  document.getElementById("prev").addEventListener("click", () => goTo(state.current - 1));
  document.getElementById("next").addEventListener("click", () => {
    if (isPassed(state.current) && state.current < state.unlockedCount - 1) {
      goTo(state.current + 1);
    }
  });

  renderQuiz();
  updateNav();
  setupReveal();
  icons();
}

function updateNav() {
  const i = state.current;
  const next = document.getElementById("next");
  if (!next) return;
  const passed = isPassed(i);
  const isLast = i === TOTAL - 1;

  if (isLast) {
    next.disabled = !passed;
    next.innerHTML = passed ? "Curriculum Complete ✓" : "Complete Checkpoint (10/10)";
  } else {
    next.disabled = !passed;
    next.innerHTML = `Next stage <i data-lucide="arrow-right"></i>`;
  }
  icons();
}

/* ============================================================
   CHECKPOINT: Step-by-Step Question Progression
   ============================================================ */
function renderQuiz() {
  const i = state.current;
  const s = STAGES[i];
  const N = s.quiz.length; // 10
  const k = cursorOf(i);
  const passed = k >= N;
  const flash = state.flash[i] || "";
  state.flash[i] = "";

  const progressWidth = Math.round((k / N) * 100);

  let html = `
    <div class="qprog">
      <span>${passed ? N : k + 1} of ${N}</span>
      <div class="qbar" role="progressbar" aria-valuemin="0" aria-valuemax="${N}" aria-valuenow="${k}">
        <span style="width:${progressWidth}%"></span>
      </div>
    </div>`;

  if (flash) html += `<p class="status ok" role="status">${flash}</p>`;

  // Render answered questions with summary badges
  html += s.quiz.slice(0, k).map((q, qi) => `
    <div class="qdone">
      <i data-lucide="check"></i>
      <span>${qi + 1}. ${q.q} <span class="muted">— Answer: ${q.options[q.answer]}</span></span>
    </div>`).join("");

  // Render current question
  if (!passed) {
    const q = s.quiz[k];
    html += `
      <fieldset class="qcard" id="active-q">
        <legend>${k + 1}. ${q.q}</legend>
        <div class="choices">
          ${q.options.map((o, oi) => `<button type="button" class="choice" data-opt="${oi}">${o}</button>`).join("")}
        </div>
        <p class="feedback" aria-live="polite"></p>
      </fieldset>`;
  } else {
    const isLast = i === TOTAL - 1;
    html += `<p class="status ok">Checkpoint passed (10/10).${isLast ? " Full 20-stage curriculum complete." : ` Stage ${i + 2} has popped up and is now ready in the sidebar.`}</p>`;
  }

  const quiz = document.getElementById("quiz");
  quiz.innerHTML = html;

  if (!passed) {
    quiz.querySelectorAll(".choice").forEach(btn => {
      btn.addEventListener("click", () => answer(Number(btn.dataset.opt), btn));
    });
  }

  icons();
  setupReveal();
}

function answer(opt, btn) {
  const i = state.current;
  const k = cursorOf(i);
  const N = STAGES[i].quiz.length; // 10
  const q = STAGES[i].quiz[k];
  const fb = document.querySelector("#active-q .feedback");

  if (opt === q.answer) {
    state.cursor[i] = k + 1;
    saveCache(); // Persist progress immediately!

    const isStageNowPassed = k + 1 >= N;

    state.flash[i] = !isStageNowPassed
      ? `Correct. Question ${k + 2} of 10 is now unlocked.`
      : "Correct. Checkpoint passed (10/10)!";

    renderQuiz();
    updateNav();

    if (isStageNowPassed) {
      updateUnlockedCount();
      renderSidebar();
      triggerStagePopUp(i);
    }
  } else {
    btn.classList.add("is-wrong");
    btn.disabled = true;
    fb.textContent = "Not quite. Hint: " + q.hint;
    fb.className = "feedback bad";
  }
}

/* ============================================================
   STAGE POP-UP MODAL CELEBRATION
   ============================================================ */
function triggerStagePopUp(completedIndex) {
  const isLast = completedIndex === TOTAL - 1;
  const modal = document.getElementById("popup-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalBtn = document.getElementById("modal-action-btn");

  if (!modal) return;

  if (!isLast) {
    const nextIndex = completedIndex + 1;
    const nextStage = STAGES[nextIndex];
    modalTitle.textContent = `Stage ${nextIndex + 1} Popped Up!`;
    modalDesc.innerHTML = `You have completed all 10 questions for <strong>Stage ${completedIndex + 1}: ${STAGES[completedIndex].title}</strong>.<br><br><strong>${nextStage.tool} (Part ${nextStage.subNumber}/5): ${nextStage.title}</strong> has popped up and is now available in your roadmap.`;
    modalBtn.innerHTML = `Continue to Stage ${nextIndex + 1} <i data-lucide="arrow-right"></i>`;
    modalBtn.onclick = () => {
      modal.classList.add("hidden");
      goTo(nextIndex);
    };
  } else {
    modalTitle.textContent = `Mastery Achieved!`;
    modalDesc.innerHTML = `Incredible achievement! You have mastered all 20 stages and cleared all 200 checkpoint questions across Figma, Framer, Spline, and Stitch. Your complete product design and engineering foundation is verified.`;
    modalBtn.innerHTML = `Review Complete Curriculum <i data-lucide="check"></i>`;
    modalBtn.onclick = () => {
      modal.classList.add("hidden");
    };
  }

  modal.classList.remove("hidden");
  icons();
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function goTo(index) {
  if (index < 0 || index >= state.unlockedCount) return;
  state.current = index;
  saveCache();
  renderSidebar();
  renderStage();
  document.getElementById("main").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function setupReveal() {
  const els = document.querySelectorAll("#main .reveal:not(.in), #quiz .qcard:not(.in)");
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ============================================================
   HERO BEAM: Cursor tracking
   ============================================================ */
function setupBeam() {
  const hero = document.getElementById("hero");
  const beam = document.getElementById("beam");
  if (!hero || !beam) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { beam.style.display = "none"; return; }

  hero.addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect();
    beam.style.transform = `translate(${e.clientX - r.left - 160}px, ${e.clientY - r.top - 160}px)`;
  });
}

/* ============================================================
   THEME SWITCHER
   ============================================================ */
function setupTheme() {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("design_stack_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const activeTheme = savedTheme || (prefersDark ? "dark" : "light");

  root.setAttribute("data-theme", activeTheme);

  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const paint = () => {
    const dark = root.getAttribute("data-theme") === "dark";
    btn.innerHTML = `<i data-lucide="${dark ? "sun" : "moon"}"></i>`;
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    icons();
  };

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("design_stack_theme", next);
    paint();
  });

  paint();
}

/* ============================================================
   INITIALIZATION
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  loadCache();
  setupTheme();
  setupBeam();
  renderSidebar();
  renderStage();

  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      document.getElementById("course").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const resetBtn = document.getElementById("reset-cache-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", resetCache);
  }

  const modal = document.getElementById("popup-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }

  document.querySelectorAll(".hero .reveal, .value-grid .reveal").forEach((el, idx) => {
    setTimeout(() => el.classList.add("in"), 80 * idx);
  });
});
