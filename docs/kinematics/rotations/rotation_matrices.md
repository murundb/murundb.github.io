# Rotation Matrices

## Definition

Consider two frames $F_\alpha$ and $F_\beta$ with a common origin, and let $\mathbf{x} \in \mathbb{R}^3$ be an arbitrary vector. $F_\alpha$ and $F_\beta$ are coordinate frames defined by set of orthonormal base vectors:

$$
\begin{align}
F_\alpha &=
\left[
\begin{array}{ccc}
\hat{\mathbf{e}}_{\alpha x} & \hat{\mathbf{e}}_{\alpha y} & \hat{\mathbf{e}}_{\alpha z}
\end{array}
\right] \\ 
F_\beta &=
\left[
\begin{array}{ccc}
\hat{\mathbf{e}}_{\beta x} & \hat{\mathbf{e}}_{\beta y} & \hat{\mathbf{e}}_{\beta z}
\end{array}
\right].
\end{align}
$$

The vector $\mathbf{x}$ can be expressed in each frame as:

$$
\mathbf{x} = F_\alpha \mathbf{x}^{\alpha} = F_\beta \mathbf{x}^{\beta},
$$

where $\mathbf{x}^{\alpha}$ and $\mathbf{x}^{\beta}$ are the column vectors containing the **components** or **coordinates** of the vector $\mathbf{x}$ in the reference frames $F_\alpha$ and $F_\beta$ respectively. Then we have:

$$
\mathbf{x}^{\beta} = \mathbf{R}^{\beta}_{\alpha} \mathbf{x}^{\alpha},
$$

where $\mathbf{R}^{\beta}_{\alpha}$ denotes the direction cosine matrix (DCM) which is the rotation matrix from $F_\alpha$ to $F_\beta$. $\mathbf{R}^{\beta}_{\alpha}$ is given as:

$$
\mathbf{R}^{\beta}_{\alpha} = 
\left[
\begin{array}{ccc}
\hat{\mathbf{e}}^T_{\beta x} \cdot \hat{\mathbf{e}}_{\alpha x} & \hat{\mathbf{e}}^T_{\beta x} \cdot \hat{\mathbf{e}}_{\alpha y} & \hat{\mathbf{e}}^T_{\beta x} \cdot \hat{\mathbf{e}}_{\alpha z} \\
\hat{\mathbf{e}}^T_{\beta y} \cdot \hat{\mathbf{e}}_{\alpha x} & \hat{\mathbf{e}}^T_{\beta y} \cdot \hat{\mathbf{e}}_{\alpha y} & \hat{\mathbf{e}}^T_{\beta y} \cdot \hat{\mathbf{e}}_{\alpha z} \\
\hat{\mathbf{e}}^T_{\beta z} \cdot \hat{\mathbf{e}}_{\alpha x} & \hat{\mathbf{e}}^T_{\beta z} \cdot \hat{\mathbf{e}}_{\alpha y} & \hat{\mathbf{e}}^T_{\beta z} \cdot \hat{\mathbf{e}}_{\alpha z} \\
\end{array}
\right] = 
\left[
\begin{array}{ccc}
\text{cos} (\theta_{\beta_x \alpha_x}) & \text{cos} (\theta_{\beta_x \alpha_y}) & \text{cos} (\theta_{\beta_x \alpha_z})  \\
\text{cos} (\theta_{\beta_y \alpha_x}) & \text{cos} (\theta_{\beta_y \alpha_y}) & \text{cos} (\theta_{\beta_y \alpha_z})  \\
\text{cos} (\theta_{\beta_z \alpha_x}) & \text{cos} (\theta_{\beta_z \alpha_y}) & \text{cos} (\theta_{\beta_z \alpha_z})  \\
\end{array}
\right],
$$

where $\theta_{\beta_i \alpha_i}$ is the angle between the $i$'th axis of frame $F_\alpha$ and $F_\beta$.

**Proof**. The relationship between the two frames can be obtained by:

$$
\begin{align}
F_{\beta} \mathbf{x}^{\beta} &= F_{\alpha} \mathbf{x}^{\alpha} , \\
\left[
\begin{array}{ccc}
\hat{\mathbf{e}}_{\beta x} & \hat{\mathbf{e}}_{\beta y} & \hat{\mathbf{e}}_{\beta z}
\end{array}
\right]
\left[ 
\begin{array}{c}
x^{\beta} \\
y^{\beta} \\
z^{\beta}
\end{array}
\right] &=
\left[
\begin{array}{ccc}
\hat{\mathbf{e}}_{\alpha x} & \hat{\mathbf{e}}_{\alpha y} & \hat{\mathbf{e}}_{\alpha z}
\end{array}
\right]
\left[ 
\begin{array}{c}
x^{\alpha} \\
y^{\alpha} \\
z^{\alpha}
\end{array}
\right].
\end{align}
$$

Multiplying both sides by 
$\left[
\begin{array}{ccc}
\hat{\mathbf{e}}^T_{\beta x} & \hat{\mathbf{e}}^T_{\beta y} & \hat{\mathbf{e}}^T_{\beta z}
\end{array}
\right]^T$, we get:

$$
\begin{align}
\left[ 
\begin{array}{c}
x^{\beta} \\
y^{\beta} \\
z^{\beta}
\end{array}
\right] &= 
\left[
\begin{array}{ccc}
\hat{\mathbf{e}}^T_{\beta x} \cdot \hat{\mathbf{e}}_{\alpha x} & \hat{\mathbf{e}}^T_{\beta x} \cdot \hat{\mathbf{e}}_{\alpha y} & \hat{\mathbf{e}}^T_{\beta x} \cdot \hat{\mathbf{e}}_{\alpha z} \\
\hat{\mathbf{e}}^T_{\beta y} \cdot \hat{\mathbf{e}}_{\alpha x} & \hat{\mathbf{e}}^T_{\beta y} \cdot \hat{\mathbf{e}}_{\alpha y} & \hat{\mathbf{e}}^T_{\beta y} \cdot \hat{\mathbf{e}}_{\alpha z} \\
\hat{\mathbf{e}}^T_{\beta z} \cdot \hat{\mathbf{e}}_{\alpha x} & \hat{\mathbf{e}}^T_{\beta z} \cdot \hat{\mathbf{e}}_{\alpha y} & \hat{\mathbf{e}}^T_{\beta z} \cdot \hat{\mathbf{e}}_{\alpha z} \\
\end{array}
\right]
\left[ 
\begin{array}{c}
x^{\alpha} \\
y^{\alpha} \\
z^{\alpha}
\end{array}
\right], \\
\mathbf{x}^{\beta} &= \mathbf{R}^{\beta}_{\alpha} \mathbf{x}^{\alpha}.
\end{align}
$$

## Rotation Matrix Properties

Given frames $F_\alpha$ and $F_\beta$ and the rotation matrix $\mathbf{R}^{\alpha}_{\beta}$, the inverse or transpose of $\mathbf{R}^{\alpha}_{\beta}$ represents the inverse transformation:

$$
\mathbf{R}^{\alpha}_{\beta} = \left(\mathbf{R}^{\beta}_{\alpha} \right)^T = \left(\mathbf{R}^{\beta}_{\alpha} \right)^{-1}.
$$

Successive rotations can be performed by chaining the rotation matrices:

$$
\mathbf{R}^{\gamma}_{\alpha} = \mathbf{R}^{\gamma}_{\beta} \mathbf{R}^{\beta}_{\alpha}.
$$

Let $\mathbf{M}$ be an affine transformation matrix that transforms a vector $\mathbf{a}$ into a vector $\mathbf{b}$. We have:

$$
\begin{align}
\label{bma1}
\mathbf{b}^{\alpha} &= \mathbf{M}^{\alpha} \mathbf{a}^\alpha \\
\label{bma2}
\mathbf{b}^{\beta} &= \mathbf{M}^{\beta} \mathbf{a}^\beta \\
\end{align}
$$

Rotation matrix then can be used to transform $\mathbf{M}$ to which specific resolving axes apply. Substituting one to another in equations ($\ref{bma1}$) and ($\ref{bma2}$):

$$
\mathbf{R}^{\alpha}_{\beta} \mathbf{b}^{\beta} = \mathbf{M}^{\alpha} \mathbf{R}^{\alpha}_{\beta} \mathbf{a}^{\beta}.
$$

Premultiplying by $\mathbf{R}^{\beta}_{\alpha}$:

$$
\mathbf{M}^{\beta} = \mathbf{R}^{\beta}_{\alpha} \mathbf{M}^{\alpha} \mathbf{R}^{\alpha}_{\beta}. \label{mrmr}
$$

For example, if a covariance matrix is resolved around the axes of a specific coordinate frame, the resolving axes may be changed to another coordinate frame via eq ($\ref{mrmr}$).

### Example - Covariance Matrix Rotation

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

## Principle Rotations

Before considering more general rotations, it is useful to consider rotations about one basis vector. Consider an object frame $F_\alpha$ and a reference frame $F_\beta$:

$$
\begin{align}
F_\alpha &=
\left[
\begin{array}{ccc}
\hat{\mathbf{e}}_{\alpha x} & \hat{\mathbf{e}}_{\alpha y} & \hat{\mathbf{e}}_{\alpha z}
\end{array}
\right] \\ 
F_\beta &=
\left[
\begin{array}{ccc}
\hat{\mathbf{e}}_{\beta x} & \hat{\mathbf{e}}_{\beta y} & \hat{\mathbf{e}}_{\beta z}
\end{array}
\right].
\end{align}
$$

It is useful to distinguish between two types of rotations:

1. **Active transformation** - Rotation of the object frame while the reference frame stays fixed.
2. **Passive transformation** - Rotation of the reference frame while the object frame stays fixed.

The two rotations are inverse of each other and are interchangeable. Consider an arbitrary vector $\mathbf{p}$ with coordinates $\left[\begin{array}{ccc} x^\beta & y^\beta & z^\beta \end{array} \right]^T$ in $F_\beta$ and $\left[\begin{array}{ccc} x^\alpha & y^\alpha & z^\alpha \end{array} \right]^T$ in $F_\alpha$.

If the object frame $F_\alpha$ has been rotated from the reference frame $F_\beta$ through a rotation about one basis vector (either 3, 2, or 1) by an angle (either $\psi$, $\theta$, or $\phi$), then the principal rotation matrices (from $F_\beta$ to $F_\alpha$ denoted as $\mathbf{R}^\alpha_\beta$) are given as:

$$
\begin{align}
\mathbf{R}_3(\psi) &=
\left[
\begin{array}{ccc}
\text{cos}(\psi) & \text{sin}(\psi) & 0 \\
-\text{sin}(\psi) & \text{cos}(\psi) & 0 \\
0 & 0 & 1
\end{array}
\right] \\ \\
\mathbf{R}_2(\theta) &=
\left[
\begin{array}{ccc}
\text{cos}(\theta) & 0 & -\text{sin}(\theta) \\
0 & 1 & 0 \\
\text{sin}(\theta) & 0 & \text{cos}(\theta)
\end{array}
\right] \\ \\
\mathbf{R}_1(\phi) &=
\left[
\begin{array}{ccc}
1 & 0 & 0 \\
0 & \text{cos}(\phi) & \text{sin}(\phi) \\
0 & -\text{sin}(\phi) & \text{cos}(\phi)
\end{array}
\right]. \\
\end{align}
$$

**Proof**. Consider a case when $F_\alpha$ is rotated by $\psi$ about the principle 3-axis and a point $P$ as shown in Figure 1.

<figure markdown>
  ![Fig 2.1 Rotation about $z^\beta$ (Groves, p31)](/assets/images/kinematics/light/active_rotation.png#only-light){ width="500" }
  ![Fig 2.1 Rotation about $z^\beta$ (Groves, p31)](/assets/images/kinematics/dark/active_rotation.png#only-dark){ width="500" }
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
