# Weighted Non-Linear Least Squares

## Problem Statement

Consider a weighted averaging problem similar as prevous example. Let $x \in \mathbb{R}$ be a constant hidden variable to be estimated and $z_i$ be multiple measurements. Assume all measurements are i.i.d and perturbed by noise $\mathcal{N}(0, \sigma_i)$. Consider each measurement has its own non-linear measurement function:

$$
\hat{x} = \arg \min_{x} \sum^{n}_{i = 1} ||h_i(x) - z_i||^2_{\sigma_i}.
$$

## Solving with Factor Graph

### Non-Linear to Linear Least Squares

We can replace $h_i(x)$ with an affine approximation by linearizing the non-linear function:

$$
h_i(x) \approx H_i \Delta x + h_i(x_0),
$$

where $H_i = \left. \frac{\partial h_i(x)}{\partial x} \right|_{x = x_0}$ and $\Delta x = x - x_0$.

Then:

$$
\begin{align}
\hat{x} = x_0 +
\left(
\Delta x = \arg \min_{\Delta \mathbf{x}} \sum^n_{i = 1} || H_i \Delta x + h_i(\mathbf{x}_0) - z_i ||^2_{\sigma_i}
\right),
\end{align}
$$

$$
\begin{align}
\mathbf{L} &= \left[
\begin{array}{cccc}
\frac{H_1}{\sigma_1} & \frac{H_2}{\sigma_2} & \cdots & \frac{H_n}{\sigma_n}
\end{array}
\right]^T, \\
\mathbf{y} &= \left[
\begin{array}{cccc}
\frac{z_1 - h_1(x_0)}{\sigma_1} & \frac{z_2- h_2(x_0)}{\sigma_2} & \cdots & \frac{z_n - h_n(x_0)}{\sigma_n}
\end{array}
\right], \\
\Delta x &= \mathbf{L}^{\dagger} \mathbf{y}.
\end{align}
$$

Note that $H_i$ is the negative derivative of the residual vector $\mathbf{y}$ and is **not constant**. When $\hat{x}$ changes, $H_i$s change as well.

> **Algorithm:** Non-Linear Least Squares
>
> $\quad$**Input**: $\mathbf{x}_0$, $\mathbf{R}$   
> $\quad$**Result**: $\hat{\mathbf{x}}$   
> $\quad$**Initialize**: $\hat{\mathbf{x}} = \mathbf{x}_0$   
> $\quad$**Repeat**    
> $\quad\quad$ $\mathbf{H} = \left. \frac{\partial h(\mathbf{x})}{\partial \mathbf{x}} \right|_{\mathbf{x} = \hat{\mathbf{x}}}$    
> $\quad\quad$ $\Delta \mathbf{x} = \arg \min_{\Delta \mathbf{x}} \sum^n_{i = 1} || \mathbf{H} \Delta \mathbf{x} + h(\mathbf{x_0}) - \mathbf{z}_i ||^2_{\mathbf{R}}$ - Run (linear) least squares    
> $\quad\quad$ $\hat{\mathbf{x}} = \hat{\mathbf{x}} + \Delta \mathbf{x}$    
> $\quad$**until** convergence.    

## Numerical Example

Let $x$ be a scalar state to be estimated. Assume that the true value of $x$ is $x = 200$.

Consider two noisy measurements of $x$ (hidden variable):

$$
\begin{align}
z_1 &= -7800.52, \quad (\text{noiseless} = -7795) \\
z_2 &= 605.79, \quad (\text{noiseless} = 605).
\end{align}
$$

Let the non-linear measurement functions be:

$$
\begin{alignat}{2}
h_1(x) &= 0.05 (x + 10)^2 - 10000, \quad &&\sigma_1 = 100 \\
h_2(x) &= 3x + 5, \quad &&\sigma_2 = 1.
\end{alignat}
$$

The Jacobian is:

$$
\mathbf{J} =
\left[
\begin{array}{c}
\frac{\partial h_1}{\partial x} \\
\frac{\partial h_2}{\partial x}
\end{array}
\right] =
\left[
\begin{array}{c}
0.1 (x + 10) \\
3
\end{array}
\right].
$$

### Iteration 1

Start with estimate $\hat{x} = 0$. We have:

$$
\begin{align}
\mathbf{L} &=
\left[
\begin{array}{c}
\sigma^{-1/2}_1 \left. \frac{\partial h_1}{\partial x} \right|_{x = \hat{x}} \\
\sigma^{-1/2}_2 \left. \frac{\partial h_2}{\partial x} \right|_{x = \hat{x}} \\
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
\sigma^{-1/2}_1 (z_1 - h_1(\hat{x})) \\
\sigma^{-1/2}_2 (z_2 - h_2(\hat{x})) \\
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

### Iteration 2

Start with estimate $\hat{x} \approx 202.48$. We have:

$$
\begin{align}
\mathbf{L} &=
\left[
\begin{array}{c}
\sigma^{-1/2}_1 \left. \frac{\partial h_1}{\partial x} \right|_{x = \hat{x}} \\
\sigma^{-1/2}_2 \left. \frac{\partial h_2}{\partial x} \right|_{x = \hat{x}} \\
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
\sigma^{-1/2}_1 (z_1 - h_1(\hat{x})) \\
\sigma^{-1/2}_2 (z_2 - h_2(\hat{x})) \\
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

### Iteration 3

Start with estimate $\hat{x} = 202.48 - 2.38 = 200.1$. We have:

$$
\begin{align}
\mathbf{L} &=
\left[
\begin{array}{c}
\sigma^{-1/2}_1 \left. \frac{\partial h_1}{\partial x} \right|_{x = \hat{x}} \\
\sigma^{-1/2}_2 \left. \frac{\partial h_2}{\partial x} \right|_{x = \hat{x}} \\
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
\sigma^{-1/2}_1 (z_1 - h_1(\hat{x})) \\
\sigma^{-1/2}_2 (z_2 - h_2(\hat{x})) \\
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
