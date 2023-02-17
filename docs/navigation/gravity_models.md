
## Specific Force and Gravity Models

Specific force is defined as the non-gravitational force per unit mass and is measured in meters per seconds squared. Specific force is the quantity measured by
accelerometers and is defined as:

$$
\mathbf{f}^{b}_{ib} = \mathbf{a}^b_{ib} - \boldsymbol{\gamma}^{b}_{ib}, \label{3.7.1}
$$

where $\mathbf{f}$ is the specific force, $\mathbf{a}$ is the acceleration, and $\mathbf{\gamma}$ is the acceleration due to the gravitaitonal force. 

Consider an object
that is stationary with respect to ECEF frame. Then:

$$
\begin{align}
\mathbf{v}^e_{eb} &= \dot{\mathbf{r}}^{e}_{eb} = \dot{\mathbf{r}}^{e}_{ib} = 0 \\ 
\mathbf{a}^e_{eb} &= \ddot{\mathbf{r}}^{e}_{eb} = \ddot{\mathbf{r}}^{e}_{ib} = 0. \label{3.7.2} \\ 
\end{align}
$$

The inertially referenced acceleration resolved about ECEF would be:

$$
\begin{align}
\mathbf{a}^{e}_{ib} &= \ddot{\mathbf{r}}^{e}_{ib} + \boldsymbol{\Omega}^{e}_{ib} \boldsymbol{\Omega}^{e}_{ib} \mathbf{r}^{e}_{ib}
+ 2 \boldsymbol{\Omega}^{e}_{ib} \dot{\mathbf{r}^{e}_{ib}} + \dot{\boldsymbol{\Omega}}^{e}_{ib} \mathbf{r}^{e}_{ib} \\
&= \boldsymbol{\Omega}^{e}_{ib} \boldsymbol{\Omega}^{e}_{ib} \mathbf{r}^{e}_{ib}. \label{3.7.3}
\end{align}
$$

Substituting equation ($\ref{3.7.3}$) into ($\ref{3.7.1}$) and using the identity  $\mathbf{r}^\gamma_{eb} = \mathbf{r}^\gamma_{ib}$ yields to:

$$
\mathbf{f}^{e}_{ib} = \boldsymbol{\Omega}^{e}_{ib} \boldsymbol{\Omega}^{e}_{ib} \mathbf{r}^{e}_{eb} - \boldsymbol{\gamma}^{e}_{ib}. \label{3.7.4}
$$

The specific force sensed when an object is stationary with respect to ECEF frame is the reaction to what is known as the **acceleration due to gravity**:

$$
\begin{align}
\mathbf{g}^e_b &= \left. -f^{e}_{ib} \right|_{\mathbf{v}^e_{eb}=0, \ \mathbf{a}^{e}_{eb} = 0} \\
&= \boldsymbol{\gamma}^{e}_{ib} - \boldsymbol{\Omega}^{e}_{ib} \boldsymbol{\Omega}^{e}_{ib} \mathbf{r}^{e}_{eb} \\
&= \boldsymbol{\gamma}^{e}_{ib} + \omega^2_{ie} 
\left[
\begin{array}{ccc}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0
\end{array}
\right] \mathbf{r}^e_{eb}. \label{3.7.5}
\end{align}
$$

In navigation frame:

$$
\begin{align}
\mathbf{g}^n_b &= \boldsymbol{\gamma}^{n}_{ib} + \boldsymbol{\Omega}^{n}_{ib} \boldsymbol{\Omega}^{n}_{ib} \mathbf{r}^{n}_{eb} \\
&=  \boldsymbol{\gamma}^{n}_{ib} + \mathbf{R}^{n}_e \boldsymbol{\Omega}^{e}_{ib} \mathbf{R}^{e}_n \mathbf{R}^{n}_e \boldsymbol{\Omega}^{e}_{ib} \mathbf{R}^{e}_n \mathbf{r}^{n}_{eb} \\
&= \boldsymbol{\gamma}^{n}_{ib} + \mathbf{R}^{n}_e \boldsymbol{\Omega}^{e}_{ib} \boldsymbol{\Omega}^{e}_{ib} \mathbf{R}^{e}_n \mathbf{r}^{n}_{eb} \\
&= \boldsymbol{\gamma}^{n}_{ib} + \omega^2_{ie}  \mathbf{R}^{n}_e 
\left[
\begin{array}{ccc}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0
\end{array}
\right] 
\mathbf{R}^{e}_n \mathbf{r}^{n}_{eb} \\
&= \boldsymbol{\gamma}^{n}_{ib} + \omega^2_{ie}
\left[
\begin{array}{ccc}
\text{sin}^2 L_b & 0 & \text{cos} L_b \text{sin} L_b \\
0 & 1 & 0 \\
\text{cos}L_b \text{sin}L_b & 0 & \text{cos}^2 L_b
\end{array}
\right] \mathbf{r}^n_{eb}. \label{3.7.6}
\end{align}
$$

The first term is the **gravitational acceleration** or the **acceleration due to gravitational force**. The second term is the 
outward **centrifugal acceleration** due to the Earth's rotation. Figure 3.7.1 illustrates this.

<figure markdown>
  ![Gravity](/assets/images/navigation/light/gravity.png#only-light){ width="400" }
  ![Gravity](/assets/images/navigation/dark/gravity.png#only-dark){ width="400" }
  <figcaption>Fig 3.7.1 Gravity, gravitational acceleration, centrifugal acceleration (source Groves, p71)</figcaption>
</figure>

At earth's surface, the total acceleration due to gravity is about $\mathbf{g} = 9.8$ m/s^2, with centrifugal component contributing up to 0.034 m/s^2. 

When working with 
ECI, only the gravitation acceleration is required and can be directly calculated as:

$$
\begin{align}
\boldsymbol{\gamma}^i_{ib} &= 
-\frac{\mu}{|\mathbf{r}^i_{ib}|^3} 
\left\{
\mathbf{r}^i_{ib} + \frac{3}{2}J_2 \frac{R_0^2}{|\mathbf{r}^i_{ib}|^2} 
\left\{
\begin{array}{c}
\left[
1 - 5(r^i_{ib,z} / |\mathbf{r}^i_{ib}|)^2
\right] r^i_{ib, x} \\
\left[
1 - 5(r^i_{ib,z} / |\mathbf{r}^i_{ib}|)^2
\right] r^i_{ib, y} \\
\left[
3 - 5(r^i_{ib,z} / |\mathbf{r}^i_{ib}|)^2
\right] r^i_{ib, z}
\end{array}
\right\}
\right\}
\\
\boldsymbol{\gamma}^e_{ib} &= 
-\frac{\mu}{|\mathbf{r}^e_{eb}|^3} 
\left\{
\mathbf{r}^e_{eb} + \frac{3}{2}J_2 \frac{R_0^2}{|\mathbf{r}^e_{eb}|^2} 
\left\{
\begin{array}{c}
\left[
1 - 5(r^e_{eb,z} / |\mathbf{r}^e_{eb}|)^2
\right] r^e_{eb, x} \\
\left[
1 - 5(r^e_{eb,z} / |\mathbf{r}^e_{eb}|)^2
\right] r^e_{eb, y} \\
\left[
3 - 5(r^e_{eb,z} / |\mathbf{r}^e_{eb}|)^2
\right] r^e_{eb, z}
\end{array}
\right\}
\right\} \label{3.7.7}
\\
\end{align},
$$

where $J_2$ is the Earth's second harmonic gravitational constant and is equal to $1.082627 \times 10^{-3}$ and 
$\mu$ is the Earth's gravitational constant and its WGS 84 value is $3.986004418 \times 10^{14} \ m^3 s^{-2}$. 