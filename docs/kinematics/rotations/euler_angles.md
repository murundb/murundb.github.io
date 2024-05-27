# Euler Angles

## 321 vs. 123 Euler Angles

Given an object frame $F_\alpha$ and a reference frame $F_\beta$, we can describe the orientation of $F_\alpha$ with respect to $F_\beta$ via roll $\phi_{\beta \alpha}$, pitch $\theta_{\beta \alpha}$, and yaw $\psi_{\beta \alpha}$ Euler angles as shown in Figure 1.

<figure markdown>
  ![$z-y-x$ rotation from left to right (Groves, p34)](/assets/images/kinematics/light/euler_angles.png#only-light){ width="600" }
  ![$z-y-x$ rotation from left to right (Groves, p34)](/assets/images/kinematics/dark/euler_angles.png#only-dark){ width="600" }
  <figcaption>Figure 1 321 rotation from left to right (Groves, p34)</figcaption>
</figure>


| Properties  | 321 | 123 |
| ----- | --------------------------------------- | |
| Definition | 1. Rotation through the yaw angle $\psi_{\beta \alpha}$ about the common $z$ axis of the $F_\beta$ frame and the first **intermediate** frame <br> 2. Rotation through the pitch angle $\theta_{\beta \alpha}$ about the common $y$ axis of the first and second **intermediate** frame <br> 3. Rotation through the roll angle $\phi_{\beta \alpha}$ about the common $x$ axis of the second frame and the $F_\alpha$ frame | |
| Type | Intrinsic | Intrinsic |
| Euler Rotation Vector | Rotation from $F_\beta$ to $F_\alpha$: <br> $\begin{align*}\boldsymbol{\Psi}_{\beta \alpha} = \left[ \begin{array}{c} \phi_{\beta \gamma} \\ \theta_{\beta \gamma} \\ \psi_{\beta \gamma} \\ \end{array} \right] \end{align*}$ |
| Rotation Composition | $\mathbf{R}^{\alpha}_{\beta} = \mathbf{R}^{\alpha}_{\theta} \mathbf{R}^{\theta}_{\psi} \mathbf{R}^{\psi}_{\beta} = \mathbf{R}_1(\phi_{\beta \alpha}) \mathbf{R}_2(\theta_{\beta \alpha}) \mathbf{R}_3(\psi_{\beta \alpha})$ |
| Euler to Rotation Matrix | $\mathbf{R}^{\beta}_{\alpha} = \left[ \begin{array}{ccc} \text{cos}(\theta_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) & \left( \begin{array}{c} -\text{cos}(\phi_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) + \\ \text{sin}(\phi_{\beta \alpha}) \text{sin}(\theta_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) \\ \end{array} \right) &  \left( \begin{array}{c} \text{sin}(\phi_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) + \\ \text{cos}(\phi_{\beta \alpha}) \text{sin}(\theta_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) \\ \end{array} \right) \\ \text{cos}(\theta_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) & \left(\begin{array}{c} \text{cos}(\phi_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) + \\ \text{sin}(\phi_{\beta \alpha}) \text{sin}(\theta_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) \\ \end{array} \right) & \left( \begin{array}{c} -\text{sin}(\phi_{\beta \alpha}) \text{cos}(\psi_{\beta \alpha}) + \\ \text{cos}(\phi_{\beta \alpha}) \text{sin}(\theta_{\beta \alpha}) \text{sin}(\psi_{\beta \alpha}) \\ \end{array} \right) \\ -\text{sin}(\theta_{\beta \alpha}) & \text{sin}(\phi_{\beta \alpha}) \text{cos}(\theta_{\beta \alpha}) & \text{cos}(\phi_{\beta \alpha}) \text{cos}(\theta_{\beta \alpha}) \\ \end{array} \right]$ |
| Rotation Matrix to Euler | $\begin{align*} \phi_{\beta \alpha} &= \text{arctan}_2 \left( \mathbf{R}^{\beta}_{\alpha \ 3,2}, \mathbf{R}^{\beta}_{\alpha \ 3,3} \right) \\ \theta_{\beta \alpha} &= -\text{arcsin}\left( \mathbf{R}^{\beta}_{\alpha \ 3,1}\right) \\ \psi_{\beta \alpha} &= \text{arctan}_2 \left( \mathbf{R}^{\beta}_{\alpha \ 2,1}, \mathbf{R}^{\beta}_{\alpha \ 1,1} \right) \end{align*}$ |
| Infinitesimal Rotations | $\begin{align*} \mathbf{R^{\beta}_{\alpha}} &= \left[ \begin{array}{ccc} 1 & -\psi_{\beta \alpha} & \theta_{\beta \alpha} \\ \psi_{\beta \alpha} & 1 & -\phi_{\beta \alpha} \\ -\theta_{\beta \alpha} & \phi_{\beta \alpha} & 1 \end{array} \right] = \mathbf{I}_{3} + \left[\boldsymbol{\Psi}_{\beta \alpha} \right]_{\times} \end{align*}$ |

## Proofs

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
