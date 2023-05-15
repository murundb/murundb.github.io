
## Navigation Equations in Local Tanget-Plane Frame

Local-tangent plane frame is used for navigation within a localized area. Since the frame is Earth fixed, the navigation equations
have similar form to the navigation equations in ECEF-frame.

## Attitude Update

To track the attitude change, we must track the transformation matrix through time. Consider the attitude change over time interval $t$ to $t + \tau_i$. The time derivative of the trasnformation matrix is:

$$
\begin{align}
\dot{\mathbf{R}}^l_b &= \mathbf{R}^l_b \boldsymbol{\Omega}^b_{lb} \\
&= \mathbf{R}^l_b  \left( \boldsymbol{\Omega}^b_{ib} - \boldsymbol{\Omega}^b_{il} \right) \\ 
&= \mathbf{R}^l_b \boldsymbol{\Omega}^b_{ib} - \mathbf{R}^l_b \boldsymbol{\Omega}^b_{il} \\
&= \mathbf{R}^l_b \boldsymbol{\Omega}^b_{ib} - \mathbf{R}^l_b \mathbf{R}^b_l \boldsymbol{\Omega}^l_{il}  \mathbf{R}^l_b \\
&= \mathbf{R}^l_b \boldsymbol{\Omega}^b_{ib} - \boldsymbol{\Omega}^l_{il}  \mathbf{R}^l_b, \label{4.4.1}
\end{align}
$$

where $\boldsymbol{\Omega}^b_{ib}$ is the skew-symmetric matrix of the IMU's angular-rate measurement and $\boldsymbol{\Omega}^e_{il}$ is equivalent to:

$$
\boldsymbol{\Omega}^l_{il} = \mathbf{R}^l_e  \boldsymbol{\Omega}^e_{ie} \mathbf{R}^e_l. \label{4.4.2}
$$

Hence, the rotation of the Earth must be accounded for in updating the attitude. Note that $\mathbf{R}^l_e$ is constant since both frames are Earth fixed.

Since this is a first-order matrix ordinary differential equation, assuming $\boldsymbol{\Omega}^e_{ie}$ is constant:

$$
\begin{align}
\mathbf{R}^l_b(t + \tau_i) &\approx \mathbf{R}^l_b(t) \exp\left( \boldsymbol{\Omega}^b_{lb} \tau_i \right) \\
&= \mathbf{R}^l_b(t) \exp \left( \boldsymbol{\Omega}^b_{ib} \tau_i - \boldsymbol{\Omega}^l_{il} \tau_i \right) \\
&= \mathbf{R}^l_b(t) \exp\left(\boldsymbol{\Omega}^b_{ib} \tau_i \right) - \mathbf{R}^l_b(t) \left[ \exp\left( \boldsymbol{\Omega}^b_{il} \tau_i \right) - \mathbf{I}_3 \right] \\
&= \mathbf{R}^l_b(t) \exp\left( \left[ \boldsymbol{\alpha}^b_{ib} \right]_\times \right) - \left[ \exp\left( \boldsymbol{\Omega}^l_{il} \tau_i \right) - \mathbf{I}_3 \right] \mathbf{R}^l_b(t). \\ \label{4.4.3}
\end{align}
$$

Applying small angle approximation and truncating the power series expansion at the first order yields to:

$$
\mathbf{R}^l_b(+) \approx \mathbf{R}^l_b(-) \left( \mathbf{I}_3 + \boldsymbol{\Omega}^b_{ib} \tau_i \right) - \boldsymbol{\Omega}^l_{il} \mathbf{R}^l_b(-) \tau_i. \label{4.4.4}
$$

Since the rotation of the Earth is much slower compared to the angular rate measurements from the IMU, this small angle approximation is always valid for the Earth rate term of the attitude update equation.

## Precision Attitude Update 

We can replace the first order approximation in eq ($\ref{4.4.4}$) with the attitude update matrix:

$$
\begin{align}
\mathbf{R}^l_b(+) &= 
\left[ 
\begin{array}{ccc}
\text{cos}\omega_{ie} \tau_i & \text{sin}\omega_{ie} \tau_i & 0 \\
-\text{sin}\omega_{ie} \tau_i & \text{cos}\omega_{ie} \tau_i & 0 \\
0 & 0 & 1
\end{array}
\right]
\mathbf{R}^l_b(-) \mathbf{R}^{b-}_{b+} \\
&\approx \mathbf{R}^l_b(-)\mathbf{R}^{b-}_{b+} - \boldsymbol{\Omega}^l_{il} \mathbf{R}^l_b(-) \tau_i, \label{4.4.5}
\end{align}
$$

where the attidude update matrix is given by the Rodrigues's formula:

$$
\begin{align}
\mathbf{R}^{b-}_{b+} &= \mathbf{I}_3 + \frac{\text{sin}|\boldsymbol{\alpha}^b_{ib}|}{|\boldsymbol{\alpha}^b_{ib}|} 
\left[ \boldsymbol{\alpha}^b_{ib} \right]_\times
+ \frac{1 - \text{cos}|\boldsymbol{\alpha}^b_{ib}|}{|\boldsymbol{\alpha}^b_{ib}|^2} \left[ \boldsymbol{\alpha}^b_{ib} \right]^2_\times. \label{4.4.6}
\end{align}
$$

## Specific-Force Frame Transformation

The IMU measures specific force along the body-frame resolving axe. Applying the transform matrix similar to ECEF yields:

$$
\mathbf{f}^l_{ib}(t) = \mathbf{R}^l_b(t) \mathbf{f}^b_{ib}(t). \label{4.4.7}
$$

Since the specific-force measurement is an average over time $t$ to $t + \tau_i$, the transformation matrix should be similarly averaged. Assuming a constant angular rate:

$$
\mathbf{f}^l_{ib} \approx \frac{1}{2} \left( \mathbf{R}^l_b(-) + \mathbf{R}^l_b(+) \right) \mathbf{f}^b_{ib}. \label{4.4.8}
$$

However, the mean of two transformation matrices does not precisely produce the mean of the two attitudes. The less the attitude varies over the time interval,
the smaller the errors introduced by this approximation.

## Precision Specific-Force Frame Transformation

Retaining the first-order approximation for the Earth-rate term, the prcecise transformation of the specific force to local tangent-plane frame axes is:

$$
\mathbf{f}^l_{ib} = \bar{\mathbf{R}}^l_b \mathbf{f}^b_{ib}, \quad \bar{\mathbf{R}}^l_b = \mathbf{R}^l_b(-) \mathbf{R}^{b-}_{\bar{b}} - \frac{1}{2} \boldsymbol{\Omega}^l_{il} \mathbf{R}^l_b(-) \tau_i, \label{4.4.9}
$$

where:

$$
\begin{align}
\mathbf{R}^{b-}_{\bar{b}} &= \mathbf{I}_3 + 
\frac{1 - \text{cos}|\boldsymbol{\alpha^b_{ib}}|}{|\boldsymbol{\alpha^b_{ib}}|^2} \left[ \boldsymbol{\alpha}^b_{ib} \right]_\times
+ 
\frac{1}{|\boldsymbol{\alpha^b_{ib}}|^2}
\left(
1 - \frac{\text{sin}|\boldsymbol{\alpha^b_{ib}}|}{|\boldsymbol{\alpha^b_{ib}}|}
\right) \left[ \boldsymbol{\alpha}^b_{ib} \right]^2_\times. \label{4.4.10}
\end{align}
$$

## Velocity Update

Similar to ECI/ECEF frame implementation, since the reference frame and resolving axes are the same:

$$
\dot{\mathbf{v}}^l_{lb} = \mathbf{a}^l_{lb} = \ddot{\mathbf{r}}^l_{lb}. \label{4.4.11}
$$

Since:

$$
\begin{align}
\mathbf{r}^l_{lb} &= \mathbf{r}^l_{ib} - \mathbf{r}^l_{il} \\ 
&= \mathbf{r}^l_{ib},
\end{align} \label{4.4.12}
$$

we get:

$$
\dot{\mathbf{v}}^l_{lb} = \ddot{\mathbf{r}}^l_{ib}. \label{4.4.13}
$$

From the section on acceleration in Kinematics, we get:

$$
\begin{align}
\mathbf{v}^l_{lb} &= -\boldsymbol{\Omega}^l_{il} \boldsymbol{\Omega}^l_{il} \mathbf{r}^l_{ib} - 2 \boldsymbol{\Omega}^l_{il} \dot{\mathbf{r}}^l_{lb} + \mathbf{a}^l_{ib} \\
&= -\boldsymbol{\Omega}^l_{il} \boldsymbol{\Omega}^l_{il} \mathbf{r}^l_{ib} - 2 \boldsymbol{\Omega}^l_{il} \mathbf{v}^l_{lb} + \mathbf{a}^l_{ib}. \label{4.4.14}
\end{align}
$$

The equation shows that the rate of change of velocity resolved about the local tangent-plane frame axes incorporates a centrifugal and a Coriolis term due to the rotation of the resolving axes. From the section on gravity models, we know that the applied acceleration
$\mathbf{a}^l_{ib}$ is the sum of the measured specific force, $\mathbf{f}^l_{ib}$, and the acceleration due to the gravitation force, $\boldsymbol{\gamma}^l_{ib}$.

Furthermore, the acceleration due to gravity, $\mathbf{g}^e_b$, is the sum of the gravitational and centrifugal accelerations. Hence:

$$
\dot{\mathbf{v}}^l_{lb} = \mathbf{f}^l_{ib} + \mathbf{R}^l_e \mathbf{g}^e_b(\mathbf{r}^e_{eb}) - 2 \boldsymbol{\Omega}^l_{il} \mathbf{v}^l_{lb}, \label{4.4.15}
$$

where:

$$
\begin{align}
\mathbf{r}^l_{lb} &= \mathbf{R}^l_e \left( \mathbf{r}^e_{eb} - \mathbf{r}^e_{el} \right) \\
\mathbf{r}^e_{eb} &= \mathbf{r}^e_{el} + \mathbf{R}^e_l \mathbf{r}^l_{lb}.
\end{align}
$$

Since the Coriolis term is much smaller than the specific-force and gravity terms (except for space applications), it is reasonable approximation
to neglegt the variation of the Coriolis term over the integration interval. Hence:

$$
\begin{align}
\mathbf{v}^l_{lb}(+) & \approx \mathbf{v}^l_{lb}(-) + \left( \mathbf{f}^l_{ib} 
+ \mathbf{R}^l_e \mathbf{g}^e_b(\mathbf{r}^e_{eb}(-)) - 2 \boldsymbol{\Omega}^l_{il} \mathbf{v}^l_{lb}(-) \right) \tau_i \\ 
&= \mathbf{v}^l_{lb}(-) + \boldsymbol{v}^l_{ib} + \left(  \mathbf{R}^l_e \mathbf{g}^e_b(\mathbf{r}^e_{eb}(-)) - 2 \boldsymbol{\Omega}^l_{il} \mathbf{v}^l_{lb}(-) \right) \tau_i. \label{4.4.16}
\end{align}
$$

## Position Update

In local-tangent plane frame implementation of the navigation equations, the time derivative of the Cartesian position is simply velocity as the reference frame and resolving
axes are the same:

$$
\dot{\mathbf{r}}^l_{lb} = \mathbf{v}^l_{lb}. \label{4.4.17}
$$

Integrating this gives:

$$
\begin{align}
\mathbf{r}^l_{lb}(+) &= \mathbf{r}^l_{lb}(-) + \left( \mathbf{v}^l_{lb}(-) + \mathbf{v}^l_{lb}(+) \right) \frac{\tau_i}{2} \\
&\approx \mathbf{r}^l_{lb}(-) + \mathbf{v}^l_{lb}(-)\tau_i + \left( \mathbf{f}^l_{ib} + \mathbf{R}^l_e \mathbf{g}^e_b (\mathbf{r}^e_{eb}(-)) - 2 \boldsymbol{\Omega}^l_{il} \mathbf{v}^l_{lb}(-) \right) \frac{\tau^2_i}{2}. \label{4.4.18}
\end{align}
$$

## Precision Velocity and Position Update

Exact evaluation of the Coriolis and transport-rate terms require knowledge of the velocity at the end of the update interval, requiring recursive solution. A good but processor-intensive solution is
a two-step recursive method.