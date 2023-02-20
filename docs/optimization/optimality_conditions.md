## Problem Statement

We are interested in solving unconstrained optimization problem:

$$
\min \quad f(\mathbf{x}),
$$

where $f: \mathbb{R}^n \rightarrow \mathbb{R}$ is convex and twice continuously differentiable. 

## Optimiality Conditions

Two optimality conditions that are necessary but not sufficient are as follows.

### First-Order

What are the conditions under which $\mathbf{x}^*$ is a local optima? From Taylor series:

$$
f(\mathbf{x}^* + \Delta \mathbf{x}) = f(\mathbf{x}^*) + \frac{\nabla f(\mathbf{x}^*)^T \Delta \mathbf{x}}{1!} + \frac{\Delta \mathbf{x}^T \nabla^2 f(\mathbf{x}^*) \Delta \mathbf{x}}{2!} + \ldots
$$

If $\mathbf{x}^*$ is a local minima, then we know that $f(\mathbf{x}^* + \Delta \mathbf{x}) \geq f(\mathbf{x}^*)$ for a sufficiently small $\Delta \mathbf{x}$, i.e.:

$$
\frac{\nabla f(\mathbf{x}^*)^T \Delta \mathbf{x}}{1!} \geq 0,
$$

since the lower order term dominates. However, $\Delta \mathbf{x}$ can be either positive or negative. Hence, we must have:

$$
\nabla f(\mathbf{x}^*) = 0.
$$

This also holds for local maxima, i.e., if $\mathbf{x}^*$ is a local maxima or minima, then we must have $\nabla f(\mathbf{x}^*) = 0$. A point where the gradient 
vanishes is called a **stationary point**.

### Second-Order

Per first-order condition, if $\mathbf{x}^*$ is a local minima, then we have $\nabla f(\mathbf{x}^*) = 0$. For $f(\mathbf{x}^* + \Delta \mathbf{x}) \geq f(\mathbf{x}^*)$ to hold for all 
$\Delta \mathbf{x} = 0$, we must have:

$$
\Delta \mathbf{x}^T \nabla^2 f(\mathbf{x}^*) \Delta \mathbf{x} \geq 0, \quad \forall \Delta \mathbf{x},
$$

i.e., the Hessian must be positive semidefinite.