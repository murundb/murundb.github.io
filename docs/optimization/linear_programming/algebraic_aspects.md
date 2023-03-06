## Contraint Concepts

1. **Active Contraints**

    A linear constraint that is satisfied as equality at a given point is said to be **active** or **binding** at that point. Otherwise, if an inequality constraint is satisfied as strict inequality at a point,
    it is called **inactive**.

2.  **Linear Independent Constraints**

    If the normal direction of two or more linear constraints are **linearly independent**, then these constraints are called linearly independent.

3. **Linearly Independent Active Constraints**

    Active constraints that are linearly independent.

## Standard Form on Linear Programming

A **standard form** linear program consists of equality constraints and nonnegative contraints on all optimization variables. It can be written as:

$$
\begin{align}
\min \quad& \mathbf{c}^T \mathbf{x} \\
\text{s.t} \quad& \mathbf{A} \mathbf{x} = \mathbf{b}\\
\quad& \mathbf{x} \geq 0,
\end{align}
$$

where $\mathbf{x} \in \mathbb{R}^n$, $\mathbf{A} \in \mathbb{R}^{m \times n}$, and the $m$ equality constraints are linearly independent.

Every LP can be written equivalently in the standard form. For example:

1. **Objective function conversion**

    $\max \mathbf{c}^T \mathbf{x} \longrightarrow -\min -\mathbf{c}^T \mathbf{x}$

2. **Inequality constraint conversion**

    $\mathbf{a}^T_i \mathbf{x} \geq b_i \longrightarrow \mathbf{a}^T_i \mathbf{x} - s_i = b_i, \ s_i \geq 0$

    $\mathbf{a}^T_i \mathbf{x} \leq b_i \longrightarrow \mathbf{a}^T_i \mathbf{x} + s_i = b_i, \ s_i \geq 0$

4. **Negativity conversion**

    $\mathbf{x}_j \leq 0 \longrightarrow \mathbf{x}'_j \geq 0$, by replacing $\mathbf{x}_j$ with $-\mathbf{x}'_j$

5. **Free variable conversion**

    $\mathbf{x}_j$ is a free variable $\longrightarrow$ replace $\mathbf{x}_j = \mathbf{x}^+_j - \mathbf{x}^-_j, \ \mathbf{x}^+_j \geq 0, \mathbf{x}^-_j \geq 0$

### Example

Consider the following LP as another example:

$$
\begin{align}
\max \quad& x_1 - x_2 \\
\text{s.t} \quad& x_1 + x_2 \leq 2 \\
\quad& 2x_1 - x_2 \geq 3 \\
\quad& x_1 \leq 0, \ x_2 \ \text{free}.
\end{align}
$$

First, we can convert the inequality constraints into equality constraints:

$$
\begin{align}
-\min \quad& -x_1 + x_2 \\
\text{s.t} \quad& x_1 + x_2 + s_1 = 2, \ s_1 \geq 0 \\
\quad& 2x_1 - x_2 - s_2 = 3, \ s_2 \geq 0 \\
\quad& x_1 \leq 0, \ x_2 \ \text{free}.
\end{align}
$$

Then we convert the free variable:

$$
\begin{align}
-\min \quad& x_1 + x_2 - x_3 \\
\text{s.t} \quad& -x_1 + x_2 - x_3 + s_1 = 2 \\
\quad& -2x_1 - x_2  + x_3 - s_2 = 3 \\
\quad& x_1, x_2, x_3, s_1, s_2 \geq 0.
\end{align}
$$


## Basic Solution

The unique solution of $n$ linearly independent active constraints in $\mathbb{R}^n$ is called **basic solution**. A basic solution that is feasible is called **basic feasible solution**. For example, consider the LP shown in Figure 1:

1. $\mathbf{x}^1, \mathbf{x}^2, \mathbf{x}^3, \mathbf{x}^4$ are basic feasible solutions.
2. $\mathbf{x}^5, \mathbf{x}^6$ are basic solutions but not feasible.

<figure markdown>
  ![basic_solution](/assets/images/optimization/light/basic_solution.png#only-light){ width="300" }
  ![basic_solution](/assets/images/optimization/dark/basic_solution.png#only-dark){ width="300" }
  <figcaption>Figure 1 Basic solution of a polyhedron</figcaption>
</figure>


Basic feasible solutions are **extreme points** of the polyhedron and vice versa. In order words, basic feasible solution is an algebraic description of an extreme point.

For a standard form LP, we have $m$ linearly independent active constraints. We need $n - m$ additional linearly independent active constraints which can be obtained from the nonnegative constraints, $\mathbf{x} \geq 0$. 

To find basic solutions in standard form LP:

1. Since $\mathbf{A} \mathbf{x} = \mathbf{b}$ has $m$ linearly independent rows, there are also $m$ linearly independent columns. Choose $m$ such linearly independent columns and denote the corresponding matrix as **basis matrix**, $\mathbf{B} \in \mathbb{R}^{m \times m}$. The corresponding $m \mathbf{x}_j$'s are denoted as **basic variables**, $\mathbf{x}_B$.

2. Partition $\mathbf{A}$ as $\mathbf{A} = \left[\mathbf{B}, \mathbf{N} \right]$, where $\mathbf{N}$ is $m \times (n - m)$. The corresponding $(n - m) \mathbf{x}_j$'s are denoted as $\mathbf{x}_N$, **nonbasic variables**.

3. Choose $\mathbf{x}_j = 0$ for all $i$ corresponds to the columns in $\mathbf{N}$, such that $\mathbf{x}_N = 0$. We can write the $n$ active constraints as:

    $$
    \begin{align}
    \left[
    \begin{array}{cc}
    \mathbf{B} & \mathbf{N} \\ 
    \mathbf{0} & \mathbf{I}
    \end{array}
    \right]
    \left[
    \begin{array}{c}
    \mathbf{x}_B\\ 
    \mathbf{x}_N
    \end{array}
    \right]
    =
    \left[
    \begin{array}{c}
    \mathbf{b} \\
    \mathbf{0}
    \end{array}
    \right]
    \end{align}
    $$

    Since $\mathbf{B}$ is an invertible matrix, and $\mathbf{I}$ is an identity matrix, the entire matrix is invertible. Therefore, $n$ active constraints are linearly independent and has a unique solution, which is the basic solution. 

4. The solution can be computed as:

$$
\begin{align}
&\mathbf{x}_B = \mathbf{B}^{-1} \mathbf{b} \\
&\mathbf{x}_N = \mathbf{0}.
\end{align}
$$

Not every LP has a basic feasible solution, i.e., not every polyhedron has an extreme point (e.g., a line or a halfspace). **A polyhedron $P$ has an extreme point if and only if it does not contain a line. A feasible standard form LP always has a basic feasible solution.** 

If a LP has a finite optimal solution, then an optimal solution is a basic feasible solution. Note that this does not mean that all optimal solutions must be basic feasible solution. Hence, for LPs, we only need to look for basic feasible solutions and select the solution with the minimum objective cost.


### Example

Consider a standard form LP:

$$
\begin{align}
\min \quad& x_1 + x_2 - x_3 \\
\text{s.t.} \quad& -x_1 + x_2 - x_3 + x_4 = 2 \\
\quad& -2x_1 + x_2 + x_3 - x_5 = 3 \\
\quad& x_1, x_2, x_3, x_4, x_5 \geq 0.
\end{align}
$$

The objective function can be written as $\mathbf{c}^T \mathbf{x}$, where $\mathbf{c} = \left[1, 1, -1, 0, 0 \right]^T$, and the equality constraints can be written as $\mathbf{A} \mathbf{x} = \mathbf{b}$ with:

$$
\mathbf{A} = 
\left[
\begin{array}{ccccc}
-1 & 1 & -1 & 1 & 0 \\
-2 & 1 & 1 & 0 & -1
\end{array}
\right],
\quad
\mathbf{b} = 
\left[
\begin{array}{c}
2 \\
3
\end{array}
\right].
$$

We can choose a basis matrix $\mathbf{B}$ as the first two columns of $\mathbf{A}$:

$$
\mathbf{B} = \left[ \mathbf{A}_1 \ \mathbf{A}_2 \right]
= \left[
\begin{array}{cc}
-1 & 1 \\
-2 & 1
\end{array}
\right],
$$

which corresponds to $\mathbf{x}_B = \left[ x_1, x_2 \right]^T$. $\mathbf{N}$ will be:

$$
\mathbf{N} = \left[
\begin{array}{ccc}
-1 & 1 & 0 \\
1 & 0 & -1
\end{array}
\right],
$$

which corresponds to $\mathbf{x}_N = \left[ x_3, x_4, x_5 \right]^T$. The solution is then:

$$
\begin{align}
\mathbf{x}_B &= \mathbf{B}^{-1} \mathbf{b} = 
\left[
\begin{array}{c}
-1 \\
1
\end{array}
\right] \\
\mathbf{x}_N &=
\left[
\begin{array}{c}
0 \\
0 \\
0
\end{array}
\right]. \\
\end{align}
$$

The basic solution is $\mathbf{x} = \left[-1, 1, 0, 0, 0 \right]^T$ which is not feasible since $x_1 < 0$. Choosing the third and the fourth column yields to a basic feasible solution $\mathbf{x} = \left[ 0, 0, 3, 5, 0 \right]$.
