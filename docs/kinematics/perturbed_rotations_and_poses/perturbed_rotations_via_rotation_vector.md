# Perturbed Rotations via Rotation Vector

Perturbation via rotation vector provides a new way of computing the Jacobian of a rotation matrix with respect to the rotation vector. The previous derivation requires to compute the left Jacobian which could be complicated.

Consider a left perturbation of a rotation matrix $\mathbf{R}$ with Lie algebra vector $\boldsymbol{\rho}$ by $\Delta \mathbf{R}$ with Lie algebra vector $\Delta \boldsymbol{\rho}$.  The change of result relative to this disturbance for a vector $\mathbf{v} \in \mathbb{R}^3$ is:

$$
\begin{align}
\frac{\partial \left(\mathbf{R} \mathbf{v}\right)}{\partial \Delta \boldsymbol{\rho}} &=
\lim_{\Delta \boldsymbol{\rho} \rightarrow \mathbf{0}}
\frac{\exp \left[\Delta \boldsymbol{\rho} \right]_\times \exp \left[ \boldsymbol{\rho}\right]_\times \mathbf{v} - \exp \left[ \boldsymbol{\rho} \right]_\times \mathbf{v}}{\Delta \boldsymbol{\rho}} \\
&=
\lim_{\Delta \boldsymbol{\rho} \rightarrow \mathbf{0}}
\frac{\left(\mathbf{I} + \left[\Delta \boldsymbol{\rho} \right]_\times \right) \exp \left[ \boldsymbol{\rho} \right]_\times \mathbf{v} - \exp \left[ \boldsymbol{\rho} \right]_\times \mathbf{v}}{\Delta \boldsymbol{\rho}} \\
&=
\lim_{\Delta \boldsymbol{\rho} \rightarrow \mathbf{0}}
\frac{\left[\Delta \boldsymbol{\rho} \right]_\times \mathbf{R} \mathbf{v}}{\Delta \boldsymbol{\rho}} \\
&=
\lim_{\Delta \boldsymbol{\rho} \rightarrow \mathbf{0}}
\frac{-\left[ \mathbf{R} \mathbf{v} \right]_\times \Delta \boldsymbol{\rho}}{\Delta \boldsymbol{\rho}} \\
&= -\left[ \mathbf{R} \mathbf{v} \right]_\times.
\end{align}
$$
