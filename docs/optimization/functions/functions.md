## Definition

A function $f: D \rightarrow R$ means it takes an argument element of its
domain $D$ and returns an element of its range $R$; in particular we can
have a domain of $f$ as a proper subset of the set $D$. Thus, the notation
$f: \mathbb{R}^n \rightarrow \mathbb{R}^m$ means that $f$ maps (some) 
$n$-vectors into $m$-vectors; it does not mean that $f(\mathbf{x})$ is defined for
every $\mathbf{x} \in \mathbb{R}^n$. For example, 
$f(\mathbf{x}) = \sum^n_{j = 1} |x_j|$, with $D = \mathbb{R}^n$ and $R = \mathbb{R}_{+}$. 

## Continuity
A function $f: D \rightarrow R$ is continuous at a point
$\mathbf{x}^0 \in D$, if for any sequence $\left\{ \mathbf{x}^i \right\}$
such that $\lim_{i \rightarrow \infty} \mathbf{x}^i = \mathbf{x}^0$, it holds
$\lim_{i \rightarrow \infty} f(\mathbf{x}^i) = f(\mathbf{x}^0)$. A function is 
continuous if it is continuous at every point in its domain.

Continuity can also be defined in terms of an epsilon and delta. A function
$f: D \rightarrow R$ is continuous at $\mathbf{x} \in D$ if for all 
$\epsilon > 0$ there exists a $\delta$ such that:

$$
\mathbf{y} \in D, \quad ||\mathbf{y} - \mathbf{x}||_2 \leq \delta \Rightarrow
||f(\mathbf{y}) - f(\mathbf{x})||_2 \leq \epsilon.
$$

Roughly, a function is continuous if it does not have any "jumps".

## Differentiability
A univariate function $f: \mathbb{R} \rightarrow \mathbb{R}$ is 
differentiable at a point $x_0$ if the derivative:

$$
f'(x_0) = \lim_{h \rightarrow 0} \frac{f(x_0 + h) - f(x_0)}{h}
$$

exists. A multivariate function $f: \mathbb{R}^n \rightarrow \mathbb{R}$ is 
differentiable at a point $\mathbf{x}^0$ if all partial derivatives:

$$
\left. \frac{\partial f(\mathbf{x})}{\partial x_j} \right|_{\mathbf{x} = \mathbf{x}^0}
= \lim_{h \rightarrow 0} \frac{f(\mathbf{x}^0 + h \mathbf{e}^j) - f(\mathbf{x}^0)}{h}, \quad j = 1, \dots, n
$$

exists and are continuous. A function $f$ is differentiable if it is differentiable at 
every point in ints domain. 

## Gradient
The gradient of $f$ at $\mathbf{x}^0$ is a vector
of the $n$-partial derivatives:

$$
\nabla f(\mathbf{x}^0) = 
\left[
\begin{array}{cccc}
\left. \frac{\partial f(\mathbf{x})}{\partial x_1} \right|_{\mathbf{x} = \mathbf{x}^0}
&
\left. \frac{\partial f(\mathbf{x})}{\partial x_2} \right|_{\mathbf{x} = \mathbf{x}^0} &
\dots &
\left. \frac{\partial f(\mathbf{x})}{\partial x_n} \right|_{\mathbf{x} = \mathbf{x}^0}
\end{array}
\right]^T.
$$

## Jacobian
For a scalar function, the Jacobian is the transpose of the gradient. The Jacobian of a scalar differentiable function $f$ at $\mathbf{x}^0$ is a vector:

$$
\mathbf{J} = 
\left[
\begin{array}{cccc}
\left. \frac{\partial f(\mathbf{x})}{\partial x_1} \right|_{\mathbf{x} = \mathbf{x}^0}
&
\left. \frac{\partial f(\mathbf{x})}{\partial x_2} \right|_{\mathbf{x} = \mathbf{x}^0} &
\dots &
\left. \frac{\partial f(\mathbf{x})}{\partial x_n} \right|_{\mathbf{x} = \mathbf{x}^0}
\end{array}
\right]
$$

Suppose $\mathbf{f}: \mathbb{R}^n \rightarrow \mathbb{R}^m$ is a vector function such that each of its first-order partial derivatives exist on $\mathbb{R}^n$. Then the Jacobian is $m \times n$ matrix:

$$
\mathbf{J} = 
\left[
\begin{array}{ccc}
\frac{\partial \mathbf{f}}{\partial x_1} & \ldots & \frac{\partial \mathbf{f}}{\partial x_n}
\end{array}
\right] = 
\left[
\begin{array}{c}
\nabla^T f_1 \\
\vdots \\
\nabla^T f_m
\end{array}
\right] = 
\left[
\begin{array}{ccc}
\frac{\partial f_1}{\partial x_1} & \ldots & \frac{\partial f_1}{\partial x_n} \\
\vdots & \ddots & \vdots \\
\frac{\partial f_m}{\partial x_1}   & \ldots & \frac{\partial f_m}{\partial x_n} 
\end{array}
\right].
$$

## Hessian
The Hessian of a (twice) differentiable scalar function $f$ at a point
$\mathbf{x}^0$ is an $n \times n$ matrix of second-order partial derivatives, i.e.:

$$
\nabla^2 f(\mathbf{x}^0) = 
\left[
\begin{array}{cccc}
\left. \frac{\partial^2 f(\mathbf{x})}{\partial x^2_1} \right|_{\mathbf{x} = \mathbf{x}^0}
&
\left. \frac{\partial^2 f(\mathbf{x})}{\partial x_1 \partial x_2} \right|_{\mathbf{x} = \mathbf{x}^0}
&
\dots
&
\left. \frac{\partial^2 f(\mathbf{x})}{\partial x_1 \partial x_n} \right|_{\mathbf{x} = \mathbf{x}^0}
\\
\left. \frac{\partial^2 f(\mathbf{x})}{\partial x_1 \partial x_2} \right|_{\mathbf{x} = \mathbf{x}^0}
&
\left. \frac{\partial^2 f(\mathbf{x})}{\partial x^2_2} \right|_{\mathbf{x} = \mathbf{x}^0}
&
\dots
&
\left. \frac{\partial^2 f(\mathbf{x})}{\partial x_2 \partial x_n} \right|_{\mathbf{x} = \mathbf{x}^0} \\
\vdots
& 
\vdots
&
\ddots
&
\vdots \\
\left. \frac{\partial^2 f(\mathbf{x})}{\partial x_1 \partial x_n} \right|_{\mathbf{x} = \mathbf{x}^0}
&
\left. \frac{\partial^2 f(\mathbf{x})}{\partial x_2 \partial x_n} \right|_{\mathbf{x} = \mathbf{x}^0}
&
\dots
&
\left. \frac{\partial^2 f(\mathbf{x})}{\partial x^2_n} \right|_{\mathbf{x} = \mathbf{x}^0}
\end{array}
\right]
$$

Suppose $\mathbf{f}: \mathbb{R}^n \rightarrow \mathbb{R}^m$. Then, the Hessian of $\mathbf{f}$ is a third-order tensor. It can be thought of as an array of $m$ Hessian matrices, one for each component of $\mathbf{f}$:

$$
\mathbf{H}(\mathbf{f}) = \left[ \mathbf{H}(f_1), \mathbf{H}(f_2), \ldots, \mathbf{H}(f_m) \right]. 
$$

This tensor degenerates to the usual Hessian matrix when $m = 1$.

## Taylor Series
Let $f: \mathbb{R}^n \rightarrow \mathbb{R}$ be a differentiable function
and $\mathbf{x}^0 \in \mathbb{R}^n$.
Then the first-order Taylor's series of $f$ at $\mathbf{x}^0$ is:

$$
f(\mathbf{x}) \approx f(\mathbf{x}^0) + \nabla f(\mathbf{x}^0)^T (\mathbf{x} - \mathbf{x}^0).
$$

The second-order Taylor's series of $f$ at $\mathbf{x}^0$ is:

$$
f(\mathbf{x}) \approx
f(\mathbf{x}^0) + \nabla f(\mathbf{x}^0)^T (\mathbf{x} - \mathbf{x}^0)
+ 
\frac{1}{2} (\mathbf{x} - \mathbf{x}^0)^T 
\nabla^2 f(\mathbf{x}^0)(\mathbf{x} - \mathbf{x}^0).
$$