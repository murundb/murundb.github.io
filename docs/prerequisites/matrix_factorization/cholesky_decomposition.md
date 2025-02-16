# Cholesky Decomposition

## Definition

A symmetric, positive definite matrix $\mathbf{A}$ can be decomposed into a product of a unique lower triangular matrix $\mathbf{L}$ and its transpose:

$$
\begin{align}
&\mathbf{A} = \mathbf{L} \mathbf{L}^T,
\end{align}
$$

or equivalently:

$$
\begin{align}
&\left[
\begin{array}{ccc}
A_{11} & A_{12} & A_{13} \\
A_{21} & A_{22} & A_{23} \\
A_{31} & A_{32} & A_{33}
\end{array}
\right] =
\left[
\begin{array}{ccc}
L_{11} & 0 & 0 \\
L_{21} & L_{22} & 0 \\
L_{31} & L_{32} & L_{33}
\end{array}
\right]
\left[
\begin{array}{ccc}
L_{11} & L_{21} & L_{31} \\
0 & L_{22} & L_{32} \\
0 & 0 & L_{33}
\end{array}
\right] \\
&=
\left[
\begin{array}{ccc}
L^2_{11} & L_{21} L_{11} & L_{31} L_{11} \\
L_{21} L_{11} & L^2_{21} + L^2_{22} & L_{31} L_{21} + L_{32} L_{22} \\
L_{31} L_{11} & L_{31} L_{21} + L_{32} L_{22} & L^2_{31} + L^2_{32} + L^2_{33}
\end{array}
\right].
\end{align}
$$

Hence, $\mathbf{L}$ can be obtained as:

$$
\mathbf{L} =
\left[
\begin{array}{ccc}
\sqrt{A_{11}} & 0 & 0 \\
A_{21} / L_{11} & \sqrt{A_{22} - L^2_{21}} & 0 \\
A_{31} / L_{11} & (A_{32} - L_{31} L_{21}) / L_{22} & \sqrt{A_{33} - L^2_{31} - L^2_{32}}
\end{array}
\right],
$$

or equivalently:

$$
\begin{align}
L_{jj} &= (\pm) \sqrt{A_{jj} - \sum^{j - 1}_{k = 1} L^2_{jk}}, \\
L_{ij} &= \frac{1}{L_{jj}} \left(A_{ij} - \sum^{j - 1}_{k = 1} L_{ik} L_{jk} \right) \quad \text{for} \ i > j.
\end{align}
$$

## LDL Decomposition

A closely related variant of the classical Cholesky decomposition is the LDL decomposition:

$$
\mathbf{A} = \mathbf{L} \mathbf{D} \mathbf{L}^{T},
$$

where $\mathbf{L}$ is unit lower triangular (with zeros above the diagonal and units on the diagonal) and $\mathbf{D}$ is diagonal. Since $\mathbf{L}^T = \mathbf{U}$ is a unit upper triangular matrix, it is also called the LDU factorization. The main advantage is that the LDL decomposition can be computed and used with essentially the same algorithms, but avoids extracting square roots. For this reason, it is also called the square-root-free Cholesky decomposition.

## Applications

### Pseudo-Inverse

For a full-rank $\mathbf{A}$ matrices (observable systems), we have:

$$
\begin{align}
\mathbf{A} \mathbf{x} &= \mathbf{y} \\
\mathbf{A}^T \mathbf{A} \mathbf{x} &= \mathbf{A}^T \mathbf{y} \\
\mathbf{x} &= \left( \mathbf{A}^T \mathbf{A} \right)^{-1} \mathbf{A}^T \mathbf{y} \\
\mathbf{A}^{\dagger} &= \left( \mathbf{A}^T \mathbf{A} \right)^{-1} \mathbf{A}^T.
\end{align}
$$

Assume that back-substitution is quicker to compute than the full inverse. We know that $\mathbf{A}^T \mathbf{A}$ is symmetric and positive definite.
