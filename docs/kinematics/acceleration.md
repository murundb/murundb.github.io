# Acceleration

## Definition

Acceleration is defined as the second time derivative of the position of the origin of one frame with respect to the origin and axes of another frame:

$$
\mathbf{a}^{\beta}_{\beta \alpha} \triangleq \ddot{\mathbf{r}}^{\beta}_{\beta \alpha}. \label{6.1}
$$

The resolving axes can be changed via transformation matrix:

$$
\mathbf{a}^{\gamma}_{\beta \alpha} = \mathbf{R}^{\gamma}_{\beta} \ddot{\mathbf{r}}^{\beta}_{\beta \alpha}. \label{6.2}
$$

Acceleration is the force per unit mass on the object applied from the reference frame. Its magnitude is necessarily independent of the resolving frame. Furthemore, it is 
not the same as the time derivative of $\mathbf{v}^{\gamma}_{\beta \alpha}$ or the second derivative of $\mathbf{r}^{\gamma}_{\beta \alpha}$ since these
depend on the rotation of the resolving frame, $F_{\gamma}$, with respect to the reference frame, $F_\beta$:

$$
\begin{align}
\mathbf{a}^{\gamma}_{\beta \alpha} &\neq \dot{\mathbf{v}}^{\gamma}_{\beta \alpha} \\
\mathbf{a}^{\gamma}_{\beta \alpha} &\neq \ddot{\mathbf{r}}^{\gamma}_{\beta \alpha}. \\
\end{align} \label{6.3}
$$

The above would hold only if there is no rotation between resolving axes and the reference frame. Using the definition of velocity:

$$
\begin{align}
\dot{\mathbf{v}}^{\gamma}_{\beta \alpha} &= \frac{d}{dt} \left( \mathbf{R}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha} \right)\\
&=  \dot{\mathbf{R}}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha} + \mathbf{R}^{\gamma}_{\beta} \ddot{\mathbf{r}}^{\beta}_{\beta \alpha} \\
&= \dot{\mathbf{R}}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha} + \mathbf{a}^{\gamma}_{\beta \alpha}. \label{6.4}
\end{align}
$$

Using the definition of Cartesion position and taking the second derivative yields:

$$
\begin{align}
\ddot{\mathbf{r}}^{\gamma}_{\beta \alpha} &= \frac{d^2}{dt^2} \left( \mathbf{R}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} \right) \\
&= \frac{d}{dt} \left( \dot{\mathbf{R}}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} + \mathbf{R}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha} \right) \\
&= \ddot{\mathbf{R}}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} + \dot{\mathbf{R}}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha} + 
\dot{\mathbf{R}}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha} + \mathbf{R}^{\gamma}_{\beta} \ddot{\mathbf{r}}^{\beta}_{\beta \alpha} \\
&= \ddot{\mathbf{R}}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} + \dot{\mathbf{R}}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha}+ \dot{\mathbf{v}}^{\gamma}_{\beta \alpha} \\
&= \ddot{\mathbf{R}}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} + 2 \dot{\mathbf{R}}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha} + \mathbf{a}^{\gamma}_{\beta \alpha}. \label{6.5}
\end{align}
$$

The first term in the last row of equation ($\ref{6.5}$) can be expressed by taking the derivative of the equality:

$$
\dot{\mathbf{R}}^{\gamma}_{\beta} = -\boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \mathbf{R}^{\gamma}_{\beta}.
$$

The second derivative is:

$$
\begin{align}
\ddot{\mathbf{R}}^{\gamma}_{\beta} &= \dot{\boldsymbol{\Omega}}^{\gamma}_{\beta \gamma} \mathbf{R}^{\gamma}_{\beta} - \boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \dot{\mathbf{R}}^{\gamma}_{\beta} \\
&= -\dot{\boldsymbol{\Omega}}^{\gamma}_{\beta \gamma} \mathbf{R}^{\gamma}_{\beta} + \boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \mathbf{R}^{\gamma}_{\beta} \\
&= \left( \boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \boldsymbol{\Omega}^{\gamma}_{\beta \gamma} -  \dot{\boldsymbol{\Omega}}^{\gamma}_{\beta \gamma} \right) \mathbf{R}^{\gamma}_{\beta}.
 \label{6.6}
\end{align}
$$

Substituting back, we get:

$$
\begin{align}
\ddot{\mathbf{R}}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} &= 
\left( \boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \boldsymbol{\Omega}^{\gamma}_{\beta \gamma} -  \dot{\boldsymbol{\Omega}}^{\gamma}_{\beta \gamma} \right) \mathbf{R}^{\gamma}_{\beta}
\mathbf{r}^{\beta}_{\beta \alpha} \\
&= \left( \boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \boldsymbol{\Omega}^{\gamma}_{\beta \gamma} -  \dot{\boldsymbol{\Omega}}^{\gamma}_{\beta \gamma} \right) \mathbf{r}^{\gamma}_{\beta \alpha}. \label{6.7}
\end{align}
$$

Similarly, the second term in the last row of equation $\ref{6.5}$ can be expressed as:

$$
\begin{align}
\dot{\mathbf{R}}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha} &= -\boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \mathbf{R}^{\gamma}_{\beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha} \\ 
&= -\boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \dot{\mathbf{v}}^{\gamma}_{\beta \alpha} \\
&= -\boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \left( \dot{\mathbf{r}}^{\gamma}_{\beta \alpha} - \dot{\mathbf{R}}^{\gamma}_{\beta} \mathbf{r}^{\beta}_{\beta \alpha} \right) \\
&= -\boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \mathbf{r}^{\gamma}_{\beta \alpha} - \boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \dot{\mathbf{r}}^{\gamma}_{\beta \alpha}. \label{6.8}
\end{align}
$$

Substituting equations ($\ref{6.7}$) and ($\ref{6.8}$) into ($\ref{6.5}$):

$$
\ddot{\mathbf{r}}^{\gamma}_{\beta \alpha} = -\boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \mathbf{r}^{\gamma}_{\beta \alpha} 
- 2 \boldsymbol{\Omega}^{\gamma}_{\beta \gamma} \dot{\mathbf{r}}^{\gamma}_{\beta \alpha}
- \dot{\boldsymbol{\Omega}}^{\gamma}_{\beta \alpha} \mathbf{r}^{\gamma}_{\beta \alpha}
+ \mathbf{a}^{\gamma}_{\beta \alpha}. \label{6.9}
$$

The first three terms are related to the centrifugal, Coriolis, and Euler pseudo-forces. They are called centripetal, Coriolis, and angular accelerations.

Addition is not valid if the reference frames are rotating with respect to each other:

$$
\mathbf{a}^{\gamma}_{\beta \alpha} \neq \mathbf{a}^{\gamma}_{\beta \delta} + \mathbf{a}^{\gamma}_{\delta \alpha}. \label{6.10}
$$

Finally, resolving axes can be changed via transformation matrix:

$$
\mathbf{a}^{\gamma}_{\beta \alpha} = \mathbf{R}^{\gamma}_{\delta} \mathbf{a}^{\delta}_{\beta \alpha}. \label{6.11}
$$

## Rotating Reference Frame

Consider an object frame, $F_\alpha$, that is stationary with respect to a reference frame, $F_\beta$, that is rotating at a constant rate, $\omega_{ i \beta}$ , with respect to an inertial frame, $F_i$. 
An observer in inertial frame will see the object moving in circle centered about the axis of rotation of the rotating frame. The position of the object with respect
to the inertial frame resolved in
inertial frame axes is:

$$
\begin{align}
x^{i}_{i \alpha}(t) &= r \text{cos} \left(\omega_{i \beta}t \right) \\
y^{i}_{i \alpha}(t) &= r \text{sin} \left(\omega_{i \beta}t \right). \label{6.12}
\end{align}
$$

Acceleration is:

$$
\begin{align}
\ddot{x}^{i}_{i \alpha} (t) &= -\omega^2_{i \beta} r \text{cos} \left( \omega_{i \beta} t \right) = -\omega^2_{i \beta} x^{i}_{i \alpha} \\
\ddot{y}^{i}_{i \alpha} (t) &= -\omega^2_{i \beta} r \text{sin} \left( \omega_{i \beta} t \right) = -\omega^2_{i \beta} y^{i}_{i \alpha}. \label{6.13} \\
\end{align}
$$

Equation ($\ref{6.13}$) is the centripetal acceleration due to <b>centripetal force</b> and the acceleration is towards the axis of rotation. An object on a rotating dish must be subject to a 
centripetal force in order to remain on the dish.  With respect to the rotating reference frame, the acceleration of the object is zero. The centripetal force is still present,
hence, from the perspective of the rotating frame, there must be another force that is equal and opposite to the centripetal force. This is the <b>centrifugal force</b> (pseudo-force).

Consider now the object on the rotating dish starts moving towards the axis of rotation at a constant velocity. With respect to the rotating frame, the object is moving at a constant velocity in
a straight line, so the acceleration must be zero. With respect to the inertial frame, the object is moving in a curved path and must therefore be accelerating. The object's velocity,
with respect to the inertial frame, along the direction of rotation reduces as it approaches the axis of rotation. Therefore, it mut be subject to another force along the direction
of opposing rotation as well as to the centripetal force. This force is called <b>Coriolis force</b>. The centrifugal and Coriolis pseudo-accelerations sum to the centripetal acceleration
required to describe the object's motion with respect to the rotating frame.

Consider the motion of an object frame, $F_\alpha$, with respect to a rotating reference frame, $F_\beta$. The pseudo-acceleration, $\mathbf{a}^{P \beta}_{\beta \alpha}$ is:

$$
\begin{align}
\mathbf{a}^{P\beta}_{\beta \alpha} &= \mathbf{a}^{\beta}_{\beta \alpha} - \left( \mathbf{a}^{\beta}_{i \alpha} - \mathbf{a}^{\beta}_{i \beta} \right) \\
&= \ddot{\mathbf{r}}^{\beta}_{\beta \alpha} - \mathbf{R}^{\beta}_{i} \left( \ddot{\mathbf{r}}^{i}_{i \alpha} - \ddot{\mathbf{r}}^{i}_{i \beta}  \right) \\
&= \ddot{\mathbf{r}}^{\beta}_{\beta \alpha} - \mathbf{R}^{\beta}_{i} \ddot{\mathbf{r}}^{i}_{\beta \alpha} \\
&= -\boldsymbol{\Omega}^{\beta}_{i \beta} \boldsymbol{\Omega}^{\beta}_{i \beta} \mathbf{r}^{\beta}_{\beta \alpha}
- 2 \boldsymbol{\Omega}^{\beta}_{i \beta} \dot{\mathbf{r}}^{\beta}_{\beta \alpha}
- \dot{\boldsymbol{\Omega}}^{\beta}_{i \beta} \mathbf{r}^{\beta}_{\beta \alpha}. \label{6.14}
\end{align}
$$

The first term is the centrifugal acceleration, the second term is the Coriolis acceleration, and the final term is the Euler acceleration. The Euler force
is the third pseudo-force that arises when the reference frame has angular acceleration with respect to the inertial frame. The Coriolis acceleration is always in direction perpendicular
to the object's velocity with respect to the rotating reference frame.