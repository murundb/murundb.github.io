# Lie Group and Lie Algebra

## Groups

A group is a set that has only one "well-defined" operation. Formally, a group is a set of elements together with an operation that combines any two of its elements to form a third element also in the set, while satisfying four conditions called the **group axioms**, namely closure, associativity, identity, and invertibility.

Let $A$ be a set and $\cdot$ be the set operation. Then $G = (A, \cdot)$, is a group if it satisfies the following conditions:

1. **Closure:** $\forall a_1, a_2 \in A, a_1 \cdot a_2 \in A$.
2. **Associativity:** $\forall a_1, a_2, a_3 \in A, a_1 \cdot (a_2 \cdot a_3) = (a_1 \cdot a_2) \cdot a_3 = a_1 \cdot a_2 \cdot a_3$.
3. **Identity:** $\exists a_0 \in A, \ \text{s.t.} \ \forall a \in A, a_0 \cdot a = a \cdot a_0 = a$.
4. **Invertibility:** $\forall a \in A, \exists a^{-1} \in A, \ \text{s.t.} \ a \cdot a^{-1} = a_0$. 

An example group is $G = (\mathbb{Z}, +)$.

## Lie Groups

The set of rotations is not a vector space in the sense of linear algebra. However, rotations do form another mathematical object called a **non-commutative group**, which possess only some of the vector space properties.

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

The vector space of a Lie algebra is the **tangent space** of the associated Lie group at the identity element of the group, and it completely captures the local structure of the group

An example is cross product defined on the 3D vector in $\mathbb{R}^3$ is a lie bracket.
