# Random Variables

## Definition

A scalar **random variable** is a real-valued function whose numerical value is determined by the outcome of a random experiment. Thus, a random variable is a mapping from the sample space of an experiment, $S$, to a set of real numbers. The value taken by a random variable is called its **realization**

## Cumulative Distribution Functions

The **cumulative distribution** of a random variable $x$ is the probability of all realizations smaller than or equal to $\xi$.

| | Continuous Random Variable | Discrete Random Variable |
| - | - | - |
| **Random Variable Type** | Scalar continuous-valued random variable $x$ | Scalar discrete random variable $x$ which can take values in the set $\left\{ \xi_i, i = 1, \ldots, k \right\}$ with **point masses** $\mu_i$ |
| **Cumulative Distribution** | $\begin{align*}P_x(\xi) = \mathbb{P}\left\{x \leq \xi \right\} = \int^{\xi}_{-\infty}p_x(t)dt \end{align*}$ | $\begin{align*} P_x(\xi) = \mathbb{P}\left\{x \leq \xi \right\} =  \sum^{n}_{i = 1} \mu_i 1(\xi - \xi_i), \end{align*}$ <br> where $1(\cdot)$ is the unit step function |
| **Properties** | $\begin{align*} P_x(\xi) &\in \left[0, 1 \right] \\ P_x(-\infty) &= 0 \\ P_x(\infty) &= 1 \\ P_x(a) &\leq P_x(b) \quad \text{if} \ a \leq b \\ \mathbb{P}(a < x \leq b) &= P_x(b) - P_x(a)\end{align*}$ | |

## Probability Distribution Functions

The **probability distribution** of a random variable $x$ is a table, rule, assignment, or a formula that assigns probabilities to realizations of $x$, or sets of realizations. A pdf has to have the **normalization property** that its total probability mass is unity $-$ otherwise it is not a **proper density**.

| | Continuous Random Variable | Discrete Random Variable | Mixed Random Variable |
| - | - | - | - |
| **Random Variable Type** | Scalar continuous-valued random variable $x$ | Scalar discrete random variable $x$ which can take values in the set $\left\{ \xi_i, i = 1, \ldots, k \right\}$ with **point masses** $\mu_i$ | Mixed random variable $x$ |
| **Probability Distribution** | The **probability density function (pdf)**, $p_x(\xi)$, of $x$ at $x = \xi$ is: <br> $\begin{align*} p_x(\xi) = \lim_{d\xi \rightarrow 0} \frac{\mathbb{P}\left\{\xi - d\xi < x < \xi \right\}}{d\xi} \geq 0 \end{align*}$. <br> The more common notation $p_x(\xi) = p(x)$ where the argument defines the function is used | The **probability mass function (pmf)**, $\mu_{x}(\xi_i)$, where $\xi_i, i = 1, \ldots, k$ are set of values is: <br> $\begin{align*} \mu_x(\xi_i) = \mathbb{P}\left\{x = \xi_i \right\} = \mu_i, \quad i = 1, \ldots, k\end{align*}$ <br> where $\mu_i$ are the **point masses**. Using Dirac (impulse) delta function, we can write: <br> $\begin{align*} p(x) = \sum^{k}_{i = 1} \mu_i \delta(x - \xi_i) \end{align*}$ | The **pdf** of $x$ which can take values in a continuous set $X$ as well as over a discrete set of points $\left\{ \xi_i, \ i = 1, \ldots, k \right\}$ is: <br> $\begin{align*} p(x) = p_c(x) + \sum^{k}_{i = 1} \mu \delta(x - \xi_i), \end{align*}$ <br> where $p_c(x)$ is the continuous part of the pdf and the $\mu_i$ are the point masses|$
| **Proper Density Property** | $\begin{align*}\int^{\infty}_{-\infty} p(x)dx = 1\end{align*}$ | $\begin{align*}&\sum^{k}_{i = 1} \mu_i = 1\end{align*}$ | $\begin{align*} \int^{\infty}_{-\infty} p(x) dx = \int_{x \in X} p_c(x) dx + \sum^{k}_{i = 1} \mu_i = 1 \end{align*}$ |
| **Probability Computation** | $\begin{align*}&\mathbb{P}\left\{a < x \leq b \right\} = \int^{b}_{a} p(x) dx\end{align*}$ | | |
| **Relationship to CDF** | $\begin{align*} p(x) = \frac{dP_x(\xi)}{d\xi} \end{align*}$ | | |

## Expectations, Variances, and Moments

The **moment-generating** function for a random variable $x$ is defined as $m_x(t) = \mathbb{E}\left[e^{tx} \right]$. When the moment-generating function exists, it uniquely determines the distribution. The name **moment-generating** is motivated by the fact that the $n$'th derivative of $m_x(t)$ (denoted as $m^{(n)}_x(t)$) evaluated at $t = 0$ results in the *n*'th moment of $x$. For random variables $x$ and $y$, the moment-generating functions satisfy $m_{x + y}(t) = m_x(t) m_y(t)$ and $m_{cx}(t) = m_x(ct)$.

| | Continuous Random Variable | Discrete Random Variable |
| - | - | - |
| **Random Variable Type** | Scalar continuous-valued random variable $x$ | Scalar discrete random variable $x$ which can take values in the set $\left\{ \xi_i, i = 1, \ldots, k \right\}$ with **point masses** $\mu_i$ |
| **Moment-Generating Function** | $\begin{align*} m_x(t) = \mathbb{E}\left[e^{tx} \right] = \int^{\infty}_{-\infty} e^{tx}p(x) dx \end{align*}$ | $\begin{align*} m_x(t) = \mathbb{E}\left[e^{tx} \right] = \sum^{k}_{i = 1} \mu_i e^{t \xi_i} \end{align*}$ |
| **n'th Moment** | $\begin{align*} m^{(n)}_x(t = 0) = \int^{\infty}_{-\infty} x^n p(x) dx \end{align*}$ | $\begin{align*} m^{(n)}_x(t = 0) = \sum^{k}_{i = 1} \mu_i \xi^{n}_i \end{align*}$ |
| **Expectation (first moment)** | $\begin{align*} \mathbb{E}\left[ x \right] = \int^{\infty}_{-\infty} x p(x) dx \triangleq \bar{x} \end{align*}$ | $\begin{align*} \mathbb{E}\left[ x \right] = \sum^{k}_{i = 1} \xi_i \mu_i \end{align*}$ |
| **Variance (second central moment)** | $\begin{align*}\mathbb{V}\text{ar}(x) &\triangleq \mathbb{E}\left[(x - \bar{x})^2 \right] \\ &= \int^{\infty}_{-\infty} (x - \bar{x})^2 p(x) dx \\ &= \mathbb{E}\left[ x^2 \right] - (\bar{x})^2 \triangleq \sigma^2_x  \end{align*}$ | $\begin{align*} \mathbb{V}\text{ar}(x) = \sum^{k}_{i = 1}\left( \xi_i - \mathbb{E}\left[ x \right] \right)^2 \mu_i \end{align*}$ |
| **Mean Square (second moment)** | $\begin{align*} \mathbb{E}\left[x^2 \right] = \left( \mathbb{E}\left[ x \right]\right)^2 + \mathbb{V}\text{ar}(x) = \bar{x}^2 + \sigma^2_x \end{align*}$ | |
| **Expectation of Function** | The expected value of a function $g(x)$ of the random variable $x$ is: <br> $\begin{align*} \mathbb{E}\left[ g(x) \right] = \int^{\infty}_{-\infty} g(x) p(x) dx \end{align*}$ | The expected value of a function $g(x)$ of the random variable $x$ is: <br> $\begin{align*} \mathbb{E}\left[ g(x) \right] = \sum^k_{i = 1} g(\xi_i) \mu_i \end{align*}$|
| **Expectation Properties** | For any set of random variables (both discrete and continuous) $x_1, \ldots, x_n$ and a constant $c \in \mathbb{R}$: <br> $\begin{align*} &\mathbb{E}\left[x_1 + \ldots x_n \right] = \mathbb{E}\left[x_1\right] + \ldots \mathbb{E}\left[x_n\right] \\ &\mathbb{E}\left[ c x \right] = c \mathbb{E}\left[ x \right]  \end{align*}$ | |
| **Independence Properties** | For any **independent** set of random variables (both discrete and continues) $x_1, \ldots, x_n$ and a constant $c \in \mathbb{R}$: <br> $\begin{align*} &\mathbb{E}\left[ x_1 \cdot \ldots \cdot x_n \right] = \mathbb{E}\left[ x_1 \right] \cdot \ldots \mathbb{E}\left[ x_n \right] \\ &\mathbb{V}\text{ar}(x_1 + \ldots x_n) = \mathbb{V}\text{ar}(x_1) + \ldots + \mathbb{V}\text{ar}(x_n) \\ &\mathbb{V}\text{ar}(cx) = c^2 \mathbb{V}\text{ar}(x) \end{align*}$| |

## Shannon Entropy

There are important properties of discrete distributions in which the realizations $x_1, x_2, \ldots, x_n$ are irrelevant and the focus is on the probabilities only, such as the measure of **entropy**. For a discrete random variable where the probabilities are $\mathbf{p} = (p_1, p_2, \ldots, p_n)$, the Shannon entropy is defined as:

$$
\mathbb{H}(\mathbf{p}) = -\sum_i p_i \log(p_i).
$$

!!! cnote "Entropy"
    Entropy is a measure of the uncertainty of a random variable and for finite discrete distributions achieves its maximum when the probabilities of realizations are equal, i.e., $\mathbf{p} = (1/n, 1/n, \ldots, 1/n)$.
