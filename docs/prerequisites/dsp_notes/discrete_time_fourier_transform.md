# Discrete-Time Fourier Transform

## Overview

Discrete-Time Fourier Transform is an extension of DFT for infinite length non-periodic signals. Intuitively, as $N \rightarrow \infty$, the analysis frequencies $(2 \pi / N) k$ becomes denser in $\left[0, 2\pi\right]$, i.e., $w \in \mathbb{R}$. Hence, DTFT is continuous in the frequency domain whereas DFT is discrete in the frequency domain. Formally, DTFT is a change of basis in the space $\mathbb{C}^{\infty}$, where the uncountable set of functions $e^{jwn}$, $w \in \mathbb{R}$ forms an orthogonal basis.

While DTFT is defined to process an infinitely long signal, DFT is defined to process a periodic signal (the periodic part being of finite length). For DFT, the number of frequency bins in your spectrum is always equal to the number or samples processed, so this also gives a difference in spectrums they produce. Whilst DFT is suitable for signal processing, the fact that the input signal is supposed to be an excerpt of a periodic signal however is disregarded most of the time. Hence, the spectrum from DFT **is not the actual spectrum of your signal**. It is the spectrum of a theoretical signal that you would get if you periodically repeated the input vector ([reference](https://dsp.stackexchange.com/questions/10541/when-to-use-the-dtft-vs-the-dft-and-their-inverses-in-analysis)).

## Discrete-Time Fourier Transform Algorithm

Let the input signal be square summable (finite-energy), i.e., $x(n) \in \ell_2(\mathbb{Z})$. Define the function of $w \in \mathbb{R}$:

$$
\begin{align}
F(w) = \sum^{\infty}_{n = -\infty} x(n) \exp \left\{-jwn \right\}.
\end{align}
$$

The inverse transform is (when $F(w)$ exists):

$$
\begin{align}
x(n) = \frac{1}{2\pi} \int^{\pi}_{-\pi} F(w) \exp \left\{j w n \right\} dw, \quad n \in \mathbb{Z}.
\end{align}
$$

The DTFT, as an operator, maps an infinite-length sequence $x(n)$ to a function of real variable $w$; by definition, the resulting function is $2 \pi$-periodic in $w$, and therefere the notation $X(e^{jw})$ is used to highlight this property:

$$
X(e^{jw}) = \sum^{\infty}_{n = -\infty} x(n) \exp\left\{ -jwn \right\}.
$$

## Properties

| Property | Definition |
| - | - |
| Linearity | $\text{DTFT}\left\{\alpha x(n) + \beta y(n) \right\} = \alpha X(e^{jw}) + \beta Y(e^{jw})$ |
| Time Shift | $\text{DTFT}\left\{ x(n - M) \right\} = e^{-jwM} X(e^{jw})$ |
| Modulation | $\text{DTFT}\left\{ e^{jw_0 n} x(n) \right\} = X(e^{j(w - w_0)})$ |
| Time Reversal | $\text{DTFT}\left\{ x(-n) \right\} = X(e^{-jw})$ |
| Conjugation | $\text{DTFT}\left\{ x^* (n) \right\} = X^* (e^{-jw})$ |

## Interpreting DTFT Spectrum

1. By convention, $X(e^{jw})$ is represented over $\left[-\pi, \pi \right]$.
2. Positive frequencies between $0$ and $\pi$ are associated to counterclockwise rotations of the underlying complex exponentials; conversely, frequencies between $-\pi$ and $0$ are associated to clockwise rotations.
3. Low frequencies (slow) will be centered around $0$ and the high frequencies (fast) will be closer to $\pm\pi$.
4. The period is $2\pi$.
