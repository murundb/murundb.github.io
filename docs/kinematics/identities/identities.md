# Idenitities

Several identities need to be established before establishing kinematic properties or deriving rotation matrix derivative. We have a Lie group $\mathbf{R} \in SO(3)$, a corresponding Lie algebra $\boldsymbol{\rho} = \theta \hat{\mathbf{a}}$, and vectors $\mathbf{r}, \mathbf{v}, \mathbf{s} \in \mathbb{R}^3$.

## Identity 1

!!! cnote "Identity 1"

    $$
    \left[ \mathbf{r} \right]_\times \mathbf{s} = -\left[ \mathbf{s} \right]_\times \mathbf{r}.
    $$

## Identity 2

!!! cnote "Identity 2"
    $$
    \left[ \mathbf{R} \mathbf{s} \right]_\times = \mathbf{R} \left[ \mathbf{s} \right]_\times \mathbf{R}^T.
    $$

## Identity 3

!!! cnote "Derivative of rotation matrix with respect to the angle of rotation"

    Given an axis-angle, $\left(\hat{\mathbf{a}}, \phi \right)$, and the corresponding rotation matrix, $\mathbf{R}$:

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

## Identity 4

!!! cnote "Identity 4: Derivative of a rotated vector with respect to the rotation angle"

    Consider an $\alpha-\beta-\gamma$ Euler sequence:

    $$
    \mathbf{R}(\boldsymbol{\theta}) = \mathbf{R}_{\gamma}(\theta_3) \mathbf{R}(\theta_2) \mathbf{R}_\alpha(\theta_1),
    $$

    where $\boldsymbol{\theta} = (\theta_1, \theta_2, \theta_3)$. Let $\mathbf{v}$ be an arbitrary constant vector. Then:

    $$
    \begin{align}
    \frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \boldsymbol{\theta}} &=
    \left[
    \begin{array}{ccc}
    \frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_1} &
    \frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_2} &
    \frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_3}
    \end{array}
    \right] \\
    &= \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times 
    \underbrace{\left[
    \begin{array}{ccc}
    \mathbf{R}_\gamma (\theta_3) \mathbf{R}_{\beta} (\theta_2) \mathbf{I}_\alpha &
    \mathbf{R}_\gamma (\theta_3) \mathbf{I}_\beta & \mathbf{I}_\gamma
    \end{array}
    \right]}_{\mathbf{S}(\theta_2, \theta_3)} \\
    &= \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times  \mathbf{S}(\theta_2, \theta_3),
    \end{align}
    $$

    which is true regardless of the choice of Euler set.

**Proof**. Using Identity 3, for any principle-axis rotation about an axis $\alpha$, we have:

$$
\frac{\partial \mathbf{R}_{\alpha}(\theta)}{\partial \theta} = 
- \left[ \mathbf{I}_{\alpha} \right]_\times \mathbf{R}_{\alpha}(\theta),
$$

where $\mathbf{I}_\alpha$ is column $\alpha$ of the identity matrix. Using identities 1 and 2:

$$
\begin{align}
\frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_3} &=
-\left[ \mathbf{I}_\gamma \right]_\times \mathbf{R}_\gamma (\theta_3) \mathbf{R}_\beta (\theta_2) \mathbf{R}_\alpha (\theta_1) \mathbf{v} = \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times \mathbf{I}_\gamma \\
\frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_2} &=
-\mathbf{R}_\gamma (\theta_3) \left[ \mathbf{I}_\beta \right]_\times \mathbf{R}_\beta (\theta_2) \mathbf{R}_\alpha (\theta_1) \mathbf{v} = \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times \mathbf{R}_\gamma (\theta_3) \mathbf{I}_\beta \\
\frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_1} &=
-\mathbf{R}_\gamma (\theta_3) \mathbf{R}_\beta (\theta_2) \left[ \mathbf{I}_\alpha \right]_\times \mathbf{R}_\alpha (\theta_1) \mathbf{v} = \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times \mathbf{R}_\gamma(\theta_3) \mathbf{R}_\beta (\theta_2) \mathbf{I}_\alpha.
\end{align}
$$
