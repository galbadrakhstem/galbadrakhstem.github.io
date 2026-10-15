---
layout: default
title: "Last-minute prep · Computer Science 9618"
permalink: /computer-science/handouts/last-minute-prep/
description: "The last week before a 9618 paper — what to memorise, what to check, and the errors that cost the most marks."
---

<p class="eyebrow">Handouts · Last-minute prep</p>

# Last-minute prep

<p class="lead">The last week is not the time to learn a new topic. It is the time to make sure the material you already know survives the pressure of the examination hall.</p>

## The five-day plan

<div class="table-wrap">
<table>
  <thead>
    <tr><th>Day</th><th>What to do</th><th>Why</th></tr>
  </thead>
  <tbody>
    <tr><td>Five days before</td><td>Write out, from memory, the definitions and terms for the paper you are sitting — the registers, the TCP/IP layers, the normal forms. Then check them against the syllabus.</td><td>You find the gaps while there is still time to close them.</td></tr>
    <tr><td>Four days before</td><td>One full past paper under timed conditions, without a calculator. Mark it yourself with the official mark scheme.</td><td>Timing and mark allocation are examined as much as computer science.</td></tr>
    <tr><td>Three days before</td><td>Re-do every question you got wrong. Write down what the error actually was.</td><td>Most lost marks come from a small number of repeated slips.</td></tr>
    <tr><td>Two days before</td><td>Trace two short algorithms by hand — a linear search and a bubble sort, or a stack and a queue — and write one in pseudocode or in your Paper 4 language.</td><td>Tracing by hand is the skill the examination tests and revision often skips.</td></tr>
    <tr><td>The day before</td><td>One or two short questions, then stop. Check the start time, the duration, and the stationery you are allowed.</td><td>Arrive rested and clear about the practical details.</td></tr>
  </tbody>
</table>
</div>

## Conditions people forget

<ul class="link-list">
  <li><strong>No calculator:</strong> calculators are not allowed in any 9618 paper, so set out binary, hexadecimal and file-size arithmetic so that it can be done by hand.</li>
  <li><strong>Binary prefixes:</strong> a kibibyte is 2¹⁰ = 1024 bytes and a kilobyte is 1000 bytes; use the prefix the question uses.</li>
  <li><strong>Two’s complement:</strong> an eight-bit two’s complement integer holds −128 to +127, and a result outside that range is an overflow.</li>
  <li><strong>File sizes:</strong> a bitmap needs width × height × colour depth bits; a sound file needs sampling rate × sampling resolution × length in seconds; divide by 8 for bytes.</li>
  <li><strong>Pseudocode:</strong> follow the pseudocode guide — DECLARE with a data type, ← for assignment, arrays declared with their bounds, and closing keywords such as ENDIF, ENDWHILE and NEXT.</li>
  <li><strong>Floating point:</strong> a normalised two’s complement mantissa starts 0.1 for a positive number and 1.0 for a negative number.</li>
  <li><strong>SQL:</strong> aggregate functions such as COUNT, SUM and AVG go with GROUP BY when you want one result per group, and an INNER JOIN needs the condition that matches the keys.</li>
  <li><strong>Paper 4 evidence:</strong> follow the instructions for saving your program code and screenshots of testing; the evidence you submit is what the examiner sees.</li>
</ul>

<div class="notice">
<strong>Section-by-section revision sheets</strong> are being written alongside the chapter handouts. Until then, use the chapter handouts and the mark schemes of the papers you have already attempted.
</div>

<p><a href="{{ '/computer-science/handouts/chapter-handouts/' | relative_url }}">Chapter handouts</a> · <a href="{{ '/computer-science/exam-overview/' | relative_url }}">Exam overview</a> · <a href="{{ '/computer-science/handouts/' | relative_url }}">All Computer Science handouts</a></p>
