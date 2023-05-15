# Cartesian Position

Let $\mathbf{r}^{\gamma}_{\alpha \beta} = 
\left[
\begin{array}{ccc}
x^{\gamma}_{\alpha \beta} & y^{\gamma}_{\alpha \beta} & z^{\gamma}_{\alpha \beta}
\end{array}
\right]^T$ be a Cartesian position of an origin of frame $F_\alpha$ with respect to an origin of frame $F_\beta$ resolved about the axes of frame $F_\gamma$ ( $x$, $y$, $z$ are the components
of position in the $x$, $y$, $z$ axes of $F_\gamma$). We have:

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