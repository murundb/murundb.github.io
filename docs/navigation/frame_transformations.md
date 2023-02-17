## Common Transformations

Cartesian position, velocity, acceleration, and angular rate referenced to the same frame
transform between resolving axes simply by applying the transformation matrix:

$$
\mathbf{x}^{\gamma}_{\beta \alpha} = \mathbf{R}^\gamma_\delta \mathbf{x}^{\delta}_{\beta \alpha} \ \ \ 
\mathbf{x} \in \mathbf{r}, \mathbf{v}, \mathbf{a}, \boldsymbol{\omega} \ \ \ 
F_\gamma, F_\delta \in F_i, F_e, F_n, F_l, F_b. \label{3.8.1}
$$

The attitude of a body with respect to a reference frame is described by:

$$
\mathbf{R}^{\beta}_b, \mathbf{R}^b_\beta \ \ \ F_\beta \in F_i, F_e, F_n, F_l. \label{3.8.2}
$$

The body attitude with respect to a new reference frame can be obtained by multiplying by the
transformation matrix between the two reference frames:

$$
\mathbf{R}^{\delta}_b = \mathbf{R}^\delta_\beta \mathbf{R}^\beta_b, \ \ \ 
\mathbf{R}^{b}_\delta = \mathbf{R}^b_\beta \mathbf{R}^\beta_\delta \ \ \
F_\beta, F_\delta \in F_i, F_e, F_n, F_l. \label{3.8.3}
$$

Transforming Euler, quaternion, or rotation vector attitude to a new reference frame should be done via converting to transformation matrix
representation, transform the reference, and then convert back.

## ECI and ECEF Frames

Since the $z$ axis is common between ECI and ECEF, the transformation between the two frames can be described 
by rotation around the common $z$ axis:

$$
\begin{align}
\mathbf{R}^e_i &=
\left[
\begin{array}{ccc}
\text{cos} \omega_{ie} (t - t_0) & \text{sin} \omega_{ie} (t - t_0) & 0 \\
-\text{sin} \omega_{ie} (t - t_0) & \text{cos} \omega_{ie} (t - t_0) & 0 \\
0 & 0 & 1
\end{array}
\right] \\ \\
\mathbf{R}^i_e &=
\left[
\begin{array}{ccc}
\text{cos} \omega_{ie} (t - t_0) & -\text{sin} \omega_{ie} (t - t_0) & 0 \\
\text{sin} \omega_{ie} (t - t_0) & \text{cos} \omega_{ie} (t - t_0) & 0 \\
0 & 0 & 1
\end{array}
\right], \label{3.8.4}
\end{align}
$$

where $w_{it} (t-t_0)$ is the rotation angle since the time of coincidence between the two frames at $t_0$.

Since a position of body referenced to the two frames are the same, only the resolving axes need to be transformed:

$$
\mathbf{r}^e_{eb} = \mathbf{R}^e_i \mathbf{r}^i_{eb} = \mathbf{R}^e_i \mathbf{r}^i_{ib}, \ \ \ \mathbf{r}^i_{ib} = \mathbf{R}^i_e \mathbf{r}^e_{ib} =\mathbf{R}^i_e \mathbf{r}^e_{eb}. \tag{3.8.5} \label{3.8.5}
$$

Since ECEF is rotating with respect to ECI, the velocity transformation is:

$$
\begin{align}
\mathbf{v}^e_{eb} &= \dot{\mathbf{r}}^e_{eb} \\
&= \dot{\mathbf{R}}^e_i \mathbf{r}^i_{ib} + \mathbf{R}^e_i \dot{\mathbf{r}}^i_{ib} \\
&= -\boldsymbol{\Omega}^e_{ie} \mathbf{R}^e_i \mathbf{r}^i_{ib} + \mathbf{v}^e_{ib}\\ 
&= \mathbf{v}^e_{ib} - \boldsymbol{\Omega}^e_{ie} \mathbf{r}^e_{ib} \\
&= \mathbf{R}^e_i \mathbf{v}^i_{ib} - \mathbf{R}^e_i \boldsymbol{\Omega}^i_{ie} \mathbf{R}^i_e \mathbf{r}^e_{ib} \\
&= \mathbf{R}^e_i \left( \mathbf{v}^i_{ib} - \boldsymbol{\Omega}^i_{ie} \mathbf{r}^i_{ib} \right) \label{3.8.6}
\end{align},
$$

and:

$$
\begin{align}
\mathbf{v}^i_{ib} &= \dot{\mathbf{r}}^i_{ib} \\
&= \dot{\mathbf{R}}^i_e \mathbf{r}^e_{eb} + \mathbf{R}^i_e \dot{\mathbf{r}}^e_{eb} \\
&= \boldsymbol{\Omega}^{i}_{ie} \mathbf{R}^i_e \mathbf{r}^e_{eb} + \mathbf{R}^i_e \mathbf{v}^e_{eb} \\
&= \mathbf{R}^i_e \mathbf{R}^e_i \boldsymbol{\Omega}^{i}_{ie} \mathbf{R}^i_e \mathbf{r}^e_{eb} + \mathbf{R}^i_e \mathbf{v}^e_{eb} \\ 
&= \mathbf{R}^i_e \left( \mathbf{v}^e_{eb} + \boldsymbol{\Omega}^{e}_{ie} \mathbf{r}^e_{eb} \right). \label{3.8.7}
\end{align}
$$

Similarly, acceleration is:

$$
\begin{align}
\mathbf{a}^e_{eb} &= \mathbf{R}^e_i \left( \mathbf{a}^i_{ib} - 2 \boldsymbol{\Omega}^i_{ie} \mathbf{v}^i_{ib} +  \boldsymbol{\Omega}^i_{ie} \boldsymbol{\Omega}^i_{ie} \mathbf{r}^i_{ib} \right) \\ 
\mathbf{a}^i_{ib} &= \mathbf{R}^i_e \left( \mathbf{a}^e_{eb} + 2 \boldsymbol{\Omega}^e_{ie} \mathbf{v}^e_{eb} +  \boldsymbol{\Omega}^e_{ie} \boldsymbol{\Omega}^e_{ie} \mathbf{r}^e_{ib} \right). \label{3.8.8} \\ 
\end{align}
$$

For angular rates, we know that:

$$
\boldsymbol{\omega}^i_{ie} = \boldsymbol{\omega}^e_{ie} = 
\left[
\begin{array}{c}
0 \\
0 \\
\omega_{ie}
\end{array}
\right]. \label{3.8.9}
$$

Then:

$$
\begin{align}
\boldsymbol{\omega}^e_{eb} &= \boldsymbol{\omega}^e_{ib} - \boldsymbol{\omega}^e_{ie} = \mathbf{R}^e_i \left( \boldsymbol{\omega}^i_{ib} - \boldsymbol{\omega}^i_{ie} \right) \\ 
\boldsymbol{\omega}^i_{ib} &= \boldsymbol{\omega}^i_{eb} + \boldsymbol{\omega}^i_{ie} = \mathbf{R}^i_e \left( \boldsymbol{\omega}^e_{eb} + \boldsymbol{\omega}^e_{ie} \right). \label{3.8.10}
\end{align}
$$

## ECEF and Local Navigation Frames

ECEF frame to local navigation frame (NED) would require $z$ axis rotation by the amount of longitude, 
$\lambda_b$ and intermediate $y$ axis rotation by $-\frac{\pi}{2} -  L_b$, where $L_b$ is the latitude. This yields to:

$$
\begin{align}
\mathbf{R}^e_n &= 
\left[
\begin{array}{ccc}
\text{cos}(-\frac{\pi}{2} - L_b) & 0 & -\text{sin}(- \frac{\pi}{2} - L_b) \\ 
0 & 1 & 0 \\
\text{sin}(-\frac{\pi}{2} - L_b) & 0 & \text{cos}(-\frac{\pi}{2} - L_b) \\
\end{array}
\right]
\left[
\begin{array}{ccc}
\text{cos}\lambda_b & \text{sin}\lambda_b & 0 \\
-\text{sin}\lambda_b & \text{cos}\lambda_b & 0 \\
0 & 0 & 1\\
\end{array}
\right] \\ 
&= 
\left[
\begin{array}{ccc}
-\text{sin}L_b & 0 & \text{cos}L_b \\ 
0 & 1 & 0 \\
-\text{cos}L_b & 0 & -\text{sin}L_b \\
\end{array}
\right]
\left[
\begin{array}{ccc}
\text{cos}\lambda_b & \text{sin}\lambda_b & 0 \\
-\text{sin}\lambda_b & \text{cos}\lambda_b & 0 \\
0 & 0 & 1\\
\end{array}
\right] \\ 
&= 
\left[
\begin{array}{ccc}
-\text{sin}L_b \text{cos}\lambda_b & -\text{sin}L_b \text{sin}\lambda_b & \text{cos}L_b \\
-\text{sin}\lambda_b & \text{cos}\lambda_b & 0 \\
-\text{cos}L_b \text{cos}\lambda_b & -\text{cos}L_b \text{sin}\lambda_b & -\text{sin}L_b
\end{array}
\right], \label{3.8.11}
\end{align}
$$

and:

$$
\begin{align}
\mathbf{R}^n_e
&= 
\left[
\begin{array}{ccc}
-\text{sin}L_b \text{cos}\lambda_b & -\text{sin}\lambda_b & -\text{cos}L_b \text{cos}\lambda_b \\
-\text{sin}L_b \text{sin}\lambda_b & \text{cos}\lambda_b & -\text{cos}L_b \text{sin}\lambda_b  \\
\text{cos}L_b & 0 & -\text{sin}L_b \\
\end{array}
\right].  \label{3.8.12}
\end{align}
$$

The latitude and longitude can be obtained from the transformation matrices by:

$$
\begin{align}
L_b &= \text{arctan}\left(\frac{-R^n_{e3, 3}}{R^n_{e1, 3}} \right) = \text{arctan}\left(\frac{-R^e_{n3, 3}}{R^e_{n3, 1}} \right) \\
\lambda_b &= \text{arctan}_2 \left( -R^n_{e2, 1}, -R^n_{e2, 2} \right) = \text{arctan}_2 \left( -R^e_{n1, 2}, -R^e_{n2, 2} \right) \\
\end{align}
$$

Position, velocity, and acceleration referenced to local navigation frame are meaningless since the origin coincides with $F_b$.
The resolving axes of Earth-referenced position, velocity and acceleration are:

$$
\begin{align}
\mathbf{r}^n_{eb} &= \mathbf{R}^n_e \mathbf{r}^e_{eb}, \ \ \ \mathbf{r}^e_{eb} = \mathbf{R}^e_n \mathbf{r}^n_{eb} \\
\mathbf{v}^n_{eb} &= \mathbf{R}^n_e \mathbf{v}^e_{eb}, \ \ \ \mathbf{v}^e_{eb} = \mathbf{R}^e_n \mathbf{v}^n_{eb} \\
\mathbf{a}^n_{eb} &= \mathbf{R}^n_e \mathbf{a}^e_{eb}, \ \ \ \mathbf{a}^e_{eb} = \mathbf{R}^e_n \mathbf{a}^n_{eb} \label{3.8.13} \\
\end{align}
$$

Angular rates transform as:

$$
\begin{align}
\boldsymbol{\omega}^n_{nb} &= \mathbf{R}^n_e \left( \boldsymbol{\omega}^e_{eb} - \boldsymbol{\omega}^e_{en} \right) = \mathbf{R}^n_e \boldsymbol{\omega}^e_{eb} - \boldsymbol{\omega}^n_{en} \\ 
\boldsymbol{\omega}^e_{eb} &= \mathbf{R}^e_n \left( \boldsymbol{\omega}^n_{nb} + \boldsymbol{\omega}^n_{en} \right) \label{3.8.14}
\end{align} 
$$

## Inertial and Local Navigation Frames

We can compute the transform matrix from equations ($\ref{3.8.4}$) and ($\ref{3.8.12}$):

$$
\begin{align}
\mathbf{R}^n_i &= \mathbf{R}^e_i \mathbf{R}^n_e =
\left[
\begin{array}{ccc}
-\text{sin}L_b \text{cos}(\lambda_b + \omega_{ie}(t - t_0)) & -\text{sin}L_b \text{sin}(\lambda_b + \omega_{ie}(t - t_0)) & \text{cos}L_b \\
-\text{sin}(\lambda_b + \omega_{ie}(t - t_0)) & \text{cos}(\lambda_b + \omega_{ie} (t - t_0)) & 0 \\
-\text{cos}L_b \text{cos}(\lambda_b + \omega_{ie}(t - t_0)) & -\text{cos}L_b \text{sin}(\lambda_b + \omega_{ie}(t-t_0)) & -\text{sin}L_b
\end{array}
\right] \\ \\
\mathbf{R}^i_n &=
\left[
\begin{array}{ccc}
-\text{sin}L_b \text{cos}(\lambda_b + \omega_{ie}(t - t_0)) & -\text{sin}(\lambda_b + \omega_{ie}(t - t_0)) & -\text{cos}L_b \text{cos}(\lambda_b + \omega_{ie}(t - t_0)) \\
-\text{sin}L_b \text{sin}(\lambda_b + \omega_{ie}(t - t_0)) & \text{cos}(\lambda_b + \omega_{ie} (t - t_0)) & -\text{cos}L_b \text{sin}(\lambda_b + \omega_{ie}(t-t_0)) \\
\text{cos}L_b & 0 & -\text{sin}L_b \\ 
\end{array}
\right] \label{3.8.15}
\end{align}
$$

Earth-referenced velocity and acceleration in navigation frame axes transform to and from their ECI reference counterparts as:

$$
\begin{align}
\mathbf{v}^n_{eb} &= \mathbf{R}^n_i (\mathbf{v}^i_{ib} + \boldsymbol{\Omega}^i_{ie} \mathbf{r}^i_{ib}) \\
\mathbf{v}^i_{ib} &= \mathbf{R}^i_n \mathbf{v}^n_{eb} + \mathbf{R}^i_e \boldsymbol{\Omega}^e_{ie} \mathbf{r}^e_{eb} \\
\mathbf{a}^n_{eb} &= \mathbf{R}^n_i (\mathbf{a}^i_{ib} - 2 \boldsymbol{\Omega}^i_{ie} \mathbf{v}^i_{ib} + \boldsymbol{\Omega}^i_{ie} \boldsymbol{\Omega}^i_{ie} \mathbf{r}^i_{ib}) \\
\mathbf{a}^i_{ib} &= \mathbf{R}^i_n (\mathbf{a}^n_{eb} + 2 \boldsymbol{\Omega}^n_{ie} \mathbf{v}^n_{eb}) + \mathbf{R}^i_e \boldsymbol{\Omega}^e_{ie} \boldsymbol{\Omega}^e_{ie} \mathbf{r}^e_{eb}. \label{3.8.16}
\end{align} 
$$

Angular rates transform as:

$$
\begin{align}
\boldsymbol{w}^n_{nb} &= \mathbf{R}^n_i (\boldsymbol{\omega}^i_{ib} - \boldsymbol{\omega}^i_{in}) = \mathbf{R}^n_i (\boldsymbol{\omega}^i_{ib} - \boldsymbol{\omega}^i_{ie}) - \boldsymbol{\omega}^n_{en} \\
\boldsymbol{w}^i_{ib} &= \mathbf{R}^i_n (\boldsymbol{\omega}^n_{nb} + \boldsymbol{\omega}^n_{in}) = \mathbf{R}^i_n (\boldsymbol{\omega}^n_{nb} + \boldsymbol{\omega}^n_{en}) + \boldsymbol{\omega}^i_{ie}. \label{3.8.17}
\end{align}
$$

## Earth and Local Tangent-Plane Frames

The transformation matrix is similar to ECEF and navigation frame conversions:

$$
\begin{align}
\mathbf{R}^e_l &=
\left[
\begin{array}{ccc}
-\text{sin}L_l \text{cos}\lambda_l & -\text{sin}L_l \text{sin}\lambda_l & \text{cos}L_l \\
-\text{sin}\lambda_l & \text{cos}\lambda_l & 0 \\
-\text{cos}L_l \text{cos}\lambda_l & -\text{cos}L_l \text{sin}\lambda_l & -\text{sin}L_l
\end{array}
\right] \\ \\
\mathbf{R}^l_e
&= 
\left[
\begin{array}{ccc}
-\text{sin}L_l \text{cos}\lambda_l & -\text{sin}\lambda_l & -\text{cos}L_l \text{cos}\lambda_l \\
-\text{sin}L_l \text{sin}\lambda_l & \text{cos}\lambda_l & -\text{cos}L_l \text{sin}\lambda_l  \\
\text{cos}L_l & 0 & -\text{sin}L_l \\
\end{array}
\right]. \label{3.8.18}
\end{align}
$$

Note that the origin and orientation of a local tangent-plane frame with respect to an ECEF frame are constant. Therefore, the velocity, acceleration,
and angular rate can be transformed by rotating the resolving axes:

$$
\begin{align}
\mathbf{v}^l_{lb} &= \mathbf{R}^l_e \mathbf{v}^e_{eb}, \ \ \ \mathbf{v}^e_{eb} = \mathbf{R}^e_l \mathbf{v}^l_{lb} \\
\mathbf{a}^l_{lb} &= \mathbf{R}^l_e \mathbf{a}^e_{eb}, \ \ \ \mathbf{a}^e_{eb} = \mathbf{R}^e_l \mathbf{a}^l_{lb} \\
\mathbf{w}^l_{lb} &= \mathbf{R}^l_e \mathbf{w}^e_{eb}, \ \ \ \mathbf{w}^e_{eb} = \mathbf{R}^e_l \mathbf{w}^l_{lb} \label{3.8.19} \\
\end{align}
$$

The Cartesian position transforms as:

$$
\begin{align}
\mathbf{r}^l_{lb} &= \mathbf{R}^l_e \left( \mathbf{r}^e_{eb} - \mathbf{r}^e_{el} \right) \\
\mathbf{r}^e_{eb} &= \mathbf{r}^e_{el} + \mathbf{R}^e_l \mathbf{r}^l_{lb} \label{3.8.20}
\end{align},
$$

where $\mathbf{r}^e_{el}$ is the Cartesoam ECEF position of the local tangent-plane origin.

## ENU and NED

Considering some authors use East-North-Up, $F_{ENU}$ and Groves use North-East-Down, $F_{NED}$, the transformation matrix between the two is derived here.
ENU to NED can be achieved by rotating about the $z$ axis 90 degrees anti-clockwise and 180 degrees anti-clockwise about the $x$ axis:

$$
\begin{align}
\mathbf{R}^{NED}_{ENU} &=
\left[
\begin{array}{ccc}
1 & 0 & 0 \\
0 & \text{cos}(180^o) & \text{sin}(180^o) \\ 
0 & -\text{sin}(180^o) & \text{cos}(180^o)
\end{array}
\right]
\left[
\begin{array}{ccc}
\text{cos}(90^o) & \text{sin}(90^o) &  0 \\
-\text{sin}(90^o) & \text{cos}(90^o) & 0 \\
0 & 0 & 1
\end{array}
\right] \\
&= 
\left[
\begin{array}{ccc}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & -1
\end{array}
\right] \label{3.8.21}
\end{align}
$$