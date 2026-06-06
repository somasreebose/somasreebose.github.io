# Project: somasreebose.github.io

## Project Overview
This repository contains a modern, responsive UI/UX portfolio for **Somasree Bose**, hosted on GitHub Pages. It features a clean design with entrance animations, a mobile-responsive navbar, and a dedicated projects showcase.

- **Primary Goal:** To serve as a professional landing page and project portfolio.
- **Hosting:** GitHub Pages (`https://somasreebose.github.io/`).

## Tech Stack
- **Frontend:** Vanilla HTML5, JavaScript (ES6+).
- **Styling:** Tailwind CSS (compiled via Node.js).
- **Icons:** Font Awesome (CDN).
- **Fonts:** Inter (Google Fonts).

## Project Structure
- `index.html`: Main entry point.
- `src/input.css`: Source CSS with Tailwind directives and custom animations.
- `css/output.css`: Compiled, minified CSS for production (committed to git).
- `js/main.js`: Interactivity logic (navbar scroll, mobile menu, scroll animations).
- `package.json`: Contains build scripts for Tailwind.
- `tailwind.config.js`: Tailwind theme and configuration.

## Building and Running

### Local Development
1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Watch CSS Changes:**
   ```bash
   npm run dev:css
   ```
3. **Live Server:** Open `index.html` using a local server (e.g., Live Server extension in VS Code).

### Production Build
To compile and minify the CSS before pushing:
```bash
npm run build:css
```

## Development Conventions
- **Automatic Deployment:** After making stable changes and verifying them locally, **always** push the changes to the `main` branch to ensure the GitHub Pages site is updated and live.
- **Utility-First:** Use Tailwind utility classes for styling whenever possible.
- **Animations:** Use the `.fade-in` class in HTML for scroll-triggered animations.
- **Responsiveness:** Always test changes on mobile and desktop viewports.
- **Clean Code:** Keep `main.js` focused on UI/UX interactivity.

---
*This file serves as instructional context for Gemini CLI. Update it as the project matures.*
