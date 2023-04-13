Golden section method is a derivative-free method designed for univariate functions. 

> **Algorithm:** Golden Section
>
> Start with an initial inverval $\left[ x_l, x_u \right]$ containing the minima and successively narrow this interval.
> 
> $\quad$ 0. Set $x_1 = x_u - \alpha(x_u - x_l)$ and $x_2 = x_l + \alpha(x_u - x_l)$. Compute $f(x)$ at $x_l, x_1, x_2, x_u$.   
> $\quad$ 1. If $(x_u - x_l) \leq \epsilon$, stop and return $x^* = 0.5 (x_l + x_u)$ as the minima.   
> $\quad$ 2. If $f(x_1) < f(x_2)$, set $x_u \leftarrow x_2$, $x_2 \leftarrow x_1$, and $x_1 \leftarrow x_u - \alpha (x_u - x_l)$. Evaluate $f(x_1)$.   
> $\quad\quad$Else, set $x_l \leftarrow x_1$, $x_1 \leftarrow x_2$, and $x_2 \leftarrow x_l + \alpha(x_u - x_l)$. Evaluate $f(x_2)$. Go to step 1.   
> 
> Use $\alpha = 0.618$, the Golden Ratio.
