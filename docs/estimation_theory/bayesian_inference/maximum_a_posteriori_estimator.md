# Maximum a Posteriori Estimator

## Introduction

Given random variable $X$, such as poses and/or landmarks, and the measurements $Z$, we are interested in finding $X$ given $Z$. The maximum a posteriori (MAP) estimator is defined as:

$$
\begin{align}
\hat{X}^{MAP} &= \arg \max_{X} p(X | Z) \\
&= \arg \max_{X} \frac{p(Z | X) p(X)}{p (Z)} \\
&= \arg \max_{X} L(X; Z) p (X),
\end{align}
$$

where $L(X; Z)$ is the likelihood of the states $X$ given the measurements $Z$ and is defined as any function proportional to $p(Z | X)$:

$$
L(X; Z) \propto p(Z | X).
$$

The notation $L(X; Z)$ emphasizes the fact that **the likelihood is a function of $X$ and not $Z$**, which acts merely as a paremeter in this context.

