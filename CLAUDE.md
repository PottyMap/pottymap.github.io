# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing/support website for PottyMap, a dog-walking iOS app, served via GitHub Pages from the `main` branch. Plain HTML + a single shared CSS file — **no build step, no dependencies, no tests**. To preview, open the HTML files in a browser (or `python3 -m http.server`).

The app itself is a separate codebase at `/Users/xinyuandou/Desktop/dog_walking_app` (it has its own CLAUDE.md). When editing site copy about features, privacy, or data collection, check the app code there so the website stays accurate.

## Structure

- `index.html` — landing page (hero, features grid, profile spotlight, CTA)
- `support.html` and `privacy.html` — content pages using the shared `.page` layout class
- `style.css` — all styling; theming lives in the `:root` CSS variables at the top (colors, radius, max-width)
- `.nojekyll` — required so GitHub Pages serves files as-is; don't remove

## Conventions

- All three pages duplicate the same header/footer markup — when changing nav or footer, update every `.html` file.
- Phone-frame screenshots use `.phone` wrappers with images from `images/`.
- The privacy policy is a draft/template (flagged in a `.note` block in `privacy.html`) and must be reviewed before App Store submission.
- Contact email used across the site: `pottymap@gmail.com`.
