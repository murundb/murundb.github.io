# Pose and Attitude

**Attitude** describes the orientation of the axes of one coordinate frame with respect to those of another. Let $F_\alpha$ be a frame attached to an object of interest and let $F_\beta$ be the reference frame. Then we can represent the attitude of the object by matrix $\mathbf{R}^{\beta}_{\alpha}$ (some also use $\mathbf{R}^{\alpha}_{\beta}$), which
represents the transformation from frame $F_\alpha$ to frame $F_\beta$.

Vehicles typically have six degrees of freedom: three in translation and three in rotation. This six-degree-of-freedom geometric configuration is known
as the **pose** of the vehicle.

Kinematic quantities, such as position, velocity, acceleration, and angular rate, involve three coordinate frames:

1. The frame whose motion is described, known as the **object frame**, $F_{\alpha}$ 
2. The frame with which that motion is respect to, known as the **reference frame**, $F_{\beta}$ 
3. The set of axes in which that motion is represented, known as the **resolving frame**, $F_{\gamma}$. 

Most books use only two frames to describe motion and assume that the resolving frame is same as the reference frame. 
Resolving frame origin does need not be defined; only the orientation of its axes is required. Note also that the choice of 
resolving frame does not affect the magnitude of the vector. 

Given $\mathbf{x}^{\gamma}_{\beta \alpha}$, it descibes a kinematic property of 
frame $F_{\alpha}$ with respect to frame $F_{\beta}$ expressed in the frame $F_\gamma$ axes. For attitude, resolving axes are not required.