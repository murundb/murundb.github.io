# Velocity

Velocity is defined as the rate of change of the position of the origin of an object frame, $F_\alpha$ with respect to the origin and axes of a reference frame, $F_\beta$:

$$
\mathbf{v}^{\beta}_{\beta \alpha} = \dot{\mathbf{r}}^{\beta}_{\beta \alpha}. \label{5.1}
$$

To resolve the velocity about the axes of a third frame, $F_\gamma$:

$$
\mathbf{v}^{\gamma}_{\beta \alpha} = \mathbf{R}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha}.\label{5.2}
$$

Velocity can be registered when:

1. The object frame, $F_\alpha$, moves with respect to the origin of reference frame, $F_\beta$
2. The reference frame, $F_\beta$, moves with respect to the origin of object frame, $F_\alpha$
3. The reference frame, $F_\beta$, rotates with respect to the origin of object frame, $F_\alpha$

Velocity is not registered when:

1. The object frame, $F_\alpha$, rotates with respect to the origin of reference frame, $F_\beta$
2. Resolving axes, $F_\gamma$ rotates with respect to the reference frame, $F_\beta$


It should be noted that the velocity, $\mathbf{v}^{\gamma}_{\beta \alpha}$, is not equal to the time derivative of $\mathbf{r}^{\gamma}_{\beta \alpha}$, where there is a 
rotation of the resolving frame, $F_\gamma$, with respect to the reference frame, $F_\beta$:

$$
\begin{align}
\dot{\mathbf{r}}^{\gamma}_{\beta \alpha} &= \frac{d}{dt} \left( \mathbf{R}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} \right) \\
&= \dot{\mathbf{R}}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} + \mathbf{R}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha} \\
&= \dot{\mathbf{R}}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} + \mathbf{v}^{\gamma}_{\beta \alpha}, \label{5.3}
\end{align}
$$

which is called the transport theorem. Direction reversal and velocity addition doesn't hold unless there is no angular motion between the object and the reference frame:

$$
\begin{align}
\mathbf{v}^{\gamma}_{\beta \alpha} & \neq \mathbf{v}^{\gamma}_{\beta \delta} + \mathbf{v}^{\gamma}_{\delta \alpha} \\
\mathbf{v}^{\gamma}_{\alpha \beta} & \neq - \mathbf{v}^{\gamma}_{\beta \alpha}.  \label{5.4}
\end{align}
$$

The correct relationship is:

$$
\mathbf{v}^{\gamma}_{\beta \alpha} = -\mathbf{v}^{\gamma}_{\beta \alpha} - \mathbf{R}^{\gamma}_{\alpha} \dot{\mathbf{R}}^{\alpha}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha}. \label{5.5}
$$
