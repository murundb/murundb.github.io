# QR Decomposition

## Definition

!!! cnote "**Theorem** (QR Decomposition)"
    A matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$, with $m \geq n$ can be factorized to an $m \times m$ unitary matrix $\mathbf{Q}$ and an $m \times n$ upper triangular matrix $\mathbf{R}$ as:

    $$
    \mathbf{A} = \mathbf{Q} \mathbf{R}.
    $$

    Since the bottom rows of the $\mathbf{R}$ consist entirely of zeroes, it is often useful to partition $\mathbf{R}$ and $\mathbf{Q}$ as:

    $$
    \mathbf{A} = 
    \mathbf{Q}
    \left[
    \begin{array}{c}
    \mathbf{R}_1 \\
    \mathbf{0}
    \end{array}
    \right] = 
    \left[
    \begin{array}{cc}
    \mathbf{Q}_1 & \mathbf{Q}_2
    \end{array}
    \right] 
    \left[
    \begin{array}{c}
    \mathbf{R}_1 \\
    \mathbf{0}
    \end{array}
    \right] = 
    \mathbf{Q}_1 \mathbf{R}_1,
    $$

    where $\mathbf{R}_1$ is an $n \times n$ upper triangular matrix, $\mathbf{0}$ is an $(m - n) \times n$ zero matrix, $\mathbf{Q}_1$ is $m \times n$, $\mathbf{Q}_2$ is $m \times (m - n)$, and $\mathbf{Q}_1$ and $\mathbf{Q}$_2 both have orthogonal columns.


## Applications

### Pseudo-Inverse

Compared to the direct matrix inverse, inverse solutions using QR decomposition are more numericall stable as evidenced by their reduced condition numbers. 

Given:

$$
\mathbf{A} = \mathbf{Q} \mathbf{R},
$$

we have:

$$
\mathbf{A} \mathbf{x} = \mathbf{z} \Rightarrow \mathbf{R} \mathbf{x} = \mathbf{Q}^T \mathbf{z}.
$$
