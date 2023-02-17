## Rotation of Earth

The Earth-rotation vector resolved in an ECI or ECEF frame is:

$$
\boldsymbol{\omega}^i_{ie} = \boldsymbol{\omega}^e_{ie} = 
\left[
\begin{array}{c}
0 \\ 
0 \\
\omega_{ie}
\end{array}
\right].
$$

Resolving the Earth-rotation vector into local navigation frame axes yields to:

$$
\boldsymbol{\omega}^{n}_{ie} = 
\left[
\begin{array}{c}
\omega_{ie} \text{cos}L_b \\ 
0 \\
-\omega_{ie} \text{sin}L_b
\end{array}
\right].
$$

For navigation, a constant rotation rate is assumed and the WGS 84 value of the Earth's angular rate is 
$\omega_{ie} = 7.292115 \times 10^{-5}$ rad/s, which is about 15 degrees per hour.