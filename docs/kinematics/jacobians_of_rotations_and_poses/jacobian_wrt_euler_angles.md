# Jacobian with respect to Euler Angles

## Principle Rotation Derivatives

The principle rotation matrices are:

$$
\begin{align}
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
\end{align}
$$

The derivatives of the principle rotation matrices with respect to their angle of rotations are:

$$
\begin{alignat}{2}
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
\end{alignat}
$$

Note that this property holds regardless if it is passive or active rotation.

## Derivative with Respect to Euler Angles

Given a reference frame, $F_\beta$, and the object frame, $F_\alpha$, the attitude $\mathbf{R}^\beta_\alpha \in SO(3)$ can be expressed as the product of the principal rotation matrices. Denote $\mathbf{v} \in \mathbb{R}^3$ as an arbitrary constant vector resolved in the object frame.

Consider the 1-2-3 Euler angles and denote it as $\boldsymbol{\theta} = \left( \theta_1, \theta_2, \theta_3 \right)$ corresponding to the roll, pitch, and yaw angles. The attitude of the body can be represented as:

$$
\begin{align}
\mathbf{R}^\alpha_\beta = \mathbf{R}(\boldsymbol{\theta}) &= \mathbf{R}_3 (\theta_3) \mathbf{R}_2(\theta_2) \mathbf{R}_1(\theta_1).
\end{align}
$$

Taking the derivative of the rotation matrix with the Euler angles yields to:

$$
\begin{alignat}{2}
\frac{\partial \mathbf{R}(\boldsymbol{\theta})}{\partial \theta_3} &=
\frac{\partial \left( \mathbf{R}_3 (\theta_3) \mathbf{R}_2(\theta_2) \mathbf{R}_1(\theta_1) \right)}{\partial \theta_3} &&= -\left[ \mathbf{I}_3 \right]_\times \mathbf{R}(\boldsymbol{\theta}) \\
\frac{\partial \mathbf{R}(\boldsymbol{\theta})}{\partial \theta_2} &=
\frac{\partial \left( \mathbf{R}_3 (\theta_3) \mathbf{R}_2(\theta_2) \mathbf{R}_1(\theta_1) \right)}{\partial \theta_2} &&= -\mathbf{R}_3(\theta_3) \left[ \mathbf{I}_2 \right]_\times \mathbf{R}_2 (\theta_2) \mathbf{R}_1 (\theta_1) \\
\frac{\partial \mathbf{R}(\boldsymbol{\theta})}{\partial \theta_1} &=
\frac{\partial \left( \mathbf{R}_3 (\theta_3) \mathbf{R}_2(\theta_2) \mathbf{R}_1(\theta_1) \right)}{\partial \theta_1} &&= -\mathbf{R}_3(\theta_3) \mathbf{R}_2 (\theta_2) \left[ \mathbf{I}_1 \right]_\times \mathbf{R}_1. \\
\end{alignat}
$$

!!! cnote "Cross-product Identities"

    For vectors $\mathbf{s}, \mathbf{r} \in \mathbb{R}^3$ and $\mathbf{R} \in SO(3)$:

    \begin{align}
    \left[ \mathbf{r} \right]_\times \mathbf{s} &= - \left[ \mathbf{s} \right]_\times \mathbf{r} \\
    \left[ \mathbf{R} \mathbf{s} \right]_\times &= \mathbf{R} \left[ \mathbf{s} \right]_\times \mathbf{R}^T.
    \end{align}

If we take the derivative of the rotated vector with repect to the Euler angles:

$$
\begin{align}
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
\end{align}
$$

Summarizing the result, we have:

$$
\begin{align}
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
\end{align}
$$

which is true regardless of the choice of Euler set.
