## Special Orthogonal Group

Special orthogonal group (SO) is a Lie group that consists of orthonormal matrices (orthonormal rows and columns) that provide distance-preserving transformations of a Euclidean space:

$$
SO(n) = \left\{ \mathbf{R} \in \mathbb{R}^{n \times n} \ | \ \mathbf{R} \mathbf{R}^T = \mathbf{R}^T \mathbf{R} = \mathbf{I}_{n \times n}, \ \text{det}(\mathbf{R}) = 1 \right\}.
$$

Rotation matrices has nine elements but 3D rotation only has 3 degrees of freedom (DOF).

Every matrix $\mathbf{R} \in SO(3)$ is a 3D rotation matrix. They form a continuous 3D manifold in the 9D space of all possible $\mathbb{R}^{3 \times 3}$ matrices. 

## Lie Algebra for SO(3)

The Lie algebra, $\mathfrak{so}(3)$, corresponding to $SO(3)$ is the set of skew-symmetric matrices, $\left[ \boldsymbol{\rho} \right]_\times$, obtained from $\boldsymbol{\rho} \in \mathbb{R^3}$:

$$
\mathfrak{so}(3) = \left\{ \boldsymbol{P} = \left[ \boldsymbol{\rho} \right]_{\times} \in \mathbb{R}^{3 \times 3} \ | \ \boldsymbol{\rho} \in \mathbb{R}^3 \right\}.
$$

The generators of $\mathfrak{so}(3)$ correspond to the derivatives of rotation matrices around the each of the standard axes, evaluated at the identity:

$$
G_1 = 
\left[
\begin{array}{ccc}
0 & 0 & 0 \\
0 & 0 & -1 \\
0 & 1 & 0
\end{array}
\right], \ 
G_2 = 
\left[
\begin{array}{ccc}
0 & 0 & 1 \\
0 & 0 & 0 \\
-1 & 0 & 0
\end{array}
\right], \ 
G_3 = 
\left[
\begin{array}{ccc}
0 & -1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 0
\end{array}
\right].
$$

An element $\left[\boldsymbol{\rho} \right]_\times \in \mathfrak{so}(3)$ can be represented as a linear combination of the generators:

$$
\rho_1 G_1 + \rho_2 G_2 + \rho_3 G_3 \in \mathfrak{so}(3),
$$

where $\boldsymbol{\rho} = \left[\begin{array}{ccc} \rho_1 & \rho_2 & \rho_3 \end{array} \right]^T$.

## Exponential and Logarithm Map

The exponential map that takes skew symmetric matrices to rotation matrices is simply the matrix exponential over a linear combination of the generators:

$$
\begin{align}
\mathbf{R} &= \exp{\left(\left[ \boldsymbol{\rho} \right]_\times\right)} \\
&= \exp 
\left[
\begin{array}{ccc}
0 & -\rho_3 & \rho_2 \\ 
\rho_3 & 0 & -\rho_1 \\ 
-\rho_2 & \rho_1 & 0
\end{array} 
\right] \\ 
&= \mathbf{I} + \left[ \boldsymbol{\rho} \right]_\times + \frac{1}{2!}\left[ \boldsymbol{\rho} \right]^2_\times + \frac{1}{3!} \left[ \boldsymbol{\rho} \right]^3_\times + \ldots \\
&= \mathbf{I} + \left( \frac{\sin \theta}{\theta} \right) \left[ \boldsymbol{\rho} \right]_\times + \left( \frac{1 - \cos \theta}{\theta^2} \right) \left[ \boldsymbol{\rho} \right]^2_\times,
\end{align}
$$

which is the **Rodrigues' formula** derived previously. The exponential map yields a rotation by $\theta$ radians around the axis given by $\boldsymbol{\rho}$. The exponential map can be inverted to give the logarithm, going from $SO(3)$ to $\mathfrak{so}(3)$:

$$
\begin{align}
\theta &= \arccos \left( \frac{\text{tr}(\mathbf{R}) - 1}{2} \right) \\
\ln (\mathbf{R}) &= \frac{\theta}{2 \sin \theta} \left( \mathbf{R} - \mathbf{R}^T \right).
\end{align}
$$

The vector $\boldsymbol{\rho}$ is then taken from the off-diagonal elements of $\ln (\mathbf{R})$.

Exponential mapping is a surjective map and not injective. This means that for each element in $SO(3)$, we can find a $\mathfrak{so}(3)$ element corresponding to it; however, there may be multiple $\mathfrak{so}(3)$ elements corresponding to the same $SO(3)$ element.

## Adjoints

The mapping of a vector from one tangent space around one element to tangent space of another element is called the **adjoint** which is a linear transformation. For an element $\mathbf{R} \in SO(3)$, the adjoint is $\text{Adj}_{\mathbf{R}}$:

$$
\begin{align}
&\mathbf{R} \ \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right) = \exp \left( \text{Adj}_{\mathbf{R}} \cdot \left[ \boldsymbol{\rho} \right]_\times \right) \mathbf{R} \ \Rightarrow \\
&\exp \left( \text{Adj}_{\mathbf{R}} \cdot \left[ \boldsymbol{\rho} \right]_\times \right) = \mathbf{R} \ \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right) \mathbf{R}^{-1}.
\end{align}
$$

In order words, rotating a tangent vector by an element "moves" it from the tangent space on the right side of the element to the tangent space on the left.

For $SO(3)$, the adjoint transformation for an element is same as the rotation matrix used to represent the element:

$$
\text{Adj}_{\mathbf{R}} = \mathbf{R}.
$$

**Proof 1**. Using cross product identities:

$$
\begin{align}
\exp (\text{Adj}_{\mathbf{R}} \cdot \left[ \boldsymbol{\rho} \right]_\times)
&= \mathbf{R} \ \exp(\left[ \boldsymbol{\rho} \right]_\times) \mathbf{R}^{-1} \\
&= \mathbf{R} 
\left(
\mathbf{I} + \left( \frac{\sin \theta}{\theta} \right) \left[ \boldsymbol{\rho} \right]_\times + \left( \frac{1 - \cos \theta}{\theta^2} \right) \left[ \boldsymbol{\rho} \right]^2_\times
\right)
\mathbf{R}^{-1} \\
&= 
\mathbf{I} + \left( \frac{\sin \theta}{\theta} \right) \mathbf{R} \ \left[ \boldsymbol{\rho} \right]_\times \mathbf{R}^{-1} + \left( \frac{1 - \cos \theta}{\theta^2} \right) \mathbf{R} \ \left[ \boldsymbol{\rho} \right]^2_\times \mathbf{R}^{-1} \\ 
&= 
\mathbf{I} + \left( \frac{\sin \theta}{\theta} \right) \mathbf{R} \ \left[ \boldsymbol{\rho} \right]_\times \mathbf{R}^{-1} + \left( \frac{1 - \cos \theta}{\theta^2} \right) \mathbf{R} \ \left[ \boldsymbol{\rho} \right]_\times \mathbf{R}^{-1} \mathbf{R} \left[ \boldsymbol{\rho} \right]_\times \mathbf{R}^{-1} \\ 
&= \mathbf{I} + \left( \frac{\sin \theta}{\theta} \right) \left[ \mathbf{R} \boldsymbol{\rho} \right]_\times + \left( \frac{1 - \cos \theta}{\theta^2} \right) \left[ \mathbf{R} \boldsymbol{\rho} \right]^2_\times \\
&= \exp \left( \left[ \mathbf{R} \boldsymbol{\rho} \right]_\times \right).
\end{align}
$$


**Proof 2**. Using the generators $\boldsymbol{\Gamma}$ of Lie algebra, let $t \in \mathbb{R}$ such that $\left[ \boldsymbol{\rho} \right]_\times = t \cdot \boldsymbol{\Gamma}$. Differentiating the adjoint equations by $t$ around $t = 0$ yields to:

$$
\begin{align}
&\frac{d}{dt} \left. \exp \left( \text{Adj}_{\mathbf{R}} \cdot t \boldsymbol{\Gamma} \right) \right|_{t = 0} = \frac{d}{dt} \left. \mathbf{R} \ \exp \left( t \boldsymbol{\Gamma} \right) \mathbf{R}^{-1} \right|_{t = 0} \\
&\frac{d}{dt} \left. \left( \mathbf{I} + \left[ \text{Adj}_{\mathbf{R}} \cdot t \boldsymbol{\Gamma} \right]_\times + \text{H.O.T} \right) \right|_{t = 0} = \mathbf{R} \\
&\frac{d}{dt} \left. \left( \mathbf{I} + \left[ t \boldsymbol{\Gamma} \right]_\times + \text{H.O.T} \right) \right|_{t = 0} \mathbf{R}^{-1} \\
& \left[ \text{Adj}_{\mathbf{R}} \cdot \boldsymbol{\Gamma} \right]_\times = 
\mathbf{R} \left[ \boldsymbol{\Gamma} \right]_\times \mathbf{R}^{-1} \\
&\left[ \text{Adj}_{\mathbf{R}} \cdot \boldsymbol{\Gamma} \right]_\times = \left[ \mathbf{R} \boldsymbol{\Gamma} \right]_\times \\ 
&\Rightarrow \quad \text{Adj}_{\mathbf{R}} = \mathbf{R}.
\end{align}
$$

## Jacobian

### Jacobian with respect to vector

Consider rotation of vector $\mathbf{x} \in \mathbb{R}^3$ with $\mathbf{R} \in SO(3)$:

$$
\mathbf{y} = f(\mathbf{R}, \mathbf{x}) = \mathbf{R} \mathbf{x}.
$$

The differentiating with respec to $\mathbf{x}$ yields to:

$$
\frac{\partial \mathbf{y}}{ \partial \mathbf{x}} = \mathbf{R},
$$

as $f$ is linear in $\mathbf{x}$.

Differentiation by the rotation parameter is performed by left multipling the rotation by the exponential of a tangent vector and differentiating the resulting expression around the zero perturbation:

$$
\begin{align}
\frac{ \partial \mathbf{y}}{\partial \mathbf{R}} &= 
\end{align}
$$

