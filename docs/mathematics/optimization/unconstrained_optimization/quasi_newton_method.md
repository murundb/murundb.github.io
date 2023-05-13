## Broyden-Fletcher-Goldfarb-Shanno

Quasi-Newton is a blend of gradient descent and Newton's method. It avoids computation of the Hessian and its inverse. The update rule is:

$$
\mathbf{x}^{k + 1} = \mathbf{x}^k - \alpha_k \mathbf{H}_k \nabla f(\mathbf{x}^k),
$$

where $\alpha_k$ is determined by line-search and $\mathbf{H}_k$ is an approximation to the Hessian inverse, $\left[ \nabla^2 f(\mathbf{x}^k) \right]^{-1}$. $\mathbf{H}_k$ must be symmetric and positive definite. Since $\mathbf{H]^{-1}_{k + 1}$  approximates the Hessian, we have :

$$
\mathbf{H}_{k + 1} \left( \nabla f(\mathbf{x}^{k + 1}) - \nabla f (\mathbf{x}^k) \right) = \mathbf{x}^{k + 1} - \mathbf{x}^k.
$$

Along with the iterate, the matrix $\mathbf{H}_k$ is updated in each iteration. A widely used method is the **Broyden-Fletcher-Goldfarb-Shanno (BFGS)**:

$$
\mathbf{H}_{k + 1} = 
\mathbf{H}_{k} - \frac{\mathbf{d}_k \mathbf{g}^T_k \mathbf{H}_k + \mathbf{H}_k \mathbf{g}_k \mathbf{d}^T_k}{\mathbf{d}^T_k \mathbf{g}_k} + 
\left( 1 + \frac{\mathbf{g}^T_k \mathbf{H}_k \mathbf{g}_k}{\mathbf{d}^T_k \mathbf{g}_k} \right) \frac{\mathbf{d}_k \mathbf{d}^T_k}{ \mathbf{d}^T_k \mathbf{g_k}},
$$

where $\mathbf{g}_k = \nabla f(\mathbf{x}^{k + 1}) - \nabla f(\mathbf{x}^k)$ and $\mathbf{d}_k = \mathbf{x}^{k + 1} - \mathbf{x}^k$. Most nonlinear programming solvers uses variants of quasi-Newton methods with BFGS updates.