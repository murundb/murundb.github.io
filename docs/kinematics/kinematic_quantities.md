# Kinematic Quantities

## Notation

Kinematic quantities, such as position, velocity, acceleration, and angular rate, involve three coordinate frames:

1. **Object Frame** - Frame, $F_{\alpha}$, whose motion is described
2. **Reference Frame** - Frame, $F_{\beta}$, with which the object motion is respect to
3. **Resolving Frame** - Frame, $F_{\gamma}$, the set of axes in which that motion is represented

!!! cnote "Kinematic Quantity"
    Given $\mathbf{x}^{\gamma}_{\beta \alpha}$, it describes the kinematic property of
    frame $F_{\alpha}$ with respect to frame $F_{\beta}$ expressed in the frame $F_\gamma$ axes. 
    
    For attitude representation, resolving axes are not required. Let $F_\alpha$ be a frame attached to an object of interest and let $F_\beta$ be the reference frame. Then the **attitude** of the object can be represented by matrix $\mathbf{R}^{\beta}_{\alpha}$, which is the rotation matrix from $F_\alpha$ to $F_\beta$.

If the resolving axes are not specified, it is implied that the resolving frame is the same as the reference frame. Resolving frame origin does need not be defined; only the orientation of its axes is required. Note that the choice of resolving frame does not affect the magnitude of the vector.


