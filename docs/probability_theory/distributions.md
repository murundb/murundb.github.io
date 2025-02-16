# Distributions

## Uniform Distribution

The theoretical model for **random sampling** is the uniform distribution.

| | Continuous | Discrete |
| - | - | - |
| **pdf/pmf** | $p(x) = \mathcal{U}(x; a, b) \triangleq \begin{cases} \begin{alignat*}{2} &\frac{1}{b - a}, \quad &&a \leq x \leq b, \\ &0, \quad &&\text{else}. \end{alignat*} \end{cases}$ | |
| **CDF** | $P_x(\xi) = \begin{cases} \begin{alignat*}{2} &0, \quad && \xi < a, \\ &\frac{\xi - a}{b - a}, \quad &&a \leq \xi \leq b, \\ &1, \quad &&\xi > b. \end{alignat*} \end{cases}$  | $\begin{align*} P_x(a, b) = \frac{\lfloor x \rfloor - a + 1}{b - a + 1}  \end{align*}$ |
| **Expectation** | $\begin{align*} \mathbb{E} \left[ x \right] = \frac{b + a}{2}\end{align*}$ | $\begin{align*} \mathbb{E} \left[ x \right] = \frac{b + a}{2}\end{align*}$ |
| **Variance** | $\begin{align*}\mathbb{V}\text{ar}(x) = \frac{(b - a)^2}{12}\end{align*}$ | $\begin{align*}\mathbb{V}\text{ar}(x) = \frac{n^2 - 1}{12}, \end{align*}$ <br> where $n = b - a + 1$ |

## Gaussian Distribution

| | Continuous |
| - | - |
| **pdf**| $\begin{align*} p(x) = \mathcal{N}(x; \mu; \sigma^2) \triangleq \frac{1}{\sqrt{2\pi} \sigma} \exp \left\{ -\frac{(x - \mu)^2}{2 \sigma^2} \right\} \end{align*}$ |
| **CDF** | $\begin{align*} P_x(\xi) &= \int^{\xi}_{-\infty} \frac{1}{\sqrt{2 \pi} \sigma} \exp\left\{ -\frac{(x - \mu)^2}{2\sigma^2} \right\}dx \\ &= \int^{(\xi - \mu) / \sigma}_{-\infty} \frac{1}{\sqrt{2 \pi}} \exp \left\{-\eta^2 / 2 \right\} d \eta \\ &=\int^{(\xi - \mu) / \sigma}_{-\infty} \mathcal{N}(\eta; 0, 1)d \eta \triangleq \mathcal{G}\left(\frac{\xi - \mu}{\sigma} \right), \end{align*}$ <br> where $\mathcal{G}$ is the **cumulative standard Gaussian distribtuion**. |
| **Standardization** | $\begin{align*} x \sim \mathcal{N}(\mu, \sigma^2) \longrightarrow z = \frac{x - \mu}{\sigma} \sim \mathcal{N}(0, 1) \end{align*}$ |
| **Sigma Rules** | Sigma rules (also known as empirical rule) state that for any normal distribution, the probability that an observation will fall in the interval $\mu \pm k\sigma$ for $k = 1, 2, 3$ is $68.27\%$, $95.45\%$, and $99.73\%$, respectively. More precisely: <br> <br> $\begin{align*} &\mathbb{P}\left\{\mu - \sigma < x < \mu + \sigma\right\} = \mathbb{P}\left\{-1 < z < 1\right\} = P_z(1) - P_z(-1) = 0.6827 \\ &\mathbb{P}\left\{\mu - 2\sigma < x < \mu + 2\sigma\right\} = \mathbb{P}\left\{-2 < z < 2\right\} = P_z(2) - P_z(-2) = 0.9545 \\ &\mathbb{P}\left\{\mu - 3\sigma < x < \mu + 3\sigma\right\} = \mathbb{P}\left\{-3 < z < 3\right\} = P_z(3) - P_z(-3) = 0.9973 \\ \end{align*}$ |

## Poisson Distribution

Poisson distribution is a discrete probability distribution that expresses the probability of a given number of events occuring in a fixed interval of time, or space if these events occur with a known constant rate, $\lambda$ and independently of the time since the last event.

| | Discrete |
| - | - |
| **pmf** | $\begin{align*} p(x) = \mathbb{P}(x = n) = \frac{\lambda^n}{n!} e^{-\lambda}, \quad n = 0, 1, \ldots \end{align*}$ |
| **Moment-Generating Function** | $\begin{align*} m_x(t) &= \mathbb{E}\left[ e^{t x} \right] = \sum^{n}_{i = 1} \mu_i e^{t \xi_i} \\ &= \sum^{n}_{i = 1} \frac{\lambda^i}{i!} e^{-\lambda} e^{ti} \\ &= e^{-\lambda} \sum^{n}_{i = 1} \frac{(\lambda e^{t})^i}{i!} \\ &= e^{-\lambda} e^{\lambda e^t} = e^{\lambda(e^t - 1)} \end{align*}$ |
| **Expectation** | $\begin{align*}\mathbb{E}\left[ x \right] = \frac{d m_x(t)}{dt} \rvert_{t = 0} = e^{\lambda(e^t - 1)} \lambda e^{t} \rvert_{t = 0} = \lambda \end{align*}$ |
| **Variance** | $\lambda$ |

Figure 1 shows the pmf and CDF example Poisson distributions.

<figure markdown>
  ![poisson_distribution](/assets/images/estimation_theory/light/poisson_distribution.png#only-light){ width="600" }
  ![poisson_distribution](/assets/images/estimation_theory/dark/poisson_distribution.png#only-dark){ width="600" }
  <figcaption>Figure 1 Poisson distribution PMF and CDF</figcaption>
</figure>

## Exponential Distribution

The exponential distribution has an important connection to the Poisson distribution. It is the probability distribution of the time between events in a Poisson point process, *i.e.*, a process in which events occur continuously and independently at a constant average rage.

| | Continuous |
| - | - |
| **pdf** | $p(x, \lambda) = \begin{cases}\begin{alignat*}{2}&\lambda e^{-\lambda x} \quad &&x \geq 0, \\&0 \quad &&\text{else}\end{alignat*}\end{cases}$ |
| **CDF** | $P_x(\xi) = \begin{cases}\begin{alignat*}{2}&1 - e^{-\lambda \xi} \quad &&\xi \geq 0, \\&0 && \text{else}\end{alignat*}\end{cases}$ |
| **Moment-Generating Function** | $\begin{align*}m_x(t) = \lambda / (\lambda - t),\end{align*}$ <br> for $t < \lambda$ |
| **Expectation** | $1 / \lambda$ |
| **Variance** | $1 / \lambda^2$ |

Figure 2 shows the pdf and CDF for example exponential distributions.

<figure markdown>
  ![exponential_distribution](/assets/images/estimation_theory/light/exponential_distribution.png#only-light){ width="600" }
  ![exponential_distribution](/assets/images/estimation_theory/dark/exponential_distribution.png#only-dark){ width="600" }
  <figcaption>Figure 2 Exponential distribution PDF and CDF</figcaption>
</figure>

## Gamma and Inverse Gamma Distributions

The gamma distribution is an extension of the exponential distribution. The gamma function is defined as $\Gamma(x) = \int^{\infty}_0 t^{x - 1} e^{-t} dt$ for $x > 0$. If $n$ is a positive integer, $\Gamma(n) = (n - 1)!$.

| | Continuous |
| - | - |
| **Gamma pdf** | $p(x) = \mathcal{Ga}(r, \lambda) = \begin{cases}\begin{alignat}{2}& \frac{\lambda^r}{\Gamma(r)} x^{r - 1} e^{-\lambda x} \quad &&x \geq 0, \\& 0 \quad &&\text{else}\end{alignat}\end{cases}$, <br><br> where $r > 0$ is called the **shape** and $\lambda >0$ is the **rate** |
| **Gamma Moment-Generating Function** | $\begin{align*} m_x(t) = \left(\frac{\lambda}{\lambda - t}\right)^r\end{align*}$, <br><br> where $r = 1$ is the exponential distribution |
| **Gamma Expectation** | $r / \lambda$ |
| **Gamma Variance** | $r / \lambda^2$ |
| **Inverse Gamma pdf** | $p(x) = \mathcal{IG}(r, \lambda) = \begin{cases}\begin{alignat}{2}& \frac{\lambda^r}{\Gamma(r) x^{r + 1}} e^{-\lambda / x} \quad && x \geq 0, \\&0 \quad && \text{else}\end{alignat}\end{cases}$ |

Figure 3 shows the pdf for example gamma distributions.

<figure markdown>
  ![gamma_distribution](/assets/images/estimation_theory/light/gamma_distribution.png#only-light){ width="600" }
  ![gamma_distribution](/assets/images/estimation_theory/dark/gamma_distribution.png#only-dark){ width="600" }
  <figcaption>Figure 3 Gamma function and gamma distributions</figcaption>
</figure>

## Other Important Distributions

1. [Geometric distribution](https://en.wikipedia.org/wiki/Geometric_distribution)
2. [Multinomial distribution](https://en.wikipedia.org/wiki/Multinomial_distribution)
3. [Logistic distribution](https://en.wikipedia.org/wiki/Logistic_distribution)
4. [Beta distribution](https://en.wikipedia.org/wiki/Beta_distribution)
5. [Weibull distribution](https://en.wikipedia.org/wiki/Weibull_distribution#:~:text=In%20probability%20theory%20and%20statistics,spends%20on%20a%20web%20page.)