# Discrete Fourier Transform

## Leakage

The DFT's frequency spacing (resolution) is $f_s / N$ and the analytical frequencies always have an integral number of cycles over our total sample interval. In practice, the input signal's frequencies will not be integral number of cycles of the DFT's fundamental frequency. Consider DFT of a length-$M$ step ($1$ for $n = 0$ to $M - 1$, and zero otherwise) in $\mathbb{C}^N$:

$$
x(n) = \sum^{M - 1}_{h = 0}\delta(n - h), \quad n = 0, 1, \ldots, N - 1.
$$

Computing the DFT:

$$
\begin{align*}
X(m) &= \sum^{N - 1}_{n = 0} x(n) \exp \left\{ -j 2 \pi n m / N \right\} = \sum^{M - 1}_{n = 0} \exp \left\{- j 2 \pi n m / N \right\} \\
&= \frac{1 - \exp \left\{ -j 2 \pi m M / N\right\}}{1 - \exp \left\{ -j 2 \pi m / N \right\}} \\
&= \frac{\exp \left\{- j \pi m M / N \right\} \left[\exp \left\{ j \pi m M / N \right\} - \exp \left\{ - j \pi m M / N \right\} \right]}{\exp\left\{-j \pi m / N \right\} \left[ \exp\left\{j \pi m / N \right\} - \exp\left\{-j \pi m / N \right\} \right]} \\
&= \frac{\sin\left(\pi m M / N \right)}{\sin \left(\pi m / N \right)} \exp \left\{-j \pi (M - 1)m / N \right\}
\end{align*}
$$

Note that:

1. $X(0) = M$, from the definition of the sum
2. $X(m) = 0$ if $M m / N$ is an integer ($0 \leq m \leq N$)
3. $\angle X(m)$ linear in $m$ (except at sign changes for the part)

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
