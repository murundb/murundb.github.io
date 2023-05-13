## Overview

A good read on computing derivative of a 3D rotation is Gallego, G., Yezzi, A., [**"A compact formula for the derivative of a 3D rotation in exponential coordinates"**](https://arxiv.org/abs/1312.0788).

## Baker–Campbell–Hausdorff Formula

The BCH formula provides a solution to $\mathbf{C}$ to the equation:

$$
\exp(\mathbf{A}) \exp(\mathbf{B}) = \exp(\mathbf{C}),
$$

for possible noncommutative $\mathbf{A}$ and $\mathbf{B}$ in the Lie Algebra of a Lie group. The first few terms of the series are:

$$
\ln \left( \exp{(\mathbf{A})} \exp{(\mathbf{B}}) \right) = \mathbf{A} + \mathbf{B} + \frac{1}{2} \left[ \mathbf{A}, \mathbf{B} \right] + \frac{1}{12} \left[ \mathbf{A}, \left[ \mathbf{A}, \mathbf{B} \right] \right] - 
\frac{1}{12} \left[ \mathbf{B}, \left[ \mathbf{A}, \mathbf{B} \right] \right] + \ldots,
$$

where $\left[, \right]$ is the Lie brackets.

## BCH Perturbation

### Rotation in Lie Group to Lie Algebra

Suppose we have a rotation $\mathbf{R}$ with Lie algebra $\boldsymbol{\rho}$. Let $\Delta \mathbf{R}$ with Lie algebra $\Delta \boldsymbol{\rho}$ be a small perturbation to the left. On Lie group $SO(3)$, the yielding rotation result is $\Delta \mathbf{R} \mathbf{R}$. On Lie algebra, via BCH, we have $\mathbf{J}^{-1}_l(\boldsymbol{\rho}) \Delta \boldsymbol{\rho} + \boldsymbol{\rho}$. In order words:

$$
\Delta \mathbf{R} \mathbf{R} = e^{\left[ \Delta \boldsymbol{\rho} \right]_\times} e^{\left[ \boldsymbol{\rho} \right]_\times} = e^{\left[ \mathbf{J}^{-1}_l(\boldsymbol{\rho}) \Delta \boldsymbol{\rho} + \boldsymbol{\rho} \right]_\times}.
$$

### Rotation in Lie Algebra to Lie Group

Suppose we do addition on Lie algbera by perturbing $\boldsymbol{\rho}$ with $\Delta \boldsymbol{\rho}$. Then the multiplication on the Lie group will be:

$$
e^{\left[\boldsymbol{\rho} + \Delta \boldsymbol{\rho} \right]_\times} = 
e^{\left[\mathbf{J}_l \Delta \boldsymbol{\rho} \right]_\times} e^{\left[ \boldsymbol{\rho} \right]_\times} = e^{\left[ \boldsymbol{\rho} \right]_\times} e^{\left[\mathbf{J}_r \Delta \boldsymbol{\rho} \right]_\times}.
$$

## Derivative of a Rotation Matrix via Derivitive Model

Let $\mathbf{R} \in SO(3)$ be a rotation matrix and $\mathbf{p} \in \mathbb{R}^3$ be a point in Euclidean space that is to be rotated by $\mathbf{R}$. The derivative of the rotated point coordinates by the rotation is:

$$
\frac{\partial (\mathbf{R} \mathbf{p})}{\partial \mathbf{R}}.
$$

Note here that the result is a tensor. Since $SO(3)$ does not have an addition operator, it cannot be calculated by the derivative definition. Let the Lie algebra corresponding to $\mathbf{R}$ be $\boldsymbol{\rho}$. Then we have:

$$
\frac{\partial (\mathbf{R} \mathbf{p})}{\partial \mathbf{R}} = \frac{\partial \left( e^{\left[ \boldsymbol{\rho} \right]_\times} \mathbf{p} \right)}{\partial \boldsymbol{\rho}}.
$$

Using the definition of derivative:

$$
\begin{align}
\frac{\partial \left( e^{\left[ \boldsymbol{\rho} \right]_\times} \mathbf{p} \right)}{\partial \boldsymbol{\rho}} &= \lim_{\delta \boldsymbol{\rho} \rightarrow 0} 
\frac{e^{\left[ \boldsymbol{\rho} + \delta \boldsymbol{\rho} \right]_\times} \mathbf{p} - e^{\left[ \boldsymbol{\rho} \right]_\times} \mathbf{p}}{\delta \boldsymbol{\rho}} \\
&= \lim_{\delta \boldsymbol{\rho} \rightarrow 0} 
\frac{e^{\left[ \mathbf{J} \delta \boldsymbol{\rho} \right]_\times} e^{\left[ \boldsymbol{\rho} \right]_\times} \mathbf{p} - e^{\left[ \boldsymbol{\rho} \right]_\times} \mathbf{p}}{\delta \boldsymbol{\rho}} \\
&= \lim_{\delta \boldsymbol{\rho} \rightarrow 0} 
\frac{\left(\mathbf{I} + \left[ \mathbf{J}_l \delta \boldsymbol{\rho} \right]_\times \right) e^{\left[ \boldsymbol{\rho} \right]_\times} \mathbf{p} - e^{\left[ \boldsymbol{\rho} \right]_\times} \mathbf{p}}{\delta \boldsymbol{\rho}} \\
&= \lim_{\delta \boldsymbol{\rho} \rightarrow 0} 
\frac{\left[ \mathbf{J}_l \delta \boldsymbol{\rho} \right]_\times  e^{\left[ \boldsymbol{\rho} \right]_\times} \mathbf{p}}{\delta \boldsymbol{\rho}} \\
&= \lim_{\delta \boldsymbol{\rho} \rightarrow 0} 
\frac{-\left[ e^{\left[ \boldsymbol{\rho} \right]_\times} \mathbf{o} \right]_\times \mathbf{J}_l \delta \boldsymbol{\rho}}{\delta \boldsymbol{\rho}} \\
&= - \left[ \mathbf{R} \mathbf{p} \right]_\times \mathbf{J}_l.
\end{align}
$$

## Derivative of a Rotation Matrix via Perturbation Model




<!-- ## Derivative of a Rotation Matrix

Given a rotation vector $\boldsymbol{\rho} = \theta \hat{\mathbf{e}}$, we have formulated Rodrigues' formula previously as follows:

$$
\begin{align}
\mathbf{R}(\boldsymbol{\rho}) = \mathbf{R}(\hat{\mathbf{e}}, \theta)  &= \mathbf{e}^{\left[ \boldsymbol{\rho} \right]_\times} = \mathbf{I} + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times + \left(1 - \cos \theta \right) \left[ \hat{\mathbf{e}} \right]^2_\times \\
&= \mathbf{I} + \frac{\sin \theta}{\theta} \left[ \boldsymbol{\rho} \right]_\times + \frac{1 - \cos \theta}{\theta^2} \left[ \boldsymbol{\rho} \right]^2_\times.
\end{align}
$$

Derivative of a rotation matrix with respect to a variable of interest (whether it is time or a rotation vector component, $\rho_1$ etc.) can be expressed as:

$$
\frac{\partial}{\partial x} \mathbf{R}(\boldsymbol{\rho}) = \left[ \mathbf{J} \frac{\partial \boldsymbol{\rho}}{\partial x} \right]_\times \mathbf{R}(\boldsymbol{\rho}),
$$

where $\mathbf{J}$ is the Jacobian matrix that is derived from the $SE(3)$ exponential map matrix:

$$
\mathbf{J} = \mathbf{I} + \frac{1 - \cos \theta}{\theta^2} \left[ \boldsymbol{\rho} \right]_\times + \frac{\theta - \sin \theta}{\theta^3} \left[ \boldsymbol{\rho} \right]^2_\times.
$$ -->

