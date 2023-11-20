# Levernberg-Marquatdt Method

## Definition

The approximate second-order Taylor series used in the Gauss-Newton method can only have a good approximation effect near the expansion point. Naturally, it makes sense to have a range added to $\Delta \mathbf{x}$, called the **trust-region**. This range defines under what circumstances the second-order approximation is valid. This type of method is called the **trust-region method**.

To determine the trust-region, we can compute the difference between our approximate model and the real object function such that if the difference is small, the approximation is good and we may expand the trust-region; conversely, if the difference is large, the range of approximation will be reduced. Define an indicator $\rho$ to describe the degree of approximation:

$$
\rho = \frac{f(\mathbf{x} + \Delta \mathbf{x}) - f(\mathbf{x})}{\mathbf{J}^T(\mathbf{x}) \Delta \mathbf{x}}.
$$

The numerator of $\rho$ is the decreasing value of the real object function, and the denominator is the decreasing value of the approximate model. If $\rho$ is close to 1, the approximation is valid. A small $\rho$ indicates that the actual reduced value is far less than the approximate reduced value. The approximation is poor and the trust-region should be reduced in this case. Conversely, if $\rho$ is relatively large, the actual decline is greater than expected, and the approximate range can be enlargened. This is an improved version of the Gauss-Newton method.

!!! cnote "Improved Gauss-Newton Method"

    1. Set an initial value $\mathbf{x}_0$ and initial trust-region radius $\mu$.
    2. For $k$-th iteration, solve a linear problem based on Gauss-Newton method with a trust-region constraint:
    
    $$
    \begin{align}
    \min_{\Delta \mathbf{x}_k} \frac{1}{2} &||f(\mathbf{x}_k) + \mathbf{J}^T(\mathbf{x}_k) \Delta \mathbf{x}_k||^2 \\
    \quad& \text{s.t.} ||\mathbf{D} \Delta \mathbf{x}_k||^2 \leq \mu,
    \end{align}
    $$

    where $\mu$ is the radius and $\mathbf{D}$ is a coefficient matrix.
    3. Compute $\rho$.
    4. If $\rho > \frac{3}{4}$, set $\mu = 2 \mu$. Otherwise, if $\rho < \frac{1}{4}$, set $\mu = 0.5 \mu$.
    5. If $\rho$ is larger than a given threshold, set $\mathbf{x}_{k + 1} = \mathbf{x}_k + \Delta \mathbf{x}_k$.
    6. Repeat from step 2 if not converged, else end.

