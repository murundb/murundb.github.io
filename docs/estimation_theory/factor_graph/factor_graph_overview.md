# Factor Graph Overview

## Definition

Factor graphs are a family of probabilistic graphical models. Probabilistic graphical models provide a mechanism to compactly descibe complex probability densities by exploiting the structure in them. In particular, high-dimensional probability densities can often be factorized as a product of many factors, each of which is a probability density over a much smaller domain.

A factor graph is a bipartite graph $F = (\mathcal{U}, \mathcal{V}, \mathcal{E})$ with two types of nodes: **factors**, $\phi_i \in \mathcal{U}$, and **hidden variables** $x_j \in \mathcal{V}$. A bipartite graph is a set of graph vertices decomposed into two disjoint sets such that no two graph vertices within the same set are adjacent. Factor graphs are bipartite graphs, i.e., factors only connect with the hidden variables, and hidden variables only connect with the factors. Hence, edges $e_{ij} \in \mathcal{E}$ are always between factor nodes and hidden variable nodes.

Let $\mathbf{x}_i$ denote a set of variable nodes adjacent to a factor $\phi_i$. A factor graph $F$ defines the factorization of a global function $\phi(\mathbf{x})$ as:

$$
\phi(\mathbf{x}) = \prod_i \phi_i (\mathbf{x}_i).
$$

Figure 1 shows an example factor graph where **factors** are represented by dark squares (white squares in dark mode) and **hidden variables** are represented by circles. In state estimation problem, the hidden variables are the states to be estimated and the factors are the measurements or anything that gives information about the hidden variables. The green squares are also factors that represent the dynamics of the system.

<figure markdown>
  ![factor graph](/assets/images/estimation_theory/light/factor_graph.png#only-light){ width="400" }
  ![factor graph](/assets/images/estimation_theory/dark/factor_graph.png#only-dark){ width="400" }
  <figcaption>Figure 1 Factor graph (Factor Graph Tutorial, ION, GNSS+ 2023)</figcaption>
</figure>

## Relationship to a Kalman Filter

KF consists of the states (**hidden variables**) and the measurements (**factors**). The propagation step involves "special" factors which represents the dynamics of the systems:

$$
\begin{align}
\mathbf{x}_{k + 1} &= f(\mathbf{x}_k, \mathbf{u}_k) + \mathbf{w}, \quad \mathbf{w} \in \mathcal{N}(\mathbf{0},\,\mathbf{Q}) \\
f(\mathbf{x}_k, \mathbf{u}_k) &\approx f(\hat{\mathbf{x}}_k, \mathbf{u}_k) + \mathbf{F}(\mathbf{x}_k - \hat{\mathbf{x}}_k) \\ 
\mathbf{F} & \triangleq \left. \frac{\partial f(\mathbf{x}_k, \mathbf{u}_k)}{\partial \mathbf{x}_k} \right|^T_{\mathbf{x}_k = \hat{\mathbf{x}}_k}.
\end{align}
$$

Using the probability distribution functions (PDFs) on the factors, we can compute a PDF for each hidden variable:

$$
\begin{align}
\mathbf{z}_{k} &= h(\mathbf{x}_k) + \mathbf{v}, \quad \mathbf{v} \in \mathcal{N}(\mathbf{0},\,\mathbf{R}) \\
h(\mathbf{x}_k) &\approx h(\hat{\mathbf{x}}_k) + \mathbf{H}(\mathbf{x}_k - \hat{\mathbf{x}}_k) \\
\mathbf{H} & \triangleq \left. \frac{\partial h(\mathbf{x}_k)}{\partial \mathbf{x}_k} \right|_{\mathbf{x}_k = \hat{\mathbf{x}}_k}.
\end{align}
$$

For Gaussian PDFs and linear systems, KF will obtain same estimate for $x_N$ as factor graphs (note that the intermediate $x_i$s might differ since factor graph is a batch process).

## Advantages of Factor Graph

1. Better for non-linear systems than EKF and simplifies implementation of extensions to the EKF.
2. Extensible to multiple different estimation scenarios (e.g., bundle adjustment, calibration, different input PDFs, multiple dynamics, etc.)
3. Enables batch analysis of input data $\Rightarrow$ better outlier detection / input characterization etc.
