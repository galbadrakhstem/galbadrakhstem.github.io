---
layout: default
title: Information representation
permalink: /computer-science/syllabus-notes/information-representation/
description: Notes on positional number systems and the representation of text, integers, images, sound, and compressed data for Cambridge International Computer Science 9618.
---

<p class="eyebrow">Computer Science · 9618 · Syllabus notes</p>

# Information representation

Computers store and process data as binary digits (bits). A pattern of bits has no meaning by itself: a representation rule tells a system how to interpret it as a number, character, colour, or sound sample.

## Positional number systems

In a base-$b$ positional system, each digit is multiplied by a power of $b$. For example, the denary value of $1101_2$ is

$$
1\times2^3+1\times2^2+0\times2^1+1\times2^0=8+4+0+1=13.
$$

The most significant digit has the greatest place value. Common bases are denary (base 10), binary (base 2), and hexadecimal (base 16). A hexadecimal digit represents exactly four binary bits, so hexadecimal is a compact way to write a binary pattern.

- **Binary to denary:** add the place values for the bits that are 1.
- **Denary to binary:** repeatedly divide by 2 and read the remainders from last to first, or select powers of 2 from largest to smallest.
- **Binary to hexadecimal:** group bits into nibbles (groups of four) from the right, padding the leftmost group with zeroes if needed.
- **Hexadecimal to binary:** replace each hexadecimal digit with its four-bit binary equivalent.

For example, $11010110_2$ groups as $1101\;0110_2$. The nibbles have values 13 and 6, so the hexadecimal value is $D6_{16}$.

## Representing signed integers

An unsigned $n$-bit integer can represent values from $0$ to $2^n-1$. For signed binary integers, a common method is **two's complement**. In an $n$-bit two's-complement pattern, the most significant bit has a negative place value; the representable range is $-2^{n-1}$ to $2^{n-1}-1$.

To form a negative value in a fixed number of bits:

1. Write the positive magnitude using exactly that many bits.
2. Invert every bit (change 0 to 1 and 1 to 0).
3. Add 1, keeping the same bit width.

For example, in eight bits, $+18=00010010_2$. Inverting the bits gives $11101101_2$; adding 1 gives $11101110_2$, the two's-complement representation of $-18$.

The width matters. Eight-bit two's complement ranges from $-128$ to $+127$; a value outside that range causes overflow and cannot be represented correctly in eight bits.

## Text representation

Text is stored by assigning numeric codes to characters. ASCII defines a small character set, while Unicode provides code points for a much wider range of scripts and symbols. The number of bytes used for a character depends on the character encoding—for example, UTF-8 uses a variable number of bytes—so do not assume every character always occupies the same number of bits unless the question specifies an encoding.

## Image representation

A raster image is stored as a grid of pixels. Each pixel's value identifies its colour. For an uncompressed image with no additional metadata, a basic estimate of its storage is

$$
\text{image size in bits}=\text{width in pixels}\times\text{height in pixels}\times\text{colour depth in bits per pixel}.
$$

A greater colour depth allows more possible colours per pixel, and a greater resolution means more pixels. Both increase the data required for an uncompressed image. File headers, palettes, and compression can change the actual file size, so include them only when the question specifies them.

## Sound representation

Digital audio represents a sound wave by taking samples at regular intervals and storing each sample as a binary value. For uncompressed audio, ignoring headers and metadata,

$$
\text{size in bits}=\text{sample rate}\times\text{duration}\times\text{bit depth}\times\text{number of channels}.
$$

A higher sample rate records more samples per second; a greater bit depth allows more possible values per sample. For stereo audio there are two channels, so the storage calculation includes a factor of 2.

## Compression

Compression reduces the amount of data needed to store or transmit information.

- **Lossless compression** allows the original data to be reconstructed exactly. It is appropriate when every bit must be preserved, such as program files or text.
- **Lossy compression** removes some information to reduce the file size. The discarded information cannot be recovered exactly; it can be suitable for media when the reduction is acceptable.

Compression ratio and file-size calculations depend on the definitions and units given in the question. Write the formula, keep bit and byte units distinct, and state any conversion used. In general, $8$ bits make $1$ byte; follow the question's stated convention for larger storage units.

Continue with the [conversion handout]({{ '/computer-science/handouts/info-rep/' | relative_url }}) for worked number-base examples and trace tables.
