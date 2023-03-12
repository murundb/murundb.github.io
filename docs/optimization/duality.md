## Relaxation

Consider an optimization problem $P$ defined as:

$$
\begin{align}
\min \quad& f(\mathbf{x}) \\
\text{s.t.} \quad& \mathbf{x} \in X.
\end{align}
$$

A problem Q defined as:

$$
\begin{align}
\min \quad& g(\mathbf{x}) \\
\text{s.t.} \quad& \mathbf{x} \in Y
\end{align}
$$

is a **relaxation** of $P$ if:

1. $X \subseteq Y$
2. $f(\mathbf{x}) \geq g(\mathbf{x}), \ \forall \mathbf{x} \in X$.

Remarks:

1. The relaxation of the optimization problem should be easier to solve.
2. Optimal value of the relaxation provides a lower bound on the original problem.
3. If the relaxation is infeasible, then clearly the original problem is also infeasible.
4. Suppose only the constraints are relaxed. Then if an optimal solution to the relaxation problem is feasible to the original problem, then it must be an optimal solution to the original problem.

## Lagrangian

Consider an optimization problem $P$ defined as:

$$
\begin{align}
\min \quad & f(\mathbf{x}) \\
\textrm{s.t.} \quad & g_i(\mathbf{x}) \leq b_i, \quad i = 1, \ldots, m \\
\quad & h_j(\mathbf{x}) = d_j, \quad j = 1, \ldots, p
\end{align}
$$

with optimization variable $\mathbf{x} \in \mathbb{R}^n$.
We define the **Lagrangian** $L: \mathbb{R}^n \times \mathbb{R}^m \times \mathbb{R}^p \rightarrow \mathbb{R}$ associated
with the optimization problem as:

$$
L(\mathbf{x}, \boldsymbol{\lambda}, \boldsymbol{\mu}) = 
f(\mathbf{x}) + 
\sum^m_{i = 1} \lambda_i \left[g_i(\mathbf{x}) - b_i \right] + 
\sum^p_{j = 1} \mu_i \left[ h_j(\mathbf{x}) - d_j \right].
$$

The $\lambda_i \geq 0$ and $\mu_j$ are called the **Lagrangian multipliers** associated with the 
$i$'th inequality and $j$'th equality constraints. The vectors $\boldsymbol{\lambda}$ and $\boldsymbol{\mu}$
are called the **dual variables** or **Lagrange multiplier vectors** associated with 
the optimization problem.

## Lagrange Dual Function

The **Lagrange dual function** (or just dual function)
$g: \mathbb{R}^m \times \mathbb{R}^p \rightarrow \mathbb{R}$ is defined as the 
minimum value of the Lagrangian over $\mathbf{x} \in X$: for $\boldsymbol{\lambda} \in \mathbb{R}^m$
and $\boldsymbol{\mu} \in \mathbb{R}^p$:

$$
g(\boldsymbol{\lambda}, \boldsymbol{\mu}) = 
\inf_{\mathbf{x} \in X} L(\mathbf{x}, \boldsymbol{\lambda}, \boldsymbol{\mu})
= 
\inf_{\mathbf{x} \in X}
\left(
f(\mathbf{x}) + 
\sum^m_{i = 1} \lambda_i \left[ g_i(\mathbf{x}) - b_i \right] + \sum_{j = 1}^p
\mu_i \left[h_j(\mathbf{x}) - d_j \right]
\right).
$$

When the Lagrangian is unbounded below in $\mathbf{x}$, the dual function takes on the 
value $-\infty$. Since the dual function is the pointwise infimum of a family of affine
functions of $\boldsymbol{\lambda}, \boldsymbol{\mu}$, it is concave.

Note that we explicitly didn't use minimum. The minimum is attained, the infimum isn't necessarily. The infimum of a set $S$ is defined as the **greatest number** that is less than or equal to all elements of $S$. The infimum is also sometimes called the greatest lower bound.

## Relaxation via Lagrange Dual Problem

The dual function yields lower bounds on the optimal value $p^*$ of the optimization problem. 
For any $\lambda_i \geq 0$ and $\mu_i$:

$$
g(\boldsymbol{\lambda}, \boldsymbol{\mu}) \leq p^*.
$$

When the dual function takes $-\infty$, this inequality becomes vacuous.

For each pair $\boldsymbol{\lambda}, \boldsymbol{\mu}$ with $\boldsymbol{\lambda} \geq 0$,
the Lagrange dual functions gives us a lower bound on the optimal value $p^*$ of the 
optimization problem. Thus we have a lower bound that depends on some parameters 
$\boldsymbol{\lambda}, \boldsymbol{\mu}$. Then what is the best lower bound that 
can be obtained from the Lagrange dual function? This leads to an optimization problem:

$$
\begin{align}
\max \quad & g(\boldsymbol{\lambda}, \boldsymbol{\mu}) \\
\textrm{s.t.} \quad & \boldsymbol{\lambda} \geq 0. \\
\end{align}
$$

This problem is called the **Lagrange dual problem** associated with the optimization problem. 
The term **dual feasible** refers to the pair $(\boldsymbol{\lambda}, \boldsymbol{\mu})$ with 
$\boldsymbol{\lambda} \geq 0$ and $g(\boldsymbol{\lambda}, \boldsymbol{\mu}) > -\infty$.

The Lagrange dual problem is a convex optimization problem, since the objective to be maximized is 
concave and the constraint is convex. This is the case whether the initial optimization problem is convex or not.

### Weak Duality

The optimal value of the Lagrange dual problem, $d^*$, is by definition, the best
lower bound on $p^*$ that can be obtained from the Lagrange dual function. We have the simple but important
inequality:

$$
d^* \leq p^*,
$$

which holds even if the original problem is not convex. This property is called 
**weak duality**. The **optimal duality gap** of the original problem is $p^* - d^*$ which 
is the gap between the optimal value of the optimization problem and the best (i.e., greatest) lower bound
on it that can be obtained from the Lagrange dual function. The optimal duality gap is always nonnegative. 

### Strong Duality
If the equality:

$$
d^* = p^*,
$$

holds, i.e., the optimal duality gap is zero, then **strong duality** holds. This means
that the best bound that can be obtained from the Lagrange dual function is tight. If the optimization 
problem is convex, we usually (but not always) have strong duality.