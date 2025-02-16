# Jacobians

## Definition

Consider a rotation matrix $\mathbf{R} \in SO(3)$ with Lie algebra $\left[ \boldsymbol{\rho} \right]_\times = \left[ \phi \mathbf{u} \right]_\times$ where $\phi \in \mathbb{R}$ is the angle of rotation and $\mathbf{u} \in \mathbb{R}^3$ is the unit axis of rotation vector. Multiple Jacobians can be derived in this setting:

| | Jacobian | Supplementary | |
| - | - | - | - |
| Jacobian with respect to the rotated vector, $\mathbf{x}$ | $\begin{align*} \frac{\partial \left(\mathbf{R} \mathbf{x} \right)}{\partial \mathbf{x}} = \frac{\partial \left( \mathbf{q} \otimes \mathbf{x} \otimes \mathbf{q} \right)}{\partial \mathbf{x}} = \mathbf{R} \in SO(3) \end{align*}$ |
| Jacobian with respect to the angle of rotation, $\phi$ | Using Rodrigues' formula $\mathbf{R} = \cos \phi \mathbf{I} + \left( 1- \cos \phi \right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T - \sin \phi \left[ \hat{\mathbf{e}} \right]_\times$, we have: <br> <br> $\begin{align*} \frac{ \partial \mathbf{R}}{\partial \phi} &= - \sin \phi \mathbf{I} + \sin \phi \hat{\mathbf{e}} \hat{\mathbf{e}}^T - \cos \phi \left[ \hat{\mathbf{e}} \right]_\times \\  &= \sin \phi \underbrace{\left( -\mathbf{I} + \hat{\mathbf{e}} \hat{\mathbf{e}}^T \right)}_{\left[ \hat{\mathbf{e}} \right]^2_\times} - \cos \phi \left[ \hat{\mathbf{e}} \right]_\times \\ &= -\cos \phi \left[ \hat{\mathbf{e}} \right]_\times -  (1 - \cos \phi) \underbrace{\left[ \hat{\mathbf{e}} \right]_\times \hat{\mathbf{e}}}_{\mathbf{0}}  \hat{\mathbf{e}}^T + \sin \phi \left[ \hat{\mathbf{e}} \right]^2_\times \\ &= -\left[ \hat{\mathbf{e}} \right]_\times \underbrace{\left(\cos \phi \mathbf{I} + (1 - \cos \phi) \hat{\mathbf{e}} \hat{\mathbf{e}}^T - \sin \phi \left[ \hat{\mathbf{e}} \right]_\times \right)}_{\mathbf{R}} \\ &= - \left[ \hat{\mathbf{e}} \right]_\times \mathbf{R} \end{align*}$ | |
| Jacobian with respect to the rotation vector, $\boldsymbol{\rho}$ | Consider a rotation of an arbitrary vector $\mathbf{x} \in \mathbb{R}^3$. We have: <br> <br> $\begin{align*} \frac{\partial \left( \mathbf{R} \mathbf{x} \right)}{\partial \boldsymbol  {\rho}} &= \lim_{\delta \boldsymbol{\rho} \rightarrow 0}  \frac{\exp \left( \left[ \boldsymbol{\rho} + \delta \boldsymbol{\rho} \right]_\times \right) \mathbf{x} - \exp \left(\left[ \boldsymbol{\rho} \right]_\times \right) \mathbf{x}}{\delta \boldsymbol{\rho}} \\ &= \lim_{\delta \boldsymbol{\rho} \rightarrow \mathbf{0}}  \frac{\exp \left( \left[ \mathbf{J}_l \delta \boldsymbol{\rho} \right]_\times \right) \exp \left(\left[ \boldsymbol{\rho} \right]_\times\right) \mathbf{x} - \exp \left(\left[ \boldsymbol{\rho} \right]_\times\right) \mathbf{x}}{\delta \boldsymbol{\rho}} \\ &= \lim_{\delta \boldsymbol{\rho} \rightarrow \mathbf{0}}  \frac{\left(\mathbf{I} + \left[ \mathbf{J}_l \delta \boldsymbol{\rho} \right]_\times \right) \exp \left( \left[ \boldsymbol{\rho} \right]_\times\right) \mathbf{x} - \exp \left(\left[ \boldsymbol{\rho} \right]_\times\right) \mathbf{x}}{\delta \boldsymbol{\rho}} \\ &= \lim_{\delta \boldsymbol{\rho} \rightarrow \mathbf{0}}  \frac{\left[ \mathbf{J}_l \delta \boldsymbol{\rho} \right]_\times  \exp \left(\left[ \boldsymbol{\rho} \right]_\times\right) \mathbf{x}}{\delta \boldsymbol{\rho}} \\ &= \lim_{\delta \boldsymbol{\rho} \rightarrow \mathbf{0}}  \frac{-\left[ \exp \left(\left[ \boldsymbol{\rho} \right]_\times\right) \mathbf{x} \right]_\times \mathbf{J}_l \delta \boldsymbol{\rho}}{\delta \boldsymbol{\rho}} \\ &= - \left[ \mathbf{R} \mathbf{x} \right]_\times \mathbf{J}_l(\boldsymbol{\rho}) \\ &= -\mathbf{R} \left[ \mathbf{x} \right]_\times \mathbf{R}^T \mathbf{R} \mathbf{J}_r (\boldsymbol{\rho}) = -\mathbf{R} \left[ \mathbf{x} \right]_\times \mathbf{J}_r (\boldsymbol{\rho}) \end{align*}$ | Per Barfoot, the directional derivatives (along the $i$'th axes $\mathbf{I}$, denoted as $\mathbf{I}_i$) with respect to $\rho_i$ is: <br> <br> $\begin{align*} \frac{\partial \left( \mathbf{R} \mathbf{x} \right)}{\partial \rho_i} = \lim_{h \rightarrow 0} \frac{\exp \left( \left[ \boldsymbol{\rho} + h \mathbf{I}_i \right]_\times \right) \mathbf{x} - \exp \left(\left[ \boldsymbol{\rho} \right]_\times \right) \mathbf{x}}{h} \end{align*}$ <br> <br> Since we are interested in the limit of $h$ infinitely small, using the BCH formula, we get: <br> <br> $\begin{align*} \exp \left( \left[ \boldsymbol{\rho} + h \mathbf{I}_i \right]_\times \right) &\approx \exp \left( \left[ \mathbf{J}_l h \mathbf{I}_i \right]_\times \right) \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right) \\ &\approx \left(1 + h \left[ \mathbf{J}_l \mathbf{I}_i \right]_\times \right) \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right) \end{align*}$ <br> <br> Finally, we have: <br> <br> $\begin{align*} \frac{\partial \left( \mathbf{R} \mathbf{x} \right)}{\partial \rho_i} = \left[ \mathbf{J}_l \mathbf{I}_i \right]_\times \mathbf{R} \mathbf{x} = - \left[\mathbf{R} \mathbf{x} \right]_\times \mathbf{J}_l \mathbf{I}_i \end{align*}$ <br> <br> Stacking the three directional derivatives alongside one another yields to the desired Jacobian. | If $\mathbf{R} \mathbf{x}$ appears inside another scalar function, $u(\mathbf{y})$, with $\mathbf{y} = \mathbf{R} \mathbf{x}$, we can use the chain rule: <br> <br> $\begin{align*} \frac{\partial u}{ \partial \boldsymbol{\rho}} = \frac{\partial u}{ \partial \mathbf{y}} \frac{\partial \mathbf{y}}{ \partial \boldsymbol{\rho}}= \frac{\partial u}{\partial \mathbf{y}} \left[ \mathbf{R} \mathbf{x} \right]_\times \mathbf{J}_l \end{align*}$ |
| Jacobian with respect to the Euler Angles, $(\theta_1, \theta_2, \theta_3)$ | Consider the 1-2-3 Euler angles and denote it as $\boldsymbol{\theta} = \left( \theta_1, \theta_2, \theta_3 \right)$ corresponding to the roll, pitch, and yaw angles. The rotation matrix can be represented as: <br> <br> $\begin{align*} \mathbf{R}(\boldsymbol{\theta}) &= \mathbf{R}_3 (\theta_3) \mathbf{R}_2(\theta_2) \mathbf{R}_1(\theta_1) \end{align*}$ <br> <br> We have (see proofs): <br> <br> $\begin{align*} \frac{\partial \left(\mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{ \partial \boldsymbol{\theta}} &= \left[ \begin{array}{ccc} \frac{\partial \left(\mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_1} & \frac{\partial \left(\mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_2} & \frac{\partial \left(\mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_3} & \end{array} \right] \\ &= \left[ \mathbf{R} (\boldsymbol{\theta}) \mathbf{v} \right]_\times \underbrace{\left[ \begin{array}{ccc} \mathbf{R}_3(\theta_3) \mathbf{R}_2 (\theta_2) \mathbf{I}_1 & \mathbf{R}_3(\theta_3) \mathbf{I}_2 & \mathbf{I}_3  \end{array} \right]}_{\mathbf{S}(\theta_2, \theta_3)} \\ &= \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times \mathbf{S}(\theta_2, \theta_3) \end{align*}$ |

## Proofs

??? cnote "Jacobian with respect to Euler Angles"

    Consider the 1-2-3 Euler angles and denote it as $\boldsymbol{\theta} = \left( \theta_1, \theta_2, \theta_3 \right)$ corresponding to the roll, pitch, and yaw angles. The rotation matrix can be represented as:

    $$
    \begin{align*}
    \mathbf{R}(\boldsymbol{\theta}) &= \mathbf{R}_3 (\theta_3) \mathbf{R}_2(\theta_2) \mathbf{R}_1(\theta_1).
    \end{align*}
    $$

    Taking the derivative of the rotation matrix with respect to the Euler angles yields to:

    $$
    \begin{alignat*}{2}
    \frac{\partial \mathbf{R}(\boldsymbol{\theta})}{\partial \theta_3} &=
    \frac{\partial \left( \mathbf{R}_3 (\theta_3) \mathbf{R}_2(\theta_2) \mathbf{R}_1(\theta_1) \right)}{\partial \theta_3} &&= -\left[ \mathbf{I}_3 \right]_\times \mathbf{R}(\boldsymbol{\theta}) \\
    \frac{\partial \mathbf{R}(\boldsymbol{\theta})}{\partial \theta_2} &=
    \frac{\partial \left( \mathbf{R}_3 (\theta_3) \mathbf{R}_2(\theta_2) \mathbf{R}_1(\theta_1) \right)}{\partial \theta_2} &&= -\mathbf{R}_3(\theta_3) \left[ \mathbf{I}_2 \right]_\times \mathbf{R}_2 (\theta_2) \mathbf{R}_1 (\theta_1) \\
    \frac{\partial \mathbf{R}(\boldsymbol{\theta})}{\partial \theta_1} &=
    \frac{\partial \left( \mathbf{R}_3 (\theta_3) \mathbf{R}_2(\theta_2) \mathbf{R}_1(\theta_1) \right)}{\partial \theta_1} &&= -\mathbf{R}_3(\theta_3) \mathbf{R}_2 (\theta_2) \left[ \mathbf{I}_1 \right]_\times \mathbf{R}_1. \\
    \end{alignat*}
    $$

    If we take the derivative of the rotated vector with repect to the Euler angles:

    $$
    \begin{align*}
    \frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_3} &= -\left[\mathbf{I}_3 \right]_\times \mathbf{R}_3(\theta_3) \mathbf{R}_2(\theta_2) \mathbf{R}_1(\theta_1) \mathbf{v} \\
    &= -\left[ \mathbf{I}_3 \right]_\times \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \\
    &= \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times \mathbf{I}_3 \\
    \frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_2} &=  -\mathbf{R}_3(\theta_3) \left[\mathbf{I}_2 \right]_\times \mathbf{R}_2(\theta_2) \mathbf{R}_1 (\theta_1)\mathbf{v} \\
    &= -\mathbf{R}_3 (\theta_3) \left[ \mathbf{I}_2 \right]_\times \mathbf{R}^T_3(\theta_3) \mathbf{R}_3(\theta_3) \mathbf{R}_2(\theta_2) \mathbf{R}_1(\theta_1) \mathbf{v} \\
    &= -\left[ \mathbf{R}_3(\theta_3) \mathbf{I}_2 \right]_\times \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \\
    &= \left[\mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times \mathbf{R}_3(\theta_3) \mathbf{I}_2 \\
    \frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_1} &= -\mathbf{R}_3(\theta_3) \mathbf{R}_2(\theta_2) \left[ \mathbf{I}_1 \right]_\times \mathbf{R}_1(\theta_1) \mathbf{v} \\
    &= -\mathbf{R}_3(\theta_3) \mathbf{R}_2(\theta_2) \left[ \mathbf{I}_1 \right]_\times \mathbf{R}^T_2(\theta_2) \mathbf{R}^T_3(\theta_3) \mathbf{R}_3(\theta_3) \mathbf{R}_2(\theta_2) \mathbf{R}_1(\theta_1) \mathbf{v} \\
    &= -\left[ \mathbf{R}_3 (\theta_3) \mathbf{R}_2 (\theta_2) \mathbf{I}_1 \right]_\times \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \\
    &= \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times \mathbf{R}_3(\theta_3) \mathbf{R}_2(\theta_2) \mathbf{I}_1.
    \end{align*}
    $$

    Summarizing the result, we have:

    $$
    \begin{align*}
    \frac{\partial \left(\mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{ \partial \boldsymbol{\theta}} &=
    \left[
    \begin{array}{ccc}
    \frac{\partial \left(\mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_1} &
    \frac{\partial \left(\mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_2} &
    \frac{\partial \left(\mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_3} &
    \end{array}
    \right] \\
    &= \left[ \mathbf{R} (\boldsymbol{\theta}) \mathbf{v} \right]_\times
    \underbrace{\left[
    \begin{array}{ccc}
    \mathbf{R}_3(\theta_3) \mathbf{R}_2 (\theta_2) \mathbf{I}_1
    & \mathbf{R}_3(\theta_3) \mathbf{I}_2 & \mathbf{I}_3 
    \end{array}
    \right]}_{\mathbf{S}(\theta_2, \theta_3)} \\
    &= \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times \mathbf{S}(\theta_2, \theta_3),
    \end{align*}
    $$

    which is true regardless of the choice of Euler set.

??? cnote "Principle Rotation Matrix Derivatives"
    The principle rotation matrices are:

    $$
    \begin{align*}
    \mathbf{R}_1(\theta_1) &=
    \left[
    \begin{array}{ccc}
    1 & 0 & 0 \\
    0 & \cos \theta_1 & \sin \theta_1 \\
    0 & -\sin \theta_1 & \cos \theta_1
    \end{array}
    \right] \\
    \mathbf{R}_2(\theta_2) &=
    \left[
    \begin{array}{ccc}
    \cos \theta_2 & 0 & -\sin \theta_2 \\
    0 & 1 & 0 \\
    \sin \theta_2 & 0 & \cos \theta_2
    \end{array}
    \right] \\
    \mathbf{R}_3(\theta_3) &=
    \left[
    \begin{array}{ccc}
    \cos \theta_3 & \sin \theta_3 & 0 \\
    -\sin \theta_3 & \cos \theta_3 & 0 \\
    0 & 0 & 1
    \end{array}
    \right].
    \end{align*}
    $$

    The derivatives of the principle rotation matrices with respect to their angle of rotations are:

    $$
    \begin{alignat*}{2}
    \frac{\partial \mathbf{R}_1(\theta_1)}{ \partial \theta_1} &=
    \left[
    \begin{array}{ccc}
    0 & 0 & 0 \\
    0 & -\sin \theta_1 & \cos \theta_1 \\
    0 & -\cos \theta_1 & -\sin \theta_1
    \end{array}
    \right] &&=
    -\left[\mathbf{I}_1 \right]_\times \mathbf{R}_1 (\theta_1) \\
    \frac{\partial \mathbf{R}_2(\theta_2)}{ \partial \theta_2} &=
    \left[
    \begin{array}{ccc}
    -\sin \theta_2 & 0 & -\cos \theta_2 \\
    0 & 0 & 0\\
    \cos \theta_2 & 0 & -\sin \theta_2
    \end{array}
    \right] &&=
    -\left[\mathbf{I}_2 \right]_\times \mathbf{R}_2 (\theta_2) \\
    \frac{\partial \mathbf{R}_3(\theta_3)}{ \partial \theta_3} &=
    \left[
    \begin{array}{ccc}
    -\sin \theta_3 & \cos \theta_3 & 0 \\
    -\cos \theta_3 & -\sin \theta_3 & 0 \\
    0 & 0 & 0
    \end{array}
    \right] &&=
    -\left[\mathbf{I}_3\right]_\times \mathbf{R}_3 (\theta_3).
    \end{alignat*}
    $$

    Note that this property holds regardless if it is passive or active rotation.

??? cnote "General Derivative of a Rotation Matrix"

    In general, given a rotation vector $\boldsymbol{\rho} = \phi \mathbf{u}$ and the Rodrigues' formula:

    $$
    \begin{align*}
    \mathbf{R}(\boldsymbol{\rho}) = \mathbf{I} + \frac{\sin \theta}{ \theta} \left[ \boldsymbol{\rho} \right]_\times + \frac{1 - \cos \theta}{\theta^2} \left[ \boldsymbol{\rho} \right]^2_\times,
    \end{align*}
    $$

    the derivative of the rotation matrix with respect to a variable of interest (e.g., time or the rotation vector component etc.) can be expressed as:

    $$
    \begin{align*}
    \frac{\partial \left( \mathbf{R} \right)}{\partial x} = \left[ \mathbf{J}_r(\boldsymbol{\rho}) \frac{\partial \boldsymbol{\rho}}{\partial x} \right]_\times \mathbf{R}.
    \end{align*}
    $$

## References

1. Barfoot, T., **State Estimation for Robotics**
2. Solà, J., **Quaternion Kinematics for the Error-State Kalman Filter, 2017**
3. Solà et al. **A Micro Lie Theory for State Estimation in Robotics, 2021**
