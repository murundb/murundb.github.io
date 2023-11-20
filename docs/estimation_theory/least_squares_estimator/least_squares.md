# Least Squares

## Problem Statement

Consider a set of $k$ data points:

$$
(x, z_i), \quad i = 1, \ldots, k,
$$

where $x$ is an independent variable to be estimated and $z_i$ is a dependent variable whose value can be obtained by an observation or a measurement. We have a measurement model:

$$
z_i = h_i(x) + w_i, \quad i = 1, \ldots, k,
$$

where $w_i$ is the measurement noise. The goal of the least squares method is to find an estimator, $\hat{x}$, that "best" fits the measurement data. The fit of a model to a data point is measured by its **residual** or **error**, defined as the difference between the observed value of the dependent variable and the value predicted by the model:

$$
e_i = z_i - h_i(x).
$$

The least squares method finds the optimal parameter values by minimizing objective function defined as the **sum of the squared residuals**:

$$
J = \sum^k_{i = 1} e^2_i.
$$

## Solving Least Squares

The solution to the least squares problem is a a solution to an optimization problem:

$$
\hat{\mathbf{x}} = \arg \min_{\mathbf{x}} J = \arg \min_{\mathbf{x}} \sum^k_{j = 1} e^2_i.
$$

This is the **nonlinear least squares problem**. If the functions $h_i$ are linear in $x$, then the problem is **ordinary** or **linear least squares problem**.

## Relationship to MLE

Note here that there is no assumption about the measurement noises $w_i$. If the measurement noise is independent and identically distributed zero-mean Gaussian random variables such that:

$$
w_i \sim \mathcal{N}(0, \sigma^2),
$$

then the least squares estimator coincides with the MLE under these assumptions. In this case:

$$
z_i \sim \mathcal{N}(h_i(x), \sigma^2), \quad i = 1, \ldots, k.
$$

The likelihood function of $x$ is then:

$$
\begin{align}
L(x) &= p(\mathbf{z} | x) = p(z_1, \ldots, z_k | x) \\
&= \prod^k_{i = 1} \mathcal{N}(z_i; h_i(x), \sigma^2) = c \exp \left\{ -\frac{1}{2 \sigma^2} \sum^k_{i = 1} (z_i - h_i(x))^2 \right\},
\end{align}
$$

where $c$ is some constant.

## Parametric Model and Alternative Formulation

In the context of regression analysis or data fitting, we can formulate the problem differently. Consider a set of $k$ data points:

$$
(x_i, z_i), \quad i = 1, \ldots, k,
$$

Assume that the model function has the form $f(x_i, \boldsymbol{\beta})$, where $m$ adjustable parameters are held in the vector $\boldsymbol{\beta}$. The goal of the least squares method here is to find the parameter values for the model that "best" fits the data. The residual is:

$$
e_i = y_i - f(x_i, \boldsymbol{\beta}).
$$

The least squares method minimizes objective function defined as the **sum of the squared residuals**:

$$
J = \sum^k_{i = 1} e^2_i.
$$

The minimum of the objective function is found by setting the gradient to zero. Since the model contains $m$ parameters, there are $m$ gradient equations:

$$
\frac{\partial J}{\partial \beta_j} = 2 \sum_i e_i \frac{\partial e_i}{\partial \beta_j} = -2 \sum_i e_i \frac{\partial f(x_i, \boldsymbol{\beta})}{\partial \beta_j} = 0, \quad j = 1, \ldots, m.
$$

The minimum of the objective function is found by setting the gradient to zero. Since the model contains $m$ parameters, there are $m$ gradient equations:

$$
\frac{\partial J}{\partial \beta_j} = 2 \sum_i e_i \frac{\partial e_i}{\partial \beta_j} = -2 \sum_i e_i \frac{\partial f(x_i, \boldsymbol{\beta})}{\partial \beta_j} = 0, \quad j = 1, \ldots, m.
$$

This is particularly useful for **polynomial fitting**.

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
J = \min^3_{k = 1} e^T_{u, k}Q^{-1}_k e_{u, k} + \sum^3_{k = 1}e^T_{z, k} R^{-1}_{k} e_{z, k}.
$$


