# Static Frontend Implementation

## Overview
This repository contains a **static HTML/CSS/JS implementation** of a website view.
The goal was to deliver a pixel-perfect and responsive frontend that can later be integrated with dynamic data by the backend team.

The project has been structured in a way that allows it to scale and be easily maintained by multiple developers working simultaneously.

The task consisted of implementing the frontend based on the provided design.
The design was delivered in Figma and served as the main reference throughout the development process.

Preview is available here: [**View Page Design in Figma**](https://www.figma.com/design/zq0sbZjL9mwEhsuxaaBnbw/Crafton---Zadanie-Testowe?node-id=0-1&t=uSP6nwDeQJBsOGs8-1)

The project is deployed via **GitHub Pages**.  
Every push to the `main` branch triggers an automatic redeployment.

Live preview is available here: [**View Demo on GitHub Pages**](https://mieszkop13.github.io/frontend-recruitment-task/)

## Features
- Responsive layout (desktop, tablet, mobile).
- Modular structure of components (header, slider, articles, contact form, footer).
- Custom slider with navigation arrows and looping effect.
- Client-side form validation with error handling.
- Mobile navigation with burger menu and submenus.
- Semantic and accessible HTML structure.
- Separation of concerns: **HTML for structure**, **CSS for styling**, **JavaScript for interactions**.

## Project structure

```
.
├── .gitignore
├── index.html
├── README.md
├── assests/
│   ├── icons/
│   │   └── location.svg
│   └── images/
│       ├── arrow.svg
│       ├── article1.jpg
│       ├── article2.jpg
│       ├── article3.jpg
│       ├── logo.svg
│       ├── slide1.jpg
│       ├── slide2.jpg
│       └── slide3.jpg
├── css/
│   ├── base.css
│   ├── components.css
│   ├── layout.css
│   ├── reset.css
│   └── variables.css
└── js/
    ├── contact-form.js
    ├── main.js
    ├── menu.js
    └── slider.js
```

### What’s in each file

- **`.gitignore`**  
  Standard ignore rules (node_modules, .DS_Store, build artifacts). Keep this up to date for local dev files you don’t want committed.

- **`index.html`**  
  Single static entry point. Includes links to the css files and the JS entry scripts. Structure is semantic and split into the main components (header, slider, articles, contact, footer).

- **`README.md`**  
  Project README with overview, local setup, demo link and developer notes.

- **`assests/`** (note: the folder is spelled `assests` in the repo)  
  - **`icons/`** – small UI SVGs used inline or as <img> (e.g. `location.svg`).  
  - **`images/`** – large media: slider images, article thumbnails, logo, arrow icons. These are final static assets that get shipped with the static build.

- **`css/`**  
  - **`reset.css`** — CSS reset/normalize to unify browser defaults.  
  - **`variables.css`** — CSS custom properties: colors, typography tokens, spacing and reusable variables (used across other files).  
  - **`base.css`** — global base rules: body, typography defaults, utility classes.  
  - **`layout.css`** — layout-level styles: containers, grid/wrapper rules, page sections and responsive breakpoints.  
  - **`components.css`** — component-level styles: navbar, buttons, forms, slider, cards. Components should be small, reusable and scoped.

- **`js/`**  
  - **`main.js`** — orchestrator: initializes components on DOM ready (calls menu, slider and contact-form init).  
  - **`menu.js`** — mobile/desktop navigation logic (burger toggle, submenu toggles, resize handling).  
  - **`slider.js`** — slider logic (slide translation, infinite loop behavior, prev/next controls).  
  - **`contact-form.js`** — form validation and submit handling (client-side validation, error UI, submit handler that triggers the UI flow).

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari).
- Local HTTP server for proper asset loading (optional but recommended).

### Running locally
1. Clone the repository:
   ```bash
   git clone git@github.com:mieszkoP13/frontend-recruitment-task.git
   cd frontend-recruitment-task
   ```
2. Open `index.html` directly in your browser  
   *(or serve via a local server, e.g. `php -S localhost:3000` or `npx serve`)*.
3. Navigate to the project in your browser.

## Collaboration Guidelines
Since this project is designed as part of a larger system:
- Keep **consistent file/folder structure** (HTML in root, assets grouped in `assests/`).
- Use **semantic commits** and meaningful PR descriptions.
- Avoid inline styles and scripts – maintain separation of concerns.
- Test responsiveness across devices before merging changes.
- All new features or bugfixes must be peer-reviewed.

## Future Integration
This static implementation is meant to be integrated with backend logic.  
Suggested next steps:
- Replace static content with dynamic templates (PHP, Twig, or other templating engines).
- Connect forms with backend endpoints.
- Serve assets through a build pipeline (Webpack, Vite, etc.).
- Implement SEO optimizations and analytics.

## License
This project is provided for recruitment purposes only.
