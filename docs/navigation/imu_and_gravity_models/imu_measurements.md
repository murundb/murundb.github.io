# IMU Measurements

## Gravity Model

<figure markdown>
  ![Gravity](/assets/images/navigation/light/gravity.png#only-light){ width="300" }
  ![Gravity](/assets/images/navigation/dark/gravity.png#only-dark){ width="300" }
  <figcaption>Figure 1 Gravity, gravitational acceleration, centrifugal acceleration (Groves, p71)</figcaption>
</figure>

Figure 1 shows that the net acceleration due to gravity, $\mathbf{g}$, is the sum of gravitational acceleration, $\boldsymbol{\gamma}$, (due to the mass distribution within Earth) and the outward centrifugal acceleration (due to the Earth's rotation). The algebraic representation in frame $F_{\gamma}$ for the body $b$ is:

$$
\mathbf{g}^\gamma_{b} = \boldsymbol{\gamma}^{\gamma}_{ib} - \boldsymbol{\Omega}^\gamma_{i e} \boldsymbol{\Omega}^\gamma_{i e} \mathbf{r}^\gamma_{eb}.
$$

Depending on the resolving frame as well as the gravity model being used, the formulation of net acceleration can differ. The following table is from Groves.

| Resolving Frame | Gravity Model |
| --------------- | ------------- |
| ECI | When working in an ECI, it is common to neglegt Earth's rotation rate. Refer to Sola for more information. <br> $\begin{align*} \mathbf{g}^i_{b} &= \boldsymbol{\gamma}^i_{ib} \\ \boldsymbol{\gamma}^i_{ib} &=  -\frac{\mu}{\left\|\mathbf{r}^i_{ib}\right\|^3} \left\{ \mathbf{r}^i_{ib} + \frac{3}{2}J_2 \frac{R_0^2}{\left\|\mathbf{r}^i_{ib}\right\|^2} \left\{ \begin{array}{c} \left[ 1 - 5(r^i_{ib,z} / \left\|\mathbf{r}^i_{ib}\right\|)^2 \right] r^i_{ib, x} \\ \left[1 - 5(r^i_{ib,z} / \left\|\mathbf{r}^i_{ib}\right\|)^2 \right] r^i_{ib, y} \\ \left[ 3 - 5(r^i_{ib,z} \ \left\|\mathbf{r}^i_{ib}\right\|)^2 \right] r^i_{ib, z} \end{array} \right\} \right\} \end{align*}$ |
| ECEF | $\begin{align*} \mathbf{g}^e_{b} &= \boldsymbol{\gamma}^e_{ib} + \boldsymbol{\omega}^2_{ie} \left[ \begin{array}{ccc} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{array}\right] \mathbf{r}^e_{eb} \\ \boldsymbol{\gamma}^e_{ib} &= -\frac{\mu}{\left\|\mathbf{r}^e_{eb}\right\|^3} \left\{ \mathbf{r}^e_{eb} + \frac{3}{2}J_2 \frac{R_0^2}{\left\|\mathbf{r}^e_{eb}\right\|^2}  \left\{ \begin{array}{c} \left[ 1 - 5(r^e_{eb,z} / \left\|\mathbf{r}^e_{eb}\right\|)^2 \right] r^e_{eb, x} \\ \left[ 1 - 5(r^e_{eb,z} / \left\|\mathbf{r}^e_{eb}\right\|)^2 \right] r^e_{eb, y} \\ \left[ 3 - 5(r^e_{eb,z} / \left\|\mathbf{r}^e_{eb}\right\|)^2 \right] r^e_{eb, z} \end{array} \right\} \right\} \end{align*}$ |
| NED | $\begin{align*} \mathbf{g}^n_b &= \boldsymbol{\gamma}^{n}_{ib} + \boldsymbol{\Omega}^{n}_{ib} \boldsymbol{\Omega}^{n}_{ib} \mathbf{r}^{n}_{eb} \\ &= \boldsymbol{\gamma}^{n}_{ib} + \mathbf{R}^{n}_e \boldsymbol{\Omega}^{e}_{ib} \mathbf{R}^{e}_n \mathbf{R}^{n}_e \boldsymbol{\Omega}^{e}_{ib} \mathbf{R}^{e}_n \mathbf{r}^{n}_{eb} \\ &= \boldsymbol{\gamma}^{n}_{ib} + \mathbf{R}^{n}_e \boldsymbol{\Omega}^{e}_{ib} \boldsymbol{\Omega}^{e}_{ib} \mathbf{R}^{e}_n \mathbf{r}^{n}_{eb} \\ &= \boldsymbol{\gamma}^{n}_{ib} + \boldsymbol{\omega}^2_{ie} \mathbf{R}^{n}_{e} \left[ \begin{array}{ccc} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{array} \right] \mathbf{R}^{e}_n \mathbf{r}^{n}_{eb} \\ &= \boldsymbol{\gamma}^{n}_{ib} + \boldsymbol{\omega}^2_{ie} \left[ \begin{array}{ccc} \text{sin}^2 L_b & 0 & \text{cos} L_b \text{sin} L_b \\ 0 & 1 & 0 \\ \text{cos}L_b \text{sin}L_b & 0 & \text{cos}^2 L_b \end{array} \right] \mathbf{r}^n_{eb} \end{align*}$ |

$J_2$ is the Earth's second harmonic gravitational constant and is equal to $1.082627 \times 10^{-3}$ and 
$\mu$ is the Earth's gravitational constant and its WGS 84 value is $3.986004418 \times 10^{14} \ m^3 s^{-2}$.

## Accelerometer

Accelerometers measure specific force which is the non-gravity acceleration. This is equivalent to the total acceleration with respect to an inertial frame ($\mathbf{a}^b_{ib}$) minus the net acceleration due to gravity defined previously along its input axis. Depending on how the sensor frame is defined, accelerometer triad should measure about $+1\mathbf{g}$ at rest if **the input axis is up**, and about $-1\mathbf{g}$ if **the input axis is down** (if the input axis is up, the total acceleration along the input axis is zero and the gravitational component along the input axis is $-1\mathbf{g}$).

If we let the sensor frame align with the body frame, the accelerometer measurement is:

$$
\begin{align}
\tilde{\mathbf{f}}^{b}_{ib} &= \mathbf{a}^b_{ib} - \mathbf{g}_b.
\end{align}
$$

## Gyroscope

Gyro triad measures the angular rate of the IMU body with respect to the inertial frame in the body axes, i.e., $\tilde{\boldsymbol{\omega}}^b_{ib}$.

## Integrated IMU Measurements

Some IMUs integrate the specific force and angular rate over the sampling interval, $\tau_i$ producing the so-called "delta-$v$"s and "delta-$\theta$"s:

$$
\begin{align}
\tilde{\boldsymbol{v}}^b_{ib} &= \int^t_{t - \tau_i} \tilde{\mathbf{f}}^b_{ib}(t')dt' \\
\tilde{\boldsymbol{\alpha}}^b_{ib} &= \int^t_{t - \tau_i} \tilde{\boldsymbol{\omega}}^b_{ib}(t')dt'.
\end{align}
$$
