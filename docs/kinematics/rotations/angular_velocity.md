# Angular Velocity

## Definition

The angular velocity vector, $\boldsymbol{\omega}^{\gamma}_{\beta \alpha}$, is the rate of rotation of the frame $F_\alpha$ axes with respect
to the frame $F_\beta$ axes, resolved about the frame $F_\gamma$ axes. The rotation is within the plane perpendicular to the angular rate vector, and  the angular rate vector direction follows the right-hand rule.

| Properties of Angular Velocity  |  |
| ----- | --------------------------------------- |
| Reverse Angular Rate | $\boldsymbol{\omega}^{\gamma}_{\beta \alpha} = -\boldsymbol{\omega}^{\gamma}_{\alpha \beta}$ |
| Addition | $\boldsymbol{\omega}^{\gamma}_{\beta \alpha} = \boldsymbol{\omega}^{\gamma}_{\beta \delta} + \boldsymbol{\omega}^{\gamma}_{\delta \alpha}$ |
| Resolving Axes Transform | $\boldsymbol{\omega}^{\gamma}_{\beta \alpha} = \mathbf{R}^{\gamma}_{\delta} \boldsymbol{\omega}^{\delta}_{\beta \alpha}$ |
| Skew Symmetric Form | $\boldsymbol{\Omega}^{\gamma}_{\beta \alpha} = \left[ \boldsymbol{\omega}^{\gamma}_{\beta \alpha} \right]_\times = \left[ \begin{array}{ccc} 0 & -\omega^{\gamma}_{\beta \alpha, 3} & \omega^{\gamma}_{\beta \alpha, 2} \\ \omega^{\gamma}_{\beta \alpha, 3} & 0 & -\omega^{\gamma}_{\beta \alpha, 1} \\ -\omega^{\gamma}_{\beta \alpha, 2} & \omega^{\gamma}_{\beta \alpha, 1} & 0 \\ \end{array} \right]$ |
| Skew Form Axes Transformation | $\boldsymbol{\Omega}^{\gamma}_{\beta \alpha} = \mathbf{R}^{\gamma}_{\delta} \boldsymbol{\Omega}^{\delta}_{\beta \alpha} \mathbf{R}^{\delta}_{\gamma}$ |


## References

1. Groves, P., **Principles of GNSS, Inertial, and Multisensor Integrated Navigation Systems, Second Edition**, pp. 44-45
