# PROGRESS

Last updated: 2026-10-15 (Phase R8 complete)

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

- Phase R8: Physics 9702 and Computer Science 9618 rebuilt in the Mathematics design —
  Start Learning with the six folders, exam overviews, handouts indexes, component
  pickers (5 Physics papers, 4 Computer Science papers) with June 2024 and specimen
  paper links, chapter handouts by level with 45 chapter pages (25 + 20), last-minute
  prep and everything-in-one-tab pages. `/as-and-a-level/` gained an Other row
  (`/as-and-a-level/other/`): Mongolian 11th grade curriculum / Үндэсний хөтөлбөр
  (Монгол хэл, Үндэсний бичиг, Уран зохиол, Нийгэм судлал) and Non-technical classes
  (General Language English, Global Perspectives and Research). Duplicated site name in
  page titles fixed in the layout; Quadratics chapter notice links fixed; sitemap
  regenerated (167 URLs).

## In progress
- Nothing.

## Next
- Content phases, one topic per chat.

## Open issues
- CV content not yet supplied; /cv/ reads "To be added!" until the author sends it.
- No real Jekyll build is possible in the sandbox (no Ruby). Phase R8 used an
  approximate preview build (liquidjs + markdown-it, kept outside the repository):
  167 pages, 3440 internal links, none broken, no unrendered Liquid. Kramdown-only
  behaviour still has to be confirmed on the live site after publishing.
- The Other folders, Physics/CS chapter pages (Notes, Worked examples, Practice) and
  past-paper walkthroughs read "To be added!" until the author writes them.
- physics/handouts/physical-quantities.md was recreated from scratch in Phase 5;
  confirm it exists once and not also at physics/physical-quantities.md.
- style-demo.md is intentionally unlinked; keep it out of the navbar and out of
  resources/index.md.
- Build FAIL: `bundle exec jekyll build` could not run (`bundle: command not
  found`); generated page count and build warnings cannot be determined.
- computer-science/handouts/info-rep-handout.md serves /computer-science/handouts/info-rep/
  (checked in R8; every link to it resolves). Two pairs share permalinks: quadratics.md and
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
- The quadratics.md links to handouts/quadratics-self-assessment/ and
  handouts/quadratics-exam-style/ are gone (checked in R8). The external font URL
  in _layouts/default.html contains uppercase `Montserrat` after the domain,
  which the requested uppercase-href check flags. Dynamic Liquid hrefs cannot
  be fully resolved without a build.
- Publication check remains blocked in this sandbox: all three curls to the
  live site failed with OpenSSL SSL_ERROR_SYSCALL (exit 35). The GitHub Pages
  deployment and live appearance must be checked externally after PR #2.
