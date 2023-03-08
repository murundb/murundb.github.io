## Definition

A mathematical optimization problem (in minimization), or just optimization problem is defined as:

$$
\begin{align}
\min \quad & f(\mathbf{x}) \\
\textrm{s.t.} \quad & g_i(\mathbf{x}) \leq b_i, \quad i = 1, \ldots, m \\
\quad & h_i(\mathbf{x}) = c_i, \quad i = 1, \ldots, p
\end{align}
$$

Here the vector $\mathbf{x} = (x_1, \ldots, x_n)$ is the **optimization variable** or the **decision variable** of the problem, 
the function $f: \mathbb{R}^n \rightarrow \mathbb{R}$ is the **objective function**, the 
functions $g_i: \mathbb{R}^n \rightarrow \mathbb{R}, \ i = 1, \ldots, m$, are the (inequality) **constraint functions**,
and the constants $b_1, \ldots, b_m$ are the limits, or bounds, for the constraints.  
$h_i: \mathbb{R}^n \rightarrow \mathbb{R}, \ i = 1, \ldots, p$ are the **equality constraints**, and 
the constants $c_1, \ldots, c_p$ are the equality for the constraints. If there are no constraint functions, we call 
the problem is **unconstrained**. 

A vector $\mathbf{x}^*$ is the optimal solution of the problem, if it has the smallest objective value among all vectors that 
satisfy the constrains; for any $\mathbf{z}$ with $g_1(\mathbf{z}) \leq b_1, \ldots, g_m(\mathbf{z}) \leq b_m$ and 
$h_1(\mathbf{z}) = c_1, \ldots, h_k(\mathbf{z}) = c_p$, 
we have $f(\mathbf{z}) \geq f(\mathbf{x}^*)$.

The constraints define a set of values that the optimization variable can take, e.g., $X = \left\{ \mathbf{x} \in \mathbb{R}^{n - p} \times \mathbb{Z}^p : \ g_i(\mathbf{x}) \leq b_i, \ i = 1, \ldots, m \right\}$. A point $\mathbf{x} \in X$ is called **feasible** if it satisfies all the constraints of the 
optimization problem. Note that if $X = \emptyset$, then the optimization problem is infeasible. 
The set of all feasible points is called the feasible set  or the constraint set.
For example, the problem:

$$
\min \left\{ 3x + 2y \ : \ x + y \leq 1, \ x \geq 2, \ y \geq 2 \right\},
$$

is infeasible.

An optimization problem is **unbounded** if there are feasible solutions with arbitrarily small
objective values. Formally, optimization problem is unbounded if there exists a sequence of 
feasible solutions $\left\{ \mathbf{x}^i \right\}$ such that
$\lim_{i \rightarrow \infty} f(\mathbf{x}^i) = - \infty$. Note that an unbounded problem must be 
feasible. If $X$ is bounded set, then the optimization problem **cannot be unbounded**.

## Minimization vs. Maximization

Without loss of generality, it is sufficient to consider a minimization problem since:

$$
\begin{align}
\max \quad & f(\mathbf{x}) \\
\textrm{s.t.} \quad & g_i(\mathbf{x}) \leq b_i, \\
\end{align}
$$

is equivalent to

$$
\begin{align}
-\min \quad & -f(\mathbf{x}) \\
\textrm{s.t.} \quad & g_i(\mathbf{x}) \leq b_i. \\
\end{align}
$$

## Existence of an Optimal Solution


**Thereom** Weierstrass Theorem.

Consider an optimization problem:

$$
\begin{align}
\min \quad & f(\mathbf{x}) \\
\textrm{s.t.} \quad & \mathbf{x} \in X.
\end{align}
$$

If $f$ is continuous function and $X$ is a nonempty, closed, and bounded set (equivalently, 
nonempty and compact), then the optimization problem has an optimal solution, i.e., there exists
$\mathbf{x}^* \in X$ such that $f(\mathbf{x}^*) \leq f(\mathbf{x})$ for all $\mathbf{x} \in X$.

Remarks:

1. This is a sufficient condition and not a necessary condition.
2. $X$ is not empty, thus the problem cannot be infeasible.
3. $X$ is bounded, thus the problem cannot be unbounded.W
4. The continuity and closedness guarantees an optimal solution exists.

## Global and Local Optimal Solutions

Consider again the problem:

$$
\begin{align}
\min \quad & f(\mathbf{x}) \\
\textrm{s.t.} \quad & \mathbf{x} \in X.
\end{align}
$$

A solution $\mathbf{x}^*$ is a **global** optimal solution if $\mathbf{x}^* \in X$ and
$f(\mathbf{x}^*) \leq f(\mathbf{x})$ for all $\mathbf{x} \in X$.

Given a solution $\mathbf{x}^*$ and a scalar $\epsilon > 0$, an $\epsilon$-neighborhood
of $\mathbf{x}^*$ is defined as: 

$$
\mathbb{B}_\epsilon (\mathbf{x}^*) = 
\left\{
\mathbf{x}: \ ||\mathbf{x} - \mathbf{x}^* || \leq \epsilon
\right\}.
$$

A solution $\mathbf{x}^*$ is a **local** optimal solution if 
$\mathbf{x}^* \in X$ and if there is an $\epsilon > 0$ such that 
$f(\mathbf{x}^*) \leq f(\mathbf{x})$ for all $\mathbf{x} \in X \cap \mathbb{B}_\epsilon (\mathbf{x}^*)$.

If the problem is a convex optimization problem, i.e., $f$ is a convex function and $X$ is a convex
set, **then any local optimal solution is also a global optimal solution**.

Remarks:

1. Every global optimal solution is a local optimal solution, but not vice versa
2. The objective function value at different local optimal solutions may be different
3. The objective value at all global optimal solutions must be the same
4. Typical optimization algorithms are designed to find local optimal solutions (at best)
5. If the problem is convex, then we are sure that any local optimal solution we find is also a global optimal solution

## Convex Optimization Problem

Given:

$$
\begin{align}
\min \quad& f(\mathbf{x}) \\
\text{s.t.} \quad& g_i(\mathbf{x}) \leq b_i \quad i = 1, \ldots, m \\
\quad& h_j(\mathbf{x}) = d_j \quad j = 1, \ldots, l \\
\quad& \mathbf{x} \in \mathbb{R}^n,
\end{align}
$$

a convex optimization problem is one in which the objective and constraint functions are convex, which means they satisfy the inequality:

$$
f_i (\alpha \mathbf{x} + \beta \mathbf{y}) \leq \alpha f_i(\mathbf{x}) + \beta f_i(\mathbf{y}),
$$

for all $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ and all $\alpha, \beta \in \mathbf{R}$ with $\alpha + \beta = 1$,
$\alpha \geq 0$, $\beta \geq 0$.

In general, to check for convexity:

1. Check that all variables are continuous
2. Check that the objective function is convex
3. Check each equality constraint to see if it is linear
4. Write each constraint as an inequality contraint in $\leq$ form with a constant on the right-hand-side, and check
        the convexity of the function on the left-hand-side 

If the problem passes all the checks, then it is a convex optimization problem. Otherwise, it may or may not be convex (the conditions are sufficient, not necessary).

**Proof**. Define $X_{g_i} = \left\{ \mathbf{x}: \ g_i(\mathbf{x}) \leq b_i \right\}$. If $g_i$ is convex, $X_{g_i}$ is a convex set since it is the level set of convex function $g_i$. We can write an equality constraint $h_j (\mathbf{x}) = d_j$ as two inequalities $h_j(\mathbf{x}) \leq d_j$ and $-h_j (\mathbf{x}) \leq -d_j$. Define $X_{h_j} = \left\{\mathbf{x} : \ h_j(\mathbf{x}) \leq d_j \right\}$ and $X_{-h_j} = \left\{\mathbf{x} : \ -h_j(\mathbf{x}) \leq -d_j \right\}$. Since $h_j$ is linear and convex, $-h_j$ is convex. Thus both sets are convex. The constraint set of the problem can we written as:

$$
X = X_{g_1} \cap \ldots X_{g_m} \cap X_{h_1} \cap \ldots X_{h_l} \cap X_{-h_1} \cap \ldots X_{-h_l}.
$$

Since intersection of convex sets is convex, $X$ is a convex set. Since $f$ is a convex function, the problem is a convex optimization problem.

## Optimization Problem Classification

### Linear Program

Linear Program (LP) or linear optimization problem is where
the functions are all linear and the variable domains are all continuous. LP is a convex optimization problem.

### Nonlinear Program

Nonlinear Program (NLP) or nonlinear optimization problem is 
where some of the functions are nonlinear and the variable domains
are all continuous. NLPs can be an unconstrained optimizations where
there are no constrains or simple bound constraints on the variables, or
quadratic programming where objectives and constraints involve quadratic functions. NLPs can be convex optimziation problem.

### Integer Program

Integer Program (IP) or discrete optimization problem is 
where the function is combination of linear and nonlinear with 
discrete (some or all) variable domains. IPs can be:

1. **Mixed Integer Linear Program (MILP)**

    All linear functions and some variables are continuous and some are discrete

2. **Mixed Integer Nonlinear Program (MINLP)**

    Some nonlinear functions and some variables are continuous and some are discrete.

3. **Mixed Integer Quadratic Program (MIQLP)**

    Nonlinear functions are quadratic and some variables are continuous and
    some are discrete.

IPs are in general not convex optimization problem.