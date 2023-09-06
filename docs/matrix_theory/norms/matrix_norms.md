# Matrix Norms

## Definitions

Since $\mathbf{R}^{m \times n}$ is isomorphic to $\mathbf{R}^{mn}$, the definition of a matrix norm should be equivalent to the definition of a vector norm.  A function $f: \ \mathbb{R}^{m \times n} \rightarrow \mathbb{R}$ is a matrix norm if the following holds:

1. $f$ is nonnegative: $f(\mathbf{A}) \geq 0$, $\forall \mathbf{A} \in \mathbb{R}^{m \times n}$.
2. $f$ satisfies the triangle inequality: $f(\mathbf{A} + \mathbf{B}) \leq f(\mathbf{A}) + f(\mathbf{B})$, for all $\mathbf{A}, \mathbf{B} \in \mathbb{R}^{m \times n}$.
3. $f$ is homogeneuous: $f( t \mathbf{A}) = |t| f(\mathbf{A})$, for all $\mathbf{A} \in \mathbb{R}^{m \times n}$ and $t \in \mathbb{R}$.
4. $f$ is definite: $f(\mathbf{A}) = 0$ if and only if $\mathbf{A} = \mathbf{0}$.

The **Frobenius norm** is defined as:

$$
||\mathbf{A}||_F = \sqrt{\sum^m_{i = 1} \sum^n_{j = 1} |A_{ij}|^2}.
$$

The p-norm is defined as:

$$
||\mathbf{A}||_p = \sup_{x \neq 0} \frac{||\mathbf{A} \mathbf{x}||_p}{||\mathbf{x}||_p}.
$$

## Matrix 2-Norm

!!! cnote "**Theorem**. Matrix 2-Norm"
    If $\mathbf{A} \in \mathbb{R}^{m \times n}$, then there exists a unit 2-norm n-vector $\mathbf{z}$ such that:

    $$
    \mathbf{A}^T \mathbf{A} \mathbf{z} = \mu^2 \mathbf{z},
    $$

    where $\mu = ||\mathbf{A}||_2$.

The theorem implies that $||\mathbf{A}||^2_2$ is a zero of $p(\lambda) = \text{det} \left( \mathbf{A}^T \mathbf{A} - \lambda \mathbf{I} \right)$. In particular:

$$
||\mathbf{A}||_2 = \sqrt{\lambda_{max} \left( \mathbf{A}^T \mathbf{A} \right)}.
$$
