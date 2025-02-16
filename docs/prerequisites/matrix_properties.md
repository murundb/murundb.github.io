# Matrix Properties

## Quadratic Forms

The (scalar) function of the real vector $\mathbf{x} \in \mathbb{R}^n$:

$$
\begin{align}
q = 
\mathbf{x}^T \mathbf{A} \mathbf{x} &= 
\left[
\begin{array}{ccc}
x_1 & \ldots & x_n
\end{array}
\right]
\left[
\begin{array}{ccc}
A_{11} & \ldots & A_{1n} \\ 
\vdots & \ddots & \vdots \\
A_{n1} & \ldots & A_{nn}
\end{array}
\right]
\left[
\begin{array}{c}
x_1 \\
\vdots \\
x_n
\end{array}
\right] \\
&= 
\left[
\begin{array}{ccc}
\sum_i x_i A_{i1} & \ldots & \sum_i x_i A_{in}
\end{array}
\right]
\left[
\begin{array}{c}
x_1 \\
\vdots \\
x_n
\end{array}
\right] \\
&= \sum_{i, j} x_i x_j A_{ij},
\end{align}
$$

is called a **quadratic form**. $\mathbf{A}$ is positive semidefinite iff $\mathbf{x}^T \mathbf{A} \mathbf{x} \geq 0$, $\forall\mathbf{x} \neq \mathbf{0}$ and positive definite iff $\mathbf{x}^T \mathbf{A} \mathbf{x} > 0$, $\forall\mathbf{x} \neq \mathbf{0}$. A matrix is positive (semi)definite if and only if all its eigenvalues are positive (nonnegative).

## Inequality of Two Matrices

The matrix $\mathbf{A}$ is smaller (not larger) than the matrix $\mathbf{B}$ if and only if $\mathbf{B} - \mathbf{A}$ is positive (semi) definite.

## Condition Number

The **condition number** of a positive definite symmetric matrix is defined as:

$$
\kappa(\mathbf{A}) \triangleq \log_{10} \frac{\lambda_{\text{max}}}{\lambda_{\text{min}}}.
$$

Large condition numbers indicate near-singularty (e.g., $\kappa > 6$ for a 32-bit computer indicates an ill-conditioned matrix).
