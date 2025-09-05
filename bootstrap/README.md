# Bootstrap 5 SCSS Customization Project

## Learning Goals
- Use Bootstrap 5 grid system and components.
- Customize Bootstrap theme colors with SCSS variables.
- Use Bootstrap spacing and display utilities.

## How It Works
- Bootstrap SCSS variables (`$primary`, `$secondary`, `$accent`) were overridden in `scss/custom.scss`.
- The customized SCSS was compiled into `dist/custom.css`.
- Components used:
  - Navbar with collapse functionality.
  - Cards with Bootstrap grid system.
  - Buttons styled with customized colors.

## How to Run
1. Install dependencies: `npm install bootstrap sass`
2. Compile SCSS: `sass scss/custom.scss dist/custom.css`
3. Open `index.html` in the browser.
# Bootstrap Project with JavaScript Features
#  NatureScape Interactive Website

## Features
- **Semantic HTML5**: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`
- **Accessible Form**: email, password, dropdown, checkbox with HTML5 validation
- **Multimedia**: video + audio per gallery item
- **JavaScript Enhancements**:
  - Client-side form validation with real-time error messages
  - Fetches posts from JSONPlaceholder API using `async/await`
  - Event listeners on gallery images (click → alert) and header title (hover → color change)

## Learning Goals
- DOM manipulation and event handling
- ES6+ features (`const`, arrow functions, template literals)
- Async calls using `fetch()` with Promises/`async/await`
- Accessible + responsive design

## How to Run
1. Open `index.html` in a browser
2. Try submitting the form (see validation)
3. Click **Fetch Posts** to load sample API data
4. Click gallery images or hover over site title to see event interactions
