## Special Orthogonal Group

Special orthogonal group (SO) is a Lie group that consists of orthonormal matrices (orthonormal rows and columns) that provide distance-preserving transformations of a Euclidean space:

$$
SO(n) = \left\{ \mathbf{R} \in \mathbb{R}^{n \times n} \ | \ \mathbf{R} \mathbf{R}^T = \mathbf{R}^T \mathbf{R} = \mathbf{I}_{n \times n}, \ \text{det}(\mathbf{R}) = 1 \right\}.
$$

Rotation matrices has nine elements but 3D rotation only has 3 degrees of freedom (DOF)..

Every matrix $\mathbf{R} \in SO(3)$ is a 3D rotation matrix. They form a continuous 3D manifold in the 9D space of all possible $\mathbb{R}^{3 \times 3}$ matrices. 

## Passive and Active Rotation

Although it is usually obvious from the context, it is useful to distinguish between two types of transformations: 

1. **Active transformation** - Rotation of the object (e.g., vector) while the reference frame stays
 fixed.
2. **Passive transformation** - Rotation of the reference frame while the objects stays fixed.

The two transformations are inverses of each other.

## Rotation Matrix via Direction Cosine Matrix

Rotation matrices are also called a direction cosine matrices. 

Let $\mathbf{x} \in \mathbb{R}^3$ be an arbitrary vector and $F_\alpha$ and $F_\beta$ be coordinate frames defined by set of orthonormal base vectors 
$\left[
\begin{array}{ccc}
\mathbf{u}_{\alpha x} & \mathbf{u}_{\alpha y} & \mathbf{u}_{\alpha z}
\end{array}
\right]$
and 
$\left[
\begin{array}{ccc}
\mathbf{u}_{\beta x} & \mathbf{u}_{\beta y} & \mathbf{u}_{\beta z}
\end{array}
\right]$ respectively. Let 
$\mathbf{x}^{\alpha} = 
\left[
\begin{array}{ccc} 
x^{\alpha}_1 & x^{\alpha}_2 &x^{\alpha}_3
\end{array}
\right]$ be the coordinates of $\mathbf{x}$ resolved in frame $F_\alpha$ and 
$\mathbf{x}^{\beta} = 
\left[
\begin{array}{ccc} 
x^{\beta}_1 & x^{\beta}_2 &x^{\beta}_3
\end{array}
\right]$ be the coordinates of $\mathbf{x}$ resolved in frame $F_\beta$. 

Vector $\mathbf{x}$ can be expressed as:

$$
\begin{align}
\mathbf{x} &= F_{\beta} \mathbf{x}^{\beta}
= 
\left[
\begin{array}{ccc}
\mathbf{u}_{\beta x} & \mathbf{u}_{\beta y} & \mathbf{u}_{\beta z}
\end{array}
\right]
\left[ 
\begin{array}{c}
x^{\beta}_1 \\
x^{\beta}_2 \\
x^{\beta}_3
\end{array}
\right] \\
&= F_{\alpha} \mathbf{x}^{\alpha} = 
\left[
\begin{array}{ccc}
\mathbf{u}_{\alpha x} & \mathbf{u}_{\alpha y} & \mathbf{u}_{\alpha z}
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
\mathbf{u}^T_{\beta x} & \mathbf{u}^T_{\beta y} & \mathbf{u}^T_{\beta z}
\end{array}
\right]^T$, we get:

$$
\left[ 
\begin{array}{c}
x^{\beta}_1 \\
x^{\beta}_2 \\
x^{\beta}_3
\end{array}
\right] = 
\left[
\begin{array}{ccc}
\mathbf{u}^T_{\beta x} \cdot \mathbf{u}_{\alpha x} & \mathbf{u}^T_{\beta x} \cdot \mathbf{u}_{\alpha y} & \mathbf{u}^T_{\beta x} \cdot \mathbf{u}_{\alpha z} \\
\mathbf{u}^T_{\beta y} \cdot \mathbf{u}_{\alpha x} & \mathbf{u}^T_{\beta y} \cdot \mathbf{u}_{\alpha y} & \mathbf{u}^T_{\beta y} \cdot \mathbf{u}_{\alpha z} \\
\mathbf{u}^T_{\beta z} \cdot \mathbf{u}_{\alpha x} & \mathbf{u}^T_{\beta z} \cdot \mathbf{u}_{\alpha y} & \mathbf{u}^T_{\beta z} \cdot \mathbf{u}_{\alpha z} \\
\end{array}
\right]
\left[ 
\begin{array}{c}
x^{\alpha}_1 \\
x^{\alpha}_2 \\
x^{\alpha}_3
\end{array}
\right].
$$

Let $\mathbf{R}^{\beta}_{\alpha}$ denote the direction cosine matrix (DCM) which is the rotation matrix from $F_\alpha$ to $F_\beta$. Then:

$$
\mathbf{R}^{\beta}_{\alpha} = 
\left[
\begin{array}{ccc}
\mathbf{u}^T_{\beta x} \cdot \mathbf{u}_{\alpha x} & \mathbf{u}^T_{\beta x} \cdot \mathbf{u}_{\alpha y} & \mathbf{u}^T_{\beta x} \cdot \mathbf{u}_{\alpha z} \\
\mathbf{u}^T_{\beta y} \cdot \mathbf{u}_{\alpha x} & \mathbf{u}^T_{\beta y} \cdot \mathbf{u}_{\alpha y} & \mathbf{u}^T_{\beta y} \cdot \mathbf{u}_{\alpha z} \\
\mathbf{u}^T_{\beta z} \cdot \mathbf{u}_{\alpha x} & \mathbf{u}^T_{\beta z} \cdot \mathbf{u}_{\alpha y} & \mathbf{u}^T_{\beta z} \cdot \mathbf{u}_{\alpha z} \\
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

Consider two coordinate frames $F_\alpha$ and $F_\beta$. Then, the rotation matrix from $F_\beta$ to $F_\alpha$ is $\mathbf{R}^{\alpha}_{\beta}$. Inverse or transpose of $\mathbf{R}^{\alpha}_{\beta}$ represents the inverse transformation:

$$
\mathbf{R}^{\alpha}_{\beta} = \left(\mathbf{R}^{\beta}_{\alpha} \right)^T = \left(\mathbf{R}^{\beta}_{\alpha} \right)^{-1}.
$$

Successive rotations can be performed by chaining the rotation matrices:

$$
\mathbf{R}^{\gamma}_{\alpha} = \mathbf{R}^{\gamma}_{\beta} \mathbf{R}^{\beta}_{\alpha}.
$$

Let $\mathbf{M}$ be a linear transformation matrix that transforms a vector $\mathbf{a}$ into a vector $\mathbf{b}$. In two different frames, we have:

$$
\begin{align}
\label{bma1}
\mathbf{b}^{\alpha} &= \mathbf{M}^{\alpha} \mathbf{a}^\alpha \\
\label{bma2}
\mathbf{b}^{\beta} &= \mathbf{M}^{\beta} \mathbf{a}^\beta \\
\end{align}
$$

Rotation matrix then can be used to transform the linear transformation matrix $\mathbf{M}$ to which specific resolving axes apply. Substituting one to another in equations ($\ref{bma1}$) and ($\ref{bma2}$):

$$
\mathbf{R}^{\alpha}_{\beta} \mathbf{b}^{\beta} = \mathbf{M}^{\alpha} \mathbf{R}^{\alpha}_{\beta} \mathbf{a}^{\beta}.
$$

Premultiplying by $\mathbf{R}^{\beta}_{\alpha}$:

$$
\mathbf{M}^{\beta} = \mathbf{R}^{\beta}_{\alpha} \mathbf{M}^{\alpha} \mathbf{R}^{\alpha}_{\beta}. \label{mrmr}
$$

For example, if a covariance matrix is resolved around the axes of a specific coordinate frame, the resolving axes may be changed to another coordinate frame via eq ($\ref{mrmr}$).

## Principle Rotations

<figure markdown>
  ![Fig 2.1 Rotation about $z^\beta$ (source Groves, p31)](/assets/images/kinematics/light/rotation_1.png#only-light){ width="300" }
  ![Fig 2.1 Rotation about $z^\beta$ (source Groves, p31)](/assets/images/kinematics/dark/rotation_1.png#only-dark){ width="300" }
  <figcaption>Figure 1 Body Frame (source Groves, p29)</figcaption>
</figure>


Let $\beta$ be a Cartesian coordinate frame with axes $(x^\beta, y^\beta, z^\beta)$.

Consider a vector with a fixed length, $r_{\beta \alpha}$ from the origin of frame $\beta$ to a point, $\alpha$, that has rotated about the $z^\beta$
by angle $\psi$. Fig 2.1 shows the position of the vector at times $t_0$ (pre-rotation) and $t_1$ (post-rotation). At $t_0$, the position of $\alpha$ with respect to the origin of frame $\beta$
and resolved about the axes of $\beta$ can be described by:

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

We can use similar analogy to obtain three rotation matrices:

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

## Rotation and Translation using Homogeneous Coordinates
Special Euclidean group is a group is defined as:

$$
SE(3) = \left\{ \mathbf{T} = 
    \left[
    \begin{array}{cc}
    \mathbf{R} & \mathbf{t} \\
    \mathbf{0}^T & 1
    \end{array}
    \right]
    \in \mathbb{R}^{4 \times 4} \ | \
    \mathbf{R} \in SO(3), \ \mathbf{t} \in \mathbb{R}^3
    \right\}.
$$

Any matrix $\mathbf{T} \in SE(3)$ is a 4D transformation matrix (in homogeneous coordinates) that applies rotation and translation simultaneously. Inverse of $\mathbf{T}$ represents an inverse transformation:

$$
\mathbf{T}^{-1} = 
\left[
\begin{array}{cc}
\mathbf{R}^T & -\mathbf{R}^T \mathbf{t} \\
\mathbf{0}^T & 1
\end{array}
\right].
$$

Transformation matrix has 16 elements but 3D coordinate transformation and translation has only 6 DOF.