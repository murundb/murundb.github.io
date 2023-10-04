# Moment-Matching Estimator

## Definition

They key idea is to match the theoretical descriptors, most often moments, with their empirical counterparts. The theoretical moments of a random variable $X$ with a density specified up to a parameter, $f(x | \theta)$, are functions of that parameter:

$$
\mathbb{E} X^k = h(\theta).
$$

For example, if the measurements have a distribution $\mathcal{Poi}(\lambda)$, the second moment $\mathbb{E} X^2$ is $\lambda + \lambda^2$, which is a function of $\lambda$. Here, $h(x) = x + x^2$.

Suppose a sample $X_1, X_2, \ldots, X_n$ was obtained from $f(x | \theta)$. The empirical counterpars for theoretical moments $\mathbb{E}X^k$ are sample moments:

$$
\bar{X^k} = \frac{1}{n}\sum^n_{i = 1} X^k_i.
$$

By matching the theoretical and empirical moments, an estimator $\hat{\theta}$ is found as a solution of the equation:

$$
\bar{X^k} = h(\theta).
$$

## Example

### Exponential Distribution

For the exponential distribution $\text{Exp}(\lambda)$, the first theoretical moment is the mean, i.e., $\mathbb{E} X = 1 / \lambda$. An estimator for rate parameter $\lambda$ is obtained by solving the moment-matching equation $\bar{X} = 1 / \lambda$, resulting in $\hat{\lambda}_{mm} = 1 / \bar{X}$. 

Note that the moment-matching estimators are not unique. Different theoretical and sample moments can be matched. For example, the second theoretical moment is $\mathbb{E}X^2 = 2 / \lambda^2$, leading to an alternative matching equation:

$$
\bar{X^2} = 2 / \lambda^2,
$$

with the solution:

$$
\hat{\lambda}_{mm} = \sqrt{\frac{2}{\bar{X^2}}} = \sqrt{\frac{2n}{\sum^n_{i = 1} X^2_i}}.
$$
