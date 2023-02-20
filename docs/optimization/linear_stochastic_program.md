## Two-Stage Stochastic Program Formulation

A general two-stage stochastic program can be formulated as:

$$
\begin{align}
\min_{x, y(\cdot)} \quad& cx + E_{w} \left[ q(w)^T y(w) \right] \\ 
\text{s.t} \quad& Ax \leq b \\
\quad& T(w)x + Wy(w) \leq h(w), \quad \forall w \in W \\
\quad& y(w) \geq 0, \quad \forall w \in W.
\end{align}
$$

If we are dealing with discrete random variable, then:

$$
\begin{align}
\min_{x, y_i} \quad& cx + \sum^{S}_{i} p_i q^T_i y_i \\
\text{s.t} \quad& Ax \leq b \\
\quad& T_i x + W y_i \leq h_i, \quad \forall i = 1, \ldots, S \\
\quad& y_i \geq 0, \quad \forall i = 1, \ldots, S
\end{align}
$$

## Example - Stochastic Inventory Control

### Problem Definition

Consider a company that designs, produces, and sells winter items such as 
ski jackets. The company must commit to a specific production quantity, 
$x$, before knowing the exact demand, $d$, 3 months before the winter season
starts. Demand $d$ is estimated as a random variable. After seeing the demand, the company decides how many to sell and how many to sell at a discounted price $v$. This is called Decision Making under Uncertainty, since decision $x$ is made under uncertain demand $d$.

### Problem Formulaton

The decision variables for the optimization problem are:

1. **Here-and-Now decision**: production quantity $x$
2. **Wait-and-See decision**: Sell quantity $y$, discount (savage) quantity $z$

The objective function can be defined as minimizing the production cost and expected future cost which yields to a two-stage stochastic program:

**First Stage**: Problem with $x$ as first-stage decision:

$$
\begin{align}
\min_{x} \quad& cx + E_d \left[ Q(x, d) \right] \\
\text{s.t} \quad& 0 \leq x \leq \bar{x}
\end{align}
$$

**Second Stage**: Problem with second-stage decision $y$ and $v$. Note that
the second-stage decisions depend on $d$, i.e., $y$ and $z$ are functions of $d$:

$$
\begin{align}
Q(x, d) = \min_{y, z} \quad& -ry - sz \\ 
\quad \text{s.t} \quad& y \leq d \\
\quad& y + z \leq x \\
\quad& y \geq 0, z \geq 0
\end{align}
$$

### Problem Reformulation

The two-stage program can be combined into a single stage program:

$$
\begin{align}
\min_{x} \quad& cx + E_d \left[\min_{y(d), z(d)} -ry(d) - sz(d) \right] \\ 
\text{s.t} \quad& 0 \leq x \leq \bar{x} \\ 
\quad& y(d) \leq d, \quad \forall d \in D \\
\quad& -x + y(d) + z(d) \leq 0, \quad \forall d \in D \\
\quad& y(d) \geq 0, z(d) \geq 0 \quad \forall d \in D,
\end{align}
$$

or equivalently:

$$
\begin{align}
\min_{x, y(\cdot), z(\cdot)} \quad& cx + E_d \left[ -ry(d) - sz(d) \right] \\ 
\text{s.t} \quad& 0 \leq x \leq \bar{x} \\ 
\quad& y(d) \leq d, \quad \forall d \in D \\
\quad& -x + y(d) + z(d) \leq 0, \quad \forall d \in D \\
\quad& y(d) \geq 0, z(d) \geq 0 \quad \forall d \in D.
\end{align}
$$

Suppose the demand $d$ is a discrete random variable with $S$ scenarios, 
$d_1, \ldots, d_S$ each $d_i$ with a probability $p_i$. Suppose each policy 
$y(\cdot)$ has values $y_1, \ldots, y_S$ corresponding to $d_i$'s. Then 
the problem can be converted to a deterministic Linear Program:

$$
\begin{align}
\min_{x, y_i, z_i} \quad& cx + \sum^S_{i = 1} p_i \left( -ry_i - sz_i \right) \\ 
\text{s.t} \quad& 0 \leq x \leq \bar{x} \\ 
\quad& y_i \leq d_i, \quad \forall d \in D \\
\quad& -x + y_i + z_i \leq 0, \quad \forall d \in D \\
\quad& y_i \geq 0, z_i \geq 0 \quad \forall d \in D.
\end{align}
$$

<figure markdown>
</figure>