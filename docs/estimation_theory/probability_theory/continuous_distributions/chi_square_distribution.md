# Chi-Square Distribution

## Definition

Let $Z_1, Z_2, \ldots, Z_n$ be $n$ independent standard normal (mean $0$, variance $1$) random variables.  Then the sum of squares $Z^2_1 + \cdots + Z^2_n$ is a chi-square distributed with $n$ degrees of freedom (DOF), $\chi^2_n$:

$$
\chi^2_n \sim Z^2_1 + Z^2_2 + \cdots + Z^2_n.
$$

The probability density function for a chi-square random variable with parameter $k$ (DOF) is:

$$
f_X(x) = \frac{(1 / 2)^{k / 2} x^{k / 2 - 1}}{\Gamma (k / 2)} e^{-x / 2}, \quad 0 \leq x \leq \infty.
$$

The chi-square distribution ($\chi^2$) is a special case of the gamma distribution with parameters $r = k / 2$ and $\lambda = 1 / 2$.

If $Z \sim \mathcal{N}(0, 1)$, then $Z^2 \sim \chi^2_1$, i.e., a chi-square random variable with one degree of freedom. Furthermore, if $U \sim \chi^2_m$ and $V \sim \chi^2_n$ are independent, then $U + V \sum \chi^2_{m + n}$.

From these results, if $X_1, \ldots, x_N \sim \mathbb{N}(\mu, \sigma^2)$ and $\bar{X}$ is the sample mean, then the **sample variance** $s^2 = \sum_i (X_i - \bar{X})^2 / (n - 1)$ is proportional to a chi-square random variable with $n - 1$ degrees of freedom:

$$
\begin{align}
\frac{(n - 1)s^2}{\sigma^2} &= \left(\frac{X_1 - \bar{X}}{\sigma} \right)^2 + \left(\frac{X_2 - \bar{X}}{\sigma} \right)^2 + \cdots \left(\frac{X_n - \bar{X}}{\sigma} \right)^2 \\
&= (Y_1 - \bar{Y})^2 + (Y_2 - \bar{Y})^2 + \cdot + (Y_n - \bar{Y})^2 \\
&\sim \chi^2_{n - 1},
\end{align}
$$

where $Y_i$ are independent normal $\mathcal{N}(\mu / \sigma, 1)$.

## Mean and Variance

Its mean and variance are $\mu = k$ and $\sigma^2 = 2k$, respectively.

## Related Distributions

The ratio of a standard normal $Z$ and the square root of an independent chi-square $\chi^2$ random variable normalized by its number of DOF, has a $t$-distribution with $n$ degrees of freedom, $t_n$:

$$
t_n \sim \frac{Z}{\sqrt{\frac{\chi^2_n}{n}}}.
$$

The ratio of two independent chi-squares normalized by their respective number of DOF is distributed as an $F$:

$$
F_{m, n} \sum \frac{\chi^2_m / m}{\chi^2_n / n}.
$$



