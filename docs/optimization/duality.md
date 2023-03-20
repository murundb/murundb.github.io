## Overview

Duality theory is at the heart of optimization. The motivation to form the dual problem of a minimization LP $(P)$ is to find a **lower bound** to the optimal cost of $(P)$, i.e., find $Z$ such that $Z \leq Z^*_{P}$, where $Z^*_{P}$ is the optimal cost of the primal problem $(P)$. 

Consider an optimization problem $(P)$ defined as:

$$
\begin{align}
(P) \ \min \quad& f(\mathbf{x}) \\
\text{s.t.} \quad& \mathbf{x} \in X.
\end{align}
$$

A problem $(D)$ defined as:

$$
\begin{align}
\min \quad& g(\mathbf{x}) \\
\text{s.t.} \quad& \mathbf{x} \in Y
\end{align}
$$

is a **relaxation** of $(P)$ if:

1. $X \subseteq Y$
2. $f(\mathbf{x}) \geq g(\mathbf{x}), \ \forall \mathbf{x} \in X$.

Clearly, if the relaxation is infeasible, then the original problem is also infeasible. 

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
We define the **Lagrangian** $\mathcal{L}: \mathbb{R}^n \times \mathbb{R}^m \times \mathbb{R}^p \rightarrow \mathbb{R}$ associated
with the optimization problem as:

$$
\mathcal{L}(\mathbf{x}, \boldsymbol{\lambda}, \boldsymbol{\mu}) = 
f(\mathbf{x}) + 
\sum^m_{i = 1} \lambda_i \left[g_i(\mathbf{x}) - b_i \right] + 
\sum^p_{j = 1} \mu_i \left[ h_j(\mathbf{x}) - d_j \right].
$$

The $\lambda_i \geq 0$ and $\mu_j$ are called the **Lagrangian multipliers** associated with the 
$i$'th inequality and $j$'th equality constraints. The vectors $\boldsymbol{\lambda}$ and $\boldsymbol{\mu}$
are called the **dual variables** or **Lagrange multiplier vectors** associated with 
the optimization problem. The Lagrangian is less than or equal to the original objective for any primal feasible solution $\mathbf{x}$.

## Lagrange Dual Function

The **Lagrange dual function** (or just dual function)
$g: \mathbb{R}^m \times \mathbb{R}^p \rightarrow \mathbb{R}$ is defined as the 
minimum value of the Lagrangian over $\mathbf{x} \in X$: for $\boldsymbol{\lambda} \in \mathbb{R}^m$
and $\boldsymbol{\mu} \in \mathbb{R}^p$:

$$
g(\boldsymbol{\lambda}, \boldsymbol{\mu}) = 
\inf_{\mathbf{x} \in X} \mathcal{L}(\mathbf{x}, \boldsymbol{\lambda}, \boldsymbol{\mu})
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

## Lagrange Dual Problem

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

Notice that the **dual of the dual is the primal**.

## Rule for Forming Dual Problems

Given a standard form LP:

$$
\begin{align}
\min \quad& \mathbf{c}^T \mathbf{x} \\
\text{s.t.} \quad& \mathbf{A} \mathbf{x} = \mathbf{b} \\
\quad& \mathbf{x} \geq 0,
\end{align}
$$

the general rules to formulate the dual problem with Lagrangian multiplier vector $\boldsymbol{\lambda}$ are:

1. $\lambda_i (b_i - \mathbf{a}^T_i \mathbf{x}) \leq 0, \ \forall i$:
    1. If $\mathbf{a}^T_i \mathbf{x} \geq b_i$, then $\lambda_i \geq 0$.
    2. If $\mathbf{a}^T_i \mathbf{x} \leq b_i$, then $\lambda_i \leq 0$.
    3. If $\mathbf{a}^T_i \mathbf{x} = b_i$, then $\lambda_i$ is free.

2. $\left( c_j - \boldsymbol{\lambda}^T \mathbf{A}_j \right)x_j \geq 0$:
    1. If $x_j \geq 0$, then $c_j \geq \boldsymbol{\lambda}^T \mathbf{A}_j$, i.e., $\boldsymbol{\lambda}^T \mathbf{A}_j \leq c_j$.
    2. If $x_j \leq 0$, then $c_j \leq \boldsymbol{\lambda}^T \mathbf{A}_j$, i.e., $\boldsymbol{\lambda}^T \mathbf{A}_j \geq c_j$.
    3. If $x_j$ is free, then $c_j = \boldsymbol{\lambda}^T \mathbf{A}_j$, i.e., $\boldsymbol{\lambda}^T \mathbf{A}_j = c_j$.

Using these two rules, given the primal LP:

$$
\begin{align}
\min \quad& \sum^{n}_{j = 1} c_j x_j  \\
\text{s.t.} \quad& \sum^{n}_{j = 1} a_{ij} x_j \geq b_i, \quad i = 1, \ldots, m_1 \\ 
\quad& \sum^{n}_{j = 1} a_{ij} x_j = b_i, \quad i = m_1 + 1, \ldots, m_2 \\ 
\quad& \sum^{n}_{j = 1} a_{ij} x_j \leq b_i, \quad i = m_2 + 1, \ldots, m \\
\quad& x_j \geq 0, \quad j = 1, \ldots, n_1 \\
\quad& x_j \ \text{free}, \quad j = n_1 + 1, \ldots, n_2 \\
\quad& x_j \leq 0, \quad j = n_2 + 1, \ldots, n,
\end{align}
$$

The dual is:

$$
\begin{align}
\max \quad& \sum^{m}_{i = 1} b_i \lambda_i  \\
\text{s.t.} \quad& \sum^{m}_{i = 1} a_{ij} \lambda_i \leq c_j, \quad j = 1, \ldots, n_1 \\ 
\quad& \sum^{m}_{i = 1} a_{ij} \lambda_i = c_j, \quad j = n_1 + 1, \ldots, n_2 \\ 
\quad& \sum^{m}_{i = 1} a_{ij} \lambda_i \geq c_j, \quad j = n_2 + 1, \ldots, n \\
\quad& \lambda_i \geq 0, \quad i = 1, \ldots, m_1 \\
\quad& \lambda_i \ \text{free}, \quad j = m_1 + 1, \ldots, m_2 \\
\quad& \lambda_i \leq 0, \quad i = m_2 + 1, \ldots, m.
\end{align}
$$

Again, the dual of the dual is the primal. 

## Example on Lagrangian Dual Problem

### Primal to Dual

Consider LP $(P)$ with an optimal cost of $v^*_P$:

$$
\begin{align}
(P) \quad \min \quad& x_1 + 2x_2 + 3x_3 \\
\text{s.t.} \quad& x_1 + 5x_2 + 4x_3 \geq 6 \\
\quad& 2x_1 + 3x_2 - x_3 = 3 \\
\quad& x_1 + x_2 - 2 x_3 \leq 4 \\
\quad& x_1 \geq 0, \ x_2 \leq 0, x_3 \ \text{free}.
\end{align}
$$

The Lagrangian, $\mathcal{L}: \ \mathbb{R}^3 \times \mathbb{R}^2 \times \mathbb{R} \rightarrow \mathbb{R}$, should have an objective value that is less than or equal to the primal problem:

$$
\begin{align}
\mathcal{L} &= x_1 + 2x_2 + 3x_3  \\
&+ \lambda_1 \left[ 6 - x_1 - 5x_2 - 4x_3 \right] \\
&+ \mu \left[ 3 - 2x_1 - 3x_2 + x_3 \right]  \\
&+ \lambda_2 \left[ x_1 + x_2 - 2x_3 - 4 \right],
\end{align}
$$

where $\lambda_1, \lambda_2 \geq 0$ and $\mu$ free.

The dual function, $g: \mathbb{R}^2 \times \mathbb{R} \rightarrow \mathbb{R}$ is then:

$$
\begin{align}
g(\lambda_1, \lambda_2, \mu) = 
\min \quad& \mathcal{L} \\
\text{s.t.} \quad& x_1 + 5x_2 + 4x_3 \geq 6 \\
\quad& 2x_1 + 3x_2 - x_3 = 3 \\
\quad& x_1 + x_2 - 2 x_3 \leq 4 \\
\quad& x_1 \geq 0, \ x_2 \leq 0, x_3 \ \text{free}.
\end{align}
$$

Since for every feasible $x_1, x_2, x_3$, the objective of the above problem is less than our equal to the original objective of the primal problem, then the optimal cost of the above is less than or equal to the optimal cost of the primal problem.

The Lagrangian relaxation problem can be formulated by **enlarging the feasible region of the optimization problem by removing constraints**:

$$
\begin{align}
g'(\lambda_1, \lambda_2, \mu) = 
\min \quad& \mathcal{L} \\
\text{s.t.} \quad& x_1 \geq 0, \ x_2 \leq 0, x_3 \ \text{free}.
\end{align}
$$

Here, we have $g'(\lambda_1, \lambda_2, \mu) \leq g(\lambda_1, \lambda_2, \mu) \leq v^*_P$ for any $\lambda_1, \lambda_2 \geq 0$ and $\mu$ free. 

The Lagrangian relaxation problem can be separated into three independent problems, where each is an LP with a single variable $x_j$ and a sign constraint on $x_j$:

$$
\begin{align}
g'(\lambda_1, \lambda_2, \mu) &= \min_{x_1: \ x_1 \geq 0} \left\{ \left[ 1 - \lambda_1 - 2\mu + \lambda_2 \right] x_1 \right\} \\
&+ \min_{x_2: \ x_2 \leq 0} \left\{ \left[ 2 - 5\lambda_1 - 3\mu + \lambda_2 \right] x_2 \right\} \\
&+ \min_{x_3: \ x_3 \ \text{free}} \left\{ \left[ 3 - 4\lambda_1 - 2\lambda_2 + \mu \right] x_3 \right\} \\
&+ (6 \lambda_1 - 4\lambda_2 + 3\mu).
\end{align}
$$

The three subproblems can be easily solved as:

$$
\begin{align}
&\min_{x_1: \ x_1 \geq 0} \left\{ \left[ 1 - \lambda_1 - 2\mu + \lambda_2 \right] x_1 \right\} = 
\begin{cases}
    0,& \text{if }  1 - \lambda_1 - 2\mu + \lambda_2 \geq 0 \\
    -\infty,              & \text{otherwise}
\end{cases} \label{a} \\
&\min_{x_2: \ x_2 \leq 0} \left\{ \left[ 2 - 5\lambda_1 - 3\mu + \lambda_2 \right] x_2 \right\} = 
\begin{cases}
    0,& \text{if }  2 - 5\lambda_1 - 3\mu + \lambda_2 \leq 0 \\
    -\infty,              & \text{otherwise}
\end{cases} \label{b} \\
&\min_{x_3: \ x_3 \ \text{free}} \left\{ \left[ 3 - 4\lambda_1 - 2\lambda_2 + \mu \right] x_3 \right\} = 
\begin{cases}
    0,& \text{if }  3 - 4\lambda_1 - 2\lambda_2 + \mu = 0 \\
    -\infty,              & \text{otherwise}.
\end{cases} \label {c} \\
\end{align}
$$

Then the Lagrangian relaxation problem is:

$$
\begin{align}
g'(\lambda_1, \lambda_2, \mu) = 
\begin{cases}
    6\lambda_1 - 4\lambda_2 + 3\mu, & \text{if }  \ref{a}, \ref{b}, \ref{c} \ \text{holds}\\
    -\infty,              & \text{otherwise}.
\end{cases} \\
\end{align}
$$

The Lagrangian dual problem is then:

$$
\begin{align}
(D) \quad \max_{\lambda_1, \lambda_2, \mu} \quad& g'(\lambda_1, \lambda_2, \mu) \\
\text{s.t.} \quad& \lambda_1, \lambda_2 \geq 0, \ \mu \ \text{free},
\end{align}
$$

or equivalently:

$$
\begin{align}
(D) \quad \max_{\lambda_1, \lambda_2, \mu} \quad& 6\lambda_1 - 4\lambda_2 + 3\mu \\
\text{s.t.} \quad& 1 - \lambda_1 - 2\mu + \lambda_2 \geq 0 \\ 
\quad& 2 - 5\lambda_1 - 3\mu + \lambda_2 \leq 0 \\
\quad& 3 - 4\lambda_1 - 2\lambda_2 + \mu \\
\quad& \lambda_1, \lambda_2 \geq 0, \ \mu \ \text{free}.
\end{align}
$$

### Dual to Primal

The dual of the dual is the primal. The Lagrangian for the dual problem is:

$$
\begin{align}
\mathcal{L'}(x_1, x_2, x_3, \lambda_1, \lambda_2, \mu) &= (6\lambda_1 - 4\lambda_2 + 3\mu)  \\
&+ x_1 \left[ 1 - \lambda_1 - 2\mu + \lambda_2 \right] \\
&+ x_2 \left[ 2 - 5\lambda_1 - 3\mu + \lambda_2 \right] \\
&+ x_3 \left[ 3 - 4\lambda_1 - 2\lambda_2 + \mu \right], \\
\end{align}
$$

where $x_1 \geq 0, x_2 \leq 0$, and $x_3$ free. We want the Lagrangian function to provide an upper bound to the original problem $(D)$. Hence the Lagrangian relaxation is formed as:

$$
\begin{align}
g_2(x_1, x_2, x_3) = \max_{\lambda_1, \lambda_2, \mu} \mathcal{L'} \\
\text{s.t.} \quad& \lambda_1, \lambda_2 \geq 0, \ \mu \ \text{free}.
\end{align}
$$

This is a separable problem and can be solved by maximizing over each lagrangian multiplier separately as follows:

$$
\begin{align}
g_2(x_1, x_2, x_3) &= (x_1 + 2x_2 + 3x_3) \\
&+ \max_{\lambda_1: \ \lambda_1 \geq 0} \left\{ \left[ 6 - x_1 - 5x_2 -4x_3 \right] \lambda_1 \right\} \\ 
&+ \max_{\lambda_2: \ \lambda_2 \geq 0} \left\{ \left[ -4 + x_1 + x_2 - 2x_3 \right] \lambda_2 \right\} \\
&+ \max_{\mu: \ \mu \ \text{free}} \left\{ \left[ 3 - 2x_1 - 3x_2 + x_3 \right] \mu \right\}, \\
\end{align}
$$

The subproblems can be solved as:

$$
\begin{align}
&\max_{\lambda_1: \lambda_1 \geq 0} \left\{ \left[ 6 - x_1 - 5x_2 -4x_3 \right] \lambda_1 \right\} = 
\begin{cases}
    0,& \text{if }  6 - x_1 - 5x_2 -4x_3 \leq 0 \\
    +\infty,              & \text{otherwise}
\end{cases} \label{d} \\
&\max_{\lambda_2: \ \lambda_2 \geq 0} \left\{ \left[ -4 + x_1 + x_2 - 2x_3 \right] \lambda_2 \right\} = 
\begin{cases}
    0,& \text{if }  -4 + x_1 + x_2 - 2x_3 \leq 0 \\
    +\infty,              & \text{otherwise}
\end{cases} \label{e} \\
&\max_{\mu: \ \mu \ \text{free}} \left\{ \left[ 3 - 2x_1 - 3x_2 + x_3 \right] \mu \right\} = 
\begin{cases}
    0,& \text{if }  3 - 2x_1 - 3x_2 + x_3 = 0 \\
    +\infty,              & \text{otherwise}.
\end{cases} \label{f} \\
\end{align}
$$

Hence, the dual of the dual gives the primal problem $(P)$.

## Weak Duality

**Theorem** (Linear programming weak duality). *If $\mathbf{x}$ is any feasible solution to the primal minimization LP, and $\boldsymbol{\lambda}$ is any feasible solution to the dual maximization LP, then $\mathbf{c}^T \mathbf{x} \geq \mathbf{b}^T \boldsymbol{\lambda}$.*


In order words, the optimal value of the Lagrange dual problem, $v_D^*$, is by definition, the best
lower bound on $v_P^*$ that can be obtained from the Lagrange dual function. We have the simple but important
inequality:

$$
v_D^* \leq v_P^*,
$$

which holds even if the original problem is not convex. This property is called 
**weak duality**. The **optimal duality gap** of the original problem is $v_P^* - v_D^*$ which 
is the gap between the optimal value of the optimization problem and the best (i.e., greatest) lower bound
on it that can be obtained from the Lagrange dual function. The optimal duality gap is always nonnegative. 

Weak duality provides some useful properties:

1. If the optimal cost of the primal minimization problem is $-\infty$, then the dual maximization problem must be infeasible.
2. If the optimal cost of the dual maximization problem is $+\infty$, then the primal minimization problem must be infeasible.
3. Let $\mathbf{x}^*$ be a feasible solution to the primal problem and $\boldsymbol{\lambda}^*$ be a feasible solution to the dual problem, and suppose $\mathbf{c}^T \mathbf{x}^* = \mathbf{b}^T \boldsymbol{\lambda}^*$. Then $\mathbf{x}^*$ and $\boldsymbol{\lambda}^*$ are optimal solutions to the primal and dual problems respectively.


## Strong Duality

**Theorem** (Linear programming strong duality). *If a primal linear program has a finite optimal solution $\mathbf{x}^*$, then its dual linear program must also have a finite optimal solution $\boldsymbol{\lambda}^*$, and the respective optimal objective values are equal, that is $\mathbf{c}^T \mathbf{x}^* = \mathbf{b}^T \boldsymbol{\lambda}^*$.*


In other words, if the equality:

$$
v_D^* = v_P^*,
$$

holds, i.e., the optimal duality gap is zero, then **strong duality** holds. If the optimization 
problem is convex, we usually (but not always) have strong duality.

*Proof*. Assume the primal problem is a standard form LP (without loss of generality, we can transform any LP to standard form). Then the primal and dual problems are:

$$
\begin{align}
(P) \ \min \quad& \mathbf{c}^T \mathbf{x} \\
\text{s.t.} \quad& \mathbf{A} \mathbf{x} = \mathbf{b} \\
\quad& \mathbf{x} \geq \mathbf{0},
\end{align}
$$

and

$$
\begin{align}
(D) \ \max \quad& \mathbf{b}^T \boldsymbol{\lambda} \\
\text{s.t.} \quad& \boldsymbol{\lambda}^T \mathbf{A} \leq \mathbf{c}^T \\
\quad& \boldsymbol{\lambda} \ \text{free}.
\end{align}
$$

If the primal problem has a finite optimal solution, then the simplex method with an anti-cycling rule (e.g., Bland's rule) will terminate with an optimal solution $\mathbf{x}^*$ and the associated basis matrix $\mathbf{B}$. By the optimality of $\mathbf{x}^*$, we know the reduced costs are $\bar{\mathbf{c}}^T = \mathbf{c}^T - \mathbf{c}^T_B \mathbf{B}^{-1} \mathbf{A} \geq \mathbf{0}^T$. Now let $\left( \boldsymbol{\lambda}^* \right)^T = \mathbf{c}^T_B \mathbf{B}^{-1}$, then the reduced costs condition is the same as $\left( \boldsymbol{\lambda}^* \right)^T \mathbf{A} \leq \mathbf{c}^T$, i.e., $\boldsymbol{\lambda}^*$ is a dual feasible. Also, $\mathbf{b}^T \boldsymbol{\lambda}^* = \mathbf{c}^T_B \mathbf{B}^{-1} \mathbf{b} = \mathbf{c}^T_B \mathbf{x}_B = \mathbf{c}^T \mathbf{x}^*$. By weak duality, $\boldsymbol{\lambda}^*$ is an optimal solution to the dual problem, and the respective optimal objective values of primal and dual are equal. 

This proof shows that the optimal dual solution $\boldsymbol{\lambda}^*$ can be obtained from the output of the Simplex method, i.e., $\boldsymbol{\lambda}^* = \left( \mathbf{c}^T_B \mathbf{B} \right)^T$.

## Feasibility Combinations

The primal and dual problems can be **finite optimal**, **unbounded optimal**, or **infeasible**. 

1. Primal **finite optimal**, Dual **finite optimal**: **Possible**. Per strong duality, if the primal is finite optimal, then dual must be finite optimal, and vice versa. The strong duality tells us that $\mathbf{c}^T \mathbf{x}^* = \mathbf{b}^T \boldsymbol{\lambda}^*$ for primal optimal solution $\mathbf{x}^*$ and dual optimum $\boldsymbol{\lambda}^*$.

2. Primal **finite optimal**, Dual **unbounded**: **Impossible** due to the weak duality. If the dual has unbounded optimum, i.e., $+\infty$, it cannot be a lower bound for the finite optimal cost of the primal.

3. Primal **finite optimal**, Dual **infeasible**: **Impossible** due to the strong duality, which says if the primal has a finite optimal cost, so does the dual.

4. Primal **unbounded**, Dual **finite optimal**: **Impossible** due to the weak duality. It can also be seen by symmetry with the case primal finite optimal, dual unbounded.

5. Primal **unbounded**, Dual **unbounded**: **Impossible** due to the weak duality. Both unbounded means that primal optimal cost is $-\infty$, and the dual optimal cost is $+\infty$, which cannot happen.

6. Primal **unbounded**, Dual **infeasible**: **Possible** due to the weak duality. Primal has $-\infty$ cost, the dual cannot have any feasible solution, otherwise, the feasible solution would give a lower bound to $-\infty$ by weak duality. In order words, if the primal is unbounded, the dual must be infeasible.

7. Primal **infeasible**, Dual **finite optimal**: **Impossible** by using the result of primal finite optimal, dual infeasible.

8. Primal **infeasible**, Dual **unbounded**: **Possible** by using the result of primal unbounded, dual infeasible. Notice that if the primal is infeasible, then the dual may not necessarily be unbounded. 

9. Primal **infeasible**, Dual **infeasible**: **Possible**.

In summary:

|                    | Finite Optimum | Unbounded  | Infeasible |
| ------------------ | -------------- | ---------- | ---------- |
| **Finite Optimum** | Possible       | Impossible | Impossible |
| **Unbounded**      | Impossible     | Impossible | Possible   |
| **Infeasible**     | Impossible     | Possible   | Possible   |


## Complementary Slackness

**Theorem** (Complementary Slackness). *Let $\mathbf{x}$ and $\boldsymbol{\lambda}$ be feasible solutions to the primal and dual problem, respectively. Then $\mathbf{x}$ and $\boldsymbol{\lambda}$ are optimal solutions for the two problems if and only if they satisfy the following conditions:*

***Primal Complementary Slackness:*** *$\lambda_i \left( \mathbf{a}^T_i - b_i \right) = 0$ for all $i$. In other words, either the $i$'th primal constraint is active (binding, tight) such that $\mathbf{a}^T_i \mathbf{x} = b_i$, or the corresponding dual variable is zero, i.e., $\lambda_i = 0$.*

***Dual Complementary Slakness:*** *$x_j \left( c_j - \boldsymbol{\lambda}^T \mathbf{A}_j \right) = 0$ for all $j$. In other words, either the $j$'th dual constraint is active (binding, tight) such that $\boldsymbol{\lambda}^T \mathbf{A}_j = c_j$, or the corresponding primal variable is zero, i.e., $x_j = 0$.*

## Example on Complementary Slackness

Consider the following primal dual pair:

$$
\begin{align}
\min \quad& 13x_1 + 10x_2 + 6x_3 \quad\quad\quad &\max \quad& 8 \lambda_1 + 3 \lambda_2 \\
\text{s.t.} \quad& 5x_1 + x_2 + 3x_3 = 8 \quad\quad\quad &\text{s.t.} \quad& 5\lambda_1 + 3\lambda_2 \leq 13 \\
&3x_1 + x_2 = 3 &&\lambda_1 + \lambda_2 \leq 10\\
&x_1, x_2, x_3 \geq 0 &&3\lambda_1 \leq 6.
\end{align}
$$

Let the optimal solution to the dual problem be $(\lambda^*_1, \lambda^*_2) = (2, 1)$.

1. At the dual optimum:

    $$
    \begin{align}
    &5\lambda^*_1 + 3\lambda^*_2 = 13 \\
    &\lambda^*_1 + \lambda^*_2 = 3 < 10 \\
    &3\lambda^*_1 = 6.
    \end{align}
    $$

    Therefore, by the Dual Complementary Slackness, $x^*_2 \left( \lambda^*_1 + \lambda^*_2 - 10 \right) = 0$, we know that $x^*_2 = 0$.

2. Primaly Complementary Slackness is automatically satisfied since the primal constraints are equalities. We have:

    $$
    \begin{align}
    &5x^*_1 + 3x^*_3 = 8 \\
    &3x^*_1 = 3.
    \end{align}
    $$

    The optimal primal solution is then $(x^*_1, x^*_2, x^*_3) = (1, 0, 1)$.