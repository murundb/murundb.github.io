# Vector Norms

## Definitions

A **vector norm** on $\mathbb{R}^n$ is a function $f: \ \mathbb{R}^n \rightarrow \mathbb{R}$ that satisfies the following three properties:

1. $f$ is nonnegative: $f(\mathbf{x}) \geq 0$, $\forall \mathbf{x} \in \mathbb{R}^n$.
2. $f$ satisfies the triangle inequality: $f(\mathbf{x} + \mathbf{y}) \leq f(\mathbf{x}) + f(\mathbf{y})$, for all $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$.
3. $f$ is homogeneuous: $f( t \mathbf{x}) = |t| f(\mathbf{x})$, for all $\mathbf{x} \in \mathbb{R}^n$ and $t \in \mathbb{R}$.
4. $f$ is definite: $f(\mathbf{x}) = 0$ if and only if $\mathbf{x} = \mathbf{0}$.

**p-norms** are defined as:

$$
||\mathbf{x}||_p = \left( |x_1|^p + \cdots + |x_n|^p \right)^{\frac{1}{p}}, \quad p \geq 1.
$$

The 1, 2, and infinity norms are defined as:

$$
\begin{alignat}{2}
&||\mathbf{x}||_1 &&= |x_1| + \cdots + |x_n|, \\
&||\mathbf{x}||_2 &&= \left( |x_1|^2 + \cdots + |x_n|^2 \right)^\frac{1}{2} = \left( \mathbf{x}^T \mathbf{x} \right)^{\frac{1}{2}}, \\
&||\mathbf{x}||_\infty &&= \max_{1 \leq i \leq n} |x_i|.
\end{alignat}
$$

## Properties

!!! cnote "Property 1. *Cauchy-Schwartz* inequality"

    $$
    |\mathbf{x}^T \mathbf{y}| \leq ||\mathbf{x}||_2 ||\mathbf{y}||_2.
    $$

!!! cnote "Property 2. Preservation"
    2-norm is preserved under orthogonal transformation. Let $\mathbf{Q} \in \mathbb{R}^{n \times n}$ be orthogonal and $\mathbf{x} \in \mathbb{R}^n$. Then:

    $$
    ||\mathbf{Q} \mathbf{x}||^2_2 = \left(\mathbf{Q} \mathbf{x} \right)^T \left(\mathbf{Q} \mathbf{x} \right) = \mathbf{x}^T \mathbf{x} = || \mathbf{x} ||^2_2.
    $$

## Absolute and Relative Errors

Let $\hat{\mathbf{x}} \in \mathbb{R}^n$ be an approximation of $\mathbf{x} \in \mathbb{R}^n$. For a given vector norm $|| \cdot ||$, the **absolute error** in $\hat{\mathbf{x}}$ is defined as:

$$
\boldsymbol{\epsilon}_{abs} = || \hat{\mathbf{x}} - \mathbf{x} ||.
$$

If $\mathbf{x} \neq \mathbf{0}$, then the **relative error** in $\hat{\mathbf{x}}$ is defined as:

$$
\boldsymbol{\epsilon}_{rel} = \frac{|| \hat{\mathbf{x}} - \mathbf{x} ||}{||\mathbf{x}||}.
$$

## Convergence

A sequence $\left\{ \mathbf{x}^{(k)} \right\}$ of $n$-vectors **converges** to $\mathbf{x}$ if:

$$
\lim_{k \rightarrow \infty} ||\mathbf{x}^{(k)} - \mathbf{x} || = 0.
$$