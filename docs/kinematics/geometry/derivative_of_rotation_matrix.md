## Overview

A good read on computing derivative of a 3D rotation is Gallego, G., Yezzi, A., [**"A compact formula for the derivative of a 3D rotation in exponential coordinates"**](https://arxiv.org/abs/1312.0788).


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

