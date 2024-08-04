# IMU Error Models

## Error Sources

MEMS IMUs measure specific force, $\tilde{\mathbf{f}}^b_{ib}$, and rotation rate of the sensor with respect to an inertial frame, $\tilde{\boldsymbol{\omega}}^b_{i b}$. All types of IMUs exhibit biases, scale factor and cross-coupling errors, and random noise. 

| Error Type | Cause | Model |
| ---------- | ----- | ----- |
| Biases | Most dominant error term and consists of static and dynamic biases. The static bias is due to manufacturing and calibration errors. The dynamic bias is usually due to the temperature and is typically about 10% of the static bias. | $\begin{align*} \mathbf{b}_a &= \mathbf{b}_{as} + \mathbf{b}_{ad} \\ \mathbf{b}_g &= \mathbf{b}_{gs} + \mathbf{b}_{gd}  \end{align*}$ |
| Scale Factor and Cross-coupling Errors | Scale factor error arises due to IO conversion of the instrument. Cross-coupling error arises from the misalignment of the sensitive axes of the sensors with respect to the orthogonal axes of the body frame due to manufacturing errors.  | $\begin{align*} \mathbf{M}_a &= \left[ \begin{array}{ccc} s_{a, x} & m_{a, xy} & m_{a, xz} \\ m_{a, yx} & s_{a, y} & m_{a, yz} \\ m_{a, zx} & m_{a, zy} & s_{a, z} \end{array} \right] \\ \mathbf{M}_g &= \left[ \begin{array}{ccc} s_{g, x} & m_{g, xy} & m_{g, xz} \\ m_{g, yx} & s_{g, y} & m_{g, yz} \\ m_{g, zx} & m_{g, zy} & s_{g, z} \end{array} \right] \end{align*}$ |
| Random Noise | Due to electrical noise, vibration, etc. | Usually modelled as a random walks. 

IMU errors are always expressed in body frame axes so the superscript $b$ is omitted.

## Measurement Model

$$
\begin{align}
\tilde{\mathbf{f}}^b_{ib} &= \mathbf{b}_a + \left( \mathbf{I}_3 + \mathbf{M}_a \right) \mathbf{f}^b_{ib} + \mathbf{w}_a \\
\tilde{\boldsymbol{\omega}}^b_{ib} &= \mathbf{b}_g + \left( \mathbf{I}_3 + \mathbf{M}_g \right) \boldsymbol{\omega}^b_{ib} + \mathbf{w}_g \\
\end{align},
$$

## Evaluating IMU

Allen deviation quantifies the sensor bias and bias instability by analyzing the variance of the sensor errors in a static position.