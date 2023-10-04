# Bernoulli and Binomial Distributions

## Bernoulli Distribution Definition

A simple Bernoulli random variable $X$ is a dichotomous with $\mathbb{P}(X = 1) = p$ and $\mathbb{P}(X = 0) = 1 - p$ for some  $0 \leq p \leq 1$ and is denoted as $X \sim \mathcal{B}er(p)$. The probability mass function of this distribution, over possible outcomes $x$, is:

$$
f(x; p) = p^x(1 - p)^{1 - x}, \quad \text{for} \ x \in \left\{0, 1 \right\}.
$$

## Bernoulli Distribution Mean and Variance

Recall that the moment-generating function for discrete random variables is:

$$
m_X(t) = \mathbb{E}e^{tX} = \sum_n p_n e^{t x_n}.
$$

Then the expected value of the Bernoulli distribution is:

$$
\mathbb{E}X = \left. \frac{d m_X(t)}{dt} \right|_{t = 0} = p.
$$

The variance is the central second moment:

$$
\begin{align}
\mathbb{V}\text{ar}X &= \mathbb{E}X^2 - (\mathbb{E}X)^2 \\
&= \left. \frac{d^2 m_X(t)}{dt^2} \right|_{t = 0} - (\mathbb{E}X)^2 \\
&= p - p^2 = p(1 - p).
\end{align}
$$

The Bernoulli distribution is a special case of the binomial distribution where a single trial is conducted, i.e., $n = 1$. Figure 1 shows the Bernoulli distribution with three different probabilities.

<figure markdown>
  ![bernoulli_distribution](/assets/images/estimation_theory/light/bernoulli_distribution.png#only-light){ width="400" }
  ![bernoulli_distribution](/assets/images/estimation_theory/dark/bernoulli_distribution.png#only-dark){ width="400" }
  <figcaption>Figure 1 Bernoulli distribution PMF</figcaption>
</figure>

## Binomial Distribution Definition

!!! cnote "How to Recognize that RV has a Binomial Distribution?"

    1. It allows an interpretation as the sum of "successes" in $n$ Bernoulli trials, for $n$ fixed.
    2. The Bernoulli trials are independent.
    3. The Bernoulli probability $p$ is constant for all $n$ trials.

Binomial distribution with parameters $n$ and $p$ is the discrete probability distribution of the number of successes in a sequence of $n$ independent experiments.

Suppose that an experiment consists of $n$ independent trials $(Y_1, \ldots, Y_n)$ in which two outcomes are possible (e.g., success or failure), with $\mathbb{P}(\text{success}) = \mathbb{P}(Y = 1) = p$ for each trial. If $X = x$ is defined as the number of successes (out of $n$), then $X = Y_1 + Y_2 + \cdots + Y_n$, and there are $\left(\begin{array}{c}n \\ x \end{array} \right)$ arrangements of $x$ successes and $n - x$ failures, each having the same probability $p^x(1 - p)^{n - x}$. $X$ is a **binomial** random variable with the PMF:

$$
f(x, n, p) = \mathbb{P}(x; n, p) = p_X(x) = \left(\begin{array}{c}n \\ x \end{array} \right) p^x(1 - p)^{n - x}, \quad x = 0, 1, \ldots, n,
$$

where:

$$
\left(\begin{array}{c}n \\ x \end{array} \right) = \frac{n!}{x!(n - x)!}.
$$

The CDF is:

$$
F(x; n, p) = \mathbb{P}(X \leq x) = \sum^{\lfloor x \rfloor}_{i = 0} \left(\begin{array}{c}n \\ i \end{array} \right) p^i(1 - p)^{n - i}.
$$

In general, if the random variable $X$ follows the binomial distribution with parameters $n \in \mathbb{N}$ and $p \in \left[0, 1 \right]$, we write $X \sim \mathcal{Bin}(n, p)$.

## Binomial Distribution Mean and Variance

Recall that the moment-generating function for discrete random variables is:

$$
m_X(t) = \mathbb{E}e^{tX} = \sum_n p_n e^{t x_n}.
$$

Then the expected value of the binomial distribution is:

$$
\mathbb{E}X = \left. \frac{d m_X(t)}{dt} \right|_{t = 0} = (p \cdot x_1 + (1 - p) \cdot x_2)n = np.
$$

The variance is the central second moment:

$$
\begin{align}
\mathbb{V}\text{ar}X &= \mathbb{E}X^2 - (\mathbb{E}X)^2 \\
&= \left. \frac{d^2 m_X(t)}{dt^2} \right|_{t = 0} - (\mathbb{E}X)^2 \\
&= np - n p^2 = np(1 - p).
\end{align}
$$

Figure 2 shows the Binomial distribution PMFs and CDFs for $\mathcal{Bin}(10, 0.26)$ and $\mathcal{Bin}(10, 0.5)$.

<figure markdown>
  ![binomal distribution](/assets/images/estimation_theory/light/binomial_distribution.png#only-light){ width="600" }
  ![binomal distribution](/assets/images/estimation_theory/dark/binomial_distribution.png#only-dark){ width="600" }
  <figcaption>Figure 2 Binomial distribution PMF and CDF</figcaption>
</figure>

## Generalized Binomial Sampling

Suppose that $n$ independent experiments are performed and that an event $A$ has a probability of $p_i$ of appearing in the $i$'th experiment.

We are interested in the probability that $A$ appeared exactly $k$ times in the $n$ experiments. The binomial setup is not directly applicable since the probabilities of $A$ differ from experiment to experiment. However, the binomial setup is useful as a hint on how to solve the general case. In the binomial setup, the probability of $k$ events of $A$ in $n$ experiments is equal to the coefficient of $z^k$ in the expansion of $G(z) = (pz + q)^n$:

$$
\begin{align}
G(z) &= (pz + q)^n \\
&= p^n q^0 z^n + \cdots + \left(\begin{array}{c}n \\ k \end{array} \right) p^k q^{n - k} z^k + \cdots + npq^{n - 1} z + p^0 q^n.
\end{align}
$$

The polynomial $G(z)$ is called the probability-generating function. If $X$ is discrete integer-valued random variable such that $p_n = \mathbb{P}(X = n)$, then its probability-generating function is defined as:

$$
G_X (z) = \mathbb{E}z^X = \sum_n p_n z^n.
$$

Note that in the polynomial $G_X (z)$, the probability $p_n = \mathbb{P}(X = n)$ is the coefficient of the power $z^n$. Also, $G_X(e^z)$ is the moment-generating function $m_X(z)$. 

In general binomial setup, the polynomial $(pz + q)^n$ becomes:

$$
G_X(z) = (p_1 z + q_1) (p_2 z + q_2) \cdots (p_n z + q_n) = \sum^n_{i = 0} a_i z^i,
$$

and the probability that there are $k$ events $A$ in $n$ experiments is equal to the coefficient $a_k$ of $z^k$ in the polynomial $G_X(z)$. This follows from two properties of $G(z)$:

1. When $X$ and $Y$ are independent, $G_{X + Y}(z) = G_X(z) + G_Y(z)$
2. If $X$ is Bernoulli $\mathcal{Ber}(p)$, then $G_X(z) = pz + q$.

## Appendix

### Plotting Script

``` python
from scipy.stats import bernoulli, binom
import numpy as np
from matplotlib import pyplot as plt

## Bernoulli distribution
p_1, p_2, p_3 = 0.8, 0.2, 0.5
bd_1, bd_2, bd_3 = bernoulli(p_1), bernoulli(p_2), bernoulli(p_3)
k = [0, 1]

fig, ax = plt.subplots()
fig.suptitle("Bernoulli Distribution PMF")
ax.set_xlim((-1.5, 1.5))
ax.bar(k, bd_1.pmf(k), label="p = {}".format(p_1), width = 0.05, alpha=1.0)
ax.bar(k, bd_2.pmf(k), label="p = {}".format(p_2), width = 0.05, align="edge", alpha=0.7)
ax.bar(k, bd_3.pmf(k), label="p = {}".format(p_3), width = -0.05, align="edge", alpha=0.7)
ax.set_xlabel("RV, [0, 1]")
ax.set_ylabel("Probability")

ax.grid(True)
ax.legend()
fig.tight_layout()
fig.savefig("bernoulli_distribution.png", dpi=800, bbox_inches="tight")

## Binomial distribution
n = 10
p_1, p_2 = 0.5, 0.26
bin_1, bin_2, bin_3 = binom(n, p_1), binom(n, p_2), binom(n, p_3)
k = np.arange(0, n + 1)

fig, ax = plt.subplots(1, 2)
ax[0].set_title("Binomial Distribution PMF")
ax[0].set_xlim((-0.5, 10.5))
ax[0].plot(k, bin_1.pmf(k), "o", label="p = {}".format(p_1), alpha=1.0)
ax[0].plot(k, bin_2.pmf(k), "o", label="p = {}".format(p_2), alpha=0.7)
ax[0].set_box_aspect(1)
ax[0].set_xticks(k)
ax[0].set_xlabel("Num Trial")
ax[0].set_ylabel("Probability")

ax[0].grid(True)
ax[0].legend()

ax[1].set_title("Binomial Distribution CDF")
ax[1].set_xlim((-0.5, 10.5))
ax[1].plot(k, bin_1.cdf(k), "o", label="p = {}".format(p_1), alpha=1.0)
ax[1].plot(k, bin_2.cdf(k), "o", label="p = {}".format(p_2), alpha=0.7)
ax[1].set_box_aspect(1)
ax[1].set_xticks(k)
ax[1].set_xlabel("Num Trial")
ax[1].set_ylabel("Probability")
ax[1].grid(True)
ax[1].legend()

fig.tight_layout()
fig.savefig("binomial_distribution.png", dpi=800, bbox_inches="tight")
```
