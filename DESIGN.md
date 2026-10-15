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

## Home profile, Club logo, and Contact (Phase R4)

- Home page uses `.aligned-sections.about-layout` (Kevin Zhou two-column profile layout):
  left column `.about-profile` with circular portrait (`assets/img/portrait.png`),
  name, email (`28c_galbadrakh.u@mongolaspiration.edu.mn`), CV link, and Club logo
  (`assets/img/club-logo.png`); right column `.about-biography` with introduction,
  astronomy and club section, and subject/resource links.
- Personal statement removed from `/about/`.
- Contact email `28c_galbadrakh.u@mongolaspiration.edu.mn` configured in `_config.yml`
  and displayed on `/`, `/about/`, and `/club/`.

## Astronomy expansion and contact update (Phase R5 — 2026-10-15)

- Contact email updated to `physicsandastronomy24@gmail.com` in `_config.yml`, `/`, `/about/`, `/club/`, `/cv/`, and all new astronomy pages.
- New top-level subject Astronomy added: `/astronomy/` landing + 4 subfolders:
  `/astronomy/olympiad/` (OWAO IV Gold + Diamond, National IX Gold, X Bronze Senior, club results 4 middle + 2 senior, D. Dolgion prize),
  `/astronomy/book/` (Cosmic Calculations: Orbital Mechanics),
  `/astronomy/club/` (MAIS Physics & Astronomy Club teaching),
  `/astronomy/other/` (Solar Activity research assistant 24 Jun–14 Jul 2025, outreach, interests).
- Resources mirrored: `/resources/astronomy/` with handouts (6 folders) + olympiad/book/club/other indexes linking to `/astronomy/*`.
- Navbar: Home · Astronomy · Club · AS and A Level · Resources · About · CV. Added Astronomy accent #b45309 amber in main.css and subject detection for astronomy in default.html (including resources/astronomy second segment).
- CV updated from Resume.pdf (Mongolian certificate): Education 10V Mongol Aspiration, A-grade 2024–2026, research assistant solar activity, club founder 14 Nov 2024, awards: OWAO IV Gold+Diamond, National IX Gold, X Bronze Senior, Oyunlag Suragch Gold Medal, SASMO 2025 Gold, Serius 2025 Gold, Vanda 2024 Bronze, class art festival 1st, personality curious/responsible, interests astronomy/table tennis/cube.
- About page expanded with Education/Research/Awards sections; Club page expanded with teaching + founder achievements.
- For Physics, Mathematics, Computer Science — added 4 subfolders each: olympiad, book, club, other (placeholder “To be added!”) to satisfy request “Add folders for Physics, math computer Science”. Updated their landing pages and /as-and-a-level/ and /resources/ to link to new subfolders.
- Colour layer now: Mathematics #1d4ed8, Physics #6d28d9, CS #0e7c5a, Astronomy #b45309, neutral #1d4ed8.

## Banner fix, favicon, bold nav, SEO, Physics and Astronomy rename (Phase R6 — 2026-10-15)

- Banner blocking fix: body now always has margin-top var(--nav-h) on desktop; on mobile (max-width 991px) navbar position set to relative and body margin-top 0, main.container padding-top 20px. This prevents fixed banner covering portrait/text on phones. Removed earlier display:none brand rule that hid Galbadrakh STEM logo on phones — brand now visible on mobile as two rows (brand row + scrollable links row).
- main.container padding-top reduced from 60px to 24px desktop (20px mobile) because body margin handles navbar height.
- Bold portal names like Kevin Zhou: .navbar-brand font-weight 700, .nav-link font-weight 600, .nav-link.active font-weight 700 and color var(--link). When on Home, Home is bolder (700) than others (600).
- Club portal renamed to Physics and Astronomy: navbar label changed from Club to Physics and Astronomy, club.md title changed to Physics and Astronomy · Galbadrakh STEM, permalink stays /club/ for backward compatibility.
- Favicon/logo instead of globe: generated favicon.png (64x64, 4-color squares mimicking logo.svg), favicon.ico (multi-size), apple-touch-icon.png (180x180), and added links in default.html head for svg, png, ico, apple-touch-icon. Logo.svg already at assets/img/logo.svg now used as favicon SVG.
- Google SEO: _config.yml description expanded to include Galbadrakh, galbadrakhstem, Astronomy Olympiad, MAIS Physics and Astronomy Club, Cosmic Calculations. Added Open Graph tags, Twitter card, JSON-LD Person + WebSite schema (name, alternateName galbadrakhstem, url, image portrait, email, affiliation, sameAs). Added robots.txt (Allow all + Sitemap) and sitemap.xml listing all main pages and new astronomy/physics/math/cs subfolders. Added keywords meta. Canonical already present. This helps Google show galbadrakhstem.github.io when searching Galbadrakhstem like Kevin Zhou site.
- Files added: favicon.ico (root), assets/favicon.ico, assets/img/favicon.png, assets/img/apple-touch-icon.png, robots.txt, sitemap.xml.

## Mathematics hub, handout structure, and citation pass (Phase R7 — 2026-10-15)

- Navbar: **Resources removed**. Navigation is now Home · Astronomy · Physics and
  Astronomy · AS and A Level · About · CV. The whole `/resources/` tree was deleted
  (all pages were “To be added!” stubs); handout folders now live under their subject,
  at `/mathematics/handouts/…`. `/as-and-a-level/` gained a Handouts row and
  `/physics/olympiad/`, `/astronomy/`, `/astronomy/olympiad/` no longer link to
  `/resources/`.
- Home page (`index.md`) contact email is `28c_galbadrakh.u@mongolaspiration.edu.mn`
  again, as the author asked (home page only). `_config.yml`, `/about/`, `/club/`,
  `/cv/` and the astronomy pages keep `physicsandastronomy24@gmail.com`.
- `/club/` (Physics and Astronomy) rebuilt in the Home-page profile layout:
  `.aligned-sections.about-layout`, with the club logo, club facts and contact links
  in `.about-profile` and the written sections as `<h4>` inside `.about-biography`.
  `#profile .club-page-logo` centres the square logo in the profile column.
- Founder achievements on `/club/` are now only OWAO 2025 (Gold + Diamond, cited) and
  National Astronomy Olympiad IX Gold / X Bronze. Removed site-wide: the “Oyunlag
  Suragch” Gold Medal line, the SASMO / Serius / Vanda line, and the Solar Activity
  research-assistant line (together with the now-empty Research rows on `/cv/`,
  `/about/` and `/astronomy/other/`).
- OWAO citation added wherever the award appears (`/club/`, `/cv/`, `/about/`,
  `/astronomy/`, `/astronomy/olympiad/`): OWAO 2025 Gold Medal + Diamond award, cited
  to https://owao.siriusolymp.ru/2025en/results (U. Galbadrakh, Mongolia — Gold).
- Mathematics restructured: `/mathematics/` leads with **Start Learning** (Exam
  Overview, Step-by-step solutions, Past-paper walkthroughs, Chapter handouts,
  Last-minute prep, Everything in one tab) and the “More folders” block is gone.
  The six handout folders live under `/mathematics/handouts/…`.
- `/mathematics/handouts/past-paper-walkthroughs/` is the CAIE 9709 component picker
  from the reference design supplied by the author, built as a new token-only
  component: `.component-grid`, `.component-card`, `.component-name`,
  `.component-meta`, `.component-arrow` (two columns, 1px rule border, 4px left
  accent bar, muted arrow, no shadow, one column under 700px).
- Six component pages (`pure-1`, `pure-2`, `pure-3`, `mechanics`, `statistics-1`,
  `statistics-2`) each carry: paper metrics, an official syllabus citation list
  (2026–2027 syllabus, 2026–2027 update, 2023–2025, 2028–2030, notation list), the
  numbered topics, and a papers table that links Cambridge’s published June 2024
  question paper and mark scheme and the 2020 specimen paper, each row naming the
  syllabus in force.
- Chapter handouts: `/mathematics/handouts/chapter-handouts/` plus four paper pages
  (`pure-1`, `statistics-1`, `pure-3`, `statistics-2`) listing chapters as
  `.handout-list.is-single` rows (code gutter, linked title, bordered pills:
  Handout · Syllabus §n · Full handout/Solutions for Quadratics). Pure 1 and
  Statistics 1 use the chapter names the author supplied; Pure 3 and Statistics 2 use
  syllabus sections 3.1–3.9 and 6.1–6.5. Cross-topic review rows (R1, R2) sit after
  chapters 3 and 6 (Pure 1) and after chapters 3 and 5 (Statistics 1).
- 35 chapter pages use the `handout` layout with `code: "9709 §n.n"`, a syllabus
  reference section with links to the official PDFs, a plain-language paraphrase of
  that section’s outcomes labelled as a study paraphrase, and Notes / Worked examples
  / Practice sections that read “To be added!” until the author writes the content.
- `sitemap.xml` regenerated from the repository (84 URLs); it no longer lists
  `/resources/`.

## Physics and Computer Science hubs, and the Other folder (Phase R8 — 2026-10-15)

- `/physics/` and `/computer-science/` now use the Mathematics design exactly: eyebrow,
  H1, lead, **Start Learning** (Exam Overview · Step-by-step solutions · Past-paper
  walkthroughs · Chapter handouts · Last-minute prep · Everything in one tab) as a
  `ul.link-list`, then the subject's existing practice paragraph ("Working
  scientifically" / "A good way to practise"), the syllabus notice and the official link.
  The "More folders" block is gone from both, as it was from Mathematics in R7;
  Olympiad · Book · Club · Other stay linked from `/as-and-a-level/`.
- Each subject has the same folder tree as Mathematics: `/<subject>/exam-overview/` and
  `/<subject>/handouts/{overview,step-by-step-solutions,past-paper-walkthroughs,chapter-handouts,last-minute-prep,everything-in-one-tab}/`.
- Past-paper pickers reuse the R7 `.component-grid` cards (accent = subject colour).
  9702: `paper-1` … `paper-5` (Multiple Choice, AS Level Structured Questions,
  Advanced Practical Skills, A Level Structured Questions, Planning, Analysis and
  Evaluation). 9618: `paper-1` … `paper-4` (Theory Fundamentals, Fundamental
  Problem-solving and Programming Skills, Advanced Theory, Practical). Each component
  page carries the metrics table, the official syllabus list, the topics/sections it
  examines (practical papers: a skills outline instead), and a papers table linking
  Cambridge's June 2024 question paper and mark scheme and the specimen paper, each row
  naming the syllabus in force. Durations, marks and weightings are copied from the
  assessment overviews of the 9702 2025–2027 / 2028–2030 and 9618 2026 / 2027–2029
  syllabuses (fetched 2026-10-15).
- Chapter handouts are grouped by level: 9702 AS Level topics 1–11 and A Level topics
  12–25; 9618 AS Level sections 1–12 and A Level sections 13–20, with `###` sub-groups
  by paper. Rows are `.handout-list.is-single` (code, linked title, Handout · Syllabus
  §n pills; topic 1 / section 1 also link the existing finished handouts and notes).
- 45 new chapter pages (25 Physics, 20 Computer Science) use the `handout` layout with
  `code: "9702 §n"` / `"9618 §n"`, the section list, a study paraphrase of the outcomes
  and "To be added!" Notes / Worked examples / Practice sections — the R7 pattern.
- `/as-and-a-level/` gained an **Other** row and Physics 9702 / Computer Science 9618
  lines in the Handouts row. Other lives at `/as-and-a-level/other/` (so the navbar's
  AS and A Level item stays active) and holds two groups, both shown as
  `.component-grid` folder cards in the neutral accent:
  - Mongolian 11th grade curriculum / Үндэсний хөтөлбөр (`national-curriculum/`):
    Монгол хэл (`mongol-khel`), Үндэсний бичиг (`undesnii-bichig`), Уран зохиол
    (`uran-zokhiol`), Нийгэм судлал (`niigem-sudlal`). Cited to the Ministry of
    Education upper-secondary curriculum page (moe.gov.mn/curriculum-buren-dund), the
    2019 curriculum PDF and mnier.mn/curriculum. Mongolian text is marked `lang="mn"`.
  - Non-technical classes (`non-technical/`): General Language English
    (`general-english`) and Global Perspectives and Research (`global-perspectives-and-research`,
    Cambridge 9239, with the component table from the 2026–2028 syllabus).
  Folder pages read "To be added!" until the author writes the content.
- `_layouts/default.html`: the site name is appended to `<title>`, `og:title` and
  `twitter:title` only when the page title does not already contain it (23 pages were
  rendering "· Galbadrakh STEM · Galbadrakh STEM").
- Fixed the Quadratics chapter page notice, whose Markdown links inside an HTML block
  were printed literally; README records the rule.
- `sitemap.xml` regenerated (167 URLs; existing entries and priorities unchanged).
