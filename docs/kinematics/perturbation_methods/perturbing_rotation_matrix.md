# Perturbation Methods

## Overview

Given a scalar function, $f(\mathbf{x}) \in \mathbb{R}$ of some vector variable, $\mathbf{x} \in \mathbb{R}^n$, then perturbing $\mathbf{x}$ slightly from its nominal value, $\bar{\mathbf{x}}$, by an amount $\delta \mathbf{x}$ will result a change in the function. Consider a standard Taylor series expansion of $f(\mathbf{x})$ around its nominal value, $\bar{\mathbf{x}}$:

$$
f(\mathbf{x}) \approx \left. f(\mathbf{x}) \right|_{\mathbf{x} = \bar{\mathbf{x}}} + \left. \nabla^T f(\mathbf{x}) \right|_{\mathbf{x} = \bar{\mathbf{x}}} \left( \mathbf{x} - \bar{\mathbf{x}} \right) + \frac{1}{2} \left( \mathbf{x} - \bar{\mathbf{x}} \right)^T \nabla^2 \left. f(\mathbf{x}) \right|_{\mathbf{x} = \bar{\mathbf{x}}} \left(\mathbf{x} - \bar{\mathbf{x}} \right) + \ldots.
$$

For convergence, we need $\mathbf{x} - \bar{\mathbf{x}}$ to be small in magnitude. Let $\delta \mathbf{x} = \mathbf{x} - \bar{\mathbf{x}}$ (or equivalently $\mathbf{x} = \bar{\mathbf{x}} + \delta \mathbf{x}$). Substituting back and considering first-order approxmation yields to:

$$
f(\bar{\mathbf{x}} + \delta \mathbf{x}) \approx f(\bar{\mathbf{x}}) + \left. \frac{\partial f(\mathbf{x})}{\partial \mathbf{x}} \right|_{\mathbf{x} = \bar{\mathbf{x}}} \delta \mathbf{x}.
$$

https://stats.stackexchange.com/questions/5782/variance-of-a-function-of-one-random-variable

## Perturbing a Rotation Matrix

Most of the rotation representations involve constraints and thus are not easily perturbed (without enforcing the constraint). The notable exceptions are the Euler angle sets. Euler angles representation contains exactly three parameters, and thus each can be varied independently.

Consider perturbing $\mathbf{R}(\boldsymbol{\theta}) \mathbf{v}$ with respect to Euler angles $\boldsymbol{\theta}$, where $\mathbf{v}$ is an arbitrary constant vector. Let $\bar{\boldsymbol{\theta}} = (\bar{\theta}_1, \bar{\theta}_2. \bar{\theta}_3)$ be the nominal Euler angles and $\delta \boldsymbol{\theta} = \left(\delta \theta_1, \delta \theta_2, \delta \theta_3 \right)$ be the perturbation angles. Applying a first-order Taylor-series approximation and using identity 4:

$$
\begin{align}
\mathbf{R}(\bar{\boldsymbol{\theta}} + \delta{\boldsymbol{\theta}}) &\approx
\mathbf{R}(\bar{\boldsymbol{\theta}})+
\left.\frac{\partial (\mathbf{R}(\boldsymbol{\theta})\mathbf{v})}{\partial \boldsymbol{\theta}} \right|_{\bar{\boldsymbol{\theta}}} \delta \boldsymbol{\theta} \\
&= \mathbf{R}\left(\bar{\boldsymbol{\theta}} \right) \mathbf{v} +
\biggl. \biggl( \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times \mathbf{S} \left( \theta_2, \theta_3 \right) \biggr) \biggr|_{\bar{\boldsymbol{\theta}}} \ \delta \boldsymbol{\theta} \\
&= \mathbf{R}\left(\bar{\boldsymbol{\theta}} \right) \mathbf{v} + \left[ \mathbf{R}(\bar{\boldsymbol{\theta}}) \mathbf{v} \right]_\times \mathbf{S}(\bar{\theta}_2, \bar{\theta}_3) \delta \boldsymbol{{\theta}} \\
&= \mathbf{R}\left(\bar{\boldsymbol{\theta}} \right) \mathbf{v} - \left[ {S}(\bar{\theta}_2, \bar{\theta}_3) \delta \boldsymbol{{\theta}} \right]_\times \left(\mathbf{R}(\bar{\boldsymbol{\theta}}) \mathbf{v} \right)
\end{align}
$$