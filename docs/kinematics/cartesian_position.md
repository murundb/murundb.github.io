# Cartesian Position

## Definition and Properties

<figure markdown>
  ![Cartesian position vector (Groves, p47)](/assets/images/kinematics/light/cartesian_position.png#only-light){ width="400" }
  ![Cartesian position vector (Groves, p47)](/assets/images/kinematics/dark/cartesian_position.png#only-dark){ width="400" }
  <figcaption>Figure 1 Cartesian position vector (Groves, p47)</figcaption>
</figure>

As shown in Figure 1, Cartesian position of an origin of frame $F_\alpha$ with respect to an origin of frame $F_\beta$ resolved about the axes of frame $F_\gamma$ is denoted as:

$$
\mathbf{r}^{\gamma}_{\beta \alpha} = 
\left[
\begin{array}{ccc}
x^{\gamma}_{\beta \alpha} & y^{\gamma}_{\beta \alpha} & z^{\gamma}_{\beta \alpha}
\end{array}
\right]^T.
$$

| Properties  |  |
| ----- | --------------------------------------- |
| Inverse | $\mathbf{r}^{\gamma}_{\beta \alpha} = -\mathbf{r}^{\gamma}_{\alpha \beta}$ |
| Addition | $\mathbf{r}^{\gamma}_{\beta \alpha} = \mathbf{r}^{\gamma}_{\delta \alpha} - \mathbf{r}^{\gamma}_{\delta \beta} = \mathbf{r}^{\gamma}_{\beta \delta} + \mathbf{r}^{\gamma}_{\delta \alpha}$ |
| Resolving Axes Transformation | $\begin{align*}\mathbf{r}^{\gamma}_{\beta \alpha} &= \mathbf{R}^{\gamma}_{\delta} \mathbf{r}^{\delta}_{\beta \alpha} \\ \mathbf{r}^{\beta}_{\beta \alpha} &= \mathbf{R}^{\beta}_{\delta} \left( \mathbf{r}^{\delta}_{\beta \delta} + \mathbf{r}^{\delta}_{\delta \alpha} \right) \\ &= \mathbf{r}^{\beta}_{\beta \delta} + \mathbf{R}^{\beta}_{\delta} \mathbf{r}^{\delta}_{\delta \alpha} \end{align*}$ |
