# Stellarray: Product Design & Interface Engineering Roadmap

A comprehensive, progressive curriculum through **Figma**, **Framer**, **Spline**, and **Stitch**.

Built with standard HTML5, CSS, and Vanilla JavaScript with zero external frameworks or build steps.

Live Deployment: **[lexastrong.github.io/stellarray](https://lexastrong.github.io/stellarray/)**

---

## Curriculum Overview

The roadmap spans **4 core industry tools** structured into **5 technical subsections each** (20 stages total). Every stage features core concepts, production shortcuts, field-tested tricks, architectural SVG diagrams, concrete dos & don'ts, and ends with a **10-question checkpoint** (200 questions total).

Each section only **pops up** and unlocks once the prior stage's checkpoint is cleared with 100% accuracy.

```
STELLARRAY CURRICULUM ARCHITECTURE (20 Stages · 200 Questions)
├── 01. Figma
│   ├── Stage 01: Frames, Constraints & Vector Networks
│   ├── Stage 02: Auto Layout v5 & Dynamic Resizing
│   ├── Stage 03: Components, Variants & Properties
│   ├── Stage 04: Variables, Tokens & Mode Theming
│   └── Stage 05: Prototyping, Interactive Components & Dev Mode
├── 02. Framer
│   ├── Stage 06: Canvas Stacks, Grid Architecture & Layout Wrapping
│   ├── Stage 07: Responsive Breakpoints, Cascade & Fluid Units
│   ├── Stage 08: Scroll Transforms & Viewport Triggers
│   ├── Stage 09: Interactive Variants & Spring Physics
│   └── Stage 10: CMS Collections & Code Overrides
├── 03. Spline
│   ├── Stage 11: Viewport Navigation & Coordinate Rigs
│   ├── Stage 12: Polygon Modeling, Parametric Modifiers & Boolean Geometry
│   ├── Stage 13: PBR Shaders, Lighting & Matcaps
│   ├── Stage 14: Events, State Physics & Collisions
│   └── Stage 15: WebGL Runtime Integration, Performance & Export
└── 04. Stitch
    ├── Stage 16: Prompt Architecture & Semantic Deconstruction
    ├── Stage 17: Token JSON Schemas & System Binding
    ├── Stage 18: Multi-Screen Flow Graphs & States
    ├── Stage 19: Deep Selection, Pinning & A11y Audit
    └── Stage 20: Production Code Synthesis & Integration
```

---

## Interactive Features

* **Progressive Pop-Up Reveals**: Future stages remain hidden until preceding checkpoints are cleared. Passing a stage triggers an animated pop-up modal and automatically reveals the next subsection in the sidebar.
* **Persistent Browser Caching**: All progress (completed questions `0..10`, active stage, unlocked count, and preferences) is cached in `localStorage` (`design_stack_roadmap_cache_v2`). Reloading the page restores your exact position.
* **Global Command Palette (<kbd>⌘K</kbd> / <kbd>Ctrl+K</kbd>)**: Search across all 20 stages for shortcuts, tricks, and rules instantly.
* **Keyboard-Driven Quiz Inputs**: Answer questions using keys <kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd>, <kbd>4</kbd> or <kbd>A</kbd>, <kbd>B</kbd>, <kbd>C</kbd>, <kbd>D</kbd>. Navigate stages using <kbd>←</kbd> and <kbd>→</kbd> arrow keys.
* **Subtle Audio Synthesis**: Real-time synthesized audio feedback using the browser's native Web Audio API (with sound toggle).
* **Certificate of Mastery**: Finishing all 20 stages unlocks an exportable, printable Certificate of Completion.
* **Dual Theme Engine**: Fast, accessible Light mode (`#F6F5F1`) and Dark mode (`#0E1013`) with terracotta accents.

---

## Project Structure

```
stellarray/
├── index.html        Semantic HTML5 page shell, modals, and templates
├── css/
│   └── styles.css    Design system tokens, typography, dark/light themes, animations
├── js/
│   ├── stages.js     Curriculum dataset: 20 stages, 200 questions, SVG diagrams
│   └── app.js        Navigation, caching, audio synth, command palette, quiz engine
└── README.md         Project documentation
```

---

## Running Locally

Clone the repository and open `index.html` in any modern web browser:

```bash
git clone https://github.com/LexaStrong/stellarray.git
cd stellarray
# Optional: run with any static server
python -m http.server 3000
```

---

## License

MIT License. Designed and engineered for modern digital product designers and frontend engineers.
