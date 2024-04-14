# Overview

## Visual SLAM Problem Formulation

Given a discrete motion and observation equations:

$$
\begin{align}
\mathbf{x}_k &= \mathbf{f}\left( \mathbf{x}_{k - 1}, \mathbf{u}_k \right) + \mathbf{w}_k, \quad k = 1, \ldots, K \\
\mathbf{z}_{k, j} &= \mathbf{h}\left( \mathbf{y}_j, \mathbf{x}_k \right) + \mathbf{v}_{k, j}, \quad \left(k, j \right) \in \mathcal{O},
\end{align}
$$

where $\mathcal{O}$ is a set that contains the information at which pose the landmark was observed and:

1. $\mathbf{x}_k$ - Pose of the camera at $k$.
2. $\mathbf{u}_k$ - System input at $k$.
3. $\mathbf{z}_{k, j}$ - Measurement or observation of a landmark point $\mathbf{y}_j$ at $\mathbf{x}_k$.
4. $\mathbf{y}_j$ - $j$'th landmark, where $j = 1, \ldots, M$, for a total of $M$ landmarks of the map.
5. $\mathbf{w}_k$ and $\mathbf{v}_k$ - Process and measurement noises at $k$.

The observation equation is given by the pinhole model for VSLAM applications. Assuming an observation of a landmark $\mathbf{y}_j$ at $\mathbf{x}_k$:

$$
s \mathbf{z}_{k, j} = \mathbf{K} \left( \mathbf{R}_k \mathbf{y}_j + \mathbf{t}_k \right),
$$

where $\mathbf{K}$ is the camera intrinsics and $s$ is the distance of pixels, which is also the third element of $(\mathbf{R}_k \mathbf{y}_j + \mathbf{t}_k)$. The process and measurement noise can be assumed to be zero mean, Gaussian:

$$
\mathbf{w}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{Q}_k), \ \mathbf{v}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{R}_{k, j}),
$$

where $\mathbf{Q}_k$ and $\mathbf{Q}_{k, j}$ are process and measurement covariance matrices. 
