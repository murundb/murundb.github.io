# Discrete Uniform Distribution

## Definition

Discrete uniform distribution is a symmetric probability distribution wherein a finite number of values are equally likely to be observed; every one of $n$ values has equal probability of $1 / n$. A random variable $X$ that follows this distribution is called a discrete random variable.

The discrete uniform distribution itself is inherently non-parametric. However, it is usually represented by an interval $\left[a, b \right]$, so that $a$ and $b$ become the main parameters of the distribution:

$$
\mathcal{U}(a, b).
$$

The number of elements in the interval $\left[a, b \right]$ is $n = b - a + 1$. The CDF of the discrete uniform distribution is:

$$
F(k; a, b) = \frac{\lfloor k \rfloor - a + 1}{b - a + 1},
$$

for $\forall k \in \left[a, b \right]$.

## Mean and Variance

Recall that the moment generating function for discrete random variables is:

$$
m_X(t) = \mathbb{E}e^{tX} = \sum_n p_n e^{t x_n}.
$$

Then the expected value of the discrete uniform distribution is:

$$
\mathbb{E}X = \left. \frac{d m_X(t)}{dt} \right|_{t = 0} = \frac{1}{n} \frac{(a + b)n}{2} = \frac{a + b}{2}.
$$

The variance is the second moment of inertia:

$$
\mathbb{Var}X = \left. \frac{d^2 m_X(t)}{dt^2} \right|_{t = 0} = \frac{n^2 - 1}{12}.
$$

## Usage

The theoretical model for random sampling is the discrete uniform distribution.
