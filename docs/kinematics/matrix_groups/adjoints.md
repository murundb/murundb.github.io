# Adjoints

## Definition

The **adjoint** of a Lie group is a way of describing the elements of that group as linear transformations of its Lie algebra, which is a vector space. In other words, the adjoint is the mapping of a vector from one tangent space around one element to tangent space of another element.

## SO(3)

For $SO(3)$, the adjoint representation is the same as the group itself:

$$
\text{Adj}_{\mathbf{R}} = \mathbf{R}.
$$

Then we have:

$$
\begin{align}
&\mathbf{R} \ \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right) = \exp \left( \text{Adj}_{\mathbf{R}} \cdot \left[ \boldsymbol{\rho} \right]_\times \right) \mathbf{R} \ \Rightarrow \\
&\exp \left( \text{Adj}_{\mathbf{R}} \cdot \left[ \boldsymbol{\rho} \right]_\times \right) = \mathbf{R} \ \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right) \mathbf{R}^{-1}.
\end{align}
$$

In order words, rotating a tangent vector by an element "moves" it from the tangent space on the right side of the element to the tangent space on the left.

**Proof**. Using cross product identities:

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

## SE(3)

The adjoint map of $SE(3)$ transforms an element $\left [ \mathbf{x} \right]_\times \in \mathfrak{se}(3)$ to another element of $\mathfrak{se}(3)$ according to a map known as the inner automorphism or conjugation:

$$
\text{Adj}_{\mathbf{T}} (\left [ \mathbf{x} \right]_\times) = \mathbf{T} \left [ \mathbf{x} \right]_\times \mathbf{T}^{-1}.
$$

The output of this map can be expressed equivalently as:

$$
\text{Adj}_{\mathbf{T}} (\left [ \mathbf{x} \right]_\times) = \left[ \boldsymbol{\mathcal{T}} \mathbf{x} \right]_\times,
$$

where $\boldsymbol{\mathcal{T}}$ linearly transforms $\mathbf{x} \in \mathbb{R}^6$ to $\mathbb{R}^6$ and is referred as the adjoint representation of $SE(3)$.
