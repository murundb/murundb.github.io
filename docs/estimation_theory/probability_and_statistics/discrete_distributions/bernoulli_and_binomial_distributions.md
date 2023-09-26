# Bernoulli and Binomial Distributions

## Definition

A simple Bernoulli random variable $Y$ is a dichotomous with $\mathbb{P}(Y = 1) = p$ and $\mathbb{P}(Y = 0) = 1 - p$ for some  $0 \leq p \leq 1$ and is denoted as $Y \sim \mathcal{B}er(p)$.

Suppose that an experiment consists of $n$ independent trials $(Y_1, \ldots, Y_n)$ in which two outcomes are possible (e.g., success or failure), with $\mathbb{P}(\text{success}) = \mathbb{P}(Y = 1) = p$ for each trial. If $X = x$ is defined as the number of successes (out of $n$), then $X = Y_1 + Y_2 + \cdots + Y_n$, and there are $\left(\begin{array}{c}n \\ x \end{array} \right)$ arrangements of $x$ successes and $n - x$ failures, each having the same probability $p^x(1 - p)^{n - x}$. $X$ is a **binomial** random variable with the PMF:

$$
p_X(x) = \left(\begin{array}{c}n \\ x \end{array} \right) p^x(1 - p)^{n - x}, \ quad x = 0, 1, \ldots, n.
$$

