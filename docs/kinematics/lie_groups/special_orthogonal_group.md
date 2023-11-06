# Special Orthogonal Group

## SO(3) Definition

Special orthogonal group (SO) is a Lie group that consists of orthonormal matrices (orthonormal rows and columns) that provide distance-preserving transformations of a Euclidean space:

$$
SO(3) = \left\{ \mathbf{R} \in \mathbb{R}^{3 \times 3} \ | \ \mathbf{R} \mathbf{R}^T = \mathbf{R}^T \mathbf{R} = \mathbf{I}, \ \text{det}(\mathbf{R}) = 1 \right\}.
$$

Every matrix $\mathbf{R} \in SO(3)$ is a 3D rotation matrix. They form a continuous 3D manifold in the 9D space of all possible $\mathbb{R}^{3 \times 3}$ matrices. 

## Lie Algebra for SO(3)

The Lie algebra, $\mathfrak{so}(3)$, corresponding to $SO(3)$ is the set of skew-symmetric matrices, $\left[ \boldsymbol{\rho} \right]_\times$, obtained from $\boldsymbol{\rho} \in \mathbb{R^3}$:

$$
\begin{align}
\text{Vector space: } &\mathfrak{so}(3) = \left\{ \boldsymbol{P} = \left[ \boldsymbol{\rho} \right]_{\times} \in \mathbb{R}^{3 \times 3} \ | \ \boldsymbol{\rho} \in \mathbb{R}^3 \right\} \\
\text{Field: } &\mathbb{R} \\
\text{Lie bracket: } &\left[ \boldsymbol{P}_1, \boldsymbol{P}_2  \right] = \boldsymbol{P}_1 \boldsymbol{P}_2 - \boldsymbol{P}_2 \boldsymbol{P}_1.
\end{align}
$$

## Exponential and Logarithm Map

We can relate elements of $SO(3)$ to elements of $\mathfrak{so}(3)$ through the exponential map. Given $\boldsymbol{\rho} = \theta \hat{\mathbf{e}}$, where $\theta = |\boldsymbol{\rho}|$ is the angle of rotation and $\hat{\mathbf{e}} = \boldsymbol{\rho} / \theta$ is the unit-length axis of rotation:

$$
\begin{align}
\mathbf{R} = e^{\left[\boldsymbol{\rho} \right]_\times} &= e^{ \left[ \theta \hat{\mathbf{e}} \right]_\times} = \sum^{\infty}_{k = 0} \frac{1}{k!} \left(\theta \left[\hat{\mathbf{e}} \right]_\times \right)^k \\
&= \mathbf{I} + \theta \left[ \hat{\mathbf{e}} \right]_\times + \frac{\theta^2}{2} \left[ \hat{\mathbf{e}} \right]^2_\times + 
\frac{\theta^3}{3!} \left[ \hat{\mathbf{e}} \right]^2_\times + \ldots \\
&= \mathbf{I} + \left( \theta - \frac{\theta^3}{3!} + \ldots \right) \left[ \hat{\mathbf{e}} \right]_\times + \left( \frac{\theta^2}{2} - \frac{\theta^4}{4!} + \ldots \right) \left[ \hat{\mathbf{e}} \right]^2_\times \\
&= \mathbf{I} + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times + \left(1 - \cos \theta \right) \left[ \hat{\mathbf{e}} \right]^2_\times \\
&= \cos \theta \mathbf{I} + \left(1 - \cos \theta \right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times,
\end{align}
$$

which is the **Rodrigues' formula** derived previously. The exponential map yields a rotation by $\theta$ radians around the axis given by $\boldsymbol{\rho}$. 

The exponential map can be inverted to give the logarithm mapping, going from $SO(3)$ to $\mathfrak{so}(3)$:

$$
\begin{align}
\theta &= \arccos \left( \frac{\text{tr}(\mathbf{R}) - 1}{2} \right) \\
\ln (\mathbf{R}) &= \frac{\theta}{2 \sin \theta} \left( \mathbf{R} - \mathbf{R}^T \right).
\end{align}
$$

The vector $\boldsymbol{\rho}$ is then taken from the off-diagonal elements of $\ln (\mathbf{R})$.

Exponential mapping is a surjective map and not injective. This means that for each element in $SO(3)$, we can find a $\mathfrak{so}(3)$ element corresponding to it; however, there may be multiple $\mathfrak{so}(3)$ elements corresponding to the same $SO(3)$ element.
