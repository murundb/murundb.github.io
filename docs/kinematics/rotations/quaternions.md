# Quaternions

## Definition

The set of quaternions, denoted by $\mathbb{H}$, is defined as:

$$
\mathbb{H} = \mathbb{C} + \mathbb{C}j, \quad k \triangleq ij, \quad i^2 = j^2 = k^2 = ijk = -1.
$$


Elements of $\mathbb{H}$ are of the form:

$$
\mathbf{q} = q_w + q_x \mathbf{i} + q_y \mathbf{j} + q_z \mathbf{k} = q_w + \mathbf{q}_v \in \mathbb{H}.
$$

The Hamilton notation (right-handed) and JPL notation (left-handed) are related by:

$$
\mathbf{q}_{\text{left}} = \mathbf{q}^*_{\text{right}}.
$$

|  Quaternion Type  | Hamilton | JPL |
| ----- | --------------------------------------- | |
|  Definition | $\mathbf{q} =  \left[ \begin{array}{cc} q_w & \mathbf{q}_v \end{array} \right]^T$  | $\mathbf{q} =  \left[ \begin{array}{cc} \mathbf{q}_v & q_w \end{array} \right]^T$ |
| Algebra Handedness | Right-handed, i.e., $\mathbf{i} \mathbf{j} = \mathbf{k}$ | Left-handed, i.e., $\mathbf{i} \mathbf{j} = -\mathbf{k}$ |
| Conjugate | $\mathbf{q}^{*} = \left[ \begin{array}{cc} q_w & - \mathbf{q}_v \end{array} \right]^T$ | $\mathbf{q}^{*} = \left[ \begin{array}{cc} -\mathbf{q}_v & q_w \end{array} \right]^T$ |
| Inverse | $\mathbf{q}^{-1} = \mathbf{q}^* / \left\|\mathbf{q}\right\|^2$ |
| Attitude Representation Constraint | $\mathbf{q}^{-1} = \mathbf{q}^*$ with $\left\|\mathbf{q} \right\| = \sqrt{\mathbf{q} \otimes \mathbf{q}^*} = 1$ |
| Multiplication | $\mathbf{q}_1 \otimes \mathbf{q}_2 = \left[ \mathbf{q}_1 \right]_L \mathbf{q}_2 = \left[ \mathbf{q}_2\right]_R \mathbf{q}_1$ |
| Left Product Matrix | $\left[ \mathbf{q} \right]_L = \left[ \begin{array}{cccc} q_w & -q_x & -q_y & -q_z \\ q_x & q_w & - q_z & q_y \\ q_y & q_z & q_w & -q_x \\ q_z & -q_y & q_x & q_w \end{array}\right]$ | $\left[ \mathbf{q} \right]_L = \left[ \begin{array}{cccc} q_w & q_z & -q_y & q_x \\ -q_z & q_w & q_x & q_y \\ q_y & -q_x & q_w & q_z \\ -q_x & -q_y & -q_z & q_w \end{array}\right]$ |
| Right Product Matrix | $\left[\mathbf{q} \right]_R= \left[ \begin{array}{cccc} q_w & -q_x & -q_y & -q_z \\ q_x & q_w & q_z & -q_y \\ q_y & -q_z & q_w & q_x \\ q_z & q_y & -q_x & q_w \end{array}\right]$ | $\left[\mathbf{q} \right]_R= \left[ \begin{array}{cccc} q_w & -q_z & q_y & q_x \\ q_z & q_w & -q_x & q_y \\ -q_y & q_x & q_w & q_z \\ -q_x & -q_y & -q_z & q_w \end{array}\right]$ |
| Rotation Type | Passive | Passive |
| Rotation Vector | $\mathbf{q}^g_l = \cos(\phi / 2) + \mathbf{u} \sin(\phi / 2)$ | $\mathbf{q}^l_g = -\mathbf{u} \sin (\phi / 2) + \cos (\phi / 2)$ |
| Rotation Representation | Local-to-Global, i.e., $\mathbf{q} \triangleq \mathbf{q}^g_l$ | Global-to-Local, i.e., $\mathbf{q} \triangleq \mathbf{q}^l_g$ |
| Default Operation | $\mathbf{x}^g_{a  b} = \mathbf{q} \otimes \mathbf{x}^{l}_{a  b} \otimes \mathbf{q}^*$ | $\mathbf{x}^l_{a  b} = \mathbf{q} \otimes \mathbf{x}^{g}_{a  b} \otimes \mathbf{q}^*$ |
| Corresponding Rotation Matrix | $\mathbf{R}^g_l = \left[ \begin{array}{ccc} q^2_w + q^2_x - q^2_y - q^2_z & 2(q_x q_y - q_w q_z) & 2(q_x q_z + q_w q_y) \\ 2(q_x q_y + q_w q_z) & q^2_w - q^2_x + q^2_y - q^2_z & 2(q_y q_z - q_w q_x) \\ 2(q_x q_z - q_w q_y) & 2(q_y q_z + q_w q_x) & q^2_w - q^2_x - q^2_y + q^2_z  \end{array}\right]$ | $\mathbf{R}^l_g = \left[ \begin{array}{ccc} q^2_x - q^2_y - q^2_z + q^2_w & 2(q_x q_y + q_z q_w) & 2(q_x q_z - q_y q_w) \\ 2(q_x q_y - q_z q_w) & -q^2_x + q^2_y - q^2_z + q^2_w & 2(q_y q_z + q_x q_w) \\ 2(q_x q_z + q_y q_w) & 2(q_y q_z - q_x q_w) & -q^2_x - q^2_y + q^2_z + q^2_w \end{array} \right]$ |

## Cross-Relations to Rotation Matrix

Let $\boldsymbol{\phi} = \phi \mathbf{u}$ be a rotation vector representing a rotation of $\phi$ radions around the axis of $\mathbf{u}$ which is expressed in the local frame.

|   |  Rotation Matrix, $\mathbf{R}^g_l$  | Hamilton, $\mathbf{q}^g_l$ | JPL, $\mathbf{q}^l_g$ |
| - | ----- | --------------------------------------- | - |
| ODE | $\begin{align*}\dot{\mathbf{R}}^g_l &= \mathbf{R}^g_l \left[ \boldsymbol{\omega}^l_{g  l} \right]_\times \\ &= \left[ \boldsymbol{\omega}^g_{g  l}  \right]_\times \mathbf{R}^g_l \end{align*}$ | $\begin{align*} \dot{\mathbf{q}}^g_l &= \frac{1}{2} \mathbf{q}^g_l \otimes \boldsymbol{\omega}^l_{g  l} \\ &= \frac{1}{2} \boldsymbol{\Omega}^l_{g  l} \mathbf{q}^g_l \\ &= \frac{1}{2} \left[ \begin{array}{cccc} 0 & -w_x & -w_y & -w_z \\ w_x & 0 & w_z & -w_y \\ w_y & -w_z & 0 & w_x \\ w_z & w_y & -w_x & 0 \end{array}\right] \mathbf{q}^g_l \end{align*}$ | $\begin{align*} \dot{\mathbf{q}}^l_g &= \frac{1}{2} \boldsymbol{\omega}^l_{g  l} \otimes \mathbf{q}^l_g \\ &= \frac{1}{2} \boldsymbol{\Omega}^l_{g  l} \mathbf{q}^l_g \\ &= \frac{1}{2} \left[ \begin{array}{cccc} 0 & w_z & -w_y & w_x \\ -w_z & 0 & w_x & w_y \\ w_y & - w_x & 0 & w_z \\ -w_x & -w_y & -w_z & 0  \end{array} \right] \mathbf{q}^l_g \end{align*}$ |
| Exponential Map | $\mathbf{R}^g_l = \exp \left( \left[ \phi \mathbf{u} \right]_\times \right)$ | $\mathbf{q}^g_l = \exp \left( \left[ \phi \mathbf{u} / 2 \right]_\times \right)$ | $\mathbf{q}^l_g = \exp \left( \left[ -\phi \mathbf{u} / 2 \right]_\times \right)$ |
| Logarithmic Map | $\log \left( \mathbf{R}^g_l \right) = \left[ \phi \mathbf{u} \right]_\times$ | $\log \left( \mathbf{q}^g_l \right) = \phi \mathbf{u} / 2$ | $\log (\mathbf{q}^l_g) = -\phi \mathbf{u} / 2$ |
| Rotation Operator | $\mathbf{R}^g_l = \mathbf{I} + \sin \phi \left[ \mathbf{u} \right]_\times + (1 - \cos \phi) \left[ \mathbf{u} \right]^2_\times$ | $\mathbf{q}^g_l = \cos \phi / 2 + \mathbf{u} \sin \phi / 2$ | $\mathbf{q}^l_g = -\mathbf{u} \sin \phi / 2 + \cos \phi / 2$ |
| Rotation Action | $\mathbf{x}^g_{a  b} = \mathbf{R}^g_l \mathbf{x}^l_{a  b}$ | $\mathbf{x}^g_{a  b} = \mathbf{q}^g_l \otimes \mathbf{x}^l_{a  b} \otimes \left( \mathbf{q}^g_l \right)^*$ | $\mathbf{x}^l_{a  b} = \mathbf{q}^l_g \otimes \mathbf{x}^g_{a  b} \otimes \left( \mathbf{q}^l_g \right)^*$ |
| Rotation Composition | $\mathbf{R}^a_c = \mathbf{R}^a_b \mathbf{R}^b_c$ | $\mathbf{q}^a_{c} = \mathbf{q}^a_b \otimes \mathbf{q}^b_c$ |
| Interpolation | $\begin{align*} \mathbf{R}(t) &= \mathbf{R}_0 (\mathbf{I} + \sin (t \Delta \phi) \left[ \mathbf{u} \right]_\times + (1 - \cos( t  \Delta \phi)) \left[ \mathbf{u} \right]^2_\times ) \\ &= \mathbf{R}_0 (\mathbf{R}^T_0 \mathbf{R}_1)^t \end{align*}$ | $\begin{align*}\mathbf{q}(t) &= \mathbf{q}_0 \otimes \left[ \begin{array}{c} \cos(t \Delta \phi / 2) \\ \mathbf{u} \sin (t \Delta \phi / 2) \end{array} \right] \\ &= \mathbf{q}_0 \otimes \left( \mathbf{q}^*_0 \otimes \mathbf{q}_1 \right)^t \end{align*}$ |

## References

1. Sola, J., **Quaternion Kinematics for the Error-State Kalman Filter**
2. Trawny, N., et al. **Indirect Kalman Filter for 3D Attitude Estimation**, 2005
