# PROGRESS

Last updated: 2026-10-15 (Phase R7 complete)

## Done
- Phase 1 design lock, Phase 2 handout language, Phases 3-5 prototype topics
  (9709 Quadratics, 9702 Physical quantities, 9618 Information representation).
- Phase C: colour layer (per-subject accents, semantic callouts, mark tags) and
  the About the author page at /about/.
- Phase V verification attempted on 2026-10-15: static checks completed; the
  build could not start because Bundler is not installed. No page was rendered
  or generated-page count verified. Unresolved failures are listed below.
- Publish attempt on 2026-10-15: committed and pushed the workspace to the
  session branch; PR #2 merged into main (merge commit 02f0a31).
  Direct pushes to main are not allowed in this Arena session. After waiting
  90 seconds, all three live-site curl checks failed at the TLS connection;
  Pages delivery and the visible About/colour changes remain unverified.
- Phase R1: simple home page, logo, Club and AS and A Level pages, five-link
  navigation, and plain-row styling completed on 2026-10-15.
- Phase R2: About page in the author's own words, resources hub, three subject
  pages, and 18 handout pages completed on 2026-10-15.
- Phase R3: phone navigation (brand row, scrollable links, 44px targets),
  six-link navigation with CV last, subject-first home introduction, and CV
  page at /cv/ completed on 2026-10-15.
- Phase R4: Home page updated to Kevin Zhou two-column profile layout with
  author portrait (`assets/img/portrait.png`), club logo (`assets/img/club-logo.png`),
  and contact email (`28c_galbadrakh.u@mongolaspiration.edu.mn`); personal statement
  removed from `/about/`; club logo and contact email added to `/club/`.

- Phase R7: Resources removed from the navigation and the `/resources/` tree deleted;
  Home-page email set to `28c_galbadrakh.u@mongolaspiration.edu.mn`; `/club/` rebuilt in
  the Home-page profile layout; “Oyunlag Suragch”, SASMO/Serius/Vanda and Solar Activity
  lines removed site-wide; OWAO 2025 Gold + Diamond cited to the official results page;
  Mathematics rewritten around six handouts folders (overview, step-by-step solutions,
  past-paper walkthroughs, chapter handouts, last-minute prep, everything in one tab) with
  a CAIE 9709 component picker, six component pages carrying syllabus and paper citations,
  four chapter-handout paper pages and 35 chapter pages; sitemap regenerated.

## In progress
- Nothing.

## Next
- Content phases, one topic per chat.

## Open issues
- CV content not yet supplied; /cv/ reads "To be added!" until the author sends it.
- The site has never been built or rendered in the environment.
- physics/handouts/physical-quantities.md was recreated from scratch in Phase 5;
  confirm it exists once and not also at physics/physical-quantities.md.
- style-demo.md is intentionally unlinked; keep it out of the navbar and out of
  resources/index.md.
- Build FAIL: `bundle exec jekyll build` could not run (`bundle: command not
  found`); generated page count and build warnings cannot be determined.
- Inventory FAIL: computer-science/handouts/info-rep.md is missing (an alternate
  info-rep-handout.md exists). Two pairs share permalinks: quadratics.md and
  quadratics-handout.md; physical-quantities.md and physical-quantities-handout.md.
- Step badge FAIL: handout.css lacks `counter-reset: step` on `.solution .steps`;
  its `::before` does not contain `counter-increment` either. Badge numbering
  cannot work as intended. The check only authorized removing an increment from
  `::before`, not adding the missing reset or increment.
- Colour token deviation: handout.css contains component hex `#f5f7fa` outside
  the allowed token declarations (reported, not fixed as instructed).
- Math delimiter FAIL: display `$$` lacks the required blank-line/standalone
  treatment in quadratics.md, quadratics-solutions.md, physical-quantities.md,
  and style-demo.md. No fenced-code dollars, word-adjacent inline maths, or
  display maths in table cells were found in content pages.
- Link FAIL: quadratics.md links to non-existent handouts/quadratics-self-
  assessment/ and handouts/quadratics-exam-style/ routes. The external font URL
  in _layouts/default.html contains uppercase `Montserrat` after the domain,
  which the requested uppercase-href check flags. Dynamic Liquid hrefs cannot
  be fully resolved without a build.
- Publication check remains blocked in this sandbox: all three curls to the
  live site failed with OpenSSL SSL_ERROR_SYSCALL (exit 35). The GitHub Pages
  deployment and live appearance must be checked externally after PR #2.
