# Essential and Fundamental Matrix

## Definitions

Both Essential and Fundamental matrices relate corresponding points or features in two images. The difference is that in the case of Fundamental matrix, the points are in pixel coordinates, whereas in the case of the Essential matrix, the points are in normalized image coordinates. Normalized image coordinates have the origin at the optical center of the image, and the $x$ and $y$ coordinates are normalized by $f_x$ and $f_y$ respectively, so that they are dimensionless. The relationship between the two matrices are:

$$
\begin{align}
\mathbf{E} &= \mathbf{K}^T \mathbf{F} \mathbf{K}, \\
\mathbf{F} &= \left(\mathbf{K}^{-1} \right)^T \mathbf{E} \mathbf{K}^{-1},
\end{align}
$$

where $\mathbf{K}$ is the intrinsic matrix of the camera. If we define $\mathbf{R}$ and $\mathbf{t}$ to be the motion from the first frame to the second frame, the essential matrix can be computed as:

$$
\mathbf{E} = \left[ \mathbf{t} \right]_\times \mathbf{R}.
$$

The epipolar constraints are:

$$
\mathbf{x}^T_2 \mathbf{E} \mathbf{x}_1 = \mathbf{p}^T_2 \mathbf{F} \mathbf{p}_1 = 0.
$$

$\mathbf{F}$ has 7 degrees of freedom, whilst $\mathbf{E}$ has 5 degrees of freedom since it takes the camera parameters into account. Hence, there is an 8-point algorithm for computing the Fundamental matrix and a 5-point algorithm for computing the Essential matrix.

## Essential Matrix

Consider a pair of matched points, $\mathbf{x}_1$ and $\mathbf{x}_2$. Let their normalized image coordinates be:

$$
\mathbf{x}_1 = \left[\begin{array}{ccc} u_1 & v_1 & 1 \end{array} \right]^T, \quad \mathbf{x}_2 = \left[\begin{array}{ccc} u_2 & v_2 & 1 \end{array} \right]^T.
$$

From the epipolar constraints, we have:

$$
\left[\begin{array}{ccc} u_2 & v_2 & 1 \end{array} \right]
\left[
\begin{array}{ccc}
e_1 & e_2 & e_3 \\
e_4 & e_5 & e_6 \\
e_7 & e_8 & e_9
\end{array}
\right]
\left[
\begin{array}{c}
u_1 \\
v_1 \\
1
\end{array}
\right] = 0.
$$

Rewrite the Essential matrix $\mathbf{E}$ in vector form as $\mathbf{e}$:

$$
\mathbf{e} = \left[\begin{array}{ccccccccc} e_1 & e_2 & e_3 & e_4 & e_5 & e_6 & e_7 & e_8 & e_9 \end{array} \right]^T,
$$

then the epipolar constraint can be rewritten in a linear form as:

$$
\left[\begin{array}{ccccccccc}u_2 u_1 & u_2 v_1 & u_2 & v_2 u_1 & v_2 v_1 & v_2 & u_1 & v_1 & 1 \end{array} \right] \cdot \mathbf{e} = 0.
$$

Let $u^i$ and $v^i$ represents the $i$-th feature point. Given 8 points, we have:

$$
\begin{align}
\left[
\begin{array}{ccccccccc}
u^1_2 u^1_1 & u^1_2 v^1_1 & u^1_2 & v^1_2 u^1_1 & v^1_2 v^1_1 & v^1_2 & u^1_1 & v^1_1 & 1 \\
u^2_2 u^2_1 & u^2_2 v^2_1 & u^2_2 & v^2_2 u^2_1 & v^2_2 v^2_1 & v^2_2 & u^2_1 & v^2_1 & 1 \\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
u^8_2 u^8_1 & u^8_2 v^8_1 & u^8_2 & v^8_2 u^8_1 & v^8_2 v^8_1 & v^8_2 & u^8_1 & v^8_1 & 1 \\
\end{array}
\right]
\left[
\begin{array}{c}
e_1 \\
e_2 \\
\vdots \\
e_9
\end{array}
\right] = 0.
\end{align}
$$

If the matrix composed of 8 pairs of matching points has full rank, then the elements of $\mathbf{E}$ can be solved uniquely. It is preferred to use RANSAC instead of least squares to solve the above problem due to potential mismatch.

To recover the movement of the camera $\mathbf{R}$ and $\mathbf{t}$ according to the estimated Essential matrix $\mathbf{E}$, we can use SVD:

$$
\mathbf{E} = \mathbf{U} \boldsymbol{\Sigma} \mathbf{V}^T,
$$

where $\mathbf{U}$, $\mathbf{V}$ are orthogonal matrices, and $\boldsymbol{\Sigma}$ is the singular value matrix. Per the internal properties of $\mathbf{E}$, we know that $\boldsymbol{\Sigma} = \text{diag}(\sigma, \sigma, 0)$. In SVD decomposition, for any $\mathbf{E}$, there are two possible $\mathbf{T}$ and $\mathbf{R}$:

$$
\begin{alignat}{2}
\left[ \mathbf{t}_1 \right]_\times &= \mathbf{U} \mathbf{R}_Z \left( \frac{\pi}{2} \right) \boldsymbol{\Sigma} \mathbf{U}^T, \quad && \mathbf{R}_1 = \mathbf{U} \mathbf{R}^T_{Z} \left(\frac{\pi}{2} \right) \mathbf{V}^T \\
\left[ \mathbf{t}_2 \right]_\times &= \mathbf{U} \mathbf{R}_Z \left( \frac{-\pi}{2} \right) \boldsymbol{\Sigma} \mathbf{U}^T, \quad && \mathbf{R}_2 = \mathbf{U} \mathbf{R}^T_{Z} \left(\frac{-\pi}{2} \right) \mathbf{V}^T.
\end{alignat}
$$

Decomposing from $\mathbf{E}$ to $\mathbf{t}$ and $\mathbf{R}$ yields to total of four possible solutions. However, only single solution has a positive depth which should be taken as the solution.
