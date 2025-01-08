# Discrete Fourier Transform

## Overview

DFT extracts the frequency contents (frequencies and their phase relationships) of any discrete sequence regardless of what the sequence actually represents. Given a discrete signal $x(n)$ with $N$ samples, DFT determines the spectral content of the input at $N$ equally spaced frequency points, $X(m)$, where $m$ is the multiples of the fundamental frequency. Quick changes in time domain result in many frequencies occurring (i.e., sudden transitions in a time sequence represent high-frequency components).

|  | Continuous FT | $N$-Point Discrete FT |
| - | - | - |
| Fourier Transform | $X(f) = \int^{\infty}_{-\infty} x(t) \exp \left\{ -j 2 \pi f t \right\} dt$ | $\begin{align*} X(m) &= \sum^{N - 1}_{n = 0} x(n) \exp\left\{ -j2\pi nm / N \right\} \\ X(m) &= \sum^{N - 1}_{n = 0} x(n) \left[ \cos \left( 2\pi nm / N \right) - j \sin \left( 2\pi nm / N \right) \right] \end{align*}$ |
| Inverse Transform | $x(t) = \frac{1}{2 \pi} \int X(f) \exp \left\{j 2 \pi f t \right\}df$ | $\begin{align*}x(n) &= \frac{1}{N} \sum^{N - 1}_{m = 0} X(m) \exp\left\{ j 2 \pi m n / N \right\} \\ x(n) &= \frac{1}{N}\sum^{N - 1}_{m = 0} X(m) \left[ \cos \left(2 \pi m n / N \right) + j \sin \left( 2 \pi m n / N \right)\right]\end{align*}$ |

The exact frequencies of the different sinusoids depend on both the sampling rate $f_s$ at which the original signal was sampled, and the number of samples $N$. For example, if we are sampling a continuous signal at a rate of $500$Hz and perform a 16-point DFT on the sampled data, the fundamental frequency of the sinusoids is $31.25$Hz. The $N$ separate DFT analysis frequencies are:

$$
f_{\text{analysis}} (m) = \frac{m f_s}{N}.
$$

The DFT's frequency spacing (resolution) is $f_s / N$. Note that analytical frequencies always have an integral number of cycles over our total sample interval.

## Useful Properties

| Property | Definition |
| - | - |
| Conjugate Symmetry | When the input sequence $x(n)$ is real, the complex DFT outputs for $m = 1$ to $m = (N / 2) - 1$ are redundant with frequency output values for $m > (N / 2)$. The $m$'th DFT output will have the same magnitude as the $(N - m)$'th DFT output. The $m$'th and $(N-m)$'th outputs are related by: $\begin{align*} &X(m) = \|X(m)\| \angle X(m) = \|X(N - m)\| \angle - X(N- m), \ \text{for} \ 1 \leq m \leq (N / 2) - 1 \\ &X(m) = X^* (N - m). \end{align*}$ Hence, for $N$-point DFT on a real input sequence, only the first $N / 2 + 1$ terms are independent. |
| Magnitude | Given DFT transformation on an input signal with frequency $f < f_s / 2$ peak amplitude $A_0$ with an integral number of cycles over $N$ input samples, the output amplitude for that particular sinewave ($M_r$) is: $\begin{align*} &M_r = A_0 N / 2 \\  &\|X(m)\| = \sqrt{\text{Re}\left\{ X(m) \right\}^2 + \text{Im}\left\{ X(m) \right\}^2} \end{align*}$ |
| Phase | $\angle X(m) = \tan^{-1} \frac{\text{Im}\left\{ X(m) \right\}}{\text{Re}\left\{ X(m) \right\}}$ |

## Time-Frequency Properties

| Property/Operation | Time Function | Fourier Transform |
| - | - | - |
| Linearity | $k_1 x(n) + k_2 y(n)$ | $k_1 X(m) + k_2 Y(m)$ |
| Shift Theorem | $x(n - k)$ | $X(m) \exp\left\{ -j2 \pi km / N \right\}$, where the input is shifted to the left by $k$ samples|

## DFT Leakage

To reduce sidelobes and DFT leakage, a windowing function, $w(n)$, needs to be applied:

$$
X_w (m) = \sum^{N - 1}_{n = 0} w(n) x(n) \exp \left\{ -j 2 \pi n m / N \right\}.
$$

The benchmark windowing function is a rectangular window, i.e., $w(n) = 1$, for $n = 0, 1, \ldots, N - 1$. The continuous Fourier transform of the rectangular window function is $X(m) = \frac{A_0 N}{2} \frac{\sin \left( \pi (k - m) \right)}{\pi(k - m)}$, where $A_0$ is the peak amplitude and $k$ is the input cycles which is not required to be an integer.

| Window Function Name | Function |
| - | - |
| Rectangular Window | $w(n) = 1$, for $n = 0, 1, 2, \ldots, N - 1$ |
| Hanning Window | $w(n) = 0.5 - 0.5 \cos \left( 2 \pi n / N \right)$, for $n = 0, 1, 2, \ldots, N - 1$ |
| Hamming Window | $w(n) = 0.54 - 0.46 \cos \left( 2 \pi n / N \right)$, for $n = 0, 1, 2, \ldots, N - 1$ |

Window selection is a trade-off between main lobe widening, first sidelobe levels, and how fast the sidelobes decrease with increased frequency.