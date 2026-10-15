# DESIGN CONTRACT (append-only)

Runtime tokens live in `assets/css/main.css`. This file records the rules so any
future session can comply without re-deriving them. Append new blocks at the end;
never rewrite or reorder what is already here.

## Source of truth
Kevin Zhou, knzhou.github.io — theme CSS and custom layout layer inspected 2026-10-14.

## Tokens
- Root font size 13.09px; 17px at min-width 58em. Everything else in rem.
- Headings: Montserrat 400, colour #313131. Body: system UI stack, #212529.
  Mono: SFMono-Regular / Menlo / Consolas stack.
- Links #2962ff; hover #003adc with underline. Muted text #6c757d / #555555.
- Rules 1px #e5e7eb; navbar border #dee2e6. Surfaces #f8f9fa and #f3f6ff.
- Navbar: fixed, 63px desktop / 44px mobile, brand hidden at <=991px, links 18px,
  colour transition .6s, no hover underline in the navbar.
- Section rhythm: `.aligned-row + .aligned-row` = 40px gap + 40px padding + 1px rule.
- Two-column grid at >=992px: 180px heading gutter, 36px gap, `.aligned-text` in column 2.
  `.aligned-sections` width is calc(66.666667% + 206px).
- No footer anywhere. body keeps padding-bottom 80px.
- No shadows, no gradients, radius <= 4px, no animation except colour transitions,
  no dark mode, no emoji in site content.

## Rules
- New components are built from these tokens only. No new colours, ever.
- To change a colour, edit :root in main.css. Never restyle a layout class for colour.
- Topic lists use `.handout-list` (code gutter + title + bordered pills). Not cards.
- Mathematics stays as $...$ and $$...$$ in Markdown; kramdown math_engine is null.

## Handout block vocabulary
- `.handout-shell` — centred outer handout wrapper with a 52rem maximum width.
- `.handout-breadcrumb` — wrapping, muted breadcrumb row aligned to the reading column and hidden in print.
- `.handout` — centred article with a 45rem maximum reading width.
- `.handout-header` — title-area spacing; kept together and with the following content when printing.
- `.handout-kicker` — small, muted Montserrat line above the title.
- `.handout-summary` — slightly enlarged, muted lede below the metadata.
- `.handout-meta` — compact, muted metadata line.
- `.handout-content` — readable body text, ruled top-level section headings, and fixed-navbar anchor offsets.
- `.handout-head` — framing header with bottom padding and a 1px token rule.
- `.running-head` — running title underlined by a 1px token rule.
- `.handout-total` — right-aligned, semibold total-points line.
- `.toc` — neutral bordered contents box with an indented list; hidden in print.
- `.toc-title` — compact Montserrat 600 contents label.
- `.box` — neutral block with a 1px rule, surface fill, and 4px token radius; kept together in print.
- `.box-title` — Montserrat 600 block label with space below it.
- `.is-idea` — box modifier that strengthens the title to Montserrat 700.
- `.is-remark` — box modifier that reduces supporting text to 0.9rem.
- `.is-pitfall` — box modifier that underlines the title without introducing another colour.
- `.example` — neutral bordered worked-example block kept together in print.
- `.example-head` — wrapping heading row that separates the example title from its source tag.
- `.source-tag` — small, muted, bordered source label using the body font.
- `.example-statement` — problem-statement area with spacing before the solution.
- `.solution` — worked solution separated by a top rule and kept together in print.
- `.solution-label` — compact Montserrat 600 solution label.
- `.steps` — numbered solution list; both the list and individual steps avoid print page breaks.
- `.problems` — marker-free exercise list with separately bordered, surface-filled items kept together in print.
- `.pts` — right-floating, unbroken point value in muted semibold text.
- `.problem-no` — explicit Montserrat 600 problem number with trailing space.
- `.mark` — compact, bordered monospace scoring badge with a surface fill.
- `.marks-total` — right-aligned, semibold scoring total below a top rule.
- `.examiner` — neutral bordered guidance in smaller muted text; hidden in print.
- `.sa-question` — neutral bordered short-answer block that contains its point value and stays together in print.
- `.sa-answer` — short-answer response separated by a top rule and kept together in print.
- `.key-takeaway` — neutral bordered, semibold summary kept together in print.

## Colour layer (Phase C)

- Every colour is read from one variable: --accent, set per subject on
  <body data-subject="mathematics|physics|computer-science">.
- Subject accents: Mathematics #1d4ed8 (blue) · Physics #6d28d9 (violet) ·
  Computer Science #0e7c5a (green) · neutral pages #1d4ed8.
- Semantic colours, same on every page: common errors #b02a37 on #fdf2f2 ·
  key formula / examiner / takeaway #8a5a00 on #fffaf0 · final answer #15803d on
  #f1f9f3 · mark tags #6d28d9 on #f3efff.
- All text-on-white pairs clear WCAG AA. No meaning is carried by colour alone:
  every coloured element also carries a word (Idea, Pitfall, Key takeaway, M1).
- Colour may only be introduced as a token in the COLOUR LAYER block of
  main.css. Never write a hex value in a component rule.

## Simple site (Phase R1)

- Navigation is exactly: Home · Club · AS and A Level · Resources · About.
- Home, Club, AS and A Level and About use plain white rows (.simple-row), not cards.
- Colour is limited to the logo (assets/img/logo.svg), links, and the subject handouts.
- Subject pages (/mathematics/, /physics/, /computer-science/) are reached from AS and A Level.

## Resources folders (Phase R2)

- resources/<subject>/index.md lists six folders under "Handouts":
  overview, step-by-step-solutions, past-paper-walkthroughs, chapter-handouts,
  last-minute-prep, everything-in-one-tab.
- Each folder page reads "To be added!" until content is written.
- The About page uses the author's own wording. Edit it only with the author's approval.

## Phone navigation and CV (Phase R3)

- Phone (under 992px): brand on its own row; links in one horizontally scrollable row;
  44px tap targets.
- Navigation order: Home · Club · AS and A Level · Resources · About · CV.
- Home introduction order: subjects first, astronomy and club second, then subject links,
  resources, CV.
