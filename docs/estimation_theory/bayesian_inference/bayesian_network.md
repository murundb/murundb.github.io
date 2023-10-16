# Bayesian Network

## Introduction

A Bayesian network or Bayes net is a directed graphical model (directed acyclic graphs (DAGs)) where the nodes represent events and where the directed edges capture their hierarchy and dependence. **Hard evidence** for a node $\theta$ is evidence that the outcome of $\theta$ is known. Hard evidence about nodes is the information that we bring to the network, and it affects the probabilities of other nodes. Bayesian networks possess Markovian property, i.e., the conditional distribution of any node depends only on its parental nodes.

Let the entire set of random variables of interest (nodes) as $\Theta = \left\{ \theta_1, \ldots, \theta_n\right\}$. A Bayes net then defines a joint probability density $p(\Theta)$ over all variables $\Theta$ as the product of conditional densities associated with each of the nodes:

$$
p(\Theta) \triangleq \prod_j p(\theta_j | \pi_j),
$$

where $p(\theta_j | \pi_j)$ is the conditional density associated with node $\theta_j$, and $\pi_j$ is an assignment of values to the parents of $\theta_j$. Hence, in a Bayes net, the factorization of the join density is dictated by its graph structure, in particular the node-parent relationships.

## Example Toy SLAM

Consider a toy SLAM problem shown in Figure 1. Here, $x_i$ is the $i$'th robot pose, $l_j$ is the $j$'th landmark. $z_k$s are the measurements.

<figure markdown>
  ![factor graph](/assets/images/estimation_theory/light/toy_slam.png#only-light){ width="300" }
  ![factor graph](/assets/images/estimation_theory/dark/toy_slam.png#only-dark){ width="300" }
  <figcaption>Figure 1 Bayes net for toy SLAM (Dellaert p6)</figcaption>
</figure>

Let $X$ be a random variable denoting the robot poses and the unknown landmark positions and $Z$ be the set of observed measurements.

The joint density is then:

$$
\begin{align}
p(X, Z) &= p(x_1, x_2, x_3, l_1, l_2, z_1, z_2, z_3, z_4) \\
&= p(x_1) p(x_2 | x_1) p(x_3 | x_2) \\
&\times p(l_1) p (l_2) \\
&\times p(z_1 | x_1) \\
&\times p(z_2 | x_1, l_1) p(z_3 | x_2, l_1) p(z_4 | x_3, l_2).
\end{align}
$$

Here we have:

1. A Markov chain $p(x_1) p(x_2 | x_1) p(x_3 | x_2)$ on the poses $x_1$, $x_2$, and $x_3$. The conditional densities $p(x_{t + 1} | x_t)$ might represent prior knowledge or can be derived from known control inputs.

2. Prior densities $p(l_1)$ and $p(l_2)$ on the landmarks $l_1$ and $l_2$. 

3. A conditional density or likelihood $p(z_1 | x_1)$ corresponding to the absolute pose measurement on the first pose $x_1$.

4. Product of three conditional densities.

### Probability Densities

The most often-used denisities involve the multivariate Gaussian distribution, with PDF:

$$
\mathcal{N}(\theta; \mu; \Sigma) =
\frac{1}{\sqrt{|2 \pi \Sigma}} \exp \left\{ -\frac{1}{2} ||\theta - \mu||^2_{\Sigma} \right\},
$$

where $\mu \in \mathbb{R}^n$ is the mean, and $\Sigma \in \mathbb{R}^{n \times n}$ is the covariance matrix and:

$$
||\theta - \mu||^2_{\Sigma} \triangleq (\theta - \mu)^T \Sigma^{-1} (\theta - \mu),
$$

denotes the squared Mahalanobis distance. In most cases, it is both justified and convenient to model measurements as corrupted by a zero-mean Gaussian noise. For example, a bearing measurement from a given pose $x$ to a given landmark $l$ would be modeled as:

$$
z = h(x, l) + v,
$$

where $h(\cdot)$ is a measurement prediction function, and the noise $v$ is drawn from a zero-mean Gaussian density with measurement covariance $\mathbf{R}$. Then the conditional density on the measurement $z$ would be:

$$
p(z | x, l) = \mathcal{N}(z; h(x, l), \mathbf{R}) = \frac{1}{\sqrt{|2 \pi \mathbf{R}|}} \exp \left\{ -\frac{1}{2} ||h(x, l) - z||^2_{\mathbf{R}} \right\}.
$$

### Probabilistic Motion Model

The probabilistic motion model $p(x_{t + 1} | x_t)$ can be derived from odometry measurements, or alternatively, from the known control inputs $u_t$. We use a conditional Gaussian assumption:

$$
p(x_{t + 1} | x_t, u_t ) = \frac{1}{\sqrt{|2 \pi \mathbf{Q}|}} \exp \left\{-\frac{1}{2} ||g(x_t, u_t) - x_{t + 1}||^2_{\mathbf{Q}} \right\},
$$

where $g(\cdot)$ is the motion model and $\mathbf{Q}$ is the process noise. 
