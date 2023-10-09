# Weighted Batch Least Squares Estimator

## Problem statement

Given a matrix $\mathbf{H} \in \mathbb{R}^{k \times n}$ and a noisy measurement vector $\mathbf{y} \in \mathbb{R}^k$, where $k > n$, we are interested in finding a **constant** solution $\mathbf{x} \in \mathbb{R}^n$ that satisfies $\mathbf{H} \mathbf{x} = \mathbf{y}$. We assume that each element of $\mathbf{y}$ is a linear combination of the elements of $\mathbf{x}$, with addition of some measurement noise $\boldsymbol{v} \in \mathbb{R}^k$, and the variance of the measurement noise may be different for each element of $\mathbf{y}$:

$$
\begin{align}
\mathbf{y} &= \mathbf{H} \mathbf{x} + \boldsymbol{v} \\
\mathbb{E} \left[v^2_i \right] &= \sigma^2_i, \quad i = 1, \ldots, k.
\end{align}
$$

Assume that the noise for each measurement is zero-mean and independent. The measurement covariance matrix is:

$$
\begin{align}
\mathbf{R} &= E(\boldsymbol{v} \boldsymbol{v}^T) \\
&= \left[
\begin{array}{ccc}
\sigma^2_1 & \ldots & 0 \\
\vdots & \ddots & \vdots \\
0 & \ldots & \sigma^2_k
\end{array}
\right]
\end{align}
$$

The measurement residual is defined as:

$$
\boldsymbol{\epsilon}_{\mathbf{y}} = \mathbf{y} - \mathbf{H} \hat{\mathbf{x}},
$$

where $\hat{\mathbf{x}}$ is the "best" estimate of $\mathbf{x}$.

## Solution

We will define the cost function as a weighted sum of squares of the residuals:

$$
\begin{align}
\mathbf{J} &= \boldsymbol{\epsilon}^T_{\mathbf{y}} \mathbf{R}^{-1} \boldsymbol{\epsilon}_{\mathbf{y}} \\
&=
\left[
\begin{array}{ccc}
\epsilon_{y1} & \ldots & \epsilon_{yk}
\end{array}
\right]
\left[
\begin{array}{ccc}
1/\sigma^2_1 & \ldots & 0 \\
\vdots & \ddots & \vdots \\
0 & \ldots & 1/\sigma^2_k
\end{array}
\right]
\left[
\begin{array}{c}
\epsilon_{y1} \\ \vdots \\ \epsilon_{yk}
\end{array}
\right] \\
&= \epsilon^2_{y1} / \sigma^2_1 + \ldots + \epsilon^2_{yk} / \sigma^2_{k}.
\end{align}
$$

Hence, the weighted least squares problem can be formulated as:

$$
\begin{align}
\arg \min_{\hat{\mathbf{x}}} \quad \mathbf{R}^{-1} || \mathbf{H} \hat{\mathbf{x}} - \mathbf{y} ||^2_2 = \arg \min_{\hat{\mathbf{x}}} \quad \mathbf{R}^{-1} \sqrt{\sum^m_{i = 1} \left( \mathbf{h}^T_i \hat{\mathbf{x}} - y_i \right)^2}.
\end{align}
$$

Rewrite the objective function in terms of the optimization variable as:

$$
\begin{align}
\mathbf{J} &= \boldsymbol{\epsilon}^T_{\mathbf{y}} \mathbf{R}^{-1} \boldsymbol{\epsilon}_{\mathbf{y}} \\
&= (\mathbf{y} - \mathbf{H} \hat{\mathbf{x}})^T \mathbf{R}^{-1} (\mathbf{y} - \mathbf{H} \hat{\mathbf{x}}) \\
&= (\mathbf{y}^T \mathbf{R}^{-1} - \hat{\mathbf{x}}^T \mathbf{H}^T \mathbf{R}^{-1}) (\mathbf{y} - \mathbf{H} \hat{\mathbf{x}}) \\
&= \mathbf{y}^T \mathbf{R}^{-1} \mathbf{y} - \mathbf{y}^T \mathbf{R}^{-1} \mathbf{H} \hat{\mathbf{x}} - \hat{\mathbf{x}}^T \mathbf{H}^T \mathbf{R}^{-1} \mathbf{y} + 
\hat{\mathbf{x}}^T \mathbf{H}^T \mathbf{R}^{-1} \mathbf{H} \hat{\mathbf{x}}.
\end{align}
$$

The optimization variable is $\hat{\mathbf{x}}$ and $\mathbf{J}$ is a quadratic convex function. Hence, the optimality condition is:

$$
\nabla_{\hat{\mathbf{x}}} \mathbf{J} = -2\mathbf{y}^T \mathbf{R}^{-1} \mathbf{H} + 2 \hat{\mathbf{x}}^T \mathbf{H}^T \mathbf{R}^{-1} \mathbf{H} = 0.
$$

Solving for $\hat{\mathbf{x}}$ yields to:

$$
\hat{\mathbf{x}} = \left( \mathbf{H}^T \mathbf{R}^{-1} \mathbf{H} \right)^{-1} \mathbf{H}^T \mathbf{R}^{-1} \mathbf{y}.
$$

## Relationship to the Maximum Likelihood Estimator

Since the measurement errors $\boldsymbol{v} \in \mathbb{R}^k$ are independent random variables with distribution $v_i \sim \mathcal{N}(0, \sigma^2)$, minimizing the weighted quadratic error is equivalent to maximizing the likelihood function:

$$
\begin{align}
L(\mathbf{y} | \mathbf{x}) &= \prod^k_{i = 1} f_\mathbf{x} (\mathbf{y}_i | \mathbf{x}) \\
&= \frac{1}{(2\pi)^{k / 2} \sigma^k} \exp \left\{-\frac{1}{2\sigma^2} \mathbf{J} \right\}.
\end{align}
$$
