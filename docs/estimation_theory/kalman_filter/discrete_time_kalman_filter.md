# Discrete-Time Kalman Filter

## Overview

Consider a linear, time-varying system with the following dynamics:

$$
\begin{align}
\mathbf{x}_k &= \mathbf{F}_{k - 1} \mathbf{x}_{k - 1} + \mathbf{G}_{k - 1} + \mathbf{w}_{k - 1} \\
\mathbf{y}_k &= \mathbf{H}_{k} \mathbf{x}_k + \mathbf{v}_k,
\end{align}
$$

where $\mathbf{w}_{k - 1}$ and $\mathbf{v}_{k}$ are zero-mean, 

!!!cnote "Discrete-Time Kalman Filter"

    Consider a linear time-varying system with the following dynamics:

    $$
    \begin{align}

    \end{align}
    $$


## Discrete-Time Systems

Consider the following linear discrete-time system:

$$
\mathbf{x}_k = \mathbf{F}_{k - 1} \mathbf{x}_{k - 1} + \mathbf{G}_{k - 1} \mathbf{u}_{k - 1} + \mathbf{w}_{k - 1},
$$

where $\mathbf{u}_{k - 1}$ is a known input and $\mathbf{w}_{k - 1}$ is a Gaussian zero-mean white noise with covariance $\mathbf{Q}_{k - 1}$.

The expetation of $\mathbf{x}_k$ is:

$$
\bar{\mathbf{x}}_k = \mathbb{E}\left[ \mathbf{x}_k \right] = \mathbf{F}_{k - 1} \bar{\mathbf{x}}_{k - 1} + \mathbf{G}_{k - 1} \mathbf{u}_{k - 1}.
$$

The covariance of $\mathbf{x}_k$ is:

$$
\begin{align}
\mathbf{P}_{k} &= \mathbb{E} \left[ \left( \mathbf{x}_k - \bar{\mathbf{x}}_k \right) \left( \cdots \right)^T \right] \\
&= \mathbb{E} \left[ \left(\mathbf{F}_{k - 1} \mathbf{x}_{k - 1} + \mathbf{G}_{k - 1} \mathbf{u}_{k - 1} + \mathbf{w}_{k - 1} - \bar{\mathbf{x}}_k \right) \left( \cdots \right)^T \right] \\
&= \mathbb{E} \left[ \left( \mathbf{F}_{k - 1} \left( \mathbf{x}_{k - 1} - \bar{\mathbf{x}}_{k - 1} \right) + \mathbf{w}_{k - 1} \right) \left( \cdots \right)^T \right] \\
&= \mathbb{E} \left[ \mathbf{F}_{k - 1} \left(\mathbf{x}_{k - 1} - \bar{\mathbf{x}}_{k - 1} \right) \left(\mathbf{x}_{k - 1} - \bar{\mathbf{x}}_{k - 1} \right)^T \mathbf{F}^T_{k - 1} \right]\\
&\quad + \mathbb{E} \left[ \mathbf{w}_{k - 1} \mathbf{w}^T_{k - 1} \right] \\
&\quad + \underbrace{\mathbb{E} \left[ \mathbf{F}_{k - 1} \left( \mathbf{x}_{k - 1} + \bar{\mathbf{x}}_{k - 1} \right) \mathbf{w}^T_{k - 1} \right]}_{\mathbf{0}} \\
&\quad + \underbrace{\mathbb{E} \left[ \mathbf{w}_{k - 1} \left( \mathbf{x}_{k - 1} - \bar{\mathbf{x}}_{k - 1} \right)^T \mathbf{F}^T_{k - 1} \right]}_{\mathbf{0}}.
\end{align}
$$

Hence, the covariance of $\mathbf{x}_k$ is:

$$
\begin{align}
\mathbf{P}_k = \mathbf{F}_{k - 1} \mathbf{P}_{k - 1} \mathbf{F}^T_{k - 1} + \mathbf{Q}_{k - 1},
\end{align}
$$

which is known as the **discrete-time Lyapunov equation**. The mean and the covariance completely characterizes $\mathbf{x}$ in a statistical sense since it is a Gaussian random variable:

$$
\mathbf{x}_{k} \sim \mathcal{N}(\bar{\mathbf{x}}_k, \mathbf{P}_k).
$$

