## Notation

**Scalars** are represented as italic, e.g., $b$.

**Vectors** are represented as bold lower case, e.g., $\mathbf{x}$. The scalar components of a vector are denoted by the 
corresponding italic symbol with a single numerical index
, i.e., given $\mathbf{x} \in \mathbb{R}^{n}$, the components are $\mathbf{x} = \left[\begin{array}{cccc}x_1 & x_2& \cdots & x_n \end{array}
\right]^T$.

**Matrices** are represented as bold upper case, e.g., transformation matrix using homogenous coordinates $\mathbf{T}$. A matrix denoted as $R^{\beta}_{\alpha}$ denotes a rotation matrix from frame $F_\alpha$ to frame $F_\beta$. When a matrix is used to represent an attitude, it is more common to use the upper index to represent the reference frame and the lower
index to represent the object frame. 

**Frames** are represented as letter $F$ with subscript as frame name. All coordinate frames will be right-handed.

## Nomenclature

Kinematic quantities, such as position, velocity, acceleration, and angular rate, involve three coordinate frames:

1. The frame whose motion is described, known as the **object frame**, $F_{\alpha}$ 
2. The frame with which that motion is respect to, known as the **reference frame**, $F_{\beta}$ 
3. The set of axes in which that motion is represented, known as the **resolving frame**, $F_{\gamma}$. 

Most books use only two frames to describe motion and assume that the resolving frame is same as the reference frame. 
Resolving frame origin does need not be defined; only the orientation of its axes is required. Note also that the choice of 
resolving frame does not affect the magnitude of a vector. Given $\mathbf{x}^{\gamma}_{\beta \alpha}$, it descibes a kinematic property of 
frame $F_{\alpha}$ with respect to frame $F_{\beta}$ expressed in the frame $F_\gamma$ axes. For attitude, resolving axes are not required.