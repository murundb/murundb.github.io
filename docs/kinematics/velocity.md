# Velocity

## Definition

Velocity is defined as the rate of change of the position of the origin of an object frame, $F_\alpha$ with respect to the origin of a reference frame, $F_\beta$, resolved around the axes of $F_\beta$:

$$
\mathbf{v}^{\beta}_{\beta \alpha} = \dot{\mathbf{r}}^{\beta}_{\beta \alpha}. \label{5.1}
$$

This may, in turn, be resolved about the axes of a third frame, $F_\gamma$ using the rotation matrix:

$$
\mathbf{v}^{\gamma}_{\beta \alpha} = \mathbf{R}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha} = \mathbf{R}^{\gamma}_{\beta} \mathbf{v}^\beta_{\beta \alpha}.\label{5.2}
$$

!!!cnote "Transport Theorem"

    Velocity, $\mathbf{v}^{\gamma}_{\beta \alpha}$, is not equal to the time derivative of $\mathbf{r}^{\gamma}_{\beta \alpha}$ **when there is a 
    rotation of the resolving frame $F_\gamma$, with respect to the reference frame $F_\beta$**. The time derivative of $\mathbf{r}^{\gamma}_{\beta \alpha}$ is:

    $$
    \begin{align}
    \dot{\mathbf{r}}^{\gamma}_{\beta \alpha} &= \frac{d}{dt} \left( \mathbf{R}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} \right) \\
    &= \dot{\mathbf{R}}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} + \mathbf{R}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha} \\
    &= \dot{\mathbf{R}}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} + \mathbf{v}^{\gamma}_{\beta \alpha} \\
    &= \mathbf{v}^{\gamma}_{\beta \alpha} + \boldsymbol{\Omega}^{\gamma}_{\gamma \beta} \mathbf{R}^\gamma_\beta \mathbf{r}^\beta_{\beta \alpha} \\
    &= \mathbf{v}^{\gamma}_{\beta \alpha} + \boldsymbol{\Omega}^{\gamma}_{\gamma \beta} \mathbf{r}^\gamma_{\beta \alpha}. \label{5.3}
    \end{align}
    $$

    which is called the **transport theorem**. 

## Velocity Registry

Figure 1 shows types of motion that can cause a velocity to register.

<figure markdown>
  ![Velocity (Groves, p47)](/assets/images/kinematics/light/velocity.png#only-light){ width="800" }
  ![Velocity (Groves, p47)](/assets/images/kinematics/dark/velocity.png#only-dark){ width="800" }
  <figcaption>Figure 1 Motion causing a velocity to register (Groves, p49)</figcaption>
</figure>


Velocity is registered when:

1. The object frame, $F_\alpha$, moves with respect to the origin of reference frame, $F_\beta$
2. The reference frame, $F_\beta$, moves with respect to the origin of object frame, $F_\alpha$
3. The reference frame, $F_\beta$, rotates with respect to the origin of object frame, $F_\alpha$

Velocity is not registered when:

1. The object frame, $F_\alpha$, rotates with respect to the origin of reference frame, $F_\beta$

## Properties

Direction reversal and velocity addition doesn't hold unless there is no rotational motion between the object and the reference frame:

$$
\begin{align}
\mathbf{v}^{\gamma}_{\beta \alpha} & \neq \mathbf{v}^{\gamma}_{\beta \delta} + \mathbf{v}^{\gamma}_{\delta \alpha} \\
\mathbf{v}^{\gamma}_{\alpha \beta} & \neq - \mathbf{v}^{\gamma}_{\beta \alpha}.  \label{5.4}
\end{align}
$$

The correct relationship is:

$$
\mathbf{v}^{\gamma}_{\alpha \beta} = -\mathbf{v}^{\gamma}_{\beta \alpha} - \mathbf{R}^{\gamma}_{\alpha} \dot{\mathbf{R}}^{\alpha}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha}, \label{5.5}
$$

although:

$$
\left. \mathbf{v}^\gamma_{\alpha \beta} \right|_{\dot{\mathbf{R}}^\alpha_\beta = 0} = 
- \mathbf{v}^{\gamma}_{\beta \alpha}.
$$

Velocity may be transformed from one resolving frame to another using the appropriate coordinate transformation matrix:

$$
\mathbf{v}^{\delta}_{\beta \alpha} = \mathbf{R}^\delta_\gamma \mathbf{v}^{\gamma}_{\beta \alpha}.
$$

Speed is the magnitude of the velocity and is independent of the resolving axes, so $v_{\beta \alpha} = |\mathbf{v}^\gamma_{\beta \alpha}|$. However, the magnitude of the time derivative of velocity, $|\dot{\mathbf{v}^\gamma_{\beta \alpha}}|$, is dependent on the choice of the resolving frame.
