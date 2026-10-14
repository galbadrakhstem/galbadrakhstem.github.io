# PROGRESS

Last updated: 2026-10-15 (Phase V verification attempted)

## Done
- Phase 1 design lock, Phase 2 handout language, Phases 3-5 prototype topics
  (9709 Quadratics, 9702 Physical quantities, 9618 Information representation).
- Phase C: colour layer (per-subject accents, semantic callouts, mark tags) and
  the About the author page at /about/.
- Phase V verification attempted on 2026-10-15: static checks completed; the
  build could not start because Bundler is not installed. No page was rendered
  or generated-page count verified. Unresolved failures are listed below.

## In progress
- Nothing.

## Next
- Phase V verification: build the site, inventory the files, check every link,
  check maths delimiters, confirm no footer exists.

## Open issues
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

## Rules in force
- One phase per chat. Read only the files named in the prompt, plus PROGRESS.md
  and DESIGN.md. No repository scans.
- Never print file contents or diffs in chat. End with a summary of <=10 lines.
- Colour comes from tokens only. One topic per chat when writing content.
- Every step of every solution shown.
