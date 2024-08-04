# Factor Graph Overview

## Overview

A factor graph is a bipartite graph, $F = (\mathcal{U}, \mathcal{V}, \mathcal{E})$, with two types of nodes: 

1. **Hidden variables**, $x_j \in \mathcal{V}$. Hidden variable nodes represent the variables being estimated and can only connect with factor nodes.
2. **Factors**, $\phi_i \in \mathcal{U}$. Factor nodes represent functions of the hidden variables and can only connect with hidden variable nodes (i.e., factors cannot be functions of other factors). In navigation applications, factors typically represent measurements or dynamics. Each factor in a factor graph has three items associated with it: a function of the hidden variables, a measured value for that factor, and a PDF returning the likelihood of the measured value given the current values of the hidden variables.

Edges, $e_{ij} \in \mathcal{E}$, exist only between the hidden variables and the factor nodes. Factor graph is a representation of the probabilistic relationship between the measurements that have been received and state variables (i.e., hidden variables) that are being estimated given the received measurements.

## Definition

<figure markdown>
  ![factor graph](/assets/images/estimation_theory/light/factor_graph.png#only-light){ width="400" }
  ![factor graph](/assets/images/estimation_theory/dark/factor_graph.png#only-dark){ width="400" }
  <figcaption>Figure 1 A factor graph representation (Factor Graph Tutorial, ION, GNSS+ 2023)</figcaption>
</figure>

Let $\mathbf{x}_i$ denote a set of hidden variable nodes adjacent to a factor $\phi_i$. The factor graph, $F$, defines the factorization of a global function $\phi(\mathbf{x})$ as:

$$
\phi(\mathbf{x}) = \prod_i \phi_i (\mathbf{x}_i).
$$

Figure 1 shows an example factor graph where the **factors** are denoted as $z_i$ and the **hidden variables** denoted as $x_i$. $\gamma$ is a prior. In state estimation, the hidden variables are the states to be estimated and the factors are the measurements or anything gives information about the hidden variables. The square factors between the hidden variables are also factors that represent the dynamics of the system.

## Advantages of Factor Graph

1. Better for non-linear systems than EKF and simplifies implementation of extensions to the EKF.
2. Extensible to multiple different estimation scenarios (e.g., bundle adjustment, calibration, different input PDFs, multiple dynamics, etc.)
3. Enables batch analysis of input data $\Rightarrow$ better outlier detection / input characterization etc.
