<!doctype html>
<html>
<head>
  <title>Note Jar</title>
  <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
  <link href="/css/frame.css" media="screen" rel="stylesheet" type="text/css" />
  <link href="/css/controls.css" media="screen" rel="stylesheet" type="text/css" />
  <link href="/css/custom.css" media="screen" rel="stylesheet" type="text/css" />
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet">
</head>
<body>
  <div class="menu-container"></div>
  <div class="content-container">
    <div class="content">
      <div class="content-table flex-column">
        <div class="flex-row">
          <div class="flex-item flex-column">
            <h2><a href="navigation.html" style="text-decoration:none">Navigation</a>: 4.3 Navigation Equations in ECEF Frame</h2>
            <hr>
          </div>
        </div>
        <div class="flex-row">
            <div class="flex-item">
              <h2>Navigation Equations in ECEF Frame</h2>
              <p class="text">
                ECEF frame is commonly used as a reference frame and resolving axes for application such as 
                satellite navigation solutions or airbone photogrammetry.
                ECEF-frame navigation equations block diagram is shown in Figure 4.3. The suffixes (-) and (+) are used to denote a priori (at time \( t \)) and a posteriori values (at time \(t + \tau_i \)).

                <img class="image max-width-400 add-top-margin-large" src="/img/ecef_navigation_block_diagram.png">
                <p class="image-caption">Fig 4.3 ECEF-frame navigation (Groves, p173)</a></p>  

                <h3>4.3.1. Attitude Update</h3>
                To track the attitude change, we must track the transformation matrix through time. Consider the attitude change over time interval \(t\) to \(t + \tau_i\)The time derivative of the trasnformation matrix is:
                $$
                \begin{align}
                \dot{\mathbf{R}}^e_b &= \mathbf{R}^e_b \boldsymbol{\Omega}^b_{eb} \\
                &= \mathbf{R}^e_b  \left( \boldsymbol{\Omega}^b_{ib} - \boldsymbol{\Omega}^b_{ie} \right) \\ 
                &= \mathbf{R}^e_b \boldsymbol{\Omega}^b_{ib} - \mathbf{R}^e_b \boldsymbol{\Omega}^b_{ie} \\
                &= \mathbf{R}^e_b \boldsymbol{\Omega}^b_{ib} - \mathbf{R}^e_b \mathbf{R}^b_e \boldsymbol{\Omega}^e_{ie}  \mathbf{R}^e_b \\
                &= \mathbf{R}^e_b \boldsymbol{\Omega}^b_{ib} - \boldsymbol{\Omega}^e_{ie}  \mathbf{R}^e_b.
                \end{align} \label{4.3.1} \tag{4.3.1}
                $$
                \( \boldsymbol{\Omega}^b_{ib} \) is the skew-symmetric matrix of the IMU's angular-rate measurement and \( \boldsymbol{\Omega}^e_{ie} \) is the 
                skew-symmetric matrix of the Earth-rotation vector defined in <a href="rotation_of_earth.html">Rotation of Earth</a>. Hence, the rotation of 
                the Earth must be accounded for in updating the attitude.
                <br>
                <br>
                Since this is a first-order matrix ordinary differential equation, assuming \( \boldsymbol{\Omega}^e_{ie} \) is constant:
                $$
                \begin{align}
                \mathbf{R}^e_b(t + \tau_i) &\approx \mathbf{R}^e_b(t) \exp\left( \boldsymbol{\Omega}^b_{eb} \tau_i \right) \\
                &= \mathbf{R}^e_b(t) \exp \left( \boldsymbol{\Omega}^b_{ib} \tau_i - \boldsymbol{\Omega}^e_{ie} \tau_i \right) \\
                &= \mathbf{R}^e_b(t) \exp\left(\boldsymbol{\Omega}^b_{ib} \tau_i \right) - \mathbf{R}^e_b(t) \left[ \exp\left( \boldsymbol{\Omega}^b_{ie} \tau_i \right) - \mathbf{I}_3 \right] \\
                &= \mathbf{R}^e_b(t) \exp\left( \left[ \boldsymbol{\alpha}^b_{ib} \right]_\times \right) - \left[ \exp\left( \boldsymbol{\Omega}^e_{ie} \tau_i \right) - \mathbf{I}_3 \right] \mathbf{R}^e_b(t) \\
                \end{align} \label{4.3.2} \tag{4.3.2}
                $$

                Applying small angle approximation and truncating the power series expansion at the first order yields to:
                $$
                \mathbf{R}^e_b(+) \approx \mathbf{R}^e_b(-) \left( \mathbf{I}_3 + \boldsymbol{\Omega}^b_{ib} \tau_i \right) - \boldsymbol{\Omega}^e_{ie} \mathbf{R}^e_b(-) \tau_i. \label{4.3.3} \tag{4.3.3}
                $$

                Since the rotation of the Earth is much slower compared to the angular rate measurements from the IMU, this small angle approximation is always valid for the 
                Earth rate term of the attitude update equation. 

                <h3>4.3.2. Precision Attitude Update</h3>
                We can replace the first order approximation in \( \ref{4.3.3} \) with the attitude update matrix:
                $$
                \begin{align}
                \mathbf{R}^e_b(+) &= 
                \left[ 
                \begin{array}{ccc}
                \text{cos}\omega_{ie} \tau_i & \text{sin}\omega_{ie} \tau_i & 0 \\
                -\text{sin}\omega_{ie} \tau_i & \text{cos}\omega_{ie} \tau_i & 0 \\
                0 & 0 & 1
                \end{array}
                \right]
                \mathbf{R}^e_b(-) \mathbf{R}^{b-}_{b+} \\
                &\approx \mathbf{R}^e_b(-)\mathbf{R}^{b-}_{b+} - \boldsymbol{\Omega}^e_{ie} \mathbf{R}^e_b(-) \tau_i,
                \end{align}  \label{4.3.4} \tag{4.3.4}
                $$
                where the attidude update matrix is given by the Rodrigues's formula:
                $$
                \begin{align}
                \mathbf{R}^{b-}_{b+} &= \mathbf{I}_3 + \frac{\text{sin}|\boldsymbol{\alpha}^b_{ib}|}{|\boldsymbol{\alpha}^b_{ib}|} 
                \left[ \boldsymbol{\alpha}^b_{ib} \right]_\times
                + \frac{1 - \text{cos}|\boldsymbol{\alpha}^b_{ib}|}{|\boldsymbol{\alpha}^b_{ib}|^2} \left[ \boldsymbol{\alpha}^b_{ib} \right]^2_\times.
                \end{align} \label{4.3.5} \tag{4.3.5}
                $$

                <h3>4.3.2. Specific-Force Frame Transformation</h3>
                The IMU measures specific force along the body-frame resolving axe. Applying the transform matrix similar to ECI yields:
                $$
                \mathbf{f}^e_{ib}(t) = \mathbf{R}^e_b(t) \mathbf{f}^b_{ib}(t). \label{4.3.6} \tag{4.3.6}
                $$

                Since the specific-force measurement is an average over time \( t \) to \( t + \tau_i \), the transformation matrix should be similarly averaged. Assuming a constant angular rate:
                $$
                \mathbf{f}^e_{ib} \approx \frac{1}{2} \left( \mathbf{R}^e_b(-) + \mathbf{R}^e_b(+) \right) \mathbf{f}^b_{ib}. \label{4.3.7} \tag{4.3.7}
                $$

                However, the mean of two transformation matrices does not precisely produce the mean of the two attitudes. The less the attitude varies over the time interval,
                the smaller the errors introduced by this approximation.

                <h3>4.3.3. Precision Specific-Force Frame Transformation</h3>
                Retaining the first-order approximation for the Earth-rate term, the prcecise transformation of the specific force to ECEF-frame axes is:
                $$
                \mathbf{f}^e_{ib} = \bar{\mathbf{R}}^e_b \mathbf{f}^b_{ib}, \quad \bar{\mathbf{R}}^e_b = \mathbf{R}^e_b(-) \mathbf{R}^{b-}_{\bar{b}} - \frac{1}{2} \boldsymbol{\Omega}^e_{ie} \mathbf{R}^e_b(-) \tau_i, \label{4.3.8} \tag{4.3.8}
                $$
                where:
                $$
                \begin{align}
                \mathbf{R}^{b-}_{\bar{b}} &= \mathbf{I}_3 + 
                \frac{1 - \text{cos}|\boldsymbol{\alpha^b_{ib}}|}{|\boldsymbol{\alpha^b_{ib}}|^2} \left[ \boldsymbol{\alpha}^b_{ib} \right]_\times
                + 
                \frac{1}{|\boldsymbol{\alpha^b_{ib}}|^2}
                \left(
                1 - \frac{\text{sin}|\boldsymbol{\alpha^b_{ib}}|}{|\boldsymbol{\alpha^b_{ib}}|}
                \right) \left[ \boldsymbol{\alpha}^b_{ib} \right]^2_\times.
                \end{align}  \label{4.3.9} \tag{4.3.9}
                $$

                <h3>4.3.4. Velocity Update </h3>
                Similar to ECI frame implementation, since the reference frame and resolving axes are the same:
                $$
                \dot{\mathbf{v}}^e_{eb} = \mathbf{a}^e_{eb} = \ddot{\mathbf{r}}^e_{eb}. \label{4.3.10} \tag{4.3.10}
                $$
                Since:
                $$
                \begin{align}
                \mathbf{r}^e_{eb} &= \mathbf{r}^e_{ib} - \mathbf{r}^e_{ie} \\ 
                &= \mathbf{r}^e_{ib},
                \end{align} \label{4.3.11} \tag{4.3.11}
                $$
                we get:
                $$
                \dot{\mathbf{v}}^e_{eb} = \ddot{\mathbf{r}}^e_{ib}. \label{4.3.12} \tag{4.3.12}
                $$

                From <a href="/topics/kinematics/acceleration.html"> Kinematics: Acceleration</a>, we get:
                $$
                \begin{align}
                \mathbf{v}^e_{eb} &= -\boldsymbol{\Omega}^e_{ie} \boldsymbol{\Omega}^e_{ie} \mathbf{r}^e_{ib} - 2 \boldsymbol{\Omega}^e_{ie} \dot{\mathbf{r}}^e_{eb} + \mathbf{a}^e_{ib} \\
                &= -\boldsymbol{\Omega}^e_{ie} \boldsymbol{\Omega}^e_{ie} \mathbf{r}^e_{ib} - 2 \boldsymbol{\Omega}^e_{ie} \mathbf{v}^e_{eb} + \mathbf{a}^e_{ib}
                \end{align} \label{4.3.13} \tag{4.3.13}
                $$

                The equation shows that the rate of change of velocity resolved about the ECEF axes incorporates a centrifugal and a Coriolis term due
                to the rotation of the resolving axes. From <a href="gravity_models.html">Gravity Models</a>, we know that the applied acceleration
                \(\mathbf{a}^e_{ib} \) is the sum of the measured specific force, \(\mathbf{f}^e_{ib} \), and the acceleration due to the gravitation force, \( \boldsymbol{\gamma}^e_{ib} \).
                Furthermore, the acceleration due to gravity, \(\mathbf{g}^e_b \), is the sum of the gravitational and centrifugal accelerations. Hence:
                $$
                \dot{\mathbf{v}}^e_{eb} = \mathbf{f}^e_{ib} + \mathbf{g}^e_b(\mathbf{r}^e_{eb}) - 2 \boldsymbol{\Omega}^e_{ie} \mathbf{v}^e_{eb}. \label{4.3.14} \tag{4.3.14}
                $$

                Since the Coriolis term is much smaller than the specific-force and gravity terms (except for space applications), it is reasonable approximation
                to neglegt the variation of the Coriolis term over the integration interval. Hence:

                $$
                \begin{align}
                \mathbf{v}^e_{eb}(+) & \approx \mathbf{v}^e_{eb}(-) + \left( \mathbf{f}^e_{ib} 
                + \mathbf{g}^e_b(\mathbf{r}^e_{eb}(-)) - 2 \boldsymbol{\Omega}^e_{ie} \mathbf{v}^e_{eb}(-) \right) \tau_i \\ 
                &= \mathbf{v}^e_{eb}(-) + \boldsymbol{v}^e_{ib} + \left(  \mathbf{g}^e_b(\mathbf{r}^e_{eb}(-)) - 2 \boldsymbol{\Omega}^e_{ie} \mathbf{v}^e_{eb}(-) \right) \tau_i.
                \end{align} \label{4.3.15} \tag{4.3.15}
                $$

                <h3>4.3.5. Position Update </h3>
                In ECEF frame implementation of the navigation equations, the time derivative of the Cartesian position is simply velocity as the reference frame and resolving
                axes are the same:
                $$
                \dot{\mathbf{r}}^e_{eb} = \mathbf{v}^e_{eb}. \label{4.3.16} \tag{4.3.16}
                $$
                Integrating this gives:
                $$
                \begin{align}
                \mathbf{r}^e_{eb}(+) &= \mathbf{r}^e_{eb}(-) + \left( \mathbf{v}^e_{eb}(-) + \mathbf{v}^e_{eb}(+) \right) \frac{\tau_i}{2} \\
                &\approx \mathbf{r}^e_{eb}(-) + \mathbf{v}^e_{eb}(-)\tau_i + \left( \mathbf{f}^e_{ib} + \mathbf{g}^e_b (\mathbf{r}^e_{eb}(-)) - 2 \boldsymbol{\Omega}^e_{ie} \mathbf{v}^e_{eb}(-) \right) \frac{\tau^2_i}{2}.
                \end{align} \label{4.3.17} \tag{4.3.17}
                $$

                <h3>4.3.6. Precision Velocity and Position Update </h3>
                Exact evaluation of the Coriolis and transport-rate terms require knowledge of the velocity at the end of the update interval, requiring recursive solution. A good but processor-intensive solution is
                a two-step recursive method.
            </p>
            </div>
          </div>
      </div>
    </div>
  </div>
</body>

<!-- JavaScript libs are placed at the end of the document so the pages load faster -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="/js/menu.js"></script>
<script src="/js/dropdown.js"></script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</html>