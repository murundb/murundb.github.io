## Overview

This section gives some useful identities that are proven to be useful.

## Vector-by-Vector Identities

$$
\begin{align}
\frac{\partial (\mathbf{A} \mathbf{x})}{\mathbf{x}} &= \mathbf{A} \\
\mathbf{x}^T \mathbf{y} &= x_1 y_1 + \ldots + x_n y_n \\
\frac{\partial (\mathbf{y}^T \mathbf{x} )}{\partial \mathbf{x}}  = \frac{\partial (\mathbf{x}^T \mathbf{y})}{\partial \mathbf{x}} &=
\left[
\begin{array}{ccc}
\partial (\mathbf{x}^T \mathbf{y}) / \partial x_1 & \ldots & \partial (\mathbf{x}^T \mathbf{y}) / \partial x_n
\end{array}
\right] \\
&= 
\left[
\begin{array}{ccc}
y_1 & \ldots & y_n
\end{array}
\right] \\ 
&= \mathbf{y}^T.
\end{align}
$$

The above used numerator layout. The denominator layout will yield in $\mathbf{A}^T$ and $\mathbf{y}$.

## Scalar-by-Vector Identities

For quadratic forms:

$$
\begin{align}
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
&= \sum_{i, j} x_i x_j A_{ij}.
\end{align}
$$

The partial derivative will be then:

$$
\begin{align}
\frac{\partial (\mathbf{x}^T \mathbf{A} \mathbf{x})}{\mathbf{x}} &=
\left[
\begin{array}{ccc}
\partial (\mathbf{x}^T \mathbf{A} \mathbf{x}) / \partial x_1 &
\ldots &
\partial (\mathbf{x}^T \mathbf{A} \mathbf{x}) / \partial x_n
\end{array}
\right] \\
&= 
\left[
\begin{array}{ccc}
\sum_j x_j A_{1j} + \sum_i x_i A_{i1} & \ldots &
\sum_j x_j A_{nj} + \sum_i x_i A_{in}
\end{array}
\right] \\
&= 
\left[
\begin{array}{ccc}
\sum_j x_j A_{1j} & \ldots & \sum_j x_j A_{nj}
\end{array}
\right] + 
\left[
\begin{array}{ccc}
\sum_i x_i A_{i1} & \ldots & \sum_i x_i A_{in}
\end{array}
\right] \\
&= \mathbf{x}^T \mathbf{A}^T + \mathbf{x}^T \mathbf{A}.
\end{align}
$$

If $\mathbf{A}$ is a symmetric matrix, then $\mathbf{A} = \mathbf{A}^T$, which yields to:

$$
\frac{\partial (\mathbf{x}^T \mathbf{A} \mathbf{x})}{\mathbf{x}} = 2 \mathbf{x}^T \mathbf{A}.
$$

Again this is in numerator layout. In denominator layout it will be $2 \mathbf{A}^T \mathbf{x}$.