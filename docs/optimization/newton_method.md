## General Descent Methods

The basic paradigm of descent methods is as follows:

1. Choose an initial solution $\mathbf{x}^0$.
2. Choose a descent direction $\mathbf{d}^0$
3. Choose a step size $\alpha_0$
4. Update the solution $\mathbf{x}^1 = \mathbf{x}^0 + \alpha_0 \mathbf{d}^0$
5. If a stopping criteria is met, stop; else re-iterate with current solution.


## Newton's Method

Let $\mathbf{x}^k$ be the current iterate and consider a second order Taylor series of $f(\mathbf{x})$ at $\mathbf{x}^k$, $g(\mathbf{x})$:

$$
g(\mathbf{x}) = f(\mathbf{x}^k) + \nabla f(\mathbf{x}^k)^T (\mathbf{x} - \mathbf{x}^k) + \frac{1}{2}(\mathbf{x} - \mathbf{x}^k) \nabla^2 
f(\mathbf{x}^k) (\mathbf{x} - \mathbf{x}^k).
$$

In Newton's method, we choose the next iterate as the solution that minimizes the approximate function $g(\mathbf{x})$. Setting $\nabla g(\mathbf{x})$ yields to a linear system:

$$
\nabla f(\mathbf{x}^k) + \nabla^2 f(\mathbf{x}^k) (\mathbf{x} - \mathbf{x}^k) = 0.
$$

If the Hessian is non-singular, a solution to the above system is well-defined, and we set:

$$
\mathbf{x}^{k + 1} = \mathbf{x}^k - \left[ \nabla^2 f(\mathbf{x}^k) \right]^{-1} \nabla f(\mathbf{x}^k).
$$

In this case, the improving direction is:

$$
\mathbf{d}^k = -\left[ \nabla^2 f(\mathbf{x}^k) \right]^{-1} \nabla f(\mathbf{x}^k)
$$

and a step size of $\alpha = 1$.

## Newton's Method Single Iteration Example

Let $\mathbf{x} = \left[x_1, x_2 \right]^T$. We are interested in the optimization problem:

$$
\min f(\mathbf{x}) = (x_1 + 1)^4 + x_1 x_2  + (x_2 + 1)^4. 
$$

To solve it with a gradient descent method:

1. Choose initial conditions $x^0 = \left[0, 1 \right]^T$. The initial cost is $f(x^0) = 17.0$
2. The gradient is:

    $$
    \nabla f(\mathbf{x}) =
    \left[
    \begin{array}{c}
    4(x_1 + 1)^3 + x_2 \\
    x_1 + 4(x_2 + 1)^3
    \end{array}
    \right].
    $$

    The Hessian is:

    $$
    \nabla^2 f(\mathbf{x}) = 
    \left[
    \begin{array}{cc}
    12(x_1 + 1)^2 & 1 \\
    1 & 12(x_2 + 1)
    \end{array}
    \right].
    $$

    Evaluating the gradient at $\mathbf{x}^0$, we get $\nabla f(\mathbf{x}^0) = \left[5, 32 \right]^T$.

    Evaluating the Hessian at $\mathbf{x}^0$, we get $\nabla^2 f(\mathbf{x}^0) = \left[\begin{array}{cc}12 & 1 \\ 1 & 48 \end{array} \right]$

3. The next iterate is then $\mathbf{x}^1 = \left[ -0.3617, 0.3409 \right]^T$ and $f(\mathbf{x}^1) = 3.2755$.

## Newton's Method Characteristics

1. If we start close to a local minimum and the Hessian is positive definite, then Newton's method has a quadratic convergence. 

2. In general, Newton's method does not guarantee to converge. The direction may not be improving at all. For example, if we start
    from $\mathbf{x}^0 = \left[ -1, 1 \right]^T$ with $f(\mathbf{x}^0) = 15$, the next iterate is $\mathbf{x}^1 = \left[ -2, 18 \right]$ with $f(\mathbf{x}^1) = 130286$.

3. If the Hessian is singular (or ill-conditioned), Newton's method will halt.

4. Computing gradient and Hessian (and its inverse) is computationally expensive

## Quasi-Newton Method

Quasi-Newton is a blend of gradient descent and Newton's method. It avoids computation of the Hessian and its inverse. The update rule is:

$$
\mathbf{x}^{k + 1} = \mathbf{x}^k - \alpha_k H_k \nabla f(\mathbf{x}^k),
$$

where $\alpha_k$ is determined by line-search and $H_k$ is an approximation to the Hessian inverse, $\left[ \nabla^2 f(\mathbf{x}^k) \right]^{-1}$.