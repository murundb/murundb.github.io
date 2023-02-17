# Cartesian Position

Let $\mathbf{r}^{\gamma}_{\alpha \beta} = 
\left(
\begin{array}{ccc}
x^{\gamma}_{\beta \alpha} & y^{\gamma}_{\beta \alpha} & z^{\gamma}_{\beta \alpha}
\end{array}
\right)$ be the Cartesian position of the origin of frame $F_\alpha$ with respect to the origin of frame $F_\beta$ resolved about the axes of frame $F_\gamma$ ( $x$, $y$, $z$ are the components
of position in the $x$, $y$, $z$ axes of $F_\gamma$). We know:

$$
\begin{align}
\mathbf{r}^{\gamma}_{\beta \alpha} &= -\mathbf{r}^{\gamma}_{\alpha \beta} \\
\mathbf{r}^{\gamma}_{\beta \alpha} &= \mathbf{r}^{\gamma}_{\delta \alpha} - \mathbf{r}^{\gamma}_{\delta \beta} = \mathbf{r}^{\gamma}_{\beta \delta} + \mathbf{r}^{\gamma}_{\delta \alpha}.
\end{align} \label{4.1}
$$

To change the resolving frame, we use the transformation matrix:

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