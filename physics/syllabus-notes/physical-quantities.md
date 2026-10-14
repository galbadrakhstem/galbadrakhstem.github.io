---
layout: default
title: Physical quantities and units
permalink: /physics/syllabus-notes/physical-quantities/
description: Notes on SI quantities and units, prefixes, scalars and vectors, and consistent unit handling for Cambridge International Physics 9702.
---

<p class="eyebrow">Physics · 9702 · Syllabus notes</p>

# Physical quantities and units

A **physical quantity** is a measurable property expressed as a numerical value multiplied by a unit. For example, $2.5\text{ m}$ represents a length of $2.5$ metres. A correct numerical answer is incomplete if its unit is missing or inappropriate.

## SI base quantities

The International System of Units (SI) defines seven base quantities. Other SI units can be built from these base units.

| Base quantity | Common quantity symbol | SI base unit | Unit symbol |
|---|---:|---|---:|
| Length | $l$ | metre | m |
| Mass | $m$ | kilogram | kg |
| Time | $t$ | second | s |
| Electric current | $I$ | ampere | A |
| Thermodynamic temperature | $T$ | kelvin | K |
| Amount of substance | $n$ | mole | mol |
| Luminous intensity | $I_v$ | candela | cd |

The kilogram is the SI base unit of mass. For this reason, mass conversions should be made to kilograms—not to grams—when substituting into equations that require SI units.

## Common derived quantities

A derived unit is formed by multiplying or dividing base units. Equivalent forms are useful for checking equations and conversions.

| Quantity | Relationship | SI unit | In base units |
|---|---|---|---|
| Area | length $\times$ length | $\text{m}^2$ | $\text{m}^2$ |
| Volume | length $\times$ length $\times$ length | $\text{m}^3$ | $\text{m}^3$ |
| Speed | distance $\div$ time | $\text{m s}^{-1}$ | $\text{m s}^{-1}$ |
| Acceleration | change in velocity $\div$ time | $\text{m s}^{-2}$ | $\text{m s}^{-2}$ |
| Density | mass $\div$ volume | $\text{kg m}^{-3}$ | $\text{kg m}^{-3}$ |
| Force | mass $\times$ acceleration | newton, N | $\text{kg m s}^{-2}$ |
| Energy / work | force $\times$ distance | joule, J | $\text{kg m}^2\text{ s}^{-2}$ |
| Power | energy $\div$ time | watt, W | $\text{kg m}^2\text{ s}^{-3}$ |
| Pressure | force $\div$ area | pascal, Pa | $\text{kg m}^{-1}\text{ s}^{-2}$ |
| Frequency | cycles $\div$ time | hertz, Hz | $\text{s}^{-1}$ |
| Charge | current $\times$ time | coulomb, C | $\text{A s}$ |
| Potential difference | energy transferred $\div$ charge | volt, V | $\text{kg m}^2\text{ s}^{-3}\text{ A}^{-1}$ |
| Resistance | potential difference $\div$ current | ohm, $\Omega$ | $\text{kg m}^2\text{ s}^{-3}\text{ A}^{-2}$ |

Unit symbols are not pluralised and do not take a full stop: write $5\text{ kg}$, not “5 kgs.” Leave a space between the number and the unit symbol, except for the degree symbol where the convention is different.

## Prefixes and powers of ten

Prefixes make very large and very small quantities easier to write. Learn the prefixes used in your syllabus and take care to apply the power of ten to the **whole unit**.

| Prefix | Symbol | Multiplier | Example |
|---|---:|---:|---|
| tera | T | $10^{12}$ | $1\text{ TW}=10^{12}\text{ W}$ |
| giga | G | $10^9$ | $1\text{ GHz}=10^9\text{ Hz}$ |
| mega | M | $10^6$ | $1\text{ MJ}=10^6\text{ J}$ |
| kilo | k | $10^3$ | $1\text{ km}=10^3\text{ m}$ |
| centi | c | $10^{-2}$ | $1\text{ cm}=10^{-2}\text{ m}$ |
| milli | m | $10^{-3}$ | $1\text{ ms}=10^{-3}\text{ s}$ |
| micro | $\mu$ | $10^{-6}$ | $1\mu\text{A}=10^{-6}\text{ A}$ |
| nano | n | $10^{-9}$ | $1\text{ nm}=10^{-9}\text{ m}$ |
| pico | p | $10^{-12}$ | $1\text{ pF}=10^{-12}\text{ F}$ |

For area and volume, square or cube the conversion factor as well as the unit:

$$
1\text{ cm}^2=(10^{-2}\text{ m})^2=10^{-4}\text{ m}^2,
\qquad
1\text{ cm}^3=(10^{-2}\text{ m})^3=10^{-6}\text{ m}^3.
$$

A common error is to use $10^{-2}$ for a square centimetre or $10^{-2}$ for a cubic centimetre. The correct factors are $10^{-4}$ and $10^{-6}$ respectively.

## Scalars and vectors

A **scalar** has magnitude only. Examples include mass, time, energy, temperature, and speed. A **vector** has both magnitude and direction. Examples include displacement, velocity, acceleration, and force.

When adding vectors, direction matters. In one dimension, choose a positive direction and give quantities in the opposite direction a negative sign. Do not add vector magnitudes as if all directions were the same.

## Dimensional checks

A valid physical equation must be dimensionally consistent: quantities added or equated must have compatible units. For example, the equation for uniform speed is $v=\frac{s}{t}$. Its units are

$$
\frac{\text{m}}{\text{s}}=\text{m s}^{-1},
$$

which is the correct SI unit for speed. A dimensional check can reveal a unit or algebra error, but it cannot prove that an equation is physically correct.

## Quick conversion checklist

1. Write the conversion factor as a fraction equal to one, such as $\frac{1000\text{ m}}{1\text{ km}}$.
2. Arrange it so the old unit cancels and the required unit remains.
3. For squared or cubed units, square or cube the full conversion factor.
4. Substitute SI values into the equation and keep units through the calculation.
5. Check the final unit and sensible precision.

Continue with the [physical quantities handout]({{ '/physics/handouts/physical-quantities/' | relative_url }}) for unit tables and fully worked calculations.
