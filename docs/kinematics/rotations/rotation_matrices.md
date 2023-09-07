# Rotation Matrices

!!! cnote "**Passive and Active Rotations**"

    Although it is usually obvious from the context, it is useful to distinguish between two types of transformations: 

    1. **Active transformation** - Rotation of the object (e.g., vector) while the reference frame stays
    fixed.
    2. **Passive transformation** - Rotation of the reference frame while the objects stays fixed.

    The two transformations are inverses of each other.

## Rotation Matrix via Direction Cosine Matrix

Rotation matrices are also called a **direction cosine matrices**.

Consider two frames $F_\alpha$ and $F_\beta$ with a common origin, and let $\mathbf{x} \in \mathbb{R}^3$ be an arbitrary vector. The vector $\mathbf{x}$ can be expressed in each frame as:

$$
\mathbf{x} = F_\alpha \mathbf{x}^{\alpha} = F_\beta \mathbf{x}^{\beta},
$$

where $\mathbf{x}^{\alpha}$ and $\mathbf{x}^{\beta}$ are the column vectors containing the **components** or **coordinates** of $\mathbf{x}$ in the reference frames $F_\alpha$ and $F_\beta$.

$F_\alpha$ and $F_\beta$ are coordinate frames defined by set of orthonormal base vectors:

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

The relationship between the two frames can be obtained by:

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
x^{\beta}_1 \\
x^{\beta}_2 \\
x^{\beta}_3
\end{array}
\right] &= 
\left[
\begin{array}{ccc}
\hat{\mathbf{e}}_{\alpha x} & \hat{\mathbf{e}}_{\alpha y} & \hat{\mathbf{e}}_{\alpha z}
\end{array}
\right]
\left[ 
\begin{array}{c}
x^{\alpha}_1 \\
x^{\alpha}_2 \\
x^{\alpha}_3
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
x^{\beta}_1 \\
x^{\beta}_2 \\
x^{\beta}_3
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
x^{\alpha}_1 \\
x^{\alpha}_2 \\
x^{\alpha}_3
\end{array}
\right], \\
\mathbf{x}^{\beta} &= \mathbf{R}^{\beta}_{\alpha} \mathbf{x}^{\alpha},
\end{align}
$$

where $\mathbf{R}^{\beta}_{\alpha}$ denotes the direction cosine matrix (DCM) which is the rotation matrix from $F_\alpha$ to $F_\beta$.

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

## Rotation Matrix Properties

Given frames $F_\alpha$ and $F_\beta$ and the rotation matrix $\mathbf{R}^{\alpha}_{\beta}$, the inverse or transpose of $\mathbf{R}^{\alpha}_{\beta}$ represents the inverse transformation:

$$
\mathbf{R}^{\alpha}_{\beta} = \left(\mathbf{R}^{\beta}_{\alpha} \right)^T = \left(\mathbf{R}^{\beta}_{\alpha} \right)^{-1}.
$$

Successive rotations can be performed by chaining the rotation matrices:

$$
\mathbf{R}^{\gamma}_{\alpha} = \mathbf{R}^{\gamma}_{\beta} \mathbf{R}^{\beta}_{\alpha}.
$$

Let $\mathbf{M}$ be a linear transformation matrix that transforms a vector $\mathbf{a}$ into a vector $\mathbf{b}$. We have:

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

## Principle Rotations

Let $F_\beta = \left[ \begin{array}{ccc} x^\beta & y^\beta & z^\beta \end{array} \right]$. Consider a vector with a fixed length, $r_{\beta \alpha}$ from the origin of frame $\beta$ to a point, $\alpha$, that has rotated about the $z^\beta$ by angle $\psi$.

<figure markdown>
  ![Fig 2.1 Rotation about $z^\beta$ (Groves, p31)](/assets/images/kinematics/light/rotation_1.png#only-light){ width="300" }
  ![Fig 2.1 Rotation about $z^\beta$ (Groves, p31)](/assets/images/kinematics/dark/rotation_1.png#only-dark){ width="300" }
  <figcaption>Figure 1 Rotation about z (Groves, p31)</figcaption>
</figure>

Figure 1 shows the position of the vector at times $t_0$ (pre-rotation) and $t_1$ (post-rotation). At $t_0$, the position of $\alpha$ with respect to the origin of $F_\beta$
and resolved about the axes of $F_\beta$ can be described by:

$$
\begin{align}
x^{\beta}_{\beta \alpha} (t_0) &= r_{\beta \alpha} \text{cos}(\phi) \\
y^{\beta}_{\beta \alpha} (t_0) &= r_{\beta \alpha} \text{sin}(\phi) \\
z^{\beta}_{\beta \alpha} (t_0) &= z^{\beta}_{\beta \alpha} (t_0).
\end{align}
$$

At $t_1$, the vector rotates about $z^\beta$ by angle $\psi$:

$$
\begin{align}
x^{\beta}_{\beta \alpha} (t_1) &= r_{\beta \alpha} \text{cos}(\phi + \psi) = r_{\beta \alpha}\text{cos}(\phi)\text{cos}(\psi) - r_{\beta \alpha}\text{sin}(\phi)\text{sin}(\psi)\\
y^{\beta}_{\beta \alpha} (t_1) &= r_{\beta \alpha} \text{sin}(\phi + \psi) = r_{\beta \alpha}\text{sin}(\phi)\text{cos}(\psi) + r_{\beta \alpha}\text{cos}(\phi)\text{sin}(\psi) \\
z^{\beta}_{\beta \alpha} (t_1) &= z^{\beta}_{\beta \alpha} (t_0).
\end{align}
$$

Combining the above two yields:

$$
\begin{align}
x^{\beta}_{\beta \alpha} (t_1) &= x^{\beta}_{\beta \alpha} (t_0) \text{cos}(\psi) - y^{\beta}_{\beta \alpha} (t_0) \text{sin}(\psi) \\
y^{\beta}_{\beta \alpha} (t_1) &= x^{\beta}_{\beta \alpha} (t_0) \text{sin}(\psi) + y^{\beta}_{\beta \alpha} (t_0) \text{cos}(\psi) \\
z^{\beta}_{\beta \alpha} (t_1) &= z^{\beta}_{\beta \alpha} (t_0),
\end{align}
$$

We can use similar analogy to obtain three principle rotation matrices:

$$
\begin{align}
\mathbf{R}_z(\psi) &= 
\left[
\begin{array}{ccc}
\text{cos}(\psi) & -\text{sin}(\psi) & 0 \\
\text{sin}(\psi) & \text{cos}(\psi) & 0 \\
0 & 0 & 1
\end{array} 
\right] \\ \\
\mathbf{R}_y(\theta) &= 
\left[
\begin{array}{ccc}
\text{cos}(\theta) & 0 & \text{sin}(\theta) \\
0 & 1 & 0 \\
-\text{sin}(\theta) & 0 & \text{cos}(\theta)
\end{array} 
\right] \\ \\
\mathbf{R}_x(\phi) &= 
\left[
\begin{array}{ccc}
1 & 0 & 0 \\
0 & \text{cos}(\phi) & -\text{sin}(\phi) \\
0 & \text{sin}(\phi) & \text{cos}(\phi)
\end{array} 
\right]. \\
\end{align}
$$