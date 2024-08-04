# Rotation Matrix

## Definition

Consider an arbitrary vector $\mathbf{x} \in \mathbb{R}^3$ and two frames $F_\alpha$ and $F_\beta$ with a common origin. $\mathbf{R}^{\beta}_{\alpha} \in SO(3)$ represents a rotation matrix from $F_\alpha$ to $F_\beta$.

| Representation  | Attitude | Rotation |
| ----- | --------------------------------------- | |
| Rotation Function | Passive, i.e., the function of the rotation operator is on the frames | Active, i.e., the function of the rotation operator is on the vectors |
| Rotation Operator | $\mathbf{x}^\beta = \mathbf{R}^\beta_\alpha \mathbf{x}^\alpha$ | $\mathbf{x}' = \mathbf{R} \mathbf{x}$ |
| Cross Relationship | $\mathbf{R}_{\text{active}} = \mathbf{R}^T_{\text{passive}}$ |
| Inverse Transformation | $\mathbf{R}^{\alpha}_{\beta} = \left(\mathbf{R}^{\beta}_{\alpha} \right)^T = \left(\mathbf{R}^{\beta}_{\alpha} \right)^{-1}$ |
| Composition | $\mathbf{R}^{\gamma}_{\alpha} = \mathbf{R}^{\gamma}_{\beta} \mathbf{R}^{\beta}_{\alpha}$ |
| Resolving Axes Transformation | Given a linear transformation matrix $\mathbf{M}$, $\mathbf{M}^{\beta} = \mathbf{R}^{\beta}_{\alpha} \mathbf{M}^{\alpha} \mathbf{R}^{\alpha}_{\beta}$ |
| Principal Rotation Matrices | Given an angle $\left( \cdot \right) = \left( \cdot \right)_{\beta \alpha}$ which is the angle from $F_\beta$ to $F_\alpha$ around a specific principle axis, the principal rotation matrices describing the rotation $\mathbf{R}^\alpha_\beta$ are $\begin{align*} \mathbf{R}_3(\psi) &= \left[ \begin{array}{ccc} \text{cos}(\psi) & \text{sin}(\psi) & 0 \\ -\text{sin}(\psi) & \text{cos}(\psi) & 0 \\ 0 & 0 & 1 \end{array} \right] \\ \mathbf{R}_2(\theta) &= \left[ \begin{array}{ccc} \text{cos}(\theta) & 0 & -\text{sin}(\theta) \\ 0 & 1 & 0 \\ \text{sin}(\theta) & 0 & \text{cos}(\theta) \end{array} \right] \\ \mathbf{R}_1(\phi) &= \left[ \begin{array}{ccc} 1 & 0 & 0 \\ 0 & \text{cos}(\phi) & \text{sin}(\phi) \\ 0 & -\text{sin}(\phi) & \text{cos}(\phi) \end{array} \right] \\ \end{align*}$ |
| Time Derivative | $\begin{align*} \dot{\mathbf{R}}^\alpha_\beta(t) &= - \mathbf{R}^\alpha_\beta \boldsymbol{\Omega}^\beta_{\beta \alpha} = \mathbf{R}^\alpha_\beta \boldsymbol{\Omega}^\beta_{\alpha \beta} \\ &= -\boldsymbol{\Omega}^\alpha_{\beta \alpha} \mathbf{R}^\alpha_\beta = \boldsymbol{\Omega}^\alpha_{\alpha \beta} \mathbf{R}^\alpha_\beta \end{align*}$ |

## Covariance Transformation

Consider a state vector $\mathbf{x} \in \mathbb{R}^6$ with a covariance matrix $\mathbf{P} \in \mathbb{R}^{6 \times 6}$. The covariance is defined as:

$$
\mathbf{P} = \mathbb{E}\left[ \mathbf{x} \mathbf{x}^T \right] - \mathbb{E}\left[ \mathbf{x} \right] \mathbb{E}\left[ \mathbf{x}^T \right].
$$

If there has been a state transformation such that:

$$
\mathbf{x}' = \mathbf{M} \mathbf{x},
$$

with $\mathbf{M} \in \mathbb{R}^{6 \times 6}$, then the transformed covariance becomes:

$$
\begin{align}
\mathbf{M}' &= \mathbb{E}\left[ \mathbf{x}' \left(\mathbf{x}' \right)^T \right] -
\mathbb{E}\left[ \mathbf{x}' \right] \mathbb{E}\left[\left(\mathbf{x}' \right)^T \right] \\
&= \mathbb{E} \left[ \mathbf{M} \mathbf{x} \mathbf{x}^T \mathbf{M}^T \right] - \mathbb{E}\left[ \mathbf{M} \mathbf{x} \right] \mathbb{E}\left[ \mathbf{x}^T \mathbf{M}^T \right] \\
&= \mathbf{M} \mathbb{E}\left[ \mathbf{x} \mathbf{x}^T \right] \mathbf{M}^T - \mathbf{M} \mathbb{E}\left[ \mathbf{x} \right] \mathbb{E}\left[ \mathbf{x}^T \right] \mathbf{M}^T \\
&= \mathbf{M} \left( \mathbb{E}\left[ \mathbf{x} \mathbf{x}^T \right] - \mathbb{E}\left[ \mathbf{x} \right] \mathbb{E} \left[ \mathbf{x}^T \right] \right) \mathbf{M}^T \\
&= \mathbf{M} \mathbf{P} \mathbf{M}^T.
\end{align}
$$

## Proofs

??? cnote "Proof - Principle Rotations"

    Let the coordinates of the vector $\mathbf{p}$ be $\left[\begin{array}{ccc} x^\beta & y^\beta & z^\beta \end{array} \right]^T$ in $F_\beta$ and $\left[\begin{array}{ccc} x^\alpha & y^\alpha & z^\alpha \end{array} \right]^T$ in $F_\alpha$. Consider a case when $F_\alpha$ is rotated by $\psi$ about the principle 3-axis and a point $P$ as shown in Figure 1.

    <figure markdown>
      ![Rotation about $z^\beta$ (Groves, p31)](/assets/images/kinematics/light/frame_rotation.png#only-light){ width="350" }
      ![Rotation about $z^\beta$ (Groves, p31)](/assets/images/kinematics/dark/frame_rotation.png#only-dark){ width="350" }
      <figcaption>Figure 1 Active rotation about 3-axis</figcaption>
    </figure>

    In $F_\beta$ and $F_\alpha$, the coordinates of $P$ are:

    $$
    \begin{align}
    x^\beta &= r \cos \gamma \\
    y^\beta &= r \sin \gamma \\
    x^\alpha &= r \cos (\gamma - \psi) \\
    &= r \left(\cos \gamma \cos \psi + \sin \gamma \sin \psi \right) \\
    &= x^\beta \cos \psi + y^\beta \sin \psi \\
    y^\alpha &= r \sin (\gamma - \psi) \\
    &= r \left( \sin \gamma \cos \psi - \cos \gamma \sin \psi \right) \\
    &= y^\beta \cos \psi - x^\beta \sin \psi.
    \end{align}
    $$

    Hence, the relationship between the two coordinate frames is:

    $$
    \begin{align}
    \left[
    \begin{array}{c}
    x^\beta \\
    y^\beta \\
    z^\beta \\
    \end{array}
    \right] &=
    \left[
    \begin{array}{ccc}
    \cos \psi & -\sin \psi & 0 \\
    \sin \psi & \cos \psi & 0 \\
    0 & 0 & 1
    \end{array}
    \right]
    \left[
    \begin{array}{c}
    x^\alpha \\
    y^\alpha \\
    z^\alpha \\
    \end{array}
    \right].
    \end{align}
    $$

??? cnote "Proof - Poisson"

    $$
    \dot{\mathbf{R}}^{\alpha}_{\beta}(t) = \lim_{\delta t \rightarrow 0} \left( \frac{\mathbf{R}^{\alpha}_{\beta}(t + \delta t) - \mathbf{R}^{\alpha}_{\beta} (t)}{\delta t} \right). \label{3.6}
    $$


    If $F_{\alpha}$ is rotating with respect to a stationary reference frame, $F_\beta$, then:

    $$
    \mathbf{R}^{\alpha}_{\beta}(t + \delta t) = \mathbf{R}^{\alpha(t + \delta t)}_{\alpha(t)} \mathbf{R}^{\alpha}_{\beta}(t). \label{3.7}
    $$

    Since the rotation of $F_{\alpha}$ from $t$ to $t + \delta t$ is infinitesimal, using small angle approximation and assuming $\boldsymbol{\omega}^{\alpha}_{\beta \alpha}$ is constant:

    $$
    \begin{align}
    \mathbf{R}^{\alpha}_{\beta} (t + \delta t) &= (\mathbf{I}_3 - \left[ \boldsymbol{\rho}_{\alpha(t) \alpha(t + \delta t)}  \right]_\times) \mathbf{R}^{\alpha}_{\beta}(t) \\ 
    &= (\mathbf{I}_3 - \delta t \left[\boldsymbol{\omega}^{\alpha}_{\beta \alpha} \right]_\times) \mathbf{R}^{\alpha}_{\beta}(t) \\
    &= \left(\mathbf{I}_3 - \delta t \boldsymbol{\Omega}^{\alpha}_{\beta \alpha} \right) \mathbf{R}^{\alpha}_{\beta}(t). \label{3.8}
    \end{align}
    $$

    Substituting equation ($\ref{3.8}$) into equation ($\ref{3.6}$), we get:

    $$
    \begin{align}
    \dot{\mathbf{R}}^{\alpha}_{\beta}(t) &= \lim_{\delta t \rightarrow 0} \left( \frac{ \left(\mathbf{I}_3 - \delta t \boldsymbol{\Omega}^{\alpha}_{\beta \alpha} \right) \mathbf{R}^{\alpha}_{\beta}(t) - \mathbf{R}^{\alpha}_{\beta}(t)}{\delta t} \right) \\ 
    &= - \boldsymbol{\Omega}^{\alpha}_{\beta \alpha} \mathbf{R}^{\alpha}_{\beta} (t) \\
    &= -\mathbf{R}^{\alpha}_{\beta} (t) \boldsymbol{\Omega}^{\alpha}_{\beta \alpha},
    \end{align} \label{3.9}
    $$

    which is the Poisson's equation.

    Note that if the above steps are repeated under the assumption that $F_\beta$ is rotating and $F_\alpha$ is stionary, the result 
    $\dot{\mathbf{R}}^\alpha_\beta = -\mathbf{R}^\alpha_\beta \boldsymbol{\Omega}^\beta_{\beta \alpha}$ is obtained. However, the results are equivalent.

## References

1. Groves, P., **Principles of GNSS, Inertial, and Multisensor Integrated Navigation Systems, Second Edition**
