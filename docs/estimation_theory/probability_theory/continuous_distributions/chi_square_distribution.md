# Chi-Square Distribution

## Definition

!!! cnote "Consistency"
    Chi-square distribution is often used to check state estimators for "consistency", i.e., whether their actual errors are consistent with the variances calculated by the estimator.

Consider an $n$-dimensional Gaussian random vector $\mathbf{X}$ with mean $\bar{\mathbf{X}}$ and covariance $\mathbf{P}$. Then the (scalar) random variable defined by the quadratic form:

$$
\begin{align}
q &= (\mathbf{X} - \bar{\mathbf{X}})^{T} \mathbf{P}^{-1} (\mathbf{X} - \bar{\mathbf{X}}) \\
&=
\left[
\begin{array}{ccc}
X_1 - \bar{X_1} & \cdots & X_n - \bar{X_n}
\end{array}
\right]
\left[
\begin{array}{ccc}
\frac{1}{\sigma^2_1} & \cdots & 0 \\
\vdots & \ddots & \vdots \\
0 & \cdots & \frac{1}{\sigma^2_n}
\end{array}
\right]
\left[
\begin{array}{c}
X_1 - \bar{X_1} \\
\vdots \\
 X_n - \bar{X_n}
\end{array}
\right] \\
&= \frac{1}{\sigma^2_1} (X_1 - \bar{X_1})^2 + \cdots + \frac{1}{\sigma^2_n}(X_n - \bar{X_n})^2.
\end{align}
$$

Such a random variable is said to have a **chi-square distribution with $n$ degrees of freedom**.

If we transform the random variable vector $\mathbf{X}$ to $\mathbf{Z}$ with:

$$
\mathbf{Z} = \mathbf{P}^{-1/2} \left(\mathbf{X} - \bar{\mathbf{X}} \right),
$$

Then $\mathbf{Z}$ is a Gaussian with:

$$
\begin{align}
\mathbb{E}\mathbf{Z} &= \mathbf{0} \\
\mathbb{E} \mathbf{Z} \mathbf{Z}^T &= \mathbf{P}^{-1/2} \mathbb{E} \left[ (\mathbf{X} - \bar{\mathbf{X}}) (\mathbf{X} - \bar{\mathbf{X}})^T \right] \mathbf{P}^{-1/2} = \mathbf{P}^{-1/2} \mathbf{P} \mathbf{P}^{-1/2} = \mathbf{I}.
\end{align}
$$

Hence, $\mathbf{Z} \sim \mathcal{N}(0, 1)$ and $\mathbf{Z}$. Let $Z_1, Z_2, \ldots, Z_n$ be the vector components of $\mathbf{Z}$. Then the sum of squares $Z^2_1 + \cdots + Z^2_n$ is a chi-square distributed with $n$ degrees of freedom, $\chi^2_n$:

$$
\chi^2_n \sim Z^2_1 + Z^2_2 + \cdots + Z^2_n.
$$

## Probability Density Function

The probability density function for a chi-square random variable $X$ with parameter $n$ (DOF) is:

$$
f_X(x) = \frac{(1 / 2)^{n / 2} x^{n / 2 - 1}}{\Gamma (n / 2)} e^{-x / 2}, \quad 0 \leq x \leq \infty,
$$

where $\Gamma$ is the gama function with the following properties:

$$
\Gamma \left(\frac{1}{2} \right) = \sqrt{\pi}, \quad \Gamma(1) = 1, \quad \Gamma(m + 1) = m \Gamma(m).
$$

The chi-square distribution ($\chi^2$) is a special case of the gamma distribution with parameters $r = k / 2$ and $\lambda = 1 / 2$.

## Addition Rule

Given the independent random variables:

$$
\mathbf{X} \sim \chi^2_{n}, \quad \mathbf{Y} \sim \chi^2_{m},
$$

their sum $\mathbf{X} + \mathbf{Y}$ is a chi-square distribution with $k = n + m$ DOF. Symbolically:

$$
\chi^2_{n} + \chi^2_{m} = \chi^2_{n + m}.
$$

## Mean and Variance

The mean and variance of the $\chi^2_n$ random variable $\mathbf{X}$ is:

$$
\begin{align}
\mathbb{E} \mathbf{X} &= \mathbb{E} \left[ \sum^n_{i = 1} Z^2_i \right] = n \\
\mathbb{V}\text{ar} \mathbf{X} &= \mathbb{E} \left[ \sum^n_{i = 1} (Z^2_i - 1)^2 \right] \\
&= \sum^n_{i = 1} \mathbb{E} \left[(Z^2_i - 1)^2 \right] \\
&= \sum^n_{i = 1} \left( \mathbb{E}\left[Z^4_i \right] - 2 \mathbb{E}\left[Z^2_i \right] + 1 \right) \\
&= \sum^n_{i = 1} (3 - 2 + 1) = 2n.
\end{align}
$$

## Related Distributions

The ratio of a standard normal $Z$ and the square root of an independent chi-square $\chi^2$ random variable normalized by its number of DOF, has a $t$-distribution with $n$ degrees of freedom, $t_n$:

$$
t_n \sim \frac{Z}{\sqrt{\frac{\chi^2_n}{n}}}.
$$

The ratio of two independent chi-squares normalized by their respective number of DOF is distributed as an $F$:

$$
F_{m, n} \sum \frac{\chi^2_m / m}{\chi^2_n / n}.
$$



