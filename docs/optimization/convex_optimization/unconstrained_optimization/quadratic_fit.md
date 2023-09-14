Quadratic fit is a derivative-free method designed for univariate functions.

> **Algorithm:** Quadratic Fit 
> 
> $\quad$ 0. Start with an initial inverval $\left[ x_l, x_u \right]$ and a point $x_m$ in the interval. Let $\epsilon$ be a termination tolerance.   
> $\quad$ 1. If $(x_u - x_l) \leq \epsilon$, stop and return $x_m$ as the minima.   
> $\quad$ 2. Compute $x_q$.   
> $\quad\quad$ If $x_q \approx x_m$, go to Step 3.   
> $\quad\quad$ If $x_q < x_m$, go to Step 4.   
> $\quad\quad$ If $x_q > x_m$, go to Step 5.   
> $\quad$ 3. If $(x_m - x_l) > (x_u - x_m)$, then $x_q \leftarrow x_m - 0.5 \epsilon$ and go to Step 4; else $x_q \leftarrow x_m + 0.5 \epsilon$ and go to Step 5.   
> $\quad$ 4. If $f(x_m) < f(x_q)$, then $x_l \leftarrow x_q$; otherwise $x_u \leftarrow x_m$ and $x_m \leftarrow x_q$. Go to Step 1.   
> $\quad$ 5. If $f(x_m) < f(x_q)$, then $x_u \leftarrow x_q$; otherwise $x_l \leftarrow x_m$ and $x_m \leftarrow x_q$. Go to Step 1.

$x_q$ is computed as:

$$
x_q = \frac{1}{2} \frac{f_l \left[x^2_m - x^2_u \right] + f_m \left[x^2_u - x^2_l \right] + f_u \left[x^2_l - x^2_m \right]}{f_l \left[x_m - x_u \right] + f_m \left[ x_u - x_l \right] + f_u \left[x_l - x_m \right]},
$$

where $f_i = f(x_i)$, $i \in \left\{ l, m, u \right\}$.

