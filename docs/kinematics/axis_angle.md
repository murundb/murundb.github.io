## Lie Algebra

Every Lie group has an associated Lie algebra, which is the **tangent space** around the identity element of the group. Let $\mathbf{R}\left(t\right)$ be a time-varying rotation matrix. Since $\mathbf{R}\left(t\right) \in SO(3)$, we know that $\mathbf{R}\left(t\right) \mathbf{R}\left(t\right)^T = \mathbf{I}_3$. Taking the derivative from both sides:

$$
\begin{align}
& \dot{ \mathbf{R}(t)} \mathbf{R}(t)^T + \mathbf{R}(t) \dot{\mathbf{R}(t)^T} = \mathbf{0}_{3} \\
& \dot{ \mathbf{R}(t)} \mathbf{R}(t)^T = -\mathbf{R}(t) \dot{\mathbf{R}(t)^T} = -\left( \dot{ \mathbf{R}(t)} \mathbf{R}(t)^T \right)^T \label{lie_algebra}
\end{align}
$$

Equation ($\ref{lie_algebra}$) implies that $\dot{ \mathbf{R}(t)} \mathbf{R}(t)^T$ is a [skew-symmetric matrix](https://en.wikipedia.org/wiki/Skew-symmetric_matrix). This further implies
that we can find $\mathbf{\rho}(t) \in \mathbb{R}^3$, where:

$$
\left[ \mathbf{\rho}(t) \right]_{\times} = \dot{ \mathbf{R}(t)} \mathbf{R}(t)^T
$$

Right multiplying both sides by $\mathbf{R}(t)$:

$$
\begin{align}
\left[ \mathbf{\rho}(t) \right]_{\times} \mathbf{R}(t) &= \dot{ \mathbf{R}(t)} \mathbf{R}(t)^T \mathbf{R}(t) \\
\left[ \mathbf{\rho}(t) \right]_{\times} \mathbf{R}(t) &= \dot{ \mathbf{R}(t)},
\end{align}
$$ 

or equivalently:

$$
\dot {\mathbf{R}(t)} = 
\left[
\begin{array}{ccc}
0 & -\rho_3 & \rho_2 \\
\rho_3 & 0 & -\rho_1 \\
-\rho_2 & \rho_1 & 0
\end{array}
\right] \mathbf{R}(t). \label{ode}
$$

Since equation ($\ref{ode}$) is a linear time-varying matrix ODE, solution is non-trivial. Consider the basic definition of derivative:

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

Equations $\ref{2.3.9}$ and $\ref{2.3.10}$ provide:

$$
\frac{d \left( \mathbf{e}^{\mathbf{A}t} \right)}{dt} = \mathbf{e}^{\mathbf{A}t} \mathbf{A} = \mathbf{A} \mathbf{e}^{\mathbf{At}},
$$

which shows together with $\ref{2.3.4}$ that Lie algebra for Lie group $SO(3)$ is $\mathfrak{so}(3)$ where:

$$
\mathfrak{so}(3) = \left\{ \left[ \mathbf{\rho} \right]_{\times} \in \mathbb{R}^{3 \times 3}\right\},
$$

and the exponential mapping of $\mathfrak{so}(3)$ is $SO(3)$. 

## Rotation Vector

Elements in $SO(3)$ are non-singular. One of the eigenvalues are always 1 with the other two being complex valued with magnitude of 1. This implies that there exists
a unit vector (eigenvector) $\mathbf{e}$ that remain unchanged following the application of a transformation matrix $\mathbf{R}$. This unit vector is the axis of the rotation that the transformation
matrix can be used to represent. Let $F_\alpha$ and $F_\beta$ be two coordinate frames. Axis-angle or rotation vector, $\mathbf{\rho}_{\beta \alpha}$ is a 
vector whose direction is parallel with the axis of rotation and the magntitude $\mu_{\beta \alpha}$ is equal to the angle of rotation:

$$
\mathbf{\rho}_{\beta \alpha} = \mu_{\beta \alpha} \mathbf{e}^{\alpha / \beta}_{\beta \alpha}
$$

The axis of rotation is the same when resolved in the axes of the two frames transformed between:

$$
\mathbf{e}^{\alpha}_{\beta \alpha} = \mathbf{e}^{\beta}_{\beta \alpha} = \mathbf{e}^{\alpha / \beta}_{\beta \alpha}.
$$

Rotation vectors are useful for interpolating attitudes as they are the only form of attitude that enables rotations to be linearly interpolated. In previous section, we have
shown that the exponential mapping of $\mathfrak{so}(3)$ is $SO(3)$ and $\mathfrak{so}(3) = \left\{ \left[ \mathbf{\rho} \right]_{\times} \in \mathbb{R}^{3 \times 3}\right\}$.
Let $\mathbf{e}^{\alpha / \beta}_{\beta \alpha} = \left[
\begin{array}{ccc} 
e^{\alpha / \beta}_1 & e^{\alpha / \beta}_2 & e^{\alpha / \beta}_2
\end{array}
\right]^T$. Then we have two properties for $\mathbf{e}^{\alpha / \beta}_{\beta \alpha}$:

$$
\begin{align}
\left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times} &= 
\left[ 
\begin{array}{ccc}
-(e^{\alpha / \beta}_2)^2 - (e^{\alpha / \beta}_3)^2 & e^{\alpha / \beta}_1 e^{\alpha / \beta}_2 & e^{\alpha / \beta}_1 e^{\alpha / \beta}_3 \\
e^{\alpha / \beta}_1 e^{\alpha / \beta}_2 & -(e^{\alpha / \beta}_1)^2 - (e^{\alpha / \beta}_3)^2 & e^{\alpha / \beta}_2 e^{\alpha / \beta}_3 \\
e^{\alpha / \beta}_1 e^{\alpha / \beta}_3 & e^{\alpha / \beta}_2 e^{\alpha / \beta}_3 & -(e^{\alpha / \beta}_1)^2 - (e^{\alpha / \beta}_2)^2 
\end{array}
\right] \\
&= \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \left( \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right)^T - \mathbf{I}, \label{2.3.15}
\end{align}
$$

and

$$
\begin{align}
\left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]^3_{\times}  
&=  \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} \left(  \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \left( \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right)^T - \mathbf{I} \right) \\
&= \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \left( \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right)^T - \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} \\
&= -\left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]_{\times}.
\end{align}
$$ 

Finally, we can express the exponential mapping as:

$$
\begin{align}
\mathbf{e}^{\left[ \mathbf{\rho}_{\beta \alpha} \right]_{\times}} &= \mathbf{e}^{ \left[ \mu_{\beta \alpha} \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]_{\times}}  = \sum^{\infty}_{k=0} \frac{1}{k!} (\mu_{\beta \alpha} \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]_{\times})^k \\
&= \mathbf{I} + \mu_{\beta \alpha} \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} + \frac{1}{2!} \left( \mu_{\beta \alpha} \right)^2 \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times}
+ \frac{1}{3!} \left( \mu_{\beta \alpha} \right)^3 \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]^3_{\times} + \cdots \\
&= \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \left( \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right)^T - \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times} 
    + \mu_{\beta \alpha} \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} + \frac{1}{2} \left( \mu_{\beta \alpha} \right)^2 \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times}
- \cdots \\
&=  \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \left( \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right)^T + \left( 
    \mu_{\beta \alpha} - \frac{1}{3!} \left(\mu_{\beta \alpha} \right)^3 + \frac{1}{5!} \left( \mu_{\beta \alpha} \right)^5 - \cdots
\right) \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} - 
\left(1 - \frac{1}{2!} \left( \mu_{\beta \alpha} \right)^2 + \frac{1}{4!} \left( \mu_{\beta \alpha} \right)^4 - \cdots \right) \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times} \\
&= \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times}
+ \mathbf{I} + \text{sin}\left( \mu_{\beta \alpha}\right) \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} - \text{cos} \left( \mu_{\beta \alpha} \right) \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times} \\
&= \left(1 - \text{cos}\left( \mu_{\beta \alpha} \right) \right) \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]^2_{\times} + \mathbf{I} + \text{sin}\left( \mu_{\beta \alpha} \right) \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} \\
&= \text{cos}\left( \mu_{\beta \alpha} \right) \mathbf{I} + \left( 1 - \text{cos}\left( \mu_{\beta \alpha} \right)  \right) \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \left( \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right)^T
+ \text{sin}\left( \mu_{\beta \alpha}\right) \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]_{\times}. \label{2.3.17}
\end{align}
$$

Equation $\ref{2.3.17}$ is known as **Rodrigues' formula** and provides conversion from the rotation vector to the transformation matrix:

$$
\mathbf{R}^{\alpha}_{\beta} = \text{cos} \left( \mu_{\beta \alpha}  \right) \mathbf{I} + 
\left( 1 - \text{cos} \left( \mu_{\beta \alpha} \right) \right) \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \left( \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right)^T + 
\text{sin} \left( \mu_{\beta \alpha} \right) \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]_{\times}. \label{2.3.18}
$$

The inverse conversion can be via logarithmic mapping fom $SO(3)$ to $\mathfrak{so}(3)$:

$$
\rho_{\beta \alpha} = \left[ \text{ln}\left( \mathbf{R^{\alpha}_{\beta}} \right) \right]^{-1}_{\times} = \left[\sum^{\infty}_{k=0} \frac{(-1)^k}{k + 1} \left( \mathbf{R}^{\alpha}_{\beta} - \mathbf{I} \right)^{k+1} \right]^{-1}_{\times}.
$$

More easier way is to take the trace from both sides of <i>Rodrigues' formula</i>:

$$
\begin{align}
\text{tr}(\mathbf{R}^{\alpha}_{\beta}) &= \text{cos}\left(\mu_{\beta \alpha}\right) \text{tr}(\mathbf{I}) + \left( 1 - \text{cos} \left( \mu_{\beta \alpha} \right) \right) \text{tr}\left( \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \left( \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right)^T \right)
+ \text{sin}\left( \mu_{\beta \alpha} \right) \text{tr} \left( \left[ \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right]_{\times} \right) \\
&= 3 \text{cos} \left( \mu_{\beta \alpha} \right) + \left( 1 - \text{cos} \left( \mu_{\beta \alpha} \right) \right) \\
&= 1 + 2 \text{cos} \left( \mu_{\beta \alpha} \right).
\end{align}
$$

Hence, rotation angle can be computed as:

$$
\begin{align}
\mu_{\beta \alpha} &= \text{arccos} \left( \frac{\text{tr} \left( \mathbf{R}^{\alpha}_{\beta}\right) - 1}{2}  \right) \\
&= \text{arccos} \left( \frac{1}{2} \left( \mathbf{R}^{\alpha}_{\beta \ 1,1} + \mathbf{R}^{\alpha}_{\beta \ 2,2} + \mathbf{R}^{\alpha}_{\beta \ 1,1} - 1\right) \right)
\end{align}
$$

and the rotation axis can be calculated by finding the eigenvector or solving:

$$
\begin{align}
& \mathbf{e}^{\alpha / \beta}_{\beta \alpha} = \mathbf{R}^{\alpha}_{\beta} \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \\
& \left( \mathbf{e}^{\alpha / \beta}_{\beta \alpha} \right)^T \mathbf{e}^{\alpha / \beta}_{\beta \alpha} = 1,
\end{align}
$$

which yields to two solutions with opposite signs. It is conventional to choose the solution:

$$
\mathbf{e}^{\alpha / \beta}_{\beta \alpha} = \frac{1}{2\text{sin}(\mu_{\beta \alpha})}
\left[
\begin{array}{c}
\mathbf{R}^{\alpha}_{\beta \ 2, 3} - \mathbf{R}^{\alpha}_{\beta \ 3, 2} \\ 
\mathbf{R}^{\alpha}_{\beta \ 3, 1} - \mathbf{R}^{\alpha}_{\beta \ 1, 3} \\
\mathbf{R}^{\alpha}_{\beta \ 1, 2} - \mathbf{R}^{\alpha}_{\beta \ 2, 1}.
\end{array}
\right]
$$

## Attitude Representation with Rotation Vector

*Rodrigues' formula* in equation ($\ref{2.3.18}$) provides the conversion from axis-angle to transformation matrix. In general:

$$
\begin{align}
\mathbf{R^{\alpha}_{\beta}} &= \mathbf{e}^{\left[-\mathbf{\rho}_{\beta \alpha} \right]_{\times}} \\
&= \mathbf{I}_3 - \frac{\text{sin}|\mathbf{\rho}_{\beta \alpha}|}{|\mathbf{\rho}_{\beta \alpha}|} \left[ \mathbf{\rho}_{\beta \alpha} \right]_{\times} + 
\frac{1 - \text{cos}|\mathbf{\rho}_{\beta \alpha}|}{|\mathbf{\rho}_{\beta \alpha}|^2} \left[ \mathbf{\rho}_{\beta \alpha} \right]^2_{\times}.
\end{align}
$$

The reverse transformation is:

$$
\begin{align}
\rho_{\beta \alpha} &= \frac{\mu_{\beta \alpha}}{2 \text{sin} (\mu_{\beta \alpha})}
\left[
\begin{array}{c}
\mathbf{R}^{\alpha}_{\beta \ 2,3} - \mathbf{R}^{\alpha}_{\beta \ 3,2} \\
\mathbf{R}^{\alpha}_{\beta \ 3,1} - \mathbf{R}^{\alpha}_{\beta \ 1,3} \\
\mathbf{R}^{\alpha}_{\beta \ 1,2} - \mathbf{R}^{\alpha}_{\beta \ 2,1}
\end{array}                
\right]
\end{align}
$$

## Small Angle Approximation

When the transformation matrix and rotation vector represent a small angular perturbation 
, we can use small angle approximation to get:

$$
\mathbf{R^{\beta}_{\alpha}}= 
\mathbf{e}^{\left[\rho_{\beta \alpha} \right]_{\times}} \approx 
\sum^{\infty}_{k=0} \frac{\left[\rho_{\beta \alpha} \right]_{\times}}{k!} \approx
\mathbf{I}_3 + \left[\rho_{\beta \alpha} \right]_{\times}
$$

Note that rotation vector and Euler angles are the same in the small angle approximation.