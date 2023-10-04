# Poisson Distribution

## Defintion

Poisson distribution is a discrete probability distribution that expresses the probability of a given number of events occuring in a fixed interval of time or space if these events occur with a known constant mean rate and independently of the time since the last event. 

The PMF for the Poisson distribution is:

$$
f(x; \lambda) = \mathbb{P}(X = x) = p_X(x) = \frac{\lambda^x}{x!} e^{- \lambda}, \quad x = 0, 1, 2, \ldots,
$$

where $x$ is the number of occurences and $e$ is the Euler's number. Poisson distribution is denoted by $X \sim \mathcal{Poi}(\lambda)$.

Figure 1 shows the PMF and CDF of $\mathcal{Poi}(2)$ and $\mathcal{Poi}(4)$.

<figure markdown>
  ![poisson_distribution](/assets/images/estimation_theory/light/poisson_distribution.png#only-light){ width="600" }
  ![poisson_distribution](/assets/images/estimation_theory/dark/poisson_distribution.png#only-dark){ width="600" }
  <figcaption>Figure 1 Poisson distribution PMF and CDF</figcaption>
</figure>

## Mean and Variance

Recall that the moment-generating function for discrete random variables is:

$$
m_X(t) = \mathbb{E}e^{tX} = \sum_n p_n e^{t x_n}.
$$

Then moment-generating function for Poisson distribution is:

$$
\begin{align}
m_X(t) &= \sum_{n} \frac{\lambda^n}{n!} e^{-\lambda} e^{tn} \\
&= e^{-\lambda} \sum_n \frac{(\lambda e^t)^n}{n!} \\
&= e^{-\lambda} e^{\lambda e^t} \\
&= e^{\lambda(e^t - 1)}.
\end{align}
$$

Note her that we used:

$$
\exp(x) = \sum_n \frac{x^n}{n!} = 1 + x + \frac{x^2}{2} + \frac{x^3}{3!} + \cdots, \quad \forall x \in \mathbb{R}.
$$

The first and second derivatives of the moment-generating function are:

$$
\begin{align}
\frac{d m_X(t)}{dt} &= e^{\lambda (e^t - 1)} \lambda e^t \\
\frac{d^2 m_X(t)}{dt^2} &= \lambda e^{e^t \lambda + t - \lambda} (e^t \lambda + 1).
\end{align}
$$

Then the expected value of Poisson distribution is:

$$
\mathbb{E}X = \left. \frac{d m_X(t)}{dt} \right|_{t = 0} = \lambda.
$$

The variance is the central second moment:

$$
\begin{align}
\mathbb{V}\text{ar}X &= \mathbb{E}X^2 - (\mathbb{E}X)^2 \\
&= \left. \frac{d^2 m_X(t)}{dt^2} \right|_{t = 0} - (\mathbb{E}X)^2 \\
&= \lambda.
\end{align}
$$

## Properties

The sum of finite independent set of Poisson variables is also Poisson. Specifically, if $X_i \sim \mathcal{Poi}(\lambda_i)$, then $Y = X_1 + \cdots + X_k$ is distributed as $\mathcal{Poi}(\lambda_1 + \cdots + \lambda_k)$.

## Appendix

### Plotting Script

``` python
from scipy.stats import poisson
import numpy as np
from matplotlib import pyplot as plt

## Poisson distribution
lambda_1, lambda_2 = 2, 4
pd_1, pd_2 = poisson(lambda_1), poisson(lambda_2)
x = np.arange(0, 21)

fig, ax = plt.subplots(1, 2)
ax[0].set_title("Poisson Distribution PMF")
ax[0].set_xlim((-0.5, 20.5))
ax[0].plot(x, pd_1.pmf(x), "-o", label="lambda = {}".format(lambda_1), alpha=1.0)
ax[0].plot(x, pd_2.pmf(x), "-o", label="lambda = {}".format(lambda_2), alpha=0.7)
ax[0].set_box_aspect(1)
# ax[0].set_xticks(x)
ax[0].set_xlabel("x")
ax[0].set_ylabel("Probability")

ax[0].grid(True)
ax[0].legend()

ax[1].set_title("Poisson Distribution CDF")
ax[1].set_xlim((-0.5, 20.5))
ax[1].plot(x, pd_1.cdf(x), "o", label="lambda = {}".format(lambda_1), alpha=1.0)
ax[1].plot(x, pd_2.cdf(x), "o", label="lambda = {}".format(lambda_2), alpha=0.7)
ax[1].set_box_aspect(1)
# ax[1].set_xticks(x)
ax[0].set_xlabel("x")
ax[1].set_ylabel("Probability")
ax[1].grid(True)
ax[1].legend()

fig.tight_layout()
fig.savefig("poisson_distribution.png", dpi=800, bbox_inches="tight")
```
