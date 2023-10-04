# Weibull Distribution

## Definition

The density of two-parameter Weibull random variables $X \sim \mathcal{Wei}(r, \lambda)$ is given as:

$$
f_X(x) = \lambda r x^{r - 1} e^{-\lambda x^r}, \quad x > 0.
$$

The CDF is:

$$
F_X(x) = 1 - \exp \left\{ -\lambda x^r \right\}.
$$

Parameter $r > 0$ is the shape parameter, while $\lambda > 0$ is the rate parameter.

## Mean and Variance

The mean of Weibull random variable $X$ is $\mathbb{E}X = \frac{\Gamma(1 + 1 / r)}{\lambda^{1 / r}} = a \Gamma \left(1 + \frac{1}{r} \right)$, and the variance is $\mathbb{V}\text{ar} = \frac{\Gamma(1 + 2 / r) - \Gamma^2(1 + 1 / r)}{\lambda^{2 / r}} = a^2 \left(\Gamma \left(1 + 2/r \right) - \Gamma^2 \left(1 + 1 / r \right) \right)$, where $a$ is the scale parameter and relates to $\lambda$ as $\lambda = a^{-r}$.

The $k$'th moment is:

$$
\mathbb{E}X^k = \frac{\Gamma(1 + k / r)}{\lambda^{k / r}} = a^k \Gamma(1 + k / r).
$$
