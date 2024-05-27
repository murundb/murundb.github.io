# Matrix Groups

!!! cnote "Group Relationships"

    $$
    SO(n) \subset O(n) \subset GL(n), \quad SE(n) \subset E(n) \subset A(n) \subset GL(n + 1).
    $$

## Group Definition

A group is a set $G$ with an operation $\circ$ that maps $G \times G \rightarrow G$ such that it satisfies the group axioms:

1. **Closure:** $\forall g_1, g_2 \in G, g_1 \circ g_2 \in G$.
2. **Associativity:** $\forall g_1, g_2, g_3 \in G, g_1 \circ (g_2 \circ g_3) = (g_1 \circ g_2) \circ g_3 = g_1 \circ g_2 \circ g_3$.
3. **Identity:** $\exists g_0 \in G, \ \text{s.t.} \ \forall g \in G, g_0 \circ g = g \cdot g_0 = g$.
4. **Invertibility:** $\forall g \in G, \exists g^{-1} \in G, \ \text{s.t.} \ g \circ g^{-1} = g_0$.

An example group is $G = (\mathbb{Z}, +)$.

## General Linear Group

The set of all $n \times n$ non-singular (real) matrices with matrix multiplication forms a group called the **general linear group** and denoted by $GL(n)$. Let $\mathcal{M}(n)$ be a set of all real $n \times n$ matrices. The general linear group $GL(n)$ consists of all $\mathbf{A} \in \mathcal{M}(n)$ for which:

$$
\text{det}(\mathbf{A}) \neq 0.
$$

## Special Linear Group

All matrices $\mathbf{A} \in GL(n)$ for which $\text{det}(\mathbf{A}) = 1$ form a group called the **special linear group** $SL(n)$. Note that the inverse of $\mathbf{A}$ is also in this group since $\text{det}(\mathbf{A}^{-1}) = \text{det}(\mathbf{A})^{-1}$.

## Matrix Representation of Groups

A group $G$ has a **matrix representation** or can be realized as a matrix group if there exists an injective transformation:

$$
R \ : \ G \rightarrow GL(n),
$$

which **preservers the group structure** of $G$, that is inverse and composition are preserved by the map:

$$
R(g_0) = \mathbf{I}_{n \times n}, \quad R(g_1 \circ g_2) = R(g_1) R(g_2), \ \forall g_1, g_1 \in G.
$$

Such a map $R$ is called a **group homomorphism**.

## Affine Group

An affine transformation $L \ : \ \mathbb{R}^n \rightarrow \mathbb{R}^n$ is defined jointly by a matrix $\mathbf{A} \in GL(n)$ and a vector $\mathbf{b} \in \mathbb{R}^n$ such that:

$$
L(\mathbf{x}) = \mathbf{A} \mathbf{x} + \mathbf{b}.
$$

The set of all such affine transformations is called the affine group of dimension $n$ and is denoted by $A(n)$. Note that $L$ defined above is **not a linear map** unless $\mathbf{b} = \mathbf{0}$.

## Orthogonal Group

A matrix $\mathbf{A} \in \mathcal{M}(n)$ is called **orthogonal** if it preserves the inner product, i.e.:

$$
\langle \mathbf{A} \mathbf{x}, \mathbf{A} \mathbf{y} \rangle = \langle \mathbf{x}, \mathbf{y} \rangle, \quad \forall \mathbf{x}, \mathbf{y} \in \mathbb{R}^n.
$$

The set of all orthogonal matrices forms the **orthogonal group** $O(n)$, which is a subgroup of $GL(n)$. For an orthogonal matrix $\mathbf{R}$, we have:

$$
\langle \mathbf{R} \mathbf{x}, \mathbf{R} \mathbf{y} \rangle = \mathbf{x}^T \mathbf{R}^T \mathbf{R} \mathbf{y} = \mathbf{x}^T \mathbf{y}, \quad \forall \mathbf{x}, \mathbf{y} \in \mathbb{R}^n,
$$

which suggests that $\mathbf{R}^T \mathbf{R} = \mathbf{R} \mathbf{R}^T = \mathbf{I}$, or equivalently:

$$
O(n) = \left\{ \mathbf{R} \in GL(n) \ | \ \mathbf{R}^T \mathbf{R} = \mathbf{I} \right\}.
$$

The above shows that for any orthogonal matrix $\mathbf{R}$, we have $\text{det}(\mathbf{R}^T \mathbf{R}) = \left(\text{det}(\mathbf{R}) \right)^2 = \text{det}(\mathbf{I}) = 1$, such that $\text{det}(\mathbf{R}) \in \left\{ \pm 1 \right\}$.

## Special Orthogonal Group

The subgroup of $O(n)$ with $\text{det}(\mathbf{R}) = +1$ is called the **special orthogonal group** $SO(n)$. Note that $SO(n) = O(n) \cap SL(n)$.

## Euclidean Group

A Euclidean transformation $L$ from $\mathbb{R}^n \rightarrow \mathbb{R}^n$ is defined by an orthogonal matrix $\mathbf{R} \in O(n)$ and a vector $\mathbf{t} \in \mathbf{R}^n$ such that:

$$
L \ : \ \mathbb{R}^n \rightarrow \mathbb{R}^n; \quad \mathbf{x} \rightarrow \mathbf{R} \mathbf{x} + \mathbf{t}.
$$

The set of all such transformations is called the **Euclidean group** $E(n)$. It is a subgroup of the affine group $A(n)$. Embedded by homogeneous coordinates, we have:

$$
E(n) = \left\{
\left(
\begin{array}{cc}
\mathbf{R} & \mathbf{t} \\
\mathbf{0} & 1
\end{array}
\right) \ |
\ \mathbf{R} \in O(n), \mathbf{t} \in \mathbb{R}^n
\right\}.
$$

## Special Euclidean Group

For $E(n)$, if $\mathbf{R} \in SO(n)$, we have the **special Euclidean group** $SE(n)$.
