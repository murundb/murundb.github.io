## Least Squares

Given a matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$ and a vector $\mathbf{b} \in \mathbb{R}^m$, where $m > n$, we are interested in finding a solution $\mathbf{x}$ that satisfies $\mathbf{A} \mathbf{x} = \mathbf{b}$. The least squares problem can be formulated as:

$$
\begin{align}
\min_{\mathbf{x}} \quad || \mathbf{A} \mathbf{x} - \mathbf{b} ||_2 = \min_{\mathbf{x}} \quad \sqrt{\sum^m_{i = 1} \left( \mathbf{a}^T_i \mathbf{x} - b_i \right)^2},
\end{align}
$$

or equivalently:

$$
\begin{align}
&\min_{\mathbf{x}} \quad || \mathbf{A} \mathbf{x} - \mathbf{b} ||^2_2 = \min_{\mathbf{x}} \quad \sum^m_{i = 1} \left( \mathbf{a}^T_i \mathbf{x} - b_i \right)^2 \Rightarrow \\
&\min_{\mathbf{x}} \quad \left( \mathbf{A} \mathbf{x} - \mathbf{b} \right)^T \left( \mathbf{A} \mathbf{x} - \mathbf{b} \right) = \min_{\mathbf{x}} \quad \mathbf{x}^T \mathbf{A}^T \mathbf{A} \mathbf{x} - 2 \left( \mathbf{A}^T \mathbf{b} \right)^T \mathbf{x} + \mathbf{b}^T \mathbf{b}.
\end{align}
$$

The optimality condition is:

$$
\nabla \left( \mathbf{A} \mathbf{x} - \mathbf{b} \right)^T \left( \mathbf{A} \mathbf{x} - \mathbf{b} \right) = 0
\Rightarrow \mathbf{A}^T \mathbf{A} \mathbf{x} = \mathbf{A}^T \mathbf{b}. \label{normal_equation}
$$

Equation ($\ref{normal_equation}$) is called the **normal equation**. Solving the least squares problem is equivalent to solving the normal equation. Since $\mathbf{A}$ has a full column rank, $\mathbf{A}^T \mathbf{A}$ is invertible. Hence, the optimal solution to the normal equation (equivalently to the least squares problem) is:

$$
\mathbf{x} = \left( \mathbf{A}^T \mathbf{A} \right)^{-1} \mathbf{A}^T \mathbf{b}. \label{pseudoinverse}
$$

The right hand side of equation ($\ref{pseudoinverse}$) is called the **Moore-Penrose pseudoinverse** and is defined as:

$$
\mathbf{A}^{+} = \left( \mathbf{A}^T \mathbf{A} \right)^{-1} \mathbf{A}^T.
$$

The solution to the least squares is then $\mathbf{x}^* = \mathbf{A}^+ \mathbf{b}$. If $\mathbf{A}$ is an invertible square matrix, then $\mathbf{A}^+ = \mathbf{A}^{-1} \left( \mathbf{A}^T \right)^{-1} \mathbf{A}^T = \mathbf{A}^{-1}$.

Rather than computing the matrix inversion, it is more efficient to use SVD. Since $\mathbf{A}^T \mathbf{A} = \mathbf{V} \boldsymbol{\Sigma}^2 \mathbf{V}^T$, we have $\left ( \mathbf{A}^T \mathbf{A} \right)^{-1} = \mathbf{V} \boldsymbol{\Sigma}^{-2} \mathbf{V}^T$. Then:

$$
\left( \mathbf{A}^T \mathbf{A} \right)^{-1} \mathbf{A}^T = 
\mathbf{V} \boldsymbol{\Sigma}^{-2} \mathbf{V}^T \mathbf{V} \boldsymbol{\Sigma} \mathbf{U}^T = 
\mathbf{V} \boldsymbol{\Sigma}^{-1} \mathbf{U}^T.
$$

Hence, the optimal solution is:

$$
\mathbf{x}^* = \mathbf{V} \boldsymbol{\Sigma}^{-1} \mathbf{U}^T \mathbf{b}.
$$

## Polynomial Fitting

Suppose we have $m$ pairs of data points $(a_1, \ b_1), \ldots, (a_m, \ b_m)$ and we'd like to fit a cubic polynomial:

$$
p(a) = b = x_0 + x_1 a + x_2 a^2 + x_3 a^3.
$$

Let $\mathbf{x} = \left[\begin{array}{ccc} x_0 & \ldots & x_3 \end{array} \right]$ be the coefficients of $p(a)$. The residual can be written as:

$$
\begin{align}
r(\mathbf{x}) &= 
\left[
\begin{array}{c}
p(a_1) - b_1 \\
\vdots \\
p(a_m) - b_m
\end{array}
\right] = 
\left[
\begin{array}{c}
p(a_1) \\
\vdots \\
p(a_m)
\end{array}
\right] - 
\left[
\begin{array}{c}
b_1 \\
\vdots \\
b_m
\end{array}
\right] = 
\left[
\begin{array}{c}
x_0 + x_1 a_1 + x_2 a^2_1 + x_3 a^3_1 \\
\vdots \\
x_0 + x_1 a_m + x_2 a^2_m + x_3 a^3_m
\end{array}
\right] - 
\left[
\begin{array}{c}
b_1 \\
\vdots \\
b_m
\end{array}
\right] \\ 
&= 
\left[
\begin{array}{cccc}
1 & a_1 & a^2_1 & a^3_1 \\
\vdots & \ddots & \ddots & \vdots \\
1 & a_m & a^2_m & a^3_m
\end{array}
\right]
\left[
\begin{array}{c}
x_0 \\
x_1 \\
x_2 \\
x_3
\end{array}
\right] - 
\left[
\begin{array}{c}
b_1 \\
\vdots \\
b_m
\end{array}
\right] \\
&= \mathbf{A} \mathbf{x} - \mathbf{b}.
\end{align}
$$

The matrix $\mathbf{A}$ is called the **Vandermonde matrix**.