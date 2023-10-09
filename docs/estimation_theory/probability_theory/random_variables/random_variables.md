# Random Variables

## Definition

A **random variable** (RV) is a variable whose numerical value is determined by the outcome of a random experiment. Thus, a random variable is a mapping from the sample space of an experiment, $S$, to a set of real numbers. For example, the roll of a die can be viewed as a RV if we map the appearance of one dot on the die to the output one, the appearance of two dots on the die to the output two, and so on.

Note that the outcome of a particular experiment is not RV (e.g., after we throw the die, the value of the die is no longer RV since it becomes certain) but a **realization** of the RV.

RV can be either discrete or continuous.

## Cumulative Distribution Functions

For either discrete or continuous random variable $X$, its cumulative distribution function (CDF) is defined as:

$$
F_X(x) = \mathbb{P}(X \leq x).
$$

It is the probability of all realizations smaller than or equal to $x$.

!!! cnote "CDF Properties"
    $$
    \begin{align}
    F_X(x) &\in \left[0, 1 \right] \\
    F_X(-\infty) &= 0 \\
    F_X(\infty) &= 1 \\
    F_X(a) &\leq F_X(b) \quad \text{if} \ a \leq b \\
    \mathbb{P}(a < X \leq b) &= F_X(b) - F_X(a).
    \end{align}
    $$

### Discrete CDF

For discrete RV $X$, its CDF is defined as:

$$
F_X(x) = \mathbb{P}(X \leq x) = \sum_{n: \ x_n \leq x} p_n,
$$

sums the probabilities of all realizations smaller than or equal to $x$. Figure 1 shows an example of a discrete random variable $X$ with four values and a CDF as the sum of probabilities in the range $X \leq x$ shown in yellow.

<figure markdown>
  ![cdf](/assets/images/estimation_theory/light/cumulative_distributive_function.png#only-light){ width="300" }
  ![cdf](/assets/images/estimation_theory/dark/cumulative_distributive_function.png#only-dark){ width="300" }
  <figcaption>Figure 1 Cumulative distribution function (stab) </figcaption>
</figure>


### Continuous CDF

For a continous RV $X$, its CDF is defined as:

$$
F_X(x) = \mathbb{P}(X \leq x) = \int^x_{-\infty} f_X(t) dt,
$$

In terms of the CDF, $\mathbb{P}\left[X \in (a, b) \right] = F_X(b) - F_X(a)$.

## Probability Distribution Functions

The **probability distribution** of a random variable $X$ is a table, rule, assignment, or a formula that assigns probabilities to realizations of $X$, or sets of realizations.

### Probability Mass Function

The probability distribution of a discrete random variables is called the **probability mass function** (PMF).

Let random variable $X$ take discrete values $x_1, x_2, \ldots, x_n, \ldots$ with probabilities $p_1, p_2, \ldots, p_n, \ldots$, $\sum_n p_n = 1$. The PMF is simply an assignment of probabilities to the realizations of $X$ and is given by the following table:

|  $X$  | $x_1, \ x_2, \ \ldots, \ x_n, \ \ldots$ |
| ----- | --------------------------------------- |
|  Prob | $p_1, \ p_2, \ \ldots, \ p_n, \ \ldots$ |

Note that the discrete random variables can have an infinite number of realizations, as long as the infinite sum of the probabilities converges to 1.

### Probability Density Function

Continous random variables take values within an interval $(a, b)$ on $\mathbb{R}$. The **probability density function** (PDF) $f_X(x)$ fully specifies the RV $X$. The PDF is nonnegative, $f_X(x) \geq 0$, and integrates to 1, $\int_{\mathbb{R}} f_X(x) dx = 1$.

The probability that a random variable $X$ takes a value in an interval $(a, b)$ is:

$$
\mathbb{P}\left[X \in (a, b) \right] = \int^b_a f_X(x) dx.
$$

The PDF of a random variable $X$ is the derivative of its CDF:

$$
f_X(x) = \frac{dF_X(x)}{dx}.
$$

## Moment-Generating Function

For a random variable $X$, the moment-generating function is defined as:

$$
m_X(t) = \mathbb{E}e^{tX}.
$$

Moment-generating functions satisfy:

$$
\begin{align}
m_{X + Y}(t) &= m_X(t) m_Y(t) \\
m_{cX}(t) &= m_X(ct).
\end{align}
$$

**When the moment-generating function exists, it uniquely determines the distribution**.

### Discrete RV

For a discrete random variable $X$, the moment-generating function is defined as:

$$
m_X(t) = \mathbb{E}e^{tX} = \sum_n p_n e^{t x_n}.
$$

The name "moment-generating" is motivated by the fact that the $k$'th derivative of $m_X(t)$ evaluated at $t = 0$ results in the $k$'th moment of $X$, i.e., $m^{(k)}_X(t) = \sum_n p_n x^k_n e^{t x_n}$, and $m^{(k)}_X(0) = \sum_n p_n x^k_n = \mathbb{E}X^k$.

### Continuous RV

For a continuous random variable $X$, the moment-generating function is defined as:

$$
m_X(t) = \mathbb{E}e^{tX} = \int_{\mathbb{R}} e^{tx} f_X(x) dx.
$$

Since $m^{(k)}(t) = \int_{\mathbb{R}} x^k e^{tx} f_X(x) dx$, $\mathbb{E}X^k = m^{(k)}(0)$.

## Expectation and Variance

### Excpectation and Variance of a Discrete RV

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

### Expectation and Variance of a Continuous RV

The expectation of a continuous RV $X$ is:

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

## Shannon Entropy

There are important properties of discrete distributions in which the realizations $x_1, x_2, \ldots, x_n$ are irrelevant and the focus is on the probabilities only, such as the measure of **entropy**. For a discrete random variable where the probabilities are $\mathbf{p} = (p_1, p_2, \ldots, p_n)$, the Shannon entropy is defined as:

$$
\mathbb{H}(\mathbf{p}) = -\sum_i p_i \log(p_i).
$$

!!! cnote "Entropy"
    Entropy is a measure of the uncertainty of a random variable and for finite discrete distributions achieves its maximum when the probabilities of realizations are equal, i.e., $\mathbf{p} = (1/n, 1/n, \ldots, 1/n)$.

## Discrete RV Example

Randomly observed circular cells on a plate have a diameter $D$ that is a random variable with the following PMF:

|  $D$  | 8   | 12  | 16  |
| ----- | --- | --- | --- |
|  Prob | 0.4 | 0.3 | 0.3 |

### Finding the CDF for D

$$
F_D(d) =
\begin{align}
\begin{cases}
0 \quad &d < 8 \\
0.4 \quad &8 \leq d < 12 \\
0.7 \quad &12 \leq d < 16 \\
1.0 \quad &16 \geq d
\end{cases}
\end{align}
$$

### Finding the PMF for the Area of the Cell

The area of the cell is $A(D) = \frac{D^2 \pi}{4}$. Then we have:

$$
\begin{alignat}{2}
A(8) &= 16, \pi &&\quad p_{D = 8} = 0.4 \\
A(12) &= 36, \pi &&\quad p_{D = 12} = 0.3  \\
A(16) &= 64, \pi &&\quad p_{D = 16} = 0.3.\\
\end{alignat}
$$

The expectation of $A$ and $D$ are:

$$
\begin{align}
\mathbb{E} A &= A(8) p_{D = 8} + A(12) p_{D = 12} + A(16) p_{D = 16} = 114.3540 \\
\mathbb{E} D &= 8 p_{D = 8} + 12 p_{D = 12} + 16 p_{D = 16} = 11.6.
\end{align}
$$

Note that the expectation is a linear operator.

### Finding the Variance of A

$$
\mathbb{V}\text{ar}A = \mathbb{E}A^2 - (\mathbb{E}A)^2 = 1720 \pi^2 - 1324.96 \pi^2 = 395.04 \pi^2,
$$

since:

$$
\begin{alignat}{2}
A^2(8) &= 16^2, \pi^2 &&\quad p_{D = 8} = 0.4 \\
A^2(12) &= 36^2, \pi^2 &&\quad p_{D = 12} = 0.3  \\
A^2(16) &= 64^2, \pi^2 &&\quad p_{D = 16} = 0.3.\\
\end{alignat}
$$

### Finding the  Moment-Generating Functions

Recall that the moment-generating function for discrete random variables is:

$$
m_X(t) = \mathbb{E}e^{tX} = \sum_n p_n e^{t x_n}.
$$

For $D$ and $A$:

$$
\begin{align}
m_D(t) &= \mathbb{E}e^{tD} = 0.4 e^{8t} + 0.3 e^{12t} + 0.3 e^{16t} \\
m_A(t) &= \mathbb{E}e^{tA} = 0.4 e^{16 \pi t} + 0.3 e^{36 \pi t} + 0.3 e^{64 \pi t}.
\end{align}
$$

Recall that the $k$'th derivative of the moment-generating function evaluated at $t = 0$ yields to the $k$'th moment of the random variable. Using this fact, the expectation and variance can be computed.

### Finding the Posterior

It is known that a cell with $D > 8$ is observed. To find the probability of $D = 12$ taking into this information, we use the conditional probability rule:

$$
\mathbb{P}(D=12 | D > 8) = \frac{\mathbb{P}(D=12 \cdot D > 8)}{\mathbb{P}(D > 8)} = \mathbb{P} (D= 12) / \mathbb{P} (D > 8) = 1.2.
$$
