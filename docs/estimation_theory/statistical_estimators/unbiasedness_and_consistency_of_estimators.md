# Unbiasedness and Error of Estimators

## Estimator and Sampling Distribution

Based on a sample $X_1, \ldots, X_n$ from a population with distribution $f(x | \theta)$, let $\hat{\theta}_n = g(X_1, \ldots, X_n)$ be an estimator that estimates the parameter $\theta$. The estimator $\hat{\theta}_n$ as a function of the sample is a random variable. As a random variable, the estimator has an expectation of $\mathbb{E}\hat{\theta}_n$, a variance of $\mathbb{V}\text{ar}\hat{\theta}_n$, and its own distribution called a **sampling distribution**.

## Bias

If $\mathbb{\hat{\theta}_n} = \theta$, then the estimator $\hat{\theta}$ is called **unbiased**. The expectation is taken with respect to the sampling distribution The quantity:

$$
b(\theta) = \mathbb{E}\hat{\theta}_n - \theta,
$$

is called the **bias** of the estimator $\hat{\theta}$.

## Mean Squared Error

The error in estimation can be assessed by various measures. The usual measure is the mean squared error (MSE) and is defined as:

$$
MSE(\hat{\theta}, \theta) = \mathbb{E}(\hat{\theta}_n - \theta)^2.
$$

The MSE represents the expected squared deviation of the estimator from the parameter it estimates. This expectation is taken with respect to the sampling distribution of $\hat{\theta}_n$. From the definiton:

$$
\begin{align}
\mathbb{E}(\hat{\theta}_n - \theta)^2 &= \mathbb{E}(\hat{\theta}_n - \mathbb{E}\hat{\theta}_n + \mathbb{E}\hat{\theta}_n - \theta)^2 \\
&= \mathbb{E}(\hat{\theta}_n - \mathbb{E}\hat{\theta}_n)^2 - 2 \mathbb{E}(\hat{\theta}_n - \mathbb{E} \hat{\theta}_n) (\mathbb{E}\hat{\theta}_n - \theta) + (\mathbb{E} \hat{\theta}_n - \theta)^2 \\
&= \mathbb{E}(\hat{\theta}_n - \mathbb{E}\hat{\theta}_n)^2 + (\mathbb{E}\hat{\theta}_n - \theta)^2.
\end{align}
$$

MSE can be respresent as:

$$
MSE(\hat{\theta}, \theta) = \mathbb{V}\text{ar} \hat{\theta} + b(\theta)^2.
$$
