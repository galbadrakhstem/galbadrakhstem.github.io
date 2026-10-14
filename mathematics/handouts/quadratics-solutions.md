---
layout: handout
title: "Quadratics: complete solutions"
permalink: /mathematics/handouts/quadratics-solutions/
subject: Mathematics
subject_url: /mathematics/
code: "9709"
topic: Quadratics — solutions
updated: 2026-10-15
description: "Complete solutions to the eight original practice problems. Each numbered step performs one algebraic operation or one logical inference; final answers are displayed separately."
points_total: 46
---

[Return to the quadratics handout]({{ '/mathematics/handouts/quadratics/' | relative_url }}).

The numbering and point tags match the handout. These are teaching solutions, not an official Cambridge mark scheme. A bracketed tag belongs to the entire problem, not to each solution block. Substitutions, simplifications, domain checks, and conclusions are recorded separately.


## Problem 1 — Direct — factorising

<p><a href="{{ '/mathematics/handouts/quadratics/' | relative_url }}#problem-1">Read problem 1</a> <span class="pts" aria-label="3 points">[3]</span></p>

<p>Solve $x^2-7x+12=0$ by factorising.</p>

<section class="solution">
  <p class="solution-label">Factorise and solve</p>
  <ol class="steps">
    <li><p>Find a pair with product $12$: $3\cdot4=12$.</p></li>
    <li><p>Check its sum: $3+4=7$.</p></li>
    <li><p>Factorise the equation: $(x-3)(x-4)=0$.</p></li>
    <li><p>Apply the zero-product law: $x-3=0$ or $x-4=0$.</p></li>
    <li><p>Add $3$ to the first factor equation: $x=3$.</p></li>
    <li><p>Add $4$ to the second factor equation: $x=4$.</p></li>
  </ol>
</section>

<aside class="key-takeaway">
  <p><strong>Final answer</strong></p>
  <p>$$ x=3\quad\text{or}\quad x=4. $$</p>
</aside>


## Problem 2 — Direct — the discriminant

<p><a href="{{ '/mathematics/handouts/quadratics/' | relative_url }}#problem-2">Read problem 2</a> <span class="pts" aria-label="3 points">[3]</span></p>

<p>Calculate the discriminant of $2x^2+4x+5=0$. State the number of real roots; do not attempt to find non-real roots.</p>

<section class="solution">
  <p class="solution-label">Calculate the discriminant</p>
  <ol class="steps">
    <li><p>Identify the coefficients: $a=2$, $b=4$, $c=5$.</p></li>
    <li><p>Substitute into the discriminant: $\Delta=4^2-4(2)(5)$.</p></li>
    <li><p>Evaluate the square: $\Delta=16-4(2)(5)$.</p></li>
    <li><p>Multiply $4$ by $2$: $\Delta=16-8(5)$.</p></li>
    <li><p>Multiply $8$ by $5$: $\Delta=16-40$.</p></li>
    <li><p>Subtract $40$: $\Delta=-24$.</p></li>
    <li><p>Compare with zero: $\Delta\lt0$.</p></li>
    <li><p>Apply the negative-discriminant criterion: the equation has no real roots.</p></li>
  </ol>
</section>

<aside class="key-takeaway">
  <p><strong>Final answers</strong></p>
  <p>$$ \Delta=-24. $$</p>
  <p>$$ \text{There are no real roots.} $$</p>
</aside>


## Problem 3 — Standard — exact roots from the formula

<p><a href="{{ '/mathematics/handouts/quadratics/' | relative_url }}#problem-3">Read problem 3</a> <span class="pts" aria-label="5 points">[5]</span></p>

<p>Use the quadratic formula to solve $3x^2+2x-2=0$. Give exact answers in simplified surd form.</p>

<section class="solution">
  <p class="solution-label">Calculate the discriminant</p>
  <ol class="steps">
    <li><p>Identify the coefficients: $a=3$, $b=2$, $c=-2$.</p></li>
    <li><p>Substitute into the discriminant: $\Delta=2^2-4(3)(-2)$.</p></li>
    <li><p>Evaluate the square: $\Delta=4-4(3)(-2)$.</p></li>
    <li><p>Multiply $4$ by $3$: $\Delta=4-12(-2)$.</p></li>
    <li><p>Multiply $12$ by $-2$: $\Delta=4-(-24)$.</p></li>
    <li><p>Rewrite subtraction of a negative: $\Delta=4+24$.</p></li>
    <li><p>Add the constants: $\Delta=28$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Substitute into the formula</p>
  <ol class="steps" start="8">
    <li><p>Substitute $a=3$, $b=2$, and $\Delta=28$: $x=\frac{-2\pm\sqrt{28}}{2(3)}$.</p></li>
    <li><p>Evaluate the denominator: $x=\frac{-2\pm\sqrt{28}}{6}$.</p></li>
    <li><p>Factor the radicand: $x=\frac{-2\pm\sqrt{4\cdot7}}{6}$.</p></li>
    <li><p>Separate the square root of the positive factors: $x=\frac{-2\pm\sqrt4\sqrt7}{6}$.</p></li>
    <li><p>Evaluate $\sqrt4$: $x=\frac{-2\pm2\sqrt7}{6}$.</p></li>
    <li><p>Factor $2$ out of the numerator: $x=\frac{2(-1\pm\sqrt7)}{6}$.</p></li>
    <li><p>Cancel the nonzero factor $2$: $x=\frac{-1\pm\sqrt7}{3}$.</p></li>
  </ol>
</section>

<aside class="key-takeaway">
  <p><strong>Final answer</strong></p>
  <p>$$ x=\frac{-1+\sqrt7}{3}\quad\text{or}\quad x=\frac{-1-\sqrt7}{3}. $$</p>
</aside>


## Problem 4 — Standard — completed-square form and minimum

<p><a href="{{ '/mathematics/handouts/quadratics/' | relative_url }}#problem-4">Read problem 4</a> <span class="pts" aria-label="5 points">[5]</span></p>

<p>Let $f(x)=2x^2-12x+11$, for real $x$.</p>
<ol type="a">
  <li>Write $f(x)$ in the form $a(x-h)^2+k$.</li>
  <li>State the vertex and the minimum value. Explain why it is a minimum.</li>
</ol>

<section class="solution">
  <p class="solution-label">Complete the square</p>
  <ol class="steps">
    <li><p>Factor $2$ out of the quadratic and linear terms: $f(x)=2(x^2-6x)+11$.</p></li>
    <li><p>Halve the inner linear coefficient: $-6/2=-3$.</p></li>
    <li><p>Square this half: $(-3)^2=9$.</p></li>
    <li><p>Expand the corresponding square: $(x-3)^2=x^2-6x+9$.</p></li>
    <li><p>Subtract $9$ from both sides of this identity: $(x-3)^2-9=x^2-6x$.</p></li>
    <li><p>Substitute the identity into $f$: $f(x)=2((x-3)^2-9)+11$.</p></li>
    <li><p>Distribute the outer $2$: $f(x)=2(x-3)^2-18+11$.</p></li>
    <li><p>Combine the constants: $f(x)=2(x-3)^2-7$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Locate the vertex</p>
  <ol class="steps" start="9">
    <li><p>Set the expression inside the square equal to zero: $x-3=0$.</p></li>
    <li><p>Add $3$: $x=3$.</p></li>
    <li><p>Substitute $x=3$ into the completed-square form: $f(3)=2(3-3)^2-7$.</p></li>
    <li><p>Evaluate the subtraction inside the square: $f(3)=2(0)^2-7$.</p></li>
    <li><p>Square zero: $f(3)=2(0)-7$.</p></li>
    <li><p>Multiply by $2$: $f(3)=0-7$.</p></li>
    <li><p>Subtract $7$: $f(3)=-7$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Justify the minimum</p>
  <ol class="steps" start="16">
    <li><p>Use the nonnegativity of a real square: $(x-3)^2\ge0$.</p></li>
    <li><p>Multiply by the positive number $2$: $2(x-3)^2\ge0$.</p></li>
    <li><p>Subtract $7$ from both sides: $2(x-3)^2-7\ge-7$.</p></li>
    <li><p>Identify the left side as $f(x)$: $f(x)\ge-7$.</p></li>
    <li><p>The vertex calculation attains this bound at $x=3$, so the bound is the minimum.</p></li>
  </ol>
</section>

<aside class="key-takeaway">
  <p><strong>Final answers</strong></p>
  <p>$$ f(x)=2(x-3)^2-7. $$</p>
  <p>$$ \text{Vertex: }(3,-7). $$</p>
  <p>$$ \min_{x\in\mathbb R}f(x)=-7\quad\text{at }x=3. $$</p>
</aside>


## Problem 5 — Standard — a quadratic inequality

<p><a href="{{ '/mathematics/handouts/quadratics/' | relative_url }}#problem-5">Read problem 5</a> <span class="pts" aria-label="5 points">[5]</span></p>

<p>Solve $x^2-x-6\le0$. Justify the interval you choose and explain whether its endpoints are included.</p>

<section class="solution">
  <p class="solution-label">Find the boundary values</p>
  <ol class="steps">
    <li><p>Find factor constants with product $-6$: $(-3)(2)=-6$.</p></li>
    <li><p>Check their sum: $-3+2=-1$.</p></li>
    <li><p>Factor the inequality: $(x-3)(x+2)\le0$.</p></li>
    <li><p>Set the first factor equal to zero: $x-3=0$.</p></li>
    <li><p>Add $3$: $x=3$.</p></li>
    <li><p>Set the second factor equal to zero: $x+2=0$.</p></li>
    <li><p>Subtract $2$: $x=-2$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Choose the interval by signs</p>
  <ol class="steps" start="8">
    <li><p>The boundary values partition the real line into $x\lt-2$, $-2\lt x\lt3$, and $x\gt3$.</p></li>
    <li><p>On these three open intervals, the signs of $x-3$ are respectively negative, negative, and positive.</p></li>
    <li><p>On the same intervals, the signs of $x+2$ are respectively negative, positive, and positive.</p></li>
    <li><p>Multiply the factor signs: the product signs are respectively positive, negative, and positive.</p></li>
    <li><p>Select the interval with a negative product: $-2\lt x\lt3$.</p></li>
    <li><p>Include $x=-2$: its zero product is allowed by $\le0$.</p></li>
    <li><p>Include $x=3$: its zero product is also allowed by $\le0$.</p></li>
  </ol>
</section>

<aside class="key-takeaway">
  <p><strong>Final answer</strong></p>
  <p>$$ -2\le x\le3. $$</p>
</aside>


## Problem 6 — Multi-step — a quadratic after substitution

<p><a href="{{ '/mathematics/handouts/quadratics/' | relative_url }}#problem-6">Read problem 6</a> <span class="pts" aria-label="8 points">[8]</span></p>

<p>Solve $x+\sqrt{x}-6=0$ over the real numbers.</p>
<ol type="a">
  <li>State the domain of $x$. Let $t=\sqrt{x}$ and state the restriction on $t$.</li>
  <li>Form and solve a quadratic in $t$. Explain any rejected root.</li>
  <li>Recover $x$ and check it in the original equation.</li>
</ol>

<section class="solution">
  <p class="solution-label">Record the domain and make the substitution</p>
  <ol class="steps">
    <li><p>A real square root requires $x\ge0$.</p></li>
    <li><p>Define the substitution: $t=\sqrt{x}$.</p></li>
    <li><p>The principal square root gives the restriction $t\ge0$.</p></li>
    <li><p>Square the defining relation: $t^2=x$.</p></li>
    <li><p>Replace $x$ in the original equation by $t^2$: $t^2+\sqrt{x}-6=0$.</p></li>
    <li><p>Replace $\sqrt{x}$ by $t$: $t^2+t-6=0$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Solve the quadratic in the permitted domain</p>
  <ol class="steps" start="7">
    <li><p>Find factor constants with product $-6$: $3(-2)=-6$.</p></li>
    <li><p>Check their sum: $3+(-2)=1$.</p></li>
    <li><p>Factorise: $(t+3)(t-2)=0$.</p></li>
    <li><p>Apply the zero-product law: $t+3=0$ or $t-2=0$.</p></li>
    <li><p>Subtract $3$ in the first factor equation: $t=-3$.</p></li>
    <li><p>Add $2$ in the second factor equation: $t=2$.</p></li>
    <li><p>Reject $t=-3$, since it violates $t\ge0$.</p></li>
    <li><p>Retain $t=2$, since it satisfies $t\ge0$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Recover the original variable</p>
  <ol class="steps" start="15">
    <li><p>Substitute $t=2$ into $x=t^2$: $x=2^2$.</p></li>
    <li><p>Evaluate the square: $x=4$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Check the original equation</p>
  <ol class="steps" start="17">
    <li><p>Call the original left side $L$. Substitute $x=4$: $L=4+\sqrt4-6$.</p></li>
    <li><p>Evaluate the square root: $L=4+2-6$.</p></li>
    <li><p>Add the first two terms: $L=6-6$.</p></li>
    <li><p>Subtract: $L=0$.</p></li>
    <li><p>This equals the original right side, so $x=4$ is admissible.</p></li>
  </ol>
</section>

<aside class="key-takeaway">
  <p><strong>Final answer</strong></p>
  <p>$$ x=4. $$</p>
</aside>


## Problem 7 — Multi-step — a line and a parabola

<p><a href="{{ '/mathematics/handouts/quadratics/' | relative_url }}#problem-7">Read problem 7</a> <span class="pts" aria-label="9 points">[9]</span></p>

<p>A line has equation $y=2x+k$ and a parabola has equation $y=x^2-4x+7$, where $k$ is real.</p>
<ol type="a">
  <li>Obtain a quadratic equation for the $x$-coordinates of their intersections.</li>
  <li>Find the values of $k$ for no real intersection, exactly one intersection, and two distinct intersections.</li>
  <li>When there is exactly one intersection, find its coordinates and verify them in both equations.</li>
</ol>

<section class="solution">
  <p class="solution-label">Eliminate the shared coordinate</p>
  <ol class="steps">
    <li><p>Substitute the line expression for $y$ into the curve: $2x+k=x^2-4x+7$.</p></li>
    <li><p>Subtract $2x$ from both sides: $k=x^2-4x+7-2x$.</p></li>
    <li><p>Collect the linear terms: $k=x^2-6x+7$.</p></li>
    <li><p>Subtract $k$ from both sides: $0=x^2-6x+7-k$.</p></li>
    <li><p>Reverse the equality: $x^2-6x+7-k=0$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Calculate the discriminant in terms of the parameter</p>
  <ol class="steps" start="6">
    <li><p>Identify $a=1$, $b=-6$, and $c=7-k$.</p></li>
    <li><p>Substitute into the discriminant: $\Delta=(-6)^2-4(1)(7-k)$.</p></li>
    <li><p>Evaluate the square: $\Delta=36-4(1)(7-k)$.</p></li>
    <li><p>Multiply $4$ by $1$: $\Delta=36-4(7-k)$.</p></li>
    <li><p>Distribute $-4$: $\Delta=36-28+4k$.</p></li>
    <li><p>Combine the constants: $\Delta=8+4k$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Exactly one intersection</p>
  <ol class="steps" start="12">
    <li><p>Impose $\Delta=0$: $8+4k=0$.</p></li>
    <li><p>Subtract $8$: $4k=-8$.</p></li>
    <li><p>Divide by $4$: $k=-2$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Two distinct intersections</p>
  <ol class="steps" start="15">
    <li><p>Impose $\Delta\gt0$: $8+4k\gt0$.</p></li>
    <li><p>Subtract $8$: $4k\gt-8$.</p></li>
    <li><p>Divide by positive $4$: $k\gt-2$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">No real intersection</p>
  <ol class="steps" start="18">
    <li><p>Impose $\Delta\lt0$: $8+4k\lt0$.</p></li>
    <li><p>Subtract $8$: $4k\lt-8$.</p></li>
    <li><p>Divide by positive $4$: $k\lt-2$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Find the single intersection coordinate</p>
  <ol class="steps" start="21">
    <li><p>Substitute $k=-2$ into the intersection equation: $x^2-6x+7-(-2)=0$.</p></li>
    <li><p>Rewrite subtraction of a negative: $x^2-6x+7+2=0$.</p></li>
    <li><p>Combine the constants: $x^2-6x+9=0$.</p></li>
    <li><p>Factorise the perfect square: $(x-3)^2=0$.</p></li>
    <li><p>Take the square root of zero: $x-3=0$.</p></li>
    <li><p>Add $3$: $x=3$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Find and verify the line coordinate</p>
  <ol class="steps" start="27">
    <li><p>Substitute $k=-2$ into the line: $y=2x-2$.</p></li>
    <li><p>Substitute $x=3$: $y=2(3)-2$.</p></li>
    <li><p>Multiply $2$ by $3$: $y=6-2$.</p></li>
    <li><p>Subtract $2$: $y=4$.</p></li>
    <li><p>Thus the point $(3,4)$ satisfies the line equation when $k=-2$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Verify the curve coordinate independently</p>
  <ol class="steps" start="32">
    <li><p>Call the curve right side $C$. Substitute $x=3$: $C=3^2-4(3)+7$.</p></li>
    <li><p>Evaluate the square: $C=9-4(3)+7$.</p></li>
    <li><p>Multiply $4$ by $3$: $C=9-12+7$.</p></li>
    <li><p>Subtract $12$ from $9$: $C=-3+7$.</p></li>
    <li><p>Add $7$: $C=4$.</p></li>
    <li><p>The curve value equals the coordinate $y=4$, so the same point lies on the parabola.</p></li>
  </ol>
</section>

<aside class="key-takeaway">
  <p><strong>Final answers</strong></p>
  <p>$$ x^2-6x+7-k=0. $$</p>
  <p>$$ k\lt-2:\ \text{no real intersection}. $$</p>
  <p>$$ k=-2:\ \text{one intersection at }(3,4). $$</p>
  <p>$$ k\gt-2:\ \text{two distinct intersections}. $$</p>
</aside>


## Problem 8 — Show that — a fixed distance between roots

<p><a href="{{ '/mathematics/handouts/quadratics/' | relative_url }}#problem-8">Read problem 8</a> <span class="pts" aria-label="8 points">[8]</span></p>

<p>Let $t$ be any real number. Show that $x^2-2tx+t^2-9=0$ always has two distinct real roots exactly $6$ units apart.</p>
<p>Use a completed square to find the roots in terms of $t$. Then verify their sum and product against the coefficients of the quadratic.</p>

<section class="solution">
  <p class="solution-label">Find both roots from a completed square</p>
  <ol class="steps">
    <li><p>Expand the relevant square: $(x-t)^2=x^2-2tx+t^2$.</p></li>
    <li><p>Substitute this identity into the equation: $(x-t)^2-9=0$.</p></li>
    <li><p>Add $9$ to both sides: $(x-t)^2=9$.</p></li>
    <li><p>Take both square-root branches: $x-t=\pm\sqrt9$.</p></li>
    <li><p>Evaluate the square root: $x-t=\pm3$.</p></li>
    <li><p>Add $t$ to both sides: $x=t\pm3$.</p></li>
    <li><p>For real $t$, both of these expressions are real.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Show that their separation is always six</p>
  <ol class="steps" start="8">
    <li><p>Name the minus-branch root: $r=t-3$.</p></li>
    <li><p>Name the plus-branch root: $s=t+3$.</p></li>
    <li><p>Substitute the roots into their difference: $s-r=(t+3)-(t-3)$.</p></li>
    <li><p>Remove the brackets: $s-r=t+3-t+3$.</p></li>
    <li><p>Cancel the $t$ terms: $s-r=3+3$.</p></li>
    <li><p>Add the constants: $s-r=6$.</p></li>
    <li><p>The difference is positive, so $s$ is the larger root.</p></li>
    <li><p>A nonzero difference proves that the roots are distinct for every real $t$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Check the sum against the coefficients</p>
  <ol class="steps" start="16">
    <li><p>Identify $a=1$, $b=-2t$, and $c=t^2-9$.</p></li>
    <li><p>Substitute into the coefficient sum: $-b/a=-(-2t)/1$.</p></li>
    <li><p>Remove the double negative: $-b/a=2t/1$.</p></li>
    <li><p>Divide by $1$: $-b/a=2t$.</p></li>
    <li><p>Substitute the roots into their sum: $r+s=(t-3)+(t+3)$.</p></li>
    <li><p>Remove the brackets: $r+s=t-3+t+3$.</p></li>
    <li><p>Collect the $t$ terms: $r+s=2t-3+3$.</p></li>
    <li><p>Combine the constants: $r+s=2t$.</p></li>
    <li><p>The calculated sum equals the coefficient value $-b/a$.</p></li>
  </ol>
</section>

<section class="solution">
  <p class="solution-label">Check the product against the coefficients</p>
  <ol class="steps" start="25">
    <li><p>Substitute into the coefficient product: $c/a=(t^2-9)/1$.</p></li>
    <li><p>Divide by $1$: $c/a=t^2-9$.</p></li>
    <li><p>Substitute the roots into their product: $rs=(t-3)(t+3)$.</p></li>
    <li><p>Expand the product: $rs=t^2+3t-3t-9$.</p></li>
    <li><p>Cancel the linear terms: $rs=t^2-9$.</p></li>
    <li><p>The calculated product equals the coefficient value $c/a$.</p></li>
  </ol>
</section>

<aside class="key-takeaway">
  <p><strong>Final answers</strong></p>
  <p>$$ x=t-3\quad\text{or}\quad x=t+3\qquad(t\in\mathbb R). $$</p>
  <p>$$ \text{Distance between the roots}=6. $$</p>
  <p>$$ r+s=2t. $$</p>
  <p>$$ rs=t^2-9. $$</p>
</aside>

<p class="marks-total">Total covered: 46 points across eight problems.</p>
