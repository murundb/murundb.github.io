## Means

The three averages - arithmetic, geometric, and harmonic - are known as Pythogorean means.

### Arithmetic Mean

The arithmetic mean is computed as:

$$
\bar{X} = \frac{X_1 + \ldots + X_N}{n} = \frac{1}{n} \sum^n_{i = 1} X_i.
$$

### Geometric Mean

The geometric mean is computed as:

$$
\sqrt[n]{X_1 \times X_2 \times \ldots \times X_N} = \left( \prod^n_{i = 1} X_i \right)^{1 / n}.
$$

### Harmonic Mean

The haromnic Mean is computed as:

$$
\frac{n}{1 / X_1 + \ldots 1 / X_n} = \frac{n}{\sum^n_{i = 1} 1 / X_i}.
$$

## Median

The median is the middle of the sample sorted in numerical order. In terms of the order statistics, the median is defined as:

$$
Me =
\begin{cases}
X_{((n + 1) / 2)}, \quad &\text{if $n$ is odd}, \\
\left( X_{(n / 2)} + X_{(n / 2 + 1)}  \right) /2, \quad &\text{if $n$ is even}.
\end{cases}
$$

## Mode

The most frequent observation in the sample (if such exists) is the **mode** of the sample. If the sample is composite, the observation $x_i$ corresponding to the largest frequency $f_i$ is the mode. Mode may not be unique. If there are two modes, the sample is bimodal, three modes make it trimodal, etc.

## Trimmed Mean

The mean is a location measure sensitive to extreme observations and possible outliers. To make this measure more robust, one may trim $\alpha \cdot 100%$ of the data symmetrically from both sides of the ordered sample. 

## Winsorized Mean

A robust location measure that preserves sample size is the winsorized mean. Similar to trimmed mean, a winsorized mean identifies outlying observations, but instead of being excluded, these outlying observations are replaced by either the minimum or maximum of the trimmed sample, depending on whether the trimming was done from below or average.