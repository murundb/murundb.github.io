# Multiple Random Variables

## Joint Distribution

When two or more random variables constitute the coordinates of a random vector, their joint distribution is often of interest. For a random vector $(X, Y)$, the joint distribution function is defined via the probability of the event $\left\{ X \leq x, Y \leq y \right\}$:

$$
F_{XY}(x, y) = F(x, y) =  \mathbb{P}(X \leq x, Y \leq y).
$$

!!! cnote "Joint Distribution Properties"
    $$
    \begin{align}
    F_(x, y) &\in \left[0, 1 \right] \\
    F(x, -\infty) = F(-\infty, y) &= 0 \\
    F(\infty, \infty) &= 1 \\
    F(a, c) &\leq F(b, d) \quad \text{if} \ a \leq b \ \text{and} \ c \leq d\\
    \mathbb{P}(a < X \leq b, c < y \leq d) &= F(b, d) + F(a, c) - F(a, d) - F(b, c) \\
    F(x, \infty) = F(x) \\
    F(\infty, y) = F(y).
    \end{align}
    $$

The last two are the marginal CDFs $F_X$ and $F_Y$


### Jointly Distributed Discrete Random Variables

For a discrete bivariate random variable, the PMF is:

$$
p_{XY}(x, y) = \mathbb{P}(X = x, Y = y), \quad \sum_{x, y} p_{XY} (x, y) = 1,
$$

while for marginal random variables $X$ and $Y$, the PMFs are:

$$
p_X(x) = \sum_y p_{XY}(x, y), \quad p_Y(y) = \sum_x p_{XY}(x, y).
$$

The conditional distribution of $X$ given $Y = y$ is defined as:

$$
p_{X | Y} (x | y) = p_{XY}(x, y) / p_Y(y),
$$

and similarly, the conditional distribution for $Y$ given $X = x$ is:

$$
p_{Y|X} (y|x) = p(x, y) / p_X (x).
$$

When $X$ and $Y$ are independent, the joint probability is equal to the product of the marginal probabilities:

$$
p_{XY}(x, y) = \mathbb{P}(X = x, Y = y) = \mathbb{P}(X = x) \mathbb{P}(Y = y) = p_X(x) p_Y (y).
$$

For two independent random variables $X$ and $Y$:

$$
\mathbb{E} X Y = \mathbb{E} X \cdot \mathbb{E} Y.
$$

The **covariance** of two random variables $X$ and $Y$ is defined as:

$$
C_{XY} = \mathbb{E} \left[(X - \mathbb{E}X) \cdot (Y - \mathbb{E}Y) \right] = \mathbb{E}XY - \mathbb{E}X \cdot \mathbb{E} Y.
$$

For a discrete random vector $(X, Y)$:

$$
\mathbb{E}XY = \sum_x \sum_y xy p_{XY} (x, y),
$$

and the covariance is expressed as:

$$
C_{XY} = \sum_x \sum_y xyp_{XY}(x, y) - \sum_x xp_X(x) \sum_y y p_Y(y).
$$

!!! cnote "Covariance Properties"

    1. $C_{XX} = \mathbb{V}\text{ar}(X)$
    2. $C_{XY} = C_{YX}$
    3. $C_{aX + bY, Z} = a C_{XZ} + b C_{YZ}$

The **correlation** between random variables $X$ and $Y$ is the covariance normalized by the standard deviations:

$$
R_{XY} = \frac{C_{XY}}{\sqrt{\mathbb{V}\text{ar} X \mathbb{V}\text{ar} Y}} = \frac{C_{XY}}{\sigma_X \sigma_Y}.
$$

### Joint Distribution of Two Continuous Random Variables

Two random variables $X$ and $Y$ are jointly distributed if there exists a non-negative function $f_{XY}(x, y)$ such that for any two-dimensional domain $D$:

$$
\mathbb{P}((X, Y) \in D) = \int \int_{D} f_{XY}(x, y) dxdy.
$$

When such a two-dimensional density $f_{XY}(x, y)$ exists, it is a repeated partial derivative of the cumulative distribution function $F_{XY}(x, y) = \mathbb{P}(X \leq x, Y \leq y)$:

$$
f_{XY}(x, y) = \frac{\partial^2 F_{XY}(x, y)}{\partial x \partial y}.
$$

The marginal densities for $X$ and $Y$ are:

$$
\begin{align}
f_X(x) &= \int^{\infty}_{-\infty} f_{XY}(x, y)dy \\
f_Y(y) &= \int^{\infty}_{-\infty} f_{XY}(x, y)dx.
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