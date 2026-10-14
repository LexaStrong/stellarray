/* Course data for Design Stack Roadmap: Figma, Framer, Spline, Stitch.
   4 tools x 5 subsections = 20 comprehensive stages.
   Each stage features concepts, shortcuts, tricks, dos/donts, an architectural SVG diagram,
   and 10 dedicated checkpoint questions (200 questions total).
   answer = zero-based index of the correct option. */

const STAGES = [
  /* =========================================================================
     TOOL 01: FIGMA (Subsections 1 to 5)
     ========================================================================= */

  // Stage 1.1: Frames, Constraints & Vector Networks
  {
    tool: "Figma",
    subNumber: 1,
    title: "Frames, Constraints & Vector Networks",
    goal: "Master foundational canvas architecture: why frames supersede groups, how constraints govern responsiveness, and why vector networks outperform legacy paths.",
    concepts: [
      "Frames serve as screens and containers with clipping boundaries, independent layout grids, and nesting capabilities. Never use traditional grouping (Ctrl/Cmd+G) for UI scaffolding.",
      "Constraints anchor child elements to parent frame edges (Left, Right, Center, Scale, Top, Bottom) and determine behavior when parent dimensions change.",
      "Vector Networks allow vertices to connect to three or more path branches without requiring disconnected subpaths or boolean flattening.",
      "Clip Content determines whether nested overflow is hidden or visible outside the container boundary, essential for scroll regions and carousels."
    ],
    shortcuts: [
      ["F", "Activate Frame tool with device presets"],
      ["R", "Create rectangle vector primitive"],
      ["P", "Pen tool for Vector Networks"],
      ["Shift + X", "Swap Fill and Stroke colors"],
      ["Ctrl / Cmd + G", "Group selection (use sparingly)"],
      ["Ctrl / Cmd + Shift + G", "Ungroup selected container"],
      ["Shift + 2", "Zoom selection to center"],
      ["Shift + 0", "Zoom to 100% actual pixel size"]
    ],
    tricks: [
      "Hold Command (macOS) or Ctrl (Windows) while resizing a parent frame to temporarily bypass constraints and avoid child distortion.",
      "Use Vector Networks with the Pen tool to draw multi-fork branch diagrams and complex icons with unified anchor points instead of separate paths.",
      "Turn off 'Clip content' on a parent frame to visually inspect bleed margins and off-canvas elements without breaking layout hierarchy.",
      "Double click a boundary handle of a frame to snap its dimensions to fit the bounding box of all internal children."
    ],
    dos: [
      "Use device size presets (e.g. iPhone 390x844 or Desktop 1440x900) when initiating screens.",
      "Name layers semantically according to DOM hierarchy (e.g., container/hero, icon/chevron).",
      "Set Left & Right or Scale constraints on elements that must stretch with responsive screens.",
      "Keep vector paths consolidated within vector networks rather than leaving loose stray segments."
    ],
    donts: [
      "Don't position elements on raw absolute canvas coordinates without a parent frame container.",
      "Don't group text layers with rectangles; use frames with background fill styling.",
      "Don't flatten vector icons into raster bitmaps during early design drafting.",
      "Don't leave default frame names like 'Frame 1084' in production libraries."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 1.1: Frame Clipping & Vector Network Branching Architecture",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / FRAME BOUNDARY</text>
            <text x="36" y="70" class="svg-label">Screen &amp; Container Clipping</text>
            <rect x="36" y="86" width="228" height="136" rx="6" class="svg-frame"/>
            <rect x="50" y="100" width="160" height="70" rx="4" class="svg-stack-row"/>
            <text x="60" y="124" class="svg-stack-text">Child Layer</text>
            <text x="60" y="142" class="svg-caption">Constraint: Left &amp; Right</text>
            <rect x="180" y="130" width="100" height="60" rx="4" fill="rgba(180, 71, 45, 0.15)" stroke="var(--accent)" stroke-dasharray="3 3"/>
            <text x="188" y="165" class="svg-caption" fill="var(--accent)">Overflow (Clipped)</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="240" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / CONSTRAINT ENGINE</text>
            <text x="351" y="70" class="svg-label">Spatial Anchoring Rules</text>
            <circle cx="455" cy="140" r="45" class="svg-stack-row"/>
            <line x1="455" y1="95" x2="455" y2="185" stroke="var(--line)" stroke-width="1.5"/>
            <line x1="410" y1="140" x2="500" y2="140" stroke="var(--line)" stroke-width="1.5"/>
            <rect x="440" y="125" width="30" height="30" rx="4" fill="var(--accent)"/>
            <text x="455" y="205" text-anchor="middle" class="svg-caption">Anchor: Center / Center</text>
            <text x="455" y="222" text-anchor="middle" class="svg-caption">Maintains relative focal position</text>

            <path d="M 580 130 L 620 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="620,126 628,130 620,134" class="svg-arrowhead"/>

            <rect x="630" y="20" width="210" height="220" rx="8" class="svg-box"/>
            <text x="646" y="48" class="svg-caption">03 / VECTOR NETWORK</text>
            <text x="646" y="70" class="svg-label">Multi-Branch Node</text>
            <circle cx="735" cy="130" r="6" fill="var(--accent)"/>
            <line x1="735" y1="130" x2="680" y2="90" stroke="var(--accent)" stroke-width="2"/>
            <line x1="735" y1="130" x2="790" y2="90" stroke="var(--accent)" stroke-width="2"/>
            <line x1="735" y1="130" x2="735" y2="195" stroke="var(--accent)" stroke-width="2"/>
            <circle cx="680" cy="90" r="4" class="svg-stack-row"/>
            <circle cx="790" cy="90" r="4" class="svg-stack-row"/>
            <circle cx="735" cy="195" r="4" class="svg-stack-row"/>
            <text x="735" y="220" text-anchor="middle" class="svg-caption">1 Node connects 3+ paths</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "What is the primary architectural purpose of a Frame in Figma?", options: ["It clips overflow content and acts as a structured container", "It exports raster JPGs exclusively", "It stores typography variables only", "It groups layers into a locked immutable block"], answer: 0, hint: "Frames define boundaries and manage clipping of child layers." },
      { q: "Which key activates the Frame tool with responsive device presets?", options: ["A", "F", "M", "Shift + F"], answer: 1, hint: "F stands for Frame." },
      { q: "How do Vector Networks fundamentally differ from standard legacy vector paths?", options: ["A single vertex can connect to three or more branches freely", "They only support 90-degree right angles", "They cannot contain bezier curves", "They automatically convert vector paths into PNGs"], answer: 0, hint: "Think of multi-branch connections from a single node." },
      { q: "Which modifier key temporarily overrides constraints when resizing a parent frame?", options: ["Option / Alt", "Ctrl / Cmd", "Shift", "Tab"], answer: 1, hint: "Holding Cmd/Ctrl disables constraint adjustments during resize." },
      { q: "What happens to child elements when parent 'Clip content' is disabled?", options: ["Child overflow beyond frame boundaries remains visible", "All children are deleted", "The parent frame shrinks to 0x0", "Constraints are locked"], answer: 0, hint: "Disabling clipping reveals child elements that extend past frame edges." },
      { q: "Which constraint setting causes a child element to stretch horizontally as its parent frame grows?", options: ["Center", "Left & Right", "Left only", "Right only"], answer: 1, hint: "Left & Right pins both edges, stretching the element." },
      { q: "Why is traditional grouping (Ctrl/Cmd+G) discouraged for primary UI screen scaffolding?", options: ["Groups do not support independent padding, clipping, and auto-layout rules", "Groups cannot be selected with the cursor", "Groups delete all vector strokes", "Groups double the file size instantly"], answer: 0, hint: "Frames provide layout containers with clipping and padding; groups simply combine bounds." },
      { q: "Which shortcut swaps the fill color and stroke outline on any vector element?", options: ["Shift + X", "Ctrl + X", "Alt + S", "Cmd + F"], answer: 0, hint: "Shift paired with X swaps fill and stroke." },
      { q: "How do you quickly zoom the canvas directly to 100% actual pixel dimensions?", options: ["Shift + 1", "Shift + 0", "Shift + 2", "Ctrl + Plus"], answer: 1, hint: "Shift + 0 resets the viewport zoom to 100%." },
      { q: "When do constraint rules take effect on child layers inside a frame?", options: ["Only when the frame is exported", "When the parent frame is resized", "Only in presentation preview mode", "When typing text strings"], answer: 1, hint: "Constraints respond immediately when parent frame dimensions change." }
    ]
  },

  // Stage 1.2: Auto Layout v5 & Dynamic Resizing
  {
    tool: "Figma",
    subNumber: 2,
    title: "Auto Layout v5 & Dynamic Resizing",
    goal: "Master flexible auto-layout container engineering: gap, padding, direction, wrap, and strict Hug vs Fill vs Fixed rules.",
    concepts: [
      "Auto Layout turns static elements into flex containers that grow, shrink, and wrap predictably based on interior copy and localized strings.",
      "Hug Contents sizes the parent container to exactly fit its children. Fill Container commands the child to consume available parent cross/main axis width.",
      "Auto Layout Wrap enables multi-row or multi-column grids that fold automatically when horizontal boundaries contract.",
      "Min and Max dimension properties (min-width, max-width) set boundary guardrails on fluid components."
    ],
    shortcuts: [
      ["Shift + A", "Add Auto Layout flex container to selection"],
      ["Option + Shift + A (Alt+Shift+A)", "Remove Auto Layout while preserving positions"],
      ["Enter", "Drill down into child layers within auto layout"],
      ["Shift + Enter", "Select parent auto layout container"],
      ["Tab", "Cycle through sibling elements in layout flow"],
      ["Shift + Tab", "Cycle backward through sibling elements"],
      ["Ctrl / Cmd + Click", "Direct-select deeply nested child inside flex frame"],
      ["Option + Hover", "Inspect spatial gap and padding measurements in px"]
    ],
    tricks: [
      "Set an element's position to 'Absolute Position' inside an Auto Layout frame to create floating badges or close icons that ignore flex flow.",
      "Type comma-separated values in the padding input (e.g. 12, 16 or 12, 16, 24, 16) to set independent top, right, bottom, left padding in one input.",
      "Use 'Space between' distribution mode on horizontal navbars to push branding to the left and action buttons to the right automatically.",
      "Apply min-width on card descriptions and set the text box to Fill Container with Auto Height to guarantee no text clips."
    ],
    dos: [
      "Wrap buttons, cards, list items, and entire pages in Auto Layout containers.",
      "Use consistent spatial increments (e.g., 4px, 8px, 16px, 24px) for gap and padding.",
      "Set text containers inside auto-layout cards to Fill Container with Auto Height.",
      "Use negative gap values when building overlapping avatar stacks."
    ],
    donts: [
      "Don't draw static colored rectangles behind text layers; apply background fill to the auto-layout frame.",
      "Don't leave child containers set to 'Fixed width' when responsive resizing across screen sizes is needed.",
      "Don't use spaces or tabs inside text layers to simulate column indentation.",
      "Don't detach auto-layout frames just to move an element by a few pixels."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 1.2: Auto Layout Sizing Hierarchy (Hug vs Fill vs Fixed Constraints)",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / HUG CONTENTS</text>
            <text x="36" y="70" class="svg-label">Container Shrinks to Fit</text>
            <rect x="36" y="92" width="160" height="48" rx="6" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="4 4" fill="var(--surface)"/>
            <text x="50" y="122" class="svg-label" font-size="12">Label: 'Get Started'</text>
            <text x="36" y="165" class="svg-caption">Width = Child Text + Padding</text>
            <text x="36" y="185" class="svg-caption">Expands dynamically with copy</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / FILL CONTAINER</text>
            <text x="351" y="70" class="svg-label">Child Stretches to Width</text>
            <rect x="351" y="92" width="228" height="48" rx="6" fill="var(--surface)" stroke="var(--line)"/>
            <rect x="357" y="98" width="216" height="36" rx="4" fill="var(--accent)"/>
            <text x="465" y="120" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">100% Main/Cross Axis Width</text>
            <text x="351" y="165" class="svg-caption">Fills remaining parent frame area</text>
            <text x="351" y="185" class="svg-caption">Responds fluidly to screen width</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / WRAP GRIDS</text>
            <text x="666" y="70" class="svg-label">Flow Wrapping</text>
            <rect x="666" y="92" width="70" height="28" rx="4" class="svg-stack-row"/>
            <rect x="744" y="92" width="70" height="28" rx="4" class="svg-stack-row"/>
            <rect x="666" y="128" width="70" height="28" rx="4" class="svg-stack-row"/>
            <text x="666" y="180" class="svg-caption">Items wrap to next row</text>
            <text x="666" y="198" class="svg-caption">Automatic responsive fold</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "Which keyboard shortcut wraps selected elements in an Auto Layout flex container?", options: ["Shift + A", "Ctrl / Cmd + A", "Alt + L", "Shift + F"], answer: 0, hint: "Shift paired with A activates Auto Layout." },
      { q: "What does setting width to 'Hug contents' do to a container?", options: ["The container shrinks to fit the dimensions of its children plus padding", "The container expands to fill the browser window", "The layer is locked in place", "Children are hidden outside the container"], answer: 0, hint: "Hug wraps tightly around interior content." },
      { q: "What does 'Fill container' dictate when applied to a child layer inside Auto Layout?", options: ["The child stretches to take up all available parent space along the layout axis", "It fills the shape with a solid red color", "It locks the aspect ratio permanently", "It turns the child into a group"], answer: 0, hint: "Fill commands the child to occupy 100% of available space." },
      { q: "How can you place a floating notification badge inside an Auto Layout card without shifting child elements?", options: ["Toggle 'Absolute Position' in the right-hand auto-layout inspector", "Group the badge with a transparent rectangle", "Detach the card component", "Set container gap to 0px"], answer: 0, hint: "Absolute Position excludes the layer from the flex calculations." },
      { q: "What shortcut selects the parent Auto Layout frame when you have a child layer selected?", options: ["Shift + Enter", "Enter", "Tab", "Escape"], answer: 0, hint: "Shift + Enter navigates upward to the parent container." },
      { q: "How can you create an overlapping avatar stack using Auto Layout?", options: ["Set a negative gap value (e.g. -8px) in the auto layout panel", "Drag the layers on top of each other with arrow keys", "Convert the avatars into text layers", "Disable all constraints"], answer: 0, hint: "Negative gaps pull adjacent children over one another." },
      { q: "What setting allows a horizontal row of tags to fold into multiple rows as container width decreases?", options: ["Auto Layout Wrap", "Direction: Vertical", "Hug Contents", "Clip Content"], answer: 0, hint: "Wrap allows flex items to roll onto subsequent lines." },
      { q: "Which key drills down into the children of an Auto Layout frame?", options: ["Enter", "Shift + Enter", "Space", "Backspace"], answer: 0, hint: "Pressing Enter steps down into child layers." },
      { q: "How do you inspect the exact distance between two elements in pixels?", options: ["Hold Option / Alt while hovering over the target element", "Double click the element with Shift", "Hold Spacebar and drag", "Press Command + I"], answer: 0, hint: "Option/Alt hover displays red guide lines with pixel distances." },
      { q: "What text sizing mode prevents multi-line text from overflowing outside an auto-layout container?", options: ["Fill Container (width) with Auto Height", "Fixed Width with Fixed Height", "Auto Width with Fixed Height", "Truncate with 1 line"], answer: 0, hint: "Fill container with auto height lets text wrap and grow container height." }
    ]
  },

  // Stage 1.3: Components, Variants & Properties
  {
    tool: "Figma",
    subNumber: 3,
    title: "Components, Variants & Properties",
    goal: "Architect scalable design systems: master master components, variant sets, boolean properties, text properties, and instance swapping.",
    concepts: [
      "A Component is a reusable master element. Instances are linked clones that inherit upstream updates from the master while allowing specific overrides.",
      "Variants organize permutations of one component (e.g., State: Default, Hover, Focused, Disabled; Size: SM, MD, LG) into a single component set.",
      "Component Properties (Boolean, Text, Instance Swap) reduce variant matrix explosion by binding controls directly to layer visibility and copy.",
      "Component set properties allow designers to toggle attributes with clean UI switches in the inspector rather than navigating deep layer trees."
    ],
    shortcuts: [
      ["Ctrl / Cmd + Alt + K", "Create master component from selection"],
      ["Ctrl / Cmd + Alt + B", "Detach instance (sever master connection)"],
      ["Alt + Drag", "Duplicate component into a linked instance"],
      ["Shift + I", "Open Asset / Component insert panel"],
      ["Option + 2 (Alt+2)", "Open Assets panel in sidebar"],
      ["Option + 1 (Alt+1)", "Open Layers panel in sidebar"],
      ["Ctrl / Cmd + D", "Duplicate instance with offset"],
      ["Ctrl / Cmd + /", "Search components and swap instances via Quick Actions"]
    ],
    tricks: [
      "Use Boolean Component Properties for optional elements (e.g. 'hasIcon') instead of creating duplicate variants for with-icon and without-icon.",
      "Assign preferred component values to Instance Swap properties so teammates can only select approved icons from the design system.",
      "Prefix internal sub-components with an underscore (e.g. `_ButtonBase`) to keep them private and hide them from team asset publishing.",
      "Hold Command / Ctrl + Option while dragging a component from the assets panel to replace an existing selected instance on the canvas directly."
    ],
    dos: [
      "Group related variants into a single Component Set with clear property names (e.g., Size, State, Theme).",
      "Expose Text Properties on components so designers edit copy in the sidebar without double-clicking nested layers.",
      "Use Instance Swap properties for icons, badges, and avatars.",
      "Publish components from centralized design system files for cross-project consistency."
    ],
    donts: [
      "Don't detach instances whenever a layout adjustment is needed; create a variant or configure properties.",
      "Don't build 64 redundant variants when 3 Boolean properties achieve the same functionality.",
      "Don't leave variant properties labeled with default names like 'Property 1'.",
      "Don't hardcode text inside icons that prevents semantic swapping."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 1.3: Master Component, Variant Matrix & Instance Property Inheritance",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="270" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / MASTER COMPONENT SET</text>
            <text x="36" y="70" class="svg-label">Button Variants Matrix</text>
            <rect x="36" y="86" width="238" height="136" rx="6" class="svg-frame"/>
            <rect x="48" y="98" width="214" height="32" rx="4" fill="var(--accent)"/>
            <text x="155" y="119" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">State: Primary</text>
            <rect x="48" y="136" width="214" height="32" rx="4" class="svg-stack-row"/>
            <text x="155" y="157" text-anchor="middle" class="svg-stack-text">State: Outline</text>
            <text x="48" y="190" class="svg-caption">Props: Size (SM/MD), Icon (Bool)</text>
            <text x="48" y="206" class="svg-caption">Single source of truth</text>

            <path d="M 295 130 L 335 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="335,126 343,130 335,134" class="svg-arrowhead"/>

            <rect x="345" y="20" width="240" height="220" rx="8" class="svg-box"/>
            <text x="361" y="48" class="svg-caption">02 / COMPONENT PROPERTIES</text>
            <text x="361" y="70" class="svg-label">Inspector Property Controls</text>
            <rect x="361" y="86" width="208" height="36" rx="4" class="svg-stack-row"/>
            <text x="375" y="108" class="svg-stack-text">hasLeadingIcon</text>
            <circle cx="545" cy="104" r="7" fill="var(--ok)"/>
            <rect x="361" y="130" width="208" height="36" rx="4" class="svg-stack-row"/>
            <text x="375" y="152" class="svg-stack-text">buttonLabel</text>
            <text x="500" y="152" class="svg-caption">'Submit'</text>
            <text x="361" y="190" class="svg-caption">Prevents variant explosion</text>
            <text x="361" y="206" class="svg-caption">Clean sidebar toggles</text>

            <path d="M 590 130 L 630 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="630,126 638,130 630,134" class="svg-arrowhead"/>

            <rect x="640" y="20" width="200" height="220" rx="8" class="svg-box"/>
            <text x="656" y="48" class="svg-caption">03 / INSTANCE OVERRIDE</text>
            <text x="656" y="70" class="svg-label">Live Linked Copy</text>
            <rect x="656" y="92" width="168" height="38" rx="4" fill="var(--accent)"/>
            <text x="740" y="116" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">Overridden Label</text>
            <text x="656" y="155" class="svg-caption">• Inherits styling from master</text>
            <text x="656" y="175" class="svg-caption">• Preserves unique copy overrides</text>
            <text x="656" y="195" class="svg-caption">• Can reset overrides anytime</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "What keyboard shortcut promotes the selected frame to a Master Component?", options: ["Ctrl / Cmd + Alt + K", "Ctrl / Cmd + G", "Shift + K", "Ctrl / Cmd + Shift + C"], answer: 0, hint: "Command/Ctrl + Option/Alt + K creates a component." },
      { q: "What is an Instance in Figma?", options: ["A linked copy of a master component that receives design updates", "A raster screenshot of a page", "An uneditable locked layer", "A plugin configuration file"], answer: 0, hint: "Instances stay connected to master components." },
      { q: "What keyboard shortcut severs the connection between an instance and its master component?", options: ["Ctrl / Cmd + Alt + B", "Ctrl / Cmd + Shift + D", "Backspace", "Alt + Shift + X"], answer: 0, hint: "Command/Ctrl + Option/Alt + B detaches an instance." },
      { q: "Why should you use Boolean Component Properties instead of duplicating variants?", options: ["To prevent variant matrix explosion and manage visibility via clean toggles", "To speed up local computer fans", "Because Figma only allows 4 variants per file", "To turn all text uppercase"], answer: 0, hint: "Boolean properties toggle layers on/off without multiplying variants." },
      { q: "What naming convention hides a private sub-component from team library publishing?", options: ["Prefixing the name with an underscore (e.g. _ButtonBase)", "Typing in all capital letters", "Adding a question mark at the end", "Setting opacity to 0%"], answer: 0, hint: "Leading underscores or periods keep components private." },
      { q: "How do you swap an icon inside an instance cleanly without detaching?", options: ["Use an Instance Swap property bound to the icon container", "Double click and paste an SVG", "Delete the icon layer and re-draw it", "Change frame blend mode to Multiply"], answer: 0, hint: "Instance Swap properties allow quick selection from approved icons." },
      { q: "What happens to instance text overrides when the master component's font size is updated?", options: ["The instance inherits the new font size while preserving the customized text copy", "The text override is erased completely", "The instance detaches automatically", "The font turns red"], answer: 0, hint: "Instances maintain overrides for unedited properties while receiving master updates." },
      { q: "Which shortcut opens the Assets and Components insertion panel directly?", options: ["Shift + I", "Shift + A", "Ctrl + Space", "Alt + I"], answer: 0, hint: "Shift + I opens the component insertion modal." },
      { q: "How do you directly replace a canvas component instance with another component from the Assets panel?", options: ["Hold Cmd/Ctrl + Option while dragging the new component over the existing instance", "Delete the instance first then drag", "Press Shift + R", "Double click the canvas background"], answer: 0, hint: "Holding Cmd+Option replaces the target instance directly on drop." },
      { q: "What should you do if an instance has unintended overrides you want to remove?", options: ["Right click and choose 'Reset all overrides'", "Delete the file and start over", "Detach the instance and regroup", "Lock the layer"], answer: 0, hint: "Reset all overrides restores the instance to exact master component state." }
    ]
  },

  // Stage 1.4: Variables, Tokens & Mode Theming
  {
    tool: "Figma",
    subNumber: 4,
    title: "Variables, Tokens & Mode Theming",
    goal: "Implement modern design token architecture: color, number, string, and boolean variables with automated Light/Dark mode switching.",
    concepts: [
      "Figma Variables store design tokens (Colors, Numbers, Strings, Booleans) and power centralized theming and dynamic interface states.",
      "Variable Modes allow an entire screen or section to switch between Light and Dark themes, or compact and spacious spacing scales automatically.",
      "Token Aliasing maps semantic tokens (e.g. `surface/primary`) to raw primitive values (e.g. `slate/900`) for robust multi-tier design systems.",
      "Number variables bind to spatial auto-layout gap, padding, border radius, and minimum/maximum dimension boundaries."
    ],
    shortcuts: [
      ["Shift + Space", "Preview variable mode changes in floating prototype view"],
      ["Ctrl / Cmd + /", "Search and assign variables via Quick Actions"],
      ["Alt + 2", "Open Assets panel to view library variables"],
      ["Enter", "Apply variable selection in modal"],
      ["Escape", "Close variable assignment popover"],
      ["Shift + Click", "Multi-select variables in collection table"],
      ["Ctrl / Cmd + D", "Duplicate variable row in collections table"],
      ["Shift + Enter", "Commit variable name and move to next row"]
    ],
    tricks: [
      "Assign a Variable Mode (e.g., 'Dark Mode') to a parent section frame; every component dropped into that frame automatically flips to dark styles.",
      "Create a dedicated 'Spacing' variable collection with a strict 4px/8px scale so engineers cannot enter arbitrary rogue pixel margins.",
      "Alias semantic tokens to brand colors: set `action/background` to point to `brand/blue/600` so global rebrands take seconds.",
      "Use String variables for localized content to test German or Japanese character expansion across buttons and cards instantly."
    ],
    dos: [
      "Structure variables into two tiers: Primitives (raw colors/scales) and Semantic tokens (purpose-driven roles).",
      "Bind Corner Radius and Auto Layout Padding directly to Number variables.",
      "Use Variable Modes for theme switching (Light/Dark, Density: Compact/Spacious).",
      "Establish governance so only design system maintainers modify primitive tokens."
    ],
    donts: [
      "Don't hardcode hex codes (e.g. #3B82F6) directly into production components when tokens exist.",
      "Don't create separate duplicate component sets for Dark Mode; use Variable Modes.",
      "Don't mix unrelated tokens (like spacing numbers and font weights) in the same unorganized collection.",
      "Don't forget to test high-contrast modes for accessibility compliance."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 1.4: Design Token Hierarchy & Variable Mode Resolution",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="250" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / PRIMITIVE TOKENS</text>
            <text x="36" y="70" class="svg-label">Raw Values Store</text>
            <rect x="36" y="90" width="218" height="34" rx="4" class="svg-stack-row"/>
            <circle cx="50" cy="107" r="5" fill="#2563EB"/>
            <text x="64" y="111" class="svg-stack-text">blue/600 = #2563EB</text>
            <rect x="36" y="130" width="218" height="34" rx="4" class="svg-stack-row"/>
            <circle cx="50" cy="147" r="5" fill="#0F172A"/>
            <text x="64" y="151" class="svg-stack-text">slate/900 = #0F172A</text>
            <text x="36" y="188" class="svg-caption">Global raw values</text>
            <text x="36" y="206" class="svg-caption">Do not use directly in UI</text>

            <path d="M 275 130 L 315 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="315,126 323,130 315,134" class="svg-arrowhead"/>

            <rect x="325" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="341" y="48" class="svg-caption">02 / SEMANTIC ALIASING</text>
            <text x="341" y="70" class="svg-label">Purpose-Driven Roles</text>
            <rect x="341" y="90" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="355" y="111" class="svg-stack-text">color/surface/card</text>
            <rect x="341" y="130" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="355" y="151" class="svg-stack-text">color/action/primary</text>
            <text x="341" y="188" class="svg-caption">Mapped to primitives</text>
            <text x="341" y="206" class="svg-caption">UI elements bind here</text>

            <path d="M 590 130 L 630 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="630,126 638,130 630,134" class="svg-arrowhead"/>

            <rect x="640" y="20" width="200" height="220" rx="8" class="svg-box"/>
            <text x="656" y="48" class="svg-caption">03 / VARIABLE MODES</text>
            <text x="656" y="70" class="svg-label">Light &amp; Dark Modes</text>
            <rect x="656" y="90" width="168" height="50" rx="4" fill="#FFFFFF" stroke="var(--line)"/>
            <text x="668" y="112" class="svg-stack-text" fill="#15171A">Mode: Light</text>
            <text x="668" y="128" class="svg-caption" fill="#5A6069">Surface: #FFFFFF</text>
            <rect x="656" y="146" width="168" height="50" rx="4" fill="#0E1013"/>
            <text x="668" y="168" class="svg-stack-text" fill="#ECEAE4">Mode: Dark</text>
            <text x="668" y="184" class="svg-caption" fill="#A4AAB4">Surface: #16191E</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "What four data types do Figma Variables support?", options: ["Color, Number, String, and Boolean", "Raster, Vector, SVG, and PDF", "HTML, CSS, JS, and TS", "Audio, Video, GIF, and WebP"], answer: 0, hint: "Variables handle colors, numeric scales, text strings, and boolean flags." },
      { q: "What feature enables an entire frame to switch between Light and Dark styles automatically?", options: ["Variable Modes", "Color Inversion filter", "Batch export presets", "Boolean Union"], answer: 0, hint: "Modes define alternate values for variables across collections." },
      { q: "What is token aliasing in modern design systems?", options: ["Pointing a semantic token (e.g. surface/primary) to a primitive value (e.g. slate/900)", "Renaming layer files on your hard drive", "Hiding unused component icons", "Exporting tokens as PNGs"], answer: 0, hint: "Aliasing links semantic roles to raw primitive tokens." },
      { q: "Which UI properties can Number variables bind to directly?", options: ["Auto-layout gap, padding, corner radius, and min/max dimensions", "Gradient angle rotation only", "Layer drop shadows blur radius only", "Image compression quality"], answer: 0, hint: "Number variables govern spatial and dimension attributes in auto layout." },
      { q: "Why should you separate variables into Primitives and Semantic collections?", options: ["To allow themes and brands to change without rewriting component bindings", "Because Figma limits variables to 10 per collection", "To increase GPU memory usage", "To make files uneditable by developers"], answer: 0, hint: "Decoupling primitives from semantics allows global rebrands and theming." },
      { q: "How do you preview live variable mode switching on an interactive prototype?", options: ["Shift + Space opens inline prototype preview", "Cmd + P opens print dialog", "Ctrl + Shift + S exports files", "Alt + Delete resets variables"], answer: 0, hint: "Shift + Space opens the quick inline prototype preview." },
      { q: "What happens when a child component is dragged into a parent frame assigned to 'Dark Mode'?", options: ["It instantly resolves its semantic tokens to the Dark Mode variable values", "It breaks and turns into a flat red box", "It asks for a password", "It detaches from the library"], answer: 0, hint: "Components inherit the active variable mode of their ancestor frame." },
      { q: "What variable type would you use to test UI text expansion across German and English?", options: ["String variables", "Number variables", "Boolean variables", "Color variables"], answer: 0, hint: "String variables store textual copy for multi-language testing." },
      { q: "What variable type governs the visibility of optional elements like badges or icons?", options: ["Boolean variables", "Float variables", "Hex variables", "Integer variables"], answer: 0, hint: "Booleans evaluate to True or False to toggle layer visibility." },
      { q: "Where do you manage and publish team design token collections in Figma?", options: ["The Local Variables dialog in the right-hand canvas sidebar", "The Help and Account menu", "The font dropdown panel", "The prototype interactions inspector"], answer: 0, hint: "Open Local Variables from the right sidebar canvas settings." }
    ]
  },

  // Stage 1.5: Prototyping, Interactive Components & Dev Mode
  {
    tool: "Figma",
    subNumber: 5,
    title: "Prototyping, Interactive Components & Dev Mode",
    goal: "Wire realistic interactive user flows: micro-interactions with Smart Animate, scroll position preservation, and developer mode spec inspection.",
    concepts: [
      "Interactive Components allow variant state transitions (Default -> Hover -> Pressed) to animate within self-contained components without duplicating full screens.",
      "Smart Animate matches identical layer names between two frames and interpolates position, scale, opacity, and corner radius smoothly with spring physics.",
      "Scroll Position Preservation maintains the user's current scroll depth when navigating between screens or triggering interactive tabs.",
      "Dev Mode provides structured CSS, iOS, and Android specs, box models, token names, and Git-like version comparison for engineering handoff."
    ],
    shortcuts: [
      ["Shift + E", "Toggle between Design Mode and Dev Mode"],
      ["Shift + Space", "Open inline prototype preview modal"],
      ["Shift + D", "Toggle Dev Mode ready-for-dev status badge"],
      ["Option + Click", "Inspect exact CSS code spec in Dev Mode"],
      ["Z", "Toggle prototype zoom and fit modes in presentation"],
      ["R", "Restart prototype flow from beginning"],
      ["C", "Add or view contextual design comments"],
      ["Ctrl / Cmd + Click", "Deep-select layer to inspect specs in Dev Mode"]
    ],
    tricks: [
      "Give layers identical names across two frames to allow Smart Animate to morph their geometry organically during screen transitions.",
      "Build dropdown menus and button states as Interactive Components so you never have to wire 30 duplicate mockup screens for hover effects.",
      "Mark frames as 'Ready for Dev' in Dev Mode to signal to engineers that design tokens, auto layout, and responsive constraints are finalized.",
      "Enable 'Preserve scroll position' on navigation links so opening a modal doesn't kick the user back to the top of the page."
    ],
    dos: [
      "Use Interactive Components for micro-interactions (checkboxes, switches, hover buttons).",
      "Name layers consistently across screens to ensure Smart Animate detects corresponding nodes.",
      "Document component token aliases in Dev Mode for seamless frontend mapping.",
      "Test prototype flows on real mobile devices via the Figma Mirror app."
    ],
    donts: [
      "Don't build 50 full artboards just to demonstrate one button hover state.",
      "Don't change layer names between screens if you intend to Smart Animate between them.",
      "Don't hand off designs to engineering without auditing component variable linkage in Dev Mode.",
      "Don't leave broken prototype connection noodles pointing to deleted frames."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 1.5: Smart Animate State Transition & Dev Mode Spec Inspection",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / SMART ANIMATE</text>
            <text x="36" y="70" class="svg-label">Identical Layer Matching</text>
            <rect x="36" y="90" width="100" height="40" rx="4" fill="var(--accent)"/>
            <text x="86" y="115" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">Frame A</text>
            <path d="M 140 110 L 165 110" class="svg-arrow" stroke-width="1.5"/>
            <rect x="170" y="90" width="70" height="80" rx="8" fill="var(--accent)"/>
            <text x="205" y="135" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">Frame B</text>
            <text x="36" y="190" class="svg-caption">Interpolates width, height, radius</text>
            <text x="36" y="206" class="svg-caption">Layer name must match exactly</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / INTERACTIVE COMPONENT</text>
            <text x="351" y="70" class="svg-label">Self-Contained Micro-States</text>
            <rect x="351" y="90" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="365" y="112" class="svg-stack-text">Default State (Idle)</text>
            <path d="M 465 124 L 465 138" class="svg-arrow" stroke-width="1.5"/>
            <rect x="351" y="140" width="228" height="34" rx="4" fill="var(--accent)"/>
            <text x="465" y="162" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">Hover State (Active)</text>
            <text x="351" y="196" class="svg-caption">Wires directly inside variant set</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / DEV MODE</text>
            <text x="666" y="70" class="svg-label">Engineering Handoff</text>
            <rect x="666" y="90" width="158" height="90" rx="4" class="svg-stack-row"/>
            <text x="678" y="112" class="svg-caption" fill="var(--accent)">display: flex;</text>
            <text x="678" y="128" class="svg-caption">padding: 16px;</text>
            <text x="678" y="144" class="svg-caption">gap: var(--space-4);</text>
            <text x="678" y="160" class="svg-caption">border-radius: 8px;</text>
            <text x="666" y="204" class="svg-caption">Zero guesswork CSS specs</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "Which shortcut toggles Figma's dedicated Dev Mode for frontend handoff?", options: ["Shift + D", "Ctrl + D", "Alt + Shift + D", "Cmd + Shift + P"], answer: 0, hint: "Shift + D switches between design and dev modes." },
      { q: "What is the critical rule for Smart Animate to morph elements smoothly between two screens?", options: ["The layers must share the exact same layer name in both frames", "The layers must be grouped as a symbol", "The background must be transparent", "The file must be saved in SVG format"], answer: 0, hint: "Figma matches matching layer names when calculating transition tweens." },
      { q: "What benefit do Interactive Components provide over traditional screen-to-screen prototyping?", options: ["Micro-interactions (hover, click, toggle) animate internally within a component instance", "They automatically write backend SQL queries", "They double prototype resolution to 8K", "They remove the need for design tokens"], answer: 0, hint: "Interactive components manage their own states without copying full artboards." },
      { q: "Which shortcut opens the quick inline prototype preview without opening a separate browser tab?", options: ["Shift + Space", "Spacebar", "Ctrl + Shift + Enter", "Alt + P"], answer: 0, hint: "Shift + Space launches the inline preview modal." },
      { q: "What setting preserves the user's vertical scroll position when opening an overlay or switching tabs?", options: ["Preserve scroll position", "Fix position when scrolling", "Clip content", "Smart animate easing"], answer: 0, hint: "Check 'Preserve scroll position' in the prototype interaction details." },
      { q: "How can you restart an interactive prototype from the initial starting screen during presentation?", options: ["Press 'R'", "Press 'Z'", "Press 'Escape'", "Press 'Tab'"], answer: 0, hint: "The 'R' key restarts prototype presentations instantly." },
      { q: "What information does Dev Mode generate for frontend developers inspecting a card component?", options: ["Box model measurements, token aliases, CSS/SwiftUI/Compose code snippets, and assets", "Marketing copy suggestions", "Browser cookie logs", "Git commit history of the developer's laptop"], answer: 0, hint: "Dev mode surfaces layout specs, design tokens, and production code snippets." },
      { q: "Which transition animation type applies realistic physics with damping and mass parameters?", options: ["Spring", "Instant", "Dissolve", "Linear"], answer: 0, hint: "Spring animations interpolate motion with physical mass and stiffness." },
      { q: "How do you add contextual pins and feedback for teammates directly onto canvas coordinates?", options: ["Press 'C' to activate the Comments tool", "Press 'T' for text", "Press 'F' for frame", "Press 'P' for pen"], answer: 0, hint: "C activates the commenting cursor." },
      { q: "What happens if you rename a layer between Frame 1 and Frame 2 before using Smart Animate?", options: ["Figma treats them as different layers and dissolves between them instead of morphing geometry", "The animation speeds up 2x", "The prototype crashes", "The layers merge into a single path"], answer: 0, hint: "Mismatched layer names break Smart Animate's shape interpolation." }
    ]
  },

  /* =========================================================================
     TOOL 02: FRAMER (Subsections 6 to 10)
     ========================================================================= */

  // Stage 2.1: Canvas Stacks, Grid Architecture & Layout Wrapping
  {
    tool: "Framer",
    subNumber: 1,
    title: "Canvas Stacks, Grid Architecture & Layout Wrapping",
    goal: "Translate vector concepts into production web layout: Stacks (flexbox), Grids (CSS grid), gap parameters, and auto-wrapping responsive layouts.",
    concepts: [
      "Stacks in Framer compile directly to CSS flexbox containers (`display: flex`). Row stacks set horizontal flow, and Column stacks set vertical flow.",
      "Grid components compile to CSS Grid (`display: grid`) with explicit column counts, row dimensions, and gap tokens.",
      "Dimension sizing modes govern responsive behavior: Fixed (pixels), Relative (percentage of parent), and Fill (consumes available cross/main space).",
      "Layout Wrapping allows horizontal stacks of cards or tags to fold automatically onto subsequent rows as screen width contracts."
    ],
    shortcuts: [
      ["Shift + A", "Add Stack (Flexbox container) around selection"],
      ["R", "Insert responsive Row Stack"],
      ["C", "Insert responsive Column Stack"],
      ["F", "Frame tool with fluid fraction sizing"],
      ["T", "Text tool with semantic heading presets"],
      ["Option + Shift + A", "Remove Stack wrapper while preserving layers"],
      ["Space + Drag", "Pan canvas viewport smoothly"],
      ["Shift + 1", "Zoom to fit all canvas breakpoints"]
    ],
    tricks: [
      "Use '1FR' (Fraction) for sibling card widths inside a Stack with Wrap enabled so cards automatically distribute equally and fold to 1 column on mobile.",
      "Set distribution to 'Space Between' on navigation stacks to push brand logos and CTA buttons to opposing viewport edges automatically.",
      "Combine a Grid component with auto-fit columns (`minmax(280px, 1fr)`) to create a zero-media-query responsive card wall.",
      "Double-click a stack boundary handle to set its sizing to 'Fit Content' so it adapts automatically to dynamic child text."
    ],
    dos: [
      "Use Stacks and Grids for all layout containers instead of placing absolute positioned layers.",
      "Use consistent spatial tokens for gap and padding (8px, 16px, 24px, 32px).",
      "Set text containers to 'Fill' width with 'Fit' height to prevent text overflows.",
      "Group repeating cards inside Stacks with Wrap turned on for automated responsiveness."
    ],
    donts: [
      "Don't pin landing page elements with absolute canvas coordinates; they will collide on alternate aspect ratios.",
      "Don't mix hardcoded fixed pixel widths with responsive fraction columns.",
      "Don't leave empty nested stacks that add redundant DOM wrapper elements to the production page.",
      "Don't use spaces or line breaks to space out buttons; configure Stack gap."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 2.1: Framer Stack (Flexbox) & Grid Compiling Architecture",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / ROW STACK (FLEXBOX)</text>
            <text x="36" y="70" class="svg-label">display: flex; direction: row</text>
            <rect x="36" y="90" width="228" height="60" rx="6" class="svg-frame"/>
            <rect x="46" y="100" width="66" height="40" rx="4" class="svg-stack-row"/>
            <rect x="117" y="100" width="66" height="40" rx="4" class="svg-stack-row"/>
            <rect x="188" y="100" width="66" height="40" rx="4" class="svg-stack-row"/>
            <text x="36" y="180" class="svg-caption">gap: 8px • align: center</text>
            <text x="36" y="198" class="svg-caption">distribute: start / space-between</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / CSS GRID COMPONENT</text>
            <text x="351" y="70" class="svg-label">display: grid; 2x2 Columns</text>
            <rect x="351" y="90" width="108" height="45" rx="4" fill="var(--surface)" stroke="var(--line)"/>
            <rect x="469" y="90" width="108" height="45" rx="4" fill="var(--surface)" stroke="var(--line)"/>
            <rect x="351" y="145" width="108" height="45" rx="4" fill="var(--surface)" stroke="var(--line)"/>
            <rect x="469" y="145" width="108" height="45" rx="4" fill="var(--surface)" stroke="var(--line)"/>
            <text x="351" y="215" class="svg-caption">grid-template-columns: 1fr 1fr</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / 1FR AUTO-FOLDING</text>
            <text x="666" y="70" class="svg-label">Fraction Sizing</text>
            <rect x="666" y="90" width="158" height="34" rx="4" fill="var(--accent)"/>
            <text x="745" y="112" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">1FR Width</text>
            <rect x="666" y="132" width="158" height="34" rx="4" class="svg-stack-row"/>
            <text x="745" y="154" text-anchor="middle" class="svg-stack-text">1FR Width</text>
            <text x="666" y="190" class="svg-caption">Equal column division</text>
            <text x="666" y="208" class="svg-caption">Folds to 100% on mobile</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "What underlying CSS layout model do Framer Stacks compile to?", options: ["CSS Flexbox (display: flex)", "CSS Float (float: left)", "HTML Table cells", "Absolute coordinates"], answer: 0, hint: "Stacks map directly to modern CSS flexbox." },
      { q: "Which shortcut inserts a horizontal Row Stack directly onto the canvas?", options: ["Key 'R'", "Key 'C'", "Key 'S'", "Shift + R"], answer: 0, hint: "R inserts a Row stack." },
      { q: "Which shortcut inserts a vertical Column Stack directly onto the canvas?", options: ["Key 'C'", "Key 'R'", "Shift + C", "Key 'V'"], answer: 0, hint: "C inserts a Column stack." },
      { q: "What unit should sibling cards use inside an auto-wrapping stack to ensure equal fluid widths?", options: ["1FR (Fraction)", "Fixed 320px", "100vw", "1em"], answer: 0, hint: "1FR divides available container space equally." },
      { q: "How do you wrap selected canvas layers into a Stack in Framer?", options: ["Shift + A", "Ctrl / Cmd + G", "Alt + S", "Shift + S"], answer: 0, hint: "Shift + A creates a Stack." },
      { q: "What distribution setting on a horizontal navbar pushes the logo left and CTA right?", options: ["Space Between", "Start", "Center", "Space Around"], answer: 0, hint: "Space Between pushes outer items to boundary edges." },
      { q: "What does setting layer height to 'Fit' do in Framer?", options: ["The layer shrinks or expands vertically to fit its internal content exactly", "It sets height to 100vh", "It clips overflow text", "It locks the layer from editing"], answer: 0, hint: "Fit calculates container height dynamically from children." },
      { q: "Why should you avoid using Absolute positioning for entire landing page layouts in Framer?", options: ["Absolute layers fail to adapt to varying device aspect ratios and trigger overlapping collisions", "Framer deletes absolute layers on publish", "Absolute positioning disables dark mode", "It converts the page to black and white"], answer: 0, hint: "Absolute elements do not participate in document flex flow, breaking on different screens." },
      { q: "What setting allows a horizontal row of tags to wrap onto multiple lines as screen width contracts?", options: ["Wrap: Yes (enabled on the Stack)", "Direction: Column", "Overflow: Hidden", "Position: Sticky"], answer: 0, hint: "Wrap allows flex items to fold onto new lines." },
      { q: "Which tool draws a structural boundary frame with responsive fraction scaling?", options: ["Frame tool (F)", "Pen tool (P)", "Text tool (T)", "Link tool (L)"], answer: 0, hint: "F activates the Frame tool." }
    ]
  },

  // Stage 2.2: Responsive Breakpoints, Cascade & Fluid Units
  {
    tool: "Framer",
    subNumber: 2,
    title: "Responsive Breakpoints, Cascade & Fluid Units",
    goal: "Master responsive production engineering: the desktop-first cascade model, breakpoint overrides, fluid units (%, VW, VH, FR), and typography scaling.",
    concepts: [
      "Framer uses a Desktop-First cascade: styles defined on the Desktop breakpoint (1200px+) cascade down to Tablet (810px) and Phone (390px) automatically.",
      "Overrides are localized: editing a property on Phone only overrides that specific property for Phone without severing parent inheritance for other values.",
      "Fluid Dimension Units (Viewport Width `VW`, Viewport Height `VH`, Fractions `FR`, Percent `%`) allow hero sections and media to adapt smoothly across screen diagonals.",
      "Breakpoints preserve identical DOM structure, ensuring seamless SEO metadata, React hydration, and accessibility."
    ],
    shortcuts: [
      ["1", "Focus Desktop primary breakpoint (1200px+)"],
      ["2", "Focus Tablet breakpoint (810px)"],
      ["3", "Focus Phone mobile breakpoint (390px)"],
      ["Ctrl / Cmd + B", "Add new responsive breakpoint to canvas"],
      ["Option + Click", "Reset breakpoint property override back to inherited value"],
      ["Shift + 2", "Zoom focus to selected breakpoint screen"],
      ["Ctrl / Cmd + Shift + P", "Open isolated floating preview window"],
      ["Ctrl / Cmd + Enter", "Publish live to production edge CDN"]
    ],
    tricks: [
      "Always design on Desktop first; let styles cascade to Tablet and Mobile, then only alter layout directions (e.g. changing a 3-column row to 1-column) on smaller screens.",
      "If you make an accidental styling mistake on Phone, Option/Alt-click the property label in the inspector to instantly reset it back to Desktop inheritance.",
      "Set hero container minimum height to `100VH` with centered flex alignment to guarantee full-screen hero impact across ultra-wide and standard displays.",
      "Use clamp-like fluid typography sizes (e.g., using `min` and `max` limits) so headers scale down cleanly on smaller phones without line wrapping."
    ],
    dos: [
      "Maintain a single DOM structure across breakpoints rather than creating disconnected duplicate mockups.",
      "Change Stack direction from Row (Desktop) to Column (Phone) for responsive multi-column layouts.",
      "Test touch targets on the Phone breakpoint to ensure buttons exceed minimum 44x44px accessibility standards.",
      "Preview changes across all three breakpoints simultaneously using floating preview."
    ],
    donts: [
      "Don't build mobile-first in Framer; Framer's cascade flows strictly desktop-downward.",
      "Don't create separate hidden pages for mobile viewports; use the native Breakpoint system.",
      "Don't hardcode fixed font sizes above 36px on mobile without inspecting character wrap.",
      "Don't delete layers on Phone that Desktop depends on; toggle visibility instead."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 2.2: Framer Desktop-Down Cascade Inheritance Across Breakpoints",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / DESKTOP (PRIMARY ROOT)</text>
            <text x="36" y="70" class="svg-label">1200px+ Viewport</text>
            <rect x="36" y="90" width="228" height="50" rx="6" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.5"/>
            <text x="50" y="112" class="svg-label" font-size="12">Master Style Authority</text>
            <text x="50" y="128" class="svg-caption">All colors, fonts, margins inherit down</text>
            <text x="36" y="180" class="svg-caption">• 3-Column Grid Layout</text>
            <text x="36" y="198" class="svg-caption">• 48px Header Typography</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="240" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / TABLET OVERRIDE</text>
            <text x="351" y="70" class="svg-label">810px - 1199px Viewport</text>
            <rect x="351" y="90" width="208" height="50" rx="6" class="svg-stack-row"/>
            <text x="365" y="112" class="svg-label" font-size="12">Inherited + Selective Overrides</text>
            <text x="365" y="128" class="svg-caption">Inherits Desktop colors &amp; copy</text>
            <text x="351" y="180" class="svg-caption">• Override: 2-Column Grid</text>
            <text x="351" y="198" class="svg-caption">• Override: 36px Header Size</text>

            <path d="M 580 130 L 620 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="620,126 628,130 620,134" class="svg-arrowhead"/>

            <rect x="630" y="20" width="210" height="220" rx="8" class="svg-box"/>
            <text x="646" y="48" class="svg-caption">03 / PHONE OVERRIDE</text>
            <text x="646" y="70" class="svg-label">390px - 809px Viewport</text>
            <rect x="646" y="90" width="178" height="50" rx="6" class="svg-stack-row"/>
            <text x="658" y="112" class="svg-label" font-size="12">Mobile Display Tuning</text>
            <text x="658" y="128" class="svg-caption">Inherits Tablet overrides</text>
            <text x="646" y="180" class="svg-caption">• Override: 1-Column 100%</text>
            <text x="646" y="198" class="svg-caption">• Override: Hamburger Menu</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "What is the architectural cascade direction across breakpoints in Framer?", options: ["Desktop-first: Desktop is master; Tablet and Phone inherit styles down", "Mobile-first: Phone cascades upward to Desktop", "Breakpoints are completely isolated and share zero inheritance", "Tablet-first: Tablet cascades outward"], answer: 0, hint: "Framer implements a desktop-down inheritance hierarchy." },
      { q: "Which shortcut focuses the canvas directly on the Phone (390px) breakpoint?", options: ["Key '3'", "Key '1'", "Key 'M'", "Shift + 3"], answer: 0, hint: "1 is Desktop, 2 is Tablet, 3 is Phone." },
      { q: "How can you instantly reset a property override on Phone back to its inherited Desktop value?", options: ["Option / Alt-click the property label in the right inspector", "Delete the breakpoint", "Refresh the browser tab", "Press Cmd + Z twenty times"], answer: 0, hint: "Alt/Option-clicking an overridden property restores inheritance." },
      { q: "What unit sizes an element relative to the full viewport height?", options: ["VH (Viewport Height)", "VW (Viewport Width)", "% (Percentage)", "PT (Points)"], answer: 0, hint: "100VH matches 100% of the browser viewport height." },
      { q: "How should a 3-column desktop layout respond on mobile phones?", options: ["Change the parent Stack direction from Row to Column (1-column stack)", "Shrink the cards to 50px width each", "Hide the cards completely", "Export the layout as a static picture"], answer: 0, hint: "Switching Stack direction to Column stacks items vertically on mobile." },
      { q: "Which shortcut opens the isolated floating preview window in Framer?", options: ["Ctrl / Cmd + Shift + P", "Ctrl / Cmd + P", "Spacebar", "Alt + Shift + Enter"], answer: 0, hint: "Cmd/Ctrl + Shift + P opens the floating window preview." },
      { q: "What happens if you alter a color on the Desktop breakpoint?", options: ["The new color cascades down to Tablet and Phone automatically, unless overridden", "Only Desktop updates; mobile stays unchanged", "The color resets to black", "The project publishes immediately"], answer: 0, hint: "Desktop updates flow down to all inherited child breakpoints." },
      { q: "What minimum touch target size should buttons maintain on the Phone breakpoint?", options: ["At least 44x44px", "At least 12x12px", "Exactly 100x100px", "No minimum size"], answer: 0, hint: "WCAG recommends at least 44x44px for reliable mobile tapping." },
      { q: "What shortcut adds a new responsive breakpoint to the Framer canvas?", options: ["Ctrl / Cmd + B", "Shift + B", "Alt + B", "Key 'B'"], answer: 0, hint: "Cmd/Ctrl + B creates a new breakpoint." },
      { q: "Why should you avoid creating separate independent pages for mobile users in Framer?", options: ["Because native Breakpoints maintain a single DOM tree, preserving SEO and React state", "Because mobile pages cost extra hosting fees", "Because Framer only allows one page per project", "Because Google bans websites with mobile pages"], answer: 0, hint: "Breakpoints maintain DOM continuity, fast hydration, and organic SEO authority." }
    ]
  },

  // Stage 2.3: Scroll Transforms & Viewport Triggers
  {
    tool: "Framer",
    subNumber: 3,
    title: "Scroll Transforms & Viewport Triggers",
    goal: "Author cinematic scroll-driven web experiences: scroll sections, scroll speed parallax, transform interpolation, and sticky positioning.",
    concepts: [
      "Scroll Transforms interpolate element properties (Opacity, Scale, Rotation, X/Y translation) based on viewport scroll progress (0% -> 100%).",
      "Scroll Speed creates layered parallax depth by accelerating or decelerating an element's scroll rate relative to page flow.",
      "Scroll Section Identifiers anchor internal page jumps and trigger active navbar states via native IntersectionObserver events.",
      "Sticky positioning pins an element within its parent container while the parent scrolls through the viewport."
    ],
    shortcuts: [
      ["Option + Cmd + L", "Attach Link target or scroll section anchor"],
      ["Ctrl / Cmd + Enter", "Publish to production CDN edge"],
      ["Shift + S", "Open Scroll Transform property configuration"],
      ["F", "Frame tool to draw scroll boundary containers"],
      ["Space + Drag", "Pan through long scrolling pages on canvas"],
      ["Shift + 2", "Zoom selection to check sticky pin bounds"],
      ["Option + Drag", "Duplicate scroll triggers across sections"],
      ["Shift + P", "Toggle page preview mode"]
    ],
    tricks: [
      "If Position: Sticky refuses to stick, inspect every ancestor frame; if any parent has `Overflow: Hidden`, sticky calculation is broken. Set to `Visible`.",
      "Assign Section IDs (e.g. `features`, `pricing`) to root frames to enable buttery-smooth navigation jumps with active menu state highlighting.",
      "Use Scroll Transforms to map 0% -> 100% scroll progress to `Y: 40px -> 0px` and `Opacity: 0 -> 1` for elegant hero fade-in reveals.",
      "Wrap sticky sidebars inside a parent column whose height matches the main content container to define precise unpin boundaries."
    ],
    dos: [
      "Keep parent frame Overflow set to 'Visible' when using Position: Sticky.",
      "Use Spring physics curves on scroll transforms to avoid robotic linear movement.",
      "Verify scroll transforms perform smoothly on low-power mobile devices.",
      "Set descriptive Section IDs for clear navigation anchor links."
    ],
    donts: [
      "Don't stack dozens of heavy spring transforms on a single mobile viewport; it causes scroll lag.",
      "Don't set extreme scroll speed parallax values that cause elements to overlap adjacent text.",
      "Don't apply Overflow: Hidden to the body container.",
      "Don't forget to test scroll position on mobile Safari where URL bars collapse."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 2.3: Viewport Scroll Progress Mapping & Sticky Boundary Physics",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / SCROLL PROGRESS (0-100%)</text>
            <text x="36" y="70" class="svg-label">Viewport Intersection Mapping</text>
            <rect x="36" y="90" width="228" height="50" rx="6" fill="var(--surface)" stroke="var(--line)"/>
            <rect x="42" y="96" width="114" height="38" rx="4" fill="var(--accent)"/>
            <text x="99" y="120" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">50% Viewport</text>
            <text x="36" y="175" class="svg-caption">Scroll Offset: [0% -> 100%]</text>
            <text x="36" y="195" class="svg-caption">Drives property interpolation</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / TRANSFORM VALUES</text>
            <text x="351" y="70" class="svg-label">Property Interpolation</text>
            <rect x="351" y="90" width="228" height="120" rx="6" class="svg-stack-row"/>
            <text x="365" y="112" class="svg-label" font-size="12">Target Outputs:</text>
            <text x="365" y="132" class="svg-caption">• Opacity: 0.2 -> 1.0</text>
            <text x="365" y="150" class="svg-caption">• Scale: 0.95 -> 1.00</text>
            <text x="365" y="168" class="svg-caption">• Y-Offset: +50px -> 0px</text>
            <text x="365" y="186" class="svg-caption">• Easing: Spring (damping: 30)</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / POSITION: STICKY</text>
            <text x="666" y="70" class="svg-label">Pinned Header/Sidebar</text>
            <rect x="666" y="90" width="158" height="34" rx="4" fill="var(--accent)"/>
            <text x="745" y="112" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">Pinned: Top: 0px</text>
            <rect x="666" y="130" width="158" height="60" rx="4" class="svg-frame"/>
            <text x="678" y="152" class="svg-caption">Parent Container</text>
            <text x="678" y="170" class="svg-caption">Overflow: Visible</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "Why does an element set to Position: Sticky fail to stick during page scrolling?", options: ["An ancestor parent frame has Overflow set to Hidden", "Framer only supports sticky on Android", "The element needs a custom CSS script", "The user is using a trackpad"], answer: 0, hint: "Any parent frame with Overflow: Hidden destroys sticky calculation." },
      { q: "What does Scroll Transform do in Framer?", options: ["It interpolates properties like opacity, scale, and position based on viewport scroll progress", "It translates text into foreign languages during scroll", "It hides the navbar permanently", "It reloads the webpage on scroll"], answer: 0, hint: "Scroll transforms tie visual properties to scroll distance." },
      { q: "How do you create smooth anchor navigation jumps to specific sections of a page?", options: ["Assign a unique Section ID to the target frame and link to it", "Create separate URL routes for every paragraph", "Use an iframe embed", "Copy the entire page into a modal"], answer: 0, hint: "Section IDs allow direct smooth scrolling from nav links." },
      { q: "What scroll effect causes background graphics to move slower than foreground text to create depth?", options: ["Parallax (Scroll Speed adjustment)", "Sticky positioning", "Frame clipping", "Component variant swap"], answer: 0, hint: "Parallax creates depth by varying relative scroll velocities." },
      { q: "What should ancestor container Overflow be set to when using Position: Sticky?", options: ["Visible", "Hidden", "Scroll", "Auto-clip"], answer: 0, hint: "Overflow must be Visible for sticky coordinates to calculate." },
      { q: "Which shortcut attaches a link or section anchor to a selected element?", options: ["Option + Cmd + L (Alt + Ctrl + L)", "Shift + L", "Ctrl + K", "Cmd + Shift + U"], answer: 0, hint: "Cmd/Ctrl + Option/Alt + L opens the link target popover." },
      { q: "What spring parameter controls the bounciness and stabilization speed of scroll animations?", options: ["Damping", "Font weight", "Border radius", "Opacity"], answer: 0, hint: "Damping resists oscillation in spring physics equations." },
      { q: "Where does an element set to Position: Sticky stop sticking as the page scrolls?", options: ["When it reaches the bottom boundary edge of its direct parent container", "It never stops sticking and follows the user forever", "At the 50% midpoint of the browser", "When the cursor leaves the window"], answer: 0, hint: "Sticky elements unpin when their parent container scrolls out of view." },
      { q: "What happens if you stack dozens of complex spring scroll transforms on a mobile device?", options: ["It can trigger frame rate drops and excessive battery consumption", "The phone turns off automatically", "Framer blocks publication", "The text turns upside down"], answer: 0, hint: "Excessive simultaneous spring transforms tax mobile GPU/CPU threads." },
      { q: "What observer API does Framer utilize under the hood for scroll triggers?", options: ["Native IntersectionObserver", "WebSockets API", "LocalStorage API", "Canvas 2D API"], answer: 0, hint: "IntersectionObserver is the performant browser standard for viewport triggers." }
    ]
  },

  // Stage 2.4: Interactive Variants & Spring Physics
  {
    tool: "Framer",
    subNumber: 4,
    title: "Interactive Variants & Spring Physics",
    goal: "Build tangible interactive micro-states: Hover, Pressed, and active variants powered by Framer's physics-based spring engine.",
    concepts: [
      "Component Variants represent discrete interactive states (Default, Hover, Pressed) that compile to stateful React components.",
      "Framer's Spring Physics engine uses real mass, stiffness, and damping equations rather than stiff duration-based cubic-bezier curves.",
      "Variant Interactions trigger state changes on event hooks: On Hover, On Press, On Click, and While In View.",
      "Transition inheritance allows fine-grained control: you can customize spring transitions on individual properties (e.g. scale springy, opacity smooth)."
    ],
    shortcuts: [
      ["Option + Cmd + K", "Convert canvas frame into an Interactive Component"],
      ["Shift + Enter", "Select parent component container"],
      ["Ctrl / Cmd + D", "Add a new variant state to component set"],
      ["Ctrl / Cmd + Shift + P", "Open interactive preview to test hover states"],
      ["Tab", "Cycle through interactive variant controls"],
      ["Shift + I", "Insert interactive component instance"],
      ["Ctrl / Cmd + Enter", "Publish live build to production CDN edge"],
      ["Space + Drag", "Pan around component variant canvas"]
    ],
    tricks: [
      "Set button 'Pressed' state to `Scale: 0.97` with a stiff spring (mass: 1, stiffness: 400, damping: 30) for a tactile, physical push feel.",
      "Build a single reusable navigation bar component with Hover and Active variant states rather than wiring interactions on every page mockup.",
      "Use 'While In View' variant triggers to fire entrance animations only when the card enters the user's browser viewport.",
      "Add an interaction on a button variant that transitions to a 'Loading' spinner state upon click for realistic checkout flows."
    ],
    dos: [
      "Use Spring physics for tactile UI elements like buttons, switches, and dropdowns.",
      "Configure 'Hover' and 'Pressed' states on all primary call-to-action buttons.",
      "Keep damping values between 25 and 35 to prevent sloppy, over-bouncing UI elements.",
      "Preview interactive components in isolation using the floating preview window."
    ],
    donts: [
      "Don't use stiff linear transitions for interactive button hover animations.",
      "Don't create 20 separate page mockups when an Interactive Component can handle micro-states.",
      "Don't set extreme spring stiffness that causes visual flickering on low-power devices.",
      "Don't forget to configure keyboard focus outlines for accessible web standards."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 2.4: Framer Component Variant State Machine & Spring Curve Dynamics",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / VARIANT STATE MACHINE</text>
            <text x="36" y="70" class="svg-label">React Component States</text>
            <rect x="36" y="90" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="50" y="112" class="svg-stack-text">State: Default (Resting)</text>
            <rect x="36" y="130" width="228" height="34" rx="4" fill="var(--accent)"/>
            <text x="150" y="152" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">State: Hover (Cursor Enter)</text>
            <rect x="36" y="170" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="50" y="192" class="svg-stack-text">State: Pressed (Scale: 0.97)</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / SPRING PHYSICS EQUATION</text>
            <text x="351" y="70" class="svg-label">Tactile Organic Response</text>
            <path d="M 355 180 Q 400 70 440 150 T 520 125 T 575 130" stroke="var(--accent)" stroke-width="2.5" fill="none"/>
            <text x="351" y="205" class="svg-caption">Parameters: Mass: 1, Stiffness: 350</text>
            <text x="351" y="222" class="svg-caption">Damping: 28 (Stabilizes oscillation)</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / EVENT TRIGGERS</text>
            <text x="666" y="70" class="svg-label">Hook Actions</text>
            <rect x="666" y="90" width="158" height="28" rx="4" class="svg-stack-row"/>
            <text x="678" y="109" class="svg-caption">• While Hovering</text>
            <rect x="666" y="124" width="158" height="28" rx="4" class="svg-stack-row"/>
            <text x="678" y="143" class="svg-caption">• While Pressing</text>
            <rect x="666" y="158" width="158" height="28" rx="4" class="svg-stack-row"/>
            <text x="678" y="177" class="svg-caption">• On Viewport Enter</text>
            <text x="666" y="210" class="svg-caption">Compiles to React handlers</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "What shortcut converts a standard canvas frame into an Interactive Component in Framer?", options: ["Option + Cmd + K (Alt + Ctrl + K)", "Shift + K", "Cmd + G", "Alt + Shift + C"], answer: 0, hint: "Command/Ctrl + Option/Alt + K creates an interactive component." },
      { q: "What parameters define Framer's physics-based Spring transition engine?", options: ["Mass, Stiffness, and Damping", "Ease-in, Ease-out, and Step-end", "Red, Green, and Blue", "Pixels, Rem, and Em"], answer: 0, hint: "Springs calculate motion from mass, stiffness, and damping." },
      { q: "What does setting a button's 'Pressed' state to Scale: 0.97 achieve?", options: ["A tactile, physical push-down feedback sensation on click", "It deletes the button text", "It converts the button to an image", "It causes the page to scroll to top"], answer: 0, hint: "Subtle scale reduction provides physical tactile feedback." },
      { q: "Which event trigger animates an element only when it scrolls into the user's visible viewport?", options: ["While In View", "On Hover", "On Keydown", "On Page Exit"], answer: 0, hint: "'While In View' fires when the element enters the visible screen." },
      { q: "What role does Damping play in a spring physics transition?", options: ["It provides friction to prevent the animation from oscillating endlessly", "It increases color brightness", "It speeds up network asset downloads", "It rotates the element 360 degrees"], answer: 0, hint: "Damping controls how quickly spring bounces settle down." },
      { q: "How do you preview an interactive component's hover states without publishing?", options: ["Press Ctrl / Cmd + Shift + P to open the floating preview window", "Download the site source code", "Print the design onto paper", "Export to PDF"], answer: 0, hint: "Cmd/Ctrl + Shift + P opens the interactive preview window." },
      { q: "Why are spring transitions preferred over linear transitions for interactive UI buttons?", options: ["They mimic natural physical inertia and feel more organic and responsive", "They are 100% linear and robotic", "They disable browser GPU acceleration", "They only work on desktop monitors"], answer: 0, hint: "Springs replicate physical momentum and elasticity." },
      { q: "Can you configure different transition parameters for individual properties (e.g. scale vs opacity) in Framer?", options: ["Yes, Framer supports per-property transition overrides", "No, all properties must use the exact same curve", "Only if written in C++", "Only on the mobile breakpoint"], answer: 0, hint: "Framer allows granular spring settings for each animated property." },
      { q: "What event trigger fires when the user releases the mouse button outside a pressed element?", options: ["Hover state restores without triggering Click action", "The computer restarts", "The page crashes", "The text turns transparent"], answer: 0, hint: "Standard web interaction cancels click when released off-target." },
      { q: "What is an Interactive Component in Framer under the hood?", options: ["A stateful React component with event listeners and spring animations", "A static raster image file", "An uneditable video loop", "An external WordPress widget"], answer: 0, hint: "Framer compiles interactive components directly into React components." }
    ]
  },

  // Stage 2.5: CMS Collections & Code Overrides
  {
    tool: "Framer",
    subNumber: 5,
    title: "CMS Collections & Code Overrides",
    goal: "Scale dynamic content and custom functionality: CMS schema architecture, formatted rich text, dynamic detail page routing, and React TypeScript Code Overrides.",
    concepts: [
      "Framer CMS Collections store structured content (Text, Rich Text, Images, Numbers, Dates, Booleans) that power repeatable grids, blogs, and product catalogs.",
      "Dynamic Page Templates generate hundreds of unique programmatic URLs (e.g. `/blog/:slug`) from a single layout design bound to CMS fields.",
      "Code Overrides are lightweight React TypeScript functions that attach custom state, localStorage reads/writes, or third-party tracking to canvas layers.",
      "Code Components allow developers to write pure React TSX components with custom props inspectable in the Framer canvas sidebar."
    ],
    shortcuts: [
      ["Option + Cmd + O", "Open TypeScript Code Editor in Framer"],
      ["Shift + C", "Open CMS Collections management panel"],
      ["Ctrl / Cmd + Enter", "Publish dynamic CMS updates to global CDN"],
      ["Shift + 1", "Zoom canvas to fit detail template and collection view"],
      ["Option + Click", "Inspect dynamic CMS field binding on layer"],
      ["Ctrl / Cmd + S", "Save code override file"],
      ["Ctrl / Cmd + Shift + P", "Preview dynamic CMS item detail page"],
      ["Tab", "Cycle through CMS collection table cells"]
    ],
    tricks: [
      "Create a 'Featured' boolean toggle in your CMS schema, then filter your homepage collection grid to only display items where `Featured == True`.",
      "Attach a simple Code Override to a button to sync shopping cart counts or bookmark state to `localStorage` without a backend server.",
      "Use Formatted Text fields in CMS items to allow non-technical authors to insert headings, blockquotes, and code blocks with automated typography styles.",
      "Filter CMS grids by dynamic URL search parameters or tags using a 5-line TypeScript Code Override."
    ],
    dos: [
      "Use CMS Collections for any repeating data (team profiles, portfolio cases, blog articles).",
      "Set unique URL slugs for all CMS items for SEO indexing.",
      "Use TypeScript Code Overrides when standard canvas visual interactions fall short.",
      "Optimize images uploaded into CMS collections to preserve fast LCP scores."
    ],
    donts: [
      "Don't build 20 static canvas pages manually for a blog; use one dynamic CMS Detail Page.",
      "Don't write heavy backend API calls inside code overrides that block main thread rendering.",
      "Don't leave empty CMS fields without configured fallback defaults.",
      "Don't ignore SEO metadata fields (title, description, social image) in CMS item settings."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 2.5: CMS Collection Data Binding & TypeScript Code Override Flow",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / CMS COLLECTION SCHEMA</text>
            <text x="36" y="70" class="svg-label">Structured Content Store</text>
            <rect x="36" y="90" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="50" y="112" class="svg-stack-text">Field: title (String)</text>
            <rect x="36" y="130" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="50" y="152" class="svg-stack-text">Field: thumbnail (Image)</text>
            <rect x="36" y="170" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="50" y="192" class="svg-stack-text">Field: slug (URL Key)</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / DYNAMIC DETAIL PAGE</text>
            <text x="351" y="70" class="svg-label">Route: /blog/:slug</text>
            <rect x="351" y="90" width="228" height="110" rx="6" class="svg-frame"/>
            <rect x="365" y="100" width="200" height="40" rx="4" class="svg-stack-row"/>
            <text x="375" y="125" class="svg-label" font-size="12">{item.title}</text>
            <rect x="365" y="148" width="200" height="40" rx="4" fill="var(--surface)" stroke="var(--line)"/>
            <text x="375" y="172" class="svg-caption">{item.formattedBody}</text>
            <text x="351" y="218" class="svg-caption">1 Template powers 100+ pages</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / CODE OVERRIDES</text>
            <text x="666" y="70" class="svg-label">Custom React Hooks</text>
            <rect x="666" y="90" width="158" height="85" rx="4" class="svg-stack-row"/>
            <text x="678" y="110" class="svg-caption" fill="var(--accent)">withLocalStorage(Component) {</text>
            <text x="688" y="126" class="svg-caption">const [val, setVal] = ...</text>
            <text x="688" y="142" class="svg-caption">return &lt;Component .../&gt;</text>
            <text x="678" y="158" class="svg-caption">}</text>
            <text x="666" y="195" class="svg-caption">Custom TypeScript power</text>
            <text x="666" y="212" class="svg-caption">Full React ecosystem</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "What is the primary role of CMS Collections in Framer?", options: ["To store structured content that powers dynamic repeating grids and detail pages", "To run cryptocurrency miners", "To export video animations", "To replace browser history"], answer: 0, hint: "CMS collections store structured data for dynamic websites." },
      { q: "How many pages can a single Framer CMS Detail Page Template generate?", options: ["As many pages as there are items in the linked CMS collection", "Exactly 1 page only", "A maximum of 5 pages", "Zero pages"], answer: 0, hint: "One template dynamically routes and renders every collection item." },
      { q: "What is a Code Override in Framer?", options: ["A TypeScript higher-order function that attaches custom React state or events to canvas layers", "A plugin that deletes CSS files", "A hack to bypass browser security", "A tool for editing raster photos"], answer: 0, hint: "Code overrides attach custom React props and logic to visual layers." },
      { q: "Which shortcut opens Framer's built-in TypeScript code editor?", options: ["Option + Cmd + O (Alt + Ctrl + O)", "Shift + C", "Ctrl + Shift + E", "Cmd + T"], answer: 0, hint: "Cmd/Ctrl + Option/Alt + O opens the code editor." },
      { q: "How do you filter a CMS collection list on the homepage to display only featured items?", options: ["Add a Boolean field 'Featured' to the collection and set a filter rule in the list inspector", "Delete all non-featured items from the database", "Create a separate website", "Apply a blur filter"], answer: 0, hint: "Filters allow conditional display based on schema fields." },
      { q: "What field type in Framer CMS handles long-form articles with headers, quotes, and links?", options: ["Formatted Text (Rich Text)", "Number field", "Color field", "Boolean field"], answer: 0, hint: "Formatted text stores rich markdown-like editorial content." },
      { q: "Where can you persist user shopping cart items or bookmark states in Framer without a server?", options: ["In the browser's localStorage using a React Code Override", "In a CSS variable", "In a JPG image file", "In the URL hash tag"], answer: 0, hint: "Browser localStorage stores client state reliably across sessions." },
      { q: "What attribute ensures each CMS detail page has a unique search-engine-friendly URL?", options: ["The Slug field (e.g. /blog/:slug)", "The font size", "The background color", "The creation timestamp in milliseconds"], answer: 0, hint: "Slugs define semantic URL paths for each item." },
      { q: "What is the difference between a Code Component and a Code Override in Framer?", options: ["Code Components write custom JSX markup from scratch; Overrides attach logic to existing canvas layers", "They are identical in every way", "Code Overrides only work in Figma", "Code Components cannot take props"], answer: 0, hint: "Components create new custom DOM; overrides enhance existing canvas layers." },
      { q: "What should you configure for every CMS item to maintain high Google SEO search rankings?", options: ["SEO Title, Meta Description, and Social Share Image in page settings", "Only the author's initials", "A 10MB video file", "Disable all heading tags"], answer: 0, hint: "Page meta tags and social share images are essential for SEO." }
    ]
  },

  /* =========================================================================
     TOOL 03: SPLINE (Subsections 11 to 15)
     ========================================================================= */

  // Stage 3.1: Viewport Navigation & Coordinate Rigs
  {
    tool: "Spline",
    subNumber: 1,
    title: "Viewport Navigation & Coordinate Rigs",
    goal: "Master real-time 3D spatial orientation: right-handed Cartesian coordinates (X, Y, Z), camera projections, orbit pivots, and viewport navigation.",
    concepts: [
      "Spline operates in right-handed 3D coordinate space: +X is horizontal width (Red), +Y is vertical height (Green), and +Z is depth toward the camera (Blue).",
      "Camera Projection options include Perspective (realistic vanishing points with Field of View `FOV`) and Orthographic (isometric parallel projection without perspective distortion).",
      "Camera Orbit pivots around the scene origin (0, 0, 0) or the bounding center of the currently selected 3D geometry.",
      "Viewport Navigation enables spatial translation, rotation, and distance panning in real-time WebGL space."
    ],
    shortcuts: [
      ["Option + Left Click Drag (Alt+Drag)", "Orbit virtual camera around scene target"],
      ["Space + Drag", "Pan viewport camera along screen plane"],
      ["Mouse Wheel / Pinch", "Zoom camera closer or farther along view vector"],
      ["1", "Snap camera to Orthographic Front view"],
      ["2", "Snap camera to Orthographic Top view"],
      ["3", "Snap camera to Orthographic Right view"],
      ["Shift + C", "Center camera viewport onto current scene origin"],
      ["F", "Focus and frame selected 3D object in viewport center"]
    ],
    tricks: [
      "Press 'F' with any 3D object selected to immediately center the viewport camera and set that object's pivot as your new orbit anchor point.",
      "Switch to Orthographic Top view (key 2) when arranging layout grids of 3D objects to guarantee zero perspective alignment errors.",
      "Set your primary camera FOV between 35° and 45° for modern product renders; wide angles above 70° cause spherical edge distortion.",
      "Lock background cameras to prevent accidental camera moves while styling foreground models."
    ],
    dos: [
      "Use Orthographic snap views (1, 2, 3) to verify geometric alignment along specific planes.",
      "Set sensible camera clipping planes (Near: 1, Far: 5000) to avoid z-fighting rendering glitches.",
      "Keep scene origin (0,0,0) as the primary focal center of your product showcase.",
      "Name 3D objects and cameras clearly in the left scene outliner."
    ],
    donts: [
      "Don't model complex scenes without checking top and side orthographic views.",
      "Don't place primary 3D objects thousands of units away from origin; it causes camera clipping.",
      "Don't leave extreme camera FOV angles (e.g. 110°) on product models; it distorts proportions.",
      "Don't orbit by holding left click alone without the Option/Alt modifier."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 3.1: 3D Right-Handed Coordinate System & Camera Projections",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / CARTESIAN COORDINATE AXES</text>
            <text x="36" y="70" class="svg-label">Right-Handed Space</text>
            <g transform="translate(150, 140)">
              <line x1="0" y1="0" x2="70" y2="0" stroke="#EF4444" stroke-width="2.5"/>
              <polygon points="70,-4 76,0 70,4" fill="#EF4444"/>
              <text x="80" y="4" fill="#EF4444" class="svg-caption" font-weight="700">+X (Width)</text>
              <line x1="0" y1="0" x2="0" y2="-65" stroke="#10B981" stroke-width="2.5"/>
              <polygon points="-4,-65 0,-71 4,-65" fill="#10B981"/>
              <text x="-8" y="-76" fill="#10B981" class="svg-caption" font-weight="700">+Y (Height)</text>
              <line x1="0" y1="0" x2="-40" y2="40" stroke="#3B82F6" stroke-width="2.5"/>
              <polygon points="-40,35 -46,46 -34,42" fill="#3B82F6"/>
              <text x="-85" y="55" fill="#3B82F6" class="svg-caption" font-weight="700">+Z (Depth)</text>
              <circle cx="0" cy="0" r="4" fill="var(--ink)"/>
            </g>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / PROJECTION MODES</text>
            <text x="351" y="70" class="svg-label">Perspective vs Orthographic</text>
            <rect x="351" y="90" width="228" height="50" rx="4" class="svg-stack-row"/>
            <text x="365" y="112" class="svg-label" font-size="12">Perspective Camera (FOV 45°)</text>
            <text x="365" y="128" class="svg-caption">Realistic depth with vanishing points</text>
            <rect x="351" y="146" width="228" height="50" rx="4" class="svg-stack-row"/>
            <text x="365" y="168" class="svg-label" font-size="12">Orthographic (Parallel)</text>
            <text x="365" y="184" class="svg-caption">Zero perspective distortion</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / VIEWPORT NAVIGATION</text>
            <text x="666" y="70" class="svg-label">Keystroke Map</text>
            <rect x="666" y="90" width="158" height="30" rx="4" class="svg-stack-row"/>
            <text x="676" y="110" class="svg-caption">Alt + Drag: Orbit</text>
            <rect x="666" y="126" width="158" height="30" rx="4" class="svg-stack-row"/>
            <text x="676" y="146" class="svg-caption">Space + Drag: Pan</text>
            <rect x="666" y="162" width="158" height="30" rx="4" class="svg-stack-row"/>
            <text x="676" y="182" class="svg-caption">Key 'F': Frame Focus</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "What color universally represents the horizontal X axis in Spline's 3D coordinate system?", options: ["Red", "Green", "Blue", "Yellow"], answer: 0, hint: "RGB maps directly to XYZ: Red is X, Green is Y, Blue is Z." },
      { q: "What color represents the vertical Y height axis in Spline?", options: ["Green", "Red", "Blue", "Purple"], answer: 0, hint: "Green corresponds to the vertical Y axis." },
      { q: "Which shortcut orbits the camera around your 3D target in the Spline viewport?", options: ["Option + Left Click Drag (Alt + Drag)", "Shift + Space", "Ctrl + D", "Double click"], answer: 0, hint: "Holding Option/Alt with left click rotates the camera orbit." },
      { q: "Which key snaps the viewport camera directly to an Orthographic Top view?", options: ["Key '2'", "Key '1'", "Key '3'", "Key '0'"], answer: 0, hint: "1 is Front, 2 is Top, 3 is Right." },
      { q: "What key centers and frames the camera directly onto the currently selected 3D mesh?", options: ["Key 'F'", "Key 'C'", "Key 'Z'", "Key 'Space'"], answer: 0, hint: "F frames and focuses on the selected object." },
      { q: "How does an Orthographic camera projection differ from Perspective projection?", options: ["Orthographic renders parallel lines without perspective vanishing distortion", "Orthographic only displays black and white wireframes", "Orthographic disables all lighting", "Orthographic runs at 10fps"], answer: 0, hint: "Orthographic views eliminate depth perspective distortion." },
      { q: "How do you pan the camera along the screen plane without changing rotation angle?", options: ["Spacebar + Left Click Drag", "Option + Click", "Cmd + Scroll", "Shift + X"], answer: 0, hint: "Holding Spacebar and dragging pans the camera plane." },
      { q: "What Field of View (FOV) range is recommended for realistic modern 3D product showcases?", options: ["35° to 45°", "120° to 150°", "5° to 10°", "Above 170°"], answer: 0, hint: "35°-45° matches realistic focal lengths without wide-angle fish-eye warping." },
      { q: "What does the Z axis represent in right-handed 3D coordinate space?", options: ["Depth toward or away from the camera viewpoint", "Vertical height", "Color saturation", "Sound volume"], answer: 0, hint: "Z is the depth axis perpendicular to screen width and height." },
      { q: "What shortcut resets and centers the camera view onto the scene origin (0,0,0)?", options: ["Shift + C", "Ctrl + R", "Alt + 0", "Cmd + Home"], answer: 0, hint: "Shift + C centers the camera on scene origin." }
    ]
  },

  // Stage 3.2: Polygon Modeling, Parametric Modifiers & Boolean Geometry
  {
    tool: "Spline",
    subNumber: 2,
    title: "Polygon Modeling, Parametric Modifiers & Boolean Geometry",
    goal: "Build custom 3D assets: primitives, parametric extrusions, bevel curves, mesh subdivision, and non-destructive boolean operations.",
    concepts: [
      "Parametric Primitives (Cubes, Spheres, Cylinders, Toruses) allow numeric adjustment of radius, corner rounding, and segment density before conversion.",
      "Extrusion and Lathe modifiers generate 3D solids from flat 2D vector spline paths with customized bevel depth and curve profiles.",
      "Boolean Operations (Union, Difference, Intersection) combine intersecting 3D geometries into complex consolidated forms.",
      "Polygon Budgets: keeping triangle counts low (<25,000 for entire web scenes) prevents frame drops on mobile WebGL canvas runtimes."
    ],
    shortcuts: [
      ["G", "Translate / Move gizmo along X, Y, Z axes"],
      ["R", "Rotate gizmo (pitch, yaw, roll)"],
      ["S", "Scale gizmo (uniform or axial)"],
      ["Ctrl / Cmd + J", "Join / Boolean meshes together"],
      ["Shift + D", "Duplicate linked mesh instance sharing geometry memory"],
      ["Shift + W", "Toggle wireframe mesh mode to audit polygon density"],
      ["Tab", "Toggle Edit Mode for polygon vertex/edge manipulation"],
      ["E", "Extrude selected 2D curve into 3D volume"]
    ],
    tricks: [
      "Keep primitive segment subdivisions minimal (e.g. 16-24 segments on a cylinder instead of 64); smooth shading hides facets without multiplying polygons.",
      "Use 'Shift + D' to create linked clones of repeated elements (like screws, trees, or buttons) so they share a single GPU vertex buffer in WebGL.",
      "Apply Bevel modifiers on hard edges; sharp 90-degree computer edges never catch natural light highlights in reality.",
      "Audit your scene topology by toggling Wireframe mode (`Shift + W`) to verify you don't have invisible interior faces wasting draw calls."
    ],
    dos: [
      "Add subtle beveling or corner radius to hard edges to catch specular lighting highlights.",
      "Keep scene polygon counts under 25,000 triangles for responsive web embeds.",
      "Use linked instances (Shift+D) for repeating scene elements.",
      "Clean up internal unseen geometry after performing boolean operations."
    ],
    donts: [
      "Don't subdivide sphere primitives to 128 segments; it wastes thousands of polygons for negligible visual gain.",
      "Don't import unoptimized high-poly CAD models (>100k polygons) directly into web 3D scenes.",
      "Don't leave non-manifold geometry or overlapping co-planar faces that trigger z-fighting visual artifacts.",
      "Don't forget to center object pivot points after boolean carving."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 3.2: Parametric Primitive Modeling & Boolean Carving Pipeline",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / PARAMETRIC PRIMITIVE</text>
            <text x="36" y="70" class="svg-label">Low-Poly Mesh with Bevel</text>
            <rect x="70" y="95" width="130" height="85" rx="14" fill="var(--surface)" stroke="var(--accent)" stroke-width="2"/>
            <text x="135" y="142" text-anchor="middle" class="svg-label" font-size="12">Beveled Cube</text>
            <text x="36" y="195" class="svg-caption">Corner Radius: 12px</text>
            <text x="36" y="212" class="svg-caption">Catches specular rim light</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / BOOLEAN DIFFERENCE</text>
            <text x="351" y="70" class="svg-label">Carving &amp; Union Merges</text>
            <rect x="375" y="95" width="100" height="80" rx="8" class="svg-stack-row"/>
            <circle cx="475" cy="135" r="35" fill="none" stroke="var(--accent)" stroke-dasharray="4 4"/>
            <text x="351" y="195" class="svg-caption">Mesh A subtracts Mesh B</text>
            <text x="351" y="212" class="svg-caption">Creates holes &amp; cutouts</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / POLYGON BUDGET</text>
            <text x="666" y="70" class="svg-label">Target: &lt; 25k Polys</text>
            <rect x="666" y="90" width="158" height="34" rx="4" fill="var(--ok)"/>
            <text x="745" y="112" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">14,200 Triangles</text>
            <text x="666" y="150" class="svg-caption">✓ 60 FPS on Mobile</text>
            <text x="666" y="168" class="svg-caption">✓ Fast Shader Load</text>
            <text x="666" y="186" class="svg-caption">✓ Low Battery Drain</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "Which shortcut activates the 3-axis Translation (Move) gizmo in Spline?", options: ["Key 'G'", "Key 'M'", "Key 'T'", "Key 'W'"], answer: 0, hint: "G activates translation handles." },
      { q: "Which shortcut activates the 3D Rotation gizmo handles?", options: ["Key 'R'", "Key 'O'", "Key 'E'", "Shift + R"], answer: 0, hint: "R activates rotation rings." },
      { q: "Which shortcut activates the 3D Scale gizmo handles?", options: ["Key 'S'", "Key 'Z'", "Shift + S", "Key 'D'"], answer: 0, hint: "S activates scale grips." },
      { q: "Why should you add subtle beveling or corner rounding to sharp 90-degree 3D edges?", options: ["Beveled edges catch specular light highlights, making objects look realistic rather than razor-sharp", "It cuts polygon count in half", "It converts 3D models into vector SVG files", "It speeds up website download by 50%"], answer: 0, hint: "Natural objects always have microscopic rounded edges that catch light." },
      { q: "What is the recommended maximum scene triangle count for smooth 60fps web embeds?", options: ["Under 25,000 triangles", "Over 2,000,000 triangles", "Under 100 triangles", "Exactly 500,000 triangles"], answer: 0, hint: "Scenes under 25k triangles run smoothly on integrated mobile GPUs." },
      { q: "Which boolean operation carves the shape of one object out of another?", options: ["Difference (Subtract)", "Union", "Intersection", "Multiply"], answer: 0, hint: "Difference carves out intersecting geometry." },
      { q: "What shortcut creates a memory-efficient linked duplicate sharing base geometry vertex data?", options: ["Shift + D", "Ctrl + D", "Alt + D", "Cmd + J"], answer: 0, hint: "Shift + D creates an instanced clone that shares GPU buffers." },
      { q: "Which key toggles Wireframe mode to audit underlying polygon edge density?", options: ["Shift + W", "Key 'W'", "Alt + W", "Ctrl + Shift + V"], answer: 0, hint: "Shift + W toggles the wireframe view." },
      { q: "What visual glitch occurs when two flat faces overlap at the exact same spatial coordinate?", options: ["Z-fighting (flickering texture artifact)", "Ray tracing bloom", "Specular flare", "Subsurface scattering"], answer: 0, hint: "Z-fighting happens when the GPU cannot decide which overlapping surface is in front." },
      { q: "Which tool allows drawing custom 2D vector spline curves that can be extruded into 3D shapes?", options: ["Vector Pen Tool", "Polygon Cube", "Camera Rig", "Spotlight"], answer: 0, hint: "The Pen tool drafts 2D splines for extrusion." }
    ]
  },

  // Stage 3.3: PBR Shaders, Lighting & Matcaps
  {
    tool: "Spline",
    subNumber: 3,
    title: "PBR Shaders, Lighting & Matcaps",
    goal: "Master material layering and lighting: PBR metalness/roughness, glass dispersion, fresnel rim glow, directional/point lights, and mobile Matcap optimization.",
    concepts: [
      "Spline's Material Layer Stack stacks shaders (Color, Gradient, Matcap, Glass, Fresnel, Noise, Image) like Photoshop layers with blend modes.",
      "PBR (Physically Based Rendering) parameters govern material response: Roughness controls specular glossiness, and Metalness controls metallic reflectivity.",
      "Fresnel shaders create an edge rim glow depending on the surface angle relative to the camera, giving objects an illuminated digital aesthetic.",
      "Matcaps (Material Captures) bake spherical reflection and lighting into a single 2D texture lookup, eliminating multi-pass dynamic shadow overhead for mobile."
    ],
    shortcuts: [
      ["L", "Insert Directional Light source"],
      ["P", "Insert Point Light source"],
      ["Shift + L", "Toggle scene lighting visibility"],
      ["Ctrl / Cmd + Alt + M", "Create and save custom material asset"],
      ["Shift + D", "Duplicate light with linked settings"],
      ["Option + Drag", "Duplicate material layer in inspector"],
      ["Ctrl / Cmd + J", "Bake and merge shader layers"],
      ["1 / 2 / 3", "Check lighting angles in orthographic views"]
    ],
    tricks: [
      "For mobile WebGL performance, replace 3 dynamic point lights with a single Matcap layer; you achieve convincing spherical lighting with 0 shadow calculations.",
      "Stack a subtle Fresnel layer (color: bright cyan or white, blend mode: Screen) over dark metallic shaders to highlight edge contours.",
      "Use directional lights with Soft Shadow maps (1024px resolution) instead of sharp shadows to give renders a high-end studio aesthetic.",
      "Add a procedural Noise layer at 3% opacity over smooth plastic materials to eliminate digital banding gradients."
    ],
    dos: [
      "Limit shadow-casting dynamic lights to 1 or 2 per scene to conserve GPU fragment cycles.",
      "Use Matcaps on mobile-optimized 3D web configurations.",
      "Layer Fresnel on dark models to ensure they remain legible against dark web backgrounds.",
      "Re-use saved Material assets across multiple meshes to allow draw call batching."
    ],
    donts: [
      "Don't add 6 dynamic shadow-casting lights; each shadow requires an additional render pass per frame.",
      "Don't import uncompressed 4K texture images into web 3D materials; use 1024x1024 WebP textures.",
      "Don't set roughness to 0 and metalness to 1 on everything; it creates mirror-like chrome balls.",
      "Don't leave lighting unadjusted when designing dark-mode websites."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 3.3: PBR Material Layer Stack Pipeline & Lighting Rig",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / MATERIAL STACK</text>
            <text x="36" y="70" class="svg-label">Layered Shader Pipeline</text>
            <rect x="36" y="90" width="228" height="28" rx="4" class="svg-stack-row"/>
            <text x="48" y="109" class="svg-caption">04. Fresnel Rim Glow (Normal)</text>
            <rect x="36" y="122" width="228" height="28" rx="4" class="svg-stack-row"/>
            <text x="48" y="141" class="svg-caption">03. Glass / Dispersion Shader</text>
            <rect x="36" y="154" width="228" height="28" rx="4" class="svg-stack-row"/>
            <text x="48" y="173" class="svg-caption">02. Matcap / Roughness Map</text>
            <rect x="36" y="186" width="228" height="28" rx="4" class="svg-stack-row"/>
            <text x="48" y="205" class="svg-caption">01. Base Color / Gradient</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / STUDIO LIGHTING RIG</text>
            <text x="351" y="70" class="svg-label">3-Point Studio Rig</text>
            <circle cx="465" cy="135" r="40" fill="var(--surface)" stroke="var(--line)"/>
            <circle cx="390" cy="80" r="10" fill="#F59E0B"/>
            <text x="375" y="65" class="svg-caption">Key Light</text>
            <circle cx="540" cy="80" r="8" fill="#3B82F6"/>
            <text x="530" y="65" class="svg-caption">Fill Light</text>
            <circle cx="465" cy="205" r="7" fill="#10B981"/>
            <text x="445" y="225" class="svg-caption">Rim Light</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / MATCAP OPTIMIZATION</text>
            <text x="666" y="70" class="svg-label">Mobile Performance</text>
            <circle cx="745" cy="125" r="35" fill="url(#matcapGrad)" stroke="var(--line)"/>
            <defs>
              <radialGradient id="matcapGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#FFFFFF"/>
                <stop offset="60%" stop-color="#B4472D"/>
                <stop offset="100%" stop-color="#15171A"/>
              </radialGradient>
            </defs>
            <text x="666" y="185" class="svg-caption">1 Texture Lookup</text>
            <text x="666" y="202" class="svg-caption">0 Dynamic Shadow Passes</text>
            <text x="666" y="220" class="svg-caption">60 FPS Locked</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "Why is a Matcap material layer recommended for mobile web performance over multiple point lights?", options: ["It encodes spherical reflection and shading into a single texture lookup without dynamic shadow calculations", "It converts the 3D model into a flat 2D PNG file", "It disables all WebGL rendering", "It increases scene polygon count"], answer: 0, hint: "Matcaps simulate rich studio lighting with zero dynamic shadow passes." },
      { q: "What visual effect does a Fresnel material layer produce?", options: ["An edge rim glow that brightens as the surface curves away from the camera viewpoint", "A flat black drop shadow", "A blurry glass distortion", "A checkerboard pattern"], answer: 0, hint: "Fresnel highlights edges based on viewing angle." },
      { q: "In PBR rendering, what does the Roughness parameter control?", options: ["How blurry or sharp specular light reflections appear on the surface", "The number of polygons in the mesh", "The speed of object animation", "The volume of audio playback"], answer: 0, hint: "Low roughness produces mirror reflections; high roughness creates matte finishes." },
      { q: "Which shortcut inserts a Directional Light source into your Spline scene?", options: ["Key 'L'", "Key 'D'", "Shift + L", "Key 'P'"], answer: 0, hint: "L inserts a directional light." },
      { q: "Why should you limit dynamic shadow-casting lights to 1 or 2 per web scene?", options: ["Each shadow-casting light forces an additional render pass per frame, rapidly degrading GPU frame rates", "Spline only allows one light per file", "Shadows cause computer monitors to overheat", "Shadows delete material textures"], answer: 0, hint: "Shadow maps require extra render passes that tax graphics hardware." },
      { q: "What light setup is standard for illuminating products with depth and edge separation?", options: ["3-point lighting rig (Key Light, Fill Light, Rim Light)", "1 single light positioned directly behind the camera", "10 random point lights inside the object", "Ambient light only with zero contrast"], answer: 0, hint: "Key, Fill, and Rim lights provide depth, fill, and silhouette separation." },
      { q: "What texture resolution is ideal for web 3D materials to maintain fast page loading?", options: ["1024x1024 WebP textures", "8192x8192 uncompressed BMP", "16K EXR raw textures", "16x16 pixels"], answer: 0, hint: "1024x1024 WebP textures provide crisp detail with low memory overhead." },
      { q: "Which shader layer simulates frosted glass with chromatic refraction?", options: ["Glass shader layer with Dispersion", "Noise shader", "Matcap layer", "Matte shadow plane"], answer: 0, hint: "Glass shaders simulate index of refraction (IOR) and color dispersion." },
      { q: "How do you re-use an identical material shader across multiple scene meshes to optimize draw calls?", options: ["Save the material as a reusable Asset and assign it to target meshes", "Copy and paste the hex code 50 times", "Merge all meshes into a single polygon", "Take a screenshot of the material"], answer: 0, hint: "Shared material assets allow the GPU to batch draw calls efficiently." },
      { q: "What does adding a 3% procedural Noise layer do to smooth gradient materials?", options: ["It eliminates digital color banding and gives surfaces a tactile micro-texture", "It turns the object completely transparent", "It shakes the camera", "It exports the file as MP3"], answer: 0, hint: "Subtle noise breaks up color banding on 8-bit digital displays." }
    ]
  },

  // Stage 3.4: Events, State Physics & Collisions
  {
    tool: "Spline",
    subNumber: 4,
    title: "Events, State Physics & Collisions",
    goal: "Build reactive interactive 3D mechanics: Mouse Hover, Look At Cursor, spring state transitions, gravity physics, and collision boundaries.",
    concepts: [
      "Spline States define visual snapshots (Base, Hover, Pressed) capturing position, rotation, scale, and material parameters.",
      "Event Triggers (Mouse Hover, Mouse Down, Key Press, Look At, Scroll) interpolate smoothly between States using spring physics equations.",
      "Look At triggers orient an object's forward axis toward the user's cursor with configurable rotation clamps (e.g. ±25° on X and Y).",
      "Rigid Body Physics applies gravity, mass, friction, and bounciness with collision geometry (Box, Sphere, Convex, Mesh)."
    ],
    shortcuts: [
      ["Ctrl / Cmd + Alt + S", "Create new visual component State"],
      ["Shift + E", "Open Events and Triggers configuration panel"],
      ["Space", "Play and simulate physics in viewport"],
      ["Ctrl / Cmd + Shift + P", "Preview interactive WebGL scene"],
      ["Option + Drag", "Duplicate event trigger action"],
      ["G", "Adjust state translation offset"],
      ["R", "Adjust state rotation angles"],
      ["Shift + C", "Center collision bounding box"]
    ],
    tricks: [
      "Always clamp 'Look At Cursor' maximum rotation angles (e.g. ±25°) so your 3D model never inverts or reveals unlit backfaces when the mouse reaches screen corners.",
      "Use simple collision shapes (Box or Sphere) for physics rather than complex Mesh collisions; compound mesh collision calculations quickly drop framerates.",
      "Create state transitions between material layers (e.g., animating a Fresnel rim glow from 0% to 100% on mouse hover).",
      "Mark static background scenery as 'Passive / Static' physics bodies so the CPU physics engine only calculates moving objects."
    ],
    dos: [
      "Clamp rotation limits on Look At Cursor interactions for web UI embeds.",
      "Use primitive collision bounding volumes (Sphere, Box) for physics bodies.",
      "Use spring damping between 25 and 35 to prevent sloppy, unending wobble.",
      "Preview interactive scenes at varying screen dimensions."
    ],
    donts: [
      "Don't leave Look At rotation unconstrained; models will flip upside down.",
      "Don't apply complex dynamic mesh collision physics to high-polygon objects.",
      "Don't stack continuous gravity physics on background props when simple keyframes suffice.",
      "Don't forget to test mouse leave events to ensure objects return to resting states."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 3.4: Event Trigger to State Transition & Rotation Clamping",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / EVENT TRIGGER</text>
            <text x="36" y="70" class="svg-label">Input Action Hook</text>
            <rect x="36" y="90" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="50" y="112" class="svg-stack-text">Trigger: Mouse Hover</text>
            <rect x="36" y="130" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="50" y="152" class="svg-stack-text">Trigger: Look At Cursor</text>
            <text x="36" y="190" class="svg-caption">Captures mouse coordinates</text>
            <text x="36" y="208" class="svg-caption">Smooth spring interpolation</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / ROTATION CLAMPING</text>
            <text x="351" y="70" class="svg-label">Angle Bounds: ±25°</text>
            <circle cx="465" cy="135" r="45" class="svg-stack-row"/>
            <line x1="420" y1="135" x2="510" y2="135" stroke="var(--line)" stroke-width="1.5"/>
            <line x1="440" y1="100" x2="490" y2="170" stroke="var(--accent)" stroke-width="2"/>
            <text x="351" y="205" class="svg-caption">Prevents model flipping</text>
            <text x="351" y="222" class="svg-caption">Restricts rotation to safe cone</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / STATE TRANSITION</text>
            <text x="666" y="70" class="svg-label">Target State</text>
            <rect x="666" y="90" width="158" height="34" rx="4" fill="var(--accent)"/>
            <text x="745" y="112" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">State: Hover (1.15x)</text>
            <text x="666" y="150" class="svg-caption">• Spring: damping: 28</text>
            <text x="666" y="170" class="svg-caption">• Scale: 1.0 -> 1.15</text>
            <text x="666" y="190" class="svg-caption">• Glow: 0% -> 100%</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "Why should you clamp rotation limits (e.g. ±25°) on 'Look At Cursor' triggers?", options: ["To prevent the 3D model from flipping upside down or exposing unlit backfaces at screen edges", "To reduce network bandwidth", "Because WebGL only supports 25 degrees total", "To turn the model into wireframe"], answer: 0, hint: "Unclamped rotation causes models to invert when cursors reach screen corners." },
      { q: "What does creating a State in Spline allow you to do?", options: ["Capture an alternate snapshot of position, scale, rotation, and materials for interactive transitions", "Export a state tax form", "Delete all lighting from the scene", "Convert 3D objects into text"], answer: 0, hint: "States capture property snapshots that events interpolate between." },
      { q: "Which collision shape type is most performant for real-time 3D physics in WebGL?", options: ["Simple bounding shapes like Box or Sphere", "Complex high-polygon Mesh collisions", "Continuous volumetric voxel scans", "Concave multi-mesh shells"], answer: 0, hint: "Box and sphere collision calculations are fast and lightweight." },
      { q: "Which key plays and simulates physics in the Spline viewport canvas?", options: ["Spacebar", "Enter", "Tab", "Shift + P"], answer: 0, hint: "Spacebar triggers interactive physics simulation." },
      { q: "What trigger event type makes a 3D element react when the cursor hovers over its boundary?", options: ["Mouse Hover", "Key Press", "On Scroll", "Window Resize"], answer: 0, hint: "Mouse Hover fires when pointing devices enter the object bounds." },
      { q: "What transition curve type provides natural organic motion between visual states in Spline?", options: ["Spring physics transitions", "Hard step cuts", "Constant linear velocity", "Instant jump cuts"], answer: 0, hint: "Spring curves simulate physical mass and elasticity." },
      { q: "What should you set static scenery objects to in the physics properties panel?", options: ["Static / Passive (immovable obstacle)", "Dynamic Active with maximum gravity", "Explosive force", "Particle emitter"], answer: 0, hint: "Static bodies save calculations because their positions never change." },
      { q: "Can you animate material properties (like Fresnel intensity or Glass dispersion) across States?", options: ["Yes, Spline interpolates material layer properties across States smoothly", "No, states only support position changes", "Only if exported to a GIF", "Only in dark mode"], answer: 0, hint: "States record and interpolate material layers and shader parameters." },
      { q: "What shortcut creates a new State for a selected 3D object?", options: ["Ctrl / Cmd + Alt + S", "Shift + S", "Alt + N", "Cmd + Shift + D"], answer: 0, hint: "Cmd/Ctrl + Option/Alt + S captures a new component state." },
      { q: "What happens when the cursor leaves an object configured with Hover -> State transitions?", options: ["The object interpolates smoothly back to its Base resting state", "The object disappears from the scene", "The browser window closes", "The camera zooms to infinity"], answer: 0, hint: "Mouse leave triggers return transitions back to the base resting state." }
    ]
  },

  // Stage 3.5: WebGL Runtime Integration, Performance & Export
  {
    tool: "Spline",
    subNumber: 5,
    title: "WebGL Runtime Integration, Performance & Export",
    goal: "Embed interactive 3D in web production: @splinetool/runtime integration, touch scroll passthrough, lazy-loading, and WebGL asset compression.",
    concepts: [
      "The `@splinetool/runtime` JavaScript/React package compiles and executes `.splinecode` binary files using Three.js and WebGL canvas acceleration.",
      "Page Scroll Passthrough is critical for touch devices: it prevents the 3D canvas from intercepting vertical drag gestures and trapping mobile users.",
      "IntersectionObserver lazy loading delays WebGL context creation and shader compilation until the user scrolls toward the 3D viewport fold.",
      "Performance Budgets require keeping total downloaded scene assets under 4MB, draw calls under 30, and framerates locked at 60fps."
    ],
    shortcuts: [
      ["Ctrl / Cmd + E", "Open Export dialog (Web Embed, React, Three.js, Code)"],
      ["Ctrl / Cmd + Shift + E", "Copy scene .splinecode production URL"],
      ["Shift + 1", "Check default initial camera framing"],
      ["Alt + P", "Toggle scene playback controls"],
      ["Shift + W", "Audit scene wireframe topology before export"],
      ["Ctrl / Cmd + S", "Save and compile scene version"],
      ["Option + Click", "Inspect exported canvas dimensions"],
      ["Escape", "Exit live preview presentation"]
    ],
    tricks: [
      "Always enable 'Page Scroll' (Passthrough) in Export Settings so mobile users can scroll past your 3D hero section without touch hijacking.",
      "Wrap `<spline-viewer>` or `Application.load()` in an `IntersectionObserver`; only initialize WebGL when the canvas is within 300px of entering the viewport.",
      "Provide a lightweight WebP poster image behind the canvas while the `.splinecode` binary compiles shaders to avoid visual layout shift.",
      "Disable pixel ratio supersampling on mobile devices (clamp `devicePixelRatio` to 1.5) to avoid rendering 4K buffers on phones with integrated GPUs."
    ],
    dos: [
      "Enable Page Scroll Passthrough for mobile touch screen usability.",
      "Lazy-load the Spline WebGL runtime using IntersectionObserver.",
      "Provide a static WebP poster fallback image during scene compilation.",
      "Clamp canvas pixel ratio to 1.5 or 2 to preserve mobile battery life."
    ],
    donts: [
      "Don't eagerly load 15MB 3D assets on initial page load before user interaction.",
      "Don't hijack mobile vertical touch scroll gestures with an unconfigured 3D canvas.",
      "Don't rely exclusively on 3D canvas for primary accessibility actions; overlay semantic HTML buttons.",
      "Don't ignore WebGL context lost errors on low-memory mobile devices."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 3.5: @splinetool/runtime Web Embedding & Lazy Loading Pipeline",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / SPLINE BINARY EXPORT</text>
            <text x="36" y="70" class="svg-label">scene.splinecode (&lt; 3MB)</text>
            <rect x="36" y="90" width="228" height="60" rx="6" class="svg-stack-row"/>
            <text x="50" y="112" class="svg-label" font-size="12">Compressed WebGL Payload</text>
            <text x="50" y="128" class="svg-caption">Includes meshes, materials &amp; events</text>
            <text x="36" y="180" class="svg-caption">• CDN edge distribution</text>
            <text x="36" y="198" class="svg-caption">• Zero Three.js boilerplate</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / LAZY LOAD INTERSECTION</text>
            <text x="351" y="70" class="svg-label">IntersectionObserver Engine</text>
            <rect x="351" y="90" width="228" height="110" rx="6" class="svg-frame"/>
            <text x="365" y="115" class="svg-label" font-size="11">if (entry.isIntersecting) {</text>
            <text x="375" y="135" class="svg-caption" fill="var(--accent)">spline.load('scene.splinecode');</text>
            <text x="365" y="155" class="svg-label" font-size="11">} else {</text>
            <text x="375" y="175" class="svg-caption">display: &lt;img src="poster.webp"/&gt;</text>
            <text x="365" y="192" class="svg-label" font-size="11">}</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / TOUCH PASSTHROUGH</text>
            <text x="666" y="70" class="svg-label">Mobile Friendly UX</text>
            <rect x="666" y="90" width="158" height="40" rx="4" fill="var(--ok)"/>
            <text x="745" y="115" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">Page Scroll: Active</text>
            <text x="666" y="160" class="svg-caption">✓ Touch drag scrolls page</text>
            <text x="666" y="180" class="svg-caption">✓ No canvas trap</text>
            <text x="666" y="200" class="svg-caption">✓ Smooth mobile 60 FPS</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "What JavaScript package compiles and executes .splinecode binaries in React and vanilla web applications?", options: ["@splinetool/runtime", "react-router-dom", "lodash-3d", "jquery-spline"], answer: 0, hint: "@splinetool/runtime is the official web runtime package." },
      { q: "What critical mobile UX setting must you enable in Spline export settings to prevent touch scrolling from getting trapped?", options: ["Page Scroll (Touch Passthrough)", "Force Fullscreen", "Invert Canvas Colors", "Disable WebGL"], answer: 0, hint: "Page Scroll passthrough allows normal touch scrolling over the canvas." },
      { q: "Why should you lazy-load a 3D WebGL canvas using IntersectionObserver?", options: ["To prevent shader compilation and 3D downloads from blocking initial page load and hurting Core Web Vitals (LCP)", "Because WebGL only works when users scroll", "To delete the 3D model automatically", "To convert the site to PDF"], answer: 0, hint: "Lazy loading preserves initial page load performance and battery life." },
      { q: "What shortcut opens the Spline Export dialog to generate web embed codes and React assets?", options: ["Ctrl / Cmd + E", "Ctrl + Shift + S", "Alt + Shift + E", "Cmd + P"], answer: 0, hint: "Cmd/Ctrl + E opens the export modal." },
      { q: "What fallback should you display while the 3D WebGL scene compiles in the browser?", options: ["A lightweight static WebP poster image that matches initial camera framing", "A blank white screen with error messages", "A spinning loading bar with no background", "A plain text paragraph"], answer: 0, hint: "A poster image prevents visual layout shifts during compilation." },
      { q: "Why should you clamp `devicePixelRatio` to 1.5 or 2 on mobile devices when embedding WebGL?", options: ["To avoid forcing mobile GPUs to render at extreme 4K retina resolutions that cause overheating and frame drops", "Because mobile phones do not have pixels", "To make the canvas black and white", "To bypass web browser cookies"], answer: 0, hint: "Restricting pixel ratio saves massive fragment shader computations on phones." },
      { q: "What binary file format does Spline export for web deployment?", options: [".splinecode", ".exe", ".docx", ".mp4"], answer: 0, hint: ".splinecode bundles the 3D scene into a compressed binary file." },
      { q: "How should critical call-to-action buttons be implemented on pages featuring 3D backgrounds?", options: ["As accessible HTML DOM elements overlaid above the 3D canvas with pointer-events configured", "Baked permanently into 3D polygon meshes", "Hidden inside right-click menus", "In a separate browser window"], answer: 0, hint: "Primary interactions belong in semantic accessible HTML overlays." },
      { q: "What happens if a user's browser does not support WebGL hardware acceleration?", options: ["The fallback poster image is displayed or a static notice is surfaced gracefully", "The computer restarts", "The screen flashes red", "All internet connections close"], answer: 0, hint: "Graceful degradation displays the static poster image." },
      { q: "What is the recommended maximum file size budget for web-ready .splinecode binaries?", options: ["Under 3 to 4 megabytes", "Over 100 megabytes", "Under 100 bytes", "Exactly 1 gigabyte"], answer: 0, hint: "Keeping production payloads under 4MB ensures fast 4G downloads." }
    ]
  },

  /* =========================================================================
     TOOL 04: STITCH (Subsections 16 to 20)
     ========================================================================= */

  // Stage 4.1: Prompt Architecture & Semantic Deconstruction
  {
    tool: "Stitch",
    subNumber: 1,
    title: "Prompt Architecture & Semantic Deconstruction",
    goal: "Master high-fidelity generative UI prompting: deconstructing intent into Role, Layout Hierarchy, Concrete Data Schemas, and Negative Constraints.",
    concepts: [
      "Generative UI prompt architecture requires explicit technical constraints (role, layout model, data types, accessibility) rather than vague aesthetic adjectives.",
      "Semantic Deconstruction breaks user requests into modular UI components: navigation, hero metrics, filter tabs, tables, and empty states.",
      "Negative Constraints explicitly state what NOT to generate (e.g. 'no floating drop shadows, no purple gradients, no placeholder lorem ipsum').",
      "Tone and Domain Grounding specifies the operational context (e.g. enterprise B2B fintech, medical clinical dashboard) to anchor stylistic choices."
    ],
    shortcuts: [
      ["Ctrl / Cmd + K", "Open AI Command Bar on canvas"],
      ["Shift + Enter", "Generate variant alternative of current selection"],
      ["Ctrl / Cmd + Enter", "Execute generation prompt"],
      ["Escape", "Cancel prompt generation modal"],
      ["Tab", "Cycle through generated component recommendations"],
      ["Alt + P", "Open Prompt History and revision stack"],
      ["Ctrl / Cmd + P", "Pin generated frame as visual style guide"],
      ["Ctrl / Cmd + Z", "Step backward to previous generation state"]
    ],
    tricks: [
      "Use the four-tier prompt formula: `[ROLE] + [LAYOUT STRUCTURE] + [DATA SCHEMA] + [NEGATIVE CONSTRAINTS]` for production-ready initial renders.",
      "Provide real sample data in your prompt (e.g. '$142,500 MRR, +14.2% YoY') so Stitch generates calibrated column widths and realistic text wraps.",
      "Include accessibility constraints directly: specify `WCAG AAA contrast ratios, semantic h1-h3 hierarchy, and 44px tap targets`.",
      "Prompt for edge states simultaneously: `Generate empty state with illustration and retry CTA alongside the active populated table`."
    ],
    dos: [
      "Specify exact layout structures (e.g., '3-column metric cards above a full-width paginated data table').",
      "Provide negative constraints to eliminate repetitive AI visual tropes (no purple gradients, no frosted glass).",
      "Include realistic industry data schemas in the prompt body.",
      "Anchor prompts to specific brand roles (e.g., 'Industrial Swiss minimalist B2B logistics dashboard')."
    ],
    donts: [
      "Don't use vague buzzword prompts like 'make a modern slick web3 crypto app'.",
      "Don't accept generic placeholder copy; require realistic data.",
      "Don't prompt without specifying layout direction and responsive mobile intent.",
      "Don't forget to inspect generated contrast levels against WCAG standards."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 4.1: Four-Tier Generative Prompt Deconstruction Architecture",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / PROMPT SPECIFICATION</text>
            <text x="36" y="70" class="svg-label">Four-Tier Formula</text>
            <rect x="36" y="90" width="228" height="28" rx="4" class="svg-stack-row"/>
            <text x="48" y="109" class="svg-caption" fill="#10B981">1. ROLE: Enterprise Fintech App</text>
            <rect x="36" y="122" width="228" height="28" rx="4" class="svg-stack-row"/>
            <text x="48" y="141" class="svg-caption" fill="var(--accent)">2. LAYOUT: 3-Col Metric + Grid</text>
            <rect x="36" y="154" width="228" height="28" rx="4" class="svg-stack-row"/>
            <text x="48" y="173" class="svg-caption">3. DATA: $142k MRR, +14% YoY</text>
            <rect x="36" y="186" width="228" height="28" rx="4" class="svg-stack-row"/>
            <text x="48" y="205" class="svg-caption" fill="#EF4444">4. NO: Gradients, Glass, Badges</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / DECONSTRUCTION ENGINE</text>
            <text x="351" y="70" class="svg-label">Component Breakdown</text>
            <rect x="351" y="90" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="365" y="112" class="svg-stack-text">Global Nav &amp; Header</text>
            <rect x="351" y="130" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="365" y="152" class="svg-stack-text">3-Tier Stat Summary Cards</text>
            <rect x="351" y="170" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="365" y="192" class="svg-stack-text">Paginated Data Table Grid</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / GENERATED CANVAS</text>
            <text x="666" y="70" class="svg-label">Clean UI Canvas</text>
            <rect x="666" y="90" width="158" height="110" rx="6" fill="var(--surface)" stroke="var(--line)"/>
            <rect x="676" y="100" width="138" height="24" rx="4" class="svg-stack-row"/>
            <rect x="676" y="130" width="65" height="30" rx="4" fill="var(--accent)"/>
            <rect x="749" y="130" width="65" height="30" rx="4" class="svg-stack-row"/>
            <rect x="676" y="166" width="138" height="24" rx="4" class="svg-stack-row"/>
            <text x="666" y="222" class="svg-caption">Auto-layout flex output</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "Which keyboard shortcut invokes the contextual natural-language AI Command Bar in Stitch?", options: ["Ctrl / Cmd + K", "Shift + Alt + Delete", "F5 / Cmd + R", "Ctrl / Cmd + G"], answer: 0, hint: "Command/Ctrl + K is the standard command palette shortcut." },
      { q: "What are the four pillars of a high-fidelity generative UI prompt formula?", options: ["Role, Layout Structure, Concrete Data Schema, and Negative Constraints", "Color, Font, Background, and Animation", "Title, Subtitle, Button, and Footer", "User, Password, Email, and Token"], answer: 0, hint: "Role, Layout, Data, and Negative constraints produce reliable UI output." },
      { q: "What is the primary function of Negative Constraints in generative UI prompting?", options: ["To explicitly prevent the AI from generating repetitive design cliches (like purple gradients and floating drop shadows)", "To invert page colors", "To reject user passwords", "To delete all text"], answer: 0, hint: "Negative constraints filter out unwanted design tropes." },
      { q: "Why should prompts include concrete realistic data (e.g. '$142k MRR') instead of 'lorem ipsum'?", options: ["Real data ensures generated components have calibrated column widths and realistic text wraps", "Figma rejects files with lorem ipsum", "It speeds up prompt response time by 10x", "It translates text into French"], answer: 0, hint: "Concrete data formats containers to realistic content boundaries." },
      { q: "Which shortcut generates three stylistic and architectural variant alternatives of the current frame?", options: ["Shift + Enter", "Ctrl + D", "Alt + Shift + V", "Cmd + R"], answer: 0, hint: "Shift + Enter generates layout alternatives." },
      { q: "What does Pinning a generated frame as a 'Style Guide' achieve in subsequent prompts?", options: ["Stitch anchors future screen generations to the pinned frame's colors, typography, and card styles", "It locks the layer permanently from editing", "It exports the frame as a PDF", "It turns off internet access"], answer: 0, hint: "Pinning locks a design reference for style continuity." },
      { q: "Why are vague prompts like 'make a cool futuristic crypto app' detrimental?", options: ["They result in unmaintainable spaghetti layouts filled with generic purple gradients and fake mock data", "They cause server crashes", "Stitch blocks all crypto keywords", "They generate plain text only"], answer: 0, hint: "Vague prompts produce generic cliches with zero design system rigor." },
      { q: "How do you step backward to a previous generation iteration in Stitch?", options: ["Ctrl / Cmd + Z", "Shift + Escape", "Alt + Backspace", "Cmd + Shift + R"], answer: 0, hint: "Cmd/Ctrl + Z steps backward in prompt history." },
      { q: "What accessibility requirements should be explicitly stated in the prompt body?", options: ["WCAG AAA color contrast ratios, semantic heading hierarchy, and minimum 44px tap targets", "Maximum brightness only", "Zero borders on any element", "White text on yellow backgrounds"], answer: 0, hint: "Specifying WCAG compliance anchors output to accessible standards." },
      { q: "What tool feature lets you generate popups, loading skeletons, and empty states alongside active tables?", options: ["Multi-state prompting in a single command", "CSS animations inspector", "Font picker", "Layer grouping tool"], answer: 0, hint: "Prompting for edge states simultaneously ensures alignment across states." }
    ]
  },

  // Stage 4.2: Token JSON Schemas & System Binding
  {
    tool: "Stitch",
    subNumber: 2,
    title: "Token JSON Schemas & System Binding",
    goal: "Enforce design system compliance: injecting token JSON dictionaries, binding generated primitives to variables, and eliminating arbitrary hex values.",
    concepts: [
      "Design Token JSON schemas define your organization's exact design system: colors, typography scales, spacing tokens, and border radii.",
      "Token Injection forces the generative AI engine to select only from your pre-approved variable palette rather than hallucinating random styles.",
      "Token Auditing scans generated layer trees to highlight unlinked hardcoded hex codes or pixel spacings.",
      "Bi-directional Token Synchronization updates your generative dictionary whenever Figma variables or Tailwind config files update."
    ],
    shortcuts: [
      ["Option + Cmd + T", "Inspect Token Bindings and hardcoded values"],
      ["Ctrl / Cmd + Shift + S", "Sync latest tokens from Figma/Tailwind repository"],
      ["Shift + T", "Open Design Token Schema Manager in settings"],
      ["Alt + B", "Batch-bind all unlinked colors to nearest system token"],
      ["Ctrl / Cmd + K", "Open prompt bar to apply token modifications"],
      ["Tab", "Cycle through highlighted unlinked token warnings"],
      ["Ctrl / Cmd + /", "Search design token dictionary"],
      ["Shift + Click", "Select multiple layers to batch-apply semantic tokens"]
    ],
    tricks: [
      "Import your Tailwind config or Figma Variable JSON dictionary into Project Settings before prompting; Stitch will strictly output your exact design tokens.",
      "Run the Token Audit tool (`Option + Cmd + T`) after every generation to detect any rogue hex colors that escaped system constraints.",
      "Use 'Batch-Bind' (`Alt + B`) to automatically map near-match arbitrary colors to your official semantic tokens with 1 click.",
      "Define strict spacing steps (e.g. `[4, 8, 12, 16, 24, 32, 48, 64]`) in the schema so all generated margins snap to a unified rhythm."
    ],
    dos: [
      "Import organization token JSON schemas before generating screens.",
      "Audit token linkage to ensure colors resolve to system variables.",
      "Bind spacing and radii to numeric scale tokens.",
      "Maintain bi-directional synchronization with master design libraries."
    ],
    donts: [
      "Don't allow unlinked hardcoded hex values in production-ready generated screens.",
      "Don't generate screens with unconstrained arbitrary font families.",
      "Don't skip the token audit before code export.",
      "Don't overwrite official system tokens with AI-generated ad-hoc styles."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 4.2: Token JSON Schema Injection & Automated Variable Binding",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / DESIGN TOKEN JSON</text>
            <text x="36" y="70" class="svg-label">System Schema Ingestion</text>
            <rect x="36" y="90" width="228" height="110" rx="6" class="svg-stack-row"/>
            <text x="48" y="112" class="svg-caption" fill="var(--accent)">{ "color": {</text>
            <text x="58" y="128" class="svg-caption">"brand": "#B4472D",</text>
            <text x="58" y="144" class="svg-caption">"surface": "#FFFFFF",</text>
            <text x="58" y="160" class="svg-caption">"line": "#E3E0D7"</text>
            <text x="48" y="176" class="svg-caption" fill="var(--accent)">}}</text>
            <text x="36" y="218" class="svg-caption">Enforces design boundaries</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / TOKEN HARMONIZATION</text>
            <text x="351" y="70" class="svg-label">AI Generation Snapping</text>
            <rect x="351" y="90" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="365" y="112" class="svg-stack-text">var(--color-brand)</text>
            <rect x="351" y="130" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="365" y="152" class="svg-stack-text">var(--radius-card: 12px)</text>
            <rect x="351" y="170" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="365" y="192" class="svg-stack-text">var(--space-4: 16px)</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / AUDIT COMPLIANCE</text>
            <text x="666" y="70" class="svg-label">100% Bound</text>
            <rect x="666" y="90" width="158" height="34" rx="4" fill="var(--ok)"/>
            <text x="745" y="112" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">Zero Stray Hex</text>
            <text x="666" y="150" class="svg-caption">✓ Automated Theme Sync</text>
            <text x="666" y="170" class="svg-caption">✓ Token-Ready React Code</text>
            <text x="666" y="190" class="svg-caption">✓ High Quality Handoff</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "What is the most reliable way to prevent Stitch from generating arbitrary fonts and unapproved colors?", options: ["Import your organization's Design Token JSON schema in project settings", "Repeat the word 'modern' twenty times", "Turn off your monitor", "Delete the CSS file"], answer: 0, hint: "Token JSON schemas constrain generative outputs to your design system." },
      { q: "Which shortcut opens the Token Audit tool to reveal unlinked hardcoded hex values?", options: ["Option + Cmd + T (Alt + Ctrl + T)", "Shift + T", "Ctrl + Alt + K", "Cmd + Shift + Z"], answer: 0, hint: "Cmd/Ctrl + Option/Alt + T inspects token bindings." },
      { q: "What does the 'Batch-Bind' tool do on an AI-generated layout in Stitch?", options: ["It automatically maps near-match arbitrary colors to the closest official semantic tokens", "It deletes all colors from the canvas", "It merges all layers into a single raster bitmap", "It reboots the computer"], answer: 0, hint: "Batch-bind resolves arbitrary values to system variables." },
      { q: "Why are design token schemas essential for multi-brand enterprise companies?", options: ["They allow one core interface layout to be re-themed across different brands by swapping token dictionaries", "They double computer memory", "They prevent developers from reading code", "They bypass WCAG contrast checks"], answer: 0, hint: "Token schemas make multi-brand theming automated and effortless." },
      { q: "What format is commonly used to transfer design token dictionaries between Figma, Tailwind, and Stitch?", options: ["JSON (JavaScript Object Notation)", "MP3", "Raw TXT with commas", "Photoshop PSD"], answer: 0, hint: "JSON is the universal standard for design token dictionaries." },
      { q: "Which shortcut syncs the latest tokens from your connected Figma or Tailwind repository?", options: ["Ctrl / Cmd + Shift + S", "Alt + S", "Shift + S", "Cmd + R"], answer: 0, hint: "Cmd/Ctrl + Shift + S syncs remote token repositories." },
      { q: "What should spacing values (padding, gap) snap to in a system-bound layout?", options: ["A strict numeric scale (e.g. 4px, 8px, 12px, 16px, 24px, 32px)", "Random prime numbers", "Odd numbers only", "Static 100px increments everywhere"], answer: 0, hint: "A strict 4px/8px scale enforces visual spatial rhythm." },
      { q: "What happens when an organization updates its primary brand color token in the schema?", options: ["All bound generated components update their primary colors automatically", "The layout breaks into error screens", "All text fields turn blank", "A new project must be created from scratch"], answer: 0, hint: "Tokens ensure updates cascade instantly across all bound elements." },
      { q: "What risk arises if a team exports generated code containing unlinked hex codes?", options: ["Design system fragmentation, theme switching failure, and maintenance debt", "The code fails to compile in React", "Browser tabs crash immediately", "Fonts turn into comic sans"], answer: 0, hint: "Hardcoded colors break centralized theming and maintainability." },
      { q: "Can typography scales (font sizes, line heights, letter spacings) be governed by token schemas in Stitch?", options: ["Yes, typography tokens define allowed font sizes and hierarchy rules", "No, font sizes can never be bound to tokens", "Only on Android devices", "Only for heading level 1"], answer: 0, hint: "Typography tokens govern scale, weights, and leading." }
    ]
  },

  // Stage 4.3: Multi-Screen Flow Graphs & States
  {
    tool: "Stitch",
    subNumber: 3,
    title: "Multi-Screen Flow Graphs & States",
    goal: "Architect cohesive multi-screen user flows: stitching screens with parameter passing, managing edge states (Empty, Loading, Error), and interactive flow graphs.",
    concepts: [
      "Screen Flow Graphs map out transitions between multiple interface screens, passing parameters (e.g. selected customer ID) between states.",
      "Edge State Stamping generates the complete lifecycle of a screen: Initial Empty State, Skeleton Loading State, Populated Active State, and Error State.",
      "Shared Context Anchors maintain navigation bars, headers, and modal backdrops in identical coordinates across sequential screens.",
      "Interactive Hotspots connect user click targets in Screen A directly to modal or navigation transitions in Screen B."
    ],
    shortcuts: [
      ["Tab", "Cycle through interactive connection pins linking screens"],
      ["Shift + F", "Generate linked Multi-Screen Flow from prompt"],
      ["Option + Click", "Connect Hotspot trigger from element to target screen"],
      ["Ctrl / Cmd + Option + F", "Open Screen Flow Graph overview canvas"],
      ["Ctrl / Cmd + Option + P", "Launch Live Web Prototype Preview"],
      ["H", "Hand tool to pan across multi-screen flow graphs"],
      ["Ctrl / Cmd + D", "Duplicate screen state with parameter binding"],
      ["Shift + 1", "Zoom to view all connected screens in flow graph"]
    ],
    tricks: [
      "Prompt for all 4 lifecycle states simultaneously: `Generate empty state with onboarding CTA, skeleton loading table, populated table, and error banner for selected view`.",
      "Connect action buttons to target screens using Option+Click to create interactive prototype noodles with stateful parameter handoff.",
      "Use Shared Component Stamping to ensure that editing a navigation item in Screen A updates that navbar across all 15 screens in the flow graph.",
      "Launch Live Web Prototype Preview (`Cmd+Option+P`) to click through multi-screen flows with simulated real-time data."
    ],
    dos: [
      "Always design empty and error states alongside the primary active screen.",
      "Maintain consistent spatial layout of headers and navigation across the flow.",
      "Test user journeys through the live prototype preview before code export.",
      "Use clear semantic names for screen nodes (e.g. `billing_overview`, `invoice_detail_modal`)."
    ],
    donts: [
      "Don't design only the 'happy path'; account for network error banners and zero-data empty states.",
      "Don't change navigation coordinates between screens in the same flow.",
      "Don't leave disconnected screens with no return links back to overview dashboards.",
      "Don't forget to test modal close triggers and backdrop click dismissing."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 4.3: Screen Flow Graph & Parameterized State Stitching",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="240" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">SCREEN 01: OVERVIEW</text>
            <text x="36" y="70" class="svg-label">Dashboard View</text>
            <rect x="36" y="90" width="208" height="60" rx="4" class="svg-stack-row"/>
            <text x="48" y="115" class="svg-stack-text">Customer Table</text>
            <rect x="48" y="125" width="80" height="18" rx="3" fill="var(--accent)"/>
            <text x="88" y="138" text-anchor="middle" fill="#FFFFFF" class="svg-caption">Row #14 Click</text>
            <text x="36" y="180" class="svg-caption">Passes: customer_id = 14</text>
            <text x="36" y="198" class="svg-caption">Triggers Modal Open</text>

            <path d="M 260 130 L 315 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="315,126 323,130 315,134" class="svg-arrowhead"/>

            <rect x="325" y="20" width="250" height="220" rx="8" class="svg-box"/>
            <text x="341" y="48" class="svg-caption">SCREEN 02: DETAIL MODAL</text>
            <text x="341" y="70" class="svg-label">Parameterized Modal</text>
            <rect x="341" y="90" width="218" height="100" rx="6" fill="var(--surface)" stroke="var(--line)"/>
            <text x="355" y="115" class="svg-label" font-size="12">Customer #14 Details</text>
            <text x="355" y="135" class="svg-caption">Acme Corp • $42,000 ARR</text>
            <rect x="355" y="150" width="70" height="24" rx="4" fill="var(--accent)"/>
            <text x="390" y="166" text-anchor="middle" fill="#FFFFFF" class="svg-caption">Save</text>
            <text x="341" y="215" class="svg-caption">Shared design token styling</text>

            <path d="M 575 130 L 630 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="630,126 638,130 630,134" class="svg-arrowhead"/>

            <rect x="640" y="20" width="200" height="220" rx="8" class="svg-box"/>
            <text x="656" y="48" class="svg-caption">SCREEN 03: EMPTY STATE</text>
            <text x="656" y="70" class="svg-label">Edge Case Handling</text>
            <rect x="656" y="90" width="168" height="100" rx="6" class="svg-frame"/>
            <circle cx="740" cy="125" r="16" class="svg-stack-row"/>
            <text x="740" y="158" text-anchor="middle" class="svg-caption">No Invoices Found</text>
            <text x="740" y="174" text-anchor="middle" class="svg-caption" fill="var(--accent)">Create Invoice +</text>
            <text x="656" y="215" class="svg-caption">Complete UX lifecycle</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "What does Screen Flow Graph modeling achieve in Stitch?", options: ["It visualizes and connects multi-screen user flows with parameter passing and shared state", "It prints physical cardboard wireframes", "It exports vector logos as ICO files", "It measures monitor refresh rates"], answer: 0, hint: "Flow graphs map screens, hotspots, and shared data transitions." },
      { q: "What shortcut cycles through interactive connection pins and hotspots linking screens?", options: ["Tab", "Shift + Tab", "Spacebar", "Alt + Delete"], answer: 0, hint: "Tab cycles through interactive hotspot pins." },
      { q: "Which shortcut opens the Live Web Prototype Preview to click through connected screen flows?", options: ["Ctrl / Cmd + Option + P", "Ctrl + Shift + P", "Alt + P", "Cmd + Enter"], answer: 0, hint: "Cmd/Ctrl + Option/Alt + P launches the interactive prototype preview." },
      { q: "What are the four essential lifecycle states every production screen should account for?", options: ["Empty state, Loading skeleton, Populated active state, and Error state", "Light mode, Dark mode, Print mode, and Sleep mode", "Header, Footer, Sidebar, and Hero", "Small, Medium, Large, and Extra Large"], answer: 0, hint: "Empty, Loading, Active, and Error states cover the complete user lifecycle." },
      { q: "How do you connect a button on Screen A to open a modal on Screen B?", options: ["Option + Click on the button and drag the connection noodle to the target modal screen", "Delete Screen B", "Take a screenshot and paste it", "Type the word 'modal' in the console"], answer: 0, hint: "Option+Click drags an interactive transition connector to the target screen." },
      { q: "What is parameter passing between screens in a flow graph?", options: ["Passing specific data (like customer_id = 14) from an item clicked in Screen A to populate Screen B", "Passing computer RAM between browser tabs", "Translating code into Python", "Changing screen brightness"], answer: 0, hint: "Parameter passing passes selected IDs and context to subsequent screens." },
      { q: "Why is designing empty states with onboarding CTAs crucial for real software products?", options: ["Because first-time users encounter zero-data states and need guidance on how to populate the view", "To avoid paying hosting fees", "Because empty screens render faster than populated ones", "To hide interface designs from competitors"], answer: 0, hint: "First-time users need clear calls-to-action when databases are empty." },
      { q: "What ensures navigation bars and headers don't jump around between screens in a flow?", options: ["Shared Context Anchors maintaining identical coordinate positioning", "Converting navigation into an image", "Setting opacity to 50%", "Disabling CSS grid"], answer: 0, hint: "Shared context anchors lock consistent header positions across screens." },
      { q: "What shortcut zooms the canvas to show all connected screens in the active flow graph?", options: ["Shift + 1", "Shift + 0", "Ctrl + Plus", "Alt + Z"], answer: 0, hint: "Shift + 1 zooms to fit all canvas screens." },
      { q: "What should an error banner state provide to the user?", options: ["A clear description of the issue and a retry action button", "A blank white screen with no options", "An auto-refresh loop that never ends", "A link to an external search engine"], answer: 0, hint: "Good error states explain the failure and provide actionable retry paths." }
    ]
  },

  // Stage 4.4: Deep Selection, Pinning & A11y Audit
  {
    tool: "Stitch",
    subNumber: 4,
    title: "Deep Selection, Pinning & A11y Audit",
    goal: "Inspect and refine generated assemblies: deep sub-component selection, style guide pinning, keyboard focus targets, and automated WCAG AAA accessibility audits.",
    concepts: [
      "Deep Selection bypasses high-level AI container wrappers to directly edit nested buttons, typography nodes, or badge components.",
      "Style Guide Pinning locks approved frames as the visual baseline, forcing subsequent prompt iterations to match typography and colors.",
      "Automated Accessibility Auditing calculates contrast ratios, checks color blindness safety, and validates interactive tap target sizes.",
      "Keyboard Navigation Flow verifies tab order, focus rings, and aria-expanded attributes on generated modal and dropdown controls."
    ],
    shortcuts: [
      ["Option + Click (Alt + Click)", "Deep-select nested sub-component directly"],
      ["Ctrl / Cmd + P", "Pin selected frame as visual Style Guide anchor"],
      ["Option + A (Alt + A)", "Toggle Accessibility & Contrast Audit Inspector"],
      ["Shift + Tab", "Step backward through keyboard tab order"],
      ["Tab", "Step forward through keyboard focus rings"],
      ["Ctrl / Cmd + Option + A", "Batch-fix all failing WCAG color contrast ratios"],
      ["Ctrl / Cmd + D", "Duplicate element while preserving token bindings"],
      ["Escape", "Select parent wrapper container"]
    ],
    tricks: [
      "Press `Option + A` to reveal the automated WCAG audit; failing text colors display red contrast tags (e.g. `2.8:1 FAIL`) with 1-click fixes.",
      "Use `Ctrl/Cmd + Option + A` to auto-adjust all failing text contrast to the nearest accessible WCAG AAA compliant shade in your token palette.",
      "Hold Option/Alt while clicking inside a complex generated table card to select the exact icon or badge without ungrouping 6 parent wrappers.",
      "Pin an approved card as a Style Guide before generating new views so Stitch re-uses the exact border radius, shadow, and font weights."
    ],
    dos: [
      "Verify all text meets WCAG AA (4.5:1) or AAA (7:1) contrast standards.",
      "Ensure interactive elements have visible keyboard focus rings.",
      "Use Deep Selection (Option+Click) to fine-tune copy and icons inside generated cards.",
      "Pin verified designs as style guides to enforce cross-screen consistency."
    ],
    donts: [
      "Don't ship generated UI with low-contrast light grey text on white backgrounds.",
      "Don't remove keyboard focus rings from interactive elements.",
      "Don't dismantle auto-layout wrappers just to select a nested child element.",
      "Don't allow touch targets to fall below the 44x44px minimum tap size."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 4.4: Deep Selection Hierarchy & Automated WCAG Contrast Audit",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / DEEP SELECTION</text>
            <text x="36" y="70" class="svg-label">Alt + Click Direct Access</text>
            <rect x="36" y="90" width="228" height="110" rx="6" class="svg-frame"/>
            <rect x="46" y="100" width="208" height="40" rx="4" class="svg-stack-row"/>
            <rect x="56" y="110" width="90" height="20" rx="3" fill="var(--accent)"/>
            <text x="101" y="124" text-anchor="middle" fill="#FFFFFF" class="svg-caption">Nested Child</text>
            <text x="36" y="215" class="svg-caption">Bypasses 4 parent wrappers</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / WCAG AAA AUDIT</text>
            <text x="351" y="70" class="svg-label">Automated Contrast Check</text>
            <rect x="351" y="90" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="365" y="112" class="svg-stack-text">Body text: 12.8:1</text>
            <rect x="525" y="98" width="45" height="18" rx="3" fill="var(--ok)"/>
            <text x="547" y="111" text-anchor="middle" fill="#FFFFFF" class="svg-caption">AAA</text>
            <rect x="351" y="130" width="228" height="34" rx="4" class="svg-stack-row"/>
            <text x="365" y="152" class="svg-stack-text">Muted caption: 6.4:1</text>
            <rect x="525" y="138" width="45" height="18" rx="3" fill="var(--ok)"/>
            <text x="547" y="151" text-anchor="middle" fill="#FFFFFF" class="svg-caption">AA</text>
            <text x="351" y="190" class="svg-caption">Automated color adjustment</text>
            <text x="351" y="208" class="svg-caption">Instant compliance fix</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / STYLE PINNING</text>
            <text x="666" y="70" class="svg-label">Visual Ground Truth</text>
            <rect x="666" y="90" width="158" height="40" rx="4" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.5"/>
            <text x="745" y="115" text-anchor="middle" class="svg-stack-text" fill="var(--accent)">Pinned Reference</text>
            <text x="666" y="155" class="svg-caption">Locks font scale &amp; radii</text>
            <text x="666" y="175" class="svg-caption">Forces cross-screen match</text>
            <text x="666" y="195" class="svg-caption">Eliminates drift</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "How do you select a nested button or icon directly inside multiple generated wrapper containers?", options: ["Hold Option / Alt while clicking the target element directly (Deep Selection)", "Delete the parent frame", "Ungroup all layers repeatedly", "Export to PDF and re-import"], answer: 0, hint: "Option/Alt + Click bypasses container hierarchies." },
      { q: "Which shortcut toggles the automated Accessibility & Color Contrast audit inspector in Stitch?", options: ["Option + A (Alt + A)", "Shift + C", "Ctrl + Shift + X", "Cmd + F"], answer: 0, hint: "Option/Alt + A toggles accessibility auditing." },
      { q: "What minimum contrast ratio does WCAG AA require for standard body text against its background?", options: ["At least 4.5:1", "At least 1.5:1", "Exactly 100:1", "Zero contrast"], answer: 0, hint: "WCAG AA requires 4.5:1 for standard text (3:1 for large text)." },
      { q: "What minimum contrast ratio does WCAG AAA require for enhanced accessibility?", options: ["At least 7.0:1", "At least 2.0:1", "At least 3.0:1", "At least 50:1"], answer: 0, hint: "WCAG AAA requires 7.0:1 contrast for standard text." },
      { q: "Which shortcut automatically adjusts all failing contrast ratios on a frame to the nearest accessible token?", options: ["Ctrl / Cmd + Option + A", "Shift + Backspace", "Alt + Shift + Z", "Cmd + Shift + F"], answer: 0, hint: "Cmd/Ctrl + Option/Alt + A executes auto-contrast adjustments." },
      { q: "What does Pinning a frame as a Style Guide (`Cmd+P`) accomplish?", options: ["It designates the frame as the stylistic baseline for all subsequent generative iterations", "It locks the screen so nobody can view it", "It deletes all unused CSS code", "It posts the design to social media"], answer: 0, hint: "Style pinning anchors subsequent AI generations to verified visual ground truth." },
      { q: "What minimum dimensions should interactive touch buttons maintain on mobile screens for accessibility?", options: ["At least 44x44px", "At least 10x10px", "Exactly 200x200px", "Any size is acceptable"], answer: 0, hint: "44x44px is the universal mobile touch target minimum." },
      { q: "Why should designers never remove visible keyboard focus rings from interactive elements?", options: ["Focus rings are essential for keyboard-only and motor-impaired users to navigate interfaces", "Because focus rings increase page download speeds", "Because Figma requires focus rings to export images", "Focus rings have no purpose and should always be removed"], answer: 0, hint: "Focus rings indicate keyboard cursor position for accessibility." },
      { q: "Which key steps forward through the interactive keyboard tab order on an audited frame?", options: ["Tab", "Shift + Tab", "Spacebar", "Enter"], answer: 0, hint: "Tab steps forward through focusable interactive elements." },
      { q: "What does deep-selecting an element and pressing Escape do?", options: ["It selects the immediate parent container of the current element", "It closes the browser tab", "It deletes the entire design file", "It restarts the computer"], answer: 0, hint: "Escape navigates upward to the parent container." }
    ]
  },

  // Stage 4.5: Production Code Synthesis & Integration
  {
    tool: "Stitch",
    subNumber: 5,
    title: "Production Code Synthesis & Integration",
    goal: "Export verified production software: compiling stitched flows into React TSX, clean Tailwind CSS, design token JSON sync, and live deployment.",
    concepts: [
      "Code Synthesis compiles canvas layouts, component states, and token variables into clean React TypeScript (TSX) with zero visual drift.",
      "Token Preservation guarantees that exported CSS/Tailwind classes reference your design system tokens (`var(--color-brand)`) rather than static hex values.",
      "Semantic HTML Generation enforces accessible markup: `<button>` tags for actions, `<nav>` for menus, `<main>` for layout, and proper `<h1>-<h6>` heading order.",
      "The Bi-Directional Bridge allows developers to push code updates back into the design tool or pull design changes straight into Git branches."
    ],
    shortcuts: [
      ["Ctrl / Cmd + Shift + E", "Export clean production code bundle (TSX/HTML/CSS)"],
      ["Ctrl / Cmd + C", "Copy selected component code snippet to clipboard"],
      ["Shift + E", "Open Code Export Inspector panel"],
      ["Option + Cmd + T", "Verify token bindings before final compilation"],
      ["Ctrl / Cmd + Shift + P", "Preview live compiled React build in browser"],
      ["Ctrl / Cmd + S", "Commit and export production bundle"],
      ["Tab", "Cycle through exported component files"],
      ["Escape", "Close code export dialog"]
    ],
    tricks: [
      "Select any individual card or button and press `Ctrl/Cmd + C` in the Code Inspector to copy ready-to-paste production React TSX with Tailwind classes.",
      "Export your complete screen flow as a Next.js or Vite project bundle (`Cmd+Shift+E`) with configured routing and token CSS variables.",
      "Verify that exported form inputs contain `aria-label` or `<label>` tags to guarantee flawless screen reader compatibility out of the box.",
      "Use the Figma/Stitch sync plugin to keep your developer's GitHub repository synchronized with visual design updates."
    ],
    dos: [
      "Audit token preservation before exporting code to production.",
      "Verify that interactive controls compile to native `<button>` and `<a>` elements.",
      "Test exported React components in a staging environment before shipping.",
      "Maintain version control tags for exported design system releases."
    ],
    donts: [
      "Don't export code with unverified hardcoded hex values; ensure tokens are bound.",
      "Don't accept `<div>` tags with `onClick` handlers where semantic `<button>` tags belong.",
      "Don't allow bloated redundant wrapper containers in exported React components.",
      "Don't skip responsive breakpoint testing in real browser windows."
    ],
    diagram: {
      type: "schematic",
      caption: "Fig 4.5: React TSX Synthesis, Token Preservation & Git Export Flow",
      render: function() {
        return `
          <svg viewBox="0 0 860 260" class="schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="36" y="48" class="svg-caption">01 / STITCH CANVAS</text>
            <text x="36" y="70" class="svg-label">Verified Layout &amp; Tokens</text>
            <rect x="36" y="90" width="228" height="110" rx="6" class="svg-frame"/>
            <rect x="48" y="102" width="204" height="34" rx="4" fill="var(--accent)"/>
            <text x="150" y="124" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">Button: Primary</text>
            <rect x="48" y="146" width="204" height="34" rx="4" class="svg-stack-row"/>
            <text x="150" y="168" text-anchor="middle" class="svg-stack-text">100% Bound Tokens</text>

            <path d="M 285 130 L 325 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="325,126 333,130 325,134" class="svg-arrowhead"/>

            <rect x="335" y="20" width="260" height="220" rx="8" class="svg-box"/>
            <text x="351" y="48" class="svg-caption">02 / CODE SYNTHESIS</text>
            <text x="351" y="70" class="svg-label">Clean React TSX Output</text>
            <rect x="351" y="90" width="228" height="110" rx="6" class="svg-stack-row"/>
            <text x="363" y="112" class="svg-caption" fill="var(--accent)">&lt;button className="btn-primary"&gt;</text>
            <text x="375" y="130" class="svg-caption">&lt;Icon name={icon} /&gt;</text>
            <text x="375" y="148" class="svg-caption">&lt;span&gt;{children}&lt;/span&gt;</text>
            <text x="363" y="166" class="svg-caption" fill="var(--accent)">&lt;/button&gt;</text>
            <text x="351" y="218" class="svg-caption">Semantic HTML + Token Classes</text>

            <path d="M 600 130 L 640 130" class="svg-arrow" stroke-width="2"/>
            <polygon points="640,126 648,130 640,134" class="svg-arrowhead"/>

            <rect x="650" y="20" width="190" height="220" rx="8" class="svg-box"/>
            <text x="666" y="48" class="svg-caption">03 / PRODUCTION DEPLOY</text>
            <text x="666" y="70" class="svg-label">Git / CI/CD Ready</text>
            <rect x="666" y="90" width="158" height="34" rx="4" fill="var(--ok)"/>
            <text x="745" y="112" text-anchor="middle" fill="#FFFFFF" class="svg-stack-text">Export Complete</text>
            <text x="666" y="150" class="svg-caption">✓ Clean Tailwind Config</text>
            <text x="666" y="170" class="svg-caption">✓ Zero Visual Drift</text>
            <text x="666" y="190" class="svg-caption">✓ Full React Hydration</text>
          </svg>
        `;
      }
    },
    quiz: [
      { q: "Which shortcut exports the complete production code bundle (TSX/HTML/CSS) from Stitch?", options: ["Ctrl / Cmd + Shift + E", "Ctrl + E", "Alt + Shift + X", "Cmd + P"], answer: 0, hint: "Cmd/Ctrl + Shift + E triggers the production code export bundle." },
      { q: "What does Token Preservation mean in the context of code synthesis?", options: ["Exported CSS and component styles reference design system variables (e.g. var(--color-brand)) rather than static hex values", "Tokens are deleted to save disk space", "Tokens are converted into raster images", "Colors are converted to grayscale"], answer: 0, hint: "Token preservation keeps styles mapped to CSS variables." },
      { q: "Why should interactive clickable actions compile to semantic `<button>` or `<a>` elements rather than `<div>` tags?", options: ["Native buttons and links provide built-in keyboard accessibility, focus management, and screen reader announcements", "Because div tags are illegal in HTML5", "Div tags cannot have colors", "Buttons load faster from servers"], answer: 0, hint: "Semantic buttons and links provide necessary accessibility support out of the box." },
      { q: "What web frameworks does Stitch synthesis support for production code export?", options: ["Modern React (Next.js, Vite), Tailwind CSS, and standard HTML5/CSS3", "Fortran and COBOL only", "Flash and Silverlight only", "WordPress PHP exclusively"], answer: 0, hint: "Stitch exports clean modern React, Tailwind, and semantic HTML5." },
      { q: "How do you copy the React TSX code for a single selected component directly to your clipboard?", options: ["Select the element and press Ctrl / Cmd + C in the Code Inspector panel", "Take a screenshot", "Print to PDF", "Right click and choose 'Delete'"], answer: 0, hint: "Cmd/Ctrl + C in the code inspector copies component JSX." },
      { q: "What ensures that exported code matches visual canvas designs with zero layout drift?", options: ["Stitch compiles auto-layout flex and grid algorithms directly into matching CSS flexbox and grid rules", "A background image is stretched over the code", "The browser window is locked to 1024px", "All margins are set to 0px"], answer: 0, hint: "Direct mapping of flex and grid layouts guarantees pixel parity." },
      { q: "What should form `<input>` elements have in exported accessible code?", options: ["Associated `<label>` tags or descriptive `aria-label` attributes", "No text or labels at all", "Hardcoded dummy passwords", "Hidden visibility"], answer: 0, hint: "Form inputs require accessible labels for screen readers." },
      { q: "What is the purpose of the Bi-Directional Bridge between design tools and developer codebases?", options: ["It synchronizes visual design changes with GitHub branches and allows code updates to reflect back in design files", "It translates English into binary machine code", "It measures the developer's typing speed", "It sends automated emails every 5 minutes"], answer: 0, hint: "Bi-directional bridges keep design files and Git repositories in sync." },
      { q: "Which shortcut opens the Code Export Inspector panel on the canvas?", options: ["Shift + E", "Shift + C", "Alt + E", "Cmd + K"], answer: 0, hint: "Shift + E opens the code export inspector." },
      { q: "What final check should be performed on synthesized code before shipping to production?", options: ["Verify responsive breakpoint behavior, accessibility contrast, and token variable linkage", "Change all font sizes to 10px", "Delete the Tailwind config file", "Disable all navigation links"], answer: 0, hint: "Always verify responsiveness, accessibility, and token linkage." }
    ]
  }
];
