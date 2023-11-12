# Perturbed Poses via Rotation Vector

Suppose a point $\mathbf{v}$ is transformed by $\mathbf{T} \in SE(3)$ with corresponding Lie algebra vector $\boldsymbol{\xi}$, and the result is $\mathbf{T} \mathbf{v}$. Note that $\mathbf{v}$ is in homogeneous coordinates. Left perturb $\mathbf{T}$ with $\Delta \mathbf{T} = \exp \left[ \Delta \boldsymbol{\xi} \right]_\times$ with Lie algebra vector $\Delta \boldsymbol{\xi} = \left[ \begin{array}{cc} \Delta \boldsymbol{\ell} & \Delta \boldsymbol{\rho} \end{array} \right]^T$. We have:

$$
\begin{align}
\frac{\partial \left( \mathbf{T} \mathbf{v} \right)}{\partial \Delta \boldsymbol{\xi}} &=
\lim_{\Delta \boldsymbol{\xi} \rightarrow \mathbf{0}}
\frac{\exp \left[ \Delta \boldsymbol{\xi} \right]_\times \exp \left[ \boldsymbol{\xi} \right]_\times \mathbf{v} - \exp\left[\boldsymbol{\xi} \right]_\times \mathbf{v}}{\Delta \boldsymbol{\xi}} \\
&=
\lim_{\Delta \boldsymbol{\xi} \rightarrow \mathbf{0}}
\frac{\left( \mathbf{I} + \left[ \Delta \boldsymbol{\xi} \right]_\times \right) \exp \left[ \boldsymbol{\xi} \right]_\times \mathbf{v} - \exp \left[ \boldsymbol{\xi} \right]_\times \mathbf{v}}{\Delta \boldsymbol{\xi}} \\
&=
\lim_{\Delta \boldsymbol{\xi} \rightarrow \mathbf{0}}
\frac{\left[ \Delta \boldsymbol{\xi} \right]_\times \exp \left[ \boldsymbol{\xi} \right]_\times \mathbf{v}}{\Delta \boldsymbol{\xi}} \\
&=
\lim_{\Delta \boldsymbol{\xi} \rightarrow \mathbf{0}}
\frac{\left[ \begin{array}{cc} \left[ \Delta \boldsymbol{\rho} \right]_\times & \Delta \boldsymbol{\ell} \\ \mathbf{0}^T & 0 \end{array} \right] \left[\begin{array}{c} \mathbf{R} \mathbf{v} + \mathbf{t} \\ 1 \end{array} \right]}{\Delta \boldsymbol{\xi}} \\
&=
\lim_{\Delta \boldsymbol{\xi} \rightarrow \mathbf{0}}
\frac{\left[ \begin{array}{cc} \left[\Delta \boldsymbol{\rho}  \right]_\times \left( \mathbf{R} \mathbf{v} + \mathbf{t} \right) + \Delta \boldsymbol{\ell} \\ \mathbf{0}^T \end{array} \right]}{\left[ \begin{array}{cc} \Delta \boldsymbol{\ell} & \Delta \boldsymbol{\rho} \end{array} \right]^T} \\
&=
\left[
\begin{array}{cc}
\mathbf{I} & -\left[ \mathbf{R} \mathbf{v} + \mathbf{t} \right]_\times \\
\mathbf{0}^T & \mathbf{0}^T
\end{array}
\right].
\end{align}
$$

