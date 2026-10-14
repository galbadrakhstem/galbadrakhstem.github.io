---
layout: handout
title: "Handout style reference"
permalink: /style-demo/
subject: Mathematics
subject_url: /mathematics/
code: "9709"
topic: Linear equations
updated: 2026-10-14
description: "A reference for the handout blocks, using linear equations throughout. The practice total is 3 points; the worked example is unscored."
points_total: 3
---

<nav class="toc" aria-labelledby="demo-toc-title">
  <p class="toc-title" id="demo-toc-title">Contents</p>
  <ol>
    <li><a href="#idea">Core idea</a></li>
    <li><a href="#worked-example">Worked example</a></li>
    <li><a href="#practice">Practice and short answer</a></li>
    <li><a href="#reference">Table and code check</a></li>
    <li><a href="#notes">Pitfall and remark</a></li>
  </ol>
</nav>

<h2 id="idea">Core idea</h2>

<section class="box is-idea" aria-labelledby="idea-title">
  <h3 class="box-title" id="idea-title">Keep both sides balanced</h3>
  <p>Adding or subtracting the same quantity on both sides preserves equality. Multiplying or dividing both sides by the same nonzero quantity also preserves equality.<sup><a href="#balance-note" id="balance-note-ref" role="doc-noteref" aria-label="Read remark 1">1</a></sup></p>
  <p>For $2x + 3 = 11$, undo the addition first, then undo the multiplication.</p>
</section>

<h2 id="worked-example">Worked example</h2>

<section class="example" aria-labelledby="example-title">
  <div class="example-head">
    <h3 id="example-title">Solve a linear equation</h3>
    <span class="source-tag">Original illustration</span>
  </div>
  <div class="example-statement">
    <p>Solve $2x + 3 = 11$ for $x$.</p>
  </div>
  <div class="solution">
    <p class="solution-label">Solution</p>
    <ol class="steps">
      <li>
        <p>Subtract $3$ from both sides. <span class="mark" aria-label="One method mark">M1</span></p>
        <p>$$\begin{aligned}
        2x + 3 - 3 &= 11 - 3 \\
        2x &= 8
        \end{aligned}$$</p>
      </li>
      <li>
        <p>Divide both sides by $2$. <span class="mark" aria-label="One accuracy mark">A1</span></p>
        <p>$$\frac{2x}{2} = \frac{8}{2} \quad\Longrightarrow\quad x = 4.$$</p>
      </li>
      <li>
        <p>Substitute $x = 4$ into the original equation to check the result.</p>
        <p>$$2(4) + 3 = 8 + 3 = 11.$$</p>
        <p>The left side equals the right side, so $x = 4$ is the solution.</p>
      </li>
    </ol>
    <p class="marks-total">Worked-example total: 2 marks (illustrative; not part of the practice total).</p>
  </div>
</section>

<aside class="examiner">
  <p><strong>Examiner note.</strong> In this illustrative scheme, M1 rewards subtracting $3$ from both sides and A1 rewards the correct value of $x$. The substitution is a useful check, not an extra mark. This is not an official examination mark scheme.</p>
</aside>

<h2 id="practice">Practice and short answer</h2>

<ol class="problems" role="list">
  <li>
    <p><span class="problem-no">1.</span><span class="pts">[2 points]</span> Solve $3x - 6 = 9$. Show the operation applied to both sides at each step.</p>
  </li>
</ol>

<section class="sa-question" aria-labelledby="short-answer-title">
  <p id="short-answer-title"><strong>Short answer.</strong> <span class="pts">[1 point]</span> If $x - 5 = 8$, what is $x$?</p>
  <div class="sa-answer">
    <p><strong>Answer.</strong> Add $5$ to both sides: $x - 5 + 5 = 8 + 5$. The left side simplifies to $x$ and the right side to $13$, so $x = 13$.</p>
  </div>
</section>

<aside class="key-takeaway">
  <p>Key takeaway: undo addition or subtraction before multiplication or division, apply each operation to both sides, and check the result by substitution.</p>
</aside>

<h2 id="reference">Table and code check</h2>

The worked example can also be recorded as a short table.

| Stage | Equation | Operation on both sides |
| --- | --- | --- |
| Start | $2x + 3 = 11$ | None |
| Remove the constant | $2x = 8$ | Subtract $3$ |
| Isolate the unknown | $x = 4$ | Divide by $2$ |

This small Python check verifies the proposed solution; it does not replace the algebra.

```python
x = 4
left_side = 2 * x + 3
right_side = 11
assert left_side == right_side
```

The equality being checked is

$$
2(4) + 3 = 8 + 3 = 11.
$$

<h2 id="notes">Pitfall and remark</h2>

<aside class="box is-pitfall" aria-labelledby="pitfall-title">
  <h3 class="box-title" id="pitfall-title">Do not change only one side</h3>
  <p>Removing $3$ from the left side alone would incorrectly turn $2x + 3 = 11$ into $2x = 11$. Subtract it from both sides instead: $2x = 11 - 3 = 8$.</p>
</aside>

<aside class="box is-remark" id="balance-note" role="doc-footnote" aria-labelledby="remark-title">
  <h3 class="box-title" id="remark-title">Remark 1</h3>
  <p>Dividing by $2$ is valid because $2$ is nonzero. Division by zero is not defined. Each operation in this example is reversible, so the solution set is preserved. <a href="#balance-note-ref" role="doc-backlink">Return to the idea</a>.</p>
</aside>
