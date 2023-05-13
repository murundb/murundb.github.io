The BCH formula provides a solution to $\mathbf{C}$ to the equation:

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