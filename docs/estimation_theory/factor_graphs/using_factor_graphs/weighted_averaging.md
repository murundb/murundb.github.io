# Weighted Averaging

## Overview

Consider a weighted averaging problem as shown in Figure 1. We have a hidden variable $x$ and multiple measurements $z_i$. Assume all measurements have a Gaussian noise with $\sigma_i$.

<figure markdown>
  ![factor_graph_weighted_averaging](/assets/images/state_estimation/light/factor_graph_weighted_averaging.png#only-light){ width="500" }
  ![factor_graph_weighted_averaging](/assets/images/state_estimation/dark/factor_graph_weighted_averaging.png#only-dark){ width="500" }
  <figcaption>Figure 1 Weighted Averaging (Factor Graph Tutorial, ION, GNSS+ 2023)</figcaption>
</figure>

## Formulation

### Weighting Matrix Properties

Since $\mathbf{W} = \boldsymbol{\Lambda}^{-1}$ is symmetric, we can decompose it using Cholesky decomposition ($\mathbf{S}_{W}$).

If we assume that $\mathbf{W}$ is a block diagonal matrix, then the factors are conditionally independenty.

$$
\mathbf{W} =
\left[
\begin{array}{ccc}
\mathbf{W}_1 & 0 & \cdots & 0 \\
0 & \mathbf{W}_2 & \cdots & 0 \\
\vdots & & \ddots & \vdots \\
0 & 0 & \cdots & \mathbf{W}_n
\end{array}
\right], \quad
\mathbf{S}_{W} =
\left[
\begin{array}{ccc}
\mathbf{S}_{W,1} & 0 & \cdots & 0 \\
0 & \mathbf{S}_{W,2} & \cdots & 0 \\
\vdots & & \ddots & \vdots \\
0 & 0 & \cdots & \mathbf{S}_{W, n}
\end{array}
\right].
$$

### Mapping Weighted Least Squares to Least Squares

By pre-multiplying $\mathbf{L}$ and $\mathbf{z}$ by $\mathbf{S}_W$, we can use the same computational techniques as the regular least squares. Denote:

$$
\begin{align}
\mathbf{L}^\prime &= \mathbf{S}_W \mathbf{L} \\
\mathbf{z}^\prime &= \mathbf{S}_W \mathbf{z}.
\end{align}
$$

Then:

$$
\begin{align}
\left( \mathbf{L}^T \mathbf{W} \mathbf{L} \right)^{-1} \mathbf{L}^T \mathbf{W} \mathbf{z} &=
\left(\mathbf{L}^T \mathbf{S}^T_W \mathbf{S}_W \mathbf{L} \right)^{-1} \mathbf{L}^T \mathbf{S}^T_W \mathbf{S}_W \mathbf{z} \\
&= \left(\mathbf{L}^{\prime T} \mathbf{L}^\prime \right)^{-1} \mathbf{L}^{\prime T} \mathbf{z}^\prime.
\end{align}
$$

We have:

$$
\begin{align}
\mathbf{L}^{\prime} &=
\left[
\begin{array}{cccc}
\frac{1}{\sigma_1} & \frac{1}{\sigma_2} & \cdots & \frac{1}{\sigma_n}
\end{array}
\right]^T \\
\mathbf{L}^{\prime \dagger} &= \frac{1}{\sum^n_{i = 1} \frac{1}{\sigma^2_i}}
\left[
\begin{array}{cccc}
\frac{1}{\sigma_1} & \frac{1}{\sigma_2} & \cdots & \frac{1}{\sigma_n}
\end{array}
\right] \\
\mathbf{z}^\prime &=
\left[
\begin{array}{cccc}
\frac{z_1}{\sigma_1} & \frac{z_2}{\sigma_2} & \cdots & \frac{z_n}{\sigma_n}
\end{array}
\right]^T.
\end{align}
$$

Finally, we compute the state estimate as:

$$
\hat{x} = \frac{\sum^n_{i = 1} w_i z_i}{\sum^n_{i = 1} w_i}.
$$

## Notes

The matrix $\mathbf{M} = \left(\mathbf{L}^T \mathbf{W} \mathbf{L} \right)^{-1}$ is the covariance of the hidden variables. We can relate $\mathbf{M}$ with the covariance $\mathbf{P}$ of a KF:

1. The ordering of $\mathbf{M}$ corresponds with the columns of $\mathbf{L}$ (hidden variables).
2. Different blocks on the diagonal correspond with $\mathbf{P}$ matrix over time of KF.
3. In general, covariance blocks will be "smaller" than KF $\mathbf{P}$ because factor graph is not causal. However, the "last $\mathbf{P}$" will be the same as the KF for a linear system.
4. Off-diagonal elements express correlated errors over time. While the input to KFs is "white", the output is not.
