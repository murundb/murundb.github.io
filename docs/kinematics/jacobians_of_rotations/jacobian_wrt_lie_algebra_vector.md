# Jacobian with respect to Lie Algebra Vector

## Derivative with Respect to the Angle of Rotation

!!! cnote "Derivative of rotation matrix with respect to the angle of rotation"

    Given a rotation vector $\boldsymbol{\rho} = \phi \hat{\mathbf{a}}$, and the corresponding rotation matrix, $\mathbf{R}$:

    $$
    \frac{ \partial \mathbf{R}}{\partial \phi} = - \left[ \hat{\mathbf{a}} \right]_\times \mathbf{R}.
    $$

**Proof**. Rodrigues' formula is:

$$
\mathbf{R} = \cos \phi \mathbf{I} + \left( 1- \cos \phi \right) \hat{\mathbf{a}} \hat{\mathbf{a}}^T - \sin \phi \left[ \hat{\mathbf{a}} \right]_\times.
$$

The partial derivative of $\mathbf{R}$ with respect to the rotation angle is:

$$
\begin{align}
\frac{ \partial \mathbf{R}}{\partial \phi} &=
- \sin \phi \mathbf{I} + \sin \phi \hat{\mathbf{a}} \hat{\mathbf{a}}^T - \cos \phi \left[ \hat{\mathbf{a}} \right]_\times \\ 
&= \sin \phi \underbrace{\left( -\mathbf{I} + \hat{\mathbf{a}} \hat{\mathbf{a}}^T \right)}_{\left[ \hat{\mathbf{a}} \right]^2_\times} - \cos \phi \left[ \hat{\mathbf{a}} \right]_\times \\
&= -\cos \phi \left[ \hat{\mathbf{a}} \right]_\times - 
(1 - \cos \phi) \underbrace{\left[ \hat{\mathbf{a}} \right]_\times \hat{\mathbf{a}}}_{\mathbf{0}}  \hat{\mathbf{a}}^T + \sin \phi \left[ \hat{\mathbf{a}} \right]^2_\times \\
&= -\left[ \hat{\mathbf{a}} \right]_\times \underbrace{\left(\cos \phi \mathbf{I} + (1 - \cos \phi) \hat{\mathbf{a}} \hat{\mathbf{a}}^T - \sin \phi \left[ \hat{\mathbf{a}} \right]_\times \right)}_{\mathbf{R}} \\
&= - \left[ \hat{\mathbf{a}} \right]_\times \mathbf{R}.
\end{align}
$$

## Derivative with Respect to the Rotation Vector

Consider a rotation of an arbitrary vector $\mathbf{v} \in \mathbb{R}^3$ with rotation matrix $\mathbf{R} \in SO(3)$ with Lie Algebra vector $\boldsymbol{\rho} = \left[ \begin{array}{ccc} \rho_1 & \rho_2 & \rho_3 \end{array} \right]^T \in \mathbb{R}^3$. Then the Jacobian of the rotated point with respect to the Lie algebra vector representing the rotation is:

$$
\frac{\partial \left( \mathbf{R} \mathbf{v} \right)}{ \partial \boldsymbol{\rho}}.
$$

The directional derivatives (along the $i$'th axes $\mathbf{I}$, denoted as $\mathbf{I}_i$) with respect to $\rho_i$ is:

$$
\frac{\partial \left( \mathbf{R} \mathbf{v} \right)}{\partial \rho_i} = \lim_{h \rightarrow 0} \frac{\exp \left( \left[ \boldsymbol{\rho} + h \mathbf{I}_i \right]_\times \right) \mathbf{v} - \exp \left(\left[ \boldsymbol{\rho} \right]_\times \right) \mathbf{v}}{h},
$$

Since we are interested in the limit of $h$ infinitely small, using the BCH formula, we get:

$$
\begin{align}
\exp \left( \left[ \boldsymbol{\rho} + h \mathbf{I}_i \right]_\times \right) &\approx \exp \left( \left[ \mathbf{J}_l h \mathbf{I}_i \right]_\times \right) \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right) \\
&\approx \left(1 + h \left[ \mathbf{J}_l \mathbf{I}_i \right]_\times \right) \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right),
\end{align}
$$

where $\mathbf{J}_l$ is the left Jacobian of $SO(3)$, evaluated at $\boldsymbol{\rho}$.  Then we have:

$$
\frac{\partial \left( \mathbf{R} \mathbf{v} \right)}{\partial \rho_i} = \left[ \mathbf{J}_l \mathbf{I}_i \right]_\times \mathbf{R} \mathbf{v} = - \left[\mathbf{R} \mathbf{v} \right]_\times \mathbf{J}_l \mathbf{I}_i.
$$

Stacking the three directional derivatives alongside one another yields to the desired Jacobian:

!!! cnote "Jacobian with respect to the Lie Algebra Vector"

    $$
    \frac{\partial \left( \mathbf{R} \mathbf{v} \right)}{\partial \boldsymbol{\rho}} = - \left[\mathbf{R} \mathbf{v} \right]_\times \mathbf{J}_l.
    $$

    If $\mathbf{R} \mathbf{v}$ appears inside another scalar function, $u(\mathbf{x})$, with $\mathbf{x} = \mathbf{R} \mathbf{v}$, we can use the chain rule:

    $$
    \frac{\partial u}{ \partial \boldsymbol{\rho}} = 
    \frac{\partial u}{ \partial \mathbf{x}} 
    \frac{\partial \mathbf{x}}{ \partial \boldsymbol{\rho}}
    = \frac{\partial u}{\partial \mathbf{x}} 
    \left[ \mathbf{R} \mathbf{v} \right]_\times \mathbf{J}_l.
    $$

**Direct derivative method.** We can take the derivative with respect to the tangent vector directly. Let $\delta \boldsymbol{\rho}$ be a small perturbation. Using the definition of derivative again:

$$
\begin{align}
\frac{\partial \left( \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right) \mathbf{v} \right)}{\partial \boldsymbol  {\rho}} &= \lim_{\delta \boldsymbol{\rho} \rightarrow 0} 
\frac{\exp \left( \left[ \boldsymbol{\rho} + \delta \boldsymbol{\rho} \right]_\times \right) \mathbf{v} - \exp \left(\left[ \boldsymbol{\rho} \right]_\times \right) \mathbf{v}}{\delta \boldsymbol{\rho}} \\
&= \lim_{\delta \boldsymbol{\rho} \rightarrow 0} 
\frac{\exp \left( \left[ \mathbf{J}_l \delta \boldsymbol{\rho} \right]_\times \right) \exp \left(\left[ \boldsymbol{\rho} \right]_\times\right) \mathbf{v} - \exp \left(\left[ \boldsymbol{\rho} \right]_\times\right) \mathbf{v}}{\delta \boldsymbol{\rho}} \\
&= \lim_{\delta \boldsymbol{\rho} \rightarrow 0} 
\frac{\left(\mathbf{I} + \left[ \mathbf{J}_l \delta \boldsymbol{\rho} \right]_\times \right) \exp \left( \left[ \boldsymbol{\rho} \right]_\times\right) \mathbf{v} - \exp \left(\left[ \boldsymbol{\rho} \right]_\times\right) \mathbf{v}}{\delta \boldsymbol{\rho}} \\
&= \lim_{\delta \boldsymbol{\rho} \rightarrow 0} 
\frac{\left[ \mathbf{J}_l \delta \boldsymbol{\rho} \right]_\times  \exp \left(\left[ \boldsymbol{\rho} \right]_\times\right) \mathbf{v}}{\delta \boldsymbol{\rho}} \\
&= \lim_{\delta \boldsymbol{\rho} \rightarrow 0} 
\frac{-\left[ \exp \left(\left[ \boldsymbol{\rho} \right]_\times\right) \mathbf{v} \right]_\times \mathbf{J}_l \delta \boldsymbol{\rho}}{\delta \boldsymbol{\rho}} \\
&= - \left[ \mathbf{R} \mathbf{v} \right]_\times \mathbf{J}_l.
\end{align}
$$
