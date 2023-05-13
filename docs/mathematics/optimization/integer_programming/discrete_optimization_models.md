## Discrete Optimization Models

A discrete optimization or an integer programming model is an optimization problem where some of the optimization variables are required to take integer values:

$$
\begin{align}
\min \quad& f(\mathbf{x}) \\ 
\text{s.t.} \quad& g_i(\mathbf{x}) \leq b_i, \ i = 1, \ldots, m \\
& \mathbf{x} \in \mathbb{R}^{n - p} \times \mathbb{Z}^p.
\end{align}
$$

If the objective and constraints of a discrete optimization problem consists of linear functions then it is known as a **linear discrete optimization problem** or a **mixed integer linear program**:

$$
\begin{align}
\min \quad& \mathbf{c}^T \mathbf{x} \\ 
\text{s.t.} \quad& \mathbf{A} \mathbf{x} \geq \mathbf{b} \\ 
& \mathbf{x} \in \mathbb{R}^{n - p} \times \mathbb{Z}^p.
\end{align}
$$

Discrete optimization involes optimization over a nonconvex set of feasible solutions.

## Binary Optimization Models

If the discrete variables are required to be binary, then it is a binary optimization model:

$$
\begin{align}
\min \quad& f(\mathbf{x}) \\
\text{s.t.} \quad& g_i (\mathbf{x}) \leq b_i, \ i = 1, \ldots, m \\
&\mathbf{x} \in \mathbb{R}^{n - p} \times \left\{ 0, 1 \right\}^p.
\end{align}
$$

## Examples

### Indivisible Decisions

Given a set of supply ports and a set of demand ports with given supplies and demans, we are interested in formulating how many cargo ships to lease for each route (supply-demand pair) at minimum cost:

$$
\begin{align}
\min \quad& \sum_{i \in I} \sum_{j \in J} c_{ij} y_{ij} \\ 
\text{s.t.} \quad& \sum_{i \in I} x_{ij} \geq d_{j}, \ \forall j \in J \\
& \sum_{j \in J} x_{ij} \leq s_i, \ \forall i \in I \\ 
& x_{ij} \leq U y_{ij}, \ \forall i \in I, j \in J \\
& x_{ij} \geq 0, \ y_{ij} \in \mathbb{Z}_{+}, \ \forall i \in I, j \in J.
\end{align}
$$

## Yes/No Decisions

Given a set of projects with their returns, costs, and an overall budget, we would like to decide whether to invest in a project or not to maximize returns:

$$
\begin{align}
\max \quad& \sum^{n}_{j = 1} r_j x_j \\ 
\text{s.t.} \quad& \sum^n_{j = 1} c_j x_j \leq B \\ 
& x_j \in \left\{ 0, 1 \right\}, \ \forall j = 1, \ldots, n.
\end{align}
$$

## Logical Conditions

A logical condition of investing in project 1 results in a must in investing in projects 2 and 3:

$$
\begin{align}
\max \quad& \sum^n_{j = 1} r_j x_j \\
\text{s.t.} \quad& \sum^n_{j = 1} c_j x_j \leq B \\
&x_1 \leq x_2 \\ 
&x_1 \leq x_3 \\ 
&x_j \in \left\{0, 1 \right\}, \ j = 1, \ldots, n.
\end{align}
$$

