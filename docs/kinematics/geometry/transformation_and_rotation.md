## Pose and Attitude

**Attitude** describes the orientation of the axes of one coordinate frame with respect to those of another. 
For example, let $F_\alpha$ be a frame attached to an object of interest and let $F_\beta$ be the reference frame.
Then we can represent the attitude of the object by matrix $\mathbf{R}^{\beta}_{\alpha}$ (some also use $\mathbf{R}^{\alpha}_{\beta}$), which
represents the transformation from frame $F_\alpha$ to frame $F_\beta$. 


Vehicles typically have six degrees of freedom: three in translation and three in rotation. This six-degree-of-freedom geometric configuration is known
as the **pose** of the vehicle. 

## Transformation and Rotation Matrix 

Special orthogonal group is a Lie group that consists of orthonormal matrices (orthonormal rows and columns) that provide distance-preserving transformations of a Euclidean space:

$$
SO(n) = \left\{ \mathbf{R} \in \mathbb{R}^{n \times n} \ | \ \mathbf{R} \mathbf{R}^T = \mathbf{R}^T \mathbf{R} = \mathbf{I}_{n \times n}, \ \text{det}(\mathbf{R}) = 1 \right\}.
$$

Transformation and rotation matrices has nine elements but 3D coordinate transformation only has 3 degrees of freedom (DOF)..

Every matrix $\mathbf{R} \in SO(3)$ is a 3D transformation matrix. They form a continuous 3D manifold in the 9D space of all possible $\mathbb{R}^{3 \times 3}$ matrices. 

## Passive and Active Transformation

It is important to distinguish between two types of transformations: 

1. **Passive transformation** - Rotations of the coordinate system while the objects stays fixed
2. **Active transformation** - Rotation of the object (e.g., vector) while the coordinate system stays fixed.

The two transofrmations are inverses of each other. 

For active transformation, we only need to specify the frame of reference and can refer it as a **rotation matrix** $\mathbf{R}^{\gamma}$, where $\gamma$ is the frame of reference.

For passive transformation (transformation matrix), we should specify two frame names (although rotation matrix can also be viewed as the inverse of transformation matrix $\mathbf{R}^{\beta}_{\alpha}$).

## Transformation and Rotation Matrix Properties

Consider two coordinate frames $F_\alpha$ and $F_\beta$. Then, the transformation matrix from $F_\beta$ to $F_\alpha$ is $\mathbf{R}^{\alpha}_{\beta}$. Inverse or transpose of $\mathbf{R}^{\alpha}_{\beta}$ represents the inverse transformation:

$$
\mathbf{R}^{\alpha}_{\beta} = \left(\mathbf{R}^{\beta}_{\alpha} \right)^T = \left(\mathbf{R}^{\beta}_{\alpha} \right)^{-1}.
$$

Successive transformation can be performed by chaining the transformation matrices:

$$
\mathbf{R}^{\gamma}_{\alpha} = \mathbf{R}^{\gamma}_{\beta} \mathbf{R}^{\beta}_{\alpha}.
$$

Let $\mathbf{M}$ be a matrix that transforms a vector $\mathbf{a}$ into a vector $\mathbf{b}$:

$$
\begin{align}
\label{bma1}
\mathbf{b}^{\alpha} &= \mathbf{M}^{\alpha} \mathbf{a}^\alpha \\
\label{bma2}
\mathbf{b}^{\beta} &= \mathbf{M}^{\beta} \mathbf{a}^\beta \\
\end{align}
$$

A transformation matrix then can be used to transform the rotation matrix $\mathbf{M}$ to which specific resolving axes apply. Substituting one to another in equations ($\ref{bma1}$) and ($\ref{bma2}$):

$$
\mathbf{R}^{\alpha}_{\beta} \mathbf{b}^{\beta} = \mathbf{M}^{\alpha} \mathbf{R}^{\alpha}_{\beta} \mathbf{a}^{\beta}.
$$

Premultiplying by $\mathbf{R}^{\beta}_{\alpha}$:

$$
\mathbf{M}^{\beta} = \mathbf{R}^{\beta}_{\alpha} \mathbf{M}^{\alpha} \mathbf{R}^{\alpha}_{\beta}. \label{mrmr}
$$

For example, if a covariance matrix is resolved around the axes of a specific coordinate frame, the resolving axes may be changed to another coordinate frame via eq ($\ref{mrmr}$).

## Direction Cosine Matrix

Transformation and rotation matrices are also called a direction cosine matrices. 


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

Let $\mathbf{R}^{\beta}_{\alpha}$ denote the direction cosine matrix (DCM). Then:

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
\text{cos} (\mu_{\beta_x \alpha_x}) & \text{cos} (\mu_{\beta_x \alpha_y}) & \text{cos} (\mu_{\beta_x \alpha_z})  \\
\text{cos} (\mu_{\beta_y \alpha_x}) & \text{cos} (\mu_{\beta_y \alpha_y}) & \text{cos} (\mu_{\beta_y \alpha_z})  \\
\text{cos} (\mu_{\beta_z \alpha_x}) & \text{cos} (\mu_{\beta_z \alpha_y}) & \text{cos} (\mu_{\beta_z \alpha_z})  \\
\end{array}
\right],
$$

where $\mu_{\beta_i \alpha_i}$ is the angle between the $i$'th axis of frame $F_\alpha$ and $F_\beta$.

## Transformation and Translation using Homogeneous Coordinates
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

Any matrix $\mathbf{T} \in SE(3)$ is a 4D transformation matrix (in homogeneous coordinates) that applies transformation and translation simultaneously. Inverse of $\mathbf{T}$ represents an inverse transformation:

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