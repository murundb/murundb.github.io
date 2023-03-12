Nelder-Mead method fit is a derivative-free method designed for multivariate functions. Consider an optimization problem:

$$
\min \quad \left\{f(\mathbf{x}) \ | \ \mathbf{x} \in \mathbb{R}^n \right\}.
$$

Each iteration maintains an ordered set of $n + 1$ solution points, i.e., at iteration $k$, the solution points are labeled $\mathbf{x}^k_1, \ldots, \mathbf{x}^k_{n + 1}$ such that:

$$
f(\mathbf{x}^k_1) \leq f(\mathbf{x}^k_2) \leq \ldots \leq f(\mathbf{x}^k_{n + 1}).
$$

Each iteration requires function evaluations and sorting. Nelder-Mead method doesn't have a formal convergence theory but works well in practice.

> **Algorithm:** Nelder-Mead Method 
> 
> $\quad$ 0. Choose $n + 1$ distinct solution points $\mathbf{x}^k_1, \ldots, \mathbf{x}^k_{n + 1}$. Set the iteration counter $k = 0$.   
> $\quad$ 1. Order the solution points. Compute the best $n$-centroid $\bar{\mathbf{x}}^k = (1 / n) \sum^n_{i = 1} \mathbf{x}^k_i$.   
> $\quad$ 2. If $\sum^n_{i = 1} |f(\mathbf{x}^k_i) - f(\bar{\mathbf{x}}^k)| < \epsilon$, terminate and report the better of $\mathbf{x}^k_1$ and $\bar{\mathbf{x}}^k$.   
> $\quad$ 3. Try to find a better solution point $\mathbf{x}^k_b$ along the direction $(\bar{\mathbf{x}}^k - \mathbf{x}^k_{n + 1})$ using various rules. If we find one, replace   
> $\quad\quad$ $\mathbf{x}^k_{n + 1}$ by $\mathbf{x}^k_b$, update $k \leftarrow k + 1$ and go to Step 1.   
> $\quad$ 4. Shrink the current solution set towards the best solution $\mathbf{x}^k_1$ by $\mathbf{x}^{k + 1}_i \leftarrow 0.5 (\mathbf{x}^k_1 + \mathbf{x}^k_i)$   
> $\quad\quad$ for all $i = 1, \ldots, n + 1$. Update $k$ and go to Step 1.   

Refer to [Nelder-Mead method](https://en.wikipedia.org/wiki/Nelder%E2%80%93Mead_method).