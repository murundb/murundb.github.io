# Continuous Random Variables

## Probability Density Function

Continous random variables take values within an interval $(a, b)$ on $\mathbb{R}$. The **probability density function** (PDF) $f(x)$ fully specifies the variable. The PDF is nonnegative, $f(x) \geq 0$, and integrates to 1, $\int_{\mathbb{R}} f(x) dx = 1$. 

The probability that a random variable $X$ takes a value in an interval $(a, b)$ is:

$$
\mathbb{P}\left[X \in (a, b) \right] = \int^b_a f(x) dx.
$$

## Cumulative Distribution Function

The cumulative distribution function (CDF) is:

$$
F(x) = \mathbb{P}(X \leq x) = \int^x_{-\infty} f(t) dt.
$$

In terms of the CDF, $\mathbb{P}\left[X \in (a, b) \right] = F(b) - F(a)$.

## Expectation and Variance

The expectation of $X$ is:

$$
\mathbb{E} X = \int_{\mathbb{R}} xf(x)dx.
$$

The expectation of a function of a random variable $g(X)$ is:

$$
\mathbb{E}g(X) = \int_{\mathbb{R}} g(x) f(x) dx.
$$

The $k$'th moment of a continuous RV $X$ is defined as:

$$
m_k = \mathbb{E} X^k = \int_{\mathbb{R}} x^k f(x) dx,
$$

and the $k$'th central moment is:

$$
\mu_k = \mathbb{E}(X - \mathbb{E}X)^k = \int_{\mathbb{R}} (x - \mathbb{E} X)^k f(x) dx.
$$

The first moment is the expectation, $m_1 = \mathbb{E}X$ and the second central moment is the variance, $\mu_2 = \mathbb{V}\text{ar}(X) = \mathbb{E}(X - \mathbb{E}X)^2$.

## Moment-Generating Function

For a continuous random variable $X$, the moment-generating function is defined as:

$$
m_X(t) = \mathbb{E}e^{tX} = \int_{\mathbb{R}} e^{tx} f(x) dx.
$$

Since $m^{(k)}(t) = \int_{\mathbb{R}} x^k e^{tx} f(x) dx$, $\mathbb{E}X^k = m^{(k)}(0)$.

## Joint Distribution of Two Continuous Random Variables

Two random variables $X$ and $Y$ are jointly distributed if there exists a non-negative function $f(x, y)$ such that for any two-dimensional domain $D$:

$$
\mathbb{P}((X, Y) \in D) = \int \int_{D} f(x, y) dxdy.
$$

When such a two-dimensional density $f(x, y)$ exists, it is a repeated partial derivative of the cumulative distribution function $F(x, y) = \mathbb{P}(X \leq x, Y \leq y)$:

$$
f(x, y) = \frac{\partial^2 F(x, y)}{\partial x \partial y}.
$$

The marginal densities for $X$ and $Y$ are:

$$
\begin{align}
f_X(x) &= \int^{\infty}_{-\infty} f(x, y)dy \\
f_Y(y) &= \int^{\infty}_{-\infty} f(x, y)dx.
\end{align}
$$

The conditional distributions of $X$ when $Y = y$ and of $Y$ when $X = x$ are:

$$
\begin{align}
f(x|y) &= \frac{f(x, y)}{f_Y(y)} \\
f(y|x) &= \frac{f(x, y)}{f_X(x)} \\
f(x, y) &= f(x | y)f_Y(y) = f(y|x)f_X(x).
\end{align}
$$

If $X$ and $Y$ are independent:

$$
f(x, y) = f_X(x) f_Y(y).
$$

The covariance and correlation for $X$ and $Y$ are:

$$
\begin{align}
\mathbb{C}\text{ov}(X, Y) &=
\mathbb{E}XY - \mathbb{E}X \cdot \mathbb{E} Y \\
\mathbb{C}\text{orr}(X, Y) &= 
\frac{\mathbb{C}\text{ov}(X, Y)}{\sqrt{\mathbb{V}\text{ar}(X) \cdot \mathbb{V}\text{ar}(Y)}},
\end{align}
$$

where $\mathbb{E}XY = \int_{\mathbb{R}^2} x y f(x, y) dx dy$.

!!! cnote "Iterated Expectation and Total Variance Rules"
    Conditional expectation of $Y$ given $\left\{ X = x \right\}$ is simply the expectation with respect to the conditional distribution:

    $$
    \mathbb{E}(Y|X = x) = \int_{\mathbb{R}} yf(y | x) dy.
    $$

    $\mathbb{E}Y|X$ is a random variable for which:

    $$
    \begin{align}
    \mathbb{E}Y &= \mathbb{E}(\mathbb{E}|X) \\
    \mathbb{V}\text{ar}Y &= \mathbb{V}\text{ar}(\mathbb{E}Y|X) + \mathbb{E} (\mathbb{V}\text{ar}Y|X).
    \end{align}
    $$
