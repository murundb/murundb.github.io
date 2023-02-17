# Angular Rate

The angular rate vector, $\boldsymbol{\omega}^{\gamma}_{\beta \alpha}$, is the rate of rotation of the frame $F_\alpha$ axes with respect
to the frame $F_\beta$ axes, resolved about the frame $F_\gamma$ axes. The rotation is within the plane perpendicular to the angular rate vector, and 
the angular rate vector direction follows the right-hand rule. Reversing the sign of the angular rate vector results in the transposed version:

$$
\boldsymbol{\omega}^{\gamma}_{\beta \alpha} = -\boldsymbol{\omega}^{\gamma}_{\alpha \beta}. \label{3.1}
$$

Angular rates resolved about the same axes can be added given the object frame of one angular rate is the same as the reference frame of the other:

$$
\boldsymbol{\omega}^{\gamma}_{\beta \alpha} = \boldsymbol{\omega}^{\gamma}_{\beta \delta} + \boldsymbol{\omega}^{\gamma}_{\delta \alpha}.\label{3.2}
$$

The resolving axes can be changed by using the transformation matrix:

$$
\boldsymbol{\omega}^{\gamma}_{\beta \alpha} = \mathbf{R}^{\gamma}_{\delta} \boldsymbol{\omega}^{\delta}_{\beta \alpha}.\label{3.3}
$$

Given:

$$
\boldsymbol{\Omega}^{\gamma}_{\beta \alpha} = \left[ \boldsymbol{\omega}^{\gamma}_{\beta \alpha} \right]_\times = 
\left[
\begin{array}{ccc}
0 & -\omega^{\gamma}_{\beta \alpha, 3} & \omega^{\gamma}_{\beta \alpha, 2} \\
\omega^{\gamma}_{\beta \alpha, 3} & 0 & -\omega^{\gamma}_{\beta \alpha, 1} \\
-\omega^{\gamma}_{\beta \alpha, 2} & -\omega^{\gamma}_{\beta \alpha, 1} & 0 \\
\end{array}
\right].\label{3.4}
$$

The resolving axes of the skew-symmetric matrix above can be converted via:

$$
\boldsymbol{\Omega}^{\gamma}_{\beta \alpha} = \mathbf{R}^{\gamma}_{\delta} \boldsymbol{\Omega}^{\delta}_{\beta \alpha} \mathbf{R}^{\delta}_{\gamma}. \label{3.5}
$$

The time derivative of a coordinate transformation matrix was previously computed when we derived Rodrigues' formula. Using derivative definition:

$$
\dot{\mathbf{R}}^{\alpha}_{\beta}(t) = \lim_{\delta t \rightarrow 0} \left( \frac{\mathbf{R}^{\alpha}_{\beta}(t + \delta t) - \mathbf{R}^{\alpha}_{\beta} (t)}{\delta t} \right). \label{3.6}
$$

If $F_{\alpha}$ is rotating with respect to a stationary reference frame, $F_\beta$, then:

$$
\mathbf{R}^{\alpha}_{\beta}(t + \delta t) = \mathbf{R}^{\alpha(t + \delta t)}_{\alpha(t)} \mathbf{R}^{\alpha}_{\beta}(t). \label{3.7}
$$

Since the rotation of $F_{\alpha}$ from $t$ to $t + \delta t$ is infinitesimal, using small angle approximation:

$$
\begin{align}
\mathbf{R}^{\alpha}_{\beta} (t + \delta t) &= (\mathbf{I}_3 - \left[ \boldsymbol{\psi}_{\alpha(t) \alpha(t + \delta t)}  \right]_\times) \mathbf{R}^{\alpha}_{\beta}(t) \\ 
&= (\mathbf{I}_3 - \delta t \left[\omega^{\alpha}_{\beta \alpha} \right]_\times) \mathbf{R}^{\alpha}_{\beta}(t) \\
&= \left(\mathbf{I}_3 - \delta t \boldsymbol{\Omega}^{\alpha}_{\beta \alpha} \right) \mathbf{R}^{\alpha}_{\beta}(t). \label{3.8}
\end{align}
$$

Substituting equation ($\ref{3.8}$) into equation ($\ref{3.6}$), we get:

$$
\begin{align}
\dot{\mathbf{R}}^{\alpha}_{\beta}(t) &= \lim_{\delta t \rightarrow 0} \left( \frac{ \left(\mathbf{I}_3 - \delta t \boldsymbol{\Omega}^{\alpha}_{\beta \alpha} \right) \mathbf{R}^{\alpha}_{\beta}(t) - \mathbf{R}^{\alpha}_{\beta}(t)}{\delta t} \right) \\ 
&= - \boldsymbol{\Omega}^{\alpha}_{\beta \alpha} \mathbf{R}^{\alpha}_{\beta} (t) \\
&= -\mathbf{R}^{\alpha}_{\beta} (t) \boldsymbol{\Omega}^{\alpha}_{\beta \alpha},
\end{align} \label{3.9}
$$

which was derived earlier in axis-angle representation.

Note that if the above steps are repeated under the assumption that $F_\beta$ is rotating and $F_\alpha$ is stionary, the result 
$\dot{\mathbf{R}}^\alpha_\beta = -\mathbf{R}^\alpha_\beta \boldsymbol{\Omega}^\beta_{\beta \alpha}$ is obtained. However, the results are equivalent. In general:

$$
\begin{align}
\dot{\mathbf{R}}^\alpha_\beta &= - \mathbf{R}^\alpha_\beta \boldsymbol{\Omega}^\beta_{\beta \alpha} = \mathbf{R}^\alpha_\beta \boldsymbol{\Omega}^\beta_{\alpha \beta} \\
&= -\boldsymbol{\Omega}^\alpha_{\beta \alpha} \mathbf{R}^\alpha_\beta = \boldsymbol{\Omega}^\alpha_{\alpha \beta} \mathbf{R}^\alpha_\beta.
\end{align}
$$