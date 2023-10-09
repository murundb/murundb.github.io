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

and finding an extremum of a sum is simpler. Since the logarithm is a monotonically increasing function, the maxima of $L$ and $\ell$ are achieved at the same value $\hat{\theta}_{mle}$. Figure 1 shows likelihood and log-likelihood for exponential distribution with rate parmater $\lambda$ when the sample $X = [0.4, 0.3, 0.1, 0.5]$ is observed. The MLE is $1 / \bar{X} = 3.077$.

<figure markdown>
  ![maximum_likelihood](/assets/images/estimation_theory/light/maximum_likelihood.png#only-light){ width="400" }
  ![maximum_likelihood](/assets/images/estimation_theory/dark/maximum_likelihood.png#only-dark){ width="400" }
  <figcaption>Figure 1 Likelihood and log-likelihood example</figcaption>
</figure>

## Example

## Exponential Model

Consider the MLE of $\lambda$ in the exponential model, $\text{Exp}(\lambda)$. After $X_1, \ldots, X_n$ are observed, the likelihood becomes:

$$
L(\lambda | X_1, \ldots, X_n) = \prod^n_{i = 1} \lambda e^{- \lambda X_i} = \lambda^n \exp \left\{ -\lambda \sum^n_{i = 1} X_i \right\}.
$$

The likelihood $L$ is obtained as a product of densities $f(x_i | \lambda)$ where the arguments $x_i$s are fixed observations $X_i$. The log-lileihood is:

$$
\ell (\lambda | X_1, \ldots, X_n) = n \log \lambda - \lambda \sum^n_{i = 1} X_i.
$$

We have:

$$
\frac{\partial \ell}{\partial \lambda} = \frac{n}{\lambda} - \sum^n_{i = 1} X_i = 0,
$$

and the solution is $\hat{\lambda}_{mle} = \frac{n}{\sum^n_{i = 1} X_i} = 1 / \bar{X}$. The second derivative of the log-likelihood, $\frac{\partial^2 \ell}{\partial \lambda^2} = -\frac{n}{\lambda^2}$, is always negative; thus, the solution $\hat{\lambda}_{mle}$ maximizes $\ell$.

!!! cnote "Invariance Property of MLEs"
    Let $\hat{\theta}_{mle}$ be an MLE of $\theta$ and let $\eta = g(\theta)$, where $g$ is an arbitrary function. Then $\hat{\eta}_{mle} = g(\hat{\theta}_{mle})$ is an MLE of $\eta$.

For example, if the MLE for $\lambda$ in the exponential distribution was $1 / \bar{X}$, then for a function of the parameter $\eta = \lambda^2 - \sin \lambda$, the MLE is $(1 / \bar{X})^2 - \sin(1 / \bar{X})$.

## Appendix

### Plotting Script

``` python
import numpy as np
from matplotlib import pyplot as plt

def compute_likelihoods(X, lambdas):
    
    num_samples = X.shape[0]
    
    ## Likelihood
    L = np.zeros(lambdas.shape)
    for j in range(lambdas.shape[0]):
        
        sum = 0
        for i in range(num_samples):
            sum += -lambdas[j] * X[i]

        L[j] = np.power(lambdas[j], num_samples) * np.exp(sum)
        
    ## Log-likelihood
    l = np.zeros(lambdas.shape)
    for j in range(lambdas.shape[0]):
        
        sum = 0
        for i in range(num_samples):
            sum += -lambdas[j] * X[i]

        l[j] = num_samples * np.log(lambdas[j]) + sum
    
    return L, l
    

rate_params = np.linspace(1, 5)
X = np.array([0.4, 0.3, 0.1, 0.5], dtype=np.float32)

L, l = compute_likelihoods(X, rate_params)

max_rate_param = np.array([3.077])

L_mle, l_mle = compute_likelihoods(X, max_rate_param)

fig, ax = plt.subplots()
ax.plot(rate_params, L, label="Likelihood")
ax.plot(rate_params, l, label="Log-likelihood")
ax.plot(max_rate_param, L_mle, "o")
ax.plot(max_rate_param, l_mle, "o")
ax.axvline(x=max_rate_param, linestyle="--")
ax.set_xlim((1, 5))
ax.set_ylim((-2, 2))
ax.set_box_aspect(1)
ax.set_xlabel("Rate param")
ax.set_ylabel("Likelihood")
ax.grid(True)
ax.legend()
plt.show()

fig.tight_layout()
fig.savefig("maximum_likelihood.png", dpi=800, bbox_inches="tight")
```
