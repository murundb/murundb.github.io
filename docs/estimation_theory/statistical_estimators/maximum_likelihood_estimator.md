# Maximum Likelihood Estimator

## Definition

Maximum likelihood estimator (MLE) is an estimator for the parameters of an **assumed probability distribution**, given some observed data. This is achieved by maximizing a likelihood function so that, under the **assumed statistical model**, the observed data is most probable.

Suppose that the sample $X_1, \ldots, X_n$ comes from a population with distribution $f(x | \theta)$ indexed by $\theta$, which could be a scalar or a vector of parameters. Elements of the sample are independent, thus the joint distribution of $X_1, \ldots, X_n$ is a product of individual densities:

$$
f(x_1, \ldots, x_n | \theta) = \prod^n_{i = 1} f(x_i | \theta).
$$

When the sample is observed, the joint distribution remains dependent upon the parameter:

$$
L(\theta | X_1, \ldots, X_n) = \prod^n_{i = 1} f(X_i | \theta),
$$

and, as a function of the parameter, $L$ is called the **likelihood**. The value of the parameter $\theta$ that maximimizes the likelihood $L(\theta | X_1, \ldots, X_n)$ is the MLE:

$$
\hat{\theta}_{mle} = \arg \max_\theta L(\theta | X_1, \ldots, X_n).
$$

The solution to the optimization problem can be found as:

$$
\frac{\partial \ell (\theta | X_1, \ldots, X_n)}{\partial \theta} = 0, \ \text{s.t.} \ \frac{\partial^2 \ell(\theta | X_1, \ldots, X_n)}{\partial \theta^2} < 0.
$$

## Log-Likelihood

In most cases, maximizing the logarithm of likelihood, **log-likelihood**, is simpler than maximizing the likelihood directly:

$$
\ell (\theta | X_1, \ldots, X_n) = \log L (\theta | X_1, \ldots, X_n) = \sum^n_{i = 1} \log f(X_i | \theta),
$$

and finding an extremum of a sum is simpler. Since the logarithm is a monotonically increasing function, the maxima of $L$ and $\ell$ are achieved at the same value $\hat{\theta}_{mle}$ as shown in Figure 1.

## Example

## Exponential Model

Consider the MLE of $\lambda$ in the exponential model, $\mathcal{Exp}(\lambda)$. After $X_1, \ldots, X_n$ are observed, the likelihood becomes:

$$
L(\lambda | X_1, \ldots, X_n) = \prod^n_{i = 1} \lambda e^{- \lambda X_i} = \lambda^n \exp \left\{ -\lambda sum^n_{i = 1} X_i \right\}.
$$

The likelihood $L$ is obtained as a product of densities $f(x_i | \lambda)$ where the arguments $x_i$s are fixed observations $X_i$. The log-lileihood is:

$$
\ell (\lambda | X_1, \ldots, X_n) = n \log \lambda - \lambda \sum^n_{i = 1} X_i.
$$

We have:

$$
\frac{\partial \ell}{\partial \lambda} = \frac{n}{\lambda} - \sum^n{i = 1} X_i = 0,
$$

and the solution is $\hat{\lambda}_{mle} = \frac{n}{\sum^n_{i = 1} X_i} = 1 / \bar{X}$.