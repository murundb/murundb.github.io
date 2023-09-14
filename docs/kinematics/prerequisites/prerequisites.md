# Prerequisites

!!! cnote "Pose and Attitude"

    **Attitude** describes the orientation of the axes of one coordinate frame with respect to those of another. Let $F_\alpha$ be a frame attached to an object of interest and let $F_\beta$ be the reference frame. Then we can represent the attitude of the object by matrix $\mathbf{R}^{\beta}_{\alpha}$ (some also use $\mathbf{R}^{\alpha}_{\beta}$), which
    represents the rotation from frame $F_\alpha$ to frame $F_\beta$.

    Vehicles typically have six degrees of freedom: three in translation and three in rotation. This six-degree-of-freedom geometric configuration is known
    as the **pose** of the vehicle.

Kinematic quantities, such as position, velocity, acceleration, and angular rate, involve three coordinate frames:

1. The frame whose motion is described, known as the **object frame**, $F_{\alpha}$ 
2. The frame with which that motion is respect to, known as the **reference frame**, $F_{\beta}$ 
3. The set of axes in which that motion is represented, known as the **resolving frame**, $F_{\gamma}$. 

Most books use only two frames to describe motion and assume that the resolving frame is same as the reference frame. Mostly, it is suffice but when the reference frame is rotating, the the resolving frame needs to be specified. This is because observers in $F_\alpha$ and $F_\beta$ do not see the same motion because of their own relative motions.

Resolving frame origin does need not be defined; only the orientation of its axes is required. Note also that the choice of resolving frame does not affect the magnitude of the vector.

!!! cnote "Notation"
    Given $\mathbf{x}^{\gamma}_{\beta \alpha}$, it descibes a kinematic property of
    frame $F_{\alpha}$ with respect to frame $F_{\beta}$ expressed in the frame $F_\gamma$ axes. For attitude, resolving axes are not required.

Let $F_\alpha$ and $F_\beta$ be defined as:

$$
F_\alpha =
\left[
\begin{array}{ccc}
\hat{i}_\alpha & \hat{j}_\alpha & \hat{k}_\alpha
\end{array}
\right], \quad
F_\beta = 
\left[
\begin{array}{ccc}
\hat{i}_\beta & \hat{j}_\beta & \hat{k}_\beta
\end{array}
\right].
$$

Denote the **vector time derivative** as seen in $F_\alpha$ by $\left. \dot{\left( \ \right)} \right|_\alpha$ (or simply just resolved about the axes of $F_\alpha$) and that seen in $F_\beta$ by $\left. \dot{\left( \ \right)} \right|_\beta$. Then:

$$
\left. \dot{F}_\alpha \right|_\alpha = \mathbf{0}, \quad \left. \dot{F}_\beta \right|_\beta = \mathbf{0}.
$$

Let frame $F_\beta$ rotate with respect to frame $F_\alpha$ with $\boldsymbol{\omega}^\alpha_{\alpha \beta}$. Then:

$$
\begin{align}
F^T_\beta &= \mathbf{R}^\beta_\alpha F^T_\alpha, \\
\left. \dot{F}^T_\beta \right|_\alpha &= \dot{\mathbf{R}}^\beta_\alpha F^T_\alpha + \mathbf{R}^\beta_\alpha \underbrace{\left. \dot{F}^T_\alpha \right|_\alpha}_\mathbf{0} \\
&= -\boldsymbol{\Omega}^\alpha_{\beta \alpha} \mathbf{R}^\beta_\alpha  F^T_\alpha  \\
&= \boldsymbol{\Omega}^\alpha_{\alpha \beta} F^T_\beta \\
&= \left[ \boldsymbol{\omega}^\alpha_{\alpha \beta} \right]_\times F^T_\beta \\
&= \boldsymbol{\omega}^\alpha_{\alpha \beta} \times F^T_\beta.
\end{align}
$$

In order words:

$$
\left[
\begin{array}{ccc}
\left. \dot{\hat{i}}_\beta \right|_\alpha & \left. \dot{\hat{j}}_\beta \right|_\alpha & \left. \dot{\hat{k}}_\beta \right|_\alpha
\end{array}
\right]
= \boldsymbol{\omega}^\alpha_{\alpha \beta} \times
\left[
\begin{array}{ccc}
\hat{i}_\beta & \hat{j}_\beta & \hat{k}_\beta
\end{array}
\right],
$$

or equivalently:

$$
\begin{align}
\left. \dot{\hat{i}} \right|_\alpha &= \boldsymbol{\omega}^\alpha_{\alpha \beta} \times \hat{i}_\beta, \\
\left. \dot{\hat{j}} \right|_\alpha &= \boldsymbol{\omega}^\alpha_{\alpha \beta} \times \hat{j}_\beta, \\
\left. \dot{\hat{k}} \right|_\alpha &= \boldsymbol{\omega}^\alpha_{\alpha \beta} \times \hat{k}_\beta.
\end{align}
$$
