# Lie Group and Lie Algebra

## Lie Groups

Lie groups refer to a group with smooth manifold properties. Smoothness implies that we can use differential calculus on the manifold; or roughly, if we change the input to any group operation by a little bit, the output will only change by a little bit. The special orthogonal group, $SO(3)$, represents rotations, and the special Euclidean group, $SE(3)$, represents poses.

## Lie Algebra

With every matrix Lie group is associated a Lie algebra, which consists of a vector space $\mathbb{V}$ over some field $\mathbb{F}$, and a binary operation $\left[, \right]$, called the Lie bracket. The following properties are satisfied for Lie Algebra $(\mathbb{V}, \mathbb{F}, \left[, \right])$:

1. **Closure:** $\forall \mathbf{X}, \mathbf{Y} \in \mathbb{V}; \ \left[ \mathbf{X}, \mathbf{Y} \right] \in \mathbb{V}$.
2. **Bilinearity:** $\forall \mathbf{X}, \mathbf{Y}, \mathbf{Z} \in \mathbb{V}; \ a,b \in \mathbb{F}$, we have:

    $$
    \begin{align}
    &\left[a \mathbf{X} + b \mathbf{Y}, \mathbf{Z} \right] = a \left[\mathbf{X}, \mathbf{Z} \right] + b \left[ \mathbf{Y}, \mathbf{Z} \right] \\
    &\left[\mathbf{Z}, a \mathbf{X} + b \mathbf{Y} \right] = a \left[ \mathbf{Z}, \mathbf{X} \right] + b \left[ \mathbf{Z}, \mathbf{Y} \right].
    \end{align}
    $$

3. **Alternating:** $\forall \mathbf{X} \in \mathbb{V}; \ \left[ \mathbf{X}, \mathbf{X} \right] = 0$.
4. **Jacobi identity:** $\forall \mathbf{X}, \mathbf{Y}, \mathbf{Z} \in \mathbb{V}; \ \left[ \mathbf{X}, \left[ \mathbf{Y}, \mathbf{Z} \right] \right] + \left[ \mathbf{Z}, \left[ \mathbf{X}, \mathbf{Y} \right] \right] + \left[ \mathbf{Y}, \left[ \mathbf{Z}, \mathbf{X} \right] \right] = 0$.

The vector space of a Lie algebra is the **tangent space** of the associated Lie group at the identity element of the group, and it completely captures the local structure of the group.
