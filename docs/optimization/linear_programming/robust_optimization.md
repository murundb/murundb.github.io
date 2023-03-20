## Robust Constraint

Given a linear constraint:

$$
\mathbf{a}^T \mathbf{x} \leq b,
$$

suppose the coefficient $\mathbf{a}$ is uncertain, but is in polytope $\mathcal{U}$:

$$
\mathcal{U} = \left\{ \mathbf{a} \in \mathbb{R}^n \ : \ \mathbf{B} \mathbf{a} \leq \mathbf{d} \right\}.
$$

We are interested in finding $\mathbf{x}$ such that:

$$
\mathbf{a}^T \mathbf{x} \leq b, \quad \forall \mathbf{a} \in \mathcal{U}. \label{robust_constraint}
$$

Constraint $(\ref{robust_constraint})$ is called a **robust constraint**. Notice that since $\mathcal{U}$ could contain infinite number of realizations of $\mathbf{a}$, the robust constraint contains the conjunction of an infinite number of linear constraints, each for specific value of $\mathbf{a}$ in $\mathcal{U}$. To deal with $(\ref{robust_constraint})$, we need to reformulate it into a finite set of constraints.

## Reformulation

The general way to reformulate the robust constraint into a set of linear constraints is:

$$
\begin{align}
& \mathbf{a}^T \mathbf{x} \leq b, \quad \forall \mathbf{a} \in \mathcal{U} := \left\{ \mathbf{a} \in \mathbb{R}^n \ : \ \mathbf{B} \mathbf{a} \leq \mathbf{d} \right\} \\
\Rightarrow &\max_{\mathbf{a}: \ \mathbf{B} \mathbf{a} \leq \mathbf{d}} \quad \mathbf{a}^T \mathbf{x} \leq b \label{1} \\
\Rightarrow &\min_{\boldsymbol{\lambda}: \ \mathbf{B}^T \boldsymbol{\lambda} = \mathbf{x}, \ \boldsymbol{\lambda} \geq 0} \quad \mathbf{d}^T \boldsymbol{\lambda} \leq b \label{2} \\
\Rightarrow &
\begin{cases}
    \mathbf{d}^T \boldsymbol{\lambda} \leq b \\
    \mathbf{B}^T \boldsymbol{\lambda} = \mathbf{x} \\
    \boldsymbol{\lambda} \geq 0.
\end{cases} \label{f} \\
\end{align}
$$

Equation $(\ref{1})$ uses a simple observation that if a real number (i.e., $b$) is greater than or equal to a set of real numbers (i.e., $\mathbf{a}^T \mathbf{x}$ for each $\mathbf{a} \in \mathcal{U}$), then $b$ should be greater than or equal to the supremum of this set of real numbers. Moreover, the supremum is achieved by some particular $\mathbf{a} \in \mathcal{U}$ since the function $\mathbf{a}^T \mathbf{x}$ and $\mathcal{U}$ are linear, so the max operator and the supremum operator coincide. Equation $(\ref{2})$ holds since the uncertainty set $\mathcal{U}$ is a nonempty polytope, so the maximum in equation $(\ref{1})$ for any $\mathbf{x}$ is finite, therefore, LP strong duality holds between the primal maximization problem and the dual problem in equation $(\ref{2})$. Finally, since the minimum in $(\ref{2})$ exists for any $\mathbf{x}$ and is less than or equal to $b$, then there must exist some $\mathbf{\lambda}$ in the dual polyhedron such that the objective value of the dual problem is less than $b$.

This procedure of reformulating the robust linear constraint is a general procedure that can be applied to any polyhedral uncertainty set.



