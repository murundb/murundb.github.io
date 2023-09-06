# Matrix Calculus

## Gradient and Layout

Gradient of a function $f$ is given as a vector of the $n$-partial derivatives:

$$
\nabla f(\mathbf{x}) =
\left[
\begin{array}{cccc}
\frac{\partial f(\mathbf{x})}{\partial x_1}
&
\frac{\partial f(\mathbf{x})}{\partial x_2}
\dots &
\frac{\partial f(\mathbf{x})}{\partial x_n}
\end{array}
\right]^T.
$$

We will present here a matrix notation (numerator and denominator layout) for computing partial derivatives of a function with respect to multiple variables. Consider a vector function
$\mathbf{y}$ and a vector $\mathbf{x}$. The two commonly used layouts are:

1. **Numerator layout** which lays out according to $\mathbf{y}$ and $\mathbf{x}^T$.  
2. **Denominator layout** which lays out according to $\mathbf{y}^T$ and $\mathbf{x}$.

In general, to transform from one layout to another, we can just take the **transpose** of the result.

## Vector-by-Scalar

Consider a scalar $x$ and a column vector $\mathbf{y} = 
\left[
\begin{array}{cccc}
y_1 & y_2 & \ldots & y_m
\end{array}
\right]^T$.

### Numerator Layout

In numerator layout, the derivative will be a $m \times 1$ column vector:

$$
\frac{\partial \mathbf{y}}{\partial x} = 
\left[
\begin{array}{c}
\frac{\partial y_1}{\partial x} \\ 
\frac{\partial y_2}{\partial x} \\ 
\vdots \\ 
\frac{\partial y_n}{\partial x}
\end{array}
\right].
$$

This derivative is essentially the tangent vector of $\mathbf{y}$.

### Denominator Layout

In denominator, the derivative will be a $1 \times m$ row vector:

$$
\frac{\partial \mathbf{y}}{\partial x} = 
\left[
\begin{array}{cccc}
\frac{\partial y_1}{\partial x} &
\frac{\partial y_2}{\partial x} & 
\ldots &
\frac{\partial y_n}{\partial x}
\end{array}
\right].
$$

## Scalar-by-Vector

Consider a scalar $y$ and a column vector $\mathbf{x} = 
\left[
\begin{array}{cccc}
x_1 & x_2 & \ldots & x_n
\end{array}
\right]^T$.

### Numerator Layout

In numerator layout, the derivative will be a $1 \times n$ vector:

$$
\frac{\partial y}{\partial \mathbf{x}} = 
\left[
\begin{array}{cccc}
\frac{\partial y}{\partial x_1} & \frac{\partial y}{\partial x_2} 
& \ldots & \frac{\partial y}{\partial x_n}
\end{array}
\right].
$$

Note that the derivative is the **transpose** of the gradient vector.

### Denominator Layout

In denominator layout, the derivative will be a $n \times 1$ vector:

$$
\frac{\partial y}{\partial \mathbf{x}} = 
\left[
\begin{array}{cccc}
\frac{\partial y}{\partial x_1} \\ \frac{\partial y}{\partial x_2} 
\\ \vdots \\ \frac{\partial y}{\partial x_n}
\end{array}
\right].
$$

## Vector-by-Vector

Consider a column vector $\mathbf{y} = 
\left[
\begin{array}{cccc}
y_1 & y_2 & \ldots & y_m
\end{array}
\right]^T$ and a column vector $\mathbf{x} = 
\left[
\begin{array}{cccc}
x_1 & x_2 & \ldots & x_n
\end{array}
\right]^T$.

### Numerator Layout

In numerator layout, the derivative will be a $m \times n$ matrix:

$$
\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = 
\left[
\begin{array}{cccc}
\frac{\partial y_1}{\partial x_1} & \frac{\partial y_1}{\partial x_2} & \ldots & \frac{\partial y_1}{\partial x_n} \\
\frac{\partial y_2}{\partial x_1} & \frac{\partial y_2}{\partial x_2} & \ldots & \frac{\partial y_2}{\partial x_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial y_m}{\partial x_1} & \frac{\partial y_m}{\partial x_2} & \ldots & \frac{\partial y_m}{\partial x_n}
\end{array}
\right]
$$

This is the **Jacobian** matrix.

### Denominator Layout

In denominator layout, the derivative will be a $n \times m$ matrix:

$$
\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = 
\left[
\begin{array}{cccc}
\frac{\partial y_1}{\partial x_1} & \frac{\partial y_2}{\partial x_1} & \ldots & \frac{\partial y_m}{\partial x_1} \\
\frac{\partial y_1}{\partial x_2} & \frac{\partial y_2}{\partial x_2} & \ldots & \frac{\partial y_m}{\partial x_2} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial y_1}{\partial x_n} & \frac{\partial y_2}{\partial x_n} & \ldots & \frac{\partial y_m}{\partial x_n}
\end{array}
\right]
$$

## Scalar-by-Matrix

Consider a scalar function $y$ and a $p \times q$ matrix $\mathbf{X}$. We are interested in 
computing the derivative of $y$ with respect to $\mathbf{X}$.

### Numerator Layout

In numerator layout, the derivative will be a $q \times p$ matrix::

$$
\frac{\partial y}{\partial \mathbf{X}} = 
\left[
\begin{array}{cccc}
\frac{\partial y}{\partial x_{11}} & \frac{\partial y}{\partial x_{21}} & \ldots & \frac{\partial y}{\partial x_{p1}} \\ 
\frac{\partial y}{\partial x_{12}} & \frac{\partial y}{\partial x_{22}} & \ldots & 
\frac{\partial y}{\partial x_{p2}} \\ 
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial y}{\partial x_{1q}} & \frac{\partial y}{\partial x_{2q}} & \ldots & \frac{\partial y}{\partial x_{pq}}
\end{array}
\right]
$$

This is the **gradient matrix**.

### Denominator Layout

In denominator layout, the derivative will be a $p \times q$ matrix::

$$
\frac{\partial y}{\partial \mathbf{X}} = 
\left[
\begin{array}{cccc}
\frac{\partial y}{\partial x_{11}} & \frac{\partial y}{\partial x_{12}} & \ldots & \frac{\partial y}{\partial x_{1q}} \\ 
\frac{\partial y}{\partial x_{21}} & \frac{\partial y}{\partial x_{22}} & \ldots & 
\frac{\partial y}{\partial x_{2q}} \\ 
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial y}{\partial x_{p1}} & \frac{\partial y}{\partial x_{p2}} & \ldots & \frac{\partial y}{\partial x_{pq}}
\end{array}
\right]
$$

## Matrix-by-Scalar

Consider a $m \times n$ matrix function $\mathbf{Y}$ and a scalar $x$. We are interested in 
computing the derivative of $\mathbf{Y}$ with respect to $x$.

### Numerator Layout

In numerator layout, the derivative will be a $m \times n$ matrix:

$$
\frac{\partial \mathbf{Y}}{\partial x} = 
\left[
\begin{array}{cccc}
\frac{\partial y_{11}}{\partial x} & \frac{\partial y_{12}}{\partial x} & \ldots & \frac{\partial y_{1n}}{\partial x} \\ 
\frac{\partial y_{21}}{\partial x} & \frac{\partial y_{22}}{\partial x} & \ldots & \frac{\partial y_{2n}}{\partial x} \\ 
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial y_{m1}}{\partial x} & \frac{\partial y_{m2}}{\partial x} & \ldots & \frac{\partial y_{mn}}{\partial x} \\ 
\end{array}
\right]
$$

### Denominator Layout

In denominator layout, the derivative will be a $n \times m$ matrix:

$$
\frac{\partial \mathbf{Y}}{\partial x} = 
\left[
\begin{array}{cccc}
\frac{\partial y_{11}}{\partial x} & \frac{\partial y_{21}}{\partial x} & \ldots & \frac{\partial y_{m1}}{\partial x} \\ 
\frac{\partial y_{12}}{\partial x} & \frac{\partial y_{22}}{\partial x} & \ldots & \frac{\partial y_{m2}}{\partial x} \\ 
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial y_{1n}}{\partial x} & \frac{\partial y_{2n}}{\partial x} & \ldots & \frac{\partial y_{mn}}{\partial x} \\ 
\end{array}
\right]
$$