# Uniform Distribution

## Definition

A continuous random variable $X$ has a uniform $\mathcal{U}(a, b)$ distribution if its density is given by:

$$
f_X(x) =
\begin{cases}
\begin{alignat}{2}
&\frac{1}{b - a}, \quad &&a \leq x \leq b, \\
&0, \quad &&\text{else}.
\end{alignat}
\end{cases}
$$

The CDF of X is given by:

$$
F_X(x) =
\begin{cases}
\begin{alignat}{2}
&0, \quad && x < a, \\
&\frac{x - a}{b - a}, \quad &&a \leq x \leq b, \\
&1, \quad && x > b.
\end{alignat}
\end{cases}
$$

## Mean and Variance

Recall that for a continuous random variable $X$, the moment-generating function is defined as:

$$
\begin{align}
m_X(t) &= \mathbb{E}e^{tX} \\
&= \int^b_a e^{tx} f(x) dx \\
&= \left[   \right]
e^{tx} f(x)
\end{align}
$$

Then the expectation of the uniform distribution is:

$$
\mathbb{E}X = \left. \frac{d m_X(t)}{dt} \right|_{t = 0} = e^{tx} f(x) =

$$

The variance is the central second moment:

$$
\begin{align}
\mathbb{V}\text{ar}X &= \mathbb{E}X^2 - (\mathbb{E}X)^2 \\
&= \left. \frac{d^2 m_X(t)}{dt^2} \right|_{t = 0} - (\mathbb{E}X)^2 \\
&= \frac{n^2 - 1}{12}.
\end{align}
$$
