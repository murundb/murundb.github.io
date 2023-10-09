## Polynomial Fitting

Suppose we have $m$ pairs of data points $(a_1, \ b_1), \ldots, (a_m, \ b_m)$ and we'd like to fit a cubic polynomial:

$$
p(a) = b = x_0 + x_1 a + x_2 a^2 + x_3 a^3.
$$

Let $\mathbf{x} = \left[\begin{array}{ccc} x_0 & \ldots & x_3 \end{array} \right]$ be the coefficients of $p(a)$. The residual can be written as:

$$
\begin{align}
r(\mathbf{x}) &= 
\left[
\begin{array}{c}
p(a_1) - b_1 \\
\vdots \\
p(a_m) - b_m
\end{array}
\right] = 
\left[
\begin{array}{c}
p(a_1) \\
\vdots \\
p(a_m)
\end{array}
\right] - 
\left[
\begin{array}{c}
b_1 \\
\vdots \\
b_m
\end{array}
\right] = 
\left[
\begin{array}{c}
x_0 + x_1 a_1 + x_2 a^2_1 + x_3 a^3_1 \\
\vdots \\
x_0 + x_1 a_m + x_2 a^2_m + x_3 a^3_m
\end{array}
\right] - 
\left[
\begin{array}{c}
b_1 \\
\vdots \\
b_m
\end{array}
\right] \\ 
&= 
\left[
\begin{array}{cccc}
1 & a_1 & a^2_1 & a^3_1 \\
\vdots & \ddots & \ddots & \vdots \\
1 & a_m & a^2_m & a^3_m
\end{array}
\right]
\left[
\begin{array}{c}
x_0 \\
x_1 \\
x_2 \\
x_3
\end{array}
\right] - 
\left[
\begin{array}{c}
b_1 \\
\vdots \\
b_m
\end{array}
\right] \\
&= \mathbf{A} \mathbf{x} - \mathbf{b}.
\end{align}
$$

The matrix $\mathbf{A}$ is called the **Vandermonde matrix**.