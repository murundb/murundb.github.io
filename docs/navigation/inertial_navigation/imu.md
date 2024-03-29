## Overview

Typical MEMS IMU schematic is shown in Figure 1.

<figure markdown>
  ![Body Frame](/assets/images/navigation/light/imu_scheme.png#only-light){ width="500" }
  ![Body Frame](/assets/images/navigation/dark/imu_scheme.png#only-dark){ width="500" }
  <figcaption>Fig 1 IMU schematic (Groves, 148)</figcaption>
</figure>

Accelerometer triad contained in an IMU measures the specific force of the IMU body with respect to inertial space in body axes, i.e., $\mathbf{f}^b_{ib}$. Gyro triad contained IMU measures the angular rate
of the IMU body with respect to inertial space in the body axes, i.e., $\boldsymbol{\omega}^b_{ib}$. Many IMUs integrate the specific force and angular rate over the sampling interval, $\tau_i$, producing:

$$
\begin{align}
\mathbf{v}^b_{ib} &= \int^t_{t - \tau_i} \mathbf{f}^b_{ib}(t')dt' \\
\boldsymbol{\alpha}^b_{ib} &= \int^t_{t - \tau_i} \boldsymbol{\omega}^b_{ib}(t')dt'.
\end{align}
$$

These are referred as "delta-v"s and "delta-$\theta$"s, which are specific force and attitude increments. The IMUs outputs specific forces and angular rates, or their integrals. Output rates typically range from 100 to 1000Hz.

## Error Model

Accelerometer and gyro outputs can be modelled as:

$$
\begin{align}
\tilde{\mathbf{f}}^b_{ib} &= \mathbf{b}_a + \left( \mathbf{I}_3 + \mathbf{M}_a \right) \mathbf{f}^b_{ib} + \mathbf{w}_a \\
\tilde{\boldsymbol{\omega}}^b_{ib} &= \mathbf{b}_g + \left( \mathbf{I}_3 + \mathbf{M}_g \right) \boldsymbol{\omega}^b_{ib} + \mathbf{w}_g \\
\end{align},
$$

where $\mathbf{b_{a|g}}$, $\mathbf{M}_{a|g}$, and $\mathbf{w}_{a|g}$ are accelorometer and gyro biases, scale factor and cross-coupling errors matrices, random noises respectively. $\mathbf{f}^b_{ib}$ and 
$\boldsymbol{\omega}^b_{ib}$ are the true specific force and angular velocity values. $\tilde{\mathbf{f}}^b_{ib}$ and $\tilde{\boldsymbol{\omega}}^b_{ib}$ are the measurements we receive from the sensors.

## Bias

In most cases, bias is the dominant term in the overall error of an inertial instrument. Bias consists of static component, $\mathbf{b}_{as}$ and $\mathbf{b}_{gs}$, and dynamic component, $\mathbf{b}_{ad}$ and $\mathbf{b}_{gd}$, where:

$$
\begin{align}
\mathbf{b}_a &= \mathbf{b}_{as} + \mathbf{b}_{ad} \\
\mathbf{b}_g &= \mathbf{b}_{gs} + \mathbf{b}_{gd} \\
\end{align}
$$

The static component is called fixed-bias, turn-on bias, or bias repeatability. It is constant within the run (IMU operating period), but varies from run to run. 
It comprises of run-to-run variation of each instrument bias plus the residual fixed bias remaining after the sensor calibration. The static component can be computed by averating the IMU output over long
period of time while the IMU is static. Once this is know, the static component can be subtracted from the output.

The dynamic component is called in-run bias variation or bias instability. It is time-varying (order of a minute) and also incorporates the residual
temperature-dependent bias remaining after sensor calibration. The dynamic bias is usually about 10% of the static bias.

Units of milli-g (mg) or micro-g ($\mu$g), where 1g = $9.80665 \ \text{ms}^{-2}$, are used for accelerometer biases. For gyro biases, degree per hour ($^o\text{hr}^{-1}$) are used where 
$1 \ ^o \text{hr}^{-1} = 4.848 \times 10^{-6} \ \text{rad/s}$.

## Scale Factor and Cross-Coupling Errors

The scale factor error is the departure of the input-output gradient of the instrument from unity following unit conversion by the IMU.
The accelerometer output error due to the scale factor error is proportional to the true specific force
along the sensitive axis, while the gyro output error due to the scale factor error is proportional to the true angular rate
about the sensitive axis. The scale factor errors for accelerometer and gyro are denoted as
$\mathbf{s}_a = (s_{a,x}, s_{a,y}, s_{a,z})$ and $\mathbf{s}_g = (s_{g,x}, s_{g,y}, s_{g,z})$ respectively.

Cross-coupling errors or misalignment errors arise from the misalignment of the sensitive axes of the inertial sensors with respect
to the orthogonal axes of the body frame due to manufacturing limitations. These make each accelerometer sensitive
to the specific force along the axes orthogonal to its sensitive axes and end each gyro sensitive to the angular rate about
the axes orthogonal to its sensitive axis. $m_{a, \alpha \beta}$ denotes the cross-copuling coefficient
of $\beta$-axis specific force sensed by the $\alpha$-axis accelerometer, while $m_{g, \alpha \beta}$ denotes
the coefficient of $\beta$-axis angular rate sensed by the $\alpha$-axis gyro. 

Scale factor and cross-coupling errors can be expressed as:

$$
\begin{align}
\mathbf{M}_a &=
\left[
\begin{array}{ccc}
s_{a, x} & m_{a, xy} & m_{a, xz} \\
m_{a, yx} & s_{a, y} & m_{a, yz} \\
m_{a, zx} & m_{a, zy} & s_{a, z}
\end{array}
\right] \\ \\
\mathbf{M}_g &=
\left[
\begin{array}{ccc}
s_{g, x} & m_{g, xy} & m_{g, xz} \\
m_{g, yx} & s_{g, y} & m_{g, yz} \\
m_{g, zx} & m_{g, zy} & s_{g, z}
\end{array}
\right]. \\
\end{align}
$$

Both are unitless and typically expressed in parts per million (ppm) or as a percentage.

## Random Noise

All IMUs exhibit random noise from number of sources. Electrical noise limits the resolution of inertial sensors, particularly MEMS sensors, where 
the signal is very weak. Another source is thermo-mechanical fluctuations within the sensors. The random noise on each IMU sample is
denoted by $\mathbf{w}_a = (w_{a, x}, w_{a, y}, w_{a, z})$ and $\mathbf{w}_g = (w_{g, x}, w_{g, y}, w_{g, z})$.

The spectrum of accelerometer and gyro noise for frequencies below 1Hz is approximately white, so the 
standard deviation of the average specific force and angular rate noise varies in inverse proportion to the 
square root of the averating time. Inertial sensor noise is thus usually quoted in termos of the root PSD. 
The units are $\mu \text{g}/ \sqrt{\text{Hz}}$ for accelerometer  random noise, where 
$1\mu \text{g} / \sqrt{\text{Hz}} = 9.80665 \times 10^{-6} \text{ms}^{-1.5}$, 
and $^o / \sqrt{\text{hr}}$ or $^o / \sqrt{\text{Hz}}$ for gyro random noise, where 
$1 ^o / \sqrt{\text{hr}} = 2.909 \times 10^{-4}\text{rads}^{-0.5}$ and 
$1^o / \sqrt{\text{Hz}} = 4.848 \times 10^{-6} \text{rads}^{-0.5}$.

The accelerometer and gyro random noise are sometimes desibred as random walks. 
Random noise on the specific force measurements is integrated to produce a random-walk error on the 
intertial velocity solution. Similarly, random noise on the angular rate measurements is integrated to 
produce an attitude random-walk error. The standard deviation of a random-walk process is proportional to the square root
of the integration time.

