## Jacobian with respect to Lie Algebra Vector

Consider a rotation of a point $\mathbf{v} \in \mathbb{R}^3$ with rotation matrix $\mathbf{R} \in SO(3)$ with Lie Algebra vector $\boldsymbol{\rho} \in \mathbb{R}^3$. Then the Jacobian of the rotated point with respect to the Lie algebra vector representing the rotation is:

$$
\frac{\partial \left( \mathbf{R} \mathbf{v} \right)}{ \partial \boldsymbol{\rho}}.
$$

To do this, we start by taking the derivative with respect to a single element of $\boldsymbol{\rho} = \left( \rho_1, \rho_2, \rho_3 \right)$. Applying the definition of a derivative along the $\mathbf{I}_i$ direction, we have:

$$
\frac{\partial \left( \mathbf{R} \mathbf{v} \right)}{\partial \rho_i} = \lim_{h \rightarrow 0} \frac{\exp \left( \left[ \boldsymbol{\rho} + h \mathbf{I}_i \right]_\times \right) \mathbf{v} - \exp \left(\left[ \boldsymbol{\rho} \right]_\times \right) \mathbf{v}}{h},
$$

which is referred as a **directional derivative**. Since we are interested in the limit of $h$ infinitely small, using the BCH formula, we get:

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

$$
\frac{\partial \left( \mathbf{R} \mathbf{v} \right)}{\partial \boldsymbol{\rho}} = - \left[\mathbf{R} \mathbf{v} \right]_\times \mathbf{J}_l.
$$

Note here that the result is a tensor. 

We can also take the derivative with respect to the tangent vector directly. Let $\delta \rho$ be a small perturbation. Using the definition of derivative again:

$$
\begin{align}
\frac{\partial \left( \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right) \mathbf{v} \right)}{\partial \boldsymbol{\rho}} &= \lim_{\delta \boldsymbol{\rho} \rightarrow 0} 
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

If $\mathbf{R} \mathbf{v}$ appears inside another scalar function, $u(\mathbf{x})$, with $\mathbf{x} = \mathbf{R} \mathbf{v}$, we can use the chain rule:

$$
\frac{\partial u}{ \partial \boldsymbol{\rho}} = 
\frac{\partial u}{ \partial \mathbf{x}} 
\frac{\partial \mathbf{x}}{ \partial \boldsymbol{\rho}}
= \frac{\partial u}{\partial \mathbf{x}} 
\left[ \mathbf{R} \mathbf{v} \right]_\times \mathbf{J}_l.
$$



## Derivative of a Rotation Matrix via Perturbation Model




<!-- ## Derivative of a Rotation Matrix

Given a rotation vector $\boldsymbol{\rho} = \theta \hat{\mathbf{e}}$, we have formulated Rodrigues' formula previously as follows:

$$
\begin{align}
\mathbf{R}(\boldsymbol{\rho}) = \mathbf{R}(\hat{\mathbf{e}}, \theta)  &= \mathbf{e}^{\left[ \boldsymbol{\rho} \right]_\times} = \mathbf{I} + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times + \left(1 - \cos \theta \right) \left[ \hat{\mathbf{e}} \right]^2_\times \\
&= \mathbf{I} + \frac{\sin \theta}{\theta} \left[ \boldsymbol{\rho} \right]_\times + \frac{1 - \cos \theta}{\theta^2} \left[ \boldsymbol{\rho} \right]^2_\times.
\end{align}
$$

Derivative of a rotation matrix with respect to a variable of interest (whether it is time or a rotation vector component, $\rho_1$ etc.) can be expressed as:

$$
\frac{\partial}{\partial x} \mathbf{R}(\boldsymbol{\rho}) = \left[ \mathbf{J} \frac{\partial \boldsymbol{\rho}}{\partial x} \right]_\times \mathbf{R}(\boldsymbol{\rho}),
$$

where $\mathbf{J}$ is the Jacobian matrix that is derived from the $SE(3)$ exponential map matrix:

$$
\mathbf{J} = \mathbf{I} + \frac{1 - \cos \theta}{\theta^2} \left[ \boldsymbol{\rho} \right]_\times + \frac{\theta - \sin \theta}{\theta^3} \left[ \boldsymbol{\rho} \right]^2_\times.
$$ -->