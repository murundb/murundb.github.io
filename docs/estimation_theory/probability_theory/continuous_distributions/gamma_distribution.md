# Gamma And Inverse Gamma Distributions

## Gamma Distribution Definition

The gamma distribution is an extension of the exponential distribution. Prior to defining its density, we define the gamma function that is critical in normalizing the density.

Function $\Gamma(x)$, defined via the integral $\int^{\infty}_0 t^{x - 1} e^{-t} dt$ for $x > 0$, is called the gamma function. If $n$ is a positive integer, then $\Gamma(n) = (n - 1)!$. 

Random variable $X$ has a gamma $\mathcal{Ga}(r, \lambda)$ distribution if its PDF is given by:

$$
f_X(x) =
\begin{cases}
\begin{alignat}{2}
& \frac{\lambda^r}{\Gamma(r)} x^{r - 1} e^{-\lambda x} \quad &&x \geq 0, \\
& 0 \quad &&\text{else}.
\end{alignat}
\end{cases}
$$

The parameter $r > 0$ is called the **shape** parameter, and $\lambda > 0$ is the **rate** parameter.

Figure 1 shows the gamma function and the gamma PDF for $(r, \lambda) = (1, 1/3), (2, 2/3), (20, 2)$.

<figure markdown>
  ![gamma_distribution](/assets/images/estimation_theory/light/gamma_distribution.png#only-light){ width="600" }
  ![gamma_distribution](/assets/images/estimation_theory/dark/gamma_distribution.png#only-dark){ width="600" }
  <figcaption>Figure 1 Gamma function and gamma distributions</figcaption>
</figure>

## Gamma Distribution Mean and Variance

Its moment-generating function is:

$$
m(t) = \left(\frac{\lambda}{\lambda - t} \right)^r,
$$

so in the case $r = 1$, the gamma distribution becomes the exponential distribution. From $m(t)$, we have $\mathbb{E} X = r / \lambda$ and $\mathbb{V}\text{ar} = r / \lambda^2$.

If $X_1, \ldots, X_n$ are generated from an exponential distribution with (rate) parameter $\lambda$, it follows from $m(t)$ that $Y = X_1 + \cdots + X_n$ is distributed as gamma with parameters $\lambda$ and $n$, i.e., $Y \sim \mathcal{Ga}(n, \lambda)$.

## Inverse Gamma Distribution Definition

Random variable $X$ is said to have an inverse gamma $\mathcal{IG}(r, \lambda)$ distribution with parameters $r > 0$ and $\lambda > 0$ if its density is given by:

$$
f_X(x) =
\begin{cases}
\begin{alignat}{2}
& \frac{\lambda^r}{\Gamma(r) x^{r + 1}} e^{-\lambda / x} \quad && x \geq 0, \\
&0 \quad && \text{else}.
\end{alignat}
\end{cases}
$$

## InverseGamma Distribution Mean and Variance

The mean and variance of $X$ are $\mathbb{E}X = \lambda / (r - 1)$ for $r > 1$, and $\mathbb{V}\text{ar}X = \lambda^2 / \left[ (r - 1)^2 (r - 2) \right]$, for $r > 2$.

If $X \sim \mathcal{Ga}(r, \lambda)$, then $X^{-1} \sim \mathcal{IG}(r, \lambda)$. In Bayesian context, the inverse gamma is a natural prior distribution for a scale parameter.

## Appendix

### Plotting Script

``` python
from scipy.stats import gamma
from scipy.special import gamma as fgamma
import numpy as np
from matplotlib import pyplot as plt

## Gamma distribution
lambda_1, lambda_2, lambda_3 = 1.0 / 3, 2.0 / 3, 2
r_1, r_2, r_3 = 1, 2, 20
scale_1, scale_2, scale_3 = 1 / lambda_1, 1 / lambda_2, 1 / lambda_3
x = np.linspace(0, 15)

fig, ax = plt.subplots(1, 2)
ax[0].set_title("Gamma Distribution PDF")
ax[0].set_xlim((0, 15))
ax[0].set_ylim((0, 0.4))
ax[0].plot(x, gamma.pdf(x, a=r_1, scale=scale_1), "-", label="Ga(1, 1/3)", alpha=1.0)
ax[0].plot(x, gamma.pdf(x, a=r_2, scale=scale_2), "-", label="Ga(2, 2/3)", alpha=0.7)
ax[0].plot(x, gamma.pdf(x, a=r_3, scale=scale_3), "-", label="Ga(20, 2)", alpha=0.7)
ax[0].set_box_aspect(1)
ax[0].set_xlabel("x")
ax[0].set_ylabel("PDF")
ax[0].grid(True)
ax[0].legend()

gvalues = fgamma(x[:])

ax[1].set_title("Gamma Function")
ax[1].set_xlim((0, 8))
ax[1].set_ylim((0, 10000))
ax[1].set_yscale("symlog")
ax[1].plot(x[:], gvalues, "-")
ax[1].set_box_aspect(1)
ax[1].set_xlabel("x)")
ax[1].set_ylabel("Gamma(x)")
ax[1].grid(True)
ax[1].legend()

fig.tight_layout()
fig.savefig("gamma_distribution.png", dpi=800, bbox_inches="tight")
```
