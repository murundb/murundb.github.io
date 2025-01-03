# Sampling

## Aliasing

Given a continuous sinusoidal signal $x(t) = \sin \left( 2 \pi f_0 t \right)$, if we sample at a rate of $t_s = 1 / f_s$, we have:

$$
x(n) = \sin \left( 2 \pi f_0 n t_s \right) = \sin(2\pi \left( f_0 + \frac{k}{t_s} \right) n t_s) = \sin(2 \pi \left( f_0 + k f_s \right) n t_s).
$$

In order words, when sampling at a rate of $f_s$ Hz, we cannot distinguish between the sampled values of a sinewave of $f_0$ Hz and a sinvewave of $f_0 + k f_s$ Hz for $k \in \mathbb{Z}$.

## Proper Sampling

Aliasing gets introduced when we do improper sampling. The Nyquist sampling theorem indicates that a continuous signal can be properly sampled, only if it does not contain **frequency components above one-half of the sampling rate** (the Nyquist frequency). In order words, given a band-limited signal with band $\pm B$, $f_s$ must be greater than $2B$ to separate spectral replications at the folding frequencies of $\pm f_s / 2$.


In most systems, the frequency band between about 0.4 and 0.5 of the sampling frequency is an ususable wasteland of filter roll-off and aliased signals. This is a direct result of the limitations of analog filters.

Examples:

1. A sampling rate of 2000 samples per second requires the analog signal to be composed of frequencies below 1000 cycles/second. If frequencies above this limit are present in the signal, they will be aliased to frequencies between 0 and 1000 cycles/second, combining with whatever information that was legitimately there.
2. Sine wave has a frequency of 0.09 of the sampling rate. This might represent, for example, a 90 cycle/second sine wave being sampled at 1000 samples/second. There are 11.1 samples taken over each complete cycle of the sinusoid. This is proper sampling.
3. Sine wave has a frequency to 0.31 of the sampling rate. This results in only 3.2 per sine wave cycle. This is proper sampling.
4. 0.95 of the samping rate, with a mere 1.05 samples per sine wave cycle. This is improper sampling and introduces aliasing.
