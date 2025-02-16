# Complex Exponential

## Discrete-Time Oscillatory Heartbeat

The complex exponential describes in compact form an oscillatory behavior with a given frequency and an initial phase. A disrete-time oscillatory heartbeat with amplitude $A$, frequency $w$, and an initial phase $\phi$ can be described as:

$$
x(n) = A \exp \left\{ j(wn + \phi) \right\} = A \left[\cos\left(wn + \phi \right) + j \sin(wn + \phi) \right]
$$

## Complex Exponential Generating Machine

Rotation can be achieved by multiplication by a complex exponential to a point on a complex plane. This gives a basis to a complex exponential generating machine:

$$
\begin{align}
x(n) &= \exp\left\{j (wn  + \phi) \right\} \\ x(n + 1) &= \exp\left\{ j(w (n + 1) + \phi) \right\} = \exp \left\{j w \right\} x(n).
\end{align}
$$

In discrete time, not every sinusoid is periodic. The **complex exponential** $\exp \left\{ jwn \right\}$ is **periodic** in $n$ iff $w = \frac{M}{N} 2 \pi$, $M, N \in \mathbb{N}$, i.e., the frequency is a rational multiple of $2\pi$:

$$
\begin{align}
x(n) &= x(n + N) \\
\exp\left\{j (wn + \phi) \right\} &= \exp\left\{ j(w (n + N) + \phi) \right\} \\
\exp\left\{ jwn \right\} \exp\left\{j \phi \right\} &= \exp\left\{jwn \right\} \exp\left\{jwN \right\} \exp\left\{j \phi \right\} \\
\exp\left\{jwN \right\} &= 1 \\
wN &= 2 M \phi, \ M \in \mathbb{Z} \\
w &= \frac{M}{N} 2 \pi.
\end{align}
$$

## Aliasing

The natural property of a complex exponential is that it has $2\pi$ periodicity. In discrete time, it puts a limit on how fast we can go around the unit circle with the discrete time signal.
