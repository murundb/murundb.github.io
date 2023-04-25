## Lie Groups

For a set that has only one "well-defined" operation, we call it a group. A group is an algebraic structure of one set plut one operator. Denote the set as $A$ and the operation as $\cdot$, then the group can be denoted as $G = (A, \cdot)$. $G$ is a group if it satisfies the following conditions:

1. **Closure:** $\forall a_1, a_2 \in A, a_1 \cdot a_2 \in A$.
2. **Combination:** $\forall a_1, a_2, a_3 \in A, (a_1 \cdot a_2) \cdot a_3 = a_1 \cdot (a_2 \cdot a_3)$.
3. **Unit element:** $\exists a_0 \in A, \ \text{s.t.} \ \forall a \in A, a_0 \cdot a = a \cdot a_0 = a$.
4. **Inverse element:** $\forall a \in A, \exists a^{-1} \in A, \ \text{s.t.} \ a \cdot a^{-1} = a_0$. 

Few examples:

1. $G = (\mathbb{Z}, +)$
2. $G = (SO(3), \cdot)$, $\cdot$ is the matrix multiplication.

**Lie groups** refers to a group with continuous (smooth) properties. Discrete groups like the integer group $\mathbb{Z}$ have no continuous properties, and hence not a Lie group. $SO(3)$ and $SE(3)$ are both Lie groups.

## Lie Algebra

Each Lie group has a Lie algebra corresponding to it. Lie algebra describes the local structure of the Lie group around its origin point (or the tangent space). A Lie algebra consists of a set $\mathbb{V}$, a scalar field $\mathbb{F}$, and a binary operation $\left[, \right]$. The following properties are satiesfied for a Lie Algebra $(\mathbb{V}, \mathbb{F}, \left[, \right])$:


1. **Closure:** $\forall \mathbf{X}, \mathbf{Y} \in \mathbb{V}; \ \left[ \mathbf{X}, \mathbf{Y} \right] \in \mathbb{V}$.
2. **Bilinear composition:** $\forall \mathbf{X}, \mathbf{Y}, \mathbf{Z} \in \mathbb{V}; \ a,b \in \mathbb{F}$, we have:

    $$
    \begin{align}
    &\left[a \mathbf{X} + b \mathbf{Y}, \mathbf{Z} \right] = a \left[\mathbf{X}, \mathbf{Z} \right] + b \left[ \mathbf{Y}, \mathbf{Z} \right] \\
    &\left[\mathbf{Z}, a \mathbf{X} + b \mathbf{Y} \right] = a \left[ \mathbf{Z}, \mathbf{X} \right] + b \left[ \mathbf{Z}, \mathbf{Y} \right].
    \end{align}
    $$

3. **Reflexive:** $\forall \mathbf{X} \in \mathbb{V}; \ \left[ \mathbf{X}, \mathbf{X} \right] = 0$.
4. **Jacobi identity:** $\forall \mathbf{X}, \mathbf{Y}, \mathbf{Z} \in \mathbb{V}; \ \left[ \mathbf{X}, \left[ \mathbf{Y}, \mathbf{Z} \right] \right] + \left[ \mathbf{Z}, \left[ \mathbf{X}, \mathbf{Y} \right] \right] + \left[ \mathbf{Y}, \left[ \mathbf{Z}, \mathbf{X} \right] \right] = 0$.

The binary operations $\left[ , \right]$ are called Lie brackets.

An example is cross product defined on the 3D vector $\mathbb{R}^3$ is a lie bracket.

## Lie Algebra for SO(3)

The Lie algebra corresponding to $SO(3)$ is a vector $\mathfrak{so}(3)$:

$$
\mathfrak{so}(3) = \left\{ \left[ \boldsymbol{\rho} \right]_{\times} \in \mathbb{R}^{3 \times 3}\right\}.
$$

In order words, they are a set of 3D vectors that can express the derivative of the rotation matrix. We have defined its relationship to $SO(3)$  by the exponential map:

$$
\mathbf{R} = \mathbf{e}^{\left[ \boldsymbol{\rho} \right]_\times}.
$$

Exponential mapping is a surjective map and not injective. This means that for each element in $SO(3)$, we can find a $\mathfrak{so}(3)$ element corresponding to it; however, there may be multiple $\mathfrak{so}(3)$ elements corresponding to the same $SO(3)$ element.

## Lie Algebra for SE(3)

Similar to $\mathfrak{so}(3)$, $\mathfrak{se}(3)$ is in $\mathbb{R}^6$:

$$
\mathfrak{se}(3) = 
\left\{
\boldsymbol{\xi} = 
\left[
\begin{array}{c}
\boldsymbol{\ell} \\
\boldsymbol{\rho}
\end{array}
\right] \in \mathbb{R}^{6}, \ 
\boldsymbol{\ell} \in \mathbb{R}^3, \boldsymbol{\rho} \in \mathfrak{so}(3), \ 
\left[ \boldsymbol{\xi} \right]_\times = 
\left[
\begin{array}{cc}
\left[ \boldsymbol{\rho} \right]_\times & \boldsymbol{\ell} \\
\mathbf{0}^T & 0
\end{array}
\right] \in \mathbb{R}^{4 \times 4}
\right\}.
$$

$\boldsymbol{\ell}$ is the "translation part" (note that this is different from the translation in the matrix). $\boldsymbol{\rho}$ is the rotation part. Here $\left[ \cdot \right]_\times$ has an extended meaning since in $\mathfrak{se}(3)$, a six-dimensional vector is converted to a four-dimensional matrix using the $\left[ \cdot \right]_\times$ operator, but it is no longer a skew-symmetric matrix. However, the meaning is still "vector-to-matrix" operation.

The exponential mapping on $\mathfrak{se}(3)$ is:

$$
\mathbf{e}^{\left[ \boldsymbol{\xi} \right]_\times} = 
\left[
\begin{array}{cc}
\sum^{\infty}_{k = 0} \frac{1}{k!} \left( \left[ \boldsymbol{\rho} \right]_\times \right)^k & \sum^{\infty}_{k = 0} \frac{1}{(k + 1)!} \left( \left[ \boldsymbol{\rho} \right]_\times \right)^k \boldsymbol{\ell} \\
\mathbf{0}^T & 1
\end{array}
\right] \triangleq
\left[
\begin{array}{cc}
\mathbf{R} & \mathbf{J} \boldsymbol{\ell} \\
\mathbf{0}^T & 1
\end{array}
\right] = \mathbf{T}.
$$

Let $\boldsymbol{\rho} = \theta \hat{\mathbf{e}}$. Then the linear Jacobian matrix $\mathbf{J}$ is:

$$
\begin{align}
\mathbf{J} &\triangleq \sum^{\infty}_{k = 0} \frac{1}{(k + 1)!} \left( \left[ \boldsymbol{\rho} \right]_\times \right)^k \\
&= \mathbf{I} + \frac{1}{2!}\theta \left[ \hat{\mathbf{e}} \right]_\times
+ \frac{1}{3!}\theta^2 \left[ \hat{\mathbf{e}} \right]^2_\times + \frac{1}{4!}\theta^3 \left[ \hat{\mathbf{e}} \right]^3_\times \ldots \\
&= \frac{1}{\theta} \left( \frac{1}{2!}\theta^2 - \frac{1}{4!}\theta^4 \ldots \right) \left[ \hat{\mathbf{e}} \right]_\times
+ \frac{1}{\theta} \left(\frac{1}{3!} \theta^3 - \frac{1}{5}\theta^5 + \ldots \right) \left[ \hat{\mathbf{e}} \right]^2_\times + \mathbf{I} \\
&= \frac{1}{\theta} (1 - \cos \theta) \left[ \hat{\mathbf{e}} \right]_\times + 
\frac{\theta - \sin \theta}{\theta} (\hat{\mathbf{e}} \hat{\mathbf{e}}^T - \mathbf{I}) + \mathbf{I} \\ 
&= \frac{\sin \theta}{\theta} \mathbf{I} + \left(1 - \frac{\sin \theta}{\theta} \right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T + 
\frac{1 - \cos \theta}{\theta} \left[ \hat{\mathbf{e}} \right]_\times.
\end{align}
$$






