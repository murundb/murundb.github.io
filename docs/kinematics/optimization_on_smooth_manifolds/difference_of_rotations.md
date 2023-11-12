# Difference of Rotations

## Metrics for Rotations

Given $\mathbf{R}_1, \mathbf{R}_2 \in SO(3)$, there are two common ways to define the difference of two rotations:

$$
\begin{align}
\boldsymbol{\rho}_{12} &= \left[ \ln \mathbf{R}^T_1 \mathbf{R}_2 \right]_{-\times} \\
\boldsymbol{\rho}_{21} &= \left[ \ln \mathbf{R}_2 \mathbf{R}^T_1 \right]_{-\times}, \label{metrics}
\end{align}
$$

This can be thought of as the right and the left difference between the two rotation matrices. The inner product for $\mathfrak{so}(3)$ can be defined as:

$$
\left[ \boldsymbol{\rho}_{1} \right]_\times \cdot \left[ \boldsymbol{\rho}_{2} \right]_\times = \frac{1}{2} \text{tr} \left( \left[ \boldsymbol{\rho}_{1} \right]_\times \left[ \boldsymbol{\rho}_{2} \right]^T_\times \right) = \boldsymbol{\rho}^T_{1} \boldsymbol{\rho}_{2}. \label{inner_product}
$$

Using Eq ($\ref{inner_product}$) as the distance metric:

$$
\begin{align}
|\boldsymbol{\rho}_{12}| &= \sqrt{\boldsymbol{\rho}_{12}^T \boldsymbol{\rho}_{12}} \\
|\boldsymbol{\rho}_{21}| &= \sqrt{\boldsymbol{\rho}_{21}^T \boldsymbol{\rho}_{21}}. \\
\end{align}
$$

This can be viewed as the **magnitude of the angle of the rotation difference**.

## Metrics for Pertubed Rotations

Let $\mathbf{R} = \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right) \in SO(3)$ be a rotation matrix. Perturbing $\boldsymbol{\rho}$ by a little bit results in a new rotation matrix, $\mathbf{R}' = \exp \left( \left[ \boldsymbol{\rho} + \delta \boldsymbol{\rho} \right]_\times \right) \in SO(3)$.

We are interested in quantifying the difference between $\mathbf{R}$ and $\mathbf{R}'$. Using Eq ($\ref{metrics}$) and the BCH formula, the right difference is:

$$
\begin{align}
\left[ \ln \bigl( \delta \mathbf{R}_r \bigr) \right]_{-\times} &=
\left[ \ln \bigl( \mathbf{R}^T \mathbf{R}' \bigr) \right]_{-\times} \\
&= \left[ \ln \bigl( \mathbf{R}^T \exp\left( \left[ \boldsymbol{\rho} + \delta \boldsymbol{\rho} \right]_\times \right) \bigr) \right]_{-\times} \\
&\approx \left[ \ln \bigl( \mathbf{R}^T \mathbf{R} \exp \left( \left[ \mathbf{J}_r \delta \boldsymbol{\rho} \right]_{\times} \right) \bigr) \right]_{-\times} = \mathbf{J}_r \delta \boldsymbol{\rho}.
\end{align}
$$

Similarly, the left difference is:

$$
\begin{align}
\left[ \ln \bigl( \delta \mathbf{R}_l \bigr) \right]_{-\times} &=
\left[ \ln \bigl( \mathbf{R}' \mathbf{R}^T \bigr) \right]_{-\times} \\
&= \left[ \ln \bigl( \exp\left( \left[ \boldsymbol{\rho} + \delta \boldsymbol{\rho} \right]_\times \right) \mathbf{R}^T \bigr) \right]_{-\times} \\
&\approx \left[ \ln \bigl( \exp \left( \left[ \mathbf{J}_l \delta \boldsymbol{\rho} \right]_{\times} \right) \mathbf{R}^T \mathbf{R} \bigr) \right]_{-\times} = \mathbf{J}_l \delta \boldsymbol{\rho}.
\end{align}
$$

Note here that $\mathbf{J}_r$ and $\mathbf{J}_l$ are evaluated at $\boldsymbol{\rho}$.
