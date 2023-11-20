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
