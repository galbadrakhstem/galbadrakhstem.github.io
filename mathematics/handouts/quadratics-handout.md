---
layout: handout
title: Quadratic equations
permalink: /mathematics/handouts/quadratics/
description: Three fully worked methods for solving quadratic equations, followed by five practice problems with step-by-step solutions.
subject: Mathematics
subject_url: /mathematics/
code: 9709
topic: Algebra · Quadratics
---

Quadratic equations have the form $ax^2+bx+c=0$, where $a\ne0$. The three methods in this handout are **factorising**, **completing the square**, and the **quadratic formula**. Choose a method that fits the equation, and keep the original equation visible while you work.

## Worked examples

### Example 1 — Solve by factorising

Solve $2x^2-5x-3=0$.

**Step 1: Find two numbers.** Multiply the coefficient of $x^2$ by the constant term:

$$
2(-3)=-6.
$$

We need two numbers whose product is $-6$ and whose sum is $-5$. Those numbers are $-6$ and $1$.

**Step 2: Split the middle term.** Replace $-5x$ by $-6x+x$:

$$
\begin{aligned}
2x^2-5x-3 &= 0 \\
2x^2-6x+x-3 &= 0.
\end{aligned}
$$

**Step 3: Factor each pair.**

$$
\begin{aligned}
2x^2-6x+x-3 &= 0 \\
2x(x-3)+1(x-3) &= 0.
\end{aligned}
$$

**Step 4: Take out the common factor.**

$$
(2x+1)(x-3)=0.
$$

**Step 5: Set each factor equal to zero.**

$$
\begin{aligned}
2x+1 &= 0 &\Rightarrow 2x&=-1 &\Rightarrow x&=-\frac12,\\
x-3 &= 0 &\Rightarrow x&=3.
\end{aligned}
$$

Therefore, $x=-\frac12$ or $x=3$.

**Check:** For $x=3$, $2(3)^2-5(3)-3=18-15-3=0$. For $x=-\frac12$, $2(\frac14)-5(-\frac12)-3=\frac12+\frac52-3=3-3=0$.

### Example 2 — Solve by completing the square

Solve $2x^2+8x+3=0$.

**Step 1: Divide every term by $2$.**

$$
\begin{aligned}
2x^2+8x+3 &= 0 \\
x^2+4x+\frac32 &= 0.
\end{aligned}
$$

**Step 2: Move the constant term to the right.**

$$
x^2+4x=-\frac32.
$$

**Step 3: Add the square of half the coefficient of $x$ to both sides.** Half of $4$ is $2$, and $2^2=4$:

$$
\begin{aligned}
x^2+4x+4 &= -\frac32+4 \\
          &= -\frac32+\frac82 \\
          &= \frac52.
\end{aligned}
$$

**Step 4: Write the left side as a square.**

$$
(x+2)^2=\frac52.
$$

**Step 5: Take both square roots.**

$$
\begin{aligned}
x+2 &= \pm\sqrt{\frac52} \\
    &= \pm\sqrt{\frac{10}{4}} \\
    &= \pm\frac{\sqrt{10}}{2}.
\end{aligned}
$$

**Step 6: Subtract $2$ from both sides.**

$$
x=-2\pm\frac{\sqrt{10}}{2}.
$$

Therefore, the two solutions are $x=-2+\frac{\sqrt{10}}2$ and $x=-2-\frac{\sqrt{10}}2$.

### Example 3 — Solve using the quadratic formula

Solve $5x^2-2x-1=0$.

For $ax^2+bx+c=0$, the quadratic formula is $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$. Here $a=5$, $b=-2$, and $c=-1$.

**Step 1: Substitute the coefficients into the formula.**

$$
x=\frac{-(-2)\pm\sqrt{(-2)^2-4(5)(-1)}}{2(5)}.
$$

**Step 2: Simplify the signs, powers, and products.**

$$
\begin{aligned}
x &= \frac{2\pm\sqrt{4+20}}{10} \\
  &= \frac{2\pm\sqrt{24}}{10}.
\end{aligned}
$$

**Step 3: Simplify the surd.** Since $24=4\times6$,

$$
\sqrt{24}=\sqrt{4\times6}=2\sqrt6.
$$

**Step 4: Substitute and simplify the fraction.**

$$
\begin{aligned}
x &= \frac{2\pm2\sqrt6}{10} \\
  &= \frac{2(1\pm\sqrt6)}{2(5)} \\
  &= \frac{1\pm\sqrt6}{5}.
\end{aligned}
$$

Therefore, $x=\frac{1+\sqrt6}{5}$ or $x=\frac{1-\sqrt6}{5}$.

## Practice problems

Try each problem before opening its solution. The solutions are shown in full so you can compare the reasoning line by line.

### Problem 1

Solve $x^2-7x+12=0$ by factorising.

**Solution**

We need two numbers with product $12$ and sum $-7$. They are $-3$ and $-4$:

$$
\begin{aligned}
x^2-7x+12 &= 0 \\
x^2-3x-4x+12 &= 0 \\
x(x-3)-4(x-3) &= 0 \\
(x-4)(x-3) &= 0.
\end{aligned}
$$

Set each factor equal to zero:

$$
\begin{aligned}
x-4&=0 &\Rightarrow x&=4,\\
x-3&=0 &\Rightarrow x&=3.
\end{aligned}
$$

**Answer:** $x=3$ or $x=4$.

### Problem 2

Solve $3x^2+x-2=0$ by factorising.

**Solution**

The product of the first and last coefficients is $3(-2)=-6$. The numbers $3$ and $-2$ multiply to $-6$ and add to $1$:

$$
\begin{aligned}
3x^2+x-2 &= 0 \\
3x^2+3x-2x-2 &= 0 \\
3x(x+1)-2(x+1) &= 0 \\
(3x-2)(x+1) &= 0.
\end{aligned}
$$

Set each factor equal to zero:

$$
\begin{aligned}
3x-2&=0 &\Rightarrow 3x&=2 &\Rightarrow x&=\frac23,\\
x+1&=0 &\Rightarrow x&=-1.
\end{aligned}
$$

**Answer:** $x=\frac23$ or $x=-1$.

### Problem 3

Solve $x^2-6x+2=0$ by completing the square.

**Solution**

$$
\begin{aligned}
x^2-6x+2 &= 0 \\
x^2-6x &= -2 \\
x^2-6x+9 &= -2+9 \\
x^2-6x+9 &= 7 \\
(x-3)^2 &= 7 \\
x-3 &= \pm\sqrt7 \\
x &= 3\pm\sqrt7.
\end{aligned}
$$

The added term is $9$ because half of $-6$ is $-3$, and $(-3)^2=9$. Both square roots, positive and negative, must be included.

**Answer:** $x=3+\sqrt7$ or $x=3-\sqrt7$.

### Problem 4

Solve $2x^2+3x-7=0$ using the quadratic formula.

**Solution**

Here $a=2$, $b=3$, and $c=-7$. First calculate the discriminant:

$$
\begin{aligned}
b^2-4ac &= 3^2-4(2)(-7) \\
        &= 9+56 \\
        &= 65.
\end{aligned}
$$

Substitute $a=2$, $b=3$, and $c=-7$ into the quadratic formula. The discriminant is $65$, as calculated above, and the denominator is $2a=2(2)=4$:

$$
\begin{aligned}
x &= \frac{-b\pm\sqrt{b^2-4ac}}{2a} \\
  &= \frac{-(3)\pm\sqrt{(3)^2-4(2)(-7)}}{2(2)} \\
  &= \frac{-3\pm\sqrt{9+56}}{4} \\
  &= \frac{-3\pm\sqrt{65}}{4}.
\end{aligned}
$$

**Answer:** $x=\frac{-3+\sqrt{65}}4$ or $x=\frac{-3-\sqrt{65}}4$.

### Problem 5

A rectangle has width $x$ centimetres and length $(x+3)$ centimetres. Its area is $40\text{ cm}^2$. Find its dimensions.

**Solution**

Area is width multiplied by length. Since the width is a length, $x>0$:

$$
\begin{aligned}
x(x+3) &= 40 \\
x^2+3x &= 40 \\
x^2+3x-40 &= 0.
\end{aligned}
$$

The numbers $8$ and $-5$ multiply to $-40$ and add to $3$. Split the middle term and factor by grouping:

$$
\begin{aligned}
x^2+3x-40 &= 0 \\
x^2+8x-5x-40 &= 0 \\
x(x+8)-5(x+8) &= 0 \\
(x-5)(x+8) &= 0.
\end{aligned}
$$

Set each factor equal to zero:

$$
\begin{aligned}
x-5&=0 &\Rightarrow x&=5,\\
x+8&=0 &\Rightarrow x&=-8.
\end{aligned}
$$

The width cannot be negative, so reject $x=-8$ and take $x=5$. The length is $x+3=5+3=8$ centimetres. Check: $5\times8=40\text{ cm}^2$.

**Answer:** width $5$ cm and length $8$ cm.

## Quick method check

- **Factorise** when the factors are straightforward to identify.
- **Complete the square** when the question asks for that form or when the vertex/turning point is useful.
- **Use the quadratic formula** when factorising is difficult or when you need a method that works for any quadratic with $a\ne0$.
- When a question is in context, check whether both roots make sense before giving the final answer.
