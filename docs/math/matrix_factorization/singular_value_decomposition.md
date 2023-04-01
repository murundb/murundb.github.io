## Singular Value Decomposition

Given a matrix $\mathbf{M} \in \mathbb{R}^{m \times n}$, the SVD factorization is:

$$
\mathbf{M} = \mathbf{U} \boldsymbol{\Sigma} \mathbf{V}^T,
$$

where $\mathbf{U} \in \mathbb{R}^{m \times m}$ is an orthogonal matrix, $\boldsymbol{\Sigma} \in \mathbb{R}^{m \times n}$ is a rectangular diagonal matrix with non-negative real numbers on the diagonal, and $\mathbf{V} \in \mathbb{R}^{n \times n}$ is an orthogonal matrix.

The number of non-zero singular values is equal to the rank of $\mathbf{M}$. The columns of $\mathbf{U}$ and the columns of $\mathbf{V}$ are called left-singular vectors and right-singular vectors of $\mathbf{M}$, respectively. They form two sets of orthonormal bases $\mathbf{u}_1, \ldots, \mathbf{u}_m$ and $\mathbf{v}_1, \ldots, \mathbf{v}_n$, and if they are sorted so that the singular values of $\sigma_i$ with value zero are all in the highest-numbered columns, the SVD can be written as:

$$
\mathbf{M} = \sum^{r}_{i = 1} \sigma_i \mathbf{u}_i \mathbf{v}^T_i,
$$

where $r \leq \min\left\{m, n \right\}$ is the rank of $\mathbf{M}$.

## Relation to Eigendecomposition

If $\mathbf{M}$ is a symmetric matrix with eigenvalues $\lambda_1, \ldots, \lambda_n$ and orthonormal eigenvectors $\mathbf{u}_1, \ldots, \mathbf{u}_n$, i.e., $\mathbf{M} = \mathbf{U} \boldsymbol{\Lambda} \mathbf{U}^T$, where $\mathbf{U} = \left[ \begin{array}{ccc} \mathbf{u}_1, \ldots, \mathbf{u}_n \end{array}\right]$, then $\mathbf{M = \mathbf{U} \boldsymbol{\Sigma} \mathbf{V}^T}$, where $\sigma_i = |\lambda_i|$ and $\mathbf{v}_i = \text{sign}(\lambda_i) \mathbf{u}_i$.

Eigenvalues of $\mathbf{A}^T \mathbf{A}$ are $\sigma^2_1, \ldots, \sigma^2_n$ and the eigenvectors are $\mathbf{v}_1, \ldots, \mathbf{v}_n$:

$$
\mathbf{A}^T \mathbf{A} = \mathbf{V} \boldsymbol{\Sigma} \mathbf{U}^T \mathbf{U} \boldsymbol{\Sigma} \mathbf{V}^T = \mathbf{V} \boldsymbol{\Sigma}^2 \mathbf{V}^T.
$$

## Example Applications

### Pseudoinverse

See [Least Squares](/optimization/nonlinear_programming/least_squares/).

### Nearest Orthogonal Matrix

Given a real square matrix $\mathbf{A}$, the orthogonal matrix $\mathbf{O}$ closest to $\mathbf{A}$ is $\mathbf{U} \mathbf{V}^T$. The closeness of fit is measured by the Frobenius norm of $\mathbf{O} - \mathbf{A}$. The orthogonal matrix would have the decomposition $\mathbf{O} = \mathbf{U} \mathbf{I} \mathbf{V}^T$, so that if $\mathbf{A} = \mathbf{U} \boldsymbol{\Sigma} \mathbf{V}^T$, then the product $\mathbf{A} = \mathbf{U} \mathbf{V}^T$ amounts to replacing the singular values with ones.

### Kabsch Algorithm

### Low-Rank Matrix Approximation

Given a full rank matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$, we can use SVD to find a "simpler" matrix $\tilde{\mathbf{A}}$ that "approximates" $\mathbf{A}$ well. 

1. To define the criterion for a "simple" matrix, we can use the rank of the matrix:

    $$
    \text{rank}(\tilde{\mathbf{A}}) = r \ll \text{rank}(\mathbf{A}).
    $$

2. To define the criterion for "approximation", we can use $\mathcal{l}_2$ norm and $\epsilon$:

    $$
    ||\tilde{\mathbf{A}} - \mathbf{A}||_2 < \epsilon.
    $$

$\tilde{\mathbf{A}}$ is called **low rank matrix**. Then the low-rank matrix approximation can turn into an optimization problem:

$$
\begin{align}
\min_{\tilde{\mathbf{A}}} \quad& ||\tilde{\mathbf{A}} - \mathbf{A}||_2 \\
\text{s.t.} \quad& \text{rank}(\tilde{\mathbf{A}}) = r \\
&\tilde{\mathbf{A}} \in \mathbb{R}^{m \times n},
\end{align}
$$

which is a least squares problem with a constraint.

**Theorem**. Let $\mathbf{A} = \sum^n_{i = 1} \sigma_i \mathbf{u}_i \mathbf{v}^T_i = \mathbf{U} \boldsymbol{\Sigma} \mathbf{V}^T$ be the SVD of the $m \times n$ matrix $\mathbf{A}$ with $m \geq n$, where $\mathbf{U} = \left[ \begin{array}{ccc} \mathbf{u}_1, \ldots, \mathbf{u}_m \end{array} \right]$, $\mathbf{V} = \left[ \begin{array}{ccc} \mathbf{v}_1, \ldots, \mathbf{v}_n \end{array} \right]$, and $\boldsymbol{\Sigma} = \text{diag}(\sigma_1, \ldots, \sigma_n)$ with $\sigma_1 \geq \ldots \geq \sigma_n$. Then the rank $r$ matrix $\tilde{\mathbf{A}}$ closest to $\mathbf{A}$ in $\mathcal{l}_2$ norm is given by $\tilde{\mathbf{A}} = \sum^{r}_{i = 1} \sigma_i \mathbf{u}_i \mathbf{v}^T_i = \mathbf{U} \boldsymbol{\Sigma}_r \mathbf{v}^T$, where $\boldsymbol{\Sigma}_r = \text{diag}(\sigma_1, \ldots, \sigma_r, \mathbf{0})$. Furthemore, $||\tilde{\mathbf{A}} - \mathbf{A}||_2 = \sigma_{r + 1}$.

An example of low-rank matrix approximation is image compression. See [Compression via Low-Rank Matrix Approximation](/computer_vision/image_compression/compression_by_low_rank_matrix_approximation/).

