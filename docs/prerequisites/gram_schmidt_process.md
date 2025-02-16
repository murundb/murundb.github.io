# Gram-Schmidt Process

## Overview

Gram-Schmidt process provides a conversion from a naive basis set to an orthornormal basis set:

$$
\begin{align*}
\underbrace{\left\{ \mathbf{v}^{(k)} \right\}}_{\text{original set}} \longrightarrow \underbrace{\left\{ \mathbf{u}^{(k)} \right\}}_{\text{orthonormal set}},
\end{align*}
$$

for $k \leq n$, where $n$ is the dimension of the Euclidean space.

## Orthogonal Projection

The vector projection of a vector $\mathbf{v}$ on a nonzero vector $\mathbf{u}$ is:

$$
\begin{align*}
\boldsymbol{\Pi}_{\mathbf{u}}(\mathbf{v}) = \text{proj}_{\mathbf{u}}(\mathbf{v}) = \frac{\langle \mathbf{u}, \mathbf{v} \rangle}{||\mathbf{u}||^2} \mathbf{u}.
\end{align*}
$$

Given a vector $\mathbf{x} \in V$ and a subspace $S \subset V$ with orthonormal basis set $\left\{ \mathbf{s}^{(k)} \right\}_{k = 0, 1, \ldots K - 1}$, the orthogonal projection of $\mathbf{x}$ in $S$ is:

$$
\begin{align*}
\hat{\mathbf{x}} = \sum^{K - 1}_{k = 0} \langle \mathbf{s}^{(k)}, \mathbf{x}  \rangle \mathbf{s}^{(k)}.
\end{align*}
$$

## Algorithm

!!! cnote "Gram-Schmidt Process"

    At each step $k$:

    1. From the $k$'th vector in the original set, remove all components that are colinear as all the other vectors we have produced so far in the orthonormal set:
   
        $$
        \begin{align*}
        \mathbf{p}^{(k)} = \mathbf{v}^{(k)} - \sum^{k - 1}_{n = 0} \langle \mathbf{u}^{(n)}, \mathbf{v}^{(k)} \rangle \mathbf{u}^{(n)}
        \end{align*}
        $$

    2. Normalize to generate a new member of the orthonormal set:
    
        $$
        \begin{align*}
        \mathbf{u}^{(k)} = \mathbf{p}^{(k)} / || \mathbf{p}^{k} ||
        \end{align*}
        $$
