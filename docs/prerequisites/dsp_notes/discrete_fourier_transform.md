# Discrete Fourier Transform

## Overview

Discrete Fourier Transform (DFT) extracts the frequency contents (frequencies and their phase relationships) of any discrete sequence regardless of what the sequence represents. Consider a continuous sinusoidal signal $x(t)$. Sampling at $f_s$ over $N$ samples yields to a discrete signal $x(n) \in \mathbb{C}^N$, where $n = 0, 1, \ldots, N - 1$ is the sampling index. DFT determines the spectral content of the input $x(n)$ at $N$ equally spaced $k = 0, 1, \ldots, N - 1$ frequency points.

The fundamental frequency is $w = \frac{2 \pi }{ N}$ or equivalently $f = \frac{f_s}{ N}$. All other analysis frequencies will be multiples of the fundamental frequency, i.e., $f_k = \frac{k f_s}{N}$.

## Fourier Basis

The $k$'th frequency basis is defined as $w_k (n) \triangleq w^{(k)}_n = \exp \left\{ j \frac{2 \pi}{N} n k \right\}$ for $k, n = 0, 1, \ldots, N - 1$. Note that this is a complex exponential series at frequencies $w = \frac{2\pi}{N}k$ with $k = 0, 1, \ldots, N - 1$. As $k$ increases, the fundamental frequency increases. The highest it can reach is at $w = \pi$ at $N / 2$.

The set of $N$ signals in $\mathbb{C}^N$, $\left\{\boldsymbol{\omega}^{(k)} \right\}_{k = 0, 1, \ldots, N - 1}$ is an orthogonal basis in $\mathbb{C}^N$ since:

$$
\begin{align*}
\langle \boldsymbol{\omega}^{(k)}, \boldsymbol{\omega}^{(h)} \rangle &= \sum^{N - 1}_{n = 0} \left( e^{j \frac{2 \pi}{N} nk} \right)^{*} e^{j \frac{2 \pi}{N} nh} \\
&= \sum^{N - 1}_{n = 0} e^{j \frac{2 \pi}{N} (h - k)n} \\
&=
\begin{cases}
N \quad &\text{iff} \ h = k \\
\frac{1 - e^{j 2 \pi (h - k)}}{1 - e^{j \frac{2 \pi}{N}(h - k)}} = 0 \quad &\text{otherwise}
\end{cases}
\end{align*}
$$

Note that the vectors are not orthonormal and requires a normalization factor of $\frac{1}{\sqrt{N}}$. The normalization factor should be explicit in DFT formulas.

## Discrete Fourier Transform Algorithm

A signal $\mathbf{x}$ can be expressed in Fourier basis as $X_k = \langle \boldsymbol{\omega}^{(k)}, \mathbf{x} \rangle$ which is the analysis formula, and the inverse process can be done as $\mathbf{x} = \frac{1}{N} \sum^{N - 1}_{k = 0} X_k \boldsymbol{w}^{(k)}$ which is the synthesis formula.

Let $W = \exp\left\{ -j \frac{2 \pi}{N} \right\}$. The change of basis matrix $\mathbf{W}$ with $\mathbf{W}(n, m) = W^{nm}_{N}$ is:

$$
\begin{align}
\mathbf{W} = 
\left[
\begin{array}{cccccc}
1 & 1 & 1 & 1 & \ldots & 1 \\
1 & W^1 & W^2 & W^3 & \ldots & W^{N - 1} \\
1 & W^2 & W^4 & W^6 & \ldots & W^{2(N - 1)} \\
\vdots & \vdots & \vdots & \vdots & \ddots & \vdots \\
1 & W^{N - 1} & W^{2 (N - 1)} & W^{3(N - 1)} & \ldots & W^{(N - 1)^2} \\
\end{array}
\right].
\end{align}
$$

Then we can write the analysis formula as $\mathbf{X} = \mathbf{W} \mathbf{x}$ and the synthesis formula as: $\mathbf{x} = \frac{1}{N} \mathbf{W}^H \mathbf{X}$.

Explicitly writing the analysis and synthesis formula yields to the following table:

| Formula | Continuous FT | $N$-Point Discrete FT |
| - | - | - |
| Analysis | $X(f) = \int^{\infty}_{-\infty} x(t) \exp \left\{ -j 2 \pi f t \right\} dt$ | $\begin{align*} X(k) &= \sum^{N - 1}_{n = 0} x(n) \exp\left\{ -j \frac{2 \pi}{N} nk \right\}, \ k = 0, 1, \ldots, N - 1\end{align*}$ |
| Synthesis | $x(t) = \frac{1}{2 \pi} \int X(f) \exp \left\{j 2 \pi f t \right\}df$ | $\begin{align*}x(n) &= \frac{1}{N} \sum^{N - 1}_{m = 0} X(k) \exp\left\{ j \frac{2 \pi}{N} nk \right\}, \ n = 0, 1, \ldots, N - 1 \end{align*}$ |

The exact frequencies of the different sinusoids depend on both the sampling rate $f_s$ at which the original signal was sampled, and the number of samples $N$. For example, if we are sampling a continuous signal at a rate of $500$Hz and perform a 16-point DFT on the sampled data, the fundamental frequency of the sinusoids is $31.25$Hz.

## Properties

| Property | Definition |
| - | - |
| Conjugate Symmetry | When the input sequence $x(n)$ is real, the complex DFT outputs for $k = 1$ to $k = \lfloor N / 2 \rfloor$ are redundant with frequency output values for $k > \lceil N / 2 \rceil$. The $k$'th and $(N - k)$'th outputs are related by: <br> $\begin{align*} &X(k) = \|X(k)\| \angle X(k) = \|X(N - k)\| \angle - X(N - k), \ \text{for} \ 1 \leq k \leq \lfloor N / 2 \rfloor \\ &X(k) = X^* (N - k). \end{align*}$. <br> Hence, for $N$-point DFT on a real input sequence, only the first $N / 2 + 1$ terms are independent. |
| Magnitude | Given DFT transformation on an input signal with frequency $f < f_s / 2$ peak amplitude $A_0$ with an integral number of cycles over $N$ input samples, the output amplitude for that particular sinewave ($M_r$) is: $\begin{align*} &M_r = A_0 N / 2 \\  &\|X(k)\| = \sqrt{\text{Re}\left\{ X(k) \right\}^2 + \text{Im}\left\{ X(k) \right\}^2} \end{align*}$ |
| Phase | $\angle X(k) = \tan^{-1} \frac{\text{Im}\left\{ X(k) \right\}}{\text{Re}\left\{ X(k) \right\}}$ |

## DFT of Length-M Step

Consider a length-$M$ step (non-zero only in $0$ to $M - 1$) in $\mathbb{C}^N$:

$$
x(n) = \sum^{M - 1}_{h = 0} \delta (n - h), \ n = 0, 1, \ldots, N - 1.
$$

Computing the DFT:

$$
\begin{align}
X(k) &= \sum^{N - 1}_{n = 0} x(n) \exp\left\{- j \frac{2 \pi}{N} nk \right\} = \sum^{M - 1}_{n = 0} \exp\left\{-j \frac{2\pi}{N} nk \right\} \\
&= \frac{1 - \exp\left\{ -j \frac{2\pi}{N} kM \right\}}{1 - \exp\left\{-j \frac{2\pi}{N} k \right\}} \\
& = \frac{\exp\left\{- j \frac{\pi}{N} kM \right\} \left[\exp\left\{j \frac{\pi}{N} k M \right\} - \exp\left\{-j \frac{\pi}{N} k M \right\} \right]}{\exp\left\{ -j \frac{\pi}{N} k \right\} \left[ \exp\left\{ j \frac{\pi}{N}k \right\} - \exp\left\{ -j \frac{\pi}{N} k \right\} \right]} \\
&= \frac{\sin\left( \frac{\pi}{N} M k \right)}{\sin\left( \frac{\pi}{N} k \right)} \underbrace{\exp \left\{ -j \frac{\pi}{N} \left(M - 1 \right) k \right\}}_{\text{phase term}}
\end{align}
$$

## Short-Time Fourier Transform Algorithm

Time representation obfuscates frequency and frequency representation obfuscates time. For a time-varying frequencies, it's better to plot spectrogram.

The idea behind STFT is to take small signal pieces of length $L$ and look at the DFT of each piece:

$$
X(m; k) = \sum^{L - 1}_{n = 0} x(m + n) \exp\left\{- j \frac{2 \pi}{L} n k \right\},
$$

where $m$ is the starting point for the localized DFT and $k$ is the DFT index for that chunk. Given sampling rate $f_s$, the highest positive frequency available will be $f_s / 2$. The frequency resolution will be $f_s / L$ and the width of the time slices will be $L t_s = L / f_s$.

## Interpreting DFT Spectrum

For real signals, magnitutde plots need only $\lfloor N / 2 \rfloor + 1$ frequencies. The vertical axis is the mantitude $|X(k)|$ and the horizontal axis is the analysis frequencies.

1. Frequency cofficients, $k$ are from $0$ to $N - 1$.
2. The first $N / 2$ coefficients correspond to frequencies less than $\pi$ (counterclockwise rotation).
3. The second $N / 2$ coefficients correspond to frequencies greater than $\pi$ (clockwise rotation).
4. Low frequency bands are close to $0$ and $N - 1$ (slow rotation around the unit circle either counterclockwise or clockwise).
5. High frequency band is centered around $N / 2$.
6. Sudden transitions in a time sequence represents high-frequency components (as well as increase in frequency components).
7. Square magnitude of $k$-th DFT coefficient is proportional to signal's energy at frequency $w = \frac{2 \pi}{N} k$.
