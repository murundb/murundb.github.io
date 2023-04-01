## Dantzig-Wolfe Decomposition

### Problem Formulation

The Dantzig-Wolfe decomposition is designed to deal with large scale LPs with special structures. Consider the following LP:

$$
\begin{align}
(LP) \quad \min \quad& \mathbf{c}^T \mathbf{x} \\
\text{s.t.} \quad& \mathbf{D} \mathbf{x} = \mathbf{b}_0 \\
\quad& \mathbf{F} \mathbf{x} = \mathbf{b} \\
\quad& \mathbf{x} \geq 0,
\end{align}
$$

where $\mathbf{D} \in \mathbb{R}^{m_1 \times n}$ and $\mathbf{F} \in \mathbb{R}^{m_2 \times n}$.  In general, the first set of equality constraints are called the **coupling constraints**. The second set of equality constraints are independent. 

### Constraint Separation

Suppose that the first set $\mathbf{D} \mathbf{x} = \mathbf{b}_0$ is harder to deal with. Define a polyhedron $P$:

$$
P = \left\{ \mathbf{x} \ | \ \mathbf{F} \mathbf{x} = \mathbf{b}, \ \mathbf{x} \geq 0 \right\}.
$$

Then the original LP can be written as:

$$
\begin{align}
(LP_2) \quad \min \quad& \mathbf{c}^T \mathbf{x} \\
\text{s.t.} \quad& \mathbf{D} \mathbf{x} = \mathbf{b}_0 \\
\quad& \mathbf{x} \in P,
\end{align}
$$

where we have singled out the hard constraint $\mathbf{D} \mathbf{x} = \mathbf{b}_0$. $P$ is assumed to be a bounded polyhedron, i.e., polytope, and therefore must have a finite number of extreme points.

### Extreme Points Representation

Let $\mathbf{x}^1, \mathbf{x}^2, \ldots, \mathbf{x}^N$ denote all the extreme points of $P$, where $\mathbf{x}^i \in \mathbb{R}^n$ and $N$ is arbitrarily large. Any point in a polytope (i.e., bounded polyhedron) can be represented as a convex combination of its extreme points:

$$
\begin{align}
&\mathbf{x} = \sum^N_{i = 1} \lambda_i \mathbf{x}^i \\
&\sum^N_{i = 1} \lambda_i = 1 \\
&\lambda_i \geq 0, \ \forall i = 1, \ldots, N,
\end{align}
$$

where the extreme points $\mathbf{x}^i$'s are fixed for the polyhedron $P$. Then, we can write $(LP_2)$ as:

$$
\begin{align}
(MP) \quad \min_{\lambda_1, \ldots, \lambda_N} \quad&   \sum^N_{i = 1} \lambda_i \left( \mathbf{c}^T \mathbf{x}^i \right) \\
\text{s.t.} \quad& \sum^{N}_{i = 1} \lambda_i \left( \mathbf{D} \mathbf{x}^i \right) = \mathbf{b}_0 \\
&\sum^N_{i = 1} \lambda_i = 1 \\
&\lambda_i \geq 0, \ \forall i = 1, \ldots, N.
\end{align}
$$

The master problem, $(MP)$, is equivalent to the original problem $(LP)$, namely, if $\lambda_1, \ldots, \lambda_N$ is optimal for $(MP)$.

### Column Generation

$(MP)$ has an arbitrarily large $N$ extreme points, corresponding variables $\lambda_1, \lambda_2, \ldots, \lambda_N$ with $(m_1 + 1)$ equality constraints. However, $(MP)$ doesn not have many constraints but have many variables, i.e., columns. We can rewrite $(MP)$ as:

$$
\begin{align}
(MP) \quad \min_{\lambda_1, \ldots, \lambda_N} \quad&
\left[
\begin{array}{cccc}
\mathbf{c}^T \mathbf{x}^1 & \mathbf{c}^T \mathbf{x}^2 & \ldots & \mathbf{c}^T \mathbf{x}^N
\end{array}
\right]
\left[
\begin{array}{c}
\lambda_1 \\
\lambda_2 \\
\vdots \\
\lambda_N
\end{array}
\right] \\
\text{s.t.} \quad& 
\left[
\begin{array}{cccc}
\mathbf{D} \mathbf{x}^1 & \mathbf{D} \mathbf{x}^2 & \ldots & \mathbf{D} \mathbf{x}^N \\
1 & 1 & \ldots & 1
\end{array}
\right]
\left[
\begin{array}{c}
\lambda_1 \\
\lambda_2 \\
\vdots \\
\lambda_N
\end{array}
\right] = 
\left[
\begin{array}{c}
\mathbf{b}_0 \\
1
\end{array}
\right] \\
& \lambda_i \geq 0, \ \forall i = 1, \ldots, N.
\end{align}
$$

We apply Column Generation algorithm to solve $(MP)$:

1. Choose a subset of $I$ of columns and variables. The restricted master problem will be:

    $$
    \begin{align}
    (RMP) \quad \min_{\lambda_i, \ \forall i \in I} \quad& \sum_{i \in I} \lambda_i \left( \mathbf{c}^T \mathbf{x}^i \right) \\
    \text{s.t.} \quad& \sum_{i \in I} \lambda_i \left( \mathbf{D} \mathbf{x}^i \right) = \mathbf{b}_0 \quad \leftarrow \hat{\mathbf{y}} \\
    & \sum_{i \in I} \lambda_i = 1 \quad \leftarrow \hat{r} \\
    &\lambda_i \geq 0, \ \forall i \in I.
    \end{align}
    $$

    Obtain an optimal solution $\hat{\boldsymbol{\lambda}}$ of $(RMP)$, and an optimal dual solution $\hat{\mathbf{y}}$ and $\hat{r}$.

2. Check the optimality of $\hat{\boldsymbol{\lambda}}$ using the dual information. Find the minimum reduced cost:

    $$
    Z = \min_{i = 1, \ldots, N} \left\{ \left( \mathbf{c}^T \mathbf{x}^i \right) - \hat{\mathbf{y}}^T \left( \mathbf{D} \mathbf{x}^i \right) - \hat{r} \right\}.
    $$

    If $Z \geq 0$, then $\hat{\boldsymbol{\lambda}}$ is optimal for $(MP)$ and terminate. Otherwise, add the column with the minimum reduced cost to $(RMP)$, and continue.

Enumerating all the extreme points in (2) is computationally expensive. Moreover, we do not know all the extreme points. We need to be able to **generate** them on the fly. The key idea of Dantzig-Wolfe is that **enumerating through all the extreme points of $P$ is equivalent to minimizing the reduced cost over the polytope $P$ directly.**

$$
\begin{align}
Z &= \min_{i = 1, \ldots, N} \left\{ \left( \mathbf{c}^T \mathbf{x}^i \right) - \hat{\mathbf{y}}^T 
\left( \mathbf{D} \mathbf{x}^i \right) - \hat{r} \right\} \\ 
&= \min_{\mathbf{x}} \left\{ \left( \mathbf{c}^T \mathbf{x} \right) - \hat{\mathbf{y}}^T \left( \mathbf{D} \mathbf{x} \right) - \hat{r} \right\} \\ 
& \quad\quad \text{s.t.} \quad \mathbf{x} \in P \\
&= \min_{\mathbf{x}} \left\{ \left( \mathbf{c}^T - \hat{\mathbf{y}}^T \mathbf{D} \right) \mathbf{x} \right\} - \hat{r} \\
& \quad\quad \text{s.t.} \quad \mathbf{F} \mathbf{x} = \mathbf{b}, \ \mathbf{x} \geq 0.
\end{align}
$$

Note that the dual variable $\hat{r}$ is fixed, so it can be pulled outside of the minimization problem. The column generation algorithm can be rewritten as:

1. Choose a subset $I$ of columns and variables. Solve the $(RMP)$:

    $$
    \begin{align}
    (RMP) \quad \min_{\lambda_i, \ \forall i \in I} \quad& \sum_{i \in I} \lambda_i \left( \mathbf{c}^T \mathbf{x}^i \right) \\
    \text{s.t.} \quad& \sum_{i \in I} \lambda_i \left( \mathbf{D} \mathbf{x}^i \right) = \mathbf{b}_0 \quad \leftarrow \hat{\mathbf{y}} \\
    &\sum_{i \in I} \lambda_i = 1 \quad \leftarrow \hat{r} \\
    &\lambda_i \geq 0, \forall i \in I.
    \end{align}
    $$

    Obtain the optimal solution $\hat{\boldsymbol{\lambda}}$ of $(RMP)$ and the optimal dual solution $\hat{\mathbf{y}}$ and $\hat{r}$.

2. To check the optimality of $\hat{\boldsymbol{\lambda}}$, we solve the following subproblem $(SP)$:

    $$
    \begin{align}
    (SP) \quad w = \min \quad& \left( \mathbf{c}^T - \hat{\mathbf{y}}^T \mathbf{D} \right) \mathbf{x} \\
    \text{s.t.} \quad& \mathbf{F} \mathbf{x} = \mathbf{b}, \ \mathbf{x} \geq 0.
    \end{align}
    $$

    If $w \geq \hat{r}$, then $\hat{\boldsymbol{\lambda}}$ is optimal for $(MP)$. Terminate. Otherwise, the optimal BFS of the above problem is an extreme point of the polyhedron $P$. Denote it as $\mathbf{x}^i$. Add the column $\left[ \begin{array}{c} \mathbf{D} \mathbf{x}^i \\ 1 \end{array} \right]$ to the constraints matrix in $(RPM)$, and add $\mathbf{c}^T \mathbf{x}^i$ to the cost coefficient.


Note that the dual variables $\hat{\mathbf{y}}$ and $\hat{r}$ can be obtained from computing $\mathbf{c}^T_B \mathbf{B}^{-1}$ as done in simplex method. In particular, $\hat{\mathbf{y}}$ is the first $m_1$ components of $\mathbf{c}^T_B \mathbf{B}^{-1}$, and $\hat{r}$ is the last component of $\mathbf{c}^T_B \mathbf{B}^{-1}$. Here, $\mathbf{c}_B$ is the vector of coefficients of $\lambda_i$'s corresponding to the basic variables, and $\mathbf{B}$ is the basis matrix of $\left[ \begin{array}{cccc}\mathbf{D} \mathbf{x}^1 & \mathbf{D} \mathbf{x}^2 & \ldots & \mathbf{D} \mathbf{x}^N \\ 1 & 1 & \ldots & 1 \end{array} \right]$.

## Numerical Example

Consider the following LP:

$$
\begin{align}
\min \quad& -4x_1 -x_2 - 6x_3 \\
\text{s.t.} \quad& 3x_1 + 2x_2 + 4x_3 = 17 \\
& 1 \leq x_1 \leq 2 \\
& 1 \leq x_2 \leq 2 \\
& 1 \leq x_3 \leq 2.
\end{align}
$$

Divide the constraints into two groups: The first group consists of the constraint $\mathbf{D} \mathbf{x} = \mathbf{b}_0$ where $\mathbf{D} = \left[\begin{array}{ccc} 3 & 2 & 4 \end{array} \right]$ and $\mathbf{b}_0 = 17$. The second group is the constraint $\mathbf{x} \in P$, where the polyhedron $P = \left\{ \mathbf{x} \in \mathbb{R}^3 \ : \ 1 \leq x_i \leq 2, \ \forall i = 1, 2, 3 \right\}$. $P$ is a 3-D cube, which has eight extreme points $\mathbf{x}^1, \ldots, \mathbf{x}^8$; it is bounded and has no extreme rays.

The master problem $(MP)$ in the $\boldsymbol{\lambda}$ can be written as:

$$
\begin{align}
(MP) \quad \min_{\lambda_1, \ldots, \lambda_8} \quad& \sum^8_{i = 1} \lambda_i \left( \mathbf{c}^T \mathbf{x}^i \right) \\
\text{s.t.} \quad& \sum^8_{i = 1} \lambda_i \left( \mathbf{D} \mathbf{x}^i \right) = 17 \\
& \sum^8_{i = 1} \lambda_i = 1 \\
& \lambda_i \geq 0, \ \forall i = 1, \ldots, 8.
\end{align}
$$

Note that $(MP)$ has two equality constraints. Pick two columns, or equivalently choose two extreme points of $P$, to start the column generation algorithm. Pick $\mathbf{x}^1 = (2, 2, 2)$ and $\mathbf{x}^2 = (1, 1, 2)$, and the corresponding convex weights $\lambda_1, \lambda_2$. Note that the specific indices do not matter. We can always order the extreme points such that the first extreme point is $(2, 2, 2)$ and the second is $(1, 1, 2)$. We have:

$$
\begin{align}
&\mathbf{c}^T \mathbf{x}^1 = 
\left[
\begin{array}{ccc}
-4 & -1 & -6
\end{array}
\right]
\left[
\begin{array}{c}
2 \\
2 \\
2
\end{array}
\right] = -22, \
\mathbf{c}^T \mathbf{x}^2 = 
\left[
\begin{array}{ccc}
-4 & -1 & -6
\end{array}
\right]
\left[
\begin{array}{c}
1 \\
1 \\
2
\end{array}
\right] = 17 \\
&\mathbf{D} \mathbf{x}^1 = 
\left[ 
\begin{array}{ccc}
3 & 2 & 4
\end{array}
\right]
\left[
\begin{array}{c}
2 \\
2 \\
2
\end{array}
\right] = 18, \
\mathbf{D} \mathbf{x}^2 = 
\left[ 
\begin{array}{ccc}
3 & 2 & 4
\end{array}
\right]
\left[
\begin{array}{c}
1 \\
1 \\
2
\end{array}
\right] = 13.
\end{align}
$$

The $(RMP)$ can be written explicitly as:

$$
\begin{align}
(RMP) \quad \min_{\lambda_1, \lambda_2} \quad& -22 \lambda_1 - 17 \lambda_2 \\
\text{s.t.} \quad& 18 \lambda_1 + 13 \lambda_2 = 17 \\
& \lambda_1 + \lambda_2 = 1 \\
& \lambda_1, \lambda_2 \geq 0.
\end{align}
$$

The basis matrix and its inverse are:

$$
\begin{align}
\mathbf{B} = 
\left[
\begin{array}{cc}
18 & 13 \\
1 & 1
\end{array}
\right], \quad
\mathbf{B}^{-1} = 
\left[
\begin{array}{cc}
0.2 & -2.6 \\
-0.2 & 3.6
\end{array}
\right].
\end{align}
$$

The optimal solution is:

$$
\begin{align}
\left[
\begin{array}{c}
\hat{\lambda}_1 \\
\hat{\lambda}_2
\end{array}
\right] = 
\mathbf{B}^{-1}
\left[
\begin{array}{c}
17 \\
1
\end{array}
\right] = 
\left[
\begin{array}{c}
0.8 \\
0.2
\end{array}
\right].
\end{align}
$$

Form the dual variable:

$$
\left[
\begin{array}{cc}
\hat{\mathbf{y}}^T & \hat{r}
\end{array}
\right] = 
\mathbf{c}^T_B \mathbf{B}^{-1} = 
\left[
\begin{array}{cc}
-22 & -17
\end{array}
\right]
\mathbf{B}^{-1}
= 
\left[
\begin{array}{cc}
-1 & -4
\end{array}
\right].
$$

Note that the optimal dual variable $\hat{\mathbf{y}}$ corresponds to the hard constraints, $18 \lambda_1 + 13 \lambda_2 = 17$, and the optimal dual variable $\hat{r}$ corresponds to $\lambda_1 + \lambda_2 = 1$.

To compute the minimum reduced cost, we form the pricing problem:

$$
\begin{align}
\hat{Z} = \min \quad& \left( \mathbf{c}^T - \hat{\mathbf{y}}^T \mathbf{D} \right) \mathbf{x} - \hat{r} \\
\text{s.t.} \quad& \mathbf{x} \in P,
\end{align}
$$

which is:

$$
\begin{align}
\hat{Z} = &\min \quad -x_1 + x_2 - 2x_3 + 4 \\
&\text{s.t.} \quad 1 \leq x_1 \leq 2, \ 1 \leq x_2 \leq 2, \ 1 \leq x_3 \leq 2.
\end{align}
$$

The optimal solution is $\mathbf{x}^3 = \left[\begin{array}{ccc}2 & 1 & 2\end{array}\right]$, which is another extreme point of the cube $P$. The optimal cost $\hat{Z} = -1$, therefore, the reduced cost of $\lambda_3$ is $-1$. This variables enters the restricted problem. The associated column is $\left[\begin{array}{cc} \mathbf{D} \mathbf{x}^3 & 1 \end{array}\right] = \left[\begin{array}{cc}16 & 1 \end{array} \right]$, and the associated cost coefficient is $\mathbf{c}^T \mathbf{x}^3 = -21$.

The new $(RMP)$ is:

$$
\begin{align}
(RMP) \quad \min_{\lambda_1, \lambda_2, \lambda_3} \quad& -22 \lambda_1 - 17 \lambda_2 - 21 \lambda_3 \\
\text{s.t.} \quad& 18 \lambda_1 + 13 \lambda_2 + 16 \lambda_3 = 17 \\
& \lambda_1 + \lambda_2 + \lambda_3 = 1 \\
& \lambda_1, \lambda_2, \lambda_3 \geq 0.
\end{align}
$$

The optimal solution is $\hat{\lambda}_1 = 0.5$, $\hat{\lambda}_2 = 0$, $\hat{\lambda}_3 = 0.5$. The optimal basis matrix and its inverse are:

$$
\begin{align}
\mathbf{B} = 
\left[
\begin{array}{cc}
18 & 16 \\
1 & 1
\end{array}
\right], \ 
\mathbf{B}^{-1} = 
\left[
\begin{array}{cc}
0.5 & -8 \\
-0.5 & 9
\end{array}
\right].
\end{align}
$$

The dual variables and the cost coefficients are:

$$
\begin{align}
&\left[\begin{array}{cc}\hat{\mathbf{y}} & \hat{r} \end{array}\right] = \mathbf{c}^T_B \mathbf{B}^{-1} = 
\left[\begin{array}{cc} -22 & -21 \end{array} \right]\mathbf{B}^{-1}= 
\left[\begin{array}{cc} -0.5 & -13 \end{array} \right] \\
&\mathbf{c}^T - \hat{\mathbf{y}}^T \mathbf{D} = 
\left[\begin{array}{ccc}-4 & -1 & -6 \end{array} \right] - (-0.5)
\left[\begin{array}{ccc}3 & 2 & 4 \end{array} \right] = 
\left[\begin{array}{ccc}-2.5 & 0 & -4 \end{array} \right].
\end{align}
$$

The pricing porblem is:

$$
\begin{align}
\hat{Z} = \min \quad& -2.5 x_1 - 4x_3 + 13 \\
\text{s.t.} \quad& 1 \leq x_1 \leq 2, \ 1 \leq x_2 \leq 2, \ 1 \leq x_3 \leq 2.
\end{align}
$$

The optimal $\hat{Z} = 0$, implying the current solution is optimal for the master problem. Hence, the final optimal solution is:

$$
\mathbf{x}^* = 0.5 \mathbf{x}^1 + 0.5 \mathbf{x}^3 =
0.5 \left[\begin{array}{c} 2 \\ 2 \\ 2 \end{array} \right] + 
0.5 \left[\begin{array}{c} 2 \\ 1 \\ 2 \end{array} \right] = 
\left[\begin{array}{c} 2 \\ 1.5 \\ 2 \end{array} \right]
$$