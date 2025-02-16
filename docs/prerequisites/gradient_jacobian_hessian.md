# Gradient, Jacobian, Hessian

## Gradient

The gradient operator with respect to the $n$-vector $\mathbf{x}$ is defined as:

$$
\nabla_{\mathbf{x}} = \left[
\begin{array}{ccc}
\frac{\partial}{\partial x_1}
&
\cdots &
\frac{\partial}{\partial x_n}
\end{array}
\right]^T.
$$

The gradient of an $m$-dimensional vector-valued function $\mathbf{f}(\mathbf{x})$ is:

$$
\nabla_{\mathbf{x}} \mathbf{f}(\mathbf{x})^T =
\left[
\begin{array}{c}
\frac{\partial}{\partial x_1} \\
\vdots \\
\frac{\partial}{\partial x_n}
\end{array}
\right]
\left[
\begin{array}{ccc}
f_1(\mathbf{x}) & \cdots & f_m(\mathbf{x})
\end{array}
\right] =
\left[
\begin{array}{ccc}
\frac{\partial f_1}{\partial x_1} & \cdots & \frac{\partial f_m}{\partial x_1} \\
\vdots & \ddots & \vdots \\
\frac{\partial f_1}{\partial x_n} & \cdots & \frac{\partial f_m}{\partial x_n}
\end{array}
\right].
$$

## Jacobian

The transpose of the above is the $m \times n$ **Jacobian matrix**:

$$
\begin{align}
\mathbf{J}_{\mathbf{x}} \triangleq \mathbf{f}_{\mathbf{x}}(\mathbf{x}) \triangleq \frac{\partial \mathbf{f}}{\partial \mathbf{x}} = \left[ \nabla_{\mathbf{x}} \mathbf{f}(\mathbf{x})^T\right]^T =
\left[
\begin{array}{ccc}
\frac{\partial f_1}{\partial x_1} & \cdots & \frac{\partial f_1}{\partial x_n} \\
\vdots & \ddots & \vdots \\
\frac{\partial f_m}{\partial x_1} & \cdots & \frac{\partial f_m}{\partial x_n}
\end{array}
\right].
\end{align}
$$

## Hessian

The **Hessian** of a (twice) differentiable scalar function $\phi$ with respect to the $n$-vector $\mathbf{x}$ is a $n \times n$ symmetric matrix:

$$
\begin{align}
\mathbf{H}(\phi) \triangleq
\phi_{\mathbf{x}\mathbf{x}}(\mathbf{x}) \triangleq \frac{\partial^2 \phi(\mathbf{x})}{\partial \mathbf{x}^2} = \nabla_{\mathbf{x}} \nabla_{\mathbf{x}}^T \phi(\mathbf{x}) =
\left[
\begin{array}{ccc}
\frac{\partial^2 \phi}{\partial x_1 \partial x_1} & \cdots & \frac{\partial^2 \phi}{\partial x_1 \partial x_n} \\ \vdots & \ddots & \vdots \\
\frac{\partial^2 \phi}{\partial x_n \partial x_1} & \cdots & \frac{\partial^2 \phi}{\partial x_n \partial x_n}
\end{array}
\right]
\end{align}
$$

For $m$-dimensional vector-valued function $\mathbf{f}(\mathbf{x})$, the Hessian is a third-order tensor which is an array of $m$ Hessian matrices, one for each component of $\mathbf{f}$:

$$
\mathbf{H}(\mathbf{f}) \triangleq
\left[
\begin{array}{ccc}
\mathbf{H}(f_1) & \cdots & \mathbf{H}(f_m)
\end{array}
\right].
$$

This tensor degenerates to the usual Hessian matrix when $m = 1$.

## Useful Identities

