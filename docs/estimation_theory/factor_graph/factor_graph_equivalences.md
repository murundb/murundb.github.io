# Factor Graph Equivalences

Given a Bayesian graph shown in Figure 1, there are several ways to solve the graph.

<figure markdown>
  ![factor graph](/assets/images/estimation_theory/light/factor_graph_equivalences.png#only-light){ width="800" }
  ![factor graph](/assets/images/estimation_theory/dark/factor_graph_equivalences.png#only-dark){ width="800" }
  <figcaption>Figure 1 Factor graph equivalences (Factor Graph Tutorial, ION, GNSS+ 2023)</figcaption>
</figure>

## Graph - Weighted Least Squares Optimization

**Maximum likelihood** estimation converts factor graph into an optimization problem. Let $\mathbf{X}$ be the set of all states from $0$ to $N$. To find the maximum probability state estimate:

$$
\hat{\mathbf{x}} = \arg \max_{\mathbf{X}} \left[ p (\mathbf{x}_0 \ | \ \text{prior}) \cdot \prod^N_{i = 0} p(\mathbf{x}_i \ | \ \mathbf{z}_i) \cdot \prod^N_{i = 1} p(\mathbf{x}_i \ | \ \mathbf{x}_{i - 1}) \right].
$$

If we assume Gaussian PDFs on the factors and take the logarithm, we will have additions instead of multiplications and will have a least squares problem:

$$
\begin{align}
\hat{\mathbf{x}} = &\arg \min_{\mathbf{X}} \Biggl[ || \mathbf{x}_0 - \text{prior} ||^2_{\mathbf{P}_0} + \Biggr. \\
&\sum^N_{i = 0} ||h(\mathbf{x}_i) - \mathbf{z}_i ||^2_{\mathbf{R}} + \\
&\left. \sum^N_{i = 1} ||f(\mathbf{x}_{i - 1}, \mathbf{u}_{i - 1}) - \mathbf{x}_i ||^2_{\mathbf{Q}} \right]
\end{align}
$$

## Graph - Liner Algebra

The Bayesian graph can be converted into an adjacency matrix $\mathbf{L}$ as shown in Figure 2. The squares are the non-zero elements. Every column of the $\mathbf{L}$ matrix corresponds to a hidden variable, and every row corresponds to a factor. The graph structure enforces sparsity. The $d_i$s are the "special" factors that correspond to the dynamics of the system.

<figure markdown>
  ![factor graph](/assets/images/estimation_theory/light/computational_linear_algebra.png#only-light){ width="400" }
  ![factor graph](/assets/images/estimation_theory/dark/computational_linear_algebra.png#only-dark){ width="400" }
  <figcaption>Figure 2 Adjacency matrix (Factor Graph Tutorial, ION, GNSS+ 2023)</figcaption>
</figure>
