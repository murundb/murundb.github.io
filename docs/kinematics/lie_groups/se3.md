## Special Euclidean Group
Special Euclidean group, representing poses (i.e., translation and rotation) is a group is defined as:

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

$\boldsymbol{\ell}$ is the "translation part" (note that this is different from the translation in the matrix). $\boldsymbol{\rho}$ is the rotation part. Here $\left[ \ \cdot \ \right]_\times$ has an extended meaning since in $\mathfrak{se}(3)$, a six-dimensional vector is converted to a four-dimensional matrix using the $\left[ \ \cdot \ \right]_\times$ operator, but it is no longer a skew-symmetric matrix. However, the meaning is still "vector-to-matrix" operation.

## Exponential and Logarithm Map

The exponential mapping on $\mathfrak{se}(3)$ is:

$$
\mathbf{e}^{\left[ \boldsymbol{\xi} \right]_\times} = 
\left[
\begin{array}{cc}
\sum^{\infty}_{n = 0} \frac{1}{n!} \left( \left[ \boldsymbol{\rho} \right]_\times \right)^n & \left(\sum^{\infty}_{n = 0} \frac{1}{(n + 1)!} \left( \left[ \boldsymbol{\rho} \right]_\times \right)^n \right) \boldsymbol{\ell} \\
\mathbf{0}^T & 1
\end{array}
\right] \triangleq
\left[
\begin{array}{cc}
\mathbf{R} & \mathbf{J} \boldsymbol{\ell} \\
\mathbf{0}^T & 1
\end{array}
\right] = \mathbf{T},
$$

where $\mathbf{J}$ is the Jacobian. Let $\boldsymbol{\rho} = \theta \hat{\mathbf{e}}$. Then we can obtain closed-form solutions for the Jacobian matrix $\mathbf{J}$ and its inverse:

$$
\begin{align}
\mathbf{J} &\triangleq \sum^{\infty}_{n = 0} \frac{1}{(n + 1)!} \left( \left[ \boldsymbol{\rho} \right]_\times \right)^n \\
&= \mathbf{I} + \frac{1}{2!}\theta \left[ \hat{\mathbf{e}} \right]_\times
+ \frac{1}{3!}\theta^2 \left[ \hat{\mathbf{e}} \right]^2_\times + \frac{1}{4!}\theta^3 \left[ \hat{\mathbf{e}} \right]^3_\times \ldots \\
&= \frac{1}{\theta} \left( \frac{1}{2!}\theta^2 - \frac{1}{4!}\theta^4 \ldots \right) \left[ \hat{\mathbf{e}} \right]_\times
+ \frac{1}{\theta} \left(\frac{1}{3!} \theta^3 - \frac{1}{5}\theta^5 + \ldots \right) \left[ \hat{\mathbf{e}} \right]^2_\times + \mathbf{I} \\
&= \frac{1}{\theta} (1 - \cos \theta) \left[ \hat{\mathbf{e}} \right]_\times + 
\frac{\theta - \sin \theta}{\theta} (\hat{\mathbf{e}} \hat{\mathbf{e}}^T - \mathbf{I}) + \mathbf{I} \\ 
&= \frac{\sin \theta}{\theta} \mathbf{I} + \left(1 - \frac{\sin \theta}{\theta} \right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T + 
\frac{1 - \cos \theta}{\theta} \left[ \hat{\mathbf{e}} \right]_\times \\ 
\mathbf{J}^{-1} &\triangleq \frac{\theta}{2} \cot \frac{\theta}{2} \mathbf{I} + 
\left(1 - \frac{\theta}{2} \cot \frac{\theta}{2} \right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T - \frac{\theta}{2} \left[ \hat{\mathbf{e}} \right]_\times.
\end{align}
$$

## Adjoints

The adjoint map of $SE(3)$ transforms an element $\left [ \mathbf{x} \right]_\times \in \mathfrak{se}(3)$ to another element of $\mathfrak{se}(3)$ according to a map known as the inner automorphism or conjugation:

$$
\text{Adj}_{\mathbf{T}} (\left [ \mathbf{x} \right]_\times) = \mathbf{T} \left [ \mathbf{x} \right]_\times \mathbf{T}^{-1}.
$$