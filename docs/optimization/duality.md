## The Lagrangian

Consider an optimization problem,

$$
\begin{align}
\min \quad & f_0(\mathbf{x}) \\
\textrm{s.t} \quad & f_i(\mathbf{x}) \leq b_i, \quad i = 1, \ldots, m \\
\quad & h_i(\mathbf{x}) = d_i, \quad i = 1, \ldots, p
\end{align}
$$

with variable $\mathbf{x} \in \mathbb{R}^n$.
We define the **Lagrangian** $L: \mathbb{R}^n \times \mathbb{R}^m \times \mathbb{R}^p \rightarrow \mathbb{R}$ associated
with the optimization problem as:

$$
L(\mathbf{x}, \boldsymbol{\lambda}, \boldsymbol{\mu}) = 
f_0(\mathbf{x}) + 
\sum^m_{i = 1} \lambda_i \left[f_i(\mathbf{x}) - b_i \right] + 
\sum^p_{i = 1} \mu_i \left[ h_i(\mathbf{x}) - d_i \right].
$$

The $\lambda_i$ and $\mu_i$ are called the **Lagrangian multipliers** associated with the 
$i$'th inequality and equality constraints. The vectors $\boldsymbol{\lambda}$ and $\boldsymbol{\mu}$
are called the **dual variables** or **Lagrange multiplier vectors** associated with 
the optimization problem.

## The Lagrange Dual Function

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
f_0(\mathbf{x}) + 
\sum^m_{i = 1} \lambda_i \left[ f_i(\mathbf{x}) - b_i \right] + 
\mu_i \left[h_i(\mathbf{x}) - d_i \right]
\right).
$$

When the Lagrangian is unbounded below in $\mathbf{x}$, the dual function takes on the 
value $-\infty$. Since the dual function is the pointwise infimum of a family of affine
functions of $\boldsymbol{\lambda}, \boldsymbol{\mu}$, it is concave.

The dual function yields lower bounds on the optimal value $p^*$ of the optimization problem. 
For any $\lambda_i \geq 0$ and $\mu_i$:

$$
g(\boldsymbol{\lambda}, \boldsymbol{\mu}) \leq p^*.
$$

When the dual function takes $-\infty$, this inequality becomes vacuous.

## The Lagrange Dual Problem

For each pair $\boldsymbol{\lambda}, \boldsymbol{\mu}$ with $\boldsymbol{\lambda} \geq 0$,
the Lagrange dual functions gives us a lower bound on the optimal value $p^*$ of the 
optimization problem. Thus we have a lower bound that depends on some parameters 
$\boldsymbol{\lambda}, \boldsymbol{\mu}$. Then what is the best lower bound that 
can be obtained from the Lagrange dual function? This leads to an optimization problem:

$$
\begin{align}
\max \quad & g(\boldsymbol{\lambda}, \boldsymbol{\mu}) \\
\textrm{s.t} \quad & \boldsymbol{\lambda} \geq 0. \\
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
d^* = p^*
$$
holds, i.e., the optimal duality gap is zero, then **strong duality** holds. This means
that the best bound that can be obtained from the Lagrange dual function is tight. If the optimization 
problem is convex, we usually (but not always) have strong duality.