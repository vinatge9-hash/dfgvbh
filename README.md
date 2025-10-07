# Aurora Café - Production Ready Static Site (Non-Responsive Baseline)

This repository contains a minimal, production-ready MP (Multi-Page) site that adheres to the provided architecture and design system. Key features include:

- Sticky glass navigation
- Inline SVG icons
- Lightbox gallery
- Simple client-side CMS for menu editing via localStorage
- Map widgets and hours panels
- Non-responsive baseline (per constraints) with a plan for follow-up responsive upgrade

Files:

- index.html: Home page
- menu.html: Menu with CMS editor panel
- our-story.html: Brand story
- locations.html: Locations and hours
- events.html: Upcoming events
- gallery.html: Photo gallery with lightbox
- contact.html: Contact form and newsletter
- assets/css/style.css: Global styling
- assets/js/main.js: Core interactivity and animations
- cms/: tiny YAML placeholders for CMS data

How to run:
1. Open the HTML files directly in a browser (no server required).
2. Use the CMS panel on the Menu page to edit menu items. Data persists in localStorage.

Accessibility notes:
- All interactive elements have transitions and focus styles.
- SVG icons are inline to avoid external icon libraries.
- Metadata is included for SEO.
