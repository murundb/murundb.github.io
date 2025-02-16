# Modulation

## Definition

Modulation is a method to shift the spectral content of a signal in frequency. Sinusoidal modulation:

$$
\begin{align}
\text{DTFT}\left\{ x(n) \cos \left( w_c n \right) \right\} &= \text{DTFT} \left\{\frac{1}{2} e^{jw_c n} x(n) + \frac{1}{2} e^{-jw_c n} x(n) \right\} \\
&= \frac{1}{2} \left[ X(e^{j(w - w_c)}) + X(e^{j(w + w_c)}) \right].
\end{align}
$$

Usually $x(n)$ is baseband and $w_c$ is called the carrier frequency.

## Demodulation

Just multiply the received signal by the carrier again

$$
\begin{align}
y(n) = x(n) \cos(w_c n) \quad Y(e^{jw}) = \frac{1}{2} \left[ X(e^{j(w - w_c)}) + X(e^{j(w + w_c)}) \right].
\end{align}
$$

Then:

$$
\begin{align}
\text{DTFT} \left\{ y(n) * 2 \cos(w_c n) \right\} &= Y(e^{j(w - w_c) + Y(e^{j(w + w_c)})}) \\
&= \frac{1}{2}\left[X(e^{j(w - 2w_c)}) + X(e^{j(w)}) + X(e^{j(w)}) + X(e^{j(w + 2w_c)}) \right] \\
&= X(e^{j(w)}) + \frac{1}{2} \left[ X(e^{j(w - w_c)}) + X(e^{j(w + w_c)}) \right].
\end{align}
$$
