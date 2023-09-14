# Perturbation

Given a scalar function, $f(\mathbf{x}) \in \mathbb{R}$ of some vector variable, $\mathbf{x} \in \mathbb{R}^n$, then perturbing $\mathbf{x}$ slightly from its nominal value, $\bar{\mathbf{x}}$, by an amount $\delta \mathbf{x}$ will result a change in the function. Consider a standard Taylor series expansion of $f(\mathbf{x})$ around its nominal value, $\bar{\mathbf{x}}$:

$$
f(\mathbf{x}) \approx \left. f(\mathbf{x}) \right|_{\mathbf{x} = \bar{\mathbf{x}}} + \left. \nabla^T f(\mathbf{x}) \right|_{\mathbf{x} = \bar{\mathbf{x}}} \left( \mathbf{x} - \bar{\mathbf{x}} \right) + \frac{1}{2} \left( \mathbf{x} - \bar{\mathbf{x}} \right)^T \nabla^2 \left. f(\mathbf{x}) \right|_{\mathbf{x} = \bar{\mathbf{x}}} \left(\mathbf{x} - \bar{\mathbf{x}} \right) + \ldots.
$$

For convergence, we need $\mathbf{x} - \bar{\mathbf{x}}$ to be small in magnitude. Let $\delta \mathbf{x} = \mathbf{x} - \bar{\mathbf{x}}$ (or equivalently $\mathbf{x} = \bar{\mathbf{x}} + \delta \mathbf{x}$). Substituting back and considering first-order approxmation yields to:

$$
f(\bar{\mathbf{x}} + \delta \mathbf{x}) \approx f(\bar{\mathbf{x}}) + \left. \frac{\partial f(\mathbf{x})}{\partial \mathbf{x}} \right|_{\mathbf{x} = \bar{\mathbf{x}}} \delta \mathbf{x}.
$$


https://stats.stackexchange.com/questions/5782/variance-of-a-function-of-one-random-variable