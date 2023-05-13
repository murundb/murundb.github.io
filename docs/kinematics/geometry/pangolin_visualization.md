## Visualization via Pangolin

Pangolin and Eigen are used for visualization. Consider two Cartesian coordinate frames; $F_{\beta}$, a frame fixed to a reference point, 
and a body frame, $F_{\alpha}$ which is fixed to a center of a rigid body. Consider the following five epochs for pose:

1. At $t = 0$, the pose of the two frames are identical.
2. At $t = 1$, the object position is at $\mathbf{x}^{\beta}(t = 1) =
\left[
\begin{array}{ccc}
0.2 & 0 & 0
\end{array}
\right]^T$ and the Euler angles are $\Psi_{\beta \alpha}(t = 1) = 
\left[
\begin{array}{ccc}
20 & 30 & 80
\end{array}
\right]^T$ degrees.

3. At $t = 2$, the object position is at $\mathbf{x}^{\beta}(t = 2) =
\left[
\begin{array}{ccc}
0.2 & 0.2 & 0
\end{array}
\right]^T$ and the Euler angles are $\Psi_{\beta \alpha}(t = 2) = 
\left[
\begin{array}{ccc}
30 & 50 & 25
\end{array}
\right]^T$ degrees. 

4. At $t = 3$, the object position is at $\mathbf{x}^{\beta}(t = 3) =
\left[
\begin{array}{ccc}
0.2 & 0.2 & -0.2
\end{array}
\right]^T$ and the Euler angles are $\Psi_{\beta \alpha}(t = 3) = 
\left[
\begin{array}{ccc}
20 & 40 & -10
\end{array}
\right]^T$ degrees.

5. At $t = 4$, the object position is at $\mathbf{x}^{\beta}(t = 4) =
\left[
\begin{array}{ccc}
0 & 0.2 & -0.2
\end{array}
\right]^T$ and the Euler angles are $\Psi_{\beta \alpha}(t = 4) = 
\left[
\begin{array}{ccc}
0 & 10 & -20
\end{array}
\right]^T$ degrees.

Figure 2.5.1 shows the visualization of each pose via Pangolin.

<figure markdown>
  ![$z$-$y$-$x$ rotation from left to right (source Groves, p34)](/assets/images/kinematics/light/pose_pangolin.png#only-light){ width="1000" }
  ![$z$-$y$-$x$ rotation from left to right (source Groves, p34)](/assets/images/kinematics/dark/pose_pangolin.png#only-dark){ width="1000" }
  <figcaption>Figure 1 Pose Visualization via Pangolin</figcaption>
</figure>

## Euler and Transformation Matrix

The corresponding sample transformation matrices for the first three epochs are:

$$
\begin{align}
\mathbf{R}^{\beta}_{\alpha}(t=0) &= 
\left[
\begin{array}{ccc}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{array}
\right] \\
\mathbf{R}^{\beta}_{\alpha}(t=1) &= 
\left[
\begin{array}{ccc}
0.1504 & -0.8957 & 0.7783 \\
0.8523 & 0.3316 & 0.4033 \\
-0.5 & 0.2962 & 0.8138 \\
\end{array}
\right] \\
\mathbf{R}^{\beta}_{\alpha}(t=2) &= 
\left[
\begin{array}{ccc}
0.5826 & -0.0189 & 0.7858 \\
0.2716 & 0.9467 & -0.1728 \\
-0.7660 & 0.3214 & 0.5567 \\
\end{array}
\right] \\
\end{align}
$$

C++ code snippet for Euler to and from Transformation matrix is as follows:

``` cpp
/// Euler angles to transformation matrix
Eigen::Matrix3d MatrixFromEuler(double roll, double pitch, double yaw)
{
    double s_phi = sin(roll);
    double c_phi = cos(roll);
    
    double s_theta = sin(pitch);
    double c_theta = cos(pitch);
    
    double s_psi = sin(yaw);
    double c_psi = cos(yaw);
    
    Eigen::Matrix3d transform_matrix(3, 3);
    transform_matrix(0, 0) = c_theta * c_psi;
    transform_matrix(0, 1) = -c_phi * s_psi + s_phi * s_theta * c_psi;
    transform_matrix(0, 2) = s_phi * s_psi + c_phi * s_theta * c_phi;
    
    transform_matrix(1, 0) = c_theta * s_psi;
    transform_matrix(1, 1) = c_phi * c_psi + s_phi * s_theta * s_psi;
    transform_matrix(1, 2) = -s_phi * c_psi + c_phi * s_theta * s_psi;
    
    transform_matrix(2, 0) = -s_theta;
    transform_matrix(2, 1) = s_phi * c_theta;
    transform_matrix(2, 2) = c_phi * c_theta;
    
    return transform_matrix;
    }

    /// Transformation matrix to Euler angles
    Eigen::Vector3d EulerFromMatrix(Eigen::Matrix3d transform_matrix)
    {
    Eigen::Vector3d euler_angles(0, 0, 0);
    euler_angles(0) = atan2(transform_matrix(2, 1), transform_matrix(2, 2));
    euler_angles(1) = -asin(transform_matrix(2, 0));
    euler_angles(2) = atan2(transform_matrix(1, 0), transform_matrix(0, 0));
    
    return euler_angles;
}
```

## Axis-Angle and Transformation Matrix

The corresponding rotation vectors for the first three epochs are:

$$
\begin{align}
\mu_{\beta \alpha}(t=0) &= 0^{o} \\
\boldsymbol{\rho}_{\beta \alpha}(t=0) &= 
\left[
\begin{array}{c}
1 \\
0 \\
0 \end{array}
\right] \\
\mu_{\beta \alpha}(t=1) &= 86.73^{o} \\
\boldsymbol{\rho}_{\beta \alpha}(t=1) &= 
\left[
\begin{array}{c}
-0.049 \\
0.589 \\
0.806 \end{array}
\right] \\
\mu_{\beta \alpha}(t=2) &= 56.385^{o} \\
\boldsymbol{\rho}_{\beta \alpha}(t=2) &= 
\left[
\begin{array}{c}
0.299 \\
0.938 \\
0.176 \end{array}
\right] \\
\end{align}
$$

C++ code snippet for transformation matrix to rotation vector is as follows:

``` cpp
/// Transformation matrix to axis-angle 
/// Note that the transformation matrix here is R^{\beta}_{\alpha}
Eigen::Vector4d AxisAngleFromMatrix(Eigen::Matrix3d transform_matrix)
{
    Eigen::Vector4d axis_angle;
    axis_angle(0) = acos(0.5 * (transform_matrix(0, 0) + transform_matrix(1, 1) + transform_matrix(2, 2) - 1));

    double s_angle = sin(axis_angle(0));

    axis_angle(1) = (transform_matrix(1, 2) - transform_matrix(2, 1)) / (2 * s_angle);
    axis_angle(2) = (transform_matrix(2, 0) - transform_matrix(0, 2)) / (2 * s_angle);
    axis_angle(3) = (transform_matrix(0, 1) - transform_matrix(1, 0)) / (2 * s_angle);

    return axis_angle;
}
```

## Quaternion and Transformation Matrix

The corresponding quaternions for the first three epochs are:

$$
\begin{align}
\mathbf{q}^{\beta}_{\alpha}(t=0) &= 0i + 0j + 0k + 1 \\
\mathbf{q}^{\beta}_{\alpha}(t=1) &= -0.0353487i + 0.421843j + 0.577024k + 0.75759 \\
\mathbf{q}^{\beta}_{\alpha}(t=2) &= 0.140655i + 0.441706j + 0.082688k + 0.878349 \\
\end{align}
$$

C++ code snippet for transformation matrix to rotation vector is as follows:
```cpp
/// Transformation matrix to axis-angle 
/// Note that the transformation matrix here is R^{\beta}_{\alpha}
Eigen::Vector4d AxisAngleFromMatrix(Eigen::Matrix3d transform_matrix)
{
    Eigen::Vector4d axis_angle;
    axis_angle(0) = acos(0.5 * (transform_matrix(0, 0) + transform_matrix(1, 1) + transform_matrix(2, 2) - 1));

    double s_angle = sin(axis_angle(0));

    axis_angle(1) = (transform_matrix(1, 2) - transform_matrix(2, 1)) / (2 * s_angle);
    axis_angle(2) = (transform_matrix(2, 0) - transform_matrix(0, 2)) / (2 * s_angle);
    axis_angle(3) = (transform_matrix(0, 1) - transform_matrix(1, 0)) / (2 * s_angle);

    return axis_angle;
}
```