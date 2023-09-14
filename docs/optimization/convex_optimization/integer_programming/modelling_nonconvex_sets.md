## Discrete Variables

A discrete variable has a domain of the form:

$$
x \in \left\{a_1, a_2, \ldots, a_K \right\}.
$$

If $a_1, a_2, \ldots, a_K$ are contiguous integers, we can model as:

$$
a_1 \leq x \leq a_K, \ x \in \mathbb{Z}.
$$

Otherwise:

$$
x = \sum^K_{k = 1} a_k y_k, \ \sum^K_{k = 1} y_k = 1, \ y_k \in \left\{ 0, 1\right\}, \ \forall k = 1, \ldots, K.
$$

## Semicontinuous Variables

A Semicontinuous variable has a domain of the form:

$$
x \in \left[ \ell_1, u_1 \right] \cup \left[ \ell_2, u_2 \right] \cup \ldots \cup \left[ \ell_K, u_K \right],
$$

where $\ell_1 \leq u_1 \leq \ell_2 \leq u_2 \leq \ldots \leq \ell_k \leq u_K$. One modelling approach for this system is:

$$
\begin{align}
&x = \sum^K_{k = 1} z_k, \ \ell_k y_k \leq z_k \leq u_k y_k \ \forall k = 1, \ldots, K \\
&\sum^K_{k = 1} y_k = 1, \ y_k \in \left\{ 0, 1\right\}, \forall k = 1, \ldots, K.
\end{align}
$$

## Union of Polytopes

Suppose we require that $\mathbf{x}$ satisfies **one** of the following $K$ systems of inequalities: $\mathbf{A}_k \mathbf{x} \leq \mathbf{b}_k$ for $k = 1, \ldots, K$. Suppose that each system defines a polytope, i.e., a bounded polyhedron. The system can be formulated as:

$$
\mathbf{A}_k \mathbf{u}^k \leq \mathbf{b}_k y_k, \ \mathbf{x} = \sum^K_{k = 1} \mathbf{u}^k, \ \sum^K_{k = 1} y_k = 1, \ y_k \in \left\{ 0, 1 \right\}, \forall k = 1, \ldots, K.
$$

## Examples

### Example 1

Consider the union of the following two sets:

$$
\begin{align}
\left(
\begin{array}{c}
x_1 + x_2 \leq 2 \\
-x_1 \leq 0, \ -x_2 \leq 0
\end{array}
\right) \cup
\left(
\begin{array}{c}
-x_1 \leq -1, \ x_1 \leq 3 \\ 
-x_2 \leq 0, x_2 \leq 2
\end{array}
\right).
\end{align}
$$


This set is illustrated in Figure 1.

<figure markdown>
  ![Example 1](/assets/images/optimization/light/nonconvex_sets_example_1.png#only-light){ width="300" }
  ![Example 1](/assets/images/optimization/dark/nonconvex_sets_example_1.png#only-dark){ width="300" }
  <figcaption>Figure 1 Example 1</figcaption>
</figure>

The problem is in 2D and we have two possibe sets. The first set describes the polytope on the left and the second set describes the polytope on the right. Define:

$$
\begin{align}
&x_1 = u^1_1 + u^2_1 \\ 
&x_2 = u^1_2 + u^2_2,
\end{align}
$$

where $u^j$ indicates whether $x$ is in the $j$'th set. The constraints in the first set can be written as:

$$
\begin{align}
&u^1_1 + u^1_2 \leq 2 y_1, \ -u^1_1 \leq 0, \ -u^1_2 \leq 0. \\
\end{align}
$$

Similarly, the constraints in the second set can be written as:

$$
\begin{align}
-u^2_1 \leq -1 y_2, \ -u^2_1 \leq 3y_2, \ -u^2_2 \leq 0, \ u^2_2 \leq 2y_2, \\
\end{align}
$$

with: 

$$
y_1 + y_2 = 1,  \ y_1, y_2 \in \left\{ 0, 1\right\}.
$$

### Bounds

Note that:

1. We've been making use of the bounds on the variables to develop these formulations.
2. In general, it is not possible to develop correct mixed integer linear formulations without bounds on variables.
3. If there are no bounds, we will impose large artificial numbers (big-M) as variable bounds.

### Example 2

Consider a nonconvex set:

$$
X = \left\{ \mathbf{x} \in \mathbb{R}^n \ : \ ||\mathbf{x}||_0 \leq k \right\},
$$

where $k$ is an integer between $0$ and $n$. Here, $||\mathbf{x}||_0$ is the number of nonzero components of $\mathbf{x}$. This set is not bounded. We will impose bounds, $-M \leq x_j \leq M$ for all $j = 1, \ldots, n$ where $M$ is an arbitrary large number. Then, a mixed integer linear formulation is:

$$
-M y_j \leq x_j \leq M y_j, \ \sum^n_{j = 1} y_j \leq k, \ y_j \in \left\{ 0, 1\right\}, \ \forall j = 1, \ldots, n.
$$
