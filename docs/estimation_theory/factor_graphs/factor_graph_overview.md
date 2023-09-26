# Factor Graph Overview

## Why Factor Graphs?

1. Better for non-linear systems than EKF and simplifies implementation of extensions to the EKF.
2. Extensible to multiple different estimation scenarios (e.g., bundle adjustment, calibration, different input PDFs, multiple dynamics, etc.)
3. Enables batch analysis of input data $\Rightarrow$ better outlier detection / input characterization etc.

## Properties

Factor graphs have two types of nodes: **factors** and **hidden variables**. Factor graphs are bipartite graphs, i.e., factors only connect with the hidden variables, and hidden variables only connect with the factors. A bipartite graph is a set of graph vertices decomposed into two disjoint sets such that no two graph vertices within the same set are adjacent.

Figure 1 shows a factor graph where **factors** are represented by dark squares (white squares in dark mode) and **hidden** variables are represented by open circles. In state estimation problem, the hidden variables are your states and the factors are your measurements or anything that gives information about the hidden variables.

<figure markdown>
  ![factor graph](/assets/images/state_estimation/light/factor_graph.png#only-light){ width="500" }
  ![factor graph](/assets/images/state_estimation/dark/factor_graph.png#only-dark){ width="500" }
  <figcaption>Figure 1 Factor graph (Factor Graph Tutorial, ION, GNSS+ 2023)</figcaption>
</figure>

## Relationship to a Kalman Filter

KF consists of the state (**hidden variables**) and the measurements (**factors**). The propagation step involves "special" factors which represents the dynamics of the systems:

$$
\begin{align}
\mathbf{x}_{k + 1} &= f(\mathbf{x}_k, \mathbf{u}_k) + \nu, \quad \nu \in \mathcal{N}(0,\,\mathbf{Q}) \\
f(\mathbf{x}_k, \mathbf{u}_k) &\approx f(\hat{\mathbf{x}}_k, \mathbf{u}_k) + \mathbf{F}(\mathbf{x}_k - \hat{\mathbf{x}}_k) \\ 
\mathbf{F} & \coloneqq \left. \frac{\partial f(\mathbf{x}_k, \mathbf{u}_k)}{\partial \mathbf{x}_k} \right|_{\mathbf{x}_k = \hat{\mathbf{x}}_k}.
\end{align}
$$

Using the probability distribution functions (PDFs) on the factors, we can compute a PDF for each hidden variable:

$$
\begin{align}
\mathbf{z}_{k} &= h(\mathbf{x}_k) + \eta, \quad \eta \in \mathcal{N}(0,\,\mathbf{R}) \\
h(\mathbf{x}_k) &\approx h(\hat{\mathbf{x}}_k) + \mathbf{H}(\mathbf{x}_k - \hat{\mathbf{x}}_k) \\
\mathbf{H} & \coloneqq \left. \frac{\partial h(\mathbf{x}_k)}{\partial \mathbf{x}_k} \right|_{\mathbf{x}_k = \hat{\mathbf{x}}_k}.
\end{align}
$$

For Gaussian PDFs and linear systems, KF will obtain same estimate for $x_N$ as factor graphs (note that the intermediate $x_i$s might differ since factor graph is a batch process).
