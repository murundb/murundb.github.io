## Autocorrelation

Autocorrelation measures the level of correlation of the time series with a time-shifted version of itself. For example, autocorrelation at lag 2 would be a correlation between $X_1, X_2, X_3, \ldots, X_{n - 3}, X_{n - 2}$ and $X_3, X_4, \ldots, X_{n - 1}, X_n$. When the shift lag is 0, then the autocorrelation is just a correlation.

Let $X_1, X_2, \ldots, X_n$ be a sample where the order of observations is important. The indices $1, 2, \ldots, n$ may correspond to measurements taken at time points $t, t + \Delta t, t + 2 \delta t, \ldots, t + (n - 1) \Delta t$, for some start time $t$ and time increment $\Delta t$. The autocovariance at lag $0 \leq k \leq n - 1$ is defined as:

$$
\hat{\gamma}(k) = \frac{1}{n} \sum^{n - k}_{i = 1} 
\left(X_{i + k} - \bar{X} \right) \left( X_i - \bar{X} \right).
$$

Note that the sum is normalized by a factor $\frac{1}{n}$. The autocorrelation is defined as normalized autocovariance:

$$
\hat{\rho}(k) = \frac{\hat{\gamma}(k)}{\hat{\gamma}(0)}.
$$