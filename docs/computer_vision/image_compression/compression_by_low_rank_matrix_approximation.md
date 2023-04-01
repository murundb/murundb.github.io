## Compression via Low-Rank Matrix Approximation

See [SVD](/math/matrix_factorization/singular_value_decomposition/) for more details on low-rank matrix approximation.

> **Algorithm:** Low-Rank Matrix Approximation
>
> $\quad$ Given an image $\mathbf{A}$, do SVD on $\mathbf{A}$.   
> $\quad$ Keep the first $r$ largest singular values and associated left and right singular vectors.   
> $\quad$ Construct $\tilde{\mathbf{A}} = \sum^r_{i = 1} \sigma_i \mathbf{u}_i \mathbf{v}^T_i$.   

## Relative Error

The relative error can be defined as:

$$
\epsilon_r = \frac{\sigma_{r + 1}}{\sigma_1}.
$$

## Space Complexity

Given an image $\mathbf{A}$, we need to store $m \times n \times 8$ bytes. By using the low-rank matrix approximation, we'd need to store $m \times r \times 8$ in $\begin{array}{ccc}\mathbf{u}_1, \ldots, \mathbf{u}_r \end{array}$ and $n \times r \times 8$ in $\begin{array}{ccc}\mathbf{v}_1, \ldots, \mathbf{v}_r \end{array}$, thus in total $(m + n) \times r \times 8$. The compression ratio is:

$$
\frac{(m + n) \times r}{(m \times n)}.
$$

## Example

Consider the fat cat grayscale image in Figure 1.



