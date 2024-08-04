# Axis-Angle

## Definition

Rotation can be respresented by a unit vector, $\hat{\mathbf{e}} \in \mathbb{R}^3$ and a rotation angle $\theta \in \mathbb{R}$. Let $\boldsymbol{\rho} = \theta \hat{\mathbf{e}} \in \mathbb{R}^3$, with $\left[ \boldsymbol{\rho} \right]_\times \in \mathfrak{so}(3)$. 

Given frames $F_\alpha$ and $F_\beta$, $\boldsymbol{\rho}_{\beta \alpha} = \theta_{\beta \alpha} \hat{\mathbf{e}}_{\beta \alpha}$ denotes the rotation vector from $F_\beta$ to $F_\alpha$. It does not matter in which frame $\hat{\mathbf{e}}$ is expressed in since $\mathbf{R} \hat{\mathbf{e}} = \hat{\mathbf{e}}$.

| Axis-Angle Representation | |
| ----- | --------------------------------------- |
|  Rodrigues' Formula | $\begin{align*} \mathbf{R}^{\beta}_{\alpha} &= \exp{\left( \left[ \boldsymbol{\rho}_{\beta \alpha} \right]_\times \right)} \\ &= \mathbf{I} + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times + \left(1 - \cos \theta \right) \left[ \hat{\mathbf{e}} \right]^2_\times \\ &= \cos \theta \mathbf{I} + \left(1 - \cos \theta \right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times \end{align*}$ |
| Logarithmic Mapping | $\begin{align*} \left[ \boldsymbol{\rho}_{\beta \alpha} \right]_\times &= \ln \left( \mathbf{R}^\beta_{\alpha} \right) = \sum^{\infty}_{k=0} \frac{(-1)^k}{k + 1} \left( \mathbf{R}^{\beta}_{\alpha} - \mathbf{I} \right)^{k + 1}  \end{align*}$ |
| Closed-Form Rotation Angle | $\begin{align*} \theta_{\beta \alpha} &= \text{arccos} \left( \frac{\text{tr} \left( \mathbf{R}^{\beta}_{\alpha}\right) - 1}{2} \right) \\ &= \text{arccos} \left( \frac{1}{2} \left( \mathbf{R}^{\beta}_{\alpha \ 1,1} + \mathbf{R}^{\beta}_{\alpha \ 2, 2} + \mathbf{R}^{\beta}_{\alpha \ 1,1} - 1\right) \right) \end{align*}$ |
| Closed-Form Rotation Vector | $\begin{align*} \boldsymbol{\rho}_{\beta \alpha} &= \frac{\theta_{\beta \alpha}}{2 \text{sin} (\theta_{\beta \alpha})} \left[ \begin{array}{c} \mathbf{R}^{\alpha}_{\beta \ 2,3} - \mathbf{R}^{\alpha}_{\beta \ 3,2} \\ \mathbf{R}^{\alpha}_{\beta \ 3,1} - \mathbf{R}^{\alpha}_{\beta \ 1,3} \\ \mathbf{R}^{\alpha}_{\beta \ 1,2} - \mathbf{R}^{\alpha}_{\beta \ 2,1} \end{array} \right]. \end{align*}$ |
| Infinitesimal Rotations | $\begin{align*} \mathbf{R^{\beta}_{\alpha}}=  e^{\left[\boldsymbol{\rho}_{\beta \alpha} \right]_{\times}} \approx  \sum^{\infty}_{k=0} \frac{\left[\boldsymbol{\rho}_{\beta \alpha} \right]^k_{\times}}{k!} \approx \mathbf{I}_3 + \left[\boldsymbol{\rho}_{\beta \alpha} \right]_{\times} \end{align*}$ |

Note that rotation vector and Euler angles are identical for small perturbation.

## Proofs

??? cnote "Rodrigues' Formula"

    Let $F_\alpha$ and $F_\beta$ be two frames. A rotation can be represented by a rotation axis $\hat{\mathbf{e}}$ and an angle $\theta$ (from $F_\beta$ to $F_\alpha$), or equivalently by a 3D vector $\boldsymbol{\rho} = \theta \hat{\mathbf{e}}$. The rotation matrix can be computed via exponential mapping:

    $$
    \begin{align}
    \mathbf{R}^\beta_{\alpha} =e^{\left[\boldsymbol{\rho} \right]_\times} &= e^{ \left[ \theta \hat{\mathbf{e}} \right]_\times} = \sum^{\infty}_{k = 0} \frac{1}{k!} \left(\theta \left[\hat{\mathbf{e}} \right]_\times \right)^k \\
    &= \mathbf{I} + \theta \left[ \hat{\mathbf{e}} \right]_\times + \frac{\theta^2}{2} \left[ \hat{\mathbf{e}} \right]^2_\times + 
    \frac{\theta^3}{3!} \left[ \hat{\mathbf{e}} \right]^2_\times + \ldots \\
    &= \mathbf{I} + \left( \theta - \frac{\theta^3}{3!} + \ldots \right) \left[ \hat{\mathbf{e}} \right]_\times + \left( \frac{\theta^2}{2} - \frac{\theta^4}{4!} + \ldots \right) \left[ \hat{\mathbf{e}} \right]^2_\times \\
    &= \mathbf{I} + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times + \left(1 - \cos \theta \right) \left[ \hat{\mathbf{e}} \right]^2_\times \\
    &= \cos \theta \mathbf{I} + \left(1 - \cos \theta \right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times,
    \end{align}
    $$

    or simply:

    $$
    \mathbf{R} = \cos \theta \mathbf{I} + \left(1 - \cos \theta \right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T + \sin \theta \left[ \hat{\mathbf{e}} \right]_{\times}. \label{rodrigues_formula}
    $$

## References

   1. Groves, P., **Principles of GNSS, Inertial, and Multisensor Integrated Navigation Systems, Second Edition**
   2. Sola, J., **Quaternion Kinematics for the Error-State Kalman Filter**
   3. Ma., Y., **An Invitation to 3-D Vision: From Images to Models**, 2001
