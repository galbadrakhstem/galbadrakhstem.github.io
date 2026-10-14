---
layout: handout
title: Physical quantities and SI units
permalink: /physics/handouts/physical-quantities/
description: A compact SI reference with base and derived units, conversion reminders, and three calculations worked through step by step.
subject: Physics
subject_url: /physics/
code: 9702
topic: Physical quantities · Units
---

Use this handout as a reference when setting up calculations. Convert to consistent SI units before substituting into an equation, and keep units visible until the final line.

## SI base units

| Base quantity | SI base unit | Symbol |
|---|---|---:|
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric current | ampere | A |
| Thermodynamic temperature | kelvin | K |
| Amount of substance | mole | mol |
| Luminous intensity | candela | cd |

## Useful derived units

| Quantity | Unit name | Unit symbol | Equivalent base units |
|---|---|---:|---|
| Area | — | $\text{m}^2$ | $\text{m}^2$ |
| Volume | — | $\text{m}^3$ | $\text{m}^3$ |
| Speed | — | $\text{m s}^{-1}$ | $\text{m s}^{-1}$ |
| Acceleration | — | $\text{m s}^{-2}$ | $\text{m s}^{-2}$ |
| Density | — | $\text{kg m}^{-3}$ | $\text{kg m}^{-3}$ |
| Force | newton | N | $\text{kg m s}^{-2}$ |
| Energy / work | joule | J | $\text{kg m}^2\text{ s}^{-2}$ |
| Power | watt | W | $\text{kg m}^2\text{ s}^{-3}$ |
| Pressure | pascal | Pa | $\text{kg m}^{-1}\text{ s}^{-2}$ |
| Frequency | hertz | Hz | $\text{s}^{-1}$ |
| Charge | coulomb | C | $\text{A s}$ |

## Prefixes to recognise

| Prefix | Symbol | Factor |
|---|---:|---:|
| kilo | k | $10^3$ |
| centi | c | $10^{-2}$ |
| milli | m | $10^{-3}$ |
| micro | $\mu$ | $10^{-6}$ |
| nano | n | $10^{-9}$ |

For example, $1\text{ km}=1000\text{ m}$ and $1\text{ ms}=0.001\text{ s}$. When a unit is squared or cubed, apply the power to its conversion factor too: $1\text{ cm}^2=10^{-4}\text{ m}^2$ and $1\text{ cm}^3=10^{-6}\text{ m}^3$.

## Worked examples

### Example 1 — Find density in SI units

A sample has mass $240.0\text{ g}$ and volume $30.0\text{ cm}^3$. Find its density in $\text{kg m}^{-3}$.

Use $\rho=\frac{m}{V}$. Convert the mass first:

$$
\begin{aligned}
m &= 240.0\text{ g}\times\frac{1\text{ kg}}{1000\text{ g}} \\
  &= \frac{240.0}{1000}\text{ kg} \\
  &= 0.2400\text{ kg}.
\end{aligned}
$$

Convert the volume. Since $1\text{ cm}=10^{-2}\text{ m}$, cube the complete length conversion:

$$
\begin{aligned}
V &= 30.0\text{ cm}^3\times\left(\frac{10^{-2}\text{ m}}{1\text{ cm}}\right)^3 \\
  &= 30.0\times10^{-6}\text{ m}^3 \\
  &= 3.00\times10^{-5}\text{ m}^3.
\end{aligned}
$$

Substitute both SI values into the density equation:

$$
\begin{aligned}
\rho &= \frac{m}{V} \\
     &= \frac{0.2400\text{ kg}}{3.00\times10^{-5}\text{ m}^3} \\
     &= 8.00\times10^3\text{ kg m}^{-3}.
\end{aligned}
$$

**Answer:** $8.00\times10^3\text{ kg m}^{-3}$ (to three significant figures).

### Example 2 — Convert a speed to metres per second

Convert $72.0\text{ km h}^{-1}$ to $\text{m s}^{-1}$.

Convert kilometres to metres and hours to seconds. The conversion factors are $1000\text{ m}=1\text{ km}$ and $3600\text{ s}=1\text{ h}$:

$$
\begin{aligned}
72.0\frac{\text{km}}{\text{h}}
&\times\frac{1000\text{ m}}{1\text{ km}}
\times\frac{1\text{ h}}{3600\text{ s}} \\
&= \frac{72.0\times1000}{3600}\frac{\text{m}}{\text{s}} \\
&= \frac{72000}{3600}\text{ m s}^{-1} \\
&= 20.0\text{ m s}^{-1}.
\end{aligned}
$$

The kilometre and hour units cancel, leaving metres per second.

**Answer:** $20.0\text{ m s}^{-1}$.

### Example 3 — Find pressure, converting area first

A force of $36.0\text{ N}$ acts on an area of $150.0\text{ cm}^2$. Find the pressure in pascals.

Use $p=\frac{F}{A}$. Since $1\text{ cm}=10^{-2}\text{ m}$, square the conversion factor for area:

$$
\begin{aligned}
A &= 150.0\text{ cm}^2\times\left(\frac{10^{-2}\text{ m}}{1\text{ cm}}\right)^2 \\
  &= 150.0\times10^{-4}\text{ m}^2 \\
  &= 0.01500\text{ m}^2.
\end{aligned}
$$

Substitute force and area into the pressure equation:

$$
\begin{aligned}
p &= \frac{F}{A} \\
  &= \frac{36.0\text{ N}}{0.01500\text{ m}^2} \\
  &= 2400\text{ N m}^{-2} \\
  &= 2.40\times10^3\text{ Pa}.
\end{aligned}
$$

A pascal is one newton per square metre, $1\text{ Pa}=1\text{ N m}^{-2}$.

**Answer:** $2.40\times10^3\text{ Pa}$ (to three significant figures).

## Before you submit a calculation

- Is the equation appropriate for the physical situation?
- Have all values been converted to consistent SI units?
- Have you squared or cubed conversion factors where needed?
- Does the final unit match the quantity asked for?
- Is the answer given to an appropriate precision?

For fuller topic notes, return to [Physical quantities and units]({{ '/physics/syllabus-notes/physical-quantities/' | relative_url }}).
