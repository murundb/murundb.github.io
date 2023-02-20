## Overview

This section deals with solving nonlinear programs by converting team into linear programs. Given a nonlinear function $f(\mathbf{x})$, we are interested in solving:

$$
\begin{align}
\min \quad& f(\mathbf{x}) \\ 
\text{s.t} \quad& \mathbf{x} \in X
\end{align}
$$

## Convex Piecewise Linear Function

Any convex piecewise linear function (PWL), $\tilde{f}(\mathbf{x})$, can be written as a maximum of a finite
number of linear functions:

$$
\tilde{f}(\mathbf{x}) = \max \left\{ \mathbf{a}^T_1 \mathbf{x} + b_1, \ldots, \mathbf{a}^T_m \mathbf{x} + b_m \right\}.
$$

## Convex Piecewise Linear Approximation

Any convex function, $f(\mathbf{x})$, can be approximated by a convex PWL function, $\tilde{f}(\mathbf{x})$ to an arbitrary accuracy as shown in the Figure 1.

<figure markdown>
  ![pwl](/assets/images/optimization/light/pwl_approximation.png#only-light){ width="300" }
  ![pwl](/assets/images/optimization/dark/pwl_approximation.png#only-dark){ width="300" }
  <figcaption>Figure 1: PWL approximation of a nonlinear convex function</figcaption>
</figure>

## Reformulation

The optimization problem then becomes:

$$
\begin{align}
\min_{\mathbf{x} \in X} \quad f(\mathbf{x}) \Rightarrow \min_{\mathbf{x} \in X} \quad \max \left\{ \mathbf{a}^T_1 \mathbf{x}+ b_1, \ldots, \mathbf{a}^T_m \mathbf{x} + b_m \right\}.
\end{align}
$$

We can further reformulate the problem by introducing a new variable, $z$, and putting the objective into a constraint:

$$
\begin{align}
\min_{\mathbf{x}, z} \quad& z \\
\text{s.t} \quad& f(\mathbf{x}) \leq z \\
\quad& \mathbf{x} \in X,
\end{align}
$$

or equivalently:

$$
\begin{align}
\min_{\mathbf{x} \in X, z} \quad& z \\
\text{s.t} \quad& \max \left\{\mathbf{a}^T_1 \mathbf{x} + b_1, \ldots, \mathbf{a}^T_m \mathbf{x} + b_m \right\} \leq z,
\end{align}
$$

which is a Linear Program:

$$
\begin{align}
\min_{\mathbf{x} \in X, z} \quad& z \\
\text{s.t} \quad& \mathbf{a}^T_i \mathbf{x} + b_i \leq z, \quad \forall i = 1, \ldots, m.
\end{align}
$$

## Example 1: Linear Classification and Robust Regression

Consider a set of training data $(\mathbf{x}_i, y_i)$ for $i = 1, \ldots, N$ where 
$\mathbf{x}_i \in \mathbb{R}^n$ is a feature vector and $y_i$ is a binary label. We are interested
in building a linear classifier:

$$
f(\mathbf{x}) = b_0 + \sum^N_{j = 1} \mathbf{b}_j^T \mathbf{x}_j,
$$

such that, for a given feature vector $\mathbf{x}$, if $f(\mathbf{x}) \geq 0.5$, then 
$\mathbf{x}$ is classified as $y = 1$, otherwise $y = 0$.

The classifier should be optimal in minimizing total prediction error over the training data. The prediction error is a measure of **distance** between classifier's output and the true label. If we use $l_1$-metric, we will have the following robust regression model:

$$
\begin{align}
\min_{b_0, \ldots, b_n} \quad& \sum^N_{i = 1} \left| b_0 + \sum^n_j b_j x_{ij} - y_i \right|.
\end{align}
$$

The equivalent LP reformulation of the problem is:

$$
\begin{align}
\min_{b_0, \ldots, b_n} \quad& \sum^N_{i = 1} z_i \\ 
\textrm{s.t} \quad& b_0 + \sum^n_j b_j x_{ij} - y_i \leq z_i, \quad \forall i = 1, \ldots, N \\
\quad& b_0 + \sum^n_j b_j x_{ij} - y_i \geq -z_i, \quad \forall i = 1, \ldots, N \\
\end{align}
$$

## Example 2: Concrete Facility Location

A concrete facility is planning to produce concrete poles. It requires two new facilities in its factory, a new concrete casting area (a) to make concrete poles and storage area (b) for storing the finished product. The current layout of the factory is shiown in Figure 2.

<figure markdown>
  ![concrete-facility](/assets/images/optimization/light/nonlinear_example_facility.png#only-light){ width="300" }
  ![foncrete-facility](/assets/images/optimization/dark/nonlinear_example_facility.png#only-dark){ width="300" }
  <figcaption>Figure 2: Concrete factory map</figcaption>
</figure>

The costs of moving parts per unit distance is shown below:

| Material Handling Cost | Pole Casting *a* | Pole Storage *b* |
| ---------------------- | ---------------| -------------- |
| Pole Casting           |        -       | -              |
| Pole Storage           | 4.00           | -              |
| Concrete Batch         | 1.10           | -              |
| Steel Mfch             | 0.70           | 0.65           |
| Shipping               | -              | 0.40           |

We are interesting in finding locations for $a: (x_1, y_1)$ and $b: (x_2, y_2)$ such that
the total cost of transporting between facilities is minimized. The problem can be formulated as:

$$
\begin{align}
\min \quad& 4d(x_1, y_1, x_2, y_2) + 1.1d(x_1, y_1, 300, 1200) + 0.7d(x_1, y_1, 0, 600) \\
\quad& + 0.65d(x_2, y_2, 0, 600) + 0.4d(x_2, y_2, 600, 0) \\
\textrm{s.t} \quad& 0 \leq x_i \leq 900, \quad \forall i = 1, 2 \\
\quad& 0 \leq y_i \leq 900, \quad \forall i = 1, 2.
\end{align}
$$

Using Manhattan distance:

$$
\begin{align}
\min \quad& 4(|x_1 - x_2| + |y_1 - y_2|) + 1.1(|x_1 - 300| + |y_1 - 1200|) \\
\quad& + 0.7(|x_1| + |y_1 - 600|) + 0.65(|x_2| + |y_2 - 600|) \\
\quad& + 0.4(|x_2 - 600| + |y_2|) \\
\textrm{s.t} \quad& 0 \leq x_i \leq 900, \quad \forall i = 1, 2 \\
\quad& 0 \leq y_i \leq 900, \quad \forall i = 1, 2.
\end{align}
$$

Using auxiliary variables, the equivalent LP formulation of the problem is:

$$
\begin{align}
\min \quad& 4(z_1 + z_2) + 1.1(z_3 + z_4) + 0.7(z_5 + z_6)  \\
\quad& + 0.65(z_7 + z_8) + 0.4(z_9 + z_{10}) \\ 
\textrm{s.t} \quad& -z_1 \leq x_1 - x_2 \leq z_1 \\
\quad& -z_2 \leq y_1 - y_2 \leq z_2 \\
\quad& -z_3 \leq x_1 - 300 \leq z_z \\
\quad& \quad \ldots
\end{align}
$$

## Example 3: Radiation Therapy Planning Problem

For a given tumor and given critical areas obtained from imaging, and a given set of possible beamlet origins and angles (we assume that the angles are fixed), we are interested in determining the weight of each beamlet such that:

1. Dosage over the tumor area will be at least a target level $\gamma_L$
2. Dosage over the critical area (e.g., spine etc.) will be at most a target level $\gamma_U$

<figure markdown>
</figure>