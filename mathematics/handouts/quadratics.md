---
layout: handout
title: "Quadratics: methods and practice"
permalink: /mathematics/handouts/quadratics/
subject: Mathematics
subject_url: /mathematics/
code: "9709"
topic: Quadratics
updated: 2026-10-15
description: "Understand why the quadratic methods work, follow three complete worked examples, and attempt eight original problems. Keep exact values and make each algebraic operation visible."
points_total: 46
---

## What the syllabus requires

The tags below refer to Pure Mathematics 1, **9709 section 1.1: Quadratics**. These are study paraphrases, not quotations or a replacement for the syllabus for your examination year.

- **[9709 §1.1]** Rewrite a quadratic by completing the square; use the resulting form to identify the vertex and the minimum or maximum value.
- **[9709 §1.1]** Use the discriminant to determine the number of real roots, including restrictions on a parameter.
- **[9709 §1.1]** Solve quadratic equations, including equations that become quadratic after a suitable substitution.
- **[9709 §1.1]** Solve a quadratic inequality in one variable and state the correct interval, with appropriate endpoints.
- **[9709 §1.1]** Solve a linear equation and a quadratic equation simultaneously by substitution; interpret the solutions as intersections.

The sum and product of roots are included as a supporting algebraic result and a useful check, rather than as a separately numbered syllabus outcome. Throughout this handout, a quadratic has real coefficients and a nonzero coefficient of $x^2$.

## The idea

<section class="box is-idea">
  <h3 class="box-title">Factorising: turn one quadratic into two linear equations</h3>
<p>If a quadratic can be written as $a(x-r)(x-s)$ with $a\ne0$, its zeros occur when $x-r=0$ or $x-s=0$. This is the zero-product law: a product of real numbers is zero only if at least one factor is zero.</p>
<p>For a monic quadratic, the identity below explains the search for two numbers with the required sum and product:</p>
<p>$$ (x-r)(x-s)=x^2-(r+s)x+rs. $$</p>
<p><strong>When to use it:</strong> choose factorising when integer or simple rational factors are visible. If they are not, change method rather than guessing indefinitely. Never divide by a factor involving $x$ unless you have separately dealt with the possibility that it is zero.</p>
</section>

<section class="box is-idea">
  <h3 class="box-title">Completing the square: expose the turning point</h3>
<p>A square contains twice its shift as the linear coefficient:</p>
<p>$$ (x+h)^2=x^2+2hx+h^2. $$</p>
<p>Thus $h$ is half the coefficient of $x$ when the coefficient of $x^2$ is $1$. Subtracting the extra $h^2$ gives the exact identity $x^2+2hx=(x+h)^2-h^2$; the expression has been rewritten, not changed.</p>
<p><strong>When to use it:</strong> use this method for a vertex, a minimum or maximum, or an equation that becomes an easy square. If the leading coefficient is not $1$, factor it out of the quadratic and linear terms first. When solving, a nonnegative square has both a positive and a negative square-root branch.</p>
</section>

### The formula: completing the square, done once for every quadratic
<p>Start with $ax^2+bx+c=0$, where $a\ne0$. Multiply both sides by $4a$. Subtract $4ac$ from both sides. Add $b^2$ to both sides. The left side is now a perfect square:</p>
<p>$$
\begin{aligned}
4a^2x^2+4abx+4ac&=0,\\
4a^2x^2+4abx&=-4ac,\\
4a^2x^2+4abx+b^2&=b^2-4ac,\\
(2ax+b)^2&=b^2-4ac.
\end{aligned}
$$</p>
<p>Taking both square-root branches, subtracting $b$, and dividing by the nonzero number $2a$ produces the quadratic formula. These are separate reversible operations when the square root is real.</p>
<p><strong>When to use it:</strong> choose the formula when factorising is not immediate, especially for exact surd answers. Calculate the discriminant first: it tells you whether real roots exist before you attempt a square root.</p>


## Definitions and results

<section class="box">
  <h3 class="box-title">The quadratic formula</h3>
<p>For $ax^2+bx+c=0$, define $\Delta=b^2-4ac$. The real solutions are</p>
<p>$$ x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}. $$</p>
<p><strong>Validity:</strong> $a,b,c$ are real, $a\ne0$, and $\Delta\ge0$ for real solutions. The entire numerator is divided by $2a$. When $\Delta=0$, the two signs give the same repeated root; when $\Delta\lt0$, there are no real roots. If $a=0$, the equation is not quadratic and this formula does not apply.</p>
</section>

<section class="box">
  <h3 class="box-title">The discriminant and real-root count</h3>
<p>$$ \Delta=b^2-4ac. $$</p>
<ul>
  <li>$\Delta\gt0$: two distinct real roots.</li>
  <li>$\Delta=0$: one distinct real root, repeated twice.</li>
  <li>$\Delta\lt0$: no real roots.</li>
</ul>
<p><strong>Validity:</strong> the coefficients are real and $a\ne0$. With a parameter in $a$, check that $a$ is nonzero before using this classification. For a line and a parabola, apply it to the quadratic obtained after substituting the line into the curve.</p>
</section>

<section class="box">
  <h3 class="box-title">Completing the square and the vertex</h3>
<p>$$ ax^2+bx+c=a\left(x+\frac{b}{2a}\right)^2+c-\frac{b^2}{4a}. $$</p>
<p>The vertex of $y=ax^2+bx+c$ is</p>
<p>$$ \left(-\frac{b}{2a},\ c-\frac{b^2}{4a}\right). $$</p>
<p><strong>Validity:</strong> $a,b,c$ are real and $a\ne0$; the identity holds for every real $x$. Over the whole real line, the vertex is a minimum when $a\gt0$ and a maximum when $a\lt0$. A restricted domain must be checked separately. When solving an equation in the form $(x-h)^2=m$, real roots require $m\ge0$.</p>
</section>

<section class="box">
  <h3 class="box-title">Sum and product of the roots</h3>
<p>If $r$ and $s$ are the roots, counting a repeated root twice, then</p>
<p>$$ r+s=-\frac{b}{a},\qquad rs=\frac{c}{a}. $$</p>
<p>These follow by expanding $a(x-r)(x-s)=ax^2-a(r+s)x+ars$ and comparing the coefficients of $x$ and the constant term with $ax^2+bx+c$.</p>
<p><strong>Validity in this handout:</strong> real coefficients, $a\ne0$, and $\Delta\ge0$, so that real roots $r,s$ exist. At $\Delta=0$, use the repeated root for both $r$ and $s$. These identities are checks on the roots, not a reason to assume that real roots exist.</p>
</section>


## Worked examples

<section class="example" aria-labelledby="worked-example-1">
  <div class="example-head">
    <h3 id="worked-example-1">Example 1 — Factorising</h3>
    <span class="source-tag">Original worked example</span>
  </div>
  <div class="example-statement"><p>Solve $x^2-5x+6=0$.</p></div>
  <div class="solution">
    <p class="solution-label">Solution</p>
<p>The two factor constants must multiply to $6$ and add to $-5$. Check them separately:</p>
<p>$$
\begin{aligned}
(-2)(-3)&=6,\\
(-2)+(-3)&=-5.
\end{aligned}
$$</p>
<p>Substitute the factorisation into the equation, then use the zero-product law:</p>
<p>$$
\begin{aligned}
x^2-5x+6&=0,\\
(x-2)(x-3)&=0,\\
x-2=0&\quad\text{or}\quad x-3=0.
\end{aligned}
$$</p>
<p>Add $2$ to the first linear equation to obtain $x=2$. Add $3$ to the second linear equation to obtain $x=3$.</p>
<p><strong>Final answer</strong></p>
<p>$$ x=2\quad\text{or}\quad x=3. $$</p>
<p><strong>Sanity check — explicit substitution into the original left side.</strong> First substitute $x=2$:</p>
<p>$$
\begin{aligned}
2^2-5(2)+6&=4-5(2)+6\\
&=4-10+6\\
&=-6+6\\
&=0.
\end{aligned}
$$</p>
<p>Then substitute $x=3$:</p>
<p>$$
\begin{aligned}
3^2-5(3)+6&=9-5(3)+6\\
&=9-15+6\\
&=-6+6\\
&=0.
\end{aligned}
$$</p>
<p>Both substitutions give the original right side, $0$.</p>
  </div>
</section>

<section class="example" aria-labelledby="worked-example-2">
  <div class="example-head">
    <h3 id="worked-example-2">Example 2 — Completing the square</h3>
    <span class="source-tag">Original worked example</span>
  </div>
  <div class="example-statement"><p>Solve $x^2+6x+5=0$ by completing the square.</p></div>
  <div class="solution">
    <p class="solution-label">Solution</p>
<p>Half the linear coefficient is $6/2=3$. Squaring this half gives $3^2=9$. Expand the square, then subtract $9$:</p>
<p>$$
\begin{aligned}
(x+3)^2&=x^2+6x+9,\\
(x+3)^2-9&=x^2+6x.
\end{aligned}
$$</p>
<p><strong>Substitution line:</strong> replace $x^2+6x$ in the original equation by the identical expression $(x+3)^2-9$. Each following line performs one operation:</p>
<p>$$
\begin{aligned}
(x+3)^2-9+5&=0,\\
(x+3)^2-4&=0,\\
(x+3)^2&=4,\\
x+3&=\pm\sqrt{4},\\
x+3&=\pm2,\\
x&=-3\pm2.
\end{aligned}
$$</p>
<p>Evaluate the two branches separately:</p>
<p>$$
\begin{aligned}
x_+&=-3+2,\\
x_+&=-1,\\
x_-&=-3-2,\\
x_-&=-5.
\end{aligned}
$$</p>
<p><strong>Final answer</strong></p>
<p>$$ x=-1\quad\text{or}\quad x=-5. $$</p>
<p><strong>Sanity check:</strong> explicitly substitute $x=-1$ into the original left side:</p>
<p>$$
\begin{aligned}
(-1)^2+6(-1)+5&=1+6(-1)+5\\
&=1-6+5\\
&=-5+5\\
&=0.
\end{aligned}
$$</p>
<p>The check agrees with the original right side. The second root is retained because both square-root branches were required.</p>
  </div>
</section>

<section class="example" aria-labelledby="worked-example-3">
  <div class="example-head">
    <h3 id="worked-example-3">Example 3 — The quadratic formula</h3>
    <span class="source-tag">Original worked example</span>
  </div>
  <div class="example-statement"><p>Solve $2x^2-2x-1=0$, giving exact answers.</p></div>
  <div class="solution">
    <p class="solution-label">Solution</p>
<p>Read the coefficients with their signs: $a=2$, $b=-2$, $c=-1$. Substitute them into the discriminant:</p>
<p>$$
\begin{aligned}
\Delta&=(-2)^2-4(2)(-1),\\
\Delta&=4-4(2)(-1),\\
\Delta&=4-8(-1),\\
\Delta&=4-(-8),\\
\Delta&=4+8,\\
\Delta&=12.
\end{aligned}
$$</p>
<p><strong>Substitution line:</strong> put $a=2$, $b=-2$, and $\Delta=12$ into $x=(-b\pm\sqrt{\Delta})/(2a)$. Simplify one part at a time:</p>
<p>$$
\begin{aligned}
x&=\frac{-(-2)\pm\sqrt{12}}{2(2)},\\
x&=\frac{2\pm\sqrt{12}}{2(2)},\\
x&=\frac{2\pm\sqrt{12}}{4},\\
x&=\frac{2\pm\sqrt{4\cdot3}}{4},\\
x&=\frac{2\pm\sqrt4\sqrt3}{4},\\
x&=\frac{2\pm2\sqrt3}{4},\\
x&=\frac{2(1\pm\sqrt3)}{4},\\
x&=\frac{1\pm\sqrt3}{2}.
\end{aligned}
$$</p>
<p><strong>Final answer</strong></p>
<p>$$ x=\frac{1+\sqrt3}{2}\quad\text{or}\quad x=\frac{1-\sqrt3}{2}. $$</p>
<p><strong>Sanity check:</strong> $\Delta=12\gt0$ requires two distinct real roots. Also $c/a=-1/2$ is negative, so the roots must have opposite signs. Since $\sqrt3\gt1$, the plus branch is positive and the minus branch is negative. Both checks agree with the exact answers.</p>
  </div>
</section>


## Common errors and examiner expectations

The expectations here are general mathematical presentation advice for these original questions, not quotations from an examiner report or an official mark scheme.

| Mistake | Why it fails | What to write |
| --- | --- | --- |
| Recording $b=7$ when the term is $-7x$ | The sign belongs to the coefficient. | List $a,b,c$ with their signs before substituting; here $b=-7$. |
| Putting only the square-root term over $2a$ | The denominator divides the whole numerator. | Write $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$ with a full fraction bar. |
| Treating $(-7)^2$ as $-49$ | The negative sign is inside the square. | Keep parentheses: $(-7)^2=49$. |
| Halving the original linear coefficient when $a\ne1$ | Completing the square uses the coefficient inside a bracket whose $x^2$ coefficient is $1$. | First write, for example, $2x^2-12x+11=2(x^2-6x)+11$. |
| Forgetting that the compensating constant is multiplied by $a$ | The completed-square expression then represents a different polynomial. | Keep the bracket: $2((x-3)^2-9)+11$, then distribute the $2$. |
| Dividing by $x-r$ and losing the root $x=r$ | That divisor may be zero. | Use the zero-product law and solve both factor equations. |
| Keeping only the positive square root | A positive square has two real square-root branches. | From $(x-h)^2=m$, write $x-h=\pm\sqrt m$ when $m\gt0$. |
| Saying $\Delta=0$ gives two distinct roots | The two formula branches coincide. | State “one distinct real root, repeated twice”. |
| Choosing the wrong interval in an inequality | The sign can change when a simple root is crossed. | Identify the boundary roots, test the factor signs, then include endpoints only when equality is allowed. |
| Keeping a negative value of $t=\sqrt x$ | The principal square root is nonnegative. | Record $x\ge0$ and $t\ge0$ before solving, then reject any $t\lt0$. |
| Rounding before the final line | Rounding can obscure equality, signs, and exact endpoints. | Retain fractions and surds; approximate only if the question requests it. |

## Problem set

These are original teaching problems with illustrative point allocations, not official examination questions. Attempt them before opening the solutions. The set contains **two direct**, **three standard**, **two multi-step**, and **one show-that** problem. Each bracketed tag is the entire allocation for that problem; subparts do not add extra points.

<ol class="problems" role="list">
  <li id="problem-1">
    <p><span class="problem-no">1.</span> <strong>Direct — factorising</strong> <span class="pts" aria-label="3 points">[3]</span></p>
<p>Solve $x^2-7x+12=0$ by factorising.</p>
  </li>
  <li id="problem-2">
    <p><span class="problem-no">2.</span> <strong>Direct — the discriminant</strong> <span class="pts" aria-label="3 points">[3]</span></p>
<p>Calculate the discriminant of $2x^2+4x+5=0$. State the number of real roots; do not attempt to find non-real roots.</p>
  </li>
  <li id="problem-3">
    <p><span class="problem-no">3.</span> <strong>Standard — exact roots from the formula</strong> <span class="pts" aria-label="5 points">[5]</span></p>
<p>Use the quadratic formula to solve $3x^2+2x-2=0$. Give exact answers in simplified surd form.</p>
  </li>
  <li id="problem-4">
    <p><span class="problem-no">4.</span> <strong>Standard — completed-square form and minimum</strong> <span class="pts" aria-label="5 points">[5]</span></p>
<p>Let $f(x)=2x^2-12x+11$, for real $x$.</p>
<ol type="a">
  <li>Write $f(x)$ in the form $a(x-h)^2+k$.</li>
  <li>State the vertex and the minimum value. Explain why it is a minimum.</li>
</ol>
  </li>
  <li id="problem-5">
    <p><span class="problem-no">5.</span> <strong>Standard — a quadratic inequality</strong> <span class="pts" aria-label="5 points">[5]</span></p>
<p>Solve $x^2-x-6\le0$. Justify the interval you choose and explain whether its endpoints are included.</p>
  </li>
  <li id="problem-6">
    <p><span class="problem-no">6.</span> <strong>Multi-step — a quadratic after substitution</strong> <span class="pts" aria-label="8 points">[8]</span></p>
<p>Solve $x+\sqrt{x}-6=0$ over the real numbers.</p>
<ol type="a">
  <li>State the domain of $x$. Let $t=\sqrt{x}$ and state the restriction on $t$.</li>
  <li>Form and solve a quadratic in $t$. Explain any rejected root.</li>
  <li>Recover $x$ and check it in the original equation.</li>
</ol>
  </li>
  <li id="problem-7">
    <p><span class="problem-no">7.</span> <strong>Multi-step — a line and a parabola</strong> <span class="pts" aria-label="9 points">[9]</span></p>
<p>A line has equation $y=2x+k$ and a parabola has equation $y=x^2-4x+7$, where $k$ is real.</p>
<ol type="a">
  <li>Obtain a quadratic equation for the $x$-coordinates of their intersections.</li>
  <li>Find the values of $k$ for no real intersection, exactly one intersection, and two distinct intersections.</li>
  <li>When there is exactly one intersection, find its coordinates and verify them in both equations.</li>
</ol>
  </li>
  <li id="problem-8">
    <p><span class="problem-no">8.</span> <strong>Show that — a fixed distance between roots</strong> <span class="pts" aria-label="8 points">[8]</span></p>
<p>Let $t$ be any real number. Show that $x^2-2tx+t^2-9=0$ always has two distinct real roots exactly $6$ units apart.</p>
<p>Use a completed square to find the roots in terms of $t$. Then verify their sum and product against the coefficients of the quadratic.</p>
  </li>
</ol>


<p class="marks-total">Problem-set total: $3+3+5+5+5+8+9+8=46$ points.</p>

## Companions

- [Complete solutions]({{ '/mathematics/handouts/quadratics-solutions/' | relative_url }}) — all eight problems, in the same order and numbering.
- [Self-assessment — reserved companion route]({{ '/mathematics/handouts/quadratics-self-assessment/' | relative_url }}) — not created or verified in this phase.
- [Exam-style practice — reserved companion route]({{ '/mathematics/handouts/quadratics-exam-style/' | relative_url }}) — not created or verified in this phase.

Only the solutions companion is supplied in this phase. The other two links reserve destinations for later work and may not resolve yet.
