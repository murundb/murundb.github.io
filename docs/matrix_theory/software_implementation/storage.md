# Storage

## Row- and Column-major Order

Given matrix, $\mathbf{A} \in \mathbb{R}^{3 \times 3}$, **row-major** and **column-major** ordering will be:

$$
\mathbf{A}_{\text{row}} = 
\left[
\begin{array}{ccc}
A_{11} & A_{12} & A_{13} \\
A_{21} & A_{22} & A_{23} \\
A_{31} & A_{32} & A_{33} \\
\end{array}
\right], \quad
\mathbf{A}_{\text{col}} = 
\left[
\begin{array}{ccc}
A_{11} & A_{21} & A_{31} \\
A_{12} & A_{22} & A_{32} \\
A_{13} & A_{23} & A_{33} \\
\end{array}
\right].
$$

Data layout is critical for performance when traversing an array because modern CPUs process sequential data more efficiently than nonsequential data. This is primarly due to CPU caching which exploits spatial locality of reference. In addition, contiguous access makes it possible to use SIMD instructions that operate on vectors of data.

## Data Accessing

In C and C++, multidimensional arrays are stored in row-major order. Given:

$$
\mathbf{A} =
\left[
\begin{array}{ccc}
A_{11} & A_{12} & A_{13} \\
A_{21} & A_{22} & A_{23}
\end{array}
\right],
$$

data will be stored in the memory address as:

| Address   | Row-Major Order | Column-Major Order |
| --------- | --------------- | ------------------ |
| `0`       | `A11`           | `A11`              |
| `1`       | `A12`           | `A21`              |
| `2`       | `A13`           | `A12`              |
| `3`       | `A21`           | `A22`              |
| `4`       | `A22`           | `A13`              |
| `5`       | `A23`           | `A23`              |

!!! cnote "Data Accessing"
    To access elements of row-major layout:
    ``` cpp

    Eigen::MatrixXd A = Eigen::MatrixXd::Random(3, 3);

    size_t N = A.rows();
    size_T M = A.cols();

    for (size_t i = 0; i < N; ++i)
    {
        for (size_t j = 0; j < M; ++j>)
        {
            std::cout << A[i * M + j] std::endl;
        }
    }



    ```

