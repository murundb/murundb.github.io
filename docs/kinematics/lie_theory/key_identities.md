Several identities need to be established before deriving rotation matrix derivative. Here, we have the Lie group $\mathbf{R} \in SO(3)$, the corresponding Lie algebra $\boldsymbol{\rho} = \theta \hat{\mathbf{e}}$, and vectors $\mathbf{r}, \mathbf{v}, \mathbf{s} \in \mathbb{R}^3$.

## Identity 1

$$
\left[ \mathbf{r} \right]_\times \mathbf{s} = -\left[ \mathbf{s} \right]_\times \mathbf{r}.
$$

## Identity 2

$$
\left[ \mathbf{R} \mathbf{s} \right]_\times = \mathbf{R} \left[ \mathbf{s} \right]_\times \mathbf{R}^T.
$$

## Identity 3

$$
\frac{ \partial \mathbf{R}}{\partial \theta} = - \left[ \hat{\mathbf{e}} \right]_\times \mathbf{R}.
$$

**Proof**

We have previously derived Rodrigues' formula:

$$
\mathbf{R} = \cos \theta \mathbf{I} + \left( 1- \cos \theta \right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T - \sin \theta \left[ \hat{\mathbf{e}} \right]_\times.
$$

The partial derivative of $\mathbf{R}$ with respect to the rotation angle is:

$$
\begin{align}
\frac{ \partial \mathbf{R}}{\partial \theta} &=
- \sin \theta \mathbf{I} + \sin \theta \hat{\mathbf{e}} \hat{\mathbf{e}}^T - \cos \theta \left[ \hat{\mathbf{e}} \right]_\times \\ 
&= \sin \theta \underbrace{\left( -\mathbf{I} + \hat{\mathbf{e}} \hat{\mathbf{e}}^T \right)}_{\left[ \hat{\mathbf{e}} \right]^2_\times} - \cos \theta \left[ \hat{\mathbf{e}} \right]_\times \\
&= -\cos \theta \left[ \hat{\mathbf{e}} \right]_\times - 
(1 - \cos \theta) \underbrace{\left[ \hat{\mathbf{e}} \right]_\times \hat{\mathbf{e}}}_{\mathbf{0}}  \hat{\mathbf{e}}^T + \sin \theta \left[ \hat{\mathbf{e}} \right]^2_\times \\
&= -\left[ \hat{\mathbf{e}} \right]_\times \underbrace{\left(\cos \theta \mathbf{I} + (1 - \cos \theta) \hat{\mathbf{e}} \hat{\mathbf{e}}^T - \sin \theta \left[ \hat{\mathbf{e}} \right]_\times \right)}_{\mathbf{R}} \\
&= - \left[ \hat{\mathbf{e}} \right]_\times \mathbf{R}.
\end{align}
$$

## Identity 4

Given an $\alpha-\beta-\gamma$ Euler sequence:

$$
\mathbf{R}(\boldsymbol{\theta}) = \mathbf{R}_{\gamma}(\theta_3) \mathbf{R}(\theta_2) \mathbf{R}_\alpha(\theta_1),
$$

where $\boldsymbol{\theta} = (\theta_1, \theta_2, \theta_3)$, we have:

$$
\begin{align}
\frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \boldsymbol{\theta}} &=
\left[
\begin{array}{ccc}
\frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_1} &
\frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_2} &
\frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_3}
\end{array}
\right] \\
&= \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times 
\underbrace{\left[
\begin{array}{ccc}
\mathbf{R}_\gamma (\theta_3) \mathbf{R}_{\beta} (\theta_2) \mathbf{I}_\alpha &
\mathbf{R}_\gamma (\theta_3) \mathbf{I}_\beta & \mathbf{I}_\gamma
\end{array}
\right]}_{\mathbf{S}(\theta_2, \theta_3)} \\
&= \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times  \mathbf{S}(\theta_2, \theta_3).
\end{align}
$$

**Proof**

Using Identity 1, for any principle-axis rotation about an axis $\alpha$, we have:

$$
\frac{\partial \mathbf{R}_{\alpha}(\theta)}{\partial \theta} = 
- \left[ \mathbf{I}_{\alpha} \right]_\times \mathbf{R}_{\alpha}(\theta),
$$

where $\mathbf{I}_\alpha$ is column $\alpha$ of the identity matrix. Then:

$$
\begin{align}
\frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_3} &= 
-\left[ \mathbf{I}_\gamma \right]_\times \mathbf{R}_\gamma (\theta_3) \mathbf{R}_\beta (\theta_2) \mathbf{R}_\alpha (\theta_1) \mathbf{v} = \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times \mathbf{I}_\gamma \\
\frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_2} &= 
-\mathbf{R}_\gamma (\theta_3) \left[ \mathbf{I}_\beta \right]_\times \mathbf{R}_\beta (\theta_2) \mathbf{R}_\alpha (\theta_1) \mathbf{v} = \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times \mathbf{R}_\gamma (\theta_3) \mathbf{I}_\beta \\
\frac{\partial \left( \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right)}{\partial \theta_3} &= 
-\mathbf{R}_\gamma (\theta_3) \mathbf{R}_\beta (\theta_2) \left[ \mathbf{I}_\alpha \right]_\times \mathbf{R}_\alpha (\theta_1) \mathbf{v} = \left[ \mathbf{R}(\boldsymbol{\theta}) \mathbf{v} \right]_\times \mathbf{R}_\gamma(\theta_3) \mathbf{R}_\beta (\theta_2) \mathbf{I}_\alpha.
\end{align}
$$