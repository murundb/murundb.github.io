## Rays

A ray consists of a starting point $\mathbf{a}$ and all the points in a direction $\mathbf{d}$. Rays can be described via an algebraic form:

$$
\left\{ \mathbf{x} \in \mathbb{R}^n \ | \ \mathbf{x} = \mathbf{a} + \theta \mathbf{d}, \quad \forall \theta \geq 0 \right\}.
$$

## Lines

A line consists of two rays starting at a point pointing two opposite directions:

$$
\left\{ \mathbf{x} \in \mathbb{R}^n \ | \ \mathbf{x} = \mathbf{a} + \theta \mathbf{d}, \quad \forall \theta \in \mathbb{R} \right\}.
$$

## Hyperplanes and Halfspaces

A **hyperplane** is a set of the form:

$$
\left\{ \mathbf{x} \ | \ \mathbf{a}^T \mathbf{x} = b \right\},
$$

where $\mathbf{a} \in \mathbb{R}^n$, $\mathbf{a} \neq \mathbf{0}$, and $b \in \mathbb{R}$. Analytically, it is the solution set of a nontrivial linear equation among the components of 
$\mathbf{x}$. Geometrically, it can be interpreted as the set of points with a constant inner product to a given vector $\mathbf{a}$, or as a hyperplane with **normal** vector 
$\mathbf{a}$; the constant $b$ determines the offset of the hyperplane from the origin.

A hyperplane divides $\mathbb{R}^n$ into two **halfspaces**. A (closed) halfspace is a set of the form:

$$
\left\{ \mathbf{x} \ | \ \mathbf{a}^T \mathbf{x} \leq b \right\},
$$

where $\mathbf{a} \neq 0$, i.e., the solution set of one (nontrivial) linear inequality. Halfspaces are convex, but not affine.

## Cones

A set $C$ is called a cone, or nonnegative homogeneous, if for every $\mathbf{x} \in C$ and $\theta \geq 0$, we have $\theta \mathbf{x} \in C$. A set $C$ is called **convex cone**
if it is convex and a cone, i.e., for any $\mathbf{x}_1, \mathbf{x}_2 \in C$ and $\theta_1, \theta_2 \geq$, we have:

$$
\theta_1 \mathbf{x}_1 + \theta_2 \mathbf{x}_2 \in C.
$$

A ray $\mathbf{d}$ is a **conic combination** of two rays $\mathbf{e}_1, \mathbf{e}_2$ if $\mathbf{d}$ is a nonnegative weighted sum of $\mathbf{e}_1, \mathbf{e}_2$:

$$
\mathbf{d} = c_1 \mathbf{e}_1 + c_2 \mathbf{e}_2, \quad \forall c_1, c_2 \geq 0.
$$

The set of all conic combinations of rays $\mathbf{r}_1, \ldots, \mathbf{r}_m$ is called the **conic hull** of $\mathbf{r}_1, \ldots, \mathbf{r}_m$:

$$
\text{conic} \left\{ \mathbf{r}_1, \ldots \mathbf{r}_m \right\} = \left\{ \mathbf{x} \ | \ \mathbf{x} = \theta_1 \mathbf{r}_1 + \ldots \theta_n \mathbf{r}_n, \ \theta_i \geq 0, \ \forall i = 1, \ldots, n \right\}.
$$

Such set is called a **cone**.

## Polyhedron

### Polyhedron via Halfspaces

A polyhedra is the intersection of a finite number of halfspaces:

$$
\begin{align}
P &= \left\{ \mathbf{x} \in \mathbb{R}^n \ | \ \mathbf{a}^T_1 \mathbf{x} \leq b_1, \ldots, \mathbf{a}^T_m \mathbf{x} \leq b_m \right\} \\
&= \left\{ \mathbf{x} \in \mathbb{R}^n \ | \ \mathbf{A} \mathbf{x} \leq \mathbf{b} \right\},
\end{align}
$$

where:

$$
\mathbf{A} = 
\left[
\begin{array}{c}
\mathbf{a}^T_1 \\
\vdots \\
\mathbf{a}^T_m
\end{array}
\right] \quad
\mathbf{b} = 
\left[
\begin{array}{c}
b_1 \\
\vdots \\
b_m
\end{array}
\right].
$$

Another way to define **polyhedra** as the solution set of a finite number of linear equalities and inequalities:

$$
P = \left\{ \mathbf{x} \ | \ \mathbf{A} \mathbf{x} \leq b, \ \mathbf{C} \mathbf{x} = d \right\},
$$

where $\mathbf{A} \in \mathbb{R}^{m \times n}$ and $\mathbf{C} \in \mathbb{R}^{p \times n}$.

A polyhedron is thus the intersection of a finite number of halfspaces and hyper-planes. Affine sets (e.g., subspaces, hyperplanes, lines), rays, line segments, and 
halfspaces are all polyhedra.


### Bounded Polyhedron via Corner Points

A point in $\mathbf{x}$ in a polyhedron $P$ is an **extreme point** iff $\mathbf{x}$ is **not a convex combination** of other two different points in $P$, i.e., 
there do not exist $\mathbf{y}, \mathbf{z} \in P$, such that $\mathbf{y} \neq \mathbf{x}, \mathbf{z} \neq \mathbf{x}$ and $\mathbf{x} = \theta \mathbf{y} + (1 - \theta) \mathbf{z}$ for some $\theta \in \left[0, 1 \right]$. 
Extreme points are **corner points**. Figure 1 shows the extreme points and a non-extreme point of a tetrahedron.

<figure markdown>
  ![tetrahedron](/assets/images/optimization/light/tetrahedron.png#only-light){ width="300" }
  ![tetrahedron](/assets/images/optimization/dark/tetrahedron.png#only-dark){ width="300" }
  <figcaption>Figure 1 Tetrahedron</figcaption>
</figure>

A **non-empty** and **bounded** polyhedron is the **convex hull** of its **extreme points**. A bounded polyhedron is a polyhedron that does not extend to infinity in any direction. A bounded polyhedron is also called **polytope**.


A ray $\mathbf{e}$ in a cone $C$ is called an **extreme ray** if $\mathbf{e}$ is not a conic combination of other two different rays in the cone $C$. Note that:

1. If a polyhedron is bounded, there is no extreme ray.
2. If a polyhedron is bounded, there must be an extreme point.
3. If a polyhedron is unbounded and it does not contain a line, it must have an extreme ray.
4. If a polyhedron is unbounded, it may not have an extreme point.


### Weyl-Caratheodery Theorem

Any non-empty polyhedron $P$ with at least one extreme point can be formed by its extreme points $\mathbf{x}^1, \ldots, \mathbf{x}^m$ and its extreme rays $\mathbf{e}^1, \ldots, \mathbf{e}^k$ as follows:

$$
P = \text{conv}\left\{ \mathbf{x}^1, \ldots, \mathbf{x}^m \right\} + \text{conic}\left\{ \mathbf{e}^1, \ldots, \mathbf{e}^k \right\}.
$$

In order words, any point $\mathbf{x}$ in a polyedron $P$ that has at least one extreme point can be written as a sum of two vectors:

$$
\mathbf{x} = \mathbf{x}' + \mathbf{d},
$$

where $\mathbf{x}'$ is in the convex hull of its extreme points and $d$ is in the conic hull of its extreme rays. Note that if $P$ does not have an extreme ray, then $\mathbf{d} = \mathbf{0}$.


### Generic Polyhedron Example

Consider an unbounded polyhedron as shown in Figure 2. The polyhedron set is given as:

$$
P = \left\{ (x_1, x_2): \ x_1 + x_2 \geq 1, \ x_1 - x_2 \leq 2, \ x_1, x_2 \geq 0 \right\}.
$$

The extreme points of the polyhedron are:

$$
\mathbf{x}^1 = 
\left[
\begin{array}{c}
0 \\ 
1
\end{array}
\right],
\mathbf{x}^2 = 
\left[
\begin{array}{c}
1 \\
0
\end{array}
\right],
\mathbf{x}^3 = 
\left[
\begin{array}{c}
2 \\ 
0
\end{array}
\right],
$$

and the convex hull $Q$ is formed by all possible convex combinations of these three extreme points. The extreme rays are:

$$
\mathbf{e}^1 = 
\left[
\begin{array}{c}
0 \\ 
1
\end{array}
\right],
\mathbf{e}^2 = 
\left[
\begin{array}{c}
1 \\ 
1
\end{array}
\right],
$$

and the conic hull $C$ is formed by all possible conic combinations of these two rays.

Then, any point $\mathbf{x} \in P$ can be written as:

$$
\mathbf{x} = \mathbf{x}' + \mathbf{d},
$$

where $\mathbf{x}' \in \text{conv}\left\{ \mathbf{x}^1, \mathbf{x}^2, \mathbf{x}^3 \right\}$ and $\mathbf{d} \in \text{conic} \left\{ \mathbf{e}^1, \mathbf{e}^2 \right\}$.


<figure markdown>
  ![polyhedron](/assets/images/optimization/light/polyhedron.png#only-light){ width="300" }
  ![polyhedron](/assets/images/optimization/dark/polyhedron.png#only-dark){ width="300" }
  <figcaption>Figure 2 Polyhedron example</figcaption>
</figure>


## Positive Semidefinite Cone

Let $\mathbb{S}^n$ be the set of symmetric $n \times n$ matrices:

$$
\mathbb{S}^n = \left\{ X \in \mathbb{R}^{n \times n} \ | \ X = X^T \right\},
$$

which is a vector space with dimension $n(n + 1)/2$. Let $\mathbb{S}^n_+$ be the set of symmetric positive semidefinite matrices:

$$
\mathbb{S}^n_+ = \left\{ X \in \mathbb{S}^n \ | \ X \geq 0 \right\},
$$

and $\mathbb{S}^n_{++}$ be the set of symmetric positive definite matrices:

$$
\mathbb{S}^n_{++} = \left\{ X \in \mathbb{S}^n \ | \ X > 0 \right\}.
$$

The set $\mathbb{S}^n_+$ is a convex cone if $\theta_1, \theta_2 \geq 0$ and $\mathbf{A}, \mathbf{B} \in \mathbb{S}^n_+$, then $\theta_1 \mathbf{A} + \theta_2 \mathbf{B} \in \mathbb{S}^n_+$. This is directly from the definition of positive semidefiniteness. For any $\mathbf{x} \in \mathbb{R}^n$, $\mathbf{A}, \mathbf{B} \geq 0$, and $\theta_1, \theta_2 \geq 0$:

$$
\mathbf{x}^T \left( \theta_1 \mathbf{A} + \theta_2 \mathbf{B} \right) \mathbf{x} = \theta_1 \mathbf{x}^T \mathbf{A} \mathbf{x} + \theta_2 \mathbf{x}^T \mathbf{B} \mathbf{x} \geq 0.
$$

## Euclidean Balls and Ellipsoids

A (Euclidean) ball in $\mathbb{R}^n$ is defined as:

$$
B(\mathbf{x}_c, r) = \left\{ \mathbf{x} \ | \ ||\mathbf{x} - \mathbf{x_c}||_2 \leq r  \right\} = \left\{ \mathbf{x}_c + r \mathbf{u} \ | \ ||\mathbf{u}||_2 \leq 1 \right\},
$$

where $r > 0$ is the scalar radius and $\mathbf{x}_c$ is the center of the ball. Euclidean ball is a convex set: if $||\mathbf{x}_1 - \mathbf{x}_c||_2 \leq r$, $||\mathbf{x}_2 - \mathbf{x}_c||_2 \leq r$, and $0 \leq \theta \leq 0$, then:

$$
\begin{align}
||\theta \mathbf{x_1} + (1 - \theta) \mathbf{x_2} - \mathbf{x_c}||_2 
&= ||\theta(\mathbf{x}_1 - \mathbf{x}_c) + (1 - \theta)(\mathbf{x}_2 -
\mathbf{x}_c)||_2 \\
&\leq \theta || \mathbf{x}_1 - \mathbf{x}_c ||_2 + (1 - \theta)
|| \mathbf{x}_2 - \mathbf{x}_c ||_2 \\
&\leq r.
\end{align}
$$

An ellipsoid is defined as:

$$
E = \left\{ \mathbf{x} \ | \ (\mathbf{x} - \mathbf{x}_c)^T \mathbf{P}^{-1} (\mathbf{x} - \mathbf{x}_c) \leq 1 \right\},
$$

where $\mathbf{P} = \mathbf{P}^T > 0$, i.e., $\mathbf{P}$ is a symmetric and positive definite. Ellipsoids are convex sets.