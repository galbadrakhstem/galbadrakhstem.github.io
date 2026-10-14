---
layout: handout
title: Information representation — number-base conversions
permalink: /computer-science/handouts/info-rep/
description: Step-by-step binary, denary, and hexadecimal conversions, with a repeated-division trace table and an eight-bit two's-complement walkthrough.
subject: Computer Science
subject_url: /computer-science/
code: 9618
topic: Information representation · Number systems
---

A subscript gives the base: for example, $10110110_2$ is binary and $182_{10}$ is denary. A hexadecimal digit represents four bits, called a **nibble**. Keep leading zeroes whenever a question specifies a fixed bit width.

## Walkthrough 1 — Binary to denary

Convert $10110110_2$ to denary. In an eight-bit value, the place values from left to right are $2^7$ down to $2^0$.

| Bit position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Place value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| Bit | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 0 |
| Contribution | 128 | 0 | 32 | 16 | 0 | 4 | 2 | 0 |

Add the contributions of the bits that are 1:

$$
\begin{aligned}
10110110_2 &= 1\times128+0\times64+1\times32+1\times16 \\
           &\quad+0\times8+1\times4+1\times2+0\times1 \\
           &= 128+0+32+16+0+4+2+0 \\
           &= 182_{10}.
\end{aligned}
$$

**Answer:** $10110110_2=182_{10}$.

## Walkthrough 2 — Denary to binary by repeated division

Convert $173_{10}$ to binary. Repeatedly divide by 2, recording the quotient and remainder. The remainders are produced least-significant bit first, so read them **from the bottom row upwards**.

| Current value $n$ | $n\text{ DIV }2$ (quotient) | $n\text{ MOD }2$ (remainder) |
|---:|---:|---:|
| 173 | 86 | 1 |
| 86 | 43 | 0 |
| 43 | 21 | 1 |
| 21 | 10 | 1 |
| 10 | 5 | 0 |
| 5 | 2 | 1 |
| 2 | 1 | 0 |
| 1 | 0 | 1 |

The remainders, bottom to top, are $1\,0\,1\,0\,1\,1\,0\,1$:

$$
173_{10}=10101101_2.
$$

**Check by place values:** $10101101_2=128+32+8+4+1=173_{10}$.

The same trace is used by a repeated-division algorithm:

```text
WHILE n > 0
    remainder ← n MOD 2
    record remainder
    n ← n DIV 2
ENDWHILE
```

Read the recorded remainders in reverse order to form the binary number. If a fixed width is needed, pad on the left with zeroes after conversion.

## Walkthrough 3 — Binary and hexadecimal

### Binary to hexadecimal

Convert $11010110_2$ to hexadecimal.

**Step 1: Group bits from the right into nibbles.** This value already has eight bits:

$$
11010110_2=1101\;0110_2.
$$

**Step 2: Convert each nibble.** The first nibble is $1101_2=8+4+0+1=13_{10}=D_{16}$. The second is $0110_2=0+4+2+0=6_{10}=6_{16}$.

**Step 3: Write the two hexadecimal digits in the same order.**

$$
11010110_2=D6_{16}.
$$

### Hexadecimal to binary

Convert $2F_{16}$ to binary. Replace each hexadecimal digit with exactly four bits:

| Hex digit | Denary value | Four-bit binary |
|---:|---:|---:|
| 2 | 2 | 0010 |
| F | 15 | 1111 |

Join the nibbles without changing their order:

$$
2F_{16}=0010\;1111_2=00101111_2.
$$

The leading zero is retained here because the result is written as an eight-bit value. As an unsigned number, its value is $32+8+4+2+1=47_{10}$.

### Nibble reference

| Denary | Hex | Binary | Denary | Hex | Binary |
|---:|---:|---:|---:|---:|---:|
| 0 | 0 | 0000 | 8 | 8 | 1000 |
| 1 | 1 | 0001 | 9 | 9 | 1001 |
| 2 | 2 | 0010 | 10 | A | 1010 |
| 3 | 3 | 0011 | 11 | B | 1011 |
| 4 | 4 | 0100 | 12 | C | 1100 |
| 5 | 5 | 0101 | 13 | D | 1101 |
| 6 | 6 | 0110 | 14 | E | 1110 |
| 7 | 7 | 0111 | 15 | F | 1111 |

## Walkthrough 4 — Representing $-18$ in eight-bit two's complement

Two's complement represents signed integers at a fixed width. To form $-18$ in eight bits, start with $+18$, invert every bit, then add 1.

**Step 1: Write positive 18 using eight bits.**

$$
18_{10}=00010010_2.
$$

**Step 2: Invert all eight bits.**

$$
00010010_2\;\longrightarrow\;11101101_2.
$$

**Step 3: Add 1, keeping eight bits.**

```text
  11101101
+ 00000001
----------
  11101110
```

Therefore, the eight-bit two's-complement representation is

$$
-18_{10}=11101110_2\quad\text{(8-bit two's complement)}.
$$

**Check the negative value:** the most significant bit is 1, so the value is negative. Invert $11101110_2$ to get $00010001_2$, add 1 to get $00010010_2=18_{10}$, then restore the negative sign. The value is $-18$.

For $n$ bits, the two's-complement range is $-2^{n-1}$ to $2^{n-1}-1$. For eight bits, this is $-128$ to $+127$.

## Common checks

- Write the base beside a value while working; the digit string alone can be ambiguous.
- For denary-to-binary repeated division, read remainders from bottom to top.
- Group binary digits into nibbles from the right when converting to hexadecimal.
- Keep the specified width for signed values; do not discard leading zeroes or the sign bit.
- Before interpreting a bit pattern, check whether it is unsigned or signed two's complement.

For broader notes on text, image, audio, and compression, see [Information representation]({{ '/computer-science/syllabus-notes/information-representation/' | relative_url }}).
