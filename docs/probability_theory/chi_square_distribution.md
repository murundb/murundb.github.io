# Chi-Square Distribution

## Definition

Chi-square distribution is often used to check state estimators for "consistency" $-$ whether their actual errors are consistent with the variances calculated by the estimator. A scalar random variable $q$ is **chi-square distributed with $n$ degrees of freedom** and is written as:

$$
q \sim \chi^2_n.
$$

$q$ is sum of squares of random variables $z_i \sim \mathcal{N}(0, 1)$ for $i = 1, \ldots n$:

$$
q = \mathbf{z}^T \mathbf{z}.
$$

Consider $\mathbf{x} \in \mathbb{R}^n$ with $\mathbf{x} \sim \mathcal{N}(\bar{\mathbf{x}}, \mathbf{P})$. The **whitened** version of $\mathbf{x}$ is $\mathbf{z} \triangleq \mathbf{P}^{-\frac{1}{2}}(\mathbf{x} - \bar{\mathbf{x}})$, where $\mathbf{P}^{-\frac{1}{2}}$ is a symmetric matrix satisfying $\mathbf{P}^{-\frac{1}{2}} \mathbf{P} \mathbf{P}^{-\frac{1}{2}} = \mathbf{I}$.
Since $\mathbf{x} - \bar{\mathbf{x}}$ is Gaussian with zero mean and covariance $\mathbf{P}$, applying the linear transformation $\mathbf{P}^{-\frac{1}{2}}$ yields to:

$$
\mathbf{z} \sim \mathcal{N}(\mathbf{0}, \mathbf{I}), \quad z_i \sim \mathcal{N}(0, 1), \ \text{for} \ i = 1, \ldots, n.
$$

Then the quadratic form can be described as:

$$
\begin{align}
q &= (\mathbf{x} - \bar{\mathbf{x}})^{T} \mathbf{P}^{-1} (\mathbf{x} - \bar{\mathbf{x}}) \\
&= \left(\mathbf{P}^{-\frac{1}{2}} (\mathbf{x} - \bar{\mathbf{x}}) \right)^T \left( \mathbf{P}^{-\frac{1}{2}}(\mathbf{x} - \bar{\mathbf{x}}) \right) \\
&= \mathbf{z}^T \mathbf{z}.
\end{align}
$$

## Properties

| | Chi-Square Distribution |
| - | - |
| **Mean** | $\begin{align*} \mathbb{E}\left[q \right] = \mathbb{E}\left[  \sum^{n}_{i = 1} z^2_i \right] = n \end{align*}$ |
| **Variance** | $\begin{align*} \mathcal{V}\text{ar}(q) &= \mathbb{E}\left[\sum^{n}_{i = 1} (z^2_i - 1) \right]^2 = \sum^{n}_{i = 1} \mathbb{E}\left[(z^2_i - 1)^2 \right] =  2n  \end{align*}$ |
| **pdf** | $\begin{align*}p(q) = \frac{1}{2^{\frac{n}{2}} \Gamma\left( \frac{n}{2} \right)} q^{\frac{n - 2}{2}} e^{-\frac{q}{2}}, \quad q \geq 0 \end{align*}$, <br><br> where $\Gamma$ is the gamma function with the following properties: <br> $\begin{align*} \Gamma\left( \frac{1}{2} \right) = \sqrt{\pi}, \ \ \Gamma(1) = 1, \ \ \Gamma(m + 1) = m \Gamma(m) \end{align*}$ |
| **Addition Rule** | Given the independent random variables $q_1 \sim \chi^2_{n_1}$ and $q_2 \sim \chi^2_{n_2}$, their sum $q_3 = q_1 + q_2$ is chi-square distributed with $n_3 = n_1 + n_2$ degrees of freedom |
