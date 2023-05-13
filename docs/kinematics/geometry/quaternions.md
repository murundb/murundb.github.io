# Quaternions

## Overview

A rotation can be represented by using [quaternion](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation#:~:text=The%20representation%20of%20a%20rotation,the%20axis%20and%20the%20angle.), which is a hyper-complex number that is compact and non-singular with four components:

$$
\mathbf{q} = \left(q_0, q_1, q_2, q_3\right),
$$

or 

$$
\mathbf{q} = q_0 + q_1i + q_2j + q_3k,
$$

where $i, j, k$ are three imaginary parts of the quaternion. Component $q_0$ is a function only of the magnitude of the rotation 
and the other three components are functions of both the magnitude and the axis of rotation. Let:\

$$
\begin{align}
& q_0 = \text{cos}(\mu_{\beta \alpha} / 2) \\
& \mathbf{q}_{1:3} = \hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha} \text{sin} (\mu_{\alpha \beta} / 2) = 
\left[
\begin{array}{c}
\hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha, \ 1} \text{sin}\left( \mu_{\beta \alpha} / 2 \right) \\
\hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha, \ 2} \text{sin}\left( \mu_{\beta \alpha} / 2 \right) \\
\hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha, \ 3} \text{sin}\left( \mu_{\beta \alpha} / 2 \right) \\
\end{array}
\right] = 
\left[
\begin{array}{c}
q_1 \\
q_2 \\
q_3
\end{array}
\right].
\end{align}
$$

The four parameters are called the Euler-parameters. They are not independent (only three 
components of the attitude quaternion are independent) because they satisfy the constraint:

$$
q_0^2 + q^2_{1} + q^2_{2} + q^2_{3} = 1.
$$

Unit-length quaternions is defined as:

$$
\mathbf{q}^{\alpha}_{\beta} = 
\left[
\begin{array}{c}
q_0 \\
\mathbf{q}_{1:3}
\end{array}
\right]
=
\left[
\begin{array}{c}
\text{cos}\left( \mu_{\beta \alpha} / 2 \right) \\
\hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha, \ 1} \text{sin}\left( \mu_{\beta \alpha} / 2 \right) \\
\hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha, \ 2} \text{sin}\left( \mu_{\beta \alpha} / 2 \right) \\
\hat{\mathbf{e}}^{\alpha / \beta}_{\beta \alpha, \ 3} \text{sin}\left( \mu_{\beta \alpha} / 2 \right) \\
\end{array}
\right].
$$

## Quaternion to and from Transformation Matrix

Define:

$$
\mathbf{q}^{+} = 
\left[ 
\begin{array}{cc}
q_0 & -\mathbf{q}_{1:3}^T \\
\mathbf{q}_{1:3} & q_0 \mathbf{I} + \left[ \mathbf{q}_{1:3} \right]_\times
\end{array}
\right], \
\mathbf{q}^{\oplus} = 
\left[ 
\begin{array}{cc}
q_0 & -\mathbf{q}_{1:3}^T \\
\mathbf{q}_{1:3} & q_0 \mathbf{I} - \left[ \mathbf{q}_{1:3} \right]_\times
\end{array}
\right].
$$

Then the quaternion multiplication can be written in the form of a matrix:

$$
\mathbf{q}^{+}_{1} \mathbf{q}_2 = 
\left[ 
\begin{array}{cc}
q_{1,0} & -\mathbf{q}_{1, 1:3}^T \\
\mathbf{q}_{1, 1:3} & q_{1, 0} \mathbf{I} + \left[ \mathbf{q}_{1, 1:3} \right]_\times
\end{array}
\right]
\left[
\begin{array}{c}
q_{2, 0} \\
\mathbf{q}_{2, 1:3}
\end{array}
\right] = 
\left[
\begin{array}{c}
-\mathbf{q}_{1, 1:3}^T \mathbf{q}_{2, 1:3} + q_{1, 0} q_{2, 0} \\
q_{1, 0} \mathbf{q}_{2, 1:3} + q_{2, 0} \mathbf{q}_{1, 1:3} + \left[ \mathbf{q}_{1, 1:3} \right]_\times \mathbf{q}_{2, 1:3}
\end{array}
\right] = \mathbf{q}_1 \mathbf{q}_2.
$$

Similarly,

$$
\mathbf{q}^{\oplus}_2 \mathbf{q_1} = \mathbf{q}_1 \mathbf{q_2}.
$$

Let $\mathbf{p} = \left[
\begin{array}{ccc}
x & y & z
\end{array} \right]^T \in \mathbb{R}^3$  be a point in Euclidean space. Let $\mathbf{p}'$ be the rotated vector after applying rotation specified by
rotation matrix, $\mathbf{R}$, i.e., $\mathbf{p'} = \mathbf{R} \mathbf{p}$. $\mathbf{p}$ can be expressed in quaternion as by evaluating the
conjugation of $\mathbf{p}$ by $\mathbf{q}$:

$$
\mathbf{p} = 
\left[
\begin{array}{cccc}
0 & x & y & z
\end{array}
\right]^T = 
\left[
\begin{array}{cc}
0 & \mathbf{q}_{1:3}
\end{array}
\right]^T,
$$

which makes the $\mathbf{p'}$:

$$
\mathbf{p'} = \mathbf{q} \mathbf{p} \mathbf{q}^{-1} = \mathbf{q}^{+} \mathbf{p}^{+} \mathbf{q}^{-1} = \mathbf{q}^{+} (\mathbf{q}^{-1})^{\oplus}  \mathbf{p},
$$

where:

$$
\mathbf{q}^{+} (\mathbf{q}^{-1})^{\oplus} = 
\left[
\begin{array}{cc}
q_0 & -\mathbf{q}_{1:3}^T \\
\mathbf{q}_{1:3} & q_0 \mathbf{I} + \left[ \mathbf{q}_{1:3} \right]_\times
\end{array}
\right]
\left[
\begin{array}{cc}
q_0 & -\mathbf{q}_{1:3}^T \\
\mathbf{q}_{1:3} & q_0 \mathbf{I} + \left[ \mathbf{q}_{1:3} \right]_\times
\end{array}
\right] = 
\left[
\begin{array}{cc}
1 & \mathbf{0} \\
\mathbf{0}^T & \mathbf{q}_{1:3} \mathbf{q}_{1:3}^T + q_0^2 \mathbf{I} + 2q_0 \left[ \mathbf{q}_{1:3} \right]_\times + \left[ \mathbf{q}_{1:3} \right]^2_\times
\end{array}
\right]
$$

Since we are only interested in the imaginary quaternions, the conversion formula is given as:

$$
\begin{align}
\mathbf{R}^{\alpha}_{\beta} &= \mathbf{q}_{1:3} \mathbf{q}_{1:3}^T + q_0^2 \mathbf{I} + 2q_0 \left[ \mathbf{q}_{1:3} \right]_\times + \left[ \mathbf{q}_{1:3} \right]^2_\times \\ \\
&= 
\left[
\begin{array}{ccc}
1 - 2(q_2^2 + q_3^2) & 2(q_1 q_2 - q_3 q_0) & 2 (q_1 q_3 + q_2 q_0) \\
2 (q_1 q_2 + q_3 q_0) & 1 - 2(q_1^2 + q_3^2) & 2(q_2 q_3 - q_1 q_0) \\
2 (q_1 q_3 - q_2 q_0) & 2(q_2 q_3 + q_1 q_0) & 1 - 2(q_1^2 + q_2^2)
\end{array}
\right]
\end{align}
$$

The reverse conversion is:

$$
\begin{align}
q_0 &= \frac{1}{2} \sqrt{|1 + \mathbf{R}^\alpha_{\beta, 1,1} + \mathbf{R}^\alpha_{\beta, 2,2} + \mathbf{R}^\alpha_{\beta, 3,3}|} \\
q_1 &= \frac{\mathbf{R}^\alpha_{\beta, 2,3} - \mathbf{R}^\alpha_{\beta, 3,2}}{4 q_0} \\
q_2 &= \frac{\mathbf{R}^\alpha_{\beta, 3,1} - \mathbf{R}^\alpha_{\beta, 1,3}}{4 q_0} \\
q_3 &= \frac{\mathbf{R}^\alpha_{\beta, 1,2} - \mathbf{R}^\alpha_{\beta, 2,1}}{4 q_0} \\
\end{align}
$$