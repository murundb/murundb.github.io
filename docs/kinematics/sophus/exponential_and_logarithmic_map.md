# Exponential and Logarithmic Map

## Definition

Elements from Lie Groups $SO(3)$ and $SE(3)$ can be related to elements from their Lie Algebras $\mathfrak{so}(3)$ and $\mathfrak{se}(3)$ through exponential and logarithmic mappings as shown in Figure 1.

<figure markdown>
  ![Lie summary](/assets/images/kinematics/light/lie_summary.png#only-light){ width="1000" }
  ![Lie summary](/assets/images/kinematics/dark/lie_summary.png#only-dark){ width="1000" }
  <figcaption>Figure 1 Relationship between Lie group and Lie algebra</figcaption>
</figure>

## Exponential Map

The expononential map takes elements in the Lie algebra to elements in the Lie group. Intuitively, it walks along the group manifold in the differential direction specified by the tangent vector in the Lie algebra. Let $\mathbf{R}$ be a time-varying rotation matrix. Since $\mathbf{R} \in SO(3)$, we know that $\mathbf{R} \mathbf{R}^T = \mathbf{I}_3$. Taking the derivative from both sides:

$$
\begin{align}
& \dot{ \mathbf{R}} \mathbf{R}^T + \mathbf{R} \dot{\mathbf{R}^T} = \mathbf{0}_{3} \\
& \dot{ \mathbf{R}} \mathbf{R}^T = -\mathbf{R} \dot{\mathbf{R}^T} = -\left( \dot{ \mathbf{R}} \mathbf{R}^T \right)^T \label{lie_algebra}
\end{align}
$$

Equation ($\ref{lie_algebra}$) implies that $\dot{ \mathbf{R}} \mathbf{R}^T$ is a [skew-symmetric matrix](https://en.wikipedia.org/wiki/Skew-symmetric_matrix). This further implies
that we can find $\boldsymbol{\omega} \in \mathbb{R}^3$, where:

$$
\left[ \boldsymbol{\omega} \right]_{\times} = \dot{ \mathbf{R}} \mathbf{R}^T
$$

Right multiplying both sides by $\mathbf{R}$:

$$
\begin{align}
\left[ \boldsymbol{\omega} \right]_{\times} \mathbf{R} &= \dot{ \mathbf{R}} \mathbf{R}^T \mathbf{R} \\
\left[ \boldsymbol{\omega} \right]_{\times} \mathbf{R} &= \dot{ \mathbf{R}},
\end{align}
$$ 

or equivalently:

$$
\dot {\mathbf{R}} =  \left[ \boldsymbol{\omega} \right]_\times \mathbf{R}. \label{ode}
$$

This is a linear time-varying ODE and a solution is nontrivial. Around the origin, we have $\mathbf{R}(0) = \mathbf{I}$ and the equation above reduces to $\dot {\mathbf{R}} = \left[ \boldsymbol{\omega} \right]_\times$. If $\boldsymbol{\omega}$ is constant, the differential equation can be time-integrated as:

$$
\mathbf{R}(t) = \mathbf{R}(0) \exp{\left(\left[ \boldsymbol{\omega} \right]_\times t\right)} = \mathbf{R}(0) \exp{\left(\left[ \boldsymbol{\omega} t \right]_\times \right)}.
$$

Since $\mathbf{R}(0)$ and $\mathbf{R}(t)$ are rotation matrices, the exponential term is also a rotation matrix. Defining $\boldsymbol{\rho} \triangleq \boldsymbol{\omega} \Delta t$ as the rotation vector encoding the full rotation over the period $\Delta t$ yields to:

$$
\mathbf{R} = \exp{\left(\left[ \boldsymbol{\rho} \right]_\times \right)}.
$$

If we define the roration vector as $\boldsymbol{\rho} = \theta \hat{\mathbf{e}}$, then the above expression can be expanded to:

$$
\mathbf{R} = \cos \theta \mathbf{I} + \left(1 - \cos \theta \right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T + \sin \theta \left[ \hat{\mathbf{e}} \right]_{\times}, \label{rodrigues_formula}
$$

which is called the **Rodrigues' Formula**.

??? cnote "**Proof**"

    The rotation matrix can be computed via exponential mapping:

    $$
    \begin{align}
    \mathbf{R} = e^{\left[\boldsymbol{\rho} \right]_\times} &= e^{ \left[ \theta \hat{\mathbf{e}} \right]_\times} = \sum^{\infty}_{k = 0} \frac{1}{k!} \left(\theta \left[\hat{\mathbf{e}} \right]_\times \right)^k \\
    &= \mathbf{I} + \theta \left[ \hat{\mathbf{e}} \right]_\times + \frac{\theta^2}{2} \left[ \hat{\mathbf{e}} \right]^2_\times + 
    \frac{\theta^3}{3!} \left[ \hat{\mathbf{e}} \right]^2_\times + \ldots \\
    &= \mathbf{I} + \left( \theta - \frac{\theta^3}{3!} + \ldots \right) \left[ \hat{\mathbf{e}} \right]_\times + \left( \frac{\theta^2}{2} - \frac{\theta^4}{4!} + \ldots \right) \left[ \hat{\mathbf{e}} \right]^2_\times \\
    &= \mathbf{I} + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times + \left(1 - \cos \theta \right) \left[ \hat{\mathbf{e}} \right]^2_\times \\
    &= \cos \theta \mathbf{I} + \left(1 - \cos \theta \right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times,
    \end{align}
    $$

    or simply:

    $$
    \mathbf{R} = \cos \theta \mathbf{I} + \left(1 - \cos \theta \right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T + \sin \theta \left[ \hat{\mathbf{e}} \right]_{\times}.
    $$

    Note that it does not matter in which frame $\hat{\mathbf{e}}$ is expressed since:

    $$
    \mathbf{R} \hat{\mathbf{e}} = \hat{\mathbf{e}}.
    $$


## Logarithmic Map

The logarithmic map is the inverse of the exponential map with:

$$
\begin{align}
\theta &= \arccos \left( \frac{\text{tr}\left( \mathbf{R} \right) - 1}{2 } \right) \\
\hat{\mathbf{e}} &= \frac{\left[ \mathbf{R} - \mathbf{R}^T \right]_{-\times}}{2 \sin \theta}.
\end{align}
$$
