# Sampling Theorem

## Proper Sampling

To describe a full revolution around a unit circle for the fastest sinusoid with a positive frequency ($w = \pi$), it requires two samples. If the system clock is $t_s$ ($f_s = 1 / t_s$), to sample the real-world fastest sinusoid, the overall period required is $2 t_s$ or $f_s / 2$ frequency. Hence, the highest frequency spectral content that can be captured is $f_s / 2$ which corresponds to the analysis frequency $k = N / 2$ where $N$ is the number of samples. This gives the basis for the Nyquist sampling theorem.

The **Nyquist sampling criterion** indicates that a continuous signal can be properly sampled, only if it does not contain **frequency components above one-half of the sampling rate** (the Nyquist frequency, the folding frequency, or the cutoff frequency). In order words, given a band-limited signal with band $\pm B$, $f_s$ must be greater than $2B$ to separate spectral replications at the folding frequencies of $\pm f_s / 2$.

In most systems, the frequency band between about 0.4 and 0.5 of the sampling frequency is an ususable wasteland of filter roll-off and aliased signals. This is a direct result of the limitations of analog filters.

## Sample Rate Conversion

Changing the sample rate of a digital signal can be done via decimation (reduction in sample rate) and interpolation (increase in sample rate). A common interpolation scheme is via zero-insertion followed by a lowpass filter.

## Aliasing and Spectral Replica

Aliasing gets introduced when we do improper sampling. Consider a continuous sinusoidal signal $x(t) = \sin \left( 2 \pi f t \right)$. Sampling at $f_s = 1 / t_s$ yields to a discrete samples:

$$
\begin{align}
x(n) &= \sin(2 \pi f n t_s) \\
&= \sin(2 \pi f n t_s + 2 \pi m) \\
&= \sin \left( 2\pi \left(f + \frac{m}{nt_s} \right) nt_s \right).
\end{align}
$$

Let $m$ be an integer multiple of $n$, i.e., $m = kn$. Then we have:

$$
x(n) = \sin\left( 2 \pi \left( f + k f_s \right) n t_s \right).
$$

This equation means that when the sampling rate is $f_s$, we cannot distinguish between the sampled values of a sinewave of frequency $f$, and a sinewave of $f + k f_s$ for $k \in \mathbb{Z}$. The spectrum of any discrete series of sampled values contains periodic replications of the original continuous spectrum. The period between these replicated spectra in the frequency domain will always be $f_s$. Every sampling operation inherently results in spectral replications.

## Bandpass Sampling

Bandpass sampling (IF sampling or undersampling) is a technique where we can sample a bandpass-filtered signal at a sample rate below its Nyquist frequency without introducing aliasing. In bandpass sampling, we are more concerned with the signal's bandwidth than its highest frequency component. 

Consider a continuous bandpass signal with bandiwth $B$ and carrier frequency $f_c$ (center frequency). Given an arbitrary number of replications, $m$, to avoid aliasing, we can choose $f_s$ as:

$$
\frac{2f_c - B}{m} \geq f_s \geq \frac{2f_c + B}{m + 1}, \quad f_s \geq 2B.
$$

The upper limit is because if we increase the sampling rate $f_s$, the original spectra do not shift, but all the replications will shift, causing them to overlap and introduce aliasing.

## Function Approximation

Under appropriate "slowness" conditions for a continuous signal $x(t)$, we have:

$$
x(t) = \sum^{\infty}_{n = -\infty} x(n t_s) \text{sinc} \left( \frac{t - nt_s}{t_s} \right),
$$

where $t_s$ is the sampling interval.