# Dynamical Systems

## Adding Dynamics

Given a state vector $\mathbf{x} \in \mathbb{R}^n$, consider a state space model as follows:

$$
\begin{alignat}{2}
\mathbf{x}_k &= f(\mathbf{x}_{k - 1}, \mathbf{u}_{k - 1}) + \mathbf{w}, \quad &\mathbf{w} \in \mathcal{N}(\mathbf{0}, \mathbb{Q}_k) \\
\mathbf{z}_i &= h_i (\mathbf{x}_i) + \mathbf{v}, \quad &\mathbf{v} \in \mathcal{N}(\mathbf{0}, \mathbf{R}_i).
\end{alignat}
$$

Let $\mathbf{X}$ denote the set of all possible $\mathbf{x}$ and $\mathbf{Z}$ denote the set of all possible measurements $\mathbf{z}$.

Then the conditional probability is:

$$
\begin{align}
p(\mathbf{X} | \mathbf{Z}) &=
\prod^n_{i = 0} \exp \left\{-\frac{1}{2} \left( (h_i(\mathbf{x}) - \mathbf{z}_i)^T \mathbf{R}^{-1}_i (h_i(\mathbf{x}) - \mathbf{z}_i) \right) \right\}.
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
\prod^N_{i = 0} \exp \left\{-\frac{1}{2} \left( (h_i(\mathbf{x}) - \mathbf{z}_i)^T \mathbf{R}^{-1}_i (h_i(\mathbf{x}) - \mathbf{z}_i) \right) \right\} \\
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
