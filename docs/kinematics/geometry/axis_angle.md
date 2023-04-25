## Rodrigues' Formula via Geometry

<figure markdown>
  ![$z$-$y$-$x$ rotation from left to right (source Groves, p34)](/assets/images/kinematics/light/axis_angle.png#only-light){ width="300" }
  ![$z$-$y$-$x$ rotation from left to right (source Groves, p34)](/assets/images/kinematics/dark/axis_angle.png#only-dark){ width="300" }
  <figcaption>Figure 1 Rotation via rotation vector (source Szeliski, p46)</figcaption>
</figure>


Elements in $SO(3)$ are non-singular. One of the eigenvalues are always 1 with the other two being complex valued with magnitude of 1. This implies that there exists
a unit vector (eigenvector) $\hat{\mathbf{e}}$ that remain unchanged following the application of a transformation matrix $\mathbf{R}$. This unit vector is the axis of the rotation that can be used to represent a rotation matrix. A rotation can be represented by a rotation axis $\hat{\mathbf{e}}$ and an angle $\theta$, or equivalently by a 3D vector $\boldsymbol{\rho} = \theta \hat{\mathbf{e}}$. Given a vector $\mathbf{x} \in \mathbb{R}^3$, let $\mathbf{y}$ be the rotated vector via the axis-angle $\left( \hat{\mathbf{e}}, \theta \right)$ rotation as shown in Figure 1.

Project the vector $\mathbf{x}$ onto $\hat{\mathbf{e}}$:

$$
\begin{align}
\mathbf{x}_{||} = \hat{\mathbf{e}} \left( \hat{\mathbf{e}} \cdot \mathbf{x} \right) = \left( \hat{\mathbf{e}} \hat{\mathbf{e}}^T \right) \mathbf{x}.
\end{align}
$$

$\mathbf{x}_{||}$ is the component of $\mathbf{x}$ that is not affected by the rotation. The perpendicular residual of $\mathbf{x}$ from $\hat{\mathbf{e}}$ is:

$$
\mathbf{x}_{\perp} = \mathbf{x} - \mathbf{x}_{||} = \left(\mathbf{I} - \hat{\mathbf{e}} \hat{\mathbf{e}}^T \right) \mathbf{x}.
$$

Rotate the perpendicular residual by $90^o$:

$$
\mathbf{x}_{\times} = \hat{\mathbf{e}} \times \mathbf{x}_{\perp} = \hat{\mathbf{e}} \left( \mathbf{x} - \mathbf{x}_{||} \right) = \hat{\mathbf{e}} \times \mathbf{x} = \left[ \hat{\mathbf{e}} \right]_{\times} \mathbf{x},
$$

where $\left[ \ \cdot  \ \right]_{\times}$ is the skew operator. Rotate it again by another $90^o$:

$$
\mathbf{x}_{\times \times} = \hat{\mathbf{e}} \times \mathbf{x}_{\times} = \left[ \hat{\mathbf{e}} \right]^2_{\times} \mathbf{x} = -\mathbf{x}_{\perp}.
$$

Then the component of $\mathbf{x}$ that is not affected by the rotation becomes:

$$
\mathbf{x}_{||} = \mathbf{x} - \mathbf{x}_{\perp} = \mathbf{x} + \mathbf{x}_{\times \times} = \left( \mathbf{I} + \left[ \hat{\mathbf{e}} \right]^2_{\times} \right) \mathbf{x}.
$$

The in-plane component of $\mathbf{y}$ is then:

$$
\begin{align}
\mathbf{y}_{\perp} &= -\sin\left(90^o - \theta \right) \mathbf{x}_{\perp} + \cos \left(90^o - \theta\right) \mathbf{x}_{\times} \\ 
&= \cos \theta \mathbf{x}_{\perp} + \sin \theta \mathbf{x}_{\times} \\
&= \left(\sin \theta \left[ \hat{\mathbf{e}} \right]_\times - \cos \theta \left[ \hat{\mathbf{e}} \right]^2_\times \right) \mathbf{x}.
\end{align}
$$

Then we can compute $\mathbf{y}$ as:

$$
\mathbf{y} = \mathbf{y}_{\perp} + \mathbf{y}_{||} = \left( \mathbf{I} + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times + \left(1 - \cos \theta \right) \left[ \hat{\mathbf{e}} \right]^2_\times \right) \mathbf{x} = \mathbf{R}(\hat{\mathbf{e}}, \theta) \mathbf{x},
$$

where:

$$
\begin{align}
\mathbf{R}(\hat{\mathbf{e}}, \theta) &= \mathbf{I} + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times + \left(1 - \cos \theta \right) \left[ \hat{\mathbf{e}} \right]^2_\times \\
&= \cos \theta \mathbf{I} + \left(1 - \cos \theta \right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times,
\end{align}
$$

is the **Rodrigues's formula**. Note that we used:

$$
\begin{align*}
\left[ \hat{\mathbf{e}} \right]^2_\times = 
\left[
\begin{array}{ccc}
-e^2_2 - e^2_3 & e_1 e_2 & e_1 e_3 \\
e_1 e_2 & -e^2_1 - e^2_3 & e_2 e_3 \\
e_1 e_3 & e_2 e_3 & -e^2_1 - e^2_2
\end{array}
\right] = \hat{\mathbf{e}} \hat{\mathbf{e}}^T - \mathbf{I},
\end{align*}
$$

and

$$
\left[ \hat{\mathbf{e}} \right]^3_\times = \left[ \hat{\mathbf{e}} \right]_\times \left( \hat{\mathbf{e}} \hat{\mathbf{e}}^T - \mathbf{I} \right) = \left[ \hat{\mathbf{e}} \right]_\times \hat{\mathbf{e}} \hat{\mathbf{e}}^T - \left[ \hat{\mathbf{e}} \right]_\times = - \left[ \hat{\mathbf{e}} \right]_\times.
$$

## Rodigues's Formula via Lie Algebra

### SO(3) Lie Group and Lie Algebra

Every Lie group has an associated Lie algebra, which is the **tangent space** around the identity element of the Lie group. Lie algebra for Lie group $SO(3)$ is $\mathfrak{so}(3)$ where:

$$
\mathfrak{so}(3) = \left\{ \left[ \boldsymbol{\rho} \right]_{\times} \in \mathbb{R}^{3 \times 3}\right\},
$$

and the exponential mapping of $\mathfrak{so}(3)$ is $SO(3)$. 

**Proof**. Let $\mathbf{R}\left(t\right)$ be a time-varying rotation matrix. Since $\mathbf{R}\left(t\right) \in SO(3)$, we know that $\mathbf{R}\left(t\right) \mathbf{R}\left(t\right)^T = \mathbf{I}_3$. Taking the derivative from both sides:

$$
\begin{align}
& \dot{ \mathbf{R}(t)} \mathbf{R}(t)^T + \mathbf{R}(t) \dot{\mathbf{R}(t)^T} = \mathbf{0}_{3} \\
& \dot{ \mathbf{R}(t)} \mathbf{R}(t)^T = -\mathbf{R}(t) \dot{\mathbf{R}(t)^T} = -\left( \dot{ \mathbf{R}(t)} \mathbf{R}(t)^T \right)^T \label{lie_algebra}
\end{align}
$$

Equation ($\ref{lie_algebra}$) implies that $\dot{ \mathbf{R}(t)} \mathbf{R}(t)^T$ is a [skew-symmetric matrix](https://en.wikipedia.org/wiki/Skew-symmetric_matrix). This further implies
that we can find $\boldsymbol{\rho}(t) \in \mathbb{R}^3$, where:

$$
\left[ \boldsymbol{\rho}(t) \right]_{\times} = \dot{ \mathbf{R}(t)} \mathbf{R}(t)^T
$$

Right multiplying both sides by $\mathbf{R}(t)$:

$$
\begin{align}
\left[ \boldsymbol{\rho}(t) \right]_{\times} \mathbf{R}(t) &= \dot{ \mathbf{R}(t)} \mathbf{R}(t)^T \mathbf{R}(t) \\
\left[ \boldsymbol{\rho}(t) \right]_{\times} \mathbf{R}(t) &= \dot{ \mathbf{R}(t)},
\end{align}
$$ 

or equivalently:

$$
\dot {\mathbf{R}(t)} =  \left[ \boldsymbol{\rho}(t) \right]_\times \mathbf{R}(t)
\left[
\begin{array}{ccc}
0 & -\rho_3 & \rho_2 \\
\rho_3 & 0 & -\rho_1 \\
-\rho_2 & \rho_1 & 0
\end{array}
\right] \mathbf{R}(t). \label{ode}
$$

This is a linear time-varying ODE and a solution is nontrivial. Given an initial condition $\mathbf{R}(0) = \mathbf{I}$, we have:

$$
\mathbf{R}(t) = \mathbf{e}^{\left[ \boldsymbol{\rho}_0 \right]_\times t},
$$

where $\boldsymbol{\rho}_0 = \boldsymbol{\rho}(t_0)$, which yields to:

$$
\frac{d \left( \mathbf{e}^{\left[ \boldsymbol{\rho}_0 \right]_\times t} \right)}{dt} = \mathbf{e}^{\left[ \boldsymbol{\rho}_0 \right]_\times t} \left[ \boldsymbol{\rho}_0 \right]_\times  = \left[ \boldsymbol{\rho}_0 \right]_\times  \mathbf{e}^{\mathbf{\left[ \boldsymbol{\rho}_0 \right]_\times t}}.
$$

**Proof**. Consider the basic definition of derivative:

$$
\frac{df}{dx} = \lim_{h \rightarrow 0} \frac{f(x + h) - f(x)}{h}.
$$

Let $f(\mathbf{A}t) = \mathbf{e}^{\mathbf{A}t}$. Using the derivative definition, we get:

$$
\begin{align}
\frac{d \left( \mathbf{e}^{\mathbf{A}t} \right)}{dt} &= \lim_{h \rightarrow 0} \frac{ \mathbf{e}^{\mathbf{A}t + \mathbf{A}h} - \mathbf{e}^{\mathbf{A}t} }{h} \\
&= \lim_{h \rightarrow 0} \frac{ \mathbf{e}^{\mathbf{A}t} \mathbf{e}^{\mathbf{A}h} - \mathbf{e}^{\mathbf{A}t} }{h} \\
&= \lim_{h \rightarrow 0} \frac{\mathbf{e}^{\mathbf{A}t} \left( \mathbf{e}^{\mathbf{A}h} - \mathbf{I} \right)}{h} \\
&= \mathbf{e}^{\mathbf{A}t} \lim_{h \rightarrow 0} \frac{ \mathbf{e}^{\mathbf{A}h} - \mathbf{I}}{h}. \label{2.3.7}
\end{align}
$$

[Matrix exponential](https://en.wikipedia.org/wiki/Matrix_exponential) can be expressed as a power series:

$$
\mathbf{e}^{\mathbf{A}} = \sum^{\infty}_{k=0} \frac{1}{k!} \mathbf{A}^k.
$$

Using this definition in $\ref{2.3.7}$, we get:

$$
\begin{align}
\frac{d \left( \mathbf{e}^{\mathbf{A}t} \right)}{dt} &= \mathbf{e}^{\mathbf{A}t} \lim_{h \rightarrow 0}\frac{1}{h} \left( \sum^{\infty}_{h = 0} \frac{1}{k!} (\mathbf{A}h)^k  - \mathbf{I}\right) \\
&= \mathbf{e}^{\mathbf{A}t}\lim_{h \rightarrow 0}\frac{1}{h} \left( \mathbf{I} + \mathbf{A}h + \frac{(\mathbf{A}h)^2}{2} + \ldots + (- \mathbf{I}) \right) \\
&= \mathbf{e}^{\mathbf{A}t} \mathbf{A}. \label{2.3.9}
\end{align}
$$

Another way to compute the derivative is to directly use the power series:

$$
\begin{align}
\frac{d \left( \mathbf{e}^{\mathbf{A}t} \right)}{dt} &= \frac{d}{dt} \left[ \mathbf{I} + \mathbf{A}t + \frac{\mathbf{A}^2 t^2}{2} + \frac{\mathbf{A}^3 t^3}{6} + \cdots \right] \\
&= \mathbf{A} + \mathbf{A}^2 t + \frac{\mathbf{A}^3 t^2}{2} + \cdots \\
&= \mathbf{A} \left[ \mathbf{I} + \mathbf{A}t + \frac{\mathbf{A}^2 t^2}{2} + \cdots \right] \\
&= \mathbf{A} \mathbf{e}^{\mathbf{A} t}. \label{2.3.10}
\end{align}
$$

Hence, from equations $\ref{2.3.9}$ and $\ref{2.3.10}$ provide:

$$
\frac{d \left( \mathbf{e}^{\mathbf{A}t} \right)}{dt} = \mathbf{e}^{\mathbf{A}t} \mathbf{A} = \mathbf{A} \mathbf{e}^{\mathbf{At}}.
$$

### Rotation Formula

Via exponential mapping, the **Rodrigues's formula** can be obtained as:

$$
\begin{align}
\mathbf{e}^{\left[\boldsymbol{\rho} \right]_\times} &= \mathbf{e}^{ \left[ \theta \hat{\mathbf{e}} \right]_\times} = \sum^{\infty}_{k = 0} \frac{1}{k!} \left(\theta \left[\hat{\mathbf{e}} \right]_\times \right)^k \\
&= \mathbf{I} + \theta \left[ \hat{\mathbf{e}} \right]_\times + \frac{\theta^2}{2} \left[ \hat{\mathbf{e}} \right]^2_\times + 
\frac{\theta^3}{3!} \left[ \hat{\mathbf{e}} \right]^2_\times + \ldots \\
&= \mathbf{I} + \left( \theta - \frac{\theta^3}{3!} + \ldots \right) \left[ \hat{\mathbf{e}} \right]_\times + \left( \frac{\theta^2}{2} - \frac{\theta^4}{4!} + \ldots \right) \left[ \hat{\mathbf{e}} \right]^2_\times \\
&= \mathbf{I} + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times + \left(1 - \cos \theta \right) \left[ \hat{\mathbf{e}} \right]^2_\times \\
&= \cos \theta \mathbf{I} + \left(1 - \cos \theta \right) \hat{\mathbf{e}} \hat{\mathbf{e}}^T + \sin \theta \left[ \hat{\mathbf{e}} \right]_\times.
\end{align}
$$


## Attitude Representation via Axis-Angle

Let $F_\alpha$ and $F_\beta$ be two coordinate frames. We know that the axis-angle or rotation vector, $\boldsymbol{\rho}_{\beta \alpha}$ is a 
vector whose direction is parallel with the axis of rotation and the magntitude $\theta_{\beta \alpha}$ is equal to the angle of rotation:

$$
\boldsymbol{\rho}_{\beta \alpha} = \theta_{\beta \alpha} \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha}
$$

The axis of rotation is the same when resolved in the axes of the two frames transformed between:

$$
\hat{\mathbf{e}}^{\alpha}_{\beta \alpha} = \hat{\mathbf{e}}^{\beta}_{\beta \alpha} = \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha}.
$$

**Rotation vectors are useful for interpolating attitudes as they are the only form of attitude that enables rotations to be linearly interpolated**. In previous section, we have
shown that the exponential mapping of $\mathfrak{so}(3)$ is $SO(3)$ and $\mathfrak{so}(3) = \left\{ \left[ \mathbf{\rho} \right]_{\times} \in \mathbb{R}^{3 \times 3}\right\}$.
Let $\mathbf{e}^{\alpha / \beta}_{\beta \alpha} = \left[
\begin{array}{ccc} 
e^{\alpha / \beta}_1 & e^{\alpha / \beta}_2 & e^{\alpha / \beta}_2
\end{array}
\right]^T$.


Applying Rodrigues's formula via exponential mapping yields to:

$$
\begin{align}
\mathbf{e}^{\left[ \boldsymbol{\rho}_{\beta \alpha} \right]_{\times}} &= \mathbf{e}^{ \left[ \theta_{\beta \alpha} \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]_{\times}}  = \sum^{\infty}_{k=0} \frac{1}{k!} (\theta_{\beta \alpha} \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]_{\times})^k \\
&= \mathbf{I} + \theta_{\beta \alpha} \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} + \frac{1}{2!} \left( \theta_{\beta \alpha} \right)^2 \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times}
+ \frac{1}{3!} \left( \theta_{\beta \alpha} \right)^3 \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]^3_{\times} + \cdots \\
&= \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \left( \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right)^T - \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times} 
    + \theta_{\beta \alpha} \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} + \frac{1}{2} \left( \theta_{\beta \alpha} \right)^2 \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times}
- \cdots \\
&=  \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \left( \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right)^T + \left( 
    \theta_{\beta \alpha} - \frac{1}{3!} \left(\theta_{\beta \alpha} \right)^3 + \frac{1}{5!} \left( \theta_{\beta \alpha} \right)^5 - \cdots
\right) \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} - 
\left(1 - \frac{1}{2!} \left( \theta_{\beta \alpha} \right)^2 + \frac{1}{4!} \left( \theta_{\beta \alpha} \right)^4 - \cdots \right) \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times} \\
&= \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times}
+ \mathbf{I} + \text{sin}\left( \theta_{\beta \alpha}\right) \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} - \text{cos} \left( \theta_{\beta \alpha} \right) \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times} \\
&= \left(1 - \text{cos}\left( \theta_{\beta \alpha} \right) \right) \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times} + \mathbf{I} + \text{sin}\left( \theta_{\beta \alpha} \right) \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} \\
&= \text{cos}\left( \theta_{\beta \alpha} \right) \mathbf{I} + \left( 1 - \text{cos}\left( \theta_{\beta \alpha} \right)  \right) \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \left( \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right)^T
+ \text{sin}\left( \theta_{\beta \alpha}\right) \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]_{\times}, \label{2.3.17}
\end{align}
$$

or simply:

$$
\mathbf{R}^{\beta}_{\alpha} = \text{cos} \left( \theta_{\beta \alpha}  \right) \mathbf{I} + 
\left( 1 - \text{cos} \left( \theta_{\beta \alpha} \right) \right) \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \left( \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right)^T + 
\text{sin} \left( \theta_{\beta \alpha} \right) \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]_{\times}. \label{2.3.18}
$$

The inverse conversion can be via logarithmic mapping fom $SO(3)$ to $\mathfrak{so}(3)$:

$$
\boldsymbol{\rho}_{\beta \alpha} = \left[ \text{ln}\left( \mathbf{R^{\beta}_{\alpha}} \right) \right]^{-1}_{\times} = \left[\sum^{\infty}_{k=0} \frac{(-1)^k}{k + 1} \left( \mathbf{R}^{\beta}_{\alpha} - \mathbf{I} \right)^{k+1} \right]^{-1}_{\times}.
$$

More easier way is to take the trace from both sides of <i>Rodrigues' formula</i>:

$$
\begin{align}
\text{tr}(\mathbf{R}^{\beta}_{\alpha}) &= \text{cos}\left(\theta_{\beta \alpha}\right) \text{tr}(\mathbf{I}) + \left( 1 - \text{cos} \left( \theta_{\beta \alpha} \right) \right) \text{tr}\left( \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \left( \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right)^T \right)
+ \text{sin}\left( \theta_{\beta \alpha} \right) \text{tr} \left( \left[ \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} \right) \\
&= 3 \text{cos} \left( \theta_{\beta \alpha} \right) + \left( 1 - \text{cos} \left( \theta_{\beta \alpha} \right) \right) \\
&= 1 + 2 \text{cos} \left( \theta_{\beta \alpha} \right).
\end{align}
$$

Hence, rotation angle can be computed as:

$$
\begin{align}
\theta_{\beta \alpha} &= \text{arccos} \left( \frac{\text{tr} \left( \mathbf{R}^{\beta}_{\alpha}\right) - 1}{2}  \right) \\
&= \text{arccos} \left( \frac{1}{2} \left( \mathbf{R}^{\beta}_{\alpha \ 1,1} + \mathbf{R}^{\beta}_{\alpha \ 2,2} + \mathbf{R}^{\beta}_{\alpha \ 1,1} - 1\right) \right)
\end{align}
$$

and the rotation axis can be calculated by finding the eigenvector or solving:

$$
\begin{align}
& \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} = \mathbf{R}^{\alpha}_{\beta} \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \\
& \left( \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \right)^T \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} = 1,
\end{align}
$$

which yields to two solutions with opposite signs. It is conventional to choose the solution:

$$
\mathbf{e}^{\alpha / \beta}_{\beta \alpha} = \frac{1}{2\text{sin}(\theta_{\beta \alpha})}
\left[
\begin{array}{c}
\mathbf{R}^{\alpha}_{\beta \ 2, 3} - \mathbf{R}^{\alpha}_{\beta \ 3, 2} \\ 
\mathbf{R}^{\alpha}_{\beta \ 3, 1} - \mathbf{R}^{\alpha}_{\beta \ 1, 3} \\
\mathbf{R}^{\alpha}_{\beta \ 1, 2} - \mathbf{R}^{\alpha}_{\beta \ 2, 1}.
\end{array}
\right].
$$

In summary, Rodrigues' formula in eq ($\ref{2.3.18}$) provides the conversion from axis-angle to transformation matrix:

$$
\begin{align}
\mathbf{R^{\alpha}_{\beta}} &= \mathbf{e}^{\left[-\boldsymbol{\rho}_{\beta \alpha} \right]_{\times}} \\
&= \mathbf{I}_3 - \frac{\text{sin}|\boldsymbol{\rho}_{\beta \alpha}|}{|\boldsymbol{\rho}_{\beta \alpha}|} \left[ \boldsymbol{\rho}_{\beta \alpha} \right]_{\times} + 
\frac{1 - \text{cos}|\boldsymbol{\rho}_{\beta \alpha}|}{|\boldsymbol{\rho}_{\beta \alpha}|^2} \left[ \boldsymbol{\rho}_{\beta \alpha} \right]^2_{\times}.
\end{align}
$$

The reverse transformation is:

$$
\begin{align}
\rho_{\beta \alpha} &= \frac{\theta_{\beta \alpha}}{2 \text{sin} (\theta_{\beta \alpha})}
\left[
\begin{array}{c}
\mathbf{R}^{\alpha}_{\beta \ 2,3} - \mathbf{R}^{\alpha}_{\beta \ 3,2} \\
\mathbf{R}^{\alpha}_{\beta \ 3,1} - \mathbf{R}^{\alpha}_{\beta \ 1,3} \\
\mathbf{R}^{\alpha}_{\beta \ 1,2} - \mathbf{R}^{\alpha}_{\beta \ 2,1}
\end{array}                
\right].
\end{align}
$$

## Infinitesimal Rotations

When the transformation matrix and rotation vector represent a small angular perturbation 
, we can use small angle approximation to get:

$$
\mathbf{R^{\beta}_{\alpha}}= 
\mathbf{e}^{\left[\boldsymbol{\rho}_{\beta \alpha} \right]_{\times}} \approx 
\sum^{\infty}_{k=0} \frac{\left[\boldsymbol{\rho}_{\beta \alpha} \right]^k_{\times}}{k!} \approx
\mathbf{I}_3 + \left[\boldsymbol{\rho}_{\beta \alpha} \right]_{\times}.
$$

Note that rotation vector and Euler angles are the same in the small angle approximation.