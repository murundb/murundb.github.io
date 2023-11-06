# Interpolation

## Lie Group Interpolation

The typical linear interpolation scheme:

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

for some values of $\alpha \in \left[0, 1 \right]$, $\mathbf{R}_1, \mathbf{R}_2 \in SO(3)$ and $\mathbf{T}_1, \mathbf{T}_2 \in SE(3)$.s

## Rotation Interpolation

One of the interpolations schemes is:

$$
\mathbf{R} = \left( \mathbf{R}_2 \mathbf{R}^T_1 \right)^\alpha \mathbf{R}_1, \quad \alpha \in \left[0, 1 \right],
$$

where $\mathbf{R}, \mathbf{R}_1, \mathbf{R}_2 \in SO(3)$. We see that when $\alpha = 0$, we have $\mathbf{R} = \mathbf{R}_1$, and $\mathbf{R} = \mathbf{R}_2$ when $\alpha = 1$. With this definition, we can guarantee close, i.e., $\mathbf{R} \in SO(3)$ for all $\alpha \in \left[0, 1 \right]$.

**Proof.** Let $\mathbf{R}_{21} = \mathbf{R}_2 \mathbf{R}^T_1 = \exp (\left[ \boldsymbol{\rho} \right]_\times)$. Then, we have:

$$
\mathbf{R}^\alpha_{21} = \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right)^\alpha = \exp \left( \alpha \left[ \boldsymbol{\rho} \right]_\times \right) \in SO(3).
$$

One way to interepret the interpolation scheme is that it enforces a constant angular velocity, $\boldsymbol{\omega}$. If the rotation matrix is a function of time, $\mathbf{R}(t)$, then the scheme is:

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

which is the solution to the Poisson's equation:

$$
\dot{\mathbf{R}}(t) = \left[ \boldsymbol{\omega} \right]_\times \mathbf{R}(t).
$$
