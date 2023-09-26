## Least Squares Estimator

Consider a state vector $\mathbf{x} \in \mathbb{R}^n$ and a measurement vector $\mathbf{y} \in \mathbb{R}^k$ with observation matrix $\mathbf{H} \in \mathbb{R}^{n \times k}$. Then we have:

$$
\mathbf{y} = \mathbf{H} \mathbf{x} + \boldsymbol{v}, \label{least_squares_main}
$$

where $\boldsymbol{v} \in \mathbb{R}^k$ is the measurement noise.

The measurement residual is defined as:

$$
\boldsymbol{\epsilon}_{\mathbf{y}} = \mathbf{y} - \mathbf{H} \hat{\mathbf{x}},
$$

where $\hat{\mathbf{x}}$ is the "best" estimate of $\mathbf{x}$. The most probable value of the vector $\mathbf{x}$ is the vector $\hat{\mathbf{x}}$ that minimizes the sum of squares
between the observed values $\mathbf{y}$ and the vector $\mathbf{H} \hat{\mathbf{x}}$. This makes it an optimization problem with the objective function as:

$$
\begin{align}
\mathbf{J} &= \epsilon^2_{y1} + \ldots + \epsilon^2_{yk} = \boldsymbol{\epsilon}^T_{\mathbf{y}} \boldsymbol{\epsilon}_{\mathbf{y}} \\
&= (\mathbf{y} - \mathbf{H} \hat{\mathbf{x}})^T (\mathbf{y} - \mathbf{H} \hat{\mathbf{x}}) \\
&= (\mathbf{y}^T - \hat{\mathbf{x}}^T \mathbf{H}^T) (\mathbf{y} - \mathbf{H} \hat{\mathbf{x}}) \\ 
&= \mathbf{y}^T \mathbf{y} - \hat{\mathbf{x}}^T \mathbf{H}^T \mathbf{y} - \mathbf{y}^T \mathbf{H} \hat{\mathbf{x}} + \hat{\mathbf{x}}^T \mathbf{H}^T \mathbf{H} \hat{\mathbf{x}}
\end{align}
$$

The optimization variable is $\hat{\mathbf{x}}$ and since $\mathbf{J}$ is a quadratic convex function, we can compute the gradient using a numerator layout:

$$
\nabla_{\hat{\mathbf{x}}} \mathbf{J} = -\mathbf{y}^T \mathbf{H} - \mathbf{y}^T \mathbf{H} + 2 \hat{\mathbf{x}}^T \mathbf{H}^T \mathbf{H} = -2\mathbf{y}^T \mathbf{H} + 2 \hat{\mathbf{x}}^T \mathbf{H}^T \mathbf{H}
$$

Using first-order condition ($\nabla_{\hat{\mathbf{x}}} \mathbf{J} = 0$), we get:

$$
\begin{align}
\hat{\mathbf{x}} &= (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{y} \\
&= \mathbf{H}^{L} \mathbf{y},
\end{align}
$$

where $\mathbf{H}^L$ is the left pseudo-inverse of $\mathbf{H}$. 

## Weighted Least Squares Estimator

We should never throw away measurements, no matter how unreliable they may be. Consider the same problem defined in equation ($\ref{least_squares_main}$). Assume that the random noise has:

$$
E(v^2_i) = \sigma^2_i, \quad i = 1, \ldots, k.
$$

Furthermore, assume that each measurement is zero-mean and indepependent. THe measurement covariance matrix is:

$$
\begin{align}
\mathbf{R} = E(\boldsymbol{v} \boldsymbol{v}^T) \\
= \left[
\begin{array}{ccc}
\sigma^2_1 & \ldots & 0 \\
\vdots & \ddots & \vdots \\
0 & \ldots & \sigma^2_k
\end{array}
\right]
\end{align}
$$

We will define the cost function as a weighted sum of squares:

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
\right]
&= \epsilon^2_{y1} / \sigma^2_1 + \ldots + \epsilon^2_{yk} / \sigma^2_{k}.
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

Then we have:

$$
\nabla_{\hat{\mathbf{x}}} \mathbf{J} = -2\mathbf{y}^T \mathbf{R}^{-1} \mathbf{H} + 2 \hat{\mathbf{x}}^T \mathbf{H}^T \mathbf{R}^{-1} \mathbf{H} = 0.
$$

Solving for $\hat{\mathbf{x}}$ yields to:

$$
\hat{\mathbf{x}} = \left( \mathbf{H}^T \mathbf{R}^{-1} \mathbf{H} \right)^{-1} \mathbf{H}^T \mathbf{R}^{-1} \mathbf{y}.
$$

## Recursive Least Squares Estimator

If we obtain measurements sequentially and want to update our estimate of $\mathbf{x}$ with each new measurement, we need to augment $\mathbf{H}$ matrix and completely recompute 
the estimate $\hat{\mathbf{x}}$. Suppose we have $\hat{\mathbf{x}}$ after $(k - 1)$ measurements, and we obtain a new measurement $\mathbf{y}_k$. A linear recursive estimator can be written as:

$$
\begin{align}
\mathbf{y}_k &= \mathbf{H}_k \mathbf{x} + \boldsymbol{v}_k \\
\hat{\mathbf{x}}_k &= \hat{\mathbf{x}}_{k - 1} + \mathbf{K}_{k} \left( \mathbf{y}_k - \mathbf{H}_k \hat{\mathbf{x}}_{k - 1} \right),
\end{align}
$$

where $\mathbf{K}_k$ is the estimator gain matrix. The estimation error mean can be computed as:

$$
\begin{align}
E \left[
\boldsymbol{\epsilon}_{\mathbf{x}, k} \right] &= E \left[ \mathbf{x} - \hat{\mathbf{x}}_k \right] \\
&= E \left[ \mathbf{x} - \hat{\mathbf{x}}_{k - 1} - \mathbf{K}_k \left( \mathbf{y}_k - \mathbf{H}_k \hat{\mathbf{x}}_{k - 1} \right) \right] \\ 
\end{align}
$$