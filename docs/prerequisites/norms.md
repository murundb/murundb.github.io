# Norms

## Definitions

| Type | Definition |
| - | - |
| Vector Norms | A **vector norm** on $\mathbb{R}^n$ is a function $f: \ \mathbb{R}^n \rightarrow \mathbb{R}$ that satisfies the following three properties: <ol><li>$f$ is nonnegative: $f(\mathbf{x}) \geq 0$, $\forall \mathbf{x} \in \mathbb{R}^n$</li><li>$f$ satisfies the triangle inequality: $f(\mathbf{x} + \mathbf{y}) \leq f(\mathbf{x}) + f(\mathbf{y})$, for all $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$</li><li>$f$ is homogeneuous: $f( t \mathbf{x}) = \|t\| f(\mathbf{x})$, for all $\mathbf{x} \in \mathbb{R}^n$ and $t \in \mathbb{R}$</li><li>$f$ is definite: $f(\mathbf{x}) = 0$ if and only if $\mathbf{x} = \mathbf{0}$</li></ol> |
| Matrix Norms | A function $f: \ \mathbb{R}^{m \times n} \rightarrow \mathbb{R}$ is a **matrix norm** if the following holds: <ol><li>$f$ is nonnegative: $f(\mathbf{A}) \geq 0$, $\forall \mathbf{A} \in \mathbb{R}^{m \times n}$</li><li>$f$ satisfies the triangle inequality: $f(\mathbf{A} + \mathbf{B}) \leq f(\mathbf{A}) + f(\mathbf{B})$, for all $\mathbf{A}, \mathbf{B} \in \mathbb{R}^{m \times n}$</li><li>$f$ is homogeneuous: $f( t \mathbf{A}) = \|t\| f(\mathbf{A})$, for all $\mathbf{A} \in \mathbb{R}^{m \times n}$ and $t \in \mathbb{R}$</li><li>$f$ is definite: $f(\mathbf{A}) = 0$ if and only if $\mathbf{A} = \mathbf{0}$</li></lo> |

## Common Norms

| Norm | Vector | Matrix |
| - | - | - |
| 1-norm | $\| \mathbf{x} \|_1 = \| x_1 \| + \cdots + \| x_n \|$ | |
| 2-norm ($l_2$) | $\| \mathbf{x} \|_2 = \left( \| x_1 \|^2 + \cdots + \| x_n \|^2 \right)^{1/2} = \left(\mathbf{x}^T \mathbf{x} \right)^{1/2}$ | If $\mathbf{A} \in \mathbb{R}^{m \times n}$, then there exists a unit 2-norm n-vector $\mathbf{z}$ such that: <br> $\mathbf{A}^T \mathbf{A} \mathbf{z} = \mu^2 \mathbf{z}$, <br> where $\mu = \|\mathbf{A}\|_2$. This implies that $\|\mathbf{A}\|^2_2$ is a zero of $p(\lambda) = \text{det} \left( \mathbf{A}^T \mathbf{A} - \lambda \mathbf{I} \right)$. In particular: <br> $\|\mathbf{A}\|_2 = \sqrt{\lambda_{max} \left( \mathbf{A}^T \mathbf{A} \right)}$. |
| $p$-norm | $\| \mathbf{x} \|_p = \left( \| x_1 \|^p + \cdots + \| x_n \|^p \right)^{1/p}, \quad p \geq 1$ | $\|\mathbf{A}\|_p = \sup_{x \neq 0} \frac{\|\mathbf{A} \mathbf{x}\|_p}{\|\mathbf{x}\|_p}$ |
| Infinity norm | $\| \mathbf{x} \|_{\infty} = \max_{1 \leq i \leq n} \| x_i \|$ | |
| Frobenius norm | | $\|\mathbf{A}\|_F = \sqrt{\sum^m_{i = 1} \sum^n_{j = 1} \|A_{ij}\|^2}$ |

## Properties

| Property | Vector | Matrix |
| - | - | - |
| Cauchy-Schwarz Inequality | $\| \mathbf{x}^T \mathbf{y} \| \leq \| \mathbf{x}\|_2 \| \mathbf{y} \|_2$ | |
| Norm Preservation | 2-norm is preserved under orthogonal transformation. Let $\mathbf{Q} \in \mathbb{R}^{n \times n}$ be orthogonal matrix and $\mathbf{x} \in \mathbb{R}^n$. Then: <br> $\| \mathbf{Q} \mathbf{x} \|^2_2 = \left( \mathbf{Q} \mathbf{x}\right)^T \left( \mathbf{Q} \mathbf{x}\right) = \mathbf{x}^T \mathbf{x} = \| \mathbf{x} \|^2_2$ | |
| Absolute and Relative Errors | Let $\hat{\mathbf{x}}$ be an approximation of $\mathbf{x} \in \mathbb{R}^n$. For a given vector norm $\| \cdot \|$, the **absolute error** in $\hat{\mathbf{x}}$ is defined as: <br> $\boldsymbol{\epsilon}_{abs} = \|\hat{\mathbf{x}} - \mathbf{x} \|$. <br> If $\mathbf{x} \neq \mathbf{0}$, then the **relative error** in $\hat{\mathbf{x}}$ is defined as: <br> $\boldsymbol{\epsilon}_{rel} = \frac{\| \hat{\mathbf{x}} - \mathbf{x} \|}{\| \mathbf{x}\|}$. | |
| Sequence Convergence | A sequence $\left\{ \mathbf{x}^{(k)} \right\}$ of $n$-vectors **converges** to $\mathbf{x}$ if: <br> $\lim_{k \rightarrow \infty} \|\mathbf{x}^{(k)} - \mathbf{x} \| = 0.$ | |
