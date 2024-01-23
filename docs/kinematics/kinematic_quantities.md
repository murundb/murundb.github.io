# Kinematic Quantities

## Notation

!!! cnote "Kinematic Quantity Notation"
    Given $\mathbf{x}^{\gamma}_{\beta \alpha}$, it descibes a kinematic property of
    frame $F_{\alpha}$ with respect to frame $F_{\beta}$ expressed in the frame $F_\gamma$ axes. For attitude, resolving axes are not required.

Kinematic quantities, such as position, velocity, acceleration, and angular rate, involve three coordinate frames:

1. **Object Frame** - Frame, $F_{\alpha}$, whose motion is described.
2. **Reference Frame** - Frame, $F_{\beta}$, with which the object motion is respect to.
3. **Resolving Frame** - Frame, $F_{\gamma}$, the set of axes in which that motion is represented.

Some authors use two frames to describe kinematic quantities and set the resolving frame to be the same as the refernce frame.

Resolving frame origin does need not be defined; only the orientation of its axes is required. Note that the choice of resolving frame does not affect the magnitude of the vector.

## Pose and Attitude

!!! cnote "Pose and Attitude"

    Let $F_\alpha$ be a frame attached to an object of interest and let $F_\beta$ be the reference frame. Then the **attitude** of the object can be represented by matrix $\mathbf{R}^{\beta}_{\alpha}$, which is the rotation matrix from $F_\alpha$ to $F_\beta$.

    Rigid bodies typically have six degrees of freedom: three in translation and three in rotation. This six-degree-of-freedom geometric configuration is known
    as the **pose** of the vehicle.

