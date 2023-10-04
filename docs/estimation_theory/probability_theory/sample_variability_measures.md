# Sample Variability Measures

## Sample Variance and Sample Standard Deviation

Sample variance is defined as:

$$
\begin{align}
s^2 &= \frac{1}{n - 1} \sum^n_{i = 1} \left(X_i - \bar{X} \right)^2 \\ 
&= \frac{1}{n - 1} \left(\sum^n_{i = 1}\left(X^2_i \right) - n \left(\bar{X} \right)^2 \right).
\end{align}
$$

Note that we use $\frac{1}{n - 1}$ instead of $\frac{1}{n}$ because it is an unbiased estimator.

The sample standard deviation is defined as:

$$
s = \sqrt{\frac{1}{n - 1} \sum^n_{i = 1} \left(X_i - \bar{X} \right)^2}.
$$

When a new observation is obtained, one can update the sample variance without having to recalculate it. If $\bar{x}_n$ and $s^2_n$ are the sample mean and variance based on $x_1, x_2, \ldots, x_n$ and a new observation $x_{n + 1}$ is obtained, then:

$$
s^2_{n + 1} = \frac{(n - 1)s^2_n + (x_{n + 1} - \bar{x}_n)(x_{n + 1} - \bar{x}_{n + 1})}{n},
$$

where $\bar{x}_{n + 1} = (n \bar{x}_n + x_{n + 1}) / (n + 1)$.

## Sample Quantiles/Percentiles

Sample quantiles (in units between 0 and 1) or sample percentiles (in units between 0 and 100) are important summaries that reveal both the location and the spread of a sample. For example, we may be interested in a point $x_p$ that partitions the ordered sample into two parts, one with $p \cdot 100\%$ of observations smaller than $x_p$ and another with $(1 - p) 100\%$ observations greater than $x_p$. The median of the sample is the 50th percentile. 

Quartiles divide an ordered sample into four parts; the 25th percentile is known as the first quartile, $Q_1$, and the 75th percentile is known as the third quartiles, $Q_3$.

## Sample Range and IQR

The range $R$ is the maximum minus the minimum of the sample, i.e., $R = X_{(n)} - X_{(1)}$.

The interquartile range (IQR) is $Q_3 - Q_1$.

## z-Scores

For a sample $x_1, x_2, \ldots, x_n$ the $z$-score is the standardized sample $z_1, z_2, \ldots, z_n$, where $z_i = \left( x_i - \bar{x} \right) / s$. In the standardized sample, the mean is 0 and the sample variance (and standard deviation) is 1. The basic reason why standardization may be needed is to assess extreme values, or compare samples taken at different scales.

## Moments of Higher Order

If the observations are interpreted as unit masses at positions $X_1, \ldots, X_n$, then the sample mean is the first moment in the mechanical sense - it represents the balance point for the system of all points. The $k$'th moment is defined as:

$$
m_k = \frac{1}{n} \left(X^k_1 + \ldots + X^k_n \right) = \frac{1}{n} \sum^n_{i = 1} X^k_i.
$$

The moments $m_k$ are sometimes called raw sample moments. The power $k$ mean is $\left( m_k \right)^{1 / k}$, that is:

$$
\left( \frac{1}{n} \sum^n_{i = 1} X^k_i \right)^{1 / k}.
$$

The **central** moments of order $k$ is defined as:

$$
\mu_k = \frac{1}{n} \sum^n_{i = 1} \left( X_i - m_1 \right)^k.
$$

Notice that the sample mean is the first moment and $\mu_1 = 0$, $\mu_2$ is the sample variance.

## Skewness and Kurtosis

Skewness is defined as:

$$
\gamma_n = \mu_3 / \mu_2^{3 / 2},
$$

and measures the degree of asymmetry in a sample distribution. Positively skewed distributions have longer right tails, and their sample mean is larger than the median. Negatively skewed sample distributions have longer left tails, and their mean is smaller than the median.

Kurtosis is defined as:

$$
\kappa_n = \mu_4 / \mu^2_2,
$$

and represents the measure of "peakedness" or flatness of a sample distribution.

## Coefficient of Variation

The coefficient of variation, CV, is the ratio:

$$
\text{CV} = \frac{s}{\bar{X}}.
$$

The CV expresses the variability of a sample in the units of its mean. In other words, a CV equal to 2 would mean that the standard deviation is equal to 2$\bar{X}$. 

The reciprocal of CV, $\bar{X} / s$, is called the **signal-to-noise** ratio.

## Diversity Indices for Categorical Data

If the data are categorical and numerical characteristics such as moments and percentiles cannot be defined but the frequencies $f_i$ of classes/categories are given, one can define **Shannon**'s diversity index:

$$
H = \frac{n \log n - \sum^k_{i = 1} f_i \log f_i}{n},
$$

where $n$ is the total sample size and $k$ is the number of categories.

## Sturges' Rule

There are several ruleso n how to automaticall determine the number of histogram plot bins or, equivalently, bin sizes, non of them superior to the others on all possible data sets. THe number of bins $k$ can be computed via Sturges' rule:

$$
k = 1 + \log_2 n,
$$

where $n$ is the size of the samples. Sturges' rule was intended for bell shaped distributions of data and may oversmooth data that are skewed, multimodal, or have some other features.
