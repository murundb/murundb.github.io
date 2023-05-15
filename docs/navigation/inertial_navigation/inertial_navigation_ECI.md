## Overview

ECI-frame navigation equations block diagram is shown in Figure 1. The suffixes (-) and (+) are used to denote a priori (at time $t$) and a posteriori values (at time $t + \tau_i$).

<figure markdown>
  ![ECI NAV](/assets/images/navigation/light/eci_navigation_block_diagram.png#only-light){ width="500" }
  ![ECI NAV](/assets/images/navigation/dark/eci_navigation_block_diagram.png#only-dark){ width="500" }
  <figcaption>Figure 1 ECI-frame navigation (Groves, p169)</figcaption>
</figure>


## Attitude Update

To track the attitude change, we must track the rotation matrix through time. Consider an attitude change over time interval $t$ to $t + \tau_i$. The time derivative of the rotation matrix is:

$$
\dot{\mathbf{R}}^i_b(t) = \mathbf{R}^i_b(t) \boldsymbol{\Omega}^b_{ib}. \label{4.2.1}
$$

Since this is a first-order matrix ordinary differential equation, we know the solution over the interval $t$ to $t + \tau_i$ is:

$$
\mathbf{R}^i_b(t + \tau_i) = \mathbf{R}^i_b(t) \left[ \lim_{n \rightarrow \infty}\prod^n_{i=1} \exp \left( \boldsymbol{\Omega}^b_{ib} \left( t + \frac{n - i}{n} \tau_i \right) \frac{\tau_i}{n} \right)  \right]. \label{4.2.2}
$$

If the angular rate is assumed to be constant over the attitude integration interval, then:

$$
\begin{align}
\mathbf{R}^i_b(t + \tau_i) &\approx \mathbf{R}^i_b (t) \exp \left(\boldsymbol{\Omega}^b_{ib} \tau_i \right) \\
&= \mathbf{R}^i_b (t) \exp \left(\left[ \boldsymbol{\omega}^b_{ib} \right]_\times \tau_i \right) \\
&= \mathbf{R}^i_b (t) \exp \left( \left[ \boldsymbol{\alpha}^b_{ib} \right]_\times \right). \label{4.2.3}
\end{align}
$$

This assumption is often made where the attiude integration is performed at the IMU output rate. The matrix exponential can be expressed as a power series:

$$
\mathbf{R}^i_b (t + \tau_i) = \mathbf{R}^i_b(t) \sum_{n = 0} \frac{1}{n!} \left[ \boldsymbol{\alpha}^b_{ib} \right]^n_\times. \label{4.2.4}
$$

Using small angle approximation, we can truncate the power-series expansion to the first order:

$$
\mathbf{R}^i_b(+) \approx \mathbf{R}^i_b(-) \left( \mathbf{I}_3 + \left[ \boldsymbol{\alpha}^b_{ib} \right]_\times \right). \label{4.2.5}
$$

When the angular rate is assumed to be constant over the attitude integration interval, $\boldsymbol{\alpha}^b_{ib} \approx \boldsymbol{\omega}^b_{ib} \tau_i$. Then:

$$
\mathbf{R}^i_b(+) \approx \mathbf{R}^i_b (-) \left( \mathbf{I}_3 + \boldsymbol{\Omega}^b_{ib} \tau_i \right). \label{4.2.6}
$$

This truncation of the power-series introduces errors in the attitude integration. Precision may be improved by including higher-order terms in the power series, 
breaking down the attitude update into smaller steps, or performing the exact attitude update. 

## Precision Attitude Update

It is convenient to define the attitude update matrix as the transformation matrix
from the body frame at the end of the attitude update step of the navigation equations
to that at the beginning, $\mathbf{R}^{b-}_{b+}$:

$$
\begin{align}
\mathbf{R}^i_b(+) &= \mathbf{R}^i_b(-) \mathbf{R}^{b-}_{b+} \\
\mathbf{R}^{b-}_{b+} &= \mathbf{R}^b_i(-)\mathbf{R}^i_b(+). \label{4.2.7}
\end{align}
$$

Then from $\ref{4.2.4}$, the attitude update matrix will be:

$$
\mathbf{R}^{b-}_{b+} = \mathbf{R}^{b(t)}_{b(t + \tau_i)}
= \exp\left[ \boldsymbol{\alpha} \right]_\times = 
\sum^{\infty}_{k = 0} \frac{\left[ \boldsymbol{\alpha}^b_{ib} \right]^k_\times}{k!}, \label{4.2.8}
$$

where a constant angular rate is assumed. The third and fourth powers of a skew-symmetric 
matrix have the following properties:

$$
\begin{align}
\left[ \mathbf{x} \right]^3_\times &= -|\mathbf{x}|^2 \left[ \mathbf{x} \right]_\times \\
\left[ \mathbf{x} \right]^4_\times &= -|\mathbf{x}|^2 \left[ \mathbf{x} \right]^2_\times. \label{4.2.9}
\end{align}
$$

Using this, the attitude update matrix becomes:

$$
\begin{align}
\mathbf{R}^{b-}_{b+} &= 
\mathbf{I}_3 + \left( \sum^{\infty}_{k = 0} (-1)^k \frac{|\boldsymbol{\alpha}^b_{ib}|^{2k}}{(2k + 1)!} \right)
\left[ \boldsymbol{\alpha}^b_{ib} \right]_\times +
\left( \sum^{\infty}_{k = 0} (-1)^k \frac{|\boldsymbol{\alpha}^b_{ib}|^{2k}}{(2k + 2)!} \right)
\left[ \boldsymbol{\alpha}^b_{ib} \right]^2_\times \\
&= \mathbf{I}_3 + \frac{\text{sin}|\boldsymbol{\alpha}^b_{ib}|}{|\boldsymbol{\alpha}^b_{ib}|} 
\left[ \boldsymbol{\alpha}^b_{ib} \right]_\times
+ \frac{1 - \text{cos}|\boldsymbol{\alpha}^b_{ib}|}{|\boldsymbol{\alpha}^b_{ib}|^2} \left[ \boldsymbol{\alpha}^b_{ib} \right]^2_\times,  \label{4.2.10}
\end{align}
$$

which is the Rodrigues's formula derived in Kinematics. To avoid division by zero, ensure to replace with the approximate version when $|\boldsymbol{\alpha}^b_{ib}|$ is very small.
The attitude increment vector can be computed in terms of the attitude update matrix:

$$
\begin{align}
\boldsymbol{\alpha}^b_{ib} &= \frac{\mu_{b+b-}}{2 \text{sin}\mu_{b+b-}}
\left[ 
\begin{array}{cc}
\mathbf{R}^{b-}_{b+,3,2} - \mathbf{R}^{b-}_{b+,2,3} \\
\mathbf{R}^{b-}_{b+,1,3} - \mathbf{R}^{b-}_{b+,3,1} \\
\mathbf{R}^{b-}_{b+,2,1} - \mathbf{R}^{b-}_{b+,1,2}
\end{array}
\right] \\ \\
\mu_{b+b-} &= \text{arccos} 
\left(
\frac{\text{tr}\left(\mathbf{R}^{b-}_{b+} - 1 \right)}{2}
\right).  \label{4.2.11}
\end{align}
$$

## Specific-Force Frame Transformation
The IMU measures specific force along the body-frame resolving axe. Applying the transform matrix yields:

$$
\mathbf{f}^i_{ib}(t) = \mathbf{R}^i_b(t) \mathbf{f}^b_{ib}(t). \label{4.2.12}
$$

Since the specific-force measurement is an average over time $t$ to $t + \tau_i$, the transformation matrix should be similarly averaged. Assuming a constant angular rate:

$$
\mathbf{f}^i_{ib} \approx \frac{1}{2} \left( \mathbf{R}^i_b(-) + \mathbf{R}^i_b(+) \right) \mathbf{f}^b_{ib}. \label{4.2.13}
$$

However, the mean of two transformation matrices does not precisely produce the mean of the two attitudes. The less the attitude varies over the time interval,
the smaller the errors introduced by this approximation.

## Precision Specific-Force Frame Transformation

Let the average coordinate transfromation matrix over the time interval be $\bar{\mathbf{R}}^i_b$ such that:

$$
\mathbf{f}^i_{ib} = \bar{\mathbf{R}}^i_b \mathbf{f}^b_{ib}, \label{4.2.14}
$$

where:

$$
\begin{align}
\bar{\mathbf{R}}^i_b &= \frac{1}{\tau_i} \int^{t + \tau_i}_t \mathbf{R}^i_b(t')dt' \\
&= \frac{1}{\tau_i} \mathbf{R}^i_b(-) \int^{t + \tau_i}_0 \sum^{\infty}_{k = 0} \frac{ \left\{ (t' / \tau_i) \left[ \boldsymbol{\alpha}^b_{ib} \right]_\times \right\}^k }{k!}dt' \\
&= \mathbf{R}^i_b(-) \sum^{\infty}_{k = 0} \frac{\left[ \boldsymbol{\alpha}^b_{ib} \right]^k_\times}{(k + 1)!}. \label{4.2.15}
\end{align}
$$

Applying eq ($\ref{4.2.10}$) gives:

$$
\begin{align}
\bar{\mathbf{R}}^i_b &= \mathbf{R}^i_b(-) \mathbf{R}^{b-}_{\bar{b}} \\
\mathbf{R}^{b-}_{\bar{b}} &= \mathbf{I}_3 + 
\frac{1 - \text{cos}|\boldsymbol{\alpha^b_{ib}}|}{|\boldsymbol{\alpha^b_{ib}}|^2} \left[ \boldsymbol{\alpha}^b_{ib} \right]_\times
+ 
\frac{1}{|\boldsymbol{\alpha^b_{ib}}|^2}
\left(
1 - \frac{\text{sin}|\boldsymbol{\alpha^b_{ib}}|}{|\boldsymbol{\alpha^b_{ib}}|}
\right) \left[ \boldsymbol{\alpha}^b_{ib} \right]^2_\times. \label{4.2.16}
\end{align}
$$

To avoid division by zero, ensure to replace with the approximate version when $|\boldsymbol{\alpha}^b_{ib}|$ is very small.

## Velocity Update

From section on gravity models, inertially referenced acceleration is obtained by adding the garvitational acceleration to the specific force:

$$
\mathbf{a}^i_{ib} = \mathbf{f}^i_{ib} + \boldsymbol{\gamma}^i_{ib}(\mathbf{r}^i_{ib}). \label{4.2.17}
$$

Strictly, the position should be averaged over the interval $t$ to $t + \tau_i$, but this would require recursive navigation equations, and the gravitaional-field
varies slowly with position. Hence, it is generally sufficient to use $\mathbf{r}^i_{ib}(-)$.

When the reference frame and resolving axes are the same, the time derivative of velocity is simply acceleration:

$$
\dot{\mathbf{v}}^i_{ib} = \dot{\mathbf{a}}^i_{ib}. \label{4.2.18}
$$

Integrating this gives:

$$
\begin{align}
\mathbf{v}^i_{ib}(+) = \mathbf{v}^i_{ib}(-) + \mathbf{a}^i_{ib} \tau_i = \mathbf{v}^i_{ib}(-) + \mathbf{f}^i_{ib} \tau_i + \boldsymbol{\gamma}^i_{ib} \tau_i = 
\mathbf{v}^i_{ib}(-) + \mathbf{a}^i_{ib} \tau_i = \mathbf{v}^i_{ib}(-) + \boldsymbol{v}^i_{ib} + \boldsymbol{\gamma}^i_{ib} \tau_i.  \label{4.2.19}
\end{align}
$$

## Position Update

In the inertial-frame implementation of the navigation equations, the time derivative of the Cartesian position is simply velocity as the reference frame and resolving
axes are the same:

$$
\dot{\mathbf{r}}^i_{ib} = \mathbf{v}^i_{ib}. \label{4.2.20}
$$

Integrating this gives:

$$
\begin{align}
\mathbf{r}^i_{ib}(+) &= \mathbf{r}^i_{ib}(-) + \left( \mathbf{v}^i_{ib}(-) + \mathbf{v}^i_{ib}(+) \right) \frac{\tau_i}{2} \\
&= \mathbf{r}^i_{ib}(-) + \mathbf{v}^i_{ib}(-) \tau_i + \mathbf{a}^i_{ib} \frac{\tau^2_i}{2} \\
&= \mathbf{r}^i_{ib}(-) + \mathbf{v}^i_{ib}(+) \tau_i - \mathbf{a}^i_{ib} \frac{\tau^2_i}{2} \label{4.2.21}
\end{align}
$$

## Precision Velocity and Position Updates

The velocity and position updates presented in eqs ($\ref{4.2.19}$) and ($\ref{4.2.21}$) are exact when the navigation equations are iterated at the IMU output rate and constant acceleration is assumed excluding
the variation in gravitation over the update interval (which is negligible).