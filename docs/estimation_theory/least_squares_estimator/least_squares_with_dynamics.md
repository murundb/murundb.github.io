# Least Squares with Dynamics

## Problem statement

Consider a state-space model:

$$
\begin{align}
\mathbf{x}_k &= \mathbf{f}(\mathbf{x}_{k - 1}, \mathbf{u}_k) + \mathbf{w}_k \\
\mathbf{z}_{k, j} &= \mathbf{h}(\mathbf{y}_j, \mathbf{x}_k) + \mathbf{v}_{k, j},
\end{align}
$$

where at time $k \in \mathbb{Z}^{+}$, we have:

1. State vectors, $\mathbf{x} \in \mathbb{R}^n$ and $\mathbf{y}_j \in \mathbb{R}^k$ (here we included $\mathbf{y}_j$ as the $j$'th landmark state since it can be a SLAM/VSLAM estimation problem. Generally, it can be just $\mathbf{x}$ and the formulation wouldn't change), control input, $\mathbf{u}$, and the $j$'th measurement, $\mathbf{z}_j \in \mathbb{R}^m$.
2. Discrete nonlinear motion and measurement models, $\mathbf{f}( \ \cdot \ )$ and $\mathbf{h}( \ \cdot \ )$
3. Zero-mean Gaussian process and measurement noises, $\mathbf{w}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{Q}_k)$ and $\mathbf{v}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{R}_{k, j})$.

For the measurement model:

$$
\mathbf{z}_{k, j} = \mathbf{h}(\mathbf{y}_j, \mathbf{x}_k) + \mathbf{v}_{k, j},
$$

since we assumed that the measurement noise is zero-mean Gaussian, i.e., $\mathbf{v}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{R}_{k, j})$, the conditional probability of the observation data is:

$$
\mathbb{P}(\mathbf{z}_{j, k} | \mathbf{x}_k, \mathbf{y}_j) = 
\mathcal{N}(\mathbf{h}(\mathbf{y}_j, \mathbf{x}_k), \mathbf{R}_{k, j}),
$$

which is a Gaussian distribution. The probability densitiy function for multi-dimensional Gaussian distribution $\mathbf{x} \sim \mathcal{N}(\boldsymbol{\mu}, \boldsymbol{\Sigma})$ is given as:

$$
p(\mathbf{x}) = \frac{1}{\sqrt{(2 \pi)^N \text{det}(\boldsymbol{\Sigma})}} \exp \biggl( -\frac{1}{2} (\mathbf{x} - \boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1} (\mathbf{x} - \boldsymbol{\mu}) \biggr).
$$

We can take the negative logarithm from both sides since the logarithm function is monotonically increasing and maximizing the original function is equivalent to minimizing the negative logarithm:

$$
-\ln(\mathbb{P}(\mathbf{x})) = \underbrace{\frac{1}{2} \ln \biggl((2 \pi)^N \text{det}(\boldsymbol{\Sigma}) \biggr)}_{\text{ommitted}} + \frac{1}{2}(\mathbf{x} - \boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1} (\mathbf{x} - \boldsymbol{\mu})).
$$

The first term can be ommitted since it doesn't have dependency on $\mathbf{x}$. The MLE for the problem is then:

$$
\begin{align}
(\hat{\mathbf{x}}_k, \hat{\mathbf{y}}_k)_{\text{MLE}} &= \arg \max \mathcal{N}(\mathbf{h}(\mathbf{y}_j, \mathbf{x}_k), \mathbf{R}_{k, j}) \\
&= \arg \min \biggl((\mathbf{z}_{k, j} - \mathbf{h}(\mathbf{x}_k, \mathbf{y}_j))^T \mathbf{R}^{-1}_{k, j} (\mathbf{z}_{k, j} - \mathbf{h}(\mathbf{x}_{k}, \mathbf{y}_j)) \biggr),
\end{align}
$$

which is the **Mahalanobis distance**. If we assume that the inputs and the observations are independent of each other, the joint probability distribution can be factorized if we put all the measurements together:

$$
\mathbb{P}(\mathbf{z}, \mathbf{u} | \mathbf{x}, \mathbf{y}) = \prod_{k} \mathbb{P}(\mathbf{u}_k | \mathbf{x}_{k - 1}, \mathbf{x}_k) \prod_{k, j} \mathbb{P}(\mathbf{z}_{k, j} | \mathbf{x}_k, \mathbf{y}_j).
$$

The error between the model and the measurement can be defined as:

$$
\begin{align}
\mathbf{e}_{u, k} &= \mathbf{x}_k - \mathbf{f}(\mathbf{x}_{k - 1}, \mathbf{u}_k) \\
\mathbf{e}_{z, j, k} &= \mathbf{z}_{k, j} - \mathbf{h}(\mathbf{x}_k, \mathbf{y}_j).
\end{align}
$$

Then, minimizing the Mahalanobis distance between the estimated value and the measurements from sensors is equivalent to finding the MLE. The negative logarithm turns the product into a summation:

$$
\min J(\mathbf{x}, \mathbf{y}) = \sum_k \mathbf{e}^T_{u, k} \mathbf{Q}^{-1}_k \mathbf{e}_{u, k} + \sum_k \sum_j \mathbf{e}^T_{z, k, j} \mathbf{R}^{-1}_{k, j} \mathbf{e}_{z, k, j}.
$$

## Example: Batch State Estimation

Consider a simple discrete-time system:

$$
\begin{alignat}{2}
x_k &= x_{k - 1} + u_k + w_k, \quad && w_k \sim \mathcal{N}(0, Q_k) \\
z_k &= x_k + v_k, \quad && v_k \sim \mathcal{N}(0, R_k).
\end{alignat}
$$

Suppose the initial state $x_0$ is known. Denote the batch state variable as $\mathbf{x}= \left[\begin{array}{cccc} x_0 & x_1 & x_2 & x_3 \end{array} \right]^T$, the batch observation as $\mathbf{z}= \left[\begin{array}{ccc} z_1 & z_2 & z_3\end{array} \right]^T$, and the input as $\mathbf{u} = \left[\begin{array}{ccc} u_1 & u_2 & u_3 \end{array} \right]^T$. The maximum likelihood estimate is then:

$$
\begin{align}
\hat{\mathbf{x}}_{\text{MLE}} &= \arg \max \mathbb{P}(\mathbf{x} | \mathbf{u}, \mathbf{z}) = \arg \max \mathbb{P}(\mathbf{u}, \mathbf{z} | \mathbf{x}) \\
&= \prod^3_{k = 1} \mathbb{P}(u_k | x_{k - 1}, x_k) \prod^3_{k = 1} \mathbb{P}(z_k | x_k).
\end{align}
$$

The motion model and the measurement equation are:

$$
\begin{align}
\mathbb{P}(u_k | x_{k - 1}, x_k) &= \mathcal{N}(x_k - x_{k - 1}, Q_k) \\
\mathbb{P}(z_k | x_k) &= \mathcal{N}(x_k, R_k).
\end{align}
$$

The error residuals are:

$$
\begin{align}
e_{u, k} = x_k - x_{k - 1} - u_k \\
e_{z, k} = z_k - x_k.
\end{align}
$$

Finally, the objective function is:

$$
J = \min \sum^3_{k = 1} e^T_{u, k}Q^{-1}_k e_{u, k} + \sum^3_{k = 1}e^T_{z, k} R^{-1}_{k} e_{z, k}.
$$
