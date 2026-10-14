# Design Stack Roadmap

A learning path through Figma, Spline, Stitch and Framer.
Twelve stages, each with concepts, shortcuts, tricks, do and don't lists,
an SVG illustration, and a checkpoint of ten questions.

Questions appear one at a time. Answer one correctly to reveal the next.
Passing all ten unlocks the following stage.

## Structure

    design-stack-roadmap/
    ├── index.html        Page markup
    ├── css/
    │   └── styles.css    Design tokens, layout, components, checkpoint styles
    ├── js/
    │   ├── stages.js     Course content: stages, shortcuts, tricks, questions
    │   └── app.js        Navigation, checkpoint gating, diagrams, theme, motion
    └── README.md

## Running it

Open index.html in a modern browser.

Internet access is needed on first load for Google Fonts and the Lucide icon library.

## Editing content

- Add or change questions in js/stages.js. Each question needs `q`, `options`,
  `answer` (zero-based index of the correct option) and `hint`.
- Change colours, spacing and type in the tokens at the top of css/styles.css.

## Progress

Progress is held in memory. Refreshing the page resets it.

## Verifying tool details

Shortcuts and feature names change between tool versions. Confirm them in each
app's help panel before relying on them.
