# Transformations of Random Variables

## Transformations of Discrete and Continuous RVs

When a random variable with known density is transformed, the result is a random variable as well.

For a discrete random variable $X$, the PMF of a function $Y = g(X)$ is simply the table:

|  $g(X)$  | $g(x_1), \ g(x_2), \ \ldots, \ g(x_n), \ \ldots$ |
| -------- | ------------------------------------------------ |
|  Prob    | $p_1, \ p_2, \ \ldots, \ p_n, \ \ldots$          |

in which only realizations of $X$ are transformed while **the probabilities are kept unchanged**.

Transformation of acontinuous random variable is more complex. Let $X$ and $Y$ be two random variables, related to one another by a monotonic function $g$ and its inverse $h$, i.e., $h = g^{-1}$:

$$
\begin{align}
Y &= g(X) \\
X &= g^{-1}(Y) = h(Y).
\end{align}
$$
 
Suppose that $X$ has a PDF $f_X(x)$. Then the density of random variable $Y = g(X)$ can be computed as:

$$
\begin{alignat}{2}
\mathbb{P}(X \in \left[x, x + dx \right]) &= \mathbb{P}(Y \in \left[y, y + dy \right]), \quad (dx > 0) \\
\int^{x + dx}_{x} f_X(z) dz &=
\begin{cases}
\int^{y + dy}_y f_Y(z) dz \quad && \text{if} \ dy > 0 \\
-\int^{y + dy}_y f_Y(z) dz \quad && \text{if} \ dy < 0 \\
\end{cases} \\
f_X(x) dx &= f_Y(y) |dy| \\
f_Y(y) &= \left|\frac{dx}{dx} \right| f_X(h(y)) \\
&= f_X(h(y)) |h'(y)|,
\end{alignat}
$$

where we have assumed that $dx$ and $dy$ are small.

If $g$ is not one-to-one, but has $k$ one-to-one inverse branches, $h_1, h_2, \ldots, h_k$, then:

$$
f_Y(y) = \sum^k_{i = 1} f(h_i(y)) |h'_i(y)|.
$$

An example of a function which is not one-to-one is $g(x) = x^2$, for which inverse branches are $h_1(y) = \sqrt{y}$ and $h_2(y) = -\sqrt{y}$.

## Examples

### Linear Mapping

Suppose $X \sim \mathcal{N}(\bar{X}, \sigma^2_X)$ and $Y = g(X) = aX + b$, where $a, b \in \mathbb{R}$ and $a \neq 0$. 

The inverse mapping function and its Jacobian are:

$$
\begin{align}
x &= h(y) = (y - b) / a \\
h'(y) &= 1 / a \\
\end{align}
$$

Then the PDF of $Y$, $f_Y(y)$ can be computed as:

$$
\begin{align}
f_Y(y) &= f_X(h(y)) |h'(y)| =
\frac{1}{\sqrt{2 \pi} \sigma_X} \exp \left\{ \frac{-\left[(y - b)/a - \bar{X} \right]^2}{2 \sigma^2_X} \right\} \left| \frac{1}{a} \right|.
\end{align}
$$

In summary, the RV $Y$ will be Gaussian with a mean and variance:

$$
\begin{align}
\bar{Y} &= a \bar{X} + b \\
\sigma^2_Y &= a^2 \sigma^2_X.
\end{align}
$$

### Quadratic Mapping

Suppose $X \sim \mathcal{N}(0, \sigma^2_X)$ and $Y = g(X) = X^3$. The inverse mapping function and its Jacobian are:

$$
\begin{align}
y &= h(y) = y^{1 / 3} \\
h'(y) &= \frac{y^{-2/3}}{3} \\
\end{align}
$$

Then the PDF of $Y$, $f_Y(y)$ can be computed as:

$$
\begin{align}
f_Y(y) &= f_X(h(y)) |h'(y)| =
\frac{y^{-2/3}}{3} \frac{1}{\sqrt{2\pi} \sigma_X} \exp \left\{-y^{2/3} / (2 \sigma^2_X) \right\}.
\end{align}
$$

In summary, $g$ converts a Gaussian RVt oa non-Gaussian RV.

### Square Root Mapping

Suppose $X \sim \text{Exp}(\lambda)$ and $Y = \sqrt{X}$. The inverse mapping function and its Jacobian are:

$$
\begin{align}
x &= h(y) = y^2 \\
h'(y) &= 2y.
\end{align}
$$

Then the PDF of $Y$, $f_Y(y)$ can be computed as:

$$
\begin{align}
f_Y(y) &= f_X(h(y)) |h'(y)| \\
= \lambda e^{-\lambda y^2} \cdot 2y, \quad y \geq 0, \ \lambda > 0,
\end{align}
$$

which is known as the **Rayleigh** distribution.

An alternative approach is to consider the CDF:

$$
F_Y(y) = \mathbb{P}(Y \leq y) = \mathbb{P}(\sqrt{X} \leq y) = \mathbb{P}(X \leq y^2) = 1 - e^{-\lambda y^2}.
$$

Then the PDF is:

$$
f_Y(y) = F'_Y(y) = 2\lambda y e^{-\lambda y^2}, \quad y \geq 0, \ \lambda > 0.
$$

## Mean and Variance

The distribution of a transformation can be often quite messy and lacks closed form. Sometimes only the mean and variance may be needed.

If $X$ is a random variable with $\mathbb{E}X = \mu$ and $\mathbb{V}\text{ar} X = \sigma^2$, then for a function $Y = g(X)$, the following approximation holds:

$$
\begin{align}
\mathbb{E} Y &\approx g(\mu) + \frac{1}{2}g''(\mu) \sigma^2 \\
\mathbb{V}\text{ar} Y &\approx (g'(\mu))^2 \sigma^2.
\end{align}
$$

If $n$ independent random variables are transformed as $Y = g(X_1, X_2, \ldots, X_n)$, then:

$$
\begin{align}
\mathbb{E} Y &\approx g(\mu_1, \ldots, \mu_n) + \frac{1}{2} \sum^n_{i = 1} \frac{\partial^2 g}{\partial x^2} (\mu_1, \ldots, \mu_n) \sigma^2_i \\
\mathbb{V}\text{ar} Y &\approx \sum^n_{i = 1} \left( \frac{\partial g}{\partial x_i}(\mu_1, \ldots, \mu_n) \right)^2 \sigma^2_i,
\end{align}
$$

where $\mathbb{E} X_i = \mu_i$ and $\mathbb{V}\text{ar}X_i = \sigma^2_i$.

Note that if $X_1, \ldots, X_n$ are correlated, then additional covariance term must be added for the variance computation:

$$
2 \sum_{1 \leq i < j \leq n} \frac{\partial^2 g}{\partial x_i \partial x_j}(\mu_1, \ldots, \mu_n) C_{X_i, X_j}.
$$
