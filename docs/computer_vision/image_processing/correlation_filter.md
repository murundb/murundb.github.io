# Correlation Filter

## Uniform Weights

If we let the average window size to be $(2k + 1) \times (2k + 1)$:

$$
G(i, j) = \underbrace{\frac{1}{(2k + 1)^2}}_{\text{A}} \underbrace{\sum^k_{u = -k} \sum^k_{v = -k} F(i + u, j + v)}_{B},
$$

where:

$$
\begin{align}
A&: \ \text{Uniform weight for each pixel} \\
B&: \ \text{Loop over all pixels in neighborhood around image pixel } F(i, j).
\end{align}
$$
