## Line and Line Segments

Let $\mathbf{x}_1 \neq \mathbf{x}_2$ be two points in $\mathbb{R}^n$. Points of the form:

$$
\mathbf{y} = \theta \mathbf{x}_1 + (1 - \theta)\mathbf{x}_2,
$$

where $\theta \in \mathbb{R}$, form the line passing through 
points $\mathbf{x}_1$ and $\mathbf{x}_2$. If 
$\theta = 0$, it corresponds to $\mathbf{y} = \mathbf{x}_2$, and 
if $\theta = 1$, it corresponds to $\mathbf{y} = \mathbf{x}_1$. If 
$0 < \theta < 1$, then it corresponds to the line segment between $\mathbf{x}_1$ and 
$\mathbf{x}_2$.

## Affine Sets
A set $C \subseteq \mathbb{R}^n$ is **affine** if the 
line through any two distinct points in $C$ lies in $C$, i.e., 
if for any $\mathbf{x}_1, \mathbf{x}_2 \in C$ and $\theta \in \mathbb{R}$,
we have $\theta \mathbf{x}_1 + (1 - \theta) \mathbf{x}_2 \in C$. 
In other words, $C$ contains the linear combination of any two points in 
$C$, provided the coefficients in the linear combination sum to one. In general,
a point of the form $\theta_1 \mathbf{x}_1 + \ldots + \theta_k \mathbf{x}_k$, 
where $\theta_1 + \ldots + \theta_k = 1$ is an affine combination of points
$\mathbf{x}_1, \ldots, \mathbf{x}_k$.

## Convex Sets

A set $C \in \mathbb{R}^n$ is **convex** if the line segment between any two points in
$C$ lies in $C$, i.e., if $\forall \mathbf{x}_1, \mathbf{x}_2 \in C$ and 
$\theta \in \left[0, 1 \right]$, we have:

$$
\theta \mathbf{x}_1 + (1 - \theta) \mathbf{x}_2 \in C.
$$

Informally, this means that a 
line segment connecting two points in the set lies entirely in the set. Another interepretation is that a set is convex if every point in the set can be seen by every other point, along an unobstructed straigth path between them, where unobstructed means lying in the set. 

Every affine
set is convex, since it contains the entire line between any two distinct points in it, and 
therefore also the line segment between the points.

## Convex Combination

A point of the form $\theta_1 \mathbf{x}_1 + \ldots + \theta_k \mathbf{x}_k$ where $\theta_1 + \ldots + \theta_k = 1$ and $\theta_i \geq 0, i = 1, \ldots, k$ is called 
a **convex combination** of the points $\mathbf{x}_1, \ldots, \mathbf{x}_k$. As with affine sets, it can be shown that a set is convex if and only if it contains every convex
combination of its points. A convex combination of points can be thought of as a mixture or weighted average of the points, with $\theta_i$ the fraction of $\mathbf{x}_i$ in the mixture.

## Convex Hull

The convex hull of a set $C$ is the set of all convex combinations of points in $C$:

$$
\text{conv}\left\{C\right\} = \left\{ \theta_1 \mathbf{x}_1 + \ldots + \theta_k \mathbf{x}_k \ | \ \mathbf{x}_i \in C, \theta_i \geq 0, i = 1, \ldots, k, \theta_1 + \ldots + \theta_k = 1 \right\}.
$$

## Establishing Convexity and Operations Preserving Convexity

A practical methods for establishing convexity of a set $C$ is as follows:

1. Apply the definition:

    $$
    \mathbf{x}_1, \mathbf{x}_2 \in C, \ 0 \leq \theta \leq 1 \ \Rightarrow \ \theta \mathbf{x}_1 + (1 - \theta) \mathbf{x}_2 \in C.
    $$

2. Show that $C$ is obtained from simple convex sets (hyperplanes, halfspaces, norm balls etc.) by operations that preserve convexity:

    1. Intersection: If $X_1, \ldots, X_m$ are convex sets, then $\cap^m_{i = 1} X_i$ is a convex set.
    2. Affine functions: If $f: \mathbb{R}^n \rightarrow \mathbb{R}^m$ is affine (i.e., if it is a sum of a linear functions and a constant, $f(\mathbf{x}) = \mathbf{A}\mathbf{x} + \mathbf{b}$ where $\mathbf{A} \in \mathbb{R}^{m \times n}$ and $\mathbf{b} \in \mathbb{R}^m$) and if $S \subseteq \mathbb{R}^n$ is convex, then the image of $S$ under $f$:
        
        $$
        f(S) = \left\{ f(\mathbf{x}) \ | \ \mathbf{x} \in S \right\},
        $$

        is convex. Similarly, the inverse image is also convex. Examples include scaling, translation, and sum. Sum of two sets $X, Y \subseteq \mathbb{R}^n$ is defined as $X + Y = \left\{ \mathbf{x} + \mathbf{y} : \mathbf{x} \in X, \mathbf{y} \in Y \right\}$. Given two sets $X \subseteq \mathbb{R}^{n_1}$ and $Y \subseteq \mathbb{R}^{n_2}$, their (Cartesian) product $X \times Y$ is a set in $\mathbb{R}^{n_1 + n_2}$ and is defined as:
        
        $$
        X \times Y = \left\{ [\mathbf{x}^T, \mathbf{y}^T]^T : \mathbf{x} \in X, \mathbf{y} \in Y \right\}.
        $$

    3. Perspective function: $P: \mathbb{R}^{n + 1} \rightarrow \mathbb{R}^n$:
        
        $$
        P(\mathbf{x}, t) = \mathbf{x} / t, \quad \mathbf{x} \in \mathbb{R}^n, \ t \in \mathbb{R}_{++}.
        $$

    4. Linear-fractional functions: $f: \mathbb{R}^n \rightarrow \mathbb{R}^m$:
        
        $$
        f(\mathbf{x}) = \frac{\mathbf{A}\mathbf{x} + \mathbf{b}}{\mathbf{c}^T \mathbf{x} + d}, \quad \textbf{dom}f = \left\{ \mathbf{x} \ | \ \mathbf{c}^T \mathbf{x} + d > 0 \right\}
        $$

    5. Union of two convex sets is not convex in general.

## Convex Set and Convex Functions Relationship`

### Epigraph

The epigraph of a function $f: \mathbb{R}^n \rightarrow \mathbb{R}$ is a set defined as:

$$
\text{epi} f = \left\{ (y, \mathbf{x}) \in \mathbb{R}^{n + 1} : y \geq f(\mathbf{x}) \right\}.
$$

"Epi" means "above", so epigraph means "above the graph". 

The link between convex sets and convex functions is via the epigraph: A
function is convex if and only if its epigraph is convex set.

### Sublevel Sets 

Given scalar $\alpha$, the $\alpha$-level set of a function $f: \mathbb{R}^n \rightarrow \mathbb{R}$ is a set defined as:

$$
X_\alpha = \left\{ \mathbf{x} \in \mathbb{R}^n : f(\mathbf{x}) \leq \alpha \right\}.
$$

The epigraph and the $\alpha$-level set ($\forall \alpha \in R$) of a convex function are convex sets.