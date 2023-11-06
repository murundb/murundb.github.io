# Perturbed Rotations

## Perturbation Theory

Given a scalar function, $f(\mathbf{x}) \in \mathbb{R}$ of some vector variable, $\mathbf{x} \in \mathbb{R}^n$, perturbing $\mathbf{x}$ slightly from its nominal value, $\bar{\mathbf{x}}$, by an amount $\delta \mathbf{x}$ will result a change in the function. Consider a standard Taylor series expansion of $f(\mathbf{x})$ around its nominal value, $\bar{\mathbf{x}}$:

$$
f(\mathbf{x}) \approx \left. f(\mathbf{x}) \right|_{\mathbf{x} = \bar{\mathbf{x}}} + \left. \nabla^T f(\mathbf{x}) \right|_{\mathbf{x} = \bar{\mathbf{x}}} \left( \mathbf{x} - \bar{\mathbf{x}} \right) + \frac{1}{2} \left( \mathbf{x} - \bar{\mathbf{x}} \right)^T \nabla^2 \left. f(\mathbf{x}) \right|_{\mathbf{x} = \bar{\mathbf{x}}} \left(\mathbf{x} - \bar{\mathbf{x}} \right) + \ldots.
$$

For convergence, we need $\mathbf{x} - \bar{\mathbf{x}}$ to be small in magnitude. Let $\delta \mathbf{x} = \mathbf{x} - \bar{\mathbf{x}}$ (or equivalently $\mathbf{x} = \bar{\mathbf{x}} + \delta \mathbf{x}$). Substituting back and considering only the first-order approxmation yields to:

$$
f(\bar{\mathbf{x}} + \delta \mathbf{x}) \approx f(\bar{\mathbf{x}}) + \left. \frac{\partial f(\mathbf{x})}{\partial \mathbf{x}} \right|_{\mathbf{x} = \bar{\mathbf{x}}} \delta \mathbf{x}.
$$

## Perturbing a Rotation Matrix

Let $\mathbf{R} = \exp \left( \left[ \boldsymbol{\rho} \right]_\times \right) \in SO(3)$ be a rotation matrix. Perturbing $\boldsymbol{\rho}$ by a little bit results in a new rotation matrix, $\mathbf{R}' = \exp \left( \left[ \boldsymbol{\rho} + \delta \boldsymbol{\rho} \right]_\times \right) \in SO(3)$. 

Most of the rotation representations involve constraints and thus are not easily perturbed (without enforcing the constraint). The notable exceptions are the Euler angle sets. Euler angles representation contains exactly three parameters, and thus each can be varied independently.

Consider perturbing $\mathbf{R}(\boldsymbol{\theta}) \mathbf{v}$ with respect to Euler angles $\boldsymbol{\theta}$, where $\mathbf{v}$ is an arbitrary constant vector. Let $\bar{\boldsymbol{\theta}} = (\bar{\theta}_1, \bar{\theta}_2. \bar{\theta}_3)$ be the nominal Euler angles and $\delta \boldsymbol{\theta} = \left(\delta \theta_1, \delta \theta_2, \delta \theta_3 \right)$ be the perturbation angles. Applying a first-order Taylor-series approximation and using identity 4:

$$
\begin{align}
\mathbf{R}(\bar{\boldsymbol{\theta}} + \delta{\boldsymbol{\theta}}) &\approx
\mathbf{R}(\bar{\boldsymbol{\theta}})+
\left.\frac{\partial (\mathbf{R}(\boldsymbol{\theta})\mathbf{v})}{\partial \boldsymbol{\theta}} \right|_{\bar{\boldsymbol{\theta}}} \delta \boldsymbol{\theta} \\
&= \mathbf{R}(\bar{\boldsymbol{\theta}}) \mathbf{v} +
\biggl. \biggl( \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times \mathbf{S} \left( \theta_2, \theta_3 \right) \biggr) \biggr|_{\bar{\boldsymbol{\theta}}} \ \delta \boldsymbol{\theta} \\
&= \mathbf{R}(\bar{\boldsymbol{\theta}}) \mathbf{v} + \left[ \mathbf{R}(\bar{\boldsymbol{\theta}}) \mathbf{v} \right]_\times \mathbf{S}(\bar{\theta}_2, \bar{\theta}_3) \delta \boldsymbol{{\theta}} \\
&= \mathbf{R}(\bar{\boldsymbol{\theta}}) \mathbf{v} - \left[ {S}(\bar{\theta}_2, \bar{\theta}_3) \delta \boldsymbol{{\theta}} \right]_\times \left(\mathbf{R}(\bar{\boldsymbol{\theta}}) \mathbf{v} \right) \\
&= \biggl( \mathbf{I} - \left[ \mathbf{R}(\bar{\theta}_2, \bar{\theta}_3) \delta \boldsymbol{\theta} \right]_\times \biggr) \mathbf{R}(\bar{\boldsymbol{\theta}}) \mathbf{v}.
\end{align}
$$

Since $\mathbf{v}$ is arbitrary, it can be dropped from both sides:

$$
\begin{align}
\mathbf{R}(\bar{\boldsymbol{\theta}} + \delta \boldsymbol{\theta}) &\approx \underbrace{\biggl( \mathbf{I} - \left[ \mathbf{S}(\bar{\theta}_2, \bar{\theta}_3) \delta \boldsymbol{\theta} \right]_\times \biggr)}_{\text{infinitesimal rotation matrix}} \mathbf{R}(\bar{\boldsymbol{\theta}}) \\
&= \left( \mathbf{I} - \left[\delta \boldsymbol{\phi} \right]_\times \right) \mathbf{R}(\bar{\boldsymbol{\theta}}),
\end{align}
$$

which is a perturbation of a rotation matrix (in terms of perturbations to its Euler angles) expressed as a linearized rotation.

## Example

Let $J$ be a scalar function:

$$
J(\boldsymbol{\theta}) = \mathbf{u}^T \mathbf{R}(\boldsymbol{\theta}) \mathbf{v},
$$

where $\mathbf{u}$ and $\mathbf{v}$ are arbitrary vectors. Linearizing the rotation yields to:

$$
J(\bar{\boldsymbol{\theta}} + \delta \boldsymbol{\theta}) \approx
\mathbf{u}^T \left( \mathbf{I} - \left[\delta \boldsymbol{\phi} \right]_\times \right) \mathbf{R}(\bar{\boldsymbol{\theta}}) \mathbf{v} = 
\underbrace{\mathbf{u}^T \mathbf{R}(\bar{\boldsymbol{\theta}}) \mathbf{v}}_{J(\bar{\boldsymbol{\theta}})} + \underbrace{\mathbf{u}^T \biggl[\mathbf{R}(\bar{\boldsymbol{\theta}}) \mathbf{v} \biggr]_\times \delta \boldsymbol{\phi}}_{\delta J(\delta \boldsymbol{\theta})},
$$

so that the linearized function is:

$$
\delta J(\delta \boldsymbol{\theta}) =
\underbrace{\biggl( \mathbf{u}^T \left[ \mathbf{R}(\bar{\boldsymbol{\theta}}) \mathbf{v} \right]_\times \mathbf{S}(\bar{\theta}_2, \bar{\theta}_3) \biggr) \delta \boldsymbol{\theta}}_{\text{const}},
$$

where the factor in front of $\delta \boldsymbol{\theta}$ is constant; in fact, it is $\left. \frac{\partial J}{\partial \boldsymbol{\theta}} \right|_{\bar{\boldsymbol{\theta}}}$, the Jacobian of J with respect to $\boldsymbol{\theta}$.
