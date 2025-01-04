# DFT

## Overview

DFT extracts the frequency contents (frequencies and their phase relationships) of any discrete sequence regardless of what the sequence actually represents. Given a discrete signal $x(n)$ with $N$ samples, DFT determines the spectral content of the input at $N$ equally spaced frequency points, $X(m)$, where $m$ is the frequency term (miltiples of the fundamental frequency). Quick changes in time domain result in many frequencies occurring.

| | DFT Equation | Property |
| - | - | - |
| Exponential Form | $X(m) = \sum^{N - 1}_{n = 0} x(n) \exp\left\{ -j2\pi nm / N \right\}$ |
| Rectangular Form | $X(m) = \sum^{N - 1}_{n = 0} x(n) \left[ \cos \left( 2\pi nm / N \right) - j \sin \left( 2\pi nm / N \right) \right]$ |
| Analysis Frequencies | $f(m) = \frac{m f_s}{N}$ |
| Magnitude | $\|X(m)\| = \sqrt{\text{Re}\left\{ X(m) \right\}^2 + \text{Im}\left\{ X(m) \right\}^2}$ |
| Phase | $\angle X(m) = \tan^{-1} \frac{\text{Im}\left\{ X(m) \right\}}{\text{Re}\left\{ X(m) \right\}}$ |

## Conjugate Symmetry

When the input sequence $x(n)$ is real, the complex DFT outputs for $m = 1$ to $m = (N / 2) - 1$ are redundant with frequency output values for $m > (N / 2)$. The $m$'th DFT output will have the same magnitude as the $(N - m)$'th DFT output. The $m$'th and $(N-m)$'th outputs are related by:

$$
\begin{align*}
&X(m) = |X(m)| \angle X(m) = |X(N - m)| \angle - X(N- m), \ \text{for} \ 1 \leq m \leq (N / 2) - 1 \\
&X(m) = X^* (N - m).
\end{align*}
$$

Hence, for $N$-point DFT on a real input sequence, only the first $N / 2 + 1$ terms are independent.
