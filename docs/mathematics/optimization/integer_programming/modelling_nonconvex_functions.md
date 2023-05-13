## Nonconvex Functions

By definition, a function is nonconvex if it is not convex. Nonconvex functions can be modelled using mixed integer linear constraints. We are interested in the following class of problems with form:

$$
\begin{align}
\min \quad& \sum^n_{j = 1} f_j (x_j) \\ 
\text{s.t.} \quad& \mathbf{A} \mathbf{x} \geq \mathbf{b} \\
& 0 \leq x_j \leq U_j, \ j = 1, \ldots, n,
\end{align}
$$

where:

1. The $n$ optimization variables are bounded.
2. The objective function is separable, i.e., sum of univariate functions.
3. Each of the separable functions is piecewise linear (PWL).
4. The objective function is nonconvex, nonlinear and continuous.

## Piecewise Linear Function

Refer to [Wikipedia](https://optimization.cbe.cornell.edu/index.php?title=Piecewise_linear_approximation) for more details.

For simplicity, consider one univariate PWL nonconvex function $f(x)$ with $K$ pieces. Figure 1 shows a PWL function (on a bounded interval) of form:

$$
f(x) = f(\ell_k) + c_k (x - \ell_k), \ \ell_k \leq x \leq \ell_{k + 1}, k = 0, \ldots, K - 1.
$$

<figure markdown>
  ![pwl](/assets/images/optimization/light/pwl.png#only-light){ width="400" }
  ![pwl](/assets/images/optimization/dark/pwl.png#only-dark){ width="400" }
  <figcaption>Figure 1: PWL function</figcaption>
</figure>

For $k = 0, \ldots, K - 1$, we have:

1. The **function value at breakpoint**, $f(\ell_k)$.
2. The **slope**, $c_k$.
3. The **breakpoint**, $\ell_{k}$.

## Modelling Approach 1
We can introduce new variables $u_0, \ldots, u_{K - 1}$ and $y_0, \ldots, y_{K - 1}$ and constraints:

$$
\begin{align}
x = &\sum^{K - 1}_{k = 0} u_k \\
&\ell_k y_k \leq u_k \leq \ell_{k + 1} y_k, \ k = 0, \ldots, K - 1 \\
&\sum^{K - 1}_{k = 0} y_k = 1 \\
&y_l \in \left\{ 0, 1\right\}, \ k = 0, \ldots, K - 1,
\end{align}
$$

and $f(x)$ can be replaced by $\sum^{K - 1}_{k = 0} \left[f(\ell_k) + c_k (u_k - \ell_k) \right]y_k$. However, this is **not** the correct approach because it is nonlinear. The correct approach to model function $f(x)$ is:

$$
\sum^{K - 1}_{k = 0} f(\ell_k) y_k + c_k \left( u_k - \ell_k \right) + c_k \ell_k \left( 1 - y_k \right),
$$

or after some simplifications:

$$
f(x) = \sum^{K - 1}_{k = 0} f(\ell_k) y_k + c_k \left( u_k - \ell_k y_k \right).
$$

This is correct formulation of the function $f$ because on intervals that do not contain $x$ indicator variable $y_k = 0$ which will also force $u_k = 0$ and hence the summation terms become:

$$
f(\ell_k) y_k + c_k (u_k - \ell_k y_k) = f(\ell_k) \cdot 0 + c_k (0 - \ell_k \cdot 0) = 0.
$$

On the other hand, for interval $\left[ \ell_k, \ell_{k + 1} \right]$ which contains $x$, we will have $y_k = 1$ and $x = u_k \in \left[ \ell_k, \ell_{k + 1} \right]$ hence the appropriate summation term will become:

$$
\begin{align}
f(\ell_k) y_k + c_k (u_k - \ell_k y_k) &= 
f(\ell_k) \cdot 1 + c_k (u_k - \ell_k \cdot 1) \\
&= f(\ell_k) + c_k (u_k - \ell_k) \\ 
&= f(\ell_k) + c_k (x - \ell_k),
\end{align}
$$

which is the exact definition of $f(x)$.

## Modelling Approach 2

We can introduce new variables $\lambda_0, \ldots, \lambda_K$ and $y_0, \ldots, y_{K - 1}$ and constraints:

$$
\begin{align}
x &= \sum^K_{k = 0} \lambda_k \ell_k, \ \sum^{K}_{k = 0} \lambda_k = 1, \ \sum^{K - 1}_{k = 0} y_k = 1 \\
&y_k \in \left\{0 ,1 \right\}, \ k = 0, \ldots, K - 1, \ \lambda_k \geq 0, k = 0, \ldots, K \\
&\lambda_0 \leq y_0, \ \lambda_k \leq y_{k - 1} + y_k, \ k = 1, \ldots, K - 1, \ \lambda_K \leq y_{K - 1},
\end{align}
$$

and $f(x)$ can be replaced by $\sum^K_{k = 0} f(\ell_k) \lambda_k$.

## Example

Consider a problem where we are interested in buying supplies from a set of different vendors (offering quantity discounts) to satisfy a total need. The problem can be formualted as:

$$
\begin{align}
\min \quad& \sum^n_{j = 1} f_j (x_j) \\
\text{s.t.} \quad& \mathbf{A} \mathbf{x} \geq \mathbf{b} \\
& 0 \leq x_j \leq U_j, \ j = 1, \ldots, n,
\end{align}
$$

where $x_j$ is the amount to be purchased from $j$'th vendor and each $f_j$ is a PWL function:

$$
\begin{align}
& f_j (x_j) = 
\begin{cases}
    p_j x_j, & \text{if }  0 \leq x_j \leq L_j \\
    p_j L_j + q_j (x_j - L_j), & \text{if } L_j \leq x_j \leq U_j.
\end{cases} \label{a} \\
\end{align}
$$

### Modelling Approach 1

$$
\begin{align}
\min \quad& \sum^n_{j = 1} \left[ p_j u_j + p_j L_j y_j + q_j (v_j - L_j) \right] \\
\text{s.t.} \quad& \mathbf{A} \mathbf{x} \geq \mathbf{b} \\
& 0 \leq x_j \leq U_j, \ j = 1, \ldots, n \\
& x_j = u_j + v_j, \ j = 1, \ldots, n \\
& 0 \leq u_j \leq L_j (1 - y_j), \ j = 1, \ldots, n \\
& L_j y_j \leq v_j \leq U_j y_j, \ j = 1, \ldots, n \\
& y_j \in \left\{ 0, 1 \right\}, \ j = 1, \ldots, n.
\end{align}
$$

### Modelling Approach 2

$$
\begin{align}
\min \quad& \sum^n_{j = 1} \left[ (0) \lambda_{j, 1} + (p_j L_j) \lambda_{j, 2} + \left(p_j + L_j + q_j (U_j - L_j) \right) \lambda_{j, 3} \right] \\ 
\text{s.t.} \quad& A x \geq b, \ 0 \leq x_j \leq U_j, \ j = 1, \ldots, n \\
& x_j = (0) \lambda_{j, 1} + (L_j) \lambda_{j, 2} + (U_j) \lambda_{j, 3}, \ j = 1, \ldots, n \\ 
& \lambda_{j, 1} + \lambda_{j, 2} + \lambda_{j, 3} = 1, \ j = 1, \ldots, n, \ \lambda \geq 0 \\ 
& y_{j, 1} + y_{j, 2} = 1, \ j = 1, \ldots, n, \ y \in \left\{0, 1 \right\}
\end{align}
$$


## Generalization

Assuming that we have $n$ univariate PWL functions $f_j(x_j)$, such that function $f_j(x_j)$ has $K_j$ pieces, then using the same approach we can model it as:

$$
\begin{align}
&f_j(x_j) = \sum^{K_j - 1}_{k = 0} f_j \left( \ell^{(j)}_k \right) y^{(j)}_k + c^{(j)}_{j} \left( u^{(j)}_k - \ell^{(j)}_{k} y^{(j)}_k \right) \\ 
&x_j = \sum^{K_j - 1}_{k = 0} u^{(j)}_k \\ 
& \ell^{(j)}_k y^{(j)}_k \leq u^{(j)}_k \leq \ell^{(j)}_{k + 1} y^{(j)}_{k}, \ \forall k = 0, \ldots, K_{j - 1} \\
\end{align}
$$


