# Time Derivative of Axes

Let $F_\alpha$ and $F_\beta$ be defined as:

$$
F_\alpha =
\left[
\begin{array}{ccc}
\hat{i}_\alpha & \hat{j}_\alpha & \hat{k}_\alpha
\end{array}
\right], \quad
F_\beta = 
\left[
\begin{array}{ccc}
\hat{i}_\beta & \hat{j}_\beta & \hat{k}_\beta
\end{array}
\right].
$$

Denote the **vector time derivative** as seen in $F_\alpha$ by $\left. \dot{\left( \ \right)} \right|_\alpha$ (or simply just resolved about the axes of $F_\alpha$) and that seen in $F_\beta$ by $\left. \dot{\left( \ \right)} \right|_\beta$. Then:

$$
\left. \dot{F}_\alpha \right|_\alpha = \mathbf{0}, \quad \left. \dot{F}_\beta \right|_\beta = \mathbf{0}.
$$

Let frame $F_\beta$ rotate with respect to frame $F_\alpha$ with $\boldsymbol{\omega}^\alpha_{\alpha \beta}$. Then:

$$
\begin{align}
F^T_\beta &= \mathbf{R}^\beta_\alpha F^T_\alpha, \\
\left. \dot{F}^T_\beta \right|_\alpha &= \dot{\mathbf{R}}^\beta_\alpha F^T_\alpha + \mathbf{R}^\beta_\alpha \underbrace{\left. \dot{F}^T_\alpha \right|_\alpha}_\mathbf{0} \\
&= -\boldsymbol{\Omega}^\alpha_{\beta \alpha} \mathbf{R}^\beta_\alpha  F^T_\alpha  \\
&= \boldsymbol{\Omega}^\alpha_{\alpha \beta} F^T_\beta \\
&= \left[ \boldsymbol{\omega}^\alpha_{\alpha \beta} \right]_\times F^T_\beta \\
&= \boldsymbol{\omega}^\alpha_{\alpha \beta} \times F^T_\beta.
\end{align}
$$

In order words:

$$
\left[
\begin{array}{ccc}
\left. \dot{\hat{i}}_\beta \right|_\alpha & \left. \dot{\hat{j}}_\beta \right|_\alpha & \left. \dot{\hat{k}}_\beta \right|_\alpha
\end{array}
\right]
= \boldsymbol{\omega}^\alpha_{\alpha \beta} \times
\left[
\begin{array}{ccc}
\hat{i}_\beta & \hat{j}_\beta & \hat{k}_\beta
\end{array}
\right],
$$

or equivalently:

$$
\begin{align}
\left. \dot{\hat{i}} \right|_\alpha &= \boldsymbol{\omega}^\alpha_{\alpha \beta} \times \hat{i}_\beta, \\
\left. \dot{\hat{j}} \right|_\alpha &= \boldsymbol{\omega}^\alpha_{\alpha \beta} \times \hat{j}_\beta, \\
\left. \dot{\hat{k}} \right|_\alpha &= \boldsymbol{\omega}^\alpha_{\alpha \beta} \times \hat{k}_\beta.
\end{align}
$$