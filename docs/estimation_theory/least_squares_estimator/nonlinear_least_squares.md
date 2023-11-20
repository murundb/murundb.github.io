# Nonlinear Least Squares

## Problem Statement

Consider a problem of estimating a constant but unknown $\mathbf{x} \in \mathbb{R}^n$ given $m$ measurements, $\mathbf{y} \in \mathbb{R}^m$ where $m > n$. Assume that the measurement model is nonlinear scalar functions:

$$
\mathbf{y} = \mathbf{h}(\mathbf{x}) + \boldsymbol{v},
$$

The optimization problem can be formulated as:

$$
\min_{\mathbf{x}} = \frac{1}{2} ||\mathbf{h}(\mathbf{x})||^2_2.
$$

## Solution to Nonlinear Least Squares

Iterative methods are usually used to solve nonlinear least squares.

!!!cnote "Nonlinear Least Squares"
    1. Set an initial value $\mathbf{x}_0$.
    2. For the $k$'th iteration, find an incremental value of $\Delta \mathbf{x}_k$, such that the objective function:

        $$
        ||\mathbf{h}(\mathbf{x}_k + \Delta \mathbf{x}_k)||^2_2,
        $$

        reaches a smaller value.
    3. If $\Delta \mathbf{x}_k$ is small enough, stop the algorithm.
    4. Else, set $\mathbf{x}_{k + 1} = \mathbf{x}_k + \Delta \mathbf{x}_k$ and repeat from step 2.

The main problem is on how to find $\Delta \mathbf{x}_k$.

### First and Second-Order Methods

Consider the $k$-th iteration. Suppose we are at $\mathbf{x}_k$ and want to find the increment $\Delta \mathbf{x}_k$. The second-order Taylor series of the measurement function is:

$$
\mathbf{h}(\mathbf{x}_k + \Delta \mathbf{x}_k) \approx \mathbf{h}(\mathbf{x}_k) + \mathbf{J}^T(\mathbf{x}_k) \Delta \mathbf{x}_k + \frac{1}{2} \Delta \mathbf{x}^T_k \mathbf{H}(\mathbf{x}_k) \Delta \mathbf{x}_k,
$$

where $\mathbf{J}(\mathbf{x}_k)$ is the Jacobian or and $\mathbf{H}(\mathbf{x})$ is the Hessian. Refer to [Unconstrained Optimization](/optimization/unconstrained_optimization/newton_method/) for more details.


### Gauss-Newton Method

Refer to [Gauss-Newon Method](/optimization/unconstrained_optimization/gauss_newton_method/).

### Levernberg-Marquatdt Method

Refer to [Levernberg-Marquatdt Method](/optimization/unconstrained_optimization/levernberg_marquatdt_method/).


## Example - Curve Fitting

Consider a curve with a measurement equation:

$$
y = \exp \left\{ a x^2 + bx + c \right\} + w,
$$

where $a, b, c$ are parameters to be estimated, and $w \sim \mathcal{N}(0, \sigma^2)$ is a zero-mean Gaussian noise. Suppose we have $N$ observation. The least squares problem can be formulated as:

$$
\arg \min_{a, b, c} \frac{1}{2} \sum^N_{i = 1} ||y_i - \exp \left\{ a x^2_i + bx_i + c \right\}||^2.
$$

The residual can be defined as:

$$
e_i = y_i - \exp \left\{ a x^2_i + bx_i + c \right\}.
$$

The derivative of the residual with respect to the state variables are:

$$
\begin{align}
\frac{\partial e_i}{\partial a} &= -x^2_i \exp \left\{ a x^2_i + bx_i + c \right\} \\ 
\frac{\partial e_i}{\partial b} &= -x_i \exp \left\{ a x^2_i + bx_i + c \right\} \\ 
\frac{\partial e_i}{\partial c} &= -\exp \left\{ a x^2_i + bx_i + c \right\}.
\end{align}
$$

The Jacobian for the $i$-th measurement is then:

$$
\mathbf{J} = \left[\begin{array}{ccc} \frac{\partial e_i}{\partial a} & \frac{\partial e_i}{\partial b} & \frac{\partial e_i}{\partial c} \end{array} \right]^T,
$$

and the normal equation of the Gauss-Newton method is:

$$
\biggl( \sum^N_{i = 1} \mathbf{J}_i (\sigma^2)^{-1} \mathbf{J}^T_i \biggr) \Delta \mathbf{x}_k = \sum^N_{i = 1} -\mathbf{J}_i (\sigma^2)^{-1} e_i.
$$

Figure 1 shows the nonlinear least squares estimator using Gauss-Newton method for $N = 100$ points.

<figure markdown>
  ![curve_fitting_with_gn](/assets/images/estimation_theory/light/curve_fitting_with_gn.png#only-light){ width="500" }
  ![curve_fitting_with_gn](/assets/images/estimation_theory/dark/curve_fitting_with_gn.png#only-dark){ width="500" }
  <figcaption>Curve fitting with nonlinear LSE using Gauss-Newton method</figcaption>
</figure>

## Appendix

=== "Direct Gauss Newton"

    ``` python linenums="1"
    import numpy as np
    import matplotlib.pyplot as plt
    from numpy.random import normal

    def model(x, a, b, c):

        d = a * x * x + b * x + c
        y = np.exp(d)
        return y

    # Ground truth values
    a_gt, b_gt, c_gt = 1.0, 2.0, 1.0

    N = 100
    x = np.zeros((N, ), dtype=np.float64)
    y_gt = np.zeros((N, ), dtype=np.float64)
    y_meas = np.zeros((N, ), dtype=np.float64)
    y_est = np.zeros((N, ), dtype=np.float64)

    # Noise properties
    w_sigma = 1.0
    inv_sigma = 1.0 / w_sigma

    # Generate N ground truth and noisy measurements
    for i in range(0, N):
        x[i] = i / float(N)
        y_gt[i] = model(x[i], a_gt, b_gt, c_gt)
        y_meas[i] = y_gt[i] + normal(0, w_sigma)


    # Gauss-Newton
    num_iter = 100
    cost, last_cost = 0.0, 0.0

    a, b, c = 2.0, -1.0, 5.0

    for j in range(0, num_iter):
        H = np.zeros((3, 3), dtype=np.float64) # Hessian = J^T W^{-1} J
        bias = np.zeros((3, 1), dtype=np.float64) # bias
        
        cost = 0.0

        for i in range(0, N):
            x_i, y_i = x[i], y_meas[i]
            h_i = model(x_i, a, b, c)
            r_i = y_i - h_i

            # Compute Jacobian at x_i
            J = np.zeros((3, 1), dtype=np.float64)
            J[0] = -x_i * x_i * h_i
            J[1] = -x_i * h_i
            J[2] = -h_i

            H += inv_sigma * inv_sigma * J @ J.T
            bias += -inv_sigma * inv_sigma * r_i * J

            cost += r_i * r_i

        H_pseudo_inv = np.linalg.inv(H.T @ H)
        dx = H_pseudo_inv @ H.T @ bias
        if (j > 0 and cost >= last_cost):
            break

        a += dx[0]
        b += dx[1]
        c += dx[2]

        last_cost = cost

    for i in range(0, N):
        y_est[i] = model(x[i], a, b, c)

    fig, ax = plt.subplots()
    ax.plot(x, y_gt, "-r", label="Ground truth")
    ax.plot(x, y_meas, ".b", label="Measurement")
    ax.plot(x, y_est, ".g", label="Estimated")
    ax.set_xlabel("x")
    ax.set_ylabel("y")
    ax.grid(True)
    ax.legend()
    fig.savefig("curve_fitting_with_gn.png", dpi=1000)
    ```

=== "g2o"

    ``` python linenums="1"
    #include <omp.h>

    int main()
    {
        omp_set_num_threads(16); // OPTIONAL - Can also use 
                                // OMP_NUM_THREADS environment variable

        #pragma omp parallel
        {
            printf("hello, world!\n"); // Execute in parallel
        } // Implicity join
        return 0;
    }
