# Euler Angles

## 321 vs. 123 Euler Angles

Figiure 1 shows a 321 rotation of reference frame $F_\beta$ to object frame $F_\alpha$ with roll $\phi_{\beta \alpha}$, pitch $\theta_{\beta \alpha}$, and yaw $\psi_{\beta \alpha}$ Euler angles.

<figure markdown>
  ![$z-y-x$ rotation from left to right (Groves, p34)](/assets/images/kinematics/light/euler_angles.png#only-light){ width="600" }
  ![$z-y-x$ rotation from left to right (Groves, p34)](/assets/images/kinematics/dark/euler_angles.png#only-dark){ width="600" }
  <figcaption>Figure 1 321 rotation from left to right (Groves, p34)</figcaption>
</figure>

The properties table drops the subscripts for simplicity, e.g., $\phi_{\beta \alpha} \triangleq \phi$.

| Properties  | 321 | 123 |
| ----- | --------------------------------------- | |
| Definition | 1. Rotation through the yaw angle $\psi$ about the common $z$ axis of the $F_\beta$ frame and the first **intermediate** frame <br> 2. Rotation through the pitch angle $\theta$ about the common $y$ axis of the first and second **intermediate** frame <br> 3. Rotation through the roll angle $\phi$ about the common $x$ axis of the second frame and the $F_\alpha$ frame | |
| Type | Intrinsic | Intrinsic |
| Euler Rotation Vector | Rotation from $F_\beta$ to $F_\alpha$: <br> $\begin{align*}\boldsymbol{\Psi}_{\beta \alpha} = \left[ \begin{array}{c} \phi \\ \theta \\ \psi \\ \end{array} \right] \end{align*}$ |
| Rotation Composition | $\mathbf{R}^{\alpha}_{\beta} = \mathbf{R}^{\alpha}_{\theta} \mathbf{R}^{\theta}_{\psi} \mathbf{R}^{\psi}_{\beta} = \mathbf{R}_1(\phi) \mathbf{R}_2(\theta) \mathbf{R}_3(\psi)$ | $\mathbf{R}^{\alpha}_\beta = \mathbf{R}_3(\psi) \mathbf{R}_2(\theta) \mathbf{R}_1 (\phi)$ |
| Euler to Rotation Matrix | $\mathbf{R}^{\beta}_{\alpha} = \left[ \begin{array}{ccc} c\theta c\psi & \left( \begin{array}{c} -c\phi s\psi + \\ s\phi s\theta c\psi \\ \end{array} \right) &  \left( \begin{array}{c} s\phi s\psi + \\ c\phi s\theta c\psi \\ \end{array} \right) \\ c\theta s\psi & \left(\begin{array}{c} c\phi c\psi + \\ s\phi s\theta s\psi \\ \end{array} \right) & \left( \begin{array}{c} -s\phi c\psi + \\ c\phi s\theta s\psi \\ \end{array} \right) \\ -s\theta & s\phi c\theta & c\phi c\theta \\ \end{array} \right]$ | $\mathbf{R}^\beta_\alpha = \left[ \begin{array}{ccc} c\psi c\theta & -s\psi c\theta & s\theta \\ \left(\begin{array}{c} s\psi c\phi + \\ c\psi s\theta s\phi \end{array} \right) & \left(\begin{array}{c} c\psi c\phi - \\ s\psi s\theta s\phi \end{array} \right) & -c\theta s\phi \\ \left(\begin{array}{c} s\psi s\phi - \\ c\psi s\theta c\phi \end{array} \right) & \left(\begin{array}{c} c\psi s\phi + \\ s\psi s\theta c\phi \end{array} \right) & c\theta c\phi \end{array} \right]$ |
| Rotation Matrix to Euler | $\begin{align*} \phi &= \text{arctan}_2 \left( \mathbf{R}^{\beta}_{\alpha \ 3,2}, \mathbf{R}^{\beta}_{\alpha \ 3,3} \right) \\ \theta &= -\text{arcsin}\left( \mathbf{R}^{\beta}_{\alpha \ 3,1}\right) \\ \psi &= \text{arctan}_2 \left( \mathbf{R}^{\beta}_{\alpha \ 2,1}, \mathbf{R}^{\beta}_{\alpha \ 1,1} \right) \end{align*}$ |
| Infinitesimal Rotations | $\begin{align*} \mathbf{R^{\beta}_{\alpha}} &= \left[ \begin{array}{ccc} 1 & -\psi & \theta \\ \psi & 1 & -\phi \\ -\theta & \phi & 1 \end{array} \right] = \mathbf{I}_{3} + \left[\boldsymbol{\Psi}_{\beta \alpha} \right]_{\times} \\ \mathbf{R}^{\alpha}_{\beta} &= \mathbf{I}_3 - \left[ \boldsymbol{\Psi}_{\beta \alpha} \right]_\times \end{align*}$ |

## Euler Rates

From Poisson's equation:

$$
\begin{alignat}{2}
\boldsymbol{\Omega}^\alpha_{\alpha \beta} &= \dot{\mathbf{R}}^\alpha_\beta \mathbf{R}^\beta_\alpha, \quad \boldsymbol{\Omega}^\alpha_{\beta \alpha} &&= -\dot{\mathbf{R}}^\alpha_\beta \mathbf{R}^\beta_\alpha \\
\boldsymbol{\Omega}^\beta_{\alpha \beta} &= \mathbf{R}^\beta_\alpha \dot{\mathbf{R}}^\alpha_\beta, \quad \boldsymbol{\Omega}^\beta_{\beta \alpha} &&= - \mathbf{R}^\beta_\alpha \dot{\mathbf{R}}^\alpha_\beta.
\end{alignat}
$$

Then we have:

$$
\begin{align}
\left[ \boldsymbol{\omega}^\alpha_{\beta \alpha} \right]_\times
&= -\dot{\mathbf{R}}^\alpha_\beta \left( \mathbf{R}^\alpha_\beta \right)^{-1} \\
&= -\dot{\mathbf{R}}^\alpha_\beta \left( \mathbf{R}^\alpha_\beta \right)^{T}. \label{1}
\end{align}
$$

For each rotation about a principle axis, we have:

$$
\begin{align}
-\dot{\mathbf{R}}_3 \mathbf{R}^T_3 &= \left[\mathbf{I}_3 \right]_\times \dot{\psi}_{\beta \alpha}, \\
-\dot{\mathbf{R}}_2 \mathbf{R}^T_2 &= \left[\mathbf{I}_2 \right]_\times \dot{\theta}_{\beta \alpha}, \\
-\dot{\mathbf{R}}_1 \mathbf{R}^T_1 &= \left[\mathbf{I}_1 \right]_\times \dot{\phi}_{\beta \alpha},
\end{align}
$$

where $\mathbf{I}_i$ os column $i$ of $\mathbf{I}_{3 \times 3}$.

??? cnote "Proof"
    The principle rotation matrix about the third axis is given as:

    $$
    \mathbf{R}_3 = 
    \left[
    \begin{array}{ccc}
    \cos \psi & \sin \psi & 0 \\
    -\sin \psi & \cos \psi & 0 \\
    0 & 0 & 1.
    \end{array}
    \right]
    $$

    The time derivative of $\mathbf{R}_3$ is:
    
    $$
    \dot{\mathbf{R}}_3 = 
    \left[
    \begin{array}{ccc}
    -\dot{\psi} \sin \psi & \dot{\psi} \cos \psi & 0 \\
    -\dot{\psi} \cos \psi & - \dot{\psi} \sin \psi & 0 \\
    0 & 0 & 0
    \end{array}
    \right].
    $$

    Then:

    $$
    -\dot{\mathbf{R}}_3 \mathbf{R}^T_3 = \left[ \mathbf{I}_3 \right]_\times \dot{\psi}.
    $$

Consider the 3-2-1 Euler angle sequence for frames, $F_\alpha$ and $F_\beta$, and its associated rotation matrix:

$$
\mathbf{R}^\alpha_\beta = \mathbf{R}^\alpha_\theta \mathbf{R}^\theta_\psi \mathbf{R}^\psi_\beta = \mathbf{R}_1 \mathbf{R}_2 \mathbf{R}_3.
$$

Eq ($\ref{1}$) can be written as:

$$
\begin{align}
\left[ \boldsymbol{\omega}^\alpha_{\beta \alpha} \right]_\times &=
-\overbrace{\mathbf{R}^\alpha_\theta \mathbf{R}^\theta_\psi \mathbf{R}^\psi_\beta}^\cdot \left( \mathbf{R}^\alpha_\theta \mathbf{R}^\theta_\psi \mathbf{R}^\psi_\beta \right)^T \\
&= -\left[\dot{\mathbf{R}}^\alpha_\theta \mathbf{R}^\theta_\psi \mathbf{R}^\psi_\beta + \mathbf{R}^\alpha_\theta \dot{\mathbf{R}}^\theta_\psi \mathbf{R}^\psi_\beta + \mathbf{R}^\alpha_\theta \mathbf{R}^\theta_\psi \dot{\mathbf{R}}^\psi_\beta \right] \mathbf{R}^\beta_\psi \mathbf{R}^\psi_\theta \mathbf{R}^\theta_\alpha \\
&= -\mathbf{R}^\alpha_\theta \mathbf{R}^\theta_\psi \dot{\mathbf{R}}^\psi_\beta \mathbf{R}^\beta_\psi \mathbf{R}^\psi_\theta \mathbf{R}^\theta_\alpha -
\mathbf{R}^\alpha_\theta \dot{\mathbf{R}}^\theta_\psi \mathbf{R}^\psi_\theta \mathbf{R}^\theta_\alpha - \dot{\mathbf{R}}^\alpha_\theta \mathbf{R}^\theta_\alpha \\
&= -\mathbf{R}_1 \mathbf{R}_2 \dot{\mathbf{R}}_3 \mathbf{R}^T_3 \mathbf{R}^T_2 \mathbf{R}^T_1 - \mathbf{R}_1 \dot{\mathbf{R}}_2 \mathbf{R}^T_2 \mathbf{R}^T_1 - \dot{\mathbf{R}}_1 \mathbf{R}^T_1 \\
&= \mathbf{R}_1 \mathbf{R}_2 \left[\mathbf{I}_3 \right]_\times \dot{\psi}_{\beta \alpha} \mathbf{R}^T_2 \mathbf{R}^T_1 +
\mathbf{R}_1 \left[\mathbf{I}_2 \right]_\times \dot{\theta}_{\beta \alpha} \mathbf{R}^T_1 +
\left[\mathbf{I}_1 \right]_\times \dot{\phi}_{\beta \alpha}.
\label{2}
\end{align}
$$

Given:

$$
\left[ \mathbf{R} \mathbf{r} \right]_\times = \mathbf{R} \left[ \mathbf{r} \right]_\times \mathbf{R}^T,
$$

for any vector $\mathbf{r} \in \mathbb{R}^3$, eq ($\ref{2}$) becomes:

$$
\begin{align}
\left[ \boldsymbol{\omega}^\alpha_{\beta \alpha} \right]_\times &=
\left[ \mathbf{R}_1 \mathbf{R}_2 \mathbf{I}_3 \dot{\psi}_{\beta \alpha} \right]_\times +
\left[ \mathbf{R}_1 \mathbf{I}_2 \dot{\theta}_{\beta \alpha} \right]_\times +
\left[ \mathbf{I}_1 \dot{\phi}_{\beta \alpha} \right]_\times,
\end{align}
$$

which can be simplified to:

$$
\begin{align}
\boldsymbol{\omega}^\alpha_{\beta \alpha} &=
\underbrace{\left[
\begin{array}{ccc}
\mathbf{I}_1 & \mathbf{R}_1 \mathbf{I}_2 & \mathbf{R}_1 \mathbf{R}_2 \mathbf{I}_3
\end{array}
\right]}_{\mathbf{S}(\phi_{\beta \alpha}, \theta_{\beta \alpha})}
\left[
\begin{array}{c}
\dot{\phi}_{\beta \alpha} \\
\dot{\theta}_{\beta \alpha} \\
\dot{\psi}_{\beta \alpha}
\end{array}
\right] \\
&= \mathbf{S}(\phi_{\beta \alpha}, \theta_{\beta \alpha}) \dot{\boldsymbol{\Psi}}_{\beta \alpha},
\end{align}
$$

which gives the angular velocity in terms of **Euler rates**. The matrix $\mathbf{S}$ is:

$$
\mathbf{S}(\phi_{\beta \alpha}, \theta_{\beta \alpha}) =
\left[
\begin{array}{ccc}
1 & 0 & -\sin \theta_{\beta \alpha} \\
0 & \cos \phi_{\beta \alpha} & \sin \phi_{\beta \alpha} \cos \theta_{\beta \alpha} \\
0 & -\sin \phi_{\beta \alpha} & \cos \phi_{\beta \alpha} \cos \theta_{\beta \alpha}
\end{array}
\right].
$$

The inverse relationship is:

$$
\begin{align}
\left[
\begin{array}{c}
\dot{\phi}_{\beta \alpha} \\
\dot{\theta}_{\beta \alpha} \\
\dot{\psi}_{\beta \alpha}
\end{array}
\right] &=
\left[
\begin{array}{ccc}
1 & \sin \phi_{\beta \alpha} \tan \theta_{\beta \alpha} & \cos \phi_{\beta \alpha} \tan \theta_{\beta \alpha} \\
0 & \cos \phi_{\beta \alpha} & -\sin \phi_{\beta \alpha} \\
0 & \sin \phi_{\beta \alpha} / \cos \theta_{\beta \alpha} & \cos \phi_{\beta \alpha} / \cos \theta_{\beta \alpha}
\end{array}
\right] \boldsymbol{\omega}^\alpha_{\beta \alpha}.
\end{align}
$$

Note that $\mathbf{S}^{-1}$ does not exist at $\theta_{\beta \alpha} = \pi / 2$, which is the singularity associasted with Euler series.

## Proofs

??? cnote "Proof"

    From Figure 1, the first rotation will be through the yaw angle $\psi_{\beta \alpha}$ about the common $z$ axis of the $\beta$ frame to yield the first intermediate axes $(x^\psi, y^\psi, z^\psi)$:

    $$
    \begin{align}
    & x^{\psi} = x^{\beta} c(\psi_{\beta \alpha}) + y^{\beta} s(\psi_{\beta \alpha}) \\
    & y^{\psi} = -x^{\beta} s(\psi_{\beta \alpha}) + y^{\beta} c(\psi_{\beta \alpha}) \\
    & z^{\psi} = z^{\beta},
    \end{align}
    $$

    which yields to a rotation matrix:

    $$
    \mathbf{R}^{\psi}_{\beta} =
    \left[
    \begin{array}{ccc}
    c(\psi_{\beta \alpha}) & s(\psi_{\beta \alpha}) & 0 \\
    -s(\psi_{\beta \alpha}) & c(\psi_{\beta \alpha}) & 0 \\
    0 & 0 & 1
    \end{array}
    \right].
    $$

    The second rotation will be through the pitch angle $\theta_{\beta \alpha}$ about the common $y$ axis of the first and second intermediate frames:

    $$
    \begin{align}
    & x^{\theta} = x^{\psi} c(\theta_{\beta \alpha}) - z^{\psi} s(\theta_{\beta \alpha}) \\
    & y^{\theta} = y^{\psi} \\
    & z^{\theta} = x^{\psi} s(\theta_{\beta \alpha}) + z^{\psi} c(\theta_{\beta \alpha}),
    \end{align}
    $$

    which yields to a rotation matrix:

    $$
    \mathbf{R}^{\theta}_{\psi} =
    \left[
    \begin{array}{ccc}
    c(\theta_{\beta \alpha}) & 0 & -s(\theta_{\beta \alpha}) \\
    0 & 1 & 0 \\
    s(\theta_{\beta \alpha}) & 0 & c(\theta_{\beta \alpha})
    \end{array}
    \right].
    $$

    The third and the last rotation will be through the roll angle $\phi_{\beta \alpha}$ about the common $x$ axis of the second frame and the $\alpha$ frame:

    $$
    \begin{align}
    & x^{\alpha} = x^{\theta} \\
    & y^{\alpha} = y^{\theta} c(\phi_{\beta \alpha}) + z^{\theta} s(\phi_{\beta \alpha}) \\
    & z^{\alpha} = -y^{\theta} s(\phi_{\beta \alpha}) + z^{\theta} c(\phi_{\beta \alpha}),
    \end{align}
    $$

    which yields to a rotation matrix:

    $$
    \mathbf{R}^{\alpha}_{\theta} =
    \left[
    \begin{array}{ccc}
    1 & 0 & 0 \\
    0 & c(\phi_{\beta \alpha}) & s(\phi_{\beta \alpha}) \\
    0 & -s(\phi_{\beta \alpha}) & c(\phi_{\beta \alpha})
    \end{array}
    \right].
    $$
