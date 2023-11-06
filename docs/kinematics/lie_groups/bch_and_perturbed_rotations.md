# Baker-Campbell-Hausdorff

## Definition

For scalar exponential functions, we have:

$$
\exp(a) \exp(b) = \exp(a + b),
$$

where $a, b \in \mathbb{R}$. This is not as easy for the matrix case. To compound two matrix exponentials, we use the **Baker-Campbell-Hausdorff (BCH)** formula. The BCH formula provides a solution to $\mathbf{C}$ to the equation:

$$
\exp(\mathbf{A}) \exp(\mathbf{B}) = \exp(\mathbf{C}),
$$

for possible noncommutative $\mathbf{A}$ and $\mathbf{B}$ in the Lie Algebra of a Lie group. The first few terms of the series are:

$$
\begin{align}
\mathbf{C} &= \ln \left( \exp{(\mathbf{A})} \exp{(\mathbf{B})} \right)  \\
&= \mathbf{A} + \mathbf{B} + \frac{1}{2} \left[ \mathbf{A}, \mathbf{B} \right] + \frac{1}{12} \left[ \mathbf{A}, \left[ \mathbf{A}, \mathbf{B} \right] \right] -
\frac{1}{12} \left[ \mathbf{B}, \left[ \mathbf{A}, \mathbf{B} \right] \right] + \ldots,
\end{align}
$$

where $\left[\ , \ \right]$ is the Lie brackets such that:

$$
\left[ \mathbf{A}, \mathbf{B} \right] = \mathbf{A} \mathbf{B} - \mathbf{B} \mathbf{A}.
$$

BCH formula is useful for perturbing rotations and computing rotation matrix derivatives.

## Using BCH on Rotations

Consider $\mathbf{R}_1 = \exp(\left[ \boldsymbol{\rho}_1 \right]_\times), \mathbf{R}_2 = \exp(\left[ \boldsymbol{\rho}_2 \right]_\times) \in SO(3)$ such that:

$$
\mathbf{R}_1 \mathbf{R}_2 = \exp(\left[ \boldsymbol{\rho}_1 \right]_\times) \exp(\left[ \boldsymbol{\rho}_2 \right]_\times) = \mathbf{R}_3 = \exp(\left[ \boldsymbol{\rho}_3 \right]_\times).
$$

Then we have:

$$
\begin{align}
\boldsymbol{\rho}_3 &= \left[ \ln \bigl( \mathbf{R}_1 \mathbf{R}_2 \bigr) \right]_{-\times} = \left[ \ln \bigl( \exp(\left[ \boldsymbol{\rho}_1 \right]_\times) \exp\left( \left[ \boldsymbol{\rho}_2 \right]_\times \right) \bigr) \right]_{-\times} \\ 
&= \boldsymbol{\rho}_1 + \boldsymbol{\rho}_2 + \frac{1}{2} \left[ \boldsymbol{\rho}_1 \right]_\times \boldsymbol{\rho}_2 + \frac{1}{12} \left[ \boldsymbol{\rho}_1 \right]_\times \left[ \boldsymbol{\rho}_1 \right]_\times \boldsymbol{\rho}_2 + \frac{1}{12} \left[ \boldsymbol{\rho}_2 \right]_\times \left[ \boldsymbol{\rho}_2 \right]_\times \boldsymbol{\rho}_1 + \ldots.
\end{align}
$$

If we assume that $\boldsymbol{\rho}_1$ or $\boldsymbol{\rho}_2$ is small, then small components with more than quadratic can be ignored yielding to:

$$
\begin{align}
\boldsymbol{\rho}_3 &= \left[ \ln\mathbf{R}_1 \mathbf{R}_2 \right]_{- \times} \\
&=
\left[ \ln \bigl( \exp(\left[ \boldsymbol{\rho}_1 \right]_\times) \exp\left( \left[ \boldsymbol{\rho}_2 \right]_\times \right) \bigr) \right]_{-\times} \\ &\approx 
\begin{cases}
\mathbf{J}_l \left( \boldsymbol{\rho}_2 \right)^{-1} \boldsymbol{\rho}_1 + \boldsymbol{\rho}_2, \quad \text{if } \boldsymbol{\rho}_1 \ \text{is a small} \\
\mathbf{J}_r \left( \boldsymbol{\rho}_1 \right)^{-1} \boldsymbol{\rho}_2 + \boldsymbol{\rho}_1, \quad \text{if } \boldsymbol{\rho}_2 \ \text{is a small},
\end{cases}
\end{align}
$$

where $\mathbf{J}_l$ and $\mathbf{J}_r$ are called the **left and right Jacobians**. The left Jacobian for $\boldsymbol{\rho} = \theta \hat{\mathbf{e}}$ is:

$$
\begin{align}
\mathbf{J}_l(\boldsymbol{\rho}) &=
\sum^{\infty}_{n = 0} \frac{1}{(n + 1)!} \left[ \boldsymbol{\rho} \right]^n_{\times} = \int^1_0 \mathbf{R}^\alpha d\alpha\\
&= \frac{\sin \theta}{\theta} \mathbf{I} + 
\left( 
1 - \frac{\sin \theta}{\theta}
\right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T + \frac{1 - \cos \theta}{\theta} \left[ \hat{\mathbf{e}} \right]_\times.
\end{align}
$$

Its inverse is:

$$
\mathbf{J}^{-1}_l (\boldsymbol{\rho}) = \frac{\theta}{2} \cot \frac{\theta}{2} \mathbf{I} +
\left(
1 - \frac{\theta}{2} \cot \frac{\theta}{2}
\right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T - \frac{\theta}{2} \left[ \hat{\mathbf{e}} \right]_\times,
$$

The right Jacobian can be computed from the left as:

$$
\begin{align}
\mathbf{J}_l (\boldsymbol{\rho}) = \mathbf{R} \mathbf{J}_r (\boldsymbol{\rho}) \\
\mathbf{J}_r (\boldsymbol{\rho}) = \mathbf{J}_l (-\boldsymbol{\rho}).
\end{align}
$$

## Using BCH on Poses

Similarly, for $SE(3)$, we have:

$$
\begin{align}
\left[ \ln \left( \mathbf{T}_1 \mathbf{T}_2 \right) \right]_{-\times} &= \left[ \ln \bigl( \exp(\left[ \xi_1 \right]_\times) \exp(\left[ \xi_2 \right]_\times)  \bigr) \right]_{-\times} \\
&\approx
\begin{cases}
\boldsymbol{J}_l \left( \boldsymbol{\xi}_2 \right)^{-1} \boldsymbol{\xi}_1 + \boldsymbol{\xi}_2, \quad \text{if } \boldsymbol{\xi}_1 \ \text{is a small} \\
\boldsymbol{J}_r \left( \boldsymbol{\xi}_1 \right)^{-1} \boldsymbol{\xi}_2 + \boldsymbol{\xi}_1, \quad \text{if } \boldsymbol{\xi}_2 \ \text{is a small},
\end{cases}
\end{align}
$$

## Perturbation

### Rotation in Lie Group to Lie Algebra

Suppose we have a rotation $\mathbf{R}$ with Lie algebra tangent vector $\boldsymbol{\rho}$. Let $\Delta \mathbf{R}$ with Lie algebra tangent vector $\Delta \boldsymbol{\rho}$ be a small perturbation to the left. On Lie group $SO(3)$, the yielding rotation result is $\Delta \mathbf{R} \mathbf{R}$. On Lie algebra, via BCH, we have $\mathbf{J}^{-1}_l(\boldsymbol{\rho}) \Delta \boldsymbol{\rho} + \boldsymbol{\rho}$. In order words:

$$
\Delta \mathbf{R} \mathbf{R} = \exp \left( \left[ \Delta \boldsymbol{\rho} \right]_\times \right) \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right) = \exp \left( \left[ \mathbf{J}^{-1}_l(\boldsymbol{\rho}) \Delta \boldsymbol{\rho} + \boldsymbol{\rho} \right]_\times \right).
$$

### Rotation in Lie Algebra to Lie Group

Suppose we do addition on Lie algbera by perturbing $\boldsymbol{\rho}$ with $\Delta \boldsymbol{\rho}$. Then the multiplication on the Lie group will be:

$$
\exp \left(\left[\boldsymbol{\rho} + \Delta \boldsymbol{\rho} \right]_\times \right) = 
\exp \left(\left[\mathbf{J}_l \Delta \boldsymbol{\rho} \right]_\times \right) \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right) = \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right) \exp \left( \left[\mathbf{J}_r \Delta \boldsymbol{\rho} \right]_\times \right).
$$

