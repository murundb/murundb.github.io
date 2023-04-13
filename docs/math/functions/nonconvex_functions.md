## Definition

By definition, a function is nonconvex if it is not convex. Nonconvex functions can be modelled using mixed integer linear constraints. We are interested in the following class of problems with form:

$$
\begin{align}
\min \quad& \sum^n_{j - 1} f_j (x_j) \\ 
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

Figure 1 shows a PWL function (on a bounded interval) of form:

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

and $f(x)$ can be replaced by $\sum^{K - 1}_{k = 0} \left[f(\ell_k) + c_k (u_k - \ell_k) \right]$.

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




