# Semantic HTML5 Website

## Project Overview
This project demonstrates a single-page HTML5 website built with **semantic tags**, **accessible forms**, **multimedia embedding**, and **ARIA roles** to improve accessibility.

## Features Implemented
- **Semantic Structure**
  - `<header>` and `<footer>` define site landmarks.
  - `<nav>` provides main navigation with ARIA role `navigation`.
  - `<section>` elements used for content grouping (`About`, `Gallery`, `Contact`).
  - `<article>` wraps meaningful standalone content.
  - `<figure>` and `<figcaption>` describe images.

- **Accessible Form**
  - Email input with `type="email"` and `required`.
  - Password input with `type="password"` and `minlength`.
  - Dropdown `<select>` with required validation.
  - Checkbox for newsletter subscription.
  - Labels correctly associated with form controls using `for` attributes.

- **Multimedia**
  - `<video>` element with `controls`.
  - `<audio>` element with `controls`.
  - Alternative text (`alt`) provided for images.

- **Accessibility Enhancements**
  - ARIA roles (`banner`, `navigation`, `region`, `form`, `contentinfo`) used to define page landmarks.
  - `aria-labelledby` ensures headings are programmatically linked to their regions.
  - Alt attributes ensure images are accessible to screen readers.

## How to Run
1. Open `index.html` in a web browser.
2. Form validation works automatically with HTML5 (no JavaScript required).
3. Ensure `naturevdo.mov` and `nature-sound.mp3` are placed in the same directory, or replace with your own media.

---
###sCSS###
# SCSS Styling for Semantic HTML5 Website

## Project Overview
This project extends the **semantic HTML5 website** with SCSS styling. It demonstrates:
- Flexbox in the header
- CSS Grid for content layout
- SCSS features like variables, nesting, mixins, and inheritance
- CSS animations for visual engagement
- Responsive design for **mobile (320px)**, **tablet (768px)**, and **desktop (1024px)**

---

## SCSS Features
- **Variables**: Define primary/secondary colors, background, and font stack.
- **Nesting**: Used for `header nav ul li a`, form elements, etc.
- **Mixins**:
  - `flex-center`: reusable Flexbox centering
  - `responsive-text`: makes font sizes scale across breakpoints
- **Animations**: `fadeIn` keyframes applied to body on load, hover effect on buttons.

---

## Responsiveness
- **Mobile (320px)**: Single-column layout, stacked sections.
- **Tablet (768px)**: Gallery switches to a 2-column grid.
- **Desktop (1024px)**: Gallery switches to a 3-column grid.
- Navigation is flex-wrapped for smaller devices.

---

## How to Run
1. Open `index.html` in the browser.
2. Compile SCSS to CSS (already provided as `style.css`).
   ```bash
   sass style.scss style.css
