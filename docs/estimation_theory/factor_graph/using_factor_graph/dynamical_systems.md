# Dynamical Systems

## Problem Formulation

Consider a system shown in Figure 1. The state space model of the system is given as:

$$
\begin{alignat}{2}
\mathbf{x}_k &= f(\mathbf{x}_{k - 1}, \mathbf{u}_{k - 1}) + \mathbf{w}, \quad &&\mathbf{w} \in \mathcal{N}(\mathbf{0}, \mathbf{Q}_k) \\
\mathbf{z}_i &= h_i(\mathbf{x}_i) + \mathbf{v}, \quad && \mathbf{v} \in \mathcal{N}(\mathbf{0}, \mathbf{R}_i).
\end{alignat}
$$

<figure markdown>
  ![factor graph](/assets/images/estimation_theory/light/factor_graph.png#only-light){ width="400" }
  ![factor graph](/assets/images/estimation_theory/dark/factor_graph.png#only-dark){ width="400" }
  <figcaption>Figure 1 Factor graph (Factor Graph Tutorial, ION, GNSS+ 2023)</figcaption>
</figure>

## Solving with Factor Graph

Let $\mathbf{X}$ denote the set of all possible $\mathbf{x}$ and $\mathbf{Z}$ denote the set of all possible measurements $\mathbf{z}$ such that:

$$
\begin{align}
\mathbf{X} &\triangleq \left\{\mathbf{x}_0, \ldots, \mathbf{x}_N  \right\} \\
\mathbf{Z} &\triangleq \left\{\mathbf{z}_0, \ldots, \mathbf{z}_N \right\}.
\end{align}
$$

Then the conditional probability without adding the dynamics is:

$$
\begin{align}
p(\mathbf{X} | \mathbf{Z}) &=
\prod^N_{i = 0} \exp \left\{-\frac{1}{2} \left( (h_i(\mathbf{x}) - \mathbf{z}_i)^T \mathbf{R}^{-1}_i (h_i(\mathbf{x}) - \mathbf{z}_i) \right) \right\}.
\end{align}
$$

An estimator can be found with:

$$
\begin{align}
\hat{\mathbf{x}} &= \arg \max_{\mathbf{x}} \prod^n_{i = 0} \exp \left\{-\frac{1}{2} \left( (h_i(\mathbf{x}) - \mathbf{z}_i)^T \mathbf{R}^{-1}_i (h_i(\mathbf{x}) - \mathbf{z}_i) \right) \right\} \\
&= \arg \max_{\mathbf{x}} \sum^n_{i = 0} \ln \exp \left\{-\frac{1}{2} \left( (h_i(\mathbf{x}) - \mathbf{z}_i)^T \mathbf{R}^{-1}_i (h_i(\mathbf{x}) - \mathbf{z}_i) \right) \right\} \\
&= \arg \min_{\mathbf{x}} \sum^n_{i = 0} ||h_i(\mathbf{x}) - \mathbf{z}_i||^2_{\mathbf{R}_i}.
\end{align}
$$

Combining the conditional probability with a probabilistic motion model, we get:

$$
\begin{align}
p(\mathbf{X} | \mathbf{Z}) &=
\prod^N_{i = 0} \exp \left\{-\frac{1}{2} \left( (h_i(\mathbf{x}_i) - \mathbf{z}_i)^T \mathbf{R}^{-1}_i (h_i(\mathbf{x}_i) - \mathbf{z}_i) \right) \right\} \\
\ &\times
\prod^N_{k = 1} \exp \left\{ -\frac{1}{2} \left(f(\mathbf{x}_{k - 1}, \mathbf{u}_{k - 1}) - \mathbf{x}_k \right)^T \mathbf{Q}^{-1}_k \left(f(\mathbf{x}_{k - 1}, \mathbf{u}_{k - 1}) - \mathbf{x}_k \right) \right\}.
\end{align}
$$

Then we get:

$$
\hat{\mathbf{X}} = \arg \min_{\mathbf{X}} 
\sum^N_{i = 0} ||h_i(\mathbf{x}_i) - \mathbf{z}_i||^2_{\mathbf{R}_i} + 
\sum^N_{k = 1} ||f(\mathbf{x}_{k - 1}, \mathbf{u}_{k - 1}) - \mathbf{x}_k||^2_{\mathbf{Q}_k}.
$$

