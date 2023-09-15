## Baker Campbell Hausdorff Formula

The Baker Campbell Hausdorff (BCH) formula provides a solution to $\mathbf{C}$ to the equation:

$$
\exp(\mathbf{A}) \exp(\mathbf{B}) = \exp(\mathbf{C}),
$$

for possible noncommutative $\mathbf{A}$ and $\mathbf{B}$ in the Lie Algebra of a Lie group. The first few terms of the series are:

$$
\ln \left( \exp{(\mathbf{A})} \exp{(\mathbf{B}}) \right) = \mathbf{A} + \mathbf{B} + \frac{1}{2} \left[ \mathbf{A}, \mathbf{B} \right] + \frac{1}{12} \left[ \mathbf{A}, \left[ \mathbf{A}, \mathbf{B} \right] \right] - 
\frac{1}{12} \left[ \mathbf{B}, \left[ \mathbf{A}, \mathbf{B} \right] \right] + \ldots,
$$

where $\left[\ , \ \right]$ is the Lie brackets. This formula is useful for perturbing rotations and rotation matrix derivatives.

## SO(3)

Consider $\mathbf{R}_1 = \exp(\left[ \boldsymbol{\rho}_1 \right]_\times), \mathbf{R}_2 = \exp(\left[ \boldsymbol{\rho}_2 \right]_\times) \in SO(3)$ such that:

$$
\mathbf{R}_1 \mathbf{R}_2 = \exp(\left[ \boldsymbol{\rho}_1 \right]_\times) \exp(\left[ \boldsymbol{\rho}_2 \right]_\times) = \mathbf{R}_3 = \exp(\left[ \boldsymbol{\rho}_3 \right]_\times).
$$

Then we have:

$$
\begin{align}
\boldsymbol{\rho}_3 &= \left[ \ln \left( \mathbf{R}_1 \mathbf{R}_2 \right) \right]^{-1}_\times = \left[ \ln \left( \exp(\left[ \boldsymbol{\rho}_1 \right]_\times) \exp\left( \left[ \boldsymbol{\rho}_2 \right]_\times \right) \right) \right]^{-1}_\times \\ 
&= \boldsymbol{\rho}_1 + \boldsymbol{\rho}_2 + \frac{1}{2} \left[ \boldsymbol{\rho}_1 \right]_\times \boldsymbol{\rho}_2 + \frac{1}{12} \left[ \boldsymbol{\rho}_1 \right]_\times \left[ \boldsymbol{\rho}_1 \right]_\times \boldsymbol{\rho}_2 + \frac{1}{12} \left[ \boldsymbol{\rho}_2 \right]_\times \left[ \boldsymbol{\rho}_2 \right]_\times \boldsymbol{\rho}_1 + \ldots.
\end{align}
$$

If $\boldsymbol{\rho}_1$ or $\boldsymbol{\rho}_2$ is small, small components with more than quadratic can be ignored yielding to:

$$
\left[ \ln \left( \exp(\left[ \boldsymbol{\rho}_1 \right]_\times) \exp\left( \left[ \boldsymbol{\rho}_2 \right]_\times \right) \right) \right]^{-1}_\times \approx 
\begin{cases}
\mathbf{J}_l \left( \boldsymbol{\rho}_2 \right)^{-1} \boldsymbol{\rho}_1 + \boldsymbol{\rho}_2, \quad \text{if } \boldsymbol{\rho}_1 \ \text{is a small} \\
\mathbf{J}_r \left( \boldsymbol{\rho}_1 \right)^{-1} \boldsymbol{\rho}_2 + \boldsymbol{\rho}_1, \quad \text{if } \boldsymbol{\rho}_2 \ \text{is a small},
\end{cases}
$$

where $\mathbf{J}_l$ and $\mathbf{J}_r$ are the left and right Jacobians. The left Jacobian for $\boldsymbol{\rho} = \theta \hat{\mathbf{e}} is:$

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

## SE(3)

Similarly, for $SE(3)$, we have:

$$
\begin{align}
\left[ \ln \left( \mathbf{T}_1 \mathbf{T}_2 \right) \right]^{-1}_\times = \left[ \ln \left( \exp(\left[ \xi_1 \right]_\times) \exp(\left[ \xi_2 \right]_\times)  \right) \right]^{-1}_\times
&= \approx
\begin{cases}
\boldsymbol{J}_l \left( \boldsymbol{\xi}_2 \right)^{-1} \boldsymbol{\xi}_1 + \boldsymbol{\xi}_2, \quad \text{if } \boldsymbol{\xi}_1 \ \text{is a small} \\
\boldsymbol{J}_r \left( \boldsymbol{\xi}_1 \right)^{-1} \boldsymbol{\xi}_2 + \boldsymbol{\xi}_1, \quad \text{if } \boldsymbol{\xi}_2 \ \text{is a small},
\end{cases}
\end{align}
$$

## Interpolation

Linear interpolation scheme:

$$
x = (1 - \alpha) x_1 + \alpha x_2, \quad \alpha \in \left[0, 1 \right],
$$

will not work on $SO(3)$ and $SE(3)$ because this interpolation scheme does not satisfy closure (i.e., the result is no longer in the group):

$$
\begin{align}
(1 - \alpha) \mathbf{R}_1 + \alpha \mathbf{R}_2 \notin SO(3) \\
(1 - \alpha) \mathbf{T}_1 + \alpha \mathbf{T}_2 \notin SE(3), \\
\end{align}
$$

for some values of $\alpha \in \left[0, 1 \right]$, $\mathbf{R}_1, \mathbf{R}_2 \in SO(3)$ and $\mathbf{T}_1, \mathbf{T}_2 \in SE(3)$. 

For Lie groups one of the interpolations schemes is:

$$
\mathbf{R} = \left( \mathbf{R}_2 \mathbf{R}^T_1 \right)^\alpha \mathbf{R}_1, \quad \alpha \in \left[0, 1 \right],
$$

where $\mathbf{R}, \mathbf{R}_1, \mathbf{R}_2 \in SO(3)$. We see that when $\alpha = 0$, we have $\mathbf{R} = \mathbf{R}_1$, and $\mathbf{R} = \mathbf{R}_2$ when $\alpha = 1$. Furthermore, let $\mathbf{R}_{21} = \mathbf{R}_2 \mathbf{R}^T_1 = \exp (\left[ \boldsymbol{\rho} \right]_\times)$. Then, we have:

$$
\mathbf{R}^\alpha_{21} = \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right)^\alpha = \exp \left( \alpha \left[ \boldsymbol{\rho} \right]_\times \right) \in SO(3).
$$

Interpolation scheme enforces a constant angular velocity, $\boldsymbol{\omega}$. If the rotation matrix is a function of time, $\mathbf{R}(t)$, then the scheme is:

$$
\mathbf{R}(t) = \left( \mathbf{R}(t_2) \mathbf{R}(t_1)^T \right)^\alpha \mathbf{R}(t_1), \quad \alpha = \frac{t - t_1}{t_2 - t_1}.
$$

Defining the constant angular velocity as:

$$
\boldsymbol{\omega} = \frac{1}{t_2 - t_1} \boldsymbol{\rho},
$$

we get:

$$
\mathbf{R}(t) = \exp((t - t_1) \left[ \boldsymbol{\omega} \right]_\times) \mathbf{R}(t_1),
$$

which is the solution to Poisson's equation:

$$
\dot{\mathbf{R}}(t) = \left[ \boldsymbol{\omega} \right]_\times \mathbf{R}(t).
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

