# Simple Averaging

## Problem Formulation

Consider a simple averaging problem as shown in Figure 1. Let $x \in \mathbb{R}$ be a constant hidden variable to be estimated and $z_i$ be multiple measurements. Assume all measurements are perturbed by noise $\mathcal{N}(0, \sigma = 1)$.

<figure markdown>
  ![factor_graph_simple_averaging](/assets/images/estimation_theory/light/factor_graph_simple_averaging.png#only-light){ width="500" }
  ![factor_graph_simple_averaging](/assets/images/estimation_theory/dark/factor_graph_simple_averaging.png#only-dark){ width="500" }
  <figcaption>Figure 1 Simple Averaging (Factor Graph Tutorial, ION, GNSS+ 2023)</figcaption>
</figure>

## Solving with Factor Graph

The adjacency matrix $\mathbf{L} \in \mathbb{R}^n$ will have a single column and $n$ rows since no dynamics is involved and $x$ is assumed to be a constant:

$$
\mathbf{L} =
\left[
\begin{array}{cccc}
1 & 1 & \cdots & 1
\end{array}
\right]^T,
$$

since the measurement is equal to $x$ with some added noise. The pseudo-inverse of $\mathbf{L}$ is:

$$
\begin{align}
\mathbf{L}^{\dagger} = \left(\mathbf{L}^T \mathbf{L} \right)^{-1} \mathbf{L}^T = \frac{1}{n}
 \left[
\begin{array}{cccc}
1 & 1 & \cdots & 1
\end{array}
\right].
\end{align}
$$

Then we have an estimator:

$$
\hat{x} = \mathbf{L}^{\dagger} \mathbf{z}.
$$
