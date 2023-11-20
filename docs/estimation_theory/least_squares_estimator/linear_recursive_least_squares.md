# Linear Recursive Least Squares

## Problem Statement

Suppose we have an estimate $\hat{\mathbf{x}}$ after $(k - 1)$ measurements, and we obtain a new measurement $y_k$ at time $k$. If we obtain measurements sequentially and want to update our estimate of the constant $\mathbf{x}$ with each new measurement, we need to augment the observation matrix $\mathbf{H} \in \mathbb{R}^{k \times n}$ matrix and completely recompute the estimate $\hat{\mathbf{x}}$. Recursive least squares avoids this recomputation.

A **linear recursive least squares estimator** can be written as:

$$
\begin{align}
y_k &= \mathbf{H}_k \mathbf{x} + v_k \\
\hat{\mathbf{x}}_k &= \hat{\mathbf{x}}_{k - 1} + \mathbf{K}_{k} \left( y_k - \mathbf{H}_k \hat{\mathbf{x}}_{k - 1} \right),
\end{align}
$$

where $\mathbf{K}_k$ is the estimator gain matrix. Here, we compute $\hat{\mathbf{x}}_k$ on the basis of the previous estimate $\hat{\mathbf{x}}_{k - 1}$ and the new measurement $y_k$. The correction term $y_k - \mathbf{H}_k \hat{\mathbf{x}}_{k - 1}$ applied to the previous term $\hat{\mathbf{x}}$ is called the residual or innovation.

## Solution to Linear Recursive Least Squares

The estimation error after $k$ measurements can be defined as:

$$
\boldsymbol{\epsilon}_{\mathbf{x}, k} = \mathbf{x} - \hat{\mathbf{x}}_k.
$$

Then the mean or the expectation of the estimation error is:

$$
\begin{align}
\mathbb{E} \left[
\boldsymbol{\epsilon}_{\mathbf{x}, k} \right] &= \mathbb{E} \left[ \mathbf{x} - \hat{\mathbf{x}}_k \right] \\
&= \mathbb{E} \left[ \mathbf{x} - \hat{\mathbf{x}}_{k - 1} - \mathbf{K}_k \left( y_k - \mathbf{H}_k \hat{\mathbf{x}}_{k - 1} \right) \right] \\
&= \mathbb{E} \left[ \boldsymbol{\epsilon}_{\mathbf{x}, k - 1} - \mathbf{K}_k \left(\mathbf{H}_k \mathbf{x} + v_k - \mathbf{H}_k \hat{\mathbf{x}}_{k - 1} \right) \right] \\
&= \mathbb{E}\left[ \boldsymbol{\epsilon}_{\mathbf{x}, k - 1} - \mathbf{K}_k \mathbf{H}_k( \mathbf{x} - \hat{\mathbf{x}}_{k - 1}) - \mathbf{K}_k v_k \right] \\
&= \left( \mathbf{I} - \mathbf{K}_k \mathbf{H}_k \right) \mathbb{E}(\boldsymbol{\epsilon}_{\mathbf{x}, k-1}) - \mathbf{K}_k \mathbb{E}(v_k).
\end{align}
$$

!!! cnote "Unbiased Estimator"

    If the measurement noise $v_k$ is zero mean for all $k$, and if the initial estimate of $\mathbf{x}$ is set to the expected value of $\mathbf{x}$ (i.e., $\hat{\mathbf{x}}_0 = \mathbb{E}\left[ \mathbf{x} \right]$), then the expected value of $\hat{\mathbf{x}}_k$ will be equal to $\mathbf{x}$ for all $k$ ($\mathbb{E}\left[\boldsymbol{\epsilon}_{\mathbf{x}, k}\right] = \mathbf{0}$). This is called an unbiased estimator.

The cost function can be defined as the sum of the variances of the estimation errors at time $k$:

$$
\begin{align}
\mathbf{J}_k &= \mathbb{E} \left[(x_1 - \hat{x}_{1, k})^2 \right] + \cdots + \mathbb{E} \left[(x_n - \hat{x}_{n, k})^2 \right] \\
&= \mathbb{E} \left[\epsilon^2_{x1, k} + \cdots + \epsilon^2_{xn, k} \right] \\
&= \mathbb{E} \left[\boldsymbol{\epsilon}^T_{\mathbf{x}, k} \boldsymbol{\epsilon}_{\mathbf{x}, k} \right] \\
&= \mathbf{E} \left [ \text{Tr} \left(\boldsymbol{\epsilon}^T_{\mathbf{x}, k} \boldsymbol{\epsilon}_{\mathbf{x}, k}   \right) \right] \\
&= \text{Tr} \mathbf{P}_k,
\end{align}
$$

where $\mathbf{P}_k$ is the estimation-error covariance at time $k$ and can be found as follows:

$$
\begin{align}
\mathbf{P}_k &= \mathbb{E} \left[\boldsymbol{\epsilon}^T_{\mathbf{x}, k} \boldsymbol{\epsilon}_{\mathbf{x}, k} \right] \\
&= \mathbb{E} \left[ \left( \mathbf{x} - \hat{\mathbf{x}}_k \right) \left( \mathbf{x} - \hat{\mathbf{x}}_k \right)^T \right] \\
&= \mathbb{E} \left[ \left(\mathbf{x} - \mathbf{\hat{x}}_{k - 1} - \mathbf{K}_k (\mathbf{H}_k \mathbf{x} + v_k - \mathbf{H}_k \hat{\mathbf{x}}_{k - 1}) \right) \left( \cdots \right)^T \right] \\
&= \mathbb{E} \left[ \left( \boldsymbol{\epsilon}_{\mathbf{x}, k - 1} - \mathbf{K}_k \mathbf{H}_k \boldsymbol{\epsilon}_{\mathbf{x}, k - 1} + \mathbf{K}_k v_k \right) \left( \cdots \right)^T \right] \\
&= \mathbb{E} \left[ \left(  (\mathbf{I} - \mathbf{K}_k \mathbf{H}_k)\boldsymbol{\epsilon}_{\mathbf{x}, k - 1} + \mathbf{K}_k  \right) \left( \cdots \right)^T \right] \\
&= \left( \mathbf{I} - \mathbf{K}_k \mathbf{H}_k \right) \mathbb{E} \left[ \boldsymbol{\epsilon}_{\mathbf{x}, k - 1} \boldsymbol{\epsilon}^T_{\mathbf{x}, k - 1} \right] \left( \mathbf{I} - \mathbf{K}_k \mathbf{H}_k \right)^T \\
&\quad - \mathbf{K}_k \mathbb{E} \left[v_k \boldsymbol{\epsilon}^T_{\mathbf{x}, k - 1}  \right] \left( \mathbf{I} - \mathbf{K}_k \mathbf{H}_k \right)^T \\
&\quad - \left( \mathbf{I} - \mathbf{K}_k \mathbf{H}_k \right) \mathbb{E} \left[ \boldsymbol{\epsilon}_{\mathbf{x}, k - 1} v^T_k \ \right] \mathbf{K}^T_k \\
&\quad + \mathbf{K}_k \mathbb{E}\left[v_k v^T_k \right] \mathbf{K}^T_k.
\end{align}
$$

The estimation error at time $k - 1$, $\boldsymbol{\epsilon}_{\mathbf{x}, k}$, is independent of the measurement noise at time $k$, $v_k$:

$$
\mathbb{E}\left[ v_k \boldsymbol{\epsilon}^T_{\mathbf{x}, k - 1} \right] = \mathbb{E}\left[ v_k \right] \mathbb{E} \left[ \boldsymbol{\epsilon}^T_{\mathbf{x}, k - 1} \right] = \mathbf{0}.
$$

Hence, the estimation-error covariance is:

$$
\mathbf{P}_k = \left( \mathbf{I} - \mathbf{K}_k \mathbf{H}_k \right) \mathbf{P}_{k - 1} \left( \mathbf{I} - \mathbf{K}_k \mathbf{H}_k \right)^T + \mathbf{K}_k \mathbf{R}_k \mathbf{K}^T_k,
$$

where $\mathbf{R}_k$ is the covariance of $v_k$.

To optimality condition is:

$$
\frac{ \partial \mathbf{J}_k}{ \partial \mathbf{K}_k} = 2 \left( \mathbf{I} - \mathbf{K}_k \mathbf{H}_k \right) \mathbf{P}_{k - 1} \left( - \mathbf{H}^T_k \right) + 2 \mathbf{K}_k \mathbf{R}_k = \mathbf{0},
$$

since:

$$
\frac{\partial \text{Tr}(\mathbf{A} \mathbf{B} \mathbf{A}^T)}{\partial \mathbf{A}} = 2 \mathbf{A} \mathbf{B},
$$

given $\mathbf{B}$ is symmetric. Hence, the recursive least squares update equations are:

$$
\begin{align}
\mathbf{K}_k &= \mathbf{P}_{k - 1} \mathbf{H}^T_k \left( \mathbf{H}_k \mathbf{P}_{k - 1} \mathbf{H}^T + \mathbf{R}_k \right)^{-1} \\
\hat{\mathbf{x}}_k &= \hat{\mathbf{x}}_{k - 1} + \mathbf{K}_k \left(y_k - \mathbf{H}_k \hat{\mathbf{x}}_{k - 1} \right) \\
\mathbf{P}_k &= \left( \mathbf{I} - \mathbf{K}_k \mathbf{H}_k \right) \mathbf{P}_{k - 1} \left( \mathbf{I} - \mathbf{K}_k \mathbf{H}_k \right)^T + \mathbf{K}_k \mathbf{R}_k \mathbf{K}^T_k \\
&= \left( \mathbf{I} - \mathbf{K}_k \mathbf{H}_k \right) \mathbf{P}_{k - 1}.
\end{align}
$$

