# Discrete Random Variables

## Definition

A **random variable** (RV) is a variable whose numerical value is determined by the outcome of a random experiment. Thus, a random variable is a mapping from the sample space of an experiment, $S$, to a set of real numbers.

The **probability distribution** of a random variable $X$ is a table (assignment, rule, formula) that assigns probabilities to realizations of $X$, or sets of realizations.

## Probabilitiy Distribution Function

Let random variable $X$ take discrete values $x_1, x_2, \ldots, x_n, \ldots$ with probabilities $p_1, p_2, \ldots, p_n, \ldots$, $\sum_n p_n = 1$. The probability distribution function (PDF) is simply an assignment of probabilities to the realizations of $X$ and is given by the following table:

|  $X$  | $x_1, \ x_2, \ \ldots, \ x_n, \ \ldots$ |
| ----- | --------------------------------------- |
|  Prob | $p_1, \ p_2, \ \ldots, \ p_n, \ \ldots$ |

Note that the discrete random variables can have an infinite number of realizations, as long as the infinite sum of the probabilities converges to 1. The PDF for discrete random variables is also called the **probability mass function** (PMF).

## Cumulative Distribution Function

The cumulative distribution function (CDF):

$$
F(x) = \mathbb{P}(X \leq x) = \sum_{n: \ x_n \leq x} p_n,
$$

sums the probabilities of all realizations smaller than or equal to $x$. Figure 1 shows an example of a discrete random variable $X$ with four values and a CDF as the sum of probabilities in the range $X \leq x$ shown in yellow.

<figure markdown>
  ![cdf](/assets/images/estimation_theory/light/cumulative_distributive_function.png#only-light){ width="300" }
  ![cdf](/assets/images/estimation_theory/dark/cumulative_distributive_function.png#only-dark){ width="300" }
  <figcaption>Figure 1 Cumulative distribution function (stab) </figcaption>
</figure>

## Expectation and Variance

The expectation of $X$ is:

$$
\mathbb{E} X = x_1 p_1 + \cdots + x_n p_n + \cdots = \sum_n x_n p_n,
$$

and is a weighted average of all possible realizations with their probabilities as weights.

The distribution and expectation of a function $g(X)$ are simple when $X$ is discrete: one applies function $g$ to realizations of $X$ and retains the probabilities:

$$
\mathbb{E}g(X) = g(x_1) p_1 + \cdots + g(x_n) p_n + \cdots = \sum_n g(x_n) p_n.
$$

The $k$'th moment of a discrete RV $X$ is defined as:

$$
m_k = \mathbb{E} X^k = \sum_n x^k_n p_n,
$$

and the $k$'th central moment is:

$$
\mu_k = \mathbb{E}(X - \mathbb{E}X)^k = \sum_n (x_n - \mathbb{E}X)^k p_n.
$$

The first moment is the expectation, $m_1 = \mathbb{E}X$ and the second central moment is the variance, $\mu_2 = \mathbb{V}\text{ar}(X) = \mathbb{E}(X - \mathbb{E}X)^2$. Hence, the variance for a discrete RV is:

$$
\mathbb{V}\text{ar}(X) = \sum_n (x_n - \mathbb{E}X)^2 p_n.
$$

!!! cnote "Expectation"

    For any set of random variables (both discrete and continuous) $X_1$, $X_2$, $\ldots$, $X_n$:

    $$
    \begin{align}
    \mathbb{E}(X_1 + X_2 + \cdots + X_n) = \mathbb{E}X_1 + \mathbb{E}X_2 + \cdots + \mathbb{E} X_n.
    \end{align}
    $$

    For any constant $c$, $\mathbb{E}(c) = c$ and $\mathbb{E}(cX) = c \mathbb{E} X$.

!!! cnote "Expectation of Independent Variables"

    If the RVs $X_1, X_2, \ldots, X_n$ are independent, then:

    $$
    \begin{align}
    \mathbb{E}(X_1 \cdot X_2 \cdot \ldots \cdot X_n) &= \mathbb{E}X_1 \cdot \mathbb{E} X_2 \cdot \ldots \mathbb{E}X_n \\
    \mathbb{V}\text{ar}(X_1 + X_2 + \cdots + X_n) &= \mathbb{V}\text{ar}X_1 + \mathbb{V}\text{ar}X_2 + \cdot + \mathbb{V}\text{ar} X_n.
    \end{align}
    $$

    For a constant $c$, $\mathbb{V}\text{ar}(c) = 0$, and $\mathbb{V}\text{ar}(cX) = c^2 \mathbb{V}\text{ar}X$.

## Moment-Generating Function

For a random variable $X$, the moment-generating function is defined as:

$$
m_X(t) = \mathbb{E}e^{tX} = \sum_n p_n e^{t x_n}.
$$

**When the moment-generating function exists, it uniquely determines the distribution**. The name "moment-generating" is motivated by the fact that the $k$'th derivative of $m_X(t)$ evaluated at $t = 0$ results in the $k$'th moment of $X$, i.e., $m^{(k)}_X(t) = \sum_n p_n x^k_n e^{t x_n}$, and $m^{(k)}_X(0) = \sum_n p_n x^k_n = \mathbb{E}X^k$.

Moment-generating functions satisfy:

$$
\begin{align}
m_{X + Y}(t) &= m_X(t) m_Y(t) \\
m_{cX}(t) &= m_X(ct).
\end{align}
$$

## Shannon Entropy

There are important properties of discrete distributions in which the realizations $x_1, x_2, \ldots, x_n$ are irrelevant and the focus is on the probabilities only, such as the measure of **entropy**. For a discrete random variable where the probabilities are $\mathbf{p} = (p_1, p_2, \ldots, p_n)$, the Shannon entropy is defined as:

$$
\mathbb{H}(\mathbf{p}) = -\sum_i p_i \log(p_i).
$$

!!! cnote "Entropy"
    Entropy is a measure of the uncertainty of a random variable and for finite discrete distributions achieves its maximum when the probabilities of realizations are equal, i.e., $\mathbf{p} = (1/n, 1/n, \ldots, 1/n)$.

## Jointly Distributed Discrete Random Variables

When two or more random variables constitute the coordinates of a random vector, their joint distribution is often of interest. For a random vector $(X, Y)$, the joint distribution function is defined via the probability of the event $\left\{ X \leq x, Y \leq y \right\}$:

$$
F(x, y) = \mathbb{P}(X \leq x, Y \leq y).
$$

Marginal CDFs $F_X$ and $F_Y$ are defined as follows: for $X$, $F_X(x) = F(x, \infty)$ and for $Y$, $F_Y(y) = F(\infty, y)$.

For a discrete bivariate random variable, the PMF is:

$$
p(x, y) = \mathbb{P}(X = x, Y = y), \quad \sum_{x, y} p (x, y) = 1,
$$

while for marginal random variables $X$ and $Y$, the PMFs are:

$$
p_X(x) = \sum_y p(x, y), \quad p_Y(y) = \sum_x p(x, y).
$$

The conditional distribution of $X$ given $Y = y$ is defined as:

$$
p_{X | Y} (x | y) = p(x, y) / p_Y(y),
$$

and similarly, the conditional distribution for $Y$ given $X = x$ is:

$$
p_{Y|X} (y|x) = p(x, y) / p_X (x).
$$

When $X$ and $Y$ are independent, the joint probability is equal to the product of the marginal probabilities:

$$
p(x, y) = \mathbb{P}(X = x, Y = y) = \mathbb{P}(X = x) \mathbb{P}(Y = y) = p_X(x) p_Y (y).
$$

For two independent random variables $X$ and $Y$:

$$
\mathbb{E} X Y = \mathbb{E} X \cdot \mathbb{E} Y.
$$

The **covariance** of two random variables $X$ and $Y$ is defined as:

$$
\mathbb{Cov}(X, Y) = \mathbb{E} \left[(X - \mathbb{E}X) \cdot (Y - \mathbb{E}Y) \right] = \mathbb{E}XY - \mathbb{E}X \cdot \mathbb{E} Y.
$$

For a discrete random vector $(X, Y)$, $\mathbb{E}XY = \sum_x \sum_y xy p (x, y)$, and the covariance is expressed as:

$$
\mathbb{Cov}(X, Y) = \sum_x \sum_y xyp(x, y) - \sum_x xp_X(x) \sum_y y p_Y(y).
$$

!!! cnote "Covariance Properties"

    1. $\mathbb{Cov}(X, X) = \mathbb{V}\text{ar}(X)$
    2. $\mathbb{Cov}(X, Y) = \mathbb{Cov}(Y, X)$
    3. $\mathbb{Cov}(aX + bY, Z) = a \mathbb{Cov}(X, Z) + b \mathbb{Cov}(Y, Z)$

The **correlation** between random variables $X$ and $Y$ is the covariance normalized by the standard deviations:

$$
\mathbb{Corr}(X, Y) = \frac{\mathbb{Cov}(X, Y)}{\sqrt{\mathbb{V}\text{ar} X \mathbb{V}\text{ar} Y}}.
$$
