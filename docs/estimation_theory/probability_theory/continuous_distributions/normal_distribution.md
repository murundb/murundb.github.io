# Normal Distribution

## Definition

The probability density function for a normal (Gaussian) random variable $X$ is given by:

$$
f_X(x) = \frac{1}{\sqrt{2\pi} \sigma} \exp \left\{ - \frac{(x - \mu)^2}{2 \sigma^2} \right\},
$$

where $\mu$ is the mean and $\sigma^2$ is the variance of $X$. Gaussian distribution is denoted as $X \sim \mathcal{N}(\mu, \sigma^2)$. The CDF is:

$$
\Phi(x) = \int^x_{-\infty} \frac{1}{\sqrt{2\pi}} \exp \left\{-\frac{t^2}{2} \right\} dt.
$$

Normal distribution can be standardized to $Z$, where $Z \sim \mathcal{N}(0, 1)$:

$$
X \sim \mathcal{N}(\mu, \sigma^2) \longrightarrow Z = \frac{X - \mu}{\sigma} \sim \mathcal{N}(0, 1).
$$

Suppose we are interested in the probability that a random variable $X$ distributed as $\mathcal{N}(\mu, \sigma^2)$ falls between two bounds $a$ and $b$, $\mathbb{P}(a < X < b)$. It is irrelevant whether the bounds are included or not since the normal distribution is continuous and $\mathbb{P}(a < X < b) = \mathbb{P}(a \leq X \leq b)$. We have:

$$
\begin{align}
\mathbb{P}(a \leq X \leq b) = \mathbb{P} \left(\frac{a - \mu}{\sigma} \leq Z \frac{b - \mu}{\sigma} \right) = \Phi \left(\frac{b - \mu}{\sigma} \right) - \Phi\left(\frac{a - \mu}{\sigma} \right).
\end{align}
$$

Note that when the bounds are infinite, since $\Phi$ is a CDF:

$$
\Phi(-\infty) = 0, \quad \text{and} \ \Phi(\infty) = 1.
$$

!!! cnote "Sigma Rules"
    Sigma rules (also known as empirical rule) state that for any normal distribution, the probability that
    an observation will fall in the interval $\mu \pm k\sigma$ for $k = 1, 2, 3$ is $68.27\%$, $95.45\%$, and $99.73\%$, respectively. More precisely:

    $$
    \begin{align}
    &\mathbb{P}(\mu - \sigma < X < \mu + \sigma) =
    \mathbb{P}(-1 < Z < 1) = \Phi(1) - \Phi(-1) = 0.6827 \\
    &\mathbb{P}(\mu - 2\sigma < X < \mu + 2\sigma) =
    \mathbb{P}(-2 < Z < 2) = \Phi(2) - \Phi(-2) = 0.9545 \\
    &\mathbb{P}(\mu - 3\sigma < X < \mu + 3\sigma) =
    \mathbb{P}(-3 < Z < 3) = \Phi(3) - \Phi(-3) = 0.9973 \\
    \end{align}
    $$

## Mean and Variance

Recall that the moment-generating function is:

$$
m_X(t) = \int_{\mathbb{R}} e^{tx} f(x) dx.
$$

Then the moment-generating function for Gaussian distribution is:

$$
m_X(t) = \int_{\mathbb{R}} \exp^{tx} \frac{1}{\sqrt{2\pi} \sigma} \exp \left\{ -\frac{(x - \mu)^2}{2\sigma^2}\right\} dx.
$$

Standarize the distribution via defining $z = \frac{x - \mu}{\sigma}$, which implies $x = z \sigma + \mu$. Then, using the change-of-variables:

$$
\begin{align}
m_X(t) &= e^{\mu t} \int e^{z \sigma t} \frac{1}{\sqrt{2\pi}} e^{\frac{-z^2}{2}} dz \\
&= \exp \left\{ \mu t + \sigma^2 t^2 / 2 \right\}.
\end{align}
$$

Then the expected value of the Bernoulli distribution is:

$$
\mathbb{E}X = \left. \frac{d m_X(t)}{dt} \right|_{t = 0} = \mu.
$$

The variance is the central second moment:

$$
\begin{align}
\mathbb{V}\text{ar}X &= \mathbb{E}X^2 - (\mathbb{E}X)^2 \\
&= \left. \frac{d^2 m_X(t)}{dt^2} \right|_{t = 0} - (\mathbb{E}X)^2 \\
&= \sigma^2.
\end{align}
$$

## Combining Normal Random Variables

Any linear combination of independent normal variables is also normally distributed. Thus, only the mean and the variance of the variables involved in the linear combination need to be tracked. Let $X_1, X_2, \ldots, X_n$ be independent normal random variables such that $X_i \sim \mathcal{N}(\mu_i, \sigma^2_i)$. Then for $a_i \in \mathbb{R}$:

$$
a_1 X_1 + a_2 X_2 + \cdots + a_n X_n = \sum^n_{i = 1} a_i X_i \sim \mathcal{N}(\mu, \sigma^2),
$$

where:

$$
\begin{align}
\mu &= a_1 \mu_1 + a_2 \mu_2 + \cdots + a_n \mu_n = \sum^n_{i = 1} a_i \mu_i \\
\sigma^2 &= a^2_1 \sigma^2_1 + a^2_2 \sigma^2_2 + \cdots + a^2_n \sigma^2_n = \sum^{n}_{i = 1} a^2_i \sigma^2_i.
\end{align}
$$