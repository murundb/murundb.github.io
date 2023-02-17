## Norms
A function $f: \mathbb{R}^n \rightarrow \mathbb{R}$ with domain $\mathbb{R}^n$ is called a <b>norm</b> if:

1. $f$ is nonnegative: $f(\mathbf{x}) \geq 0$, $\forall \mathbf{x} \in \mathbb{R}^n$
2. $f$ is definite: $f(\mathbf{x}) = 0$ only if $ \mathbf{x} = \mathbf{0}$
3. $f$ is homogeneuous: $f( t \mathbf{x}) = |t| f(\mathbf{x})$, for all $\mathbf{x} \in \mathbb{R}^n$ and $t \in \mathbb{R}$
4. $f$ satisfies the triangle inequality: $f(\mathbf{x} + \mathbf{y}) \leq f(\mathbf{x}) + f(\mathbf{y})$, for all $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$


## Distance
A norm is a measure of the length of a vector $\mathbf{x}$L we can measure the distance between two vectors $\mathbf{x}$ and $\mathbf{y}$:

$$
D(\mathbf{x}, \mathbf{y}) = ||x - y||
$$

## Unit Ball
The set of all vectors with norm less than or equal to one is called <b>unit ball</b> of the norm $|| \cdot ||$:

$$
B = \left\{ \mathbf{x} \in \mathbb{R}^n \ | \ ||\mathbf{x}|| \leq 1 \right\}.
$$