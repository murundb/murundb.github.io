# Exponential Distribution

## Definition

The probability density function for an exponential random variable is:

$$
f_X(x) =
\begin{cases}
\begin{alignat}{2}
&\lambda e^{-\lambda x} \quad &&x \geq 0, \\
&0 \quad &&\text{else}
\end{alignat}
\end{cases}
$$

where $\lambda > 0$ is called the **rate** parameter. An exponentially distributed random variable $X$ is denoted by $X \sim \text{Exp} (\lambda)$. The CDF is given by:

$$
F(x; \lambda) =
\begin{cases}
\begin{alignat}{2}
&1 - e^{-\lambda x} \quad &&x \geq 0, \\
&0 && \text{else}.
\end{alignat}
\end{cases}
$$

Figure 1 shows the PDF and CDF for $\lambda = 0.5, 1.0, 1.5$.

<figure markdown>
  ![exponential_distribution](/assets/images/estimation_theory/light/exponential_distribution.png#only-light){ width="600" }
  ![exponential_distribution](/assets/images/estimation_theory/dark/exponential_distribution.png#only-dark){ width="600" }
  <figcaption>Figure 1 Exponential distribution PDF and CDF</figcaption>
</figure>

## Mean and Variance

Its moment-generating function is:

$$
m(t) = \lambda / (\lambda - t),
$$

for $t < \lambda$. Hence its mean and variance are $1 / \lambda$ and $1 / \lambda^2$ respectively. The $n$'th moment is $\mathbb{E} X^n = \frac{n!}{\lambda^n}$.

## Failure Rate

**Failure rate** is defined as:

$$
\lambda_X(t) = \frac{f_X(t)}{1 - F_X(t)},
$$

and is constant and equal to $\lambda$.

## Relationship to Poisson Distribution

The exponential distribution has an important connection to the Poisson distribution. It is the probability distribution of the time between events in a Poisson point process, i.e., a process in which events occur continuously and independently at a constant average rate. Suppose we observe i.i.d exponential variates $(X_1, X_2, \ldots)$ and define $S_n = X_1 + \cdots + X_n$. For any positive value $t$, it can be shown that:

$$
\mathbb{P}(S_n < t < S_{n + 1}) = p_Y(n),
$$

where $p_Y(n)$ is the probability mass function for a Poisson random variable $Y$ with parameter $\lambda t$.

Like a geometric random variable, an exponential random variable has the **memoryless property**:

$$
\mathbb{P}(X \geq u + v | X \geq u) = \mathbb{P}(X \geq v).
$$

## Examples

### Melanoma

The 5-year cancer survival rate in the case of malignant melanoma of the skin at stage 3A is $78\%$. Assume that the survival time $T$ can be modeled by an exponential random variable with unknown rate $\lambda$. Given the 5-year survival rate, compute the probability of a melanoma patient surviving more than 10 years.

The rate of surival for 5 years is given as 0.78. Assuming that the survival rate random variable is an exponential distribution and using the CDF:

$$
\mathbb{P}(T > t) = \exp (-\lambda t),
$$

or:

$$
\mathbb{P}(T > 5) = 0.78.
$$

Then, we have $\lambda = -\frac{1}{5} \log(0.78) = 0.05$.

Finally, the probability that the survival time exceeds 10 years is:

$$
\mathbb{P}(T > 10) = 1 - F(x=10, \lambda=0.05) = 1 - (1 - \exp(-0.05 \cdot 10)) = \frac{1}{\sqrt{e}} = 0.6065.
$$

Figure 2 shows the survival PDF and CDF as a function of time.

### Exponential Lifetimes

Let $n = 20$ independent components be connected in a serial system; that is, all components need to be operational for the system to work. The lifetime of each component is an exponential random variable with rate of $1/3$ (in units of 1 per year). What is the probability that the system remains operational for more than one month?

If $T_i$ are lifetimes of system components, the system's lifetime is $T = \min_i T_i$. For $T$ to exceed $t$, each $T_i$ has to exceed $t$:

$$
\mathbb{P}(T > t) = \mathbb{P}(T_1 > t, T_2 > t, \ldots, T_n > t).
$$

If $T_i$ are independent exponentials with rates $\lambda_i$:

$$
\prod^n_{i = 1} \mathbb{P}(T_i > t) = \prod^n_{i = 1} \exp\left\{-\lambda_i t \right\} = \exp \left\{ -t \sum^n_{i = 1} \lambda_i \right\},
$$

which shows that $T \sim \text{Exp}(\sum^n_{i = 1} \lambda_i)$. Then we have:

$$
\mathbb{P}(T > 1/12) = \exp \left\{-10/12 \right\} = 0.4346.
$$

## Appendix

### Plotting Script

``` python
from scipy.stats import expon
import numpy as np
from matplotlib import pyplot as plt

## Expnential distribution
lambda_1, lambda_2, lambda_3 = 0.5, 1.0, 1.5
scale_1, scale_2, scale_3 = 1 / lambda_1, 1 / lambda_2, 1 / lambda_3
x = np.linspace(0, 6)

fig, ax = plt.subplots(1, 2)
ax[0].set_title("Exponential Distribution PDF")
ax[0].set_xlim((-0.5, 5.5))
ax[1].set_ylim((-0.5, 1.5))
ax[0].plot(x, expon.pdf(x, scale=scale_1), "-", label="lambda = {}".format(lambda_1), alpha=1.0)
ax[0].plot(x, expon.pdf(x, scale=scale_2), "-", label="lambda = {}".format(lambda_2), alpha=0.7)
ax[0].plot(x, expon.pdf(x, scale=scale_3), "-", label="lambda = {}".format(lambda_2), alpha=0.7)
ax[0].set_box_aspect(1)
ax[0].set_xlabel("x")
ax[0].set_ylabel("P(x)")

ax[0].grid(True)
ax[0].legend()

ax[1].set_title("Exponential Distribution CDF")
ax[1].set_xlim((-0.5, 5.5))
ax[1].set_ylim((-0.5, 1.5))
ax[1].plot(x, expon.cdf(x, scale=scale_1), "-", label="lambda = {}".format(lambda_1), alpha=1.0)
ax[1].plot(x, expon.cdf(x, scale=scale_2), "-", label="lambda = {}".format(lambda_2), alpha=0.7)
ax[1].plot(x, expon.cdf(x, scale=scale_3), "-", label="lambda = {}".format(lambda_2), alpha=0.7)
ax[1].set_box_aspect(1)
ax[0].set_xlabel("P(X < x)")
ax[1].set_ylabel("Probability")
ax[1].grid(True)
ax[1].legend()

fig.tight_layout()
fig.savefig("exponential_distribution.png", dpi=800, bbox_inches="tight")
```
