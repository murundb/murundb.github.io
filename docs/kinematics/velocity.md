# Velocity

Velocity is defined as the rate of change of the position of the origin of an object frame, $F_\alpha$ with respect to the origin of a reference frame, $F_\beta$, resolved around the axes of $F_\beta$:

$$
\mathbf{v}^{\beta}_{\beta \alpha} = \dot{\mathbf{r}}^{\beta}_{\beta \alpha}. \label{5.1}
$$

To resolve the velocity about the axes of a third frame, $F_\gamma$, we can use the rotation matrix:

$$
\mathbf{v}^{\gamma}_{\beta \alpha} = \mathbf{R}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha}.\label{5.2}
$$

Note that the velocity, $\mathbf{v}^{\gamma}_{\beta \alpha}$, is not equal to the time derivative of $\mathbf{r}^{\gamma}_{\beta \alpha}$, **where there is a 
rotation of the resolving frame, $F_\gamma$, with respect to the reference frame, $F_\beta$**:

$$
\begin{align}
\dot{\mathbf{r}}^{\gamma}_{\beta \alpha} &= \frac{d}{dt} \left( \mathbf{R}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} \right) \\
&= \dot{\mathbf{R}}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} + \mathbf{R}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha} \\
&= \dot{\mathbf{R}}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} + \mathbf{v}^{\gamma}_{\beta \alpha}, \label{5.3}
\end{align}
$$


which is called the **transport theorem**. Direction reversal and velocity addition doesn't hold unless there is no rotational motion between the object and the reference frame:

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


Velocity is registered when:

1. The object frame, $F_\alpha$, moves with respect to the origin of reference frame, $F_\beta$
2. The reference frame, $F_\beta$, moves with respect to the origin of object frame, $F_\alpha$
3. The reference frame, $F_\beta$, rotates with respect to the origin of object frame, $F_\alpha$

Velocity is not registered when:

1. The object frame, $F_\alpha$, rotates with respect to the origin of reference frame, $F_\beta$
2. Resolving axes, $F_\gamma$ rotates with respect to the reference frame, $F_\beta$