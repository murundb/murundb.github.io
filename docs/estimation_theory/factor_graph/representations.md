# Representations

## System Definition

Consider a system with dynamics:

$$
\begin{align}
\mathbf{x}_{k + 1} &= \mathbf{f}(\mathbf{x}_k, \mathbf{u}_k) + \mathbf{w}, \quad \mathbf{w} \in \mathcal{N}(\mathbf{0},\,\mathbf{Q}) \\
\mathbf{f}(\mathbf{x}_k, \mathbf{u}_k) &\approx \mathbf{f}(\hat{\mathbf{x}}_k, \mathbf{u}_k) + \mathbf{F}(\mathbf{x}_k - \hat{\mathbf{x}}_k) \\ 
\mathbf{F} & \triangleq \left. \frac{\partial \mathbf{f}(\mathbf{x}_k, \mathbf{u}_k)}{\partial \mathbf{x}_k} \right|_{\mathbf{x}_k = \hat{\mathbf{x}}_k}
\end{align}
$$

and measurements:

$$
\begin{align}
\mathbf{z}_{k} &= \mathbf{h}_k(\mathbf{x}_k) + \mathbf{v}, \quad \mathbf{v} \in \mathcal{N}(\mathbf{0},\,\mathbf{R}) \\
\mathbf{h}_k(\mathbf{x}_k) &\approx \mathbf{h}_k(\hat{\mathbf{x}}_k) + \mathbf{H}(\mathbf{x}_k - \hat{\mathbf{x}}_k) \\
\mathbf{H}_k & \triangleq \left. \frac{\partial \mathbf{h}_k(\mathbf{x}_k)}{\partial \mathbf{x}_k} \right|_{\mathbf{x}_k = \hat{\mathbf{x}}_k}
\end{align}
$$

with prior:

$$
\mathbf{x}_0 = \gamma + \xi, \quad \xi \in \mathcal{N}(0, \boldsymbol{\Xi}_0).
$$

## Equivalent Representations

The Bayesian graphical representation of a factor graph is equivalent to a (sparse) matrix representation or the optimization representation as shown in Figure 1.

<figure markdown>
  ![factor graph](/assets/images/estimation_theory/light/factor_graph_equivalences.png#only-light){ width="800" }
  ![factor graph](/assets/images/estimation_theory/dark/factor_graph_equivalences.png#only-dark){ width="800" }
  <figcaption>Figure 1 Factor graph representations (Factor Graph Tutorial, ION, GNSS+ 2023)</figcaption>
</figure>

## Optimization Representation

The goal of a **maximum likelihood** estimator (MLE) is to find the values of the hidden variables that maximize the probability of those values. MLE converts factor graph into an optimization problem. Let $\mathbf{X}$ be the set of all states from $0$ to $N$. To find the maximum probability state estimate:

$$
\hat{\mathbf{x}} = \arg \max_{\mathbf{X}} \left[ p (\mathbf{x}_0 \ | \ \gamma) \cdot \prod^N_{k = 0} p(\mathbf{x}_k \ | \ \mathbf{z}_k) \cdot \prod^N_{k = 1} p(\mathbf{x}_k \ | \ \mathbf{x}_{k - 1}) \right].
$$

If we assume Gaussian PDFs on the factors and take the logarithm:

$$
\begin{align}
\hat{\mathbf{x}} = &\arg \min_{\mathbf{X}} \Biggl[ \frac{1}{2}|| \mathbf{x}_0 - \gamma ||^2_{\mathbf{\boldsymbol{\Xi}}_0} +  \Biggr. \\
&\frac{1}{2} \sum^N_{k = 0} ||\mathbf{h}_k(\mathbf{x}_k) - \mathbf{z}_k ||^2_{\mathbf{R}} + \\
&\frac{1}{2} \left. \sum^N_{k = 1} ||\mathbf{f}(\mathbf{x}_{k - 1}, \mathbf{u}_{k - 1}) - \mathbf{x}_k ||^2_{\mathbf{Q}} \right].
\end{align}
$$

This is a non-linear least squares problem and can be solved with any optimization methods. While converting a factor graph to its equivalent optimization explains at a high
level how to find the maximum likelihood variables as a weighted least-squares problem, the true computational savings are realized by analyzing the sparse
matrix representation.

## Sparse Matrix Representation

The Bayesian graph can be converted into an adjacency matrix $\mathbf{L}$ as shown in Figure 2. The squares are the non-zero elements. Every column of the $\mathbf{L}$ matrix corresponds to a hidden variable, and every row corresponds to a factor. The graph structure enforces sparsity. The $d_i$s are the "special" factors that correspond to the dynamics of the system.

<figure markdown>
  ![factor graph](/assets/images/estimation_theory/light/computational_linear_algebra.png#only-light){ width="400" }
  ![factor graph](/assets/images/estimation_theory/dark/computational_linear_algebra.png#only-dark){ width="400" }
  <figcaption>Figure 2 Adjacency matrix (Factor Graph Tutorial, ION, GNSS+ 2023)</figcaption>
</figure>
