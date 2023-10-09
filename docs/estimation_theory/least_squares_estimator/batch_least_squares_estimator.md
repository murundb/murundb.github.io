# Batch Least Squares Estimator

## Problem statement

Given a matrix $\mathbf{H} \in \mathbb{R}^{k \times n}$ and a vector $\mathbf{y} \in \mathbb{R}^k$, where $k > n$, we are interested in finding a **constant** solution $\mathbf{x} \in \mathbb{R}^n$ that satisfies $\mathbf{H} \mathbf{x} = \mathbf{y}$. In general, $\mathbf{y} \in \mathbb{R}^k$ with **linear** observation matrix $\mathbf{H} \in \mathbb{R}^{k \times n}$ has a measurement noise $\boldsymbol{v} \in \mathbb{R}^k$ such that:

$$
\mathbf{y} = \mathbf{H} \mathbf{x} + \boldsymbol{v}, \label{least_squares_main}
$$

The measurement residual is defined as:

$$
\boldsymbol{\epsilon}_{\mathbf{y}} = \mathbf{y} - \mathbf{H} \hat{\mathbf{x}},
$$

where $\hat{\mathbf{x}}$ is the "best" estimate of $\mathbf{x}$.

## Solution

The most probable value of the vector $\mathbf{x}$ is the vector $\hat{\mathbf{x}}$ that minimizes the sum of squares
between the observed values $\mathbf{y}$ and the vector $\mathbf{H} \hat{\mathbf{x}}$. This makes it an optimization problem with the objective function as:

$$
\begin{align}
\mathbf{J} &= \epsilon^2_{y1} + \ldots + \epsilon^2_{yk} = \boldsymbol{\epsilon}^T_{\mathbf{y}} \boldsymbol{\epsilon}_{\mathbf{y}} \\
&= (\mathbf{y} - \mathbf{H} \hat{\mathbf{x}})^T (\mathbf{y} - \mathbf{H} \hat{\mathbf{x}}) \\
&= (\mathbf{y}^T - \hat{\mathbf{x}}^T \mathbf{H}^T) (\mathbf{y} - \mathbf{H} \hat{\mathbf{x}}) \\ 
&= \mathbf{y}^T \mathbf{y} - \hat{\mathbf{x}}^T \mathbf{H}^T \mathbf{y} - \mathbf{y}^T \mathbf{H} \hat{\mathbf{x}} + \hat{\mathbf{x}}^T \mathbf{H}^T \mathbf{H} \hat{\mathbf{x}}
\end{align}
$$

Hence, the least squares problem can be formulated as:

$$
\begin{align}
\arg \min_{\hat{\mathbf{x}}} \quad || \mathbf{H} \hat{\mathbf{x}} - \mathbf{y} ||_2 = \arg \min_{\hat{\mathbf{x}}} \quad \sqrt{\sum^m_{i = 1} \left( \mathbf{h}^T_i \hat{\mathbf{x}} - y_i \right)^2},
\end{align}
$$

or equivalently:

$$
\begin{align}
&\arg \min_{\hat{\mathbf{x}}} \quad || \mathbf{H} \hat{\mathbf{x}} - \mathbf{y} ||^2_2 = \arg \min_{\hat{\mathbf{x}}} \quad \sum^m_{i = 1} \left( \mathbf{h}^T_i \hat{\mathbf{x}} - y_i \right)^2 \Rightarrow \\
&\arg \min_{\hat{\mathbf{x}}} \quad \left( \mathbf{H} \hat{\mathbf{x}} - \mathbf{y} \right)^T \left( \mathbf{H} \hat{\mathbf{x}} - \mathbf{y} \right) = \arg \min_{\hat{\mathbf{x}}} \quad \hat{\mathbf{x}}^T \mathbf{H}^T \mathbf{H} \hat{\mathbf{x}} - 2 \left( \mathbf{H}^T \mathbf{y} \right)^T \hat{\mathbf{x}} + \mathbf{y}^T \mathbf{y}.
\end{align}
$$

The optimization variable is $\hat{\mathbf{x}}$ and $\mathbf{J}$ is a quadratic convex function. Hence, the optimality condition is:

$$
\begin{align}
\nabla_{\hat{\mathbf{x}}} \mathbf{J} &= 
\nabla \left( \mathbf{H} \hat{\mathbf{x}} - \mathbf{y} \right)^T \left( \mathbf{H} \hat{\mathbf{x}} - \mathbf{b} \right) = 0 \\
&\Rightarrow -\mathbf{y}^T \mathbf{H} - \mathbf{y}^T \mathbf{H} + 2 \hat{\mathbf{x}}^T \mathbf{H}^T \mathbf{H} \\
&\Rightarrow \mathbf{H}^T \mathbf{H} \hat{\mathbf{x}} = \mathbf{H}^T \mathbf{y}. \label{normal_equation}
\end{align}
$$

Equation ($\ref{normal_equation}$) is called the **normal equation**. Solving the least squares problem is equivalent to solving the normal equation. Since $\mathbf{H}$ has a full column rank, $\mathbf{H}^T \mathbf{H}$ is invertible. Hence, the optimal solution to the normal equation (equivalently to the least squares problem) is:

$$
\hat{\mathbf{x}} = \left( \mathbf{H}^T \mathbf{H} \right)^{-1} \mathbf{H}^T \mathbf{y}. \label{pseudoinverse}
$$

The right hand side of equation ($\ref{pseudoinverse}$) is called the **Moore-Penrose pseudoinverse** and is defined as:

$$
\mathbf{H}^{+} = \left( \mathbf{H}^T \mathbf{H} \right)^{-1} \mathbf{H}^T.
$$

The solution to the least squares is then $\hat{\mathbf{x}} = \mathbf{H}^+ \mathbf{y}$. If $\mathbf{H}$ is an invertible square matrix, then $\mathbf{H}^+ = \mathbf{H}^{-1} \left( \mathbf{H}^T \right)^{-1} \mathbf{H}^T = \mathbf{H}^{-1}$.

Rather than computing the matrix inversion, it is more efficient to use SVD. Since $\mathbf{H}^T \mathbf{H} = \mathbf{V} \boldsymbol{\Sigma}^2 \mathbf{V}^T$, we have $\left ( \mathbf{H}^T \mathbf{H} \right)^{-1} = \mathbf{V} \boldsymbol{\Sigma}^{-2} \mathbf{V}^T$. Then:

$$
\left( \mathbf{H}^T \mathbf{H} \right)^{-1} \mathbf{H}^T = 
\mathbf{V} \boldsymbol{\Sigma}^{-2} \mathbf{V}^T \mathbf{V} \boldsymbol{\Sigma} \mathbf{U}^T =
\mathbf{V} \boldsymbol{\Sigma}^{-1} \mathbf{U}^T.
$$

Hence, the optimal solution is:

$$
\hat{\mathbf{x}} = \mathbf{V} \boldsymbol{\Sigma}^{-1} \mathbf{U}^T \mathbf{y}.
$$

## Relationship to the Maximum Likelihood Estimator

If the measurement errors $\boldsymbol{v} \in \mathbb{R}^k$ are independent Gaussian random variables, then minimizing the quadratic error is equivalent to maximizing the likelihood function:

$$
\begin{align}
L(\mathbf{y} | \mathbf{x}) = \prod^k_{i = 1} f_\mathbf{x} (\mathbf{y}_i | \mathbf{x}).
\end{align}
$$
