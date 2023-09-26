# Simple Averaging

## Overview

Consider a simple averaging problem as shown in Figure 1. We have a hidden variable $x$ and multiple measurements $z_i$. Assume all measurements have a Gaussian noise with $\sigma = 1$.

<figure markdown>
  ![factor_graph_simple_averaging](/assets/images/state_estimation/light/factor_graph_simple_averaging.png#only-light){ width="500" }
  ![factor_graph_simple_averaging](/assets/images/state_estimation/dark/factor_graph_simple_averaging.png#only-dark){ width="500" }
  <figcaption>Figure 1 Simple Averaging (Factor Graph Tutorial, ION, GNSS+ 2023)</figcaption>
</figure>

## Formulation

We have:

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
\mathbf{L}^{\dagger} = \frac{1}{n}
\left[
\begin{array}{cccc}
1 & 1 & \cdots & 1
\end{array}
\right].
\end{align}
$$

Then we have:

$$
\hat{x} = \mathbf{L}^{\dagger} \mathbf{z}.
$$