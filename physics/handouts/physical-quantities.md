---
layout: handout
title: "Physical quantities and units: methods and practice"
permalink: /physics/handouts/physical-quantities/
subject: Physics
subject_url: /physics/
code: "9702"
topic: Physical quantities and units
updated: 2026-10-15
description: "Build SI units, convert squared and cubed quantities, check dimensions, and attempt eight original problems."
points_total: 40
---

## What the syllabus requires

Study paraphrases for Cambridge International Physics 9702, physical quantities and units (§1.1 physical quantities; §1.2 SI units). Confirm the detail against the syllabus for your examination year.

- **[9702 §1.1]** Distinguish physical quantities, their numerical values and their units; identify base and derived quantities.
- **[9702 §1.2]** State SI base units, express derived units in base units, and check dimensional consistency.
- **[9702 §1.2]** Use decimal prefixes and convert units, including squared and cubed quantities.

## The idea

<section class="box is-idea">
<h3 class="box-title">The SI system</h3>
<p>A quantity is a number times a unit. Seven independent SI base units generate derived units by multiplication, division and powers: speed uses $\mathrm{m\,s^{-1}}$ and force uses $\mathrm{kg\,m\,s^{-2}}$. A prefix scales the unit; $1\,\mathrm{cm}=10^{-2}\,\mathrm m$, so $1\,\mathrm{cm^2}=(10^{-2}\,\mathrm m)^2$ and $1\,\mathrm{cm^3}=(10^{-2}\,\mathrm m)^3$.</p>
</section>

<section class="box is-idea">
<h3 class="box-title">Why consistent units matter</h3>
<p>To use $p=F/A$ in pascals, use newtons and square metres. Leaving an area in $\mathrm{cm^2}$ gives an incorrect numerical result. Write unit factors so the unwanted units cancel. Equal terms must have matching dimensions, but dimensional consistency alone cannot establish a physical law or its numerical coefficient.</p>
</section>

## Definitions and results

<section class="box">
<h3 class="box-title">The seven SI base units</h3>
<table><thead><tr><th>Base quantity</th><th>Unit</th><th>Symbol</th></tr></thead><tbody>
<tr><td>length</td><td>metre</td><td>$\mathrm m$</td></tr>
<tr><td>mass</td><td>kilogram</td><td>$\mathrm{kg}$</td></tr>
<tr><td>time</td><td>second</td><td>$\mathrm s$</td></tr>
<tr><td>electric current</td><td>ampere</td><td>$\mathrm A$</td></tr>
<tr><td>thermodynamic temperature</td><td>kelvin</td><td>$\mathrm K$</td></tr>
<tr><td>amount of substance</td><td>mole</td><td>$\mathrm{mol}$</td></tr>
<tr><td>luminous intensity</td><td>candela</td><td>$\mathrm{cd}$</td></tr>
</tbody></table>
<p>Kilogram, not gram, is the SI base unit for mass.</p>
</section>

<section class="box">
<h3 class="box-title">Derived units</h3>
<table><thead><tr><th>Quantity</th><th>Unit</th><th>SI base-unit expression</th></tr></thead><tbody>
<tr><td>area</td><td>$\mathrm{m^2}$</td><td>$\mathrm{m^2}$</td></tr>
<tr><td>volume</td><td>$\mathrm{m^3}$</td><td>$\mathrm{m^3}$</td></tr>
<tr><td>speed</td><td>$\mathrm{m\,s^{-1}}$</td><td>$\mathrm{m\,s^{-1}}$</td></tr>
<tr><td>acceleration</td><td>$\mathrm{m\,s^{-2}}$</td><td>$\mathrm{m\,s^{-2}}$</td></tr>
<tr><td>force</td><td>$\mathrm N$</td><td>$\mathrm{kg\,m\,s^{-2}}$</td></tr>
<tr><td>energy</td><td>$\mathrm J$</td><td>$\mathrm{kg\,m^2\,s^{-2}}$</td></tr>
<tr><td>pressure</td><td>$\mathrm{Pa}$</td><td>$\mathrm{kg\,m^{-1}\,s^{-2}}$</td></tr>
<tr><td>power</td><td>$\mathrm W$</td><td>$\mathrm{kg\,m^2\,s^{-3}}$</td></tr>
<tr><td>density</td><td>$\mathrm{kg\,m^{-3}}$</td><td>$\mathrm{kg\,m^{-3}}$</td></tr>
</tbody></table>
<p>For instance, $F=ma$ gives $[F]=\mathrm{kg\,m\,s^{-2}}$, and $p=F/A$ gives $[p]=\mathrm{kg\,m^{-1}\,s^{-2}}$.</p>
</section>

<section class="box">
<h3 class="box-title">Prefixes</h3>
<table><thead><tr><th>Prefix</th><th>Symbol</th><th>Multiplier</th></tr></thead><tbody>
<tr><td>tera</td><td>$\mathrm T$</td><td>$10^{12}$</td></tr>
<tr><td>giga</td><td>$\mathrm G$</td><td>$10^{9}$</td></tr>
<tr><td>mega</td><td>$\mathrm M$</td><td>$10^6$</td></tr>
<tr><td>kilo</td><td>$\mathrm k$</td><td>$10^3$</td></tr>
<tr><td>centi</td><td>$\mathrm c$</td><td>$10^{-2}$</td></tr>
<tr><td>milli</td><td>$\mathrm m$</td><td>$10^{-3}$</td></tr>
<tr><td>micro</td><td>$\mu$</td><td>$10^{-6}$</td></tr>
<tr><td>nano</td><td>$\mathrm n$</td><td>$10^{-9}$</td></tr>
<tr><td>pico</td><td>$\mathrm p$</td><td>$10^{-12}$</td></tr>
</tbody></table>
<p>Symbols are case-sensitive: $\mathrm M$ means mega, $\mathrm m$ means milli.</p>
</section>

<section class="box">
<h3 class="box-title">Dimensional consistency</h3>
<p>Let $M$, $L$ and $T$ represent mass, length and time dimensions. Then $[v]=LT^{-1}$ and $[F]=MLT^{-2}$. Only terms with matching dimensions can be added or equated. A pure number such as $\tfrac12$ is dimensionless. A dimensional match is necessary but not sufficient to prove a physical relationship.</p>
</section>

## Worked examples

<section class="example" aria-labelledby="example-1">
<div class="example-head"><h3 id="example-1">Example 1 — area</h3><span class="source-tag">Original worked example</span></div>
<div class="example-statement"><p>Convert $250\,\mathrm{cm^2}$ to $\mathrm{m^2}$.</p></div>
<div class="solution"><p class="solution-label">Solution</p>
<p>Begin with $1\,\mathrm{cm}=10^{-2}\,\mathrm m$.</p>
<p>$$1\,\mathrm{cm^2}=(10^{-2}\,\mathrm m)^2=10^{-4}\,\mathrm{m^2}.$$</p>
<p>$$250\,\mathrm{cm^2}\times\left(\frac{10^{-2}\,\mathrm m}{1\,\mathrm{cm}}\right)^2=250\times10^{-4}\,\mathrm{m^2}=2.50\times10^{-2}\,\mathrm{m^2}.$$</p>
<p><strong>Final answer:</strong> $2.50\times10^{-2}\,\mathrm{m^2}$ (three significant figures). Check: less than one square metre, as expected.</p>
</div></section>

<section class="example" aria-labelledby="example-2">
<div class="example-head"><h3 id="example-2">Example 2 — volume</h3><span class="source-tag">Original worked example</span></div>
<div class="example-statement"><p>Convert $3.6\,\mathrm{cm^3}$ to $\mathrm{m^3}$.</p></div>
<div class="solution"><p class="solution-label">Solution</p>
<p>Begin with $1\,\mathrm{cm}=10^{-2}\,\mathrm m$. Cube the <em>whole</em> factor.</p>
<p>$$1\,\mathrm{cm^3}=(10^{-2}\,\mathrm m)^3=10^{-6}\,\mathrm{m^3}.$$</p>
<p>$$3.6\,\mathrm{cm^3}\times\left(\frac{10^{-2}\,\mathrm m}{1\,\mathrm{cm}}\right)^3=3.6\times10^{-6}\,\mathrm{m^3}.$$</p>
<p><strong>Final answer:</strong> $3.6\times10^{-6}\,\mathrm{m^3}$ (two significant figures). Check: a cubic centimetre is one millionth of a cubic metre.</p>
</div></section>

<section class="example" aria-labelledby="example-3">
<div class="example-head"><h3 id="example-3">Example 3 — density</h3><span class="source-tag">Original worked example</span></div>
<div class="example-statement"><p>Convert $0.84\,\mathrm{g\,cm^{-3}}$ to $\mathrm{kg\,m^{-3}}$.</p></div>
<div class="solution"><p class="solution-label">Solution</p>
<p>$1\,\mathrm g=10^{-3}\,\mathrm{kg}$ and $1\,\mathrm{cm}=10^{-2}\,\mathrm m$.</p>
<p>$$1\,\mathrm{cm^3}=(10^{-2}\,\mathrm m)^3=10^{-6}\,\mathrm{m^3}.$$</p>
<p>$$0.84\,\frac{\mathrm g}{\mathrm{cm^3}}\times\frac{10^{-3}\,\mathrm{kg}}{1\,\mathrm g}\times\left(\frac{1\,\mathrm{cm}}{10^{-2}\,\mathrm m}\right)^3=0.84\times\frac{10^{-3}}{10^{-6}}\,\mathrm{kg\,m^{-3}}=840\,\mathrm{kg\,m^{-3}}.$$</p>
<p><strong>Final answer:</strong> $8.4\times10^2\,\mathrm{kg\,m^{-3}}$ (two significant figures). Check: $1\,\mathrm{g\,cm^{-3}}=10^3\,\mathrm{kg\,m^{-3}}$.</p>
</div></section>

## Common errors

| Mistake | Why it fails | What to write |
| --- | --- | --- |
| Gram as the SI mass base unit | The base unit is kilogram. | Convert $\mathrm g$ to $\mathrm{kg}$ with $10^{-3}$. |
| Squaring only the number, not the length conversion | The unit and factor both need squaring. | $(10^{-2}\,\mathrm m)^2=10^{-4}\,\mathrm{m^2}$. |
| Cubing only the number | The entire factor must be cubed. | $(10^{-2}\,\mathrm m)^3=10^{-6}\,\mathrm{m^3}$. |
| Treating a denominator volume like a numerator volume | A reciprocal conversion reverses the factor. | In density, write $(\mathrm{cm}/10^{-2}\mathrm m)^3$. |
| Confusing $\mathrm M$ and $\mathrm m$ | Prefix case changes the factor. | Label mega $10^6$, milli $10^{-3}$. |
| Omitting units or claiming that matching dimensions prove a law | Units reveal errors but cannot prove a numerical coefficient. | Carry and cancel units; say “dimensionally possible”. |

## Problem set

Original teaching problems with illustrative point allocations, not official marks. Attempt before consulting the solutions. The bracketed tags sum to 40 points.

<ol class="problems" role="list">
<li id="problem-1"><p><span class="problem-no">1.</span> <strong>Base units</strong> <span class="pts">[3]</span></p><p>State the SI base unit and symbol for (a) mass, (b) amount of substance and (c) luminous intensity.</p></li>
<li id="problem-2"><p><span class="problem-no">2.</span> <strong>Length prefixes</strong> <span class="pts">[4]</span></p><p>Convert $4.8\,\mathrm{mm}$ to (a) metres and (b) micrometres. Give two significant figures.</p></li>
<li id="problem-3"><p><span class="problem-no">3.</span> <strong>Squared units</strong> <span class="pts">[4]</span></p><p>Convert $720\,\mathrm{cm^2}$ to $\mathrm{m^2}$, writing the squared factor explicitly. Give two significant figures.</p></li>
<li id="problem-4"><p><span class="problem-no">4.</span> <strong>Cubed units</strong> <span class="pts">[5]</span></p><p>Convert $25\,\mathrm{cm^3}$ to (a) $\mathrm{m^3}$ and (b) $\mathrm{mm^3}$. Write the cubic factors and give two significant figures.</p></li>
<li id="problem-5"><p><span class="problem-no">5.</span> <strong>Density</strong> <span class="pts">[5]</span></p><p>Convert $1.25\,\mathrm{g\,cm^{-3}}$ to $\mathrm{kg\,m^{-3}}$, showing the mass and cubed-length factors.</p></li>
<li id="problem-6"><p><span class="problem-no">6.</span> <strong>Derived unit</strong> <span class="pts">[6]</span></p><p>Given $E=\tfrac12 mv^2$, where $m$ is mass and $v$ is speed, derive the SI base units and dimensions of $E$.</p></li>
<li id="problem-7"><p><span class="problem-no">7.</span> <strong>Pressure</strong> <span class="pts">[7]</span></p><p>A force of $1.8\,\mathrm{kN}$ acts on $24\,\mathrm{cm^2}$. Find $p=F/A$ in pascals and kilopascals to two significant figures.</p></li>
<li id="problem-8"><p><span class="problem-no">8.</span> <strong>Constant and dimensions</strong> <span class="pts">[6]</span></p><p>For $F=cv^2$, $F=12\,\mathrm N$ and $v=3.0\,\mathrm{m\,s^{-1}}$. Find the SI base units and value of $c$ to two significant figures; check dimensions.</p></li>
</ol>

<p class="marks-total">Total: $3+4+4+5+5+6+7+6=40$ points.</p>

## Companions

- [Complete solutions]({{ '/physics/handouts/physical-quantities-solutions/' | relative_url }}) — all eight problems, with each intermediate step.
- [Physics subject page]({{ '/physics/' | relative_url }}) — related references and guidance.
