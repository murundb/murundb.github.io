# Factor Graph Equivalences

There are several ways to solve the graph as shown in Figure 1.

<figure markdown>
  ![factor graph](/assets/images/state_estimation/light/factor_graph_equivalences.png#only-light){ width="800" }
  ![factor graph](/assets/images/state_estimation/dark/factor_graph_equivalences.png#only-dark){ width="800" }
  <figcaption>Figure 1 Factor graph equivalences (Factor Graph Tutorial, ION, GNSS+ 2023)</figcaption>
</figure>

## Graph - WLS Optimization

**Maximum likelihood** estimation convers factor graph into an optimization problem. Let $\mathbf{X}$ be the set of all states from $0$ to $N$. To find the maximum probability state estimate:

$$
\mathbf{X} = \arg \max_{\mathbf{X}} p (\mathbf{x}_0 \ | \ \text{prior}) \prod^N_{i = 0} p(\mathbf{x}_i \ | \ \mathbf{z}_i) \prod^N_{i = 1} p(\mathbf{x}_i \ | \ \mathbf{x}_{i - 1}).
$$

If we assume Gaussian PDFs on the factors and take the logarithm, we will have additions instead of multiplications and will have a least squares problem:

$$
\begin{align}
\mathbf{X} = &\arg \min_{\mathbf{X}} || \mathbf{x}_0 - \text{prior} ||^2_{\mathbf{P}_0} + \\
&\sum^N_{i = 0} ||h(\mathbf{x}_i) - \mathbf{z}_i ||^2_{\mathbf{R}} + \\
&\sum^N_{i = 1} ||f(\mathbf{x}_{i - 1}, \mathbf{u}_{i - 1}) - \mathbf{x}_i ||^2_{\mathbf{Q}}
\end{align}
$$

## Graph - Liner Algebra

The squares in Figure 1 are the non-zero elements. Every column of the $\mathbf{L}$ matrix corresponds to a hidden variable, and every row corresponds to a factor. The graph structure enforces sparsity. The $d_i$s are the "special" factors that corresond to the dynamics of the system. In graph theory, $\mathbf{L}$ is called an adjacency matrix.
