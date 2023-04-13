## Transportation Problem

Suppose there are $m$ suppliers and $n$ customers. The $i$'th supplier can supply up to $s_i$ units of supply, and the $j$'th customer has $d_j$ units of demand. It costs $c_{ij}$ to transport a unit of product from $i$'th supplier to the $j$'th customer. We want to find a transportation schedule to satisfy all demands with minimum transportation cost.

Let $x_{ij}$ denote the amount of product trasnported from $i$'th supplier to $j$'th customer for $i = 1, \ldots, m$ and $j = 1, \ldots, n$. The LP is then:

$$
\begin{align}
\min \quad& \sum^m_{i = 1} \sum^n_{j = 1} c_{ij} x_{ij} \\ 
\text{s.t.} \quad& \sum^m_{i = 1} x_{ij} \geq d_j, \quad j = 1, \ldots, n \\
\quad& \sum^{n}_{j = 1} x_{ij} \leq s_i, \quad i = 1, \ldots, m \\
\quad& x_{ij} \geq 0, \quad i = 1, \dots, m, \quad j = 1, \ldots, n.
\end{align}
$$


## Maximum Flow Problem



<figure markdown>
  ![pwl](/assets/images/optimization/light/maximum_flow_problem.png#only-light){ width="300" }
  ![pwl](/assets/images/optimization/dark/maximum_flow_problem.png#only-dark){ width="300" }
  <figcaption>Figure 1: Maximum flow problem</figcaption>
</figure>

 Let $x_{ij}$ for $(i, j) \in A$, where $A$ is the set of arcs. Figure 2 shows the I/O for a single node.

<figure markdown>
  ![pwl](/assets/images/optimization/light/maximum_flow_problem_node.png#only-light){ width="200" }
  ![pwl](/assets/images/optimization/dark/maximum_flow_problem_node.png#only-dark){ width="200" }
  <figcaption>Figure 2: Maximum flow problem on a single node</figcaption>
</figure>

Then we can formulate the problem as an LP:

$$
\begin{align}
\max \quad& b_s \\
\text{s.t.} \quad& \sum_{k \in O(i)} x_{ik} - \sum_{j \in I(i)} x_{ji} = b_i, \quad \forall i \\
\quad& b_t = -b_s \\
\quad& b_i = 0, \quad \forall i \neq s, t \\
\quad& 0 \leq x_{ij} \leq u_{ik}, \quad \forall(i, j) \in A.
\end{align}
$$

Here, the first constraint is called the flow conservation constraint. The second constraint is called the 

## Shortest Path Problem

Figure 3 shows a directed network, where then number on each edge is the distance for traversing that edge. We want to go from starting point $s$ to the target point $t$.

<figure markdown>
  ![pwl](/assets/images/optimization/light/shortest_path_problem.png#only-light){ width="300" }
  ![pwl](/assets/images/optimization/dark/shortest_path_problem.png#only-dark){ width="300" }
  <figcaption>Figure 3: Shortest path problem</figcaption>
</figure>

The basic idea is to find a minimum cost way to ship 1 unit of flow from $s$ to all other nodes as shown in Figure 4.

<figure markdown>
  ![pwl](/assets/images/optimization/light/shortest_path_problem_idea.png#only-light){ width="300" }
  ![pwl](/assets/images/optimization/dark/shortest_path_problem_idea.png#only-dark){ width="300" }
  <figcaption>Figure 3: Shortest path problem reformulated</figcaption>
</figure>

The shortest distance from $s$ to $t$ can be formulated as an LP:

$$
\begin{align}
\min \quad& \sum_{(i, j) \in A} c_{ij} x_{ij} \\ 
\text{s.t.} \quad& \sum_{k \in O(i)} x_{ik} - \sum_{j \in I(i)} x_{ji} = -1, \quad \forall i \neq s \\
\quad& \sum_{k \in O(s)} x_{sk} - \sum_{j \in I(s)} x_{js} = n - 1 \\
\quad& x_{ij} \geq 0, \quad \forall (i, j) \in A.
\end{align}
$$