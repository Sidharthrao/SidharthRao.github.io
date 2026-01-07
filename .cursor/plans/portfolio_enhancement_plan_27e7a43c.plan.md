---
name: Portfolio Enhancement Plan
overview: Add a Technology Stack section with grid cards, restructure project cards to use bullet point format with placeholders, and create a separate personal "About Me" page with navigation button in the profile section.
todos:
  - id: tech-stack-section
    content: Add Technology Stack section with grid cards to index.html and styles.css
    status: completed
  - id: project-bullet-points
    content: Modify project cards to include bullet point features in script.js and styles.css
    status: completed
  - id: projects-config-features
    content: Update projects-config.json with features array template
    status: completed
  - id: about-button
    content: Add 'About Me' navigation button to profile section in index.html
    status: completed
  - id: personal-page
    content: Create about-personal.html with hobbies, activities, and photo placeholders
    status: completed
---

# Portfolio Enhancement Plan

This plan adds three key features to your portfolio at https://sidharthrao.github.io/: a Technology Stack section, bullet-point project cards, and a personal About Me page.---

## 1. Technology Stack Section

Add a new section after the profile section displaying your skills as a grid of small cards with hover effects.**File to modify:** [`index.html`](index.html) and [`styles.css`](styles.css)**Technologies to include (as grid cards):**

- Financial Planning & Analysis
- Machine Learning (Random Forest, XGB, LightGBM, Regression)
- Generative AI (RAG, GraphRAG, Agentic AI)
- Statistics (Hypothesis Testing, AB Testing)
- NLP
- FastAPI
- Power BI
- Python
- SQL
- Git / GitHub
- Project Management

**Design approach:** Grid of cards similar to the reference project's `.tech-grid` but adapted to match your current color scheme (--secondary-color: #3498db).---

## 2. Project Cards with Bullet Points

Modify the project card structure to display features as bullet points with placeholder text for you to fill in later.**Files to modify:** [`script.js`](script.js) and [`styles.css`](styles.css)**Current structure:**

```html
<div class="project-card">
  <h2>Project Title</h2>
  <p>Description</p>
  <div class="technologies">...</div>
</div>
```

**New structure (like reference):**

```html
<div class="project-card">
  <h2>Project Title</h2>
  <p>Description</p>
  <ul class="project-features">
    <li>Feature placeholder 1</li>
    <li>Feature placeholder 2</li>
    <li>Feature placeholder 3</li>
  </ul>
  <div class="technologies">...</div>
</div>
```

**Configuration update:** Add a `features` array to [`config/projects-config.json`](config/projects-config.json) for each project.---

## 3. Personal "About Me" Page

Create a separate page for personal content (hobbies, activities, pictures) with a button in the profile section to navigate between professional and personal views.**New file:** `about-personal.html` - A standalone page with similar styling**Button placement:** Add a "Personal" or "About Me" button next to your social links in the profile section**Page structure:**

- Header with navigation back to main portfolio
- Personal bio section
- Hobbies/interests section with placeholder content
- Photo gallery section (placeholder grid)
- Footer matching main site

---

## Summary of Changes

| File | Changes ||------|---------|| `index.html` | Add tech stack section, add "About Me" button || `styles.css` | Add tech-grid styles, project-features list styles, button styles || `script.js` | Modify `createProjectCard()` to render bullet points |