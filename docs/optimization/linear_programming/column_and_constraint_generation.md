docs/optimization/linear_programming/column_and_constraint_generation.md ## Column Generation

Consider a master problem:

$$
\begin{align}
(MP) \quad \min \quad& \sum^N_{j = 1} c_j x_j \\
\quad\text{s.t.} \quad& \sum^N_{j = 1} \mathbf{A}_j x_j = \mathbf{b} \\
& x_j \geq 0, \quad \forall i = 1, \ldots, N.
\end{align}
$$

The column generation algorithm is useful when $N$ is extremely large number.

> **Algorithm:** **Column Generation**
>
> $\quad$ 1. Pick a subset of columns $\left\{ \mathbf{A}_j \right\}$ and variables $x_j$'s for $j \in I$, where $I$ is a subset of $\left\{1, 2, \ldots, N \right\}$.   
> $\quad$ 2. Solve the **restricted master problem**: $\begin{align} (RMP) \quad \min \quad& \sum_{j \in I} c_j x_j \\ \quad \text{s.t.} \quad& \mathbf{A}_j x_j = \mathbf{b} \\ &x_j \geq 0, \quad \forall j \in I. \end{align}$.   
> $\quad\quad$ Denote the optimal solution of $(RMP)$ as $\hat{\mathbf{x}}_I$.   
> $\quad$ 3. **Pricing subproblem**: Compute all the reduced  costs for $\hat{\mathbf{x}}$ and decide if $\hat{\mathbf{x}}$ is optimal for $(MP)$: $\begin{align} w = \min_{j = 1, \ldots, N} \left\{ c_j - \mathbf{c}^T_B \mathbf{B}^{-1} \mathbf{A}_k \right\}, \end{align}$   
> $\quad\quad$ where $\mathbf{B}$ is the optimal basis obtained from solving the $(RMP)$. There are two possibilities for $w$:   
> $\quad\quad$ (a) If $w \geq 0$, then all the reduced costs are nonnegative, therefore $\hat{\mathbf{x}}$ is optimal for $(MP)$. Terminate.   
> $\quad\quad$ (b) If $w < 0$, pick the column $j$ with the minimum reduced cost, and add $\mathbf{A}_j$ to the subset of columns, i.e., $I \leftarrow I \cup \left\{ j \right\}$. 
> $\quad\quad\quad$ Repeat from Step (2).


Remarks on Step 2:

1. Since (RMP) has all the constraints in the master problem $(MP)$, the optimal solution $\hat{\mathbf{x}}_I$ of $(RMP)$ satisfies all the demand. Moreover, $\hat{\mathbf{x}}_I$ only contains components $x_j$ for $j \in I$. We can set all the other components $x_j = 0$ for $j \notin I$. This provides us a feasible solution, $\hat{\mathbf{x}} = \left( \hat{\mathbf{x}}_I, 0 \right)$ , to $(MP)$.

2. $\hat{\mathbf{x}}$ is a basic feasible solution of $(MP)$. Consider a case where simplex method was used to solve $(RMP)$. When the simplex method terminates on $(RMP)$, it finds an optimal solution $\hat{\mathbf{x}}_I$ of $(RMP)$ and the associated basis matrix $\hat{\mathbf{B}}$. This basis matrix has the same number of rows as the constraint matrix $\mathbf{A}$ and it is invertible, therefore, $\hat{\mathbf{B}}$ is also a basis matrix for $(MP)$.  