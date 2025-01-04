# Sampling

## Aliasing

Given a continuous sinusoidal signal $x(t) = \sin \left( 2 \pi f_0 t \right)$, the discretized signal can be written as:

$$
x(n) = \sin(2 \pi f_0 n t_s) = \sin \left( 2\pi f_0 n t_s + 2 \pi m \right) = \sin \left( 2 \pi \left( f_0 + \frac{m}{n t_s} \right)n t_s \right),
$$

where $t_s$ is the sampling interval. Let $m$ be an integer multiple of $n$, i.e., $m = kn$. Then we have:

$$
x(n) = \sin(2 \pi \left( f_0 + k f_s \right) n t_s).
$$

In order words, when sampling at a rate of $f_s$ Hz, we cannot distinguish between the sampled values of a sinewave of $f_0$ Hz and a sinewave of $f_0 + k f_s$ Hz for $k \in \mathbb{Z}$. The spectrum of any discrete series of samples values contains periodic replications of the original continuous spectrum. The period between these replicated spectra in the frequency domain will always be $f_s$. Aliasing gets introduced when we do improper sampling. Every sampling operation inherently results in spectral replications.

## Proper Sampling

The Nyquist sampling theorem indicates that a continuous signal can be properly sampled, only if it does not contain **frequency components above one-half of the sampling rate** (the Nyquist frequency, the folding frequency, or the cutoff frequency). In order words, given a band-limited signal with band $\pm B$, $f_s$ must be greater than $2B$ to separate spectral replications at the folding frequencies of $\pm f_s / 2$.


In most systems, the frequency band between about 0.4 and 0.5 of the sampling frequency is an ususable wasteland of filter roll-off and aliased signals. This is a direct result of the limitations of analog filters.

Examples:

1. A sampling rate of 2000 samples per second requires the analog signal to be composed of frequencies below 1000 cycles/second. If frequencies above this limit are present in the signal, they will be aliased to frequencies between 0 and 1000 cycles/second, combining with whatever information that was legitimately there.
2. Sine wave has a frequency of 0.09 of the sampling rate. This might represent, for example, a 90 cycle/second sine wave being sampled at 1000 samples/second. There are 11.1 samples taken over each complete cycle of the sinusoid. This is proper sampling.
3. Sine wave has a frequency to 0.31 of the sampling rate. This results in only 3.2 per sine wave cycle. This is proper sampling.
4. 0.95 of the samping rate, with a mere 1.05 samples per sine wave cycle. This is improper sampling and introduces aliasing.

## Bandpass Sampling

Bandpass sampling (IF sampling or undersampling) is a technique where we can sample a bandpass-filtered signal at a sample rate below its Nyquist frequency without introducing aliasing. In bandpass sampling, we are more concerned with the signal's bandwidth than its highest frequency component. 

Consider a continuous bandpass signal with bandiwth $B$ and carrier frequency $f_c$ (center frequency). Given an arbitrary number of replications, $m$, to avoid aliasing, we can choose $f_s$ as:

$$
\frac{2f_c - B}{m} \geq f_s \geq \frac{2f_c + B}{m + 1}, \quad f_s \geq 2B.
$$

The upper limit is because if we increase the sampling rate $f_s$, the original spectra do not shift, but all the replications will shift, causing them to overlap and introduce aliasing.