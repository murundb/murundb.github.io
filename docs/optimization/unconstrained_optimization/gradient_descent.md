## General Descent Methods

The basic paradigm of descent methods is as follows:

> **Algorithm:** Descent Methods 
>
> $\quad$ Choose an initial solution $\mathbf{x}^0$.   
> $\quad$ Choose a descent direction $\mathbf{d}^0$.   
> $\quad$ Choose a step size $\alpha_0$.   
> $\quad$ Update the solution $\mathbf{x}^1 = \mathbf{x}^0 + \alpha_0 \mathbf{d}^0$.   
> $\quad$ If a stopping criteria is met, stop; else re-iterate with current solution.   

## Gradient Descent

The gradient descent method moves from one iteration to the next by moving along the negative of the gradient direction in order to mnimize the 
objective function. Let $\mathbf{x}^k$ be the current iterate, and we want to choose a "downhill direction", $\mathbf{d}^k$, and a step size, $\alpha$, such that:

$$
f(\mathbf{x}^k + \alpha \mathbf{d}^k) < f(\mathbf{x}^k).
$$

By first-order Taylor series:

$$
f(\mathbf{x}^k + \alpha \mathbf{d}^k) \approx f(\mathbf{x}^k) + \alpha \nabla f(\mathbf{x}^k)^T \mathbf{d}^k.
$$

Hence, we want $\alpha \nabla f(\mathbf{x}^k)^T \mathbf{d}^k < 0$. The **steepest descent direction** is the opposite direction of the gradient vector:

$$
\mathbf{d}^k = -\nabla f(\mathbf{x}^k).
$$

For choosing the step size (or learning rate), we can do:

1. Line search - Define $g(\alpha) := f(\mathbf{x}^k + \alpha \mathbf{d}^k)$. Choose $\alpha$ to minimze $g$.
2. Fixed step size - Fix $\alpha$ a priori (may not converge if $\alpha$ is too large) 

The next iteration can be computed as:

$$
\mathbf{x}^{k + 1} = \mathbf{x}^k - \alpha \nabla f(\mathbf{x}^k).
$$

The stop criterian is $|| \nabla f(\mathbf{x}^k)|| \leq \epsilon$.

## Gradient Descent Single Iteration Example

Let $\mathbf{x} = \left[x_1, x_2 \right]^T$. We are interested in the optimization problem:

$$
\min f(\mathbf{\mathbf{x}}) = (x_1 + 1)^4 + x_1 x_2  + (x_2 + 1)^4. xw
$$

To solve it with a gradient descent method:

1. Choose initial conditions $\mathbf{x}^0 = \left[0, 1 \right]^T$. The initial cost is $f(\mathbf{x}^0) = 17.0$.
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

    Evaluating the gradient at $\mathbf{x}^0$, we get $\nabla f(\mathbf{x^0}) = \left[5, 32 \right]^T$

3. The next iterate can be computed as:

    $$
    \begin{align}
    \mathbf{x}^1 &= \mathbf{x}^0 - \alpha \nabla f(\mathbf{x}^0) \\
    &= 
    \left[
    \begin{array}{c}
    -5 \alpha \\
    1 - 32\alpha
    \end{array}
    \right]
    \end{align}
    $$

    Using the line search method, we get:

    $$
    \begin{align}
    g(\alpha) = f(\mathbf{x}^1) = &(-5\alpha + 1)^4 - 5 \alpha (1 - 32 \alpha) \\
    + (1 - 32 \alpha + 1)^4.
    \end{align}
    $$

    Minimizing $g(\alpha)$ results in $\alpha = 0.0527$. 


4. Substituting back, we get $\mathbf{x}^1 = \left[-0.2635, -0.6864 \right]^T$ and $f(\mathbf{x}^1) = 0.4848$.


## Gradient Descent Characteristics

1. At any point $\mathbf{x}^k$ with $\nabla f(\mathbf{x}^k) \neq 0$, the gradient descent produces the most rapid convergence (locally).

2. Initial progress is good, but near a stationary point, the convergence behavior degrades.

3. "Zig-zags", i.e., each successive direction (of move) is perpendicular to the previous direction. Let $\mathbf{d}^k$ be the descent direction and 
    $\alpha_k$ be the optimum step length at step $k$, i.e., 
    $0 = \frac{dg(\alpha)}{d \alpha}|_{\alpha = \alpha_k} = \nabla f(\mathbf{x}^k + \alpha_k \mathbf{d}^k)^T \mathbf{d}^k = \nabla f(\mathbf{x}^{k + 1})^T \mathbf{d}^k$. 

    Since $\mathbf{d}^{k + 1} = - \nabla f(\mathbf{x}^{k + 1})$, we have that $\left( \mathbf{d}^{k + 1} \right)^T \mathbf{d}^k = 0$, i.e., two successive directions are perpendicular.