# Singular Value Decomposition

## Definition

!!! cnote "**Theorem** (Singular Value Decomposition)"

    Given a matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$, there exist orthogonal square matrices:

    $$
    \begin{align}
    \mathbf{U} &= 
    \left[ 
    \begin{array}{ccccc}
    \mathbf{u}_1 & | & \cdots & | & \mathbf{u}_m
    \end{array}
    \right] \in \mathbb{R}^{m \times m}, \\ 
    \mathbf{V} &= 
    \left[ 
    \begin{array}{ccccc}
    \mathbf{v}_1 & | & \cdots & | & \mathbf{v}_n
    \end{array}
    \right] \in \mathbb{R}^{n \times n},
    \end{align}
    $$

    such that:

    $$
    \mathbf{U}^T \mathbf{A} \mathbf{V} = \boldsymbol{\Sigma} = \text{diag} \left(\sigma_1, \ldots, \sigma_p \right) \in \mathbb{R}^{m \times n}, \quad p = \min \left\{m, n \right\},
    $$

    where $\sigma_1 \geq \sigma_2 \geq \ldots \geq \sigma_p \geq 0$.

Hence, the SVD of matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$ is:

$$
\mathbf{A} = \mathbf{U} \boldsymbol{\Sigma} \mathbf{V}^T.
$$

The number of non-zero singular values is equal to the rank of $\mathbf{A}$. The columns of $\mathbf{U}$ and the columns of $\mathbf{V}$ are called left-singular vectors and right-singular vectors of $\mathbf{A}$, respectively. They form two sets of orthonormal bases $\mathbf{u}_1, \ldots, \mathbf{u}_m$ and $\mathbf{v}_1, \ldots, \mathbf{v}_n$, and if they are sorted so that the singular values of $\sigma_i$ with value zero are all in the highest-numbered columns, the SVD can be written as:

$$
\mathbf{A} = \sum^{r}_{i = 1} \sigma_i \mathbf{u}_i \mathbf{v}^T_i,
$$

where $r$ is the rank of $\mathbf{A}$.

Separate visualizations of the SVD are required depending upon whether $\mathbf{A}$ has more rows or columns. 3-by-2 and 2-by-3 examples are:

$$
\begin{align}
\left[
\begin{array}{ccc}
u_{11} & u_{12} & u_{13} \\
u_{21} & u_{22} & u_{23} \\
u_{31} & u_{32} & u_{33} \\
\end{array}
\right]^T
\left[
\begin{array}{cc}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
a_{31} & a_{32} \\
\end{array}
\right]
\left[
\begin{array}{cc}
v_{11} & v_{12} \\
v_{21} & v_{22} \\
\end{array}
\right] = 
\left[
\begin{array}{cc}
\sigma_{1} & 0 \\
0 & \sigma_{2} \\
0 & 0 \\
\end{array}
\right], \\ 
\left[
\begin{array}{cc}
u_{11} & u_{12} \\
u_{21} & u_{22} \\
\end{array}
\right]^T
\left[
\begin{array}{ccc}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
\end{array}
\right]
\left[
\begin{array}{ccc}
v_{11} & v_{12} & v_{13} \\
v_{21} & v_{22} & v_{23} \\
v_{31} & v_{32} & v_{33} \\
\end{array}
\right] = 
\left[
\begin{array}{ccc}
\sigma_{1} & 0 & 0 \\
0 & \sigma_{2} & 0 \\
\end{array}
\right].
\end{align}
$$

## Properties

!!! cnote "Property 1"
    If $\mathbf{U}^T \mathbf{A} \mathbf{V} = \boldsymbol{\Sigma}$ is the SVD of $\mathbf{A} \in \mathbb{R}^{m \times n}$ and $m \geq n$, then for $i = 1 \ldots, n$:

    $$
    \mathbf{A} \mathbf{v}_i = \sigma_i \mathbf{u}_i \ \text{and} \ \mathbf{A}^T \mathbf{u}_i = \sigma_i \mathbf{v}_i.
    $$

The geometry behind this result is that the singular values of the matrix $\mathbf{A}$ are the lengths of the semiaxes of the hyperellipsoid $E$ defined by $E = \left\{ \mathbf{A} \mathbf{x}: \ ||\mathbf{x}||_2 = 1 \right\}$. The semiaxes directions are defined by the $\mathbf{u}_i$ and their lengths are the singular values. From the property:

$$
\begin{align}
& \mathbf{A}^T \mathbf{A} \mathbf{v}_i = \sigma^2_i \mathbf{v}_i, \\ 
&\mathbf{A} \mathbf{A}^T \mathbf{u}_i = \sigma^2_i \mathbf{u}_i,
\end{align}
$$

for $i = 1, \ldots, n$. This shows that there is an intimate connection between the SVD of $\mathbf{A}$ and the eigensystems of the symmetric matrices $\mathbf{A}^T \mathbf{A}$ and $\mathbf{A} \mathbf{A}^T$.

If $\mathbf{M}$ is a symmetric matrix with eigenvalues $\lambda_1, \ldots, \lambda_n$ and orthonormal eigenvectors $\mathbf{u}_1, \ldots, \mathbf{u}_n$, i.e., $\mathbf{M} = \mathbf{U} \boldsymbol{\Lambda} \mathbf{U}^T$, where $\mathbf{U} = \left[ \begin{array}{ccc} \mathbf{u}_1, \ldots, \mathbf{u}_n \end{array}\right]$, then $\mathbf{M = \mathbf{U} \boldsymbol{\Sigma} \mathbf{V}^T}$, where $\sigma_i = |\lambda_i|$ and $\mathbf{v}_i = \text{sign}(\lambda_i) \mathbf{u}_i$.

Eigenvalues of $\mathbf{A}^T \mathbf{A}$ are $\sigma^2_1, \ldots, \sigma^2_n$ and the eigenvectors are $\mathbf{v}_1, \ldots, \mathbf{v}_n$:

$$
\mathbf{A}^T \mathbf{A} = \mathbf{V} \boldsymbol{\Sigma} \mathbf{U}^T \mathbf{U} \boldsymbol{\Sigma} \mathbf{V}^T = \mathbf{V} \boldsymbol{\Sigma}^2 \mathbf{V}^T.
$$

!!! cnote "Property 2"
    If $\mathbf{A} \in \mathbb{R}^{m \times n}$, then:

    $$
    ||\mathbf{A}||_2 = \sigma_1, \quad ||\mathbf{A}||_F = \sqrt{\sigma^2_1 + \cdots + \sigma^2_p},
    $$

    where $p = \min \left\{ m, n \right\}$.

If $\mathbf{A}$ is perturbed by a matrix $\mathbf{E}$, then no singular value can move by more than $||\mathbf{E}||_2$. The following property identifies two useful instances of this result.

!!! cnote "Property 3"
    If $\mathbf{A} \in \mathbb{R}^{m \times n}$ and $\mathbf{E} \in \mathbb{R}^{m \times n}$, then:

    $$
    \begin{align}
    \sigma_{\max} \left( \mathbf{A} + \mathbf{E} \right) &\leq \sigma_\max \left( \mathbf{A} \right) + ||\mathbf{E}||_2, \\
    \sigma_{\min} \left( \mathbf{A} + \mathbf{E} \right) &\geq \sigma_\min \left( \mathbf{A} \right) - ||\mathbf{E}||_2.
    \end{align}
    $$


## Applications

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

