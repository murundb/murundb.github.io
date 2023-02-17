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
            <h2><a href="navigation.html" style="text-decoration:none">Navigation</a>: 4.4 Navigation Equations in Local Tangent-Plane Frame</h2>
            <hr>
          </div>
        </div>
        <div class="flex-row">
            <div class="flex-item">
              <h2>Navigation Equations in Local Tanget-Plane Frame</h2>
              <p class="text">

                Local-tangent plane frame is used for navigation within a localized area. Since the frame is Earth fixed, the navigation equations
                have similar form to the <a href="inertial_navigation_ECEF.html">ECEF-frame equations</a>.

                <h3>4.4.1. Attitude Update</h3>
                To track the attitude change, we must track the transformation matrix through time. Consider the attitude change over time interval \(t\) to \(t + \tau_i\)The time derivative of the trasnformation matrix is:
                $$
                \begin{align}
                \dot{\mathbf{R}}^l_b &= \mathbf{R}^l_b \boldsymbol{\Omega}^b_{lb} \\
                &= \mathbf{R}^l_b  \left( \boldsymbol{\Omega}^b_{ib} - \boldsymbol{\Omega}^b_{il} \right) \\ 
                &= \mathbf{R}^l_b \boldsymbol{\Omega}^b_{ib} - \mathbf{R}^l_b \boldsymbol{\Omega}^b_{il} \\
                &= \mathbf{R}^l_b \boldsymbol{\Omega}^b_{ib} - \mathbf{R}^l_b \mathbf{R}^b_l \boldsymbol{\Omega}^l_{il}  \mathbf{R}^l_b \\
                &= \mathbf{R}^l_b \boldsymbol{\Omega}^b_{ib} - \boldsymbol{\Omega}^l_{il}  \mathbf{R}^l_b.
                \end{align} \label{4.4.1} \tag{4.4.1}
                $$
                \( \boldsymbol{\Omega}^b_{ib} \) is the skew-symmetric matrix of the IMU's angular-rate measurement and \( \boldsymbol{\Omega}^e_{il} \) is equivalent to:
                $$
                \boldsymbol{\Omega}^l_{il} = \mathbf{R}^l_e  \boldsymbol{\Omega}^e_{ie} \mathbf{R}^e_l. \label{4.4.2} \tag{4.4.2}
                $$
                Hence, the rotation of 
                the Earth must be accounded for in updating the attitude. Note that \( \mathbf{R}^l_e \) is constant since both frames are Earth fixed.
                <br>
                <br>
                Since this is a first-order matrix ordinary differential equation, assuming \( \boldsymbol{\Omega}^e_{ie} \) is constant:
                $$
                \begin{align}
                \mathbf{R}^l_b(t + \tau_i) &\approx \mathbf{R}^l_b(t) \text{exp}\left( \boldsymbol{\Omega}^b_{lb} \tau_i \right) \\
                &= \mathbf{R}^l_b(t) \text{exp} \left( \boldsymbol{\Omega}^b_{ib} \tau_i - \boldsymbol{\Omega}^l_{il} \tau_i \right) \\
                &= \mathbf{R}^l_b(t) \text{exp}\left(\boldsymbol{\Omega}^b_{ib} \tau_i \right) - \mathbf{R}^l_b(t) \left[ \text{exp}\left( \boldsymbol{\Omega}^b_{il} \tau_i \right) - \mathbf{I}_3 \right] \\
                &= \mathbf{R}^l_b(t) \text{exp}\left( \left[ \boldsymbol{\alpha}^b_{ib} \right]_\times \right) - \left[ \text{exp}\left( \boldsymbol{\Omega}^l_{il} \tau_i \right) - \mathbf{I}_3 \right] \mathbf{R}^l_b(t) \\
                \end{align} \label{4.4.3} \tag{4.4.3}
                $$

                Applying small angle approximation and truncating the power series expansion at the first order yields to:
                $$
                \mathbf{R}^l_b(+) \approx \mathbf{R}^l_b(-) \left( \mathbf{I}_3 + \boldsymbol{\Omega}^b_{ib} \tau_i \right) - \boldsymbol{\Omega}^l_{il} \mathbf{R}^l_b(-) \tau_i. \label{4.4.4} \tag{4.4.4}
                $$

                Since the rotation of the Earth is much slower compared to the angular rate measurements from the IMU, this small angle approximation is always valid for the 
                Earth rate term of the attitude update equation.

                <h3>4.4.2. Precision Attitude Update</h3>
                We can replace the first order approximation in \( \ref{4.4.4} \) with the attitude update matrix:
                $$
                \begin{align}
                \mathbf{R}^l_b(+) &= 
                \left[ 
                \begin{array}{ccc}
                \text{cos}\omega_{ie} \tau_i & \text{sin}\omega_{ie} \tau_i & 0 \\
                -\text{sin}\omega_{ie} \tau_i & \text{cos}\omega_{ie} \tau_i & 0 \\
                0 & 0 & 1
                \end{array}
                \right]
                \mathbf{R}^l_b(-) \mathbf{R}^{b-}_{b+} \\
                &\approx \mathbf{R}^l_b(-)\mathbf{R}^{b-}_{b+} - \boldsymbol{\Omega}^l_{il} \mathbf{R}^l_b(-) \tau_i,
                \end{align}  \label{4.4.5} \tag{4.4.5}
                $$
                where the attidude update matrix is given by the Rodrigues's formula:
                $$
                \begin{align}
                \mathbf{R}^{b-}_{b+} &= \mathbf{I}_3 + \frac{\text{sin}|\boldsymbol{\alpha}^b_{ib}|}{|\boldsymbol{\alpha}^b_{ib}|} 
                \left[ \boldsymbol{\alpha}^b_{ib} \right]_\times
                + \frac{1 - \text{cos}|\boldsymbol{\alpha}^b_{ib}|}{|\boldsymbol{\alpha}^b_{ib}|^2} \left[ \boldsymbol{\alpha}^b_{ib} \right]^2_\times.
                \end{align} \label{4.4.6} \tag{4.4.6}
                $$

                <h3>4.4.2. Specific-Force Frame Transformation</h3>
                The IMU measures specific force along the body-frame resolving axe. Applying the transform matrix similar to ECEF yields:
                $$
                \mathbf{f}^l_{ib}(t) = \mathbf{R}^l_b(t) \mathbf{f}^b_{ib}(t). \label{4.4.7} \tag{4.4.7}
                $$

                Since the specific-force measurement is an average over time \( t \) to \( t + \tau_i \), the transformation matrix should be similarly averaged. Assuming a constant angular rate:
                $$
                \mathbf{f}^l_{ib} \approx \frac{1}{2} \left( \mathbf{R}^l_b(-) + \mathbf{R}^l_b(+) \right) \mathbf{f}^b_{ib}. \label{4.4.8} \tag{4.4.8}
                $$

                However, the mean of two transformation matrices does not precisely produce the mean of the two attitudes. The less the attitude varies over the time interval,
                the smaller the errors introduced by this approximation.

                <h3>4.4.3. Precision Specific-Force Frame Transformation</h3>
                Retaining the first-order approximation for the Earth-rate term, the prcecise transformation of the specific force to local tangent-plane frame axes is:
                $$
                \mathbf{f}^l_{ib} = \bar{\mathbf{R}}^l_b \mathbf{f}^b_{ib}, \quad \bar{\mathbf{R}}^l_b = \mathbf{R}^l_b(-) \mathbf{R}^{b-}_{\bar{b}} - \frac{1}{2} \boldsymbol{\Omega}^l_{il} \mathbf{R}^l_b(-) \tau_i, \label{4.4.9} \tag{4.4.9}
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
                \end{align}  \label{4.4.10} \tag{4.4.10}
                $$

                <h3>4.4.4. Velocity Update </h3>
                Similar to ECI/ECEF frame implementation, since the reference frame and resolving axes are the same:
                $$
                \dot{\mathbf{v}}^l_{lb} = \mathbf{a}^l_{lb} = \ddot{\mathbf{r}}^l_{lb}. \label{4.4.11} \tag{4.4.11}
                $$
                Since:
                $$
                \begin{align}
                \mathbf{r}^l_{lb} &= \mathbf{r}^l_{ib} - \mathbf{r}^l_{il} \\ 
                &= \mathbf{r}^l_{ib},
                \end{align} \label{4.4.12} \tag{4.4.12}
                $$
                we get:
                $$
                \dot{\mathbf{v}}^l_{lb} = \ddot{\mathbf{r}}^l_{ib}. \label{4.4.13} \tag{4.4.13}
                $$

                From <a href="/topics/kinematics/acceleration.html"> Kinematics: Acceleration</a>, we get:
                $$
                \begin{align}
                \mathbf{v}^l_{lb} &= -\boldsymbol{\Omega}^l_{il} \boldsymbol{\Omega}^l_{il} \mathbf{r}^l_{ib} - 2 \boldsymbol{\Omega}^l_{il} \dot{\mathbf{r}}^l_{lb} + \mathbf{a}^l_{ib} \\
                &= -\boldsymbol{\Omega}^l_{il} \boldsymbol{\Omega}^l_{il} \mathbf{r}^l_{ib} - 2 \boldsymbol{\Omega}^l_{il} \mathbf{v}^l_{lb} + \mathbf{a}^l_{ib}
                \end{align} \label{4.4.14} \tag{4.4.14}
                $$

                The equation shows that the rate of change of velocity resolved about the local tangent-plane frame axes incorporates a centrifugal and a Coriolis term due
                to the rotation of the resolving axes. From <a href="gravity_models.html">Gravity Models</a>, we know that the applied acceleration
                \(\mathbf{a}^l_{ib} \) is the sum of the measured specific force, \(\mathbf{f}^l_{ib} \), and the acceleration due to the gravitation force, \( \boldsymbol{\gamma}^l_{ib} \).
                Furthermore, the acceleration due to gravity, \(\mathbf{g}^e_b \), is the sum of the gravitational and centrifugal accelerations. Hence:
                $$
                \dot{\mathbf{v}}^l_{lb} = \mathbf{f}^l_{ib} + \mathbf{R}^l_e \mathbf{g}^e_b(\mathbf{r}^e_{eb}) - 2 \boldsymbol{\Omega}^l_{il} \mathbf{v}^l_{lb}, \label{4.4.15} \tag{4.4.15}
                $$
                where:
                $$
                \begin{align}
                \mathbf{r}^l_{lb} &= \mathbf{R}^l_e \left( \mathbf{r}^e_{eb} - \mathbf{r}^e_{el} \right) \\
                \mathbf{r}^e_{eb} &= \mathbf{r}^e_{el} + \mathbf{R}^e_l \mathbf{r}^l_{lb}.
                \end{align}
                $$

                Since the Coriolis term is much smaller than the specific-force and gravity terms (except for space applications), it is reasonable approximation
                to neglegt the variation of the Coriolis term over the integration interval. Hence:

                $$
                \begin{align}
                \mathbf{v}^l_{lb}(+) & \approx \mathbf{v}^l_{lb}(-) + \left( \mathbf{f}^l_{ib} 
                + \mathbf{R}^l_e \mathbf{g}^e_b(\mathbf{r}^e_{eb}(-)) - 2 \boldsymbol{\Omega}^l_{il} \mathbf{v}^l_{lb}(-) \right) \tau_i \\ 
                &= \mathbf{v}^l_{lb}(-) + \boldsymbol{v}^l_{ib} + \left(  \mathbf{R}^l_e \mathbf{g}^e_b(\mathbf{r}^e_{eb}(-)) - 2 \boldsymbol{\Omega}^l_{il} \mathbf{v}^l_{lb}(-) \right) \tau_i.
                \end{align} \label{4.4.16} \tag{4.4.16}
                $$

                <h3>4.4.5. Position Update </h3>
                In local-tangent plane frame implementation of the navigation equations, the time derivative of the Cartesian position is simply velocity as the reference frame and resolving
                axes are the same:
                $$
                \dot{\mathbf{r}}^l_{lb} = \mathbf{v}^l_{lb}. \label{4.4.17} \tag{4.4.17}
                $$
                Integrating this gives:
                $$
                \begin{align}
                \mathbf{r}^l_{lb}(+) &= \mathbf{r}^l_{lb}(-) + \left( \mathbf{v}^l_{lb}(-) + \mathbf{v}^l_{lb}(+) \right) \frac{\tau_i}{2} \\
                &\approx \mathbf{r}^l_{lb}(-) + \mathbf{v}^l_{lb}(-)\tau_i + \left( \mathbf{f}^l_{ib} + \mathbf{R}^l_e \mathbf{g}^e_b (\mathbf{r}^e_{eb}(-)) - 2 \boldsymbol{\Omega}^l_{il} \mathbf{v}^l_{lb}(-) \right) \frac{\tau^2_i}{2}.
                \end{align} \label{4.4.18} \tag{4.4.18}
                $$

                <h3>4.4.6. Precision Velocity and Position Update </h3>
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