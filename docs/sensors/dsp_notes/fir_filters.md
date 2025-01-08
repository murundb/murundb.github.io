# Finite Impulse Response Filters

## Overview

Given a finite duration of nonzero input values, an FIR filter will always have a finite duration of nonzero output values. No previous filter output value is used to determine a current output value; only input values are used to calculate output values.

## Designing FIR Filters

Define $H(m)$ over the frequency span $-f_s / 2$ to $f_s / 2$.

| | Algebraic | |
| - | - | - |
| Coefficient Determination | <ol><li>Develop an expression for the discrete frequency response $H(m)$</li><li>Apply that expression to the inverse DFT equation to get the time domain $h(k)$, where $k$ is the time-domain index</li><li>Evaluate that $h(k)$ expression as a function of time index $k$</li></ol> |
| Inverse DFT | $\begin{align*}h(k) &= \frac{1}{N} \sum^{N / 2}_{m = -(N / 2) + 1} H(m) \exp \left\{j 2 \pi m k / N \right\} \\ &= \frac{1}{N} \frac{\sin\left( \pi k K / N \right)}{\sin \left(\pi k / N \right)}\end{align*}$ 