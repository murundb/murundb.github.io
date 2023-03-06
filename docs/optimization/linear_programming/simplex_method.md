## Local Search

Local search is generalized version of gradient descent or Newton's method and can be described as follows:

> **Algorithm:** Local Search 
>
> $\quad$Start from feasible solution $\mathbf{x}_t$.   
> $\quad$Find a direction $\mathbf{d}$ that points inside the feasible region and decreases the objective value.   
> $\quad$Find a step length $\theta$ along $\mathbf{d}$ to move to next iterate: $\mathbf{x}_{t + 1} \leftarrow \mathbf{x}_t + \theta \mathbf{d}$.   
> $\quad$If no good direction or step length can be found, terminate. Otherwise, $t \leftarrow t + 1$ and repeat.   

The only class of optimization problems for which local search **can guarantee** to find a global minimum is the class of convex programs, i.e., minimization problems with a convex objective function and a convex feasible region, since for this class of problems, a local minimum is a global minimum. 

**Theorem**. *A locally minimum of a convex optimization problem is also a global minimum*.

*Proof*. Let $\mathbf{x}^*$ be a local minimum of $\min_{\mathbf{x} \in X} f(\mathbf{x})$, where $f(\mathbf{x})$ is a convex function and $X$ is a convex set. Then by definition, there exists a neighborhood of $\mathbf{x}^*$ in $X$, denoted as $U_{\epsilon} (\mathbf{x}^*) = \left\{ \mathbf{x}: \ ||\mathbf{x} - \mathbf{x}^*|| \leq \epsilon \right\}$ for some $\epsilon > 0$, where $f(\mathbf{x}^*) \leq f(\mathbf{x})$ for all $\mathbf{x} \in U_{\epsilon}(\mathbf{x}^*)$. Now suppose there is a different point $\hat{\mathbf{x}} \in X$ such that $f(\hat{\mathbf{x}}) < f(\mathbf{x}^*)$. Since $X$ is a convex set, for any $0 < \lambda < 1$, the point $\mathbf{x} = \lambda \hat{\mathbf{x}} + (1 - \lambda) \mathbf{x}^*$ is in $X$. We can choose $\lambda$ to be very close to zero such that $\mathbf{x}$ is also in the neighborhood $U_{\epsilon}(\mathbf{x}^*)$. Since $f$ is convex, we have $f(\mathbf{x}) \leq \lambda f(\hat{\mathbf{x}}) + (1 - \lambda) f(\mathbf{x}^*) < \lambda f(\mathbf{x}^*) + (1 - \lambda) f(\mathbf{x}^*) = f(\mathbf{x}^*)$, i.e., $\mathbf{x}$ is a point in $U_{\epsilon} (\mathbf{x}^*)$ with a strict lower objective value than $\mathbf{x}^*$, which contradicts with $\mathbf{x}^*$ being a local minimum in $U_{\epsilon} (\mathbf{x}^*)$.

## Simplex Method

### Overview

> **Algorithm:** Simplex Method 
>
> $\quad$Start from basic feasible solution (BFS) $\mathbf{x}_t$.   
> $\quad$Find a direction $\mathbf{d}$ that points to **an adjactent BFS** and decreases the objective value.   
> $\quad$Find a step length $\theta$ so that the next iterate, $\mathbf{x}_{t + 1} \leftarrow \mathbf{x}_t + \theta \mathbf{d}$, is a **BFS**.   
> $\quad$If no such direction or step length can be found, terminate. Otherwise, $t \leftarrow t + 1$ and repeat.   

An important point is that the simplex method goes from one BFS to another BFS. This is because if an LP has a BFS (which is true for any standard form LP) and if the optimal objective value is bounded, then a BFS is an optimal solution.

### Start from BFS

Recall that a basic feasible solution is a feasible solution where all equality constraints $\mathbf{A}\mathbf{x} = \mathbf{b}$ are satisfied and out of all the active constraints, $n$ of them are linearly independent. A BFS $\mathbf{x}$ can be partioned into two parts: $\mathbf{x} = \left[ \mathbf{x}_B, \mathbf{x}_N \right]$, the basic variable part $\mathbf{x}_B$ and the nonbasic variable part $\mathbf{x}_N$. The nonbasic variable is always zero, i.e., $\mathbf{x}_N = \mathbf{0}$. The basic variable $\mathbf{x}_B = \left[x_{B,1}, \ldots, x_{B, m} \right]$ is associated with the basis matrix $\mathbf{B} = \left[ \mathbf{A}_1, \ldots, \mathbf{A}_m \right]$. In particular we have:

$$
\mathbf{b} = \mathbf{A} \mathbf{x} = \left[\mathbf{B}, \mathbf{N} \right]
\left[
\begin{array}{c}
\mathbf{x}_B \\
\mathbf{x}_N \\
\end{array}
\right] 
= \mathbf{B} \mathbf{x}_B + \mathbf{N} \mathbf{x}_N = \mathbf{B} \mathbf{x}_B \ \Rightarrow \ \mathbf{x}_B = \mathbf{B}^{-1} \mathbf{b}.
$$

### Find a Feasible Direction

Starting from BFS $\mathbf{x}$, the algorithm moves to a new point $\hat{\mathbf{x}} = \mathbf{x} + \theta \mathbf{d}$. The new points needs to be a feasible point and and adjacent BFS. 

1. For $\hat{\mathbf{x}}$ to be feasible, we have constraint $\mathbf{A} \hat{\mathbf{x}} = \mathbf{b}$ or equivalently, $\mathbf{A} (\mathbf{x} + \theta \mathbf{d}) = \mathbf{b}$. Since we already have $\mathbf{A} \mathbf{x} = \mathbf{b}$ and $\theta > 0$, we get $\mathbf{A} \mathbf{d} = \mathbf{0}$ or equivalently:

    $$
    \mathbf{A} \mathbf{d} = \left[ \mathbf{B}, \mathbf{N} \right] 
    \left[
    \begin{array}{c}
    \mathbf{d}_B \\
    \mathbf{d}_N
    \end{array}
    \right] = 
    \mathbf{B} \mathbf{d}_B + \mathbf{N} \mathbf{d}_N = \mathbf{0}.
    $$

2. Mathetmatically, an **adjacent BFS** is defined as:

    **Definition** (Adjacent BFS). *Two BFSs $\hat{\mathbf{x}}$ and $\mathbf{x}$ of a polyhedron $P$ are called adjacent, if they share the same $n - 1$ linearly independent active constraints.*

    Geometrically, the solutions of $n - 1$ linearly independent equations in $n$ variables form a line. Hence, two adjacent BFS are connected by line segment on this line. This line segment is called an **edge** of the polyhedron. 

    **Proposition**. *In a standard form LP, two BFSs $\mathbf{x}$ and $\hat{\mathbf{x}}$ are adjacent if they have the same $n - m - 1$ nonbasic variables.*

    *Proof*. First, each BFS has $n - m$ nonbasic variables, which are all zero. Since $\mathbf{x}$ and $\hat{\mathbf{x}}$ share $n - 1$ active constraints and both have to satisfy all the $m$ equality constraints $\mathbf{A} \mathbf{x} = \mathbf{b}$, then they can only differ in one nonbasic variable. In other words, they have the same $n - m - 1$ nonbasic variables.

    For example, if the BFS $\mathbf{x} \in \mathbb{R}^5$ has two basic variables $x1, x2$ and three nonbasic variables $x_3, x_4, x_5$, then its adjacent BFS $\hat{\mathbf{x}}$ should share two same nonbasic variables $x_3, x_4$ or $x_3, x_5$ or $x_4, x_5$, plus one different nonbasic variable $x_1$ or $x_2$. In other words, going from $\mathbf{x}$ to $\hat{\mathbf{x}}$, two nonbasic variables of $\mathbf{x}$ stay as nonbasic variables of $\hat{\mathbf{x}}$ and only one of the nonbasic variables of $\mathbf{x}$ becomes a basic variable of $\hat{\mathbf{x}}$.

(2) gives us a way to specify $\mathbf{d}_N \in \mathbb{R}^{n - m}$ because $n - m - 1$ nonbasic variables of $\mathbf{x}$ need to remain nonbasic, i.e., at zero value, $\mathbf{d}_N$ must have $n - m - 1$ components at zero value; and because one nonbasic variable of $\mathbf{x}$ needs to become basic, i.e., to increase from zero value to some positive value, then the corresponding component of $\mathbf{d}_N$ has to be positive number, and without loss of generality, we can fix this component at value 1 and use the step length $\theta$ to control its size.

We can select a nonbasic variable $x_j$ (initially $x_j = 0$), increase $x_j$ to $\theta \geq 0$, while keeping other nonbasic variables at zero. In other words, the simplex method makes $\mathbf{d}_N = \left[0, \ldots, 0, 1, 0, \ldots, 0 \right]^T := \mathbf{e}^T_j$ for some $d_j = 1$, where $\mathbf{e}_j$ is the $j$-th unit vector. It follows that:

$$
\mathbf{B} \mathbf{d}_B + \mathbf{N} \mathbf{d}_N = \mathbf{B} \mathbf{d}_B + \mathbf{A}_j = \mathbf{0},
$$

where $\mathbf{A}_j$ is the column in $\mathbf{N}$ associated with the 1 component in $\mathbf{d}_N$ of the column of the matrix $\mathbf{A}$. Since $\mathbf{B}$ is invertible, we have:

$$
\mathbf{d}_B = - \mathbf{B}^{-1} \mathbf{A}_j.
$$

Hence, we have $\mathbf{d} = \left[-\mathbf{B}^{-1} \mathbf{A}_j, \mathbf{e}_j \right]$, which is the **$j$-th basic direction**.

### Measure the Cost Change

The change of cost by moving along the $j$-th basic direction can be calculated as:

$$
\mathbf{c}^T (\mathbf{x} + \theta \mathbf{d}) - \mathbf{c}^T \mathbf{x} = \theta \mathbf{c}^T \mathbf{d} = \theta \left( \mathbf{c}^T_B \mathbf{d}_B + \mathbf{c}^T_N \mathbf{d}_N \right) = \theta \left(-\mathbf{c}^T_B \mathbf{B}^{-1} \mathbf{A}_j + c_j \right) := \theta \bar{c}_j.
$$

**Definition**. *Let $\mathbf{x}$ be a basic solution, let $\mathbf{B}$ be an associated basis matrix, and let $\mathbf{c}$_B be the vector of costs of the basic variables. For each $j$, we define the **reduced cost** $\bar{c}_j$ of the variable $x_j$ to be $\bar{c}_j = c_j - \mathbf{c}^T_B \mathbf{B}^{-1} \mathbf{A}_j$*.

$\bar{c}_j$ is the unit change of cost when me move along the $j$-th basic direction. Clearly, we would select the $j$-th basic direction only if $\bar{c}_j < 0$, i.e., the cost reduces by going to the specified direction. This is the criterion for selecting a feasible direction from $n - m$ possible feasible directions.

**Theorem** (Optimality Conditions). *Consider a basic feasible solution $\mathbf{x}$ associated with a basis matrix $\mathbf{B}$, and let $\bar{\mathbf{x}}$ be the corresponding vector of reduced costs.*

*1. If $\bar{\mathbf{c}} \geq 0$, then $\mathbf{x}$ is optimal.*

*2. If $\mathbf{x}$ is optimal and nondegenerate, then $\bar{\mathbf{c}} \geq 0$.*


### Find the Step Length

Once a basis direction is selected, i.e., $\bar{c}_j < 0$ for some $j \in N$, we want to go along this direction as far as possible to maximize the cost reduction. We want to move until some basic variable $x_{B, l}$ becomes zero at $\mathbf{x} + \theta^* \mathbf{d}$, where:

$$
\theta^* := \max \left\{ \theta \geq 0 \ | \ \mathbf{x} + \theta \mathbf{d} \in P \right\}.
$$

### Arrive at an Adjacent BFS

After moving by $\theta^* \mathbf{d}$, we have $x_{B, l} = 0$, i.e., $x_{B, l}$ becomes a nonbasic variable. At the same time, $x_j = \theta > 0$ becomes a basic variable. We may say that $x_j$ enters the basis and $x_{B, l}$ leaves the basis. If we look at the initial basis matrix $\mathbf{B}$ and the new basis matrix $\bar{\mathbf{B}}$, they only differ in one column:

$$
\begin{align}
\mathbf{B} &= \left[ \mathbf{A}_{B,1}, \ldots, \mathbf{A}_{B,l - 1}, \mathbf{A}_{B,l}, \mathbf{A}_{B,l + 1}, \ldots, \mathbf{A}_{B,m} \right] \in \mathbb{R}^{m \times m} \\
\bar{\mathbf{B}} &= \left[ \mathbf{A}_{B,1}, \ldots, \mathbf{A}_{B,l - 1}, \mathbf{A}_{B,j}, \mathbf{A}_{B,l + 1}, \ldots, \mathbf{A}_{B,m} \right] \in \mathbb{R}^{m \times m} \\
\end{align}
$$

**Theorem**. 

*1. $\bar{\mathbf{B}}$ is a basis matrix, that is, columns $\mathbf{A}_{B, i}, i \neq l$ and $\mathbf{A}_j$ are linearly independent.*

*2. The vector $\mathbf{y} = \mathbf{x} + \theta^* \mathbf{d}$ is a BFS associated with the basis matrix $\bar{\mathbf{B}}$*.


### Summary

> **Algorithm:** Simplex Method
>
> $\quad$**Step 1**
>
> $\quad$ We start the simplex method with a BFS $\mathbf{x}$ and the associated basis consisting of the basis matrix   
> $\quad$ $\mathbf{B} = \left[ \mathbf{A}_{B, 1}, \ldots, \mathbf{A}_{B, m} \right]$, where $\mathbf{A}_{B, i}$'s are the basic columns of $\mathbf{A}$.   
>
> $\quad$**Step 2**
> 
> $\quad$ Compute the reduced cost $\bar{c}_j = c_j - \mathbf{c}^T_B \mathbf{B}^{-1} \mathbf{A}_j$ for each nonbasic variable $x_j$. There are two possibilities:  
>    
> $\quad$ 2.1 If all the reduced costs are nonnegative, the current BFS is optimal, and the algorithm terminates   
> $\quad$ 2.2 Otherwise, select some $j$ with $\bar{c}_j < 0$, so $x_j$ enters the basis   
>
> $\quad$**Step 3**
>
> $\quad$ Compute $\mathbf{d}_B = -\mathbf{B}^{-1} \mathbf{A}_j$. There are two possibilities:
>   
> $\quad$ 3.1 If $\mathbf{d}_B \geq 0$, we know the optimal cost is $- \infty$, and the algorithm terminates   
> $\quad$ 3.2 Otherwise, if some entry of $\mathbf{d}_B$ is negative, continue to next step   
>
> $\quad$**Step 4**
>
> $\quad$ If some entry of $\mathbf{d}_B$ is negative, compute the stepsize $\theta^*$ by the min-ratio test:  
> $\quad$ $\theta^* = \min_{\left\{ i = 1, \ldots, m \ | \ d_{B, i} < 0> \right\}} \frac{x_{B, i}}{-d_{B, i}}$.   
> $\quad$ Suppose the index $B, l$ achieves the minimum: $x_{B, l}$ exits the basis.
>
> $\quad$**Step 5**
>
> $\quad$ For the new basis matrix $\bar{\mathbf{B}}$ by replacing $\mathbf{A}_{B, l}$ column with $\mathbf{A_j}$. The new BFS $\mathbf{y}$ has basic variable part   
> $\quad$ $y_{B, i} = x_{B, i} + \theta^* d_{B, i}$ and $y_j = \theta^*$. Start new iteration.

## Degenerate Problems

**Definition**. *A BFS of a standard for LP is said to be **nondegenerate**, if every basic variable is positive, i.e., $x_{B, i} > 0$ for all $i = 1, \ldots, m$. A BFS pf a stamdard form LP is said to be **degenerate**, if some basic variable $x_{B, i}$ is zero.*

The simplex method introduced before moves by a positive amount $\theta^* > 0$ along a direction $\mathbf{d}$, and no BFS can be visited twice if every BFS is non-degenerate. Since any polyhedron can only have a finite number of BFS, the algorithm must terminate after a finite number of iterations.

**Theorem** (Correctness of the Simplex Method). *If every BFS of a standard form LP is nondegenerate, then the simplex method always terminates in a finite number of steps, either:*

*1. Finds an optimal solution $\mathbf{x}_B = \mathbf{B}^{-1} \mathbf{b}$ and $\mathbf{x}_N = \mathbf{0}$, with the associated optimal basis matrix $\mathbf{B}$*

*2. Finds a direction $\mathbf{d} = \left[ \mathbf{d}_B, \mathbf{d}_N \right]$, such that $\mathbf{A} \mathbf{d} = \mathbf{0}$, $\mathbf{d}_B \geq 0$, $\mathbf{d_N} = \left[ 0, \ldots, 0, 1, 0, \ldots, 0 \right]^T$ with $j$-th element being $1$, $\mathbf{c}^T \mathbf{d} < 0$, and the optimal cost is $- \infty$.*

If not careful, the simplex method may run into cycles and never terminates.

### Bland's Rule

1. Among all the eligible choices of nonbasic variables to enter the basis, select the one with the smallest subscript.

2. Among all the eligible choices of basic variables to exit the basis, select the one with the smallest subscript.

For example, in an iteration of the simplex method, we have basic variables $\mathbf{x}_B = (x_5 = 0, x_6 = 0, x_7 = 1)$ and the reduced costs of the nonbasic variables $x_1, x_2, x_3, x_4$ are $(-1/2, 20, -3/4, 6)$, respectively. Then, both $x_1$ and $x_3$ are candidates to enter the basis. Per Bland's rule, choose $x_1$ to enter, which has smaller subscript than $x_3$. Suppose the feasible direction is $\mathbf{d} = -\mathbf{B}^{-1} \mathbf{A}_1 = (-1/4, -1/2, 0)$. The min-ratio test has $\theta^*  = \min \left\{0, 1/4, 0, 1/2 \right\} = 0$, so both $x_5$ and $x_6$ can exit. Per Bland's rule, pick $x_5$.

## Phase I/ Phase II Simplex Method

Finding a BFS is extremely challenging. In two-phase method, the first phase, Phase I, finds an initial BFS for a standard form LP, or detects the LP is infeasible. In the second phase, Phase II, it uses the initial BFS to start the simplex method.

1. For any standard form LP, we can always make the right-hand side vector $\mathbf{b}$ a nonnegative vector, i.e., $\mathbf{b} \geq 0$ by multiplying $-1$ to both sides of the $i$'th equality constraint if $b_i < 0$. We want to solve the standard form LP:

    $$
    \begin{align}
    \min \quad& \mathbf{c}^T \mathbf{x} \\
    \text{s.t.} \quad& \mathbf{A} \mathbf{x} = \mathbf{b} \\
    \quad& \mathbf{x} \geq 0,
    \end{align}
    $$

    where $\mathbf{b} \geq 0$.

2. Construct an auxiliary problem, which we call the Phase I LP:

    $$
    \begin{align}
    z^* = \min \quad& y_1 + y_2 + \ldots + y_m \\
    \text{s.t.} \quad& \mathbf{A} \mathbf{x} + \mathbf{I} \mathbf{y} = \mathbf{b} \\
    \quad& \mathbf{x} \geq 0, \mathbf{y} \geq 0.
    \end{align}
    $$

    Here we introduce auxiliary variable $\mathbf{y} = (y_1, \ldots, y_m)$, similar to the case where we introduce slack variables (but here the purpose is not to transform a LP into standard form, but to find an initial BFS to detect infeasibility).

    For this problem, we can easily find an initial BFS, namely $\mathbf{x} = \mathbf{0}, \mathbf{y} = \mathbf{b}$. Hence, we can solve the Phase I LP using the simplex method starting with the BFS $\mathbf{x} = \mathbf{0}, \mathbf{y} = \mathbf{b}$. After Phase I problem is solved, the optimal cost $z^*$ has two possibilities: $z^* = 0$ or $z^* > 0$.

    1. If $z^* = 0$, then the optimal solution $y^*_1, \ldots, y^*_m$ must be all zero, because each of $y^*_i \geq 0$ and their sum is zero. In this case, the $x$-variable part $\mathbf{x}^* = (x^*_1, \ldots, x^*_n)$ is a feasible solution to the original problem, i.e., $\mathbf{A} \mathbf{x}^* = \mathbf{b}$ and $\mathbf{x}^* \geq 0$. Furthermore, either $\mathbf{x}^*$ already contains all the basic variables, or after some simple operations, we can obtain a BFS to the original problem.

    2. If $z^* > 0$, then some $y^*_i > 0$. This shows the original problem is infeasible by the following theorem.

    **Theorem**. *The original LP is feasible if and only if $z^* = 0$.*

    *Proof*. If the original LP is feasible, there exists some $\mathbf{x}^*$ such that $\mathbf{A} \mathbf{x}^*$ and $\mathbf{x}^* \geq 0$. Then, $\mathbf{x} = \mathbf{x}^*, \mathbf{y} = \mathbf{0}$ is also feasible for the Phase I problem. The cost associated with this solution is 0. However, since we know $z^* \geq 0$, this feasible solution is actually optimal, that is, we have $z^* = 0$. For the other direction, if $z^* = 0$, let the optimal solution of the Phase I problem be $\mathbf{x}^*, \mathbf{y}^*$. Then $y^*_1, \ldots, y^*_m = 0$, therefore, $\mathbf{A} \mathbf{x}^* + \mathbf{I} \mathbf{y}^* = \mathbf{b}$ which implies $\mathbf{A} \mathbf{x}^* = \mathbf{b}$. We laso have $\mathbf{x}^* \geq 0$, so the original problem is feasible.

In summary:

> **Algorithm:** Two Phase Simple Method
>
> $\quad$**Phase I**
>
> $\quad$ Solve the Phase I LP. Denote the optimal cost as $z^*$. We have to possibilities:
> 
> $\quad$ 1. If $z^* > 0$, the original LP is infeasible. The algorithm terminates.   
> $\quad$ 2. If $z^* = 0$, a feasible solution to the original LP is found, from which we can obtain a BFS for the original LP.    
>
> $\quad$**Phase II**
>
> $\quad$ Solve the original LP by the simplex method, starting wit hthe BFS found in Phase I.


## Examples

### Simplex Method in Detail

Consider the following LP:

$$
\begin{align}
\max \quad& 2x_1 + 3x_2 \\
\text{s.t.} \quad& -x_1 + x_2 \leq 10 \\
\quad& 3x_1 + 2x_2 \leq 60 \\
\quad& 2x_1 + 3x_2 \leq 6 \\
\quad& x_1, x_2 \geq 0.
\end{align}
$$

1. The feasible region of this LP in $\mathbb{R}^2$ is shown in Figure 1.

    <figure markdown>
    ![simplex_example](/assets/images/optimization/light/simplex_example.png#only-light){ width="400" }
    ![simplex_example](/assets/images/optimization/dark/simplex_example.png#only-dark){ width="400" }
    <figcaption>Figure 1 A simplex example</figcaption>
    </figure>

    The blue dots are BFSs. The green dots are basic solutions but not feasible. In total, there are 10 basic solutions.

2. Transform the problem into a standard form LP (the simplex method works on standard form LP):

    $$
    \begin{align}
    \min \quad& -2x_1 - 3x_2 \\
    \text{s.t.} \quad& -x_1 + x_2 + x_3 = 10 \\
    \quad& 3x_1 + 2x_2 + x_4 = 60 \\
    \quad& 2x_1 + 3x_2 + x_5 = 60 \\
    \quad& x_1, x_2, x_3, x_4, x_5 \geq 0.
    \end{align}
    $$

    or in matrix form:

    $$
    \begin{align}
    \min \quad& \mathbf{c}^T \mathbf{x} \\ 
    \text{s.t.} \quad& \mathbf{A} \mathbf{x} = \mathbf{b} \\
    \quad& \mathbf{x} \geq 0,
    \end{align}
    $$

    where

    $$
    \mathbf{c} = 
    \left[
    \begin{array}{c}
    -2 \\
    -3 \\
    0 \\
    0 \\
    0
    \end{array}
    \right], \
    \mathbf{A} = 
    \left[
    \begin{array}{ccccc}
    -1 & 1 & 1 & 0 & 0 \\
    3 & 2 & 0 & 1 & 0 \\
    2 & 3 & 0 & 0 & 1
    \end{array}
    \right], \
    \mathbf{b} = 
    \left[
    \begin{array}{c}
    10 \\
    60 \\
    60
    \end{array}
    \right]
    $$

3. Start the simplex method:

    **Iteration 1**:

    1. **Choose a starting BFS**: Select the basis $\mathbf{B} = \left[ \mathbf{A}_3, \mathbf{A}_4, \mathbf{A}_5 \right]$. The corresponding basic solution is:

        $$
        \mathbf{x}_B = 
        \left[
        \begin{array}{c}
        x_3 \\
        x_4 \\
        x_5 
        \end{array}
        \right] = \mathbf{B}^{-1} \mathbf{b} = 
        \left[
        \begin{array}{c}
        10 \\
        60 \\
        60
        \end{array}
        \right], \
        \mathbf{x}_N = 
        \left[
        \begin{array}{c}
        x_1 \\
        x_2
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        0 \\
        0
        \end{array}
        \right],
        $$

        and the cost coefficients associated with the basic and nonbasic variables are:

        $$
        \mathbf{c}_B = 
        \left[
        \begin{array}{c}
        c_3 \\
        c_4 \\
        c_5 
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        0 \\
        0 \\
        0 
        \end{array}
        \right], \
        \mathbf{c}_N = 
        \left[
        \begin{array}{c}
        c_1 \\
        c_2
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        -2 \\
        -3
        \end{array}
        \right].
        $$

        Since $\mathbf{x}_B \geq 0$, the current basic solution is a BFS. Hence, we are ready to start the simplex method.
    
    2. **Compute the reduced costs for nonbasic variables:**

        $$
        \begin{align}
        \bar{c}_1 = c_1 - \mathbf{c}^T_B \mathbf{B}^{-1} \mathbf{A}_1 = -2 \\
        \bar{c}_2 = c_2 - \mathbf{c}^T_B \mathbf{B}^{-1} \mathbf{A}_2 = -3 \\
        \end{align}
        $$

        Both $\bar{c}_1$ and $\bar{c}_2$ are negative. Therefore, the current BFS is not optimal, and both $x_1$ and $x_2$ are candidates to enter the basis, i.e., to increase to a positive value. Let us take $x_2$ to enter the basis, and keep $x_1$ at zero.

    3. **Compute feasible direction $\mathbf{d}$:**

        Since we decided to increase $x_2$ and keep $x_1$ at zero, the nonbasic variable part of the feasible direction $\mathbf{d}_N$ is $\mathbf{d}_N = \left[0, 1 \right]^T$, and the basic variable part of the feasible direction $\mathbf{d}_B$ is:

        $$
        \mathbf{d}_B = -\mathbf{B}^{-1} \mathbf{A}_2 =
        \left[
        \begin{array}{c}
        -1 \\
        -2 \\
        -3
        \end{array}
        \right]
        $$

        Since all components of $\mathbf{d}_B$ are negative, we do not have an unbounded optimal solution, and we need to decide how far to go along this direction while still remaining in the feasible region.

    4. **Min-ratio test:** By going along the previously calculated direction, we are going from the initial BFS $\mathbf{x}$ to a new point $\mathbf{x} + \theta \mathbf{d}$:

        $$
        \begin{align}
        \mathbf{x} + \theta \mathbf{d} = 
        \left[
        \begin{array}{c}
        \mathbf{x}_B + \theta \mathbf{d}_B \\
        \mathbf{x}_N + \theta \mathbf{d}_N
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        x_{B, 1} + \theta d_{B, 1} \\ 
        x_{B, 2} + \theta d_{B, 2} \\
        x_{B, 3} + \theta d_{B, 3} \\
        x_1 + \theta \cdot 0 \\
        x_2 + \theta \cdot 1
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        x_3 + \theta d_3 \\
        x_4 + \theta d_4 \\
        x_5 + \theta d_5 \\
        x_1 \\
        x_2 + \theta
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        10 - \theta \\
        60 - 2\theta \\
        60 - 3\theta \\
        0 \\
        \theta
        \end{array}
        \right]
        \end{align}
        $$

        To decide the largest $\theta$ such that $\mathbf{x} + \theta \mathbf{d} \geq 0$, we need to do the min-ratio test:

        $$
        \theta^* = \min_{\left\{ i = 1, \ldots, m \ | \ d_{B, i} < 0 \right\}} \frac{x_{B, i}}{-d_{B, i}} = \min \left\{\frac{10}{1}, \frac{60}{2}, \frac{60}{3} \right\} = 10.
        $$

        Hence, $x_{B, 1} = x_3$ exits the basis.

    5. **The new basis:** The new basis $\bar{\mathbf{B}} = \left[ \mathbf{A_2}, \mathbf{A_4}, \mathbf{A_5} \right]$, which differs from the original basis only in one column: $\mathbf{A_3}$ is replaced by $\mathbf{A}_2$, i.e., $x_3$ exits the basis and $x_2$ enters the basis. The new basic and nonbasic variables are:

        $$
        \mathbf{x}_{\bar{B}} =
        \left[
        \begin{array}{c}
        x_2 \\
        x_4 \\
        x_5 
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        10 \\
        40 \\
        30 
        \end{array}
        \right], \ 
        \mathbf{x}_{\bar{N}} = 
        \left[
        \begin{array}{c}
        x_1 \\
        x_3
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        0 \\
        0
        \end{array}
        \right].
        $$

        Continue two the next iteration.

    **Iteration 2**:

    1. The new basis and its inverse are:

        $$
        \mathbf{B} = \left[\mathbf{A}_2, \mathbf{A}_4, \mathbf{A}_5 \right] = 
        \left[
        \begin{array}{ccc}
        1 & 0 & 0 \\
        2 & 1 & 0 \\
        3 & 0 & 1
        \end{array}
        \right], \ 
        \mathbf{B}^{-1} = 
        \left[
        \begin{array}{ccc}
        1 & 0 & 0 \\
        -2 & 1 & 0 \\
        -3 & 0 & 1
        \end{array}
        \right].
        $$

        The cost coefficients associated with the basic and nonbasic variables are:

        $$
        \mathbf{c}_B = 
        \left[
        \begin{array}{c}
        c_2 \\
        c_4 \\
        c_5 
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        -3 \\
        0 \\
        0 
        \end{array}
        \right], \
        \mathbf{c}_N = 
        \left[
        \begin{array}{c}
        c_1 \\
        c_3
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        -2 \\
        0
        \end{array}
        \right].
        $$
    
    2. **Compute the reduced costs for nonbasic variables:**

        $$
        \begin{align}
        \bar{c}_1 = c_1 - \mathbf{c}^T_B \mathbf{B}^{-1} \mathbf{A}_1 = 
        -2 - 
        \left[ 
        \begin{array}{ccc}
        -3 & 0 & 0
        \end{array}
        \right] 
        \left[
        \begin{array}{ccc}
        1 & 0 & 0 \\
        -2 & 1 & 0 \\
        -3 & 0 & 1
        \end{array}
        \right]
        \left[
        \begin{array}{ccc}
        -1 \\
        3 \\
        2
        \end{array}
        \right] = -5 \\
        \bar{c}_2 = c_2 - \mathbf{c}^T_B \mathbf{B}^{-1} \mathbf{A}_2 =
        0 - 
        \left[ 
        \begin{array}{ccc}
        -3 & 0 & 0
        \end{array}
        \right] 
        \left[
        \begin{array}{ccc}
        1 & 0 & 0 \\
        -2 & 1 & 0 \\
        -3 & 0 & 1
        \end{array}
        \right]
        \left[
        \begin{array}{ccc}
        1 \\
        0 \\
        0
        \end{array}
        \right] = 3. \\
        \end{align}
        $$

        $\bar{c}_1 < 0$, so the current BFS is not optimal, and $x_1$ enters the basis.

    3. **Compute feasible direction $\mathbf{d}$:**

        $$
        \mathbf{d}_N = 
        \left[
        \begin{array}{c}
        d_1 \\
        d_3
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        1 \\
        0
        \end{array}
        \right], \
        \mathbf{d}_B =
        \left[
        \begin{array}{c}
        d_2 \\
        d_4 \\
        d_5
        \end{array}
        \right]
        = -\mathbf{B}^{-1} \mathbf{A}_1 =
        \left[
        \begin{array}{ccc}
        1 & 0 & 0 \\
        -2 & 1 & 0 \\
        -3 & 0 & 1
        \end{array}
        \right]
        \left[
        \begin{array}{c}
        -1 \\
        3 \\
        2
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        1 \\
        -5 \\
        -5
        \end{array}
        \right].
        $$

        Since some components of $\mathbf{d}_B$ are negative, we do not have an unbounded optimal solution.

    4. **Min-ratio test:** By going along the previously calculated direction, we are going from the initial BFS $\mathbf{x}$ to a new point $\mathbf{x} + \theta \mathbf{d}$:

        $$
        \mathbf{x}_B + \theta \mathbf{d}_B = 
        \left[
        \begin{array}{c}
        10 \\
        40 \\
        30
        \end{array}
        \right] + 
        \theta 
        \left[
        \begin{array}{c}
        1 \\
        -5 \\
        -5
        \end{array}
        \right].
        $$

        To decide the largest $\theta$ such that $\mathbf{x} + \theta \mathbf{d} \geq 0$, we need to do the min-ratio test:

        $$
        \theta^* = \min_{\left\{ i = 1, \ldots, m \ | \ d_{B, i} < 0 \right\}} \frac{x_{B, i}}{-d_{B, i}} = \min \left\{\frac{40}{-(-5)}, \frac{60}{2}, \frac{30}{-(-5)} \right\} = 6.
        $$

        Hence, $x_{B, 3} = x_5$ becomes zero and exits the basis.

    5. **The new basis:** The new basis matrix is $\bar{\mathbf{B}} = \left[ \mathbf{A_2}, \mathbf{A_4}, \mathbf{A_1} \right]$. The new nonbasis matrix is $\bar{\mathbf{B}} = \left[ \mathbf{A}_5, \mathbf{A}_3 \right]$. The new BFS is:

        $$
        \mathbf{x}_{\bar{B}} =
        \left[
        \begin{array}{c}
        x_2 \\
        x_4 \\
        x_1 
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        16 \\
        10 \\
        6 
        \end{array}
        \right], \ 
        \mathbf{x}_{\bar{N}} = 
        \left[
        \begin{array}{c}
        x_5 \\
        x_3
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        0 \\
        0
        \end{array}
        \right].
        $$

        To decide if this BFS is optimal, we need to start another iteration.

    **Iteration 3**:

    1. The new basis and its inverse are:

        $$
        \mathbf{B} = \left[\mathbf{A}_2, \mathbf{A}_4, \mathbf{A}_1 \right] = 
        \left[
        \begin{array}{ccc}
        1 & 0 & -1 \\
        2 & 1 & 3 \\
        3 & 0 & 2
        \end{array}
        \right], \ 
        \mathbf{B}^{-1} = 
        \left[
        \begin{array}{ccc}
        0.4 & 0 & 0.2 \\
        1 & 1 & -1 \\
        -0.6 & 0 & 0.2
        \end{array}
        \right].
        $$

        The cost coefficients associated with the basic and nonbasic variables are:

        $$
        \mathbf{c}_B = 
        \left[
        \begin{array}{c}
        c_2 \\
        c_4 \\
        c_1 
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        -3 \\
        0 \\
        -2 
        \end{array}
        \right], \
        \mathbf{c}_N = 
        \left[
        \begin{array}{c}
        c_5 \\
        c_3
        \end{array}
        \right] = 
        \left[
        \begin{array}{c}
        0 \\
        0
        \end{array}
        \right].
        $$
    
    2. **Compute the reduced costs for nonbasic variables:**

        $$
        \begin{align}
        \bar{c}_5 &= c_5 - \mathbf{c}^T_B \mathbf{B}^{-1} \mathbf{A}_5 = 
        -0 - 
        \left[ 
        \begin{array}{ccc}
        -3 & 0 & -2
        \end{array}
        \right] 
        \left[
        \begin{array}{ccc}
        0.4 & 0 & 0.2 \\
        1 & 1 & -1 \\
        -0.6 & 0 & 0.2
        \end{array}
        \right]
        \left[
        \begin{array}{ccc}
        0 \\
        0 \\
        1
        \end{array}
        \right] = 1 \\
        \bar{c}_3 &= c_3 - \mathbf{c}^T_B \mathbf{B}^{-1} \mathbf{A}_3 =
        0 - 
        \left[ 
        \begin{array}{ccc}
        -3 & 0 & -2
        \end{array}
        \right] 
        \left[
        \begin{array}{ccc}
        0.4 & 0 & 0.2 \\
        1 & 1 & -1 \\
        -0.6 & 0 & 0.2
        \end{array}
        \right]
        \left[
        \begin{array}{ccc}
        1 \\
        0 \\
        0
        \end{array}
        \right] = 0. \\
        \end{align}
        $$

        Since all the reduced costs are nonnegative, the current BFS is optimal. The final optimal solution is:

        $$
        \mathbf{x} = 
        \left[
        \begin{array}
        x_1 \\
        x_2 \\
        x_3 \\
        x_4 \\
        x_5 
        \end{array}
        \right] = 
        \left[
        \begin{array}
        6 \\
        16 \\
        0 \\
        10 \\
        0 
        \end{array}
        \right].
        $$

We started at the initial BFS $(x_1, x_2, x_3, x_4, x_5) = (0, 0, 10, 60, 60)$, which corresponds to the origin $(x_1, x_2) = (0, 0)$ in Figure 2. After the first iteration, we moved to a new BFS $(x_1, x_2, x_3, x_4, x_5) = (0, 10, 0, 40, 30)$, which is the extreme point $(x_1, x_2) = (0, 10)$ on the $x_2$ axis. We decided that this is not an optimal solution, and continued with iteration. This time, we reached the BFS $(x_1, x_2, x_3, x_4, x_5) = (6, 16, 0, 10, 30)$, which corresponds to $(x_1, x_2) = (6, 16)$ on the graph, which is the optimal solution. 

<figure markdown>
![simplex_trajectory](/assets/images/optimization/light/simplex_trajectory.png#only-light){ width="400" }
![simplex_trajectory](/assets/images/optimization/dark/simplex_trajectory.png#only-dark){ width="400" }
<figcaption>Figure 1 A simplex trajectory</figcaption>
</figure>


### Two-Phase Simplex Method

Consider LP problem:

$$
\begin{align}
\min \quad& x_1 + 3x_2 + 2x_3 \\
\text{s.t.} \quad& x_1 + 2x_2 + x_3 \\
\quad& -x_1 + 2x_2 - 6x_4 = 2 \\
\quad& x_1, x_2, x_3, x_4 \geq 0.
\end{align}
$$

The Phase I problem is formulated as:

$$
\begin{align}
\min \quad& y_1 + y_2 \\
\text{s.t.} \quad& x_1 + 2x_2 + x_3 + y_1 = 3\\
\quad& -x_1 + 2x_2 - 6x_4 + y_2 = 2 \\
\quad& x_1, x_2, x_3, x_4, y_1, y_2 \geq 0.
\end{align}
$$

We can choose $(y_1, y_2)$ to be the basic variables, which gives the BFS $(x_1 = 0, x_2 = 0, x_3 = 0, x_4 = 0, y_1 = 3, y_2 = 2)$. Then, we can start the simplex method to solve the Phase I problem. The optimal solution to the Phase I problem is $\mathbf{x}^* = (0, 3/2, 0, 1/6)$ and $\mathbf{y}^* = (0, 0)$. The $\mathbf{x}$ variable part is a BFS for the original LP, with basic variables $(x_2 = 3/2, x_4 = 1/6)$, and nonbasic variables $(x_1 = 0, x_3 =0)$.

