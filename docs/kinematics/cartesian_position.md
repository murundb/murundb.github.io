# Cartesian Position

## Definition

Cartesian position of an origin of frame $F_\alpha$ with respect to an origin of frame $F_\beta$ resolved about the axes of frame $F_\gamma$ is denoted as:

$$
\mathbf{r}^{\gamma}_{\beta \alpha} = 
\left[
\begin{array}{ccc}
x^{\gamma}_{\beta \alpha} & y^{\gamma}_{\beta \alpha} & z^{\gamma}_{\beta \alpha}
\end{array}
\right]^T,
$$

where $x$, $y$, and $z$ are the components of position in the $x$, $y$, and $z$ aces of $F_\gamma$ frame. Figure 1 shows $\mathbf{r}^{\gamma}_{\beta \alpha}$.

<figure markdown>
  ![Cartesian position vector (Groves, p47)](/assets/images/kinematics/light/cartesian_position.png#only-light){ width="500" }
  ![Cartesian position vector (Groves, p47)](/assets/images/kinematics/dark/cartesian_position.png#only-dark){ width="500" }
  <figcaption>Figure 1 Cartesian position vector (Groves, p47)</figcaption>
</figure>

Note that the magnitude of the Cartesian position, $|\mathbf{r}^{\gamma}_{\beta \alpha}|$, is independent of the resolving axes, so it may be written simply as $r_{\beta \alpha}$. However, the magnitude of its time derivative, $|\dot{\mathbf{r}}^{\gamma}_{\beta \alpha}|$, depends on the rate of rotation of the resolving frame with respect to the reference and object frames.

## Properties

$$
\begin{align}
\mathbf{r}^{\gamma}_{\beta \alpha} &= -\mathbf{r}^{\gamma}_{\alpha \beta} \\
\mathbf{r}^{\gamma}_{\beta \alpha} &= \mathbf{r}^{\gamma}_{\delta \alpha} - \mathbf{r}^{\gamma}_{\delta \beta} = \mathbf{r}^{\gamma}_{\beta \delta} + \mathbf{r}^{\gamma}_{\delta \alpha}.
\end{align} \label{4.1}
$$

To change the resolving frame, we use the rotation matrix:

$$
\mathbf{r}^{\gamma}_{\beta \alpha} = \mathbf{R}^{\gamma}_{\delta} \mathbf{r}^{\delta}_{\beta \alpha}, \label{4.2}
$$

or:

$$
\begin{align}
\mathbf{r}^{\beta}_{\beta \alpha} &= \mathbf{R}^{\beta}_{\delta} \left( \mathbf{r}^{\delta}_{\beta \delta} + \mathbf{r}^{\delta}_{\delta \alpha} \right) \\
&= \mathbf{r}^{\beta}_{\beta \delta} + \mathbf{R}^{\beta}_{\delta} \mathbf{r}^{\delta}_{\delta \alpha}.
\end{align} \label{4.3}
$$