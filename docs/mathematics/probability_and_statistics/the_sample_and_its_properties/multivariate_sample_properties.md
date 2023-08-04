## Correlation in Paired Sample

Sample correlation coefficient $r$ measures the strength and direction of the linear relationship between two paired samples $X = (X_1, X_2, \ldots, X_n)$ and $Y = (Y_1, Y_2, \ldots, Y_n)$. Note that the order of components is important and the sample cannot be independently permuted if the correlation is of interest. The correlation coefficient between $X$ and $Y$ can be computed as:

$$
r = \frac{\sum^n_{i = 1} (X_i - \bar{X}) (Y_i - \bar{Y})}{\sqrt{\sum^n_{i = 1} (X_i - \bar{X})^2 \cdot \sum^n_{i = 1}(Y_i - \bar{Y})^2}}.
$$

The sample covariance is defined as:

$$
\begin{align}
s_{XY} &= \frac{1}{n - 1} \sum^n_{i = 1} (X_i - \bar{X}) (Y_i - \bar{Y}) \\ 
&= \frac{1}{n - 1} \left( \sum^n_{i = 1} X_i Y_i - n \bar{X} \bar{Y} \right).
\end{align}
$$

The correlation coefficient can be expressed as:

$$
r = \frac{s_{XY}}{s_X s_Y},
$$

where $s_X$ and $s_Y$ are sample standard deviations of samples $X$ and $Y$.

The correlation ranges between -1 and 1, which are two ideal cases of decreasing and increasing linear trends. Zero correlation does not, in general, imply independence but signfies the **lack of any linear relationship between samples**.