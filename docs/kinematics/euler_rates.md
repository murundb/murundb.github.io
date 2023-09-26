# Euler Rates

Recall that:

!!! cnote "Poisson's Equation"

    $$
    \begin{align}
    \dot{\mathbf{R}}^\alpha_\beta(t) &= - \mathbf{R}^\alpha_\beta \boldsymbol{\Omega}^\beta_{\beta \alpha} = \mathbf{R}^\alpha_\beta \boldsymbol{\Omega}^\beta_{\alpha \beta} \\
    &= -\boldsymbol{\Omega}^\alpha_{\beta \alpha} \mathbf{R}^\alpha_\beta = \boldsymbol{\Omega}^\alpha_{\alpha \beta} \mathbf{R}^\alpha_\beta.
    \end{align}
    $$

The inverse relationship is:

$$
\begin{alignat}{2}
\boldsymbol{\Omega}^\alpha_{\alpha \beta} &= \dot{\mathbf{R}}^\alpha_\beta \mathbf{R}^\beta_\alpha, \quad \boldsymbol{\Omega}^\alpha_{\beta \alpha} &&= -\dot{\mathbf{R}}^\alpha_\beta \mathbf{R}^\beta_\alpha \\
\boldsymbol{\Omega}^\beta_{\alpha \beta} &= \mathbf{R}^\beta_\alpha \dot{\mathbf{R}}^\alpha_\beta, \quad \boldsymbol{\Omega}^\beta_{\beta \alpha} &&= - \mathbf{R}^\beta_\alpha \dot{\mathbf{R}}^\alpha_\beta.
\end{alignat}
$$

Then we have:

$$
\begin{align}
\left[ \boldsymbol{\omega}^\alpha_{\beta \alpha} \right]_\times
&= -\dot{\mathbf{R}}^\alpha_\beta \left( \mathbf{R}^\alpha_\beta \right)^{-1} \\
&= -\dot{\mathbf{R}}^\alpha_\beta \left( \mathbf{R}^\alpha_\beta \right)^{T}. \label{1}
\end{align}
$$

For each rotation about a principle axis, we have:

$$
\begin{align}
-\dot{\mathbf{R}}_3 \mathbf{R}^T_3 &= \left[\mathbf{I}_3 \right]_\times \dot{\psi}_{\beta \alpha}, \\
-\dot{\mathbf{R}}_2 \mathbf{R}^T_2 &= \left[\mathbf{I}_2 \right]_\times \dot{\theta}_{\beta \alpha}, \\
-\dot{\mathbf{R}}_1 \mathbf{R}^T_1 &= \left[\mathbf{I}_1 \right]_\times \dot{\phi}_{\beta \alpha},
\end{align}
$$

where $\mathbf{I}_i$ os column $i$ of $\mathbf{I}_{3 \times 3}$.

Consider the 3-2-1 Euler angle sequence for frames, $F_\alpha$ and $F_\beta$, and its associated rotation matrix:

$$
\mathbf{R}^\alpha_\beta = \mathbf{R}^\alpha_\theta \mathbf{R}^\theta_\psi \mathbf{R}^\psi_\beta = \mathbf{R}_1 \mathbf{R}_2 \mathbf{R}_3.
$$

Eq ($\ref{1}$) can be written as:

$$
\begin{align}
\left[ \boldsymbol{\omega}^\alpha_{\beta \alpha} \right]_\times &=
-\overbrace{\mathbf{R}^\alpha_\theta \mathbf{R}^\theta_\psi \mathbf{R}^\psi_\beta}^\cdot \left( \mathbf{R}^\alpha_\theta \mathbf{R}^\theta_\psi \mathbf{R}^\psi_\beta \right)^T \\
&= -\left[\dot{\mathbf{R}}^\alpha_\theta \mathbf{R}^\theta_\psi \mathbf{R}^\psi_\beta + \mathbf{R}^\alpha_\theta \dot{\mathbf{R}}^\theta_\psi \mathbf{R}^\psi_\beta + \mathbf{R}^\alpha_\theta \mathbf{R}^\theta_\psi \dot{\mathbf{R}}^\psi_\beta \right] \mathbf{R}^\beta_\psi \mathbf{R}^\psi_\theta \mathbf{R}^\theta_\alpha \\
&= -\mathbf{R}^\alpha_\theta \mathbf{R}^\theta_\psi \dot{\mathbf{R}}^\psi_\beta \mathbf{R}^\beta_\psi \mathbf{R}^\psi_\theta \mathbf{R}^\theta_\alpha -
\mathbf{R}^\alpha_\theta \dot{\mathbf{R}}^\theta_\psi \mathbf{R}^\psi_\theta \mathbf{R}^\theta_\alpha - \dot{\mathbf{R}}^\alpha_\theta \mathbf{R}^\theta_\alpha \\
&= -\mathbf{R}_1 \mathbf{R}_2 \dot{\mathbf{R}}_3 \mathbf{R}^T_3 \mathbf{R}^T_2 \mathbf{R}^T_1 - \mathbf{R}_1 \dot{\mathbf{R}}_2 \mathbf{R}^T_2 \mathbf{R}^T_1 - \dot{\mathbf{R}}_1 \mathbf{R}^T_1 \\
&= \mathbf{R}_1 \mathbf{R}_2 \left[\mathbf{I}_3 \right]_\times \dot{\psi}_{\beta \alpha} \mathbf{R}^T_2 \mathbf{R}^T_1 +
\mathbf{R}_1 \left[\mathbf{I}_2 \right]_\times \dot{\theta}_{\beta \alpha} \mathbf{R}^T_1 +
\left[\mathbf{I}_1 \right]_\times \dot{\phi}_{\beta \alpha}.
\label{2}
\end{align}
$$

Using identity 2, eq ($\ref{2}$) becomes:

$$
\begin{align}
\left[ \boldsymbol{\omega}^\alpha_{\beta \alpha} \right]_\times &=
\left[ \mathbf{R}_1 \mathbf{R}_2 \mathbf{I}_3 \dot{\psi}_{\beta \alpha} \right]_\times +
\left[ \mathbf{R}_1 \mathbf{I}_2 \dot{\theta}_{\beta \alpha} \right]_\times +
\left[ \mathbf{I}_1 \dot{\phi}_{\beta \alpha} \right]_\times,
\end{align}
$$

which can be simplified to

$$
\begin{align}
\boldsymbol{\omega}^\alpha_{\beta \alpha} &=
\underbrace{\left[
\begin{array}{ccc}
\mathbf{I}_1 & \mathbf{R}_1 \mathbf{I}_2 & \mathbf{R}_1 \mathbf{R}_2 \mathbf{I}_3
\end{array}
\right]}_{\mathbf{S}(\phi_{\beta \alpha}, \theta_{\beta \alpha})}
\left[
\begin{array}{c}
\dot{\phi}_{\beta \alpha} \\
\dot{\theta}_{\beta \alpha} \\
\dot{\psi}_{\beta \alpha}
\end{array}
\right] \\
&= \mathbf{S}(\phi_{\beta \alpha}, \theta_{\beta \alpha}) \dot{\boldsymbol{\Psi}}_{\beta \alpha},
\end{align}
$$

which gives the angular velocity in terms of **Euler rates**. The matrix $\mathbf{S}$ will be:

$$
\mathbf{S}(\phi_{\beta \alpha}, \theta_{\beta \alpha}) =
\left[
\begin{array}{ccc}
1 & 0 & -\sin \theta_{\beta \alpha} \\
0 & \cos \phi_{\beta \alpha} & \sin \phi_{\beta \alpha} \cos \theta_{\beta \alpha} \\
0 & -sin \phi_{\beta \alpha} & \cos \phi_{\beta \alpha} \cos \theta_{\beta \alpha}
\end{array}
\right].
$$

The inverse relationship is:

$$
\begin{align}
\left[
\begin{array}{c}
\dot{\phi}_{\beta \alpha} \\
\dot{\theta}_{\beta \alpha} \\
\dot{\psi}_{\beta \alpha}
\end{array}
\right] &=
\left[
\begin{array}{ccc}
1 & \sin \phi_{\beta \alpha} \tan \theta_{\beta \alpha} & \cos \phi_{\beta \alpha} \tan \theta_{\beta \alpha} \\
0 & \cos \phi_{\beta \alpha} & -\sin \phi_{\beta \alpha} \\
0 & \sin \phi_{\beta \alpha} / \cos \theta_{\beta \alpha} & \cos \phi_{\beta \alpha} / \cos \theta_{\beta \alpha}
\end{array}
\right] \boldsymbol{\omega}^\alpha_{\beta \alpha}.
\end{align}
$$

Note that $\mathbf{S}^{-1}$ does not exist at $\theta_{\beta \alpha} = \pi / 2$, which is the singularity associasted with Euler series. Refer to Identity 4 for more details.

