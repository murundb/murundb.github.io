# Euler Angles

## Definition

Most commonly used Euler angles are yaw, pitch, and roll angles. Given an object frame $F_\alpha$ and a reference frame $F_\beta$, we can describe the orientation of $F_\alpha$ with respect to $F_\beta$ via roll $\phi_{\beta \alpha}$, pitch $\theta_{\beta \alpha}$, and yaw $\psi_{\beta \alpha}$ Euler angles as shown in Figure 1. We are only concerned with $z-y-x$ or $3-2-1$ sequence of rotations, i.e:

1. Rotation through the yaw angle $\psi_{\beta \alpha}$ about the common $z$ axis of the $F_\beta$ frame and the first **intermediate** frame.
2. Rotation through the pitch angle $\theta_{\beta \alpha}$ about the common $y$ axis of the first and second **intermediate** frame.
3. Rotation through the roll angle $\phi_{\beta \alpha}$ about the common $x$ axis of the second frame and the $F_\alpha$ frame.

Note that the successive rotations here are always about the new axis provided by the preceeding rotation and not about the fixed axis of $F_\beta$. This is called an **intrinsic** rotation.

<figure markdown>
  ![$z-y-x$ rotation from left to right (Groves, p34)](/assets/images/kinematics/light/euler_angles.png#only-light){ width="600" }
  ![$z-y-x$ rotation from left to right (Groves, p34)](/assets/images/kinematics/dark/euler_angles.png#only-dark){ width="600" }
  <figcaption>Figure 1 z-y-x rotation from left to right (Groves, p34)</figcaption>
</figure>

The Euler rotation from **frame $F_\beta$ to frame $F_\alpha$** may be denoted by the vector:

$$
\boldsymbol{\Psi}_{\beta \alpha} =
\left[
\begin{array}{c}
\phi_{\beta \gamma} \\
\theta_{\beta \gamma} \\
\psi_{\beta \gamma} \\
\end{array}
\right].
$$

The Euler rotation $(\phi_{\beta \alpha} + \pi, \pi - \theta_{\beta \alpha}, \psi_{\beta \alpha} + \pi)$ gives the same result as the Euler rotation $(\phi_{\beta \alpha}, \theta_{\beta \alpha}, \psi_{\beta \alpha})$.
Consequently, to avoid duplicate sets of Euler angles representing the same attitude, a convention is adopted of limiting the pitch rotation bounded to the range $-90^{o} \leq \theta \leq 90^{o}$.
To reverse an Euler rotation, either the original operation must be reversed i.e., $x-y-z$, or a different transformation must be applied. Successive rotations can't be
expressed simply by adding the Euler angles:

$$
\left[
\begin{array}{c}
\phi_{\beta \gamma} \\
\theta_{\beta \gamma} \\
\psi_{\beta \gamma} \\
\end{array}
\right]
\neq
\left[
\begin{array}{c}
\phi_{\beta \alpha} + \phi_{\alpha \gamma} \\
\theta_{\beta \alpha} + \theta_{\alpha \gamma} \\
\psi_{\beta \alpha} + \psi_{\alpha \gamma} \\
\end{array}
\right].
$$

The downside of using Euler angles is that the Euler angles exhibit singularity at $\pm 90^{o}$ pitch, where the roll and yaw become indistinguishable. This is also known as a **gimbal lock**.
Hence, Euler angles are more suited for visualization and interpretation rather than computation of attitude.

!!! cnote "**Bank, Elevation, Heading, and Tilt**"

    In the specific case in which the Euler angles describe the attitude of the body frame with respect to the local navigation frame, the roll rotation is known as 
    **bank**, the pitch rotation is known as **elevation**, and the yaw rotation is known as **heading** or **azimuth**. The bank and elevation are also collectively known as **tilts**.

## Euler Angles to Rotation Matrix

The rotation matrix from frame $F_\beta$ to $F_\alpha$ is obtained as:

$$
\mathbf{R}^{\alpha}_{\beta} = \mathbf{R}^{\alpha}_{\theta} \mathbf{R}^{\theta}_{\psi} \mathbf{R}^{\psi}_{\beta} = \mathbf{R}_1(\phi_{\beta \alpha}) \mathbf{R}_2(\theta_{\beta \alpha}) \mathbf{R}_3(\psi_{\beta \alpha}),
$$

where we used the principal rotation matrix notation. Expanding this yields to:

$$
\mathbf{R}^{\alpha}_{\beta} =
\left[
\begin{array}{ccc}
\text{cos}(\theta_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) & \text{cos}(\theta_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) & -\text{sin}(\theta_{\beta \alpha}) \\ \\
\left(
\begin{array}{c}
-\text{cos}(\phi_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) + \\
\text{sin}(\phi_{\beta \alpha}) \text{sin}(\theta_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) \\
\end{array}
\right) &  
\left(
\begin{array}{c}
\text{cos}(\phi_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) + \\
\text{sin}(\phi_{\beta \alpha}) \text{sin}(\theta_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) \\
\end{array}
\right)
&  \text{sin}(\phi_{\beta \alpha}) \text{cos}(\theta_{\beta \alpha}) \\ \\
\left(
\begin{array}{c}
\text{sin}(\phi_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) + \\
\text{cos}(\phi_{\beta \alpha}) \text{sin}(\theta_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) \\
\end{array}
\right)
&
\left(
\begin{array}{c}
-\text{sin}(\phi_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) + \\
\text{cos}(\phi_{\beta \alpha}) \text{sin}(\theta_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) \\
\end{array}
\right)
& \text{cos}(\phi_{\beta \alpha}) \text{cos}(\theta_{\beta \alpha})
\end{array}
\right].
$$

The attitude is the rotation matrix from frame $F_\alpha$ to $F_\beta$:

$$
\begin{align}
\mathbf{R}^\beta_\alpha &= \left( \mathbf{R}^\alpha_\beta \right)^T \\
&= \left( \mathbf{R}^{\psi}_{\beta} \right)^T \left( \mathbf{R}^{\theta}_{\psi} \right)^T \left( \mathbf{R}^{\alpha}_{\phi} \right)^T,
\end{align}
$$

which yields to:

$$
\mathbf{R}^{\beta}_{\alpha} = 
\left[
\begin{array}{ccc}
\text{cos}(\theta_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) &
\left(
\begin{array}{c}
-\text{cos}(\phi_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) + \\
\text{sin}(\phi_{\beta \alpha}) \text{sin}(\theta_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) \\
\end{array}
\right)
& 
\left(
\begin{array}{c}
\text{sin}(\phi_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) + \\
\text{cos}(\phi_{\beta \alpha}) \text{sin}(\theta_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) \\
\end{array}
\right)
\\ \\
\text{cos}(\theta_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) & 
\left(
\begin{array}{c}
\text{cos}(\phi_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) + \\
\text{sin}(\phi_{\beta \alpha}) \text{sin}(\theta_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) \\
\end{array}
\right)
&
\left(
\begin{array}{c}
-\text{sin}(\phi_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) + \\
\text{cos}(\phi_{\beta \alpha}) \text{sin}(\theta_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) \\
\end{array}
\right)
\\ \\
-\text{sin}(\theta_{\beta \alpha}) & \text{sin}(\phi_{\beta \alpha}) \text{cos}(\theta_{\beta \alpha}) & 
\text{cos}(\phi_{\beta \alpha}) \text{cos}(\theta_{\beta \alpha}) \\ \\
\end{array}
\right],
$$

??? cnote "Proof"

    From Figure 1, the first rotation will be through the yaw angle $\psi_{\beta \alpha}$ about the common $z$ axis of the $\beta$ frame to yield the first intermediate axes $(x^\psi, y^\psi, z^\psi)$:

    $$
    \begin{align}
    & x^{\psi} = x^{\beta} \text{cos}(\psi_{\beta \alpha}) + y^{\beta} \text{sin}(\psi_{\beta \alpha}) \\
    & y^{\psi} = -x^{\beta} \text{sin}(\psi_{\beta \alpha}) + y^{\beta} \text{cos}(\psi_{\beta \alpha}) \\
    & z^{\psi} = z^{\beta},
    \end{align}
    $$

    which yields to a rotation matrix:

    $$
    \mathbf{R}^{\psi}_{\beta} =
    \left[
    \begin{array}{ccc}
    \text{cos}(\psi_{\beta \alpha}) & \text{sin}(\psi_{\beta \alpha}) & 0 \\
    -\text{sin}(\psi_{\beta \alpha}) & \text{cos}(\psi_{\beta \alpha}) & 0 \\
    0 & 0 & 1
    \end{array}
    \right].
    $$

    The second rotation will be through the pitch angle $\theta_{\beta \alpha}$ about the common $y$ axis of the first and second intermediate frames:

    $$
    \begin{align}
    & x^{\theta} = x^{\psi} \text{cos}(\theta_{\beta \alpha}) - z^{\psi} \text{sin}(\theta_{\beta \alpha}) \\
    & y^{\theta} = y^{\psi} \\
    & z^{\theta} = x^{\psi} \text{sin}(\theta_{\beta \alpha}) + z^{\psi} \text{cos}(\theta_{\beta \alpha}),
    \end{align}
    $$

    which yields to a rotation matrix:

    $$
    \mathbf{R}^{\theta}_{\psi} =
    \left[
    \begin{array}{ccc}
    \text{cos}(\theta_{\beta \alpha}) & 0 & -\text{sin}(\theta_{\beta \alpha}) \\
    0 & 1 & 0 \\
    \text{sin}(\theta_{\beta \alpha}) & 0 & \text{cos}(\theta_{\beta \alpha})
    \end{array}
    \right].
    $$

    The third and the last rotation will be through the roll angle $\phi_{\beta \alpha}$ about the common $x$ axis of the second frame and the $\alpha$ frame:

    $$
    \begin{align}
    & x^{\alpha} = x^{\theta} \\
    & y^{\alpha} = y^{\theta} \text{cos}(\phi_{\beta \alpha}) + z^{\theta} \text{sin}(\phi_{\beta \alpha}) \\
    & z^{\alpha} = -y^{\theta} \text{sin}(\phi_{\beta \alpha}) + z^{\theta} \text{cos}(\phi_{\beta \alpha}),
    \end{align}
    $$

    which yields to a rotation matrix:

    $$
    \mathbf{R}^{\alpha}_{\theta} =
    \left[
    \begin{array}{ccc}
    1 & 0 & 0 \\
    0 & \text{cos}(\phi_{\beta \alpha}) & \text{sin}(\phi_{\beta \alpha}) \\
    0 & -\text{sin}(\phi_{\beta \alpha}) & \text{cos}(\phi_{\beta \alpha})
    \end{array}
    \right].
    $$

## Rotation Matrix to Euler Angles

Given $\mathbf{R}^\alpha_{\beta}$, conversion to Euler angles can be obtained as:

$$
\begin{align}
\phi_{\beta \alpha} &= \text{arctan}_2 \left( \mathbf{R}^{\alpha}_{\beta \ 2,3}, \mathbf{R}^{\alpha}_{\beta \ 3,3} \right) \\
\theta_{\beta \alpha} &= -\text{arcsin}\left( \mathbf{R}^{\alpha}_{\beta \ 1,3}\right) \\
\psi_{\beta \alpha} &= \text{arctan}_2 \left( \mathbf{R}^{\alpha}_{\beta \ 1,2}, \mathbf{R}^{\alpha}_{\beta \ 1,1} \right),
\end{align}
$$

where four-quadrant arctangent functions must be used. For an attitude $\mathbf{R}^{\beta}_{\alpha}$, the Euler angles are:

$$
\begin{align}
\phi_{\beta \alpha} &= \text{arctan}_2 \left( \mathbf{R}^{\beta}_{\alpha \ 3,2}, \mathbf{R}^{\beta}_{\alpha \ 3,3} \right) \\
\theta_{\beta \alpha} &= -\text{arcsin}\left( \mathbf{R}^{\beta}_{\alpha \ 3,1}\right) \\
\psi_{\beta \alpha} &= \text{arctan}_2 \left( \mathbf{R}^{\beta}_{\alpha \ 2,1}, \mathbf{R}^{\beta}_{\alpha \ 1,1} \right).
\end{align}
$$

## Infinitesimal Rotations

When the rotation matrix and Euler angles represent a small angular perturbation 
, we can use small angle approximation to get:

$$
\begin{align}
\mathbf{R^{\alpha}_{\beta}} &=
\left[
\begin{array}{ccc}
1 & \psi_{\beta \alpha} & -\theta_{\beta \alpha} \\
-\psi_{\beta \alpha} & 1 & \phi_{\beta \alpha} \\
\theta_{\beta \alpha} & -\phi_{\beta \alpha} & 1
\end{array}
\right] =
\mathbf{I}_{3} - \left[\boldsymbol{\Psi}_{\beta \alpha} \right]_{\times} \\
\mathbf{R^{\beta}_{\alpha}} &=
\left[
\begin{array}{ccc}
1 & -\psi_{\beta \alpha} & \theta_{\beta \alpha} \\
\psi_{\beta \alpha} & 1 & -\phi_{\beta \alpha} \\
-\theta_{\beta \alpha} & \phi_{\beta \alpha} & 1
\end{array}
\right] =
\mathbf{I}_{3} + \left[\boldsymbol{\Psi}_{\beta \alpha} \right]_{\times},
\end{align}
$$

where:

$$
\boldsymbol{\Psi}_{\beta \alpha} =
\left[
\begin{array}{ccc}
\phi_{\beta \alpha} & \theta_{\beta \alpha} & \psi_{\beta \alpha}
\end{array}
\right]^T,
$$

is the Euler rotation vector. Noe that the form of the rotation matrix for infinitesimal rotations does not depend on the order in which the rotations are performed.
