# Weighted Non-Linear Least Squares

## Overview

Same factor graph as previus, but each measurement has its own non-linear measurement function:

$$
\hat{x} = \arg \min_{x} \sum^{n}_{i = 1} ||h_i(x) - z_i||^2_{\boldsymbol{\Lambda}_i}.
$$

## Formulation

### Non-Linear to Linear Least Squares

Replace $h(\mathbf{x})$ with an affine approximation:

$$
h(\mathbf{x}) \approx \mathbf{H} \Delta \mathbf{x} + h(\mathbf{x}_0),
$$

where $\mathbf{H} = \left. \frac{\partial h(\mathbf{x})}{\partial \mathbf{x}} \right|_{\mathbf{x} = \mathbf{x}_0}$ and $\Delta \mathbf{x} = \mathbf{x} - \mathbf{x}_0$.

Then:

$$
\begin{align}
\hat{\mathbf{x}} = \mathbf{x}_0 +
\left(
\Delta \mathbf{x} = \arg \min_{\Delta \mathbf{x}} \sum^n_{i = 1} || \mathbf{H} \Delta \mathbf{x} + h(\mathbf{x}_0) - z_i ||^2_{\boldsymbol{\Lambda}_i}
\right),
\end{align}
$$

$$
\begin{align}
\mathbf{L} &= \left[
\begin{array}{cccc}
\mathbf{H}_1 & \mathbf{H}_2 & \cdots & \mathbf{H}_n
\end{array}
\right]^T, \\
\mathbf{y} &= \left[
\begin{array}{cccc}
z_1 - h_1(\mathbf{x_0}) & z_2- h_2(\mathbf{x_0}) & \cdots & z_n - h_n(\mathbf{x_0})
\end{array}
\right], \\
\Delta \mathbf{x} &= \mathbf{L}^{\dagger} \mathbf{y}.
\end{align}
$$

Note that $\mathbf{H}$ is the negative derivative of the residual vector $\mathbf{y}$ and is **not constant**. When $\hat{\mathbf{x}}$ changes, $\mathbf{H}$ changes as well.

> **Algorithm:** Non-Linear Least Squares
>
> $\quad$**Input**: $\mathbf{x}_0$, $\boldsymbol{\Lambda}_i$   
> $\quad$**Result**: $\hat{\mathbf{x}}$   
> $\quad$**Initialize**: $\hat{\mathbf{x}} = \mathbf{x}_0$   
> $\quad$**Repeat**    
> $\quad\quad$ $\mathbf{H} = \left. \frac{\partial h(\mathbf{x})}{\partial \mathbf{x}} \right|_{\mathbf{x} = \hat{\mathbf{x}}}$    
> $\quad\quad$ $\Delta \mathbf{x} = \arg \min_{\Delta \mathbf{x}} \sum^n_{i = 1} || \mathbf{H} \Delta \mathbf{x} + h(\mathbf{x_0}) - \mathbf{z}_i ||^2_{\boldsymbol{\Lambda}_i}$ - Run (linear) least squares    
> $\quad\quad$ $\hat{\mathbf{x}} = \hat{\mathbf{x}} + \Delta \mathbf{x}$    
> $\quad$**until** convergence.    

### Numerical Example

Consider two noisy measurements of a scalar state (hidden variable):

$$
\begin{align}
z_1 &= -7800.52, \quad (\text{noiseless} = -7795) \\
z_2 &= 605.79, \quad (\text{noiseless} = 605).
\end{align}
$$

Let the true scalar state be $x = 200$.

The non-linear measurement functions are given as:

$$
\begin{alignat}{2}
h_1(x) &= 0.05 (x + 10)^2 - 10000, \quad &&R_1 = 100 \\
h_2(x) &= 3x + 5, \quad &&R_2 = 1.
\end{alignat}
$$

The corresponding first-order derivatives are:

$$
\begin{align}
\frac{\partial h_1}{\partial x} &= 0.1 (x + 10) \\
\frac{\partial h_2}{\partial x} &= 3.
\end{align}
$$

#### Iteration 1

Start with estimate $\hat{x} = 0$. We have:

$$
\begin{align}
\mathbf{L} &=
\left[
\begin{array}{c}
R^{-1/2}_1 \left. \frac{\partial h_1}{\partial x} \right|_{x = \hat{x}} \\
R^{-1/2}_2 \left. \frac{\partial h_2}{\partial x} \right|_{x = \hat{x}} \\
\end{array}
\right]
=
\left[
\begin{array}{c}
0.1 \\
3.0
\end{array}
\right] \\
\mathbf{y} &=
\left[
\begin{array}{c}
R^{-1/2}_1 (z_1 - h_1(\hat{x})) \\
R^{-1/2}_2 (z_2 - h_2(\hat{x})) \\
\end{array}
\right]
\approx
\left[
\begin{array}{c}
219.448 \\
600.79
\end{array}
\right] \\
\Delta x &= \mathbf{L}^{\dagger} \mathbf{y} \approx 202.48.
\end{align}
$$

#### Iteration 2

Start with estimate $\hat{x} \approx 202.48$. We have:

$$
\begin{align}
\mathbf{L} &=
\left[
\begin{array}{c}
R^{-1/2}_1 \left. \frac{\partial h_1}{\partial x} \right|_{x = \hat{x}} \\
R^{-1/2}_2 \left. \frac{\partial h_2}{\partial x} \right|_{x = \hat{x}} \\
\end{array}
\right]
=
\left[
\begin{array}{c}
2.12 \\
3.0
\end{array}
\right] \\
\mathbf{y} &=
\left[
\begin{array}{c}
R^{-1/2}_1 (z_1 - h_1(\hat{x})) \\
R^{-1/2}_2 (z_2 - h_2(\hat{x})) \\
\end{array}
\right]
\approx
\left[
\begin{array}{c}
-5.78 \\
-6.64
\end{array}
\right] \\
\Delta x &= \mathbf{L}^{\dagger} \mathbf{y} \approx -2.38.
\end{align}
$$

#### Iteration 3

Start with estimate $\hat{x} = 202.48 - 2.38 = 200.1$. We have:

$$
\begin{align}
\mathbf{L} &=
\left[
\begin{array}{c}
R^{-1/2}_1 \left. \frac{\partial h_1}{\partial x} \right|_{x = \hat{x}} \\
R^{-1/2}_2 \left. \frac{\partial h_2}{\partial x} \right|_{x = \hat{x}} \\
\end{array}
\right]
=
\left[
\begin{array}{c}
2.10 \\
3.0
\end{array}
\right] \\
\mathbf{y} &=
\left[
\begin{array}{c}
R^{-1/2}_1 (z_1 - h_1(\hat{x})) \\
R^{-1/2}_2 (z_2 - h_2(\hat{x})) \\
\end{array}
\right]
\approx
\left[
\begin{array}{c}
-0.74 \\
0.51
\end{array}
\right] \\
\Delta x &= \mathbf{L}^{\dagger} \mathbf{y} \approx -0.003.
\end{align}
$$

## Notes

1. Non-linear optimization presented so far is Gauss-Newton optimization routine. In general, any techniques in literature for improving Gauss-Newton can be applied here. Other optimizations are also often applied for very non-linear systems (e.g., Levenburg-Marquardt, Dogleg, etc.).
2. Convergence is **not** guaranteed. Must be "close enough" to converge.
