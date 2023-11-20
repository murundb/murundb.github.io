
# ECEF From Curvilinear Conversion

The meridian (or the north-south motion) radius of curvature, $R_{N}$,  varies with latitude and is smallest at the equator, where the geocentric radius is the largest, and largest at the poles:

$$
R_{N}(L) = \frac{R_0 (1 - e^2)}{(1 - e^2 \text{sin}^2(L))^{3/2}},
$$

where $L$ is the geodetic latitude in radians, $e$ is the eccentricity of the reference ellipsoid (WGS 84 - 0.0818191908425), $R_0$ is the equatorial radius (WGS 84 - 6,378,137.0m).

The radius of curvature for east-west motion, $R_E$ is the vertical plane perpendicular to the meridian plane and is not the plane of constant latitude. It varies
with latitude and is smallest at the equator:

$$
R_{E}(L) = \frac{R_0}{\sqrt{1 - e^2 \text{sin}^2(L)}}.
$$

The Cartesian ECEF position can be obtained from curvilinear position by:

$$
\begin{align}
\mathbf{r}^{e}_{eb} = 
\left[
\begin{array}{c}
x^{e}_{eb} \\
y^{e}_{eb} \\
z^{e}_{eb}
\end{array}
\right] = 
\left[
\begin{array}{c}
\left( R_E (L_b) + h_b \right) \text{cos}L_b \text{cos} \lambda_b \\
\left( R_E (L_b) + h_b \right) \text{cos}L_b \text{sin} \lambda_b \\
\left[ (1 - e^2) R_E (L_b) + h_b \right] \text{sin} L_b
\end{array}
\right],
\end{align}
$$

where $h_b$ is the geodetic height or altitude (distance from a body to the ellipsoid surface along the normal to that ellipsoid).

## Curvilinear From ECEF Conversion

Conversion from ECEF position to LLA is given by:

$$
\begin{align}
\text{tan}L_b &= \frac{z^{e}_{eb} \left[R_E(L_b) + h_b \right]}{\sqrt{(x^e_{eb})^2 + (y^e_{eb})^2} \left[(1 - e^2)R_E(L_b) + h_b \right]} \\
\text{tan}\lambda_b &= \frac{y^e_{eb}}{x^{e}_{eb}} \\
h_b &= \frac{\sqrt{(x^e_{eb})^2 + (y^{e}_{eb})^2}}{\text{cos} L_b} - R_E(L_b),
\end{align}
$$

where a four-quadrant arctangent function must be used for longitude. Also, since $R_E$ is a function of latitude, the latitude and heigh must be solved
iteratively. The approximate closed-form latitude solution (accurate to within 1cm for positions close to the Earth's surface) is given by:

$$
\text{tan}L_b \approx \frac{z^e_{eb} \sqrt{1 - e^2} + e^2 R_0 sin^3 \zeta_b}{\sqrt{1 - e^2} (\sqrt{(x^e_{eb})^2 + (y^e_{eb})^2} - e^2 R_0 \text{cos}^3 \zeta_b)},
$$

where

$$
\text{tan}\zeta_b = \frac{z^e_{eb}}{\sqrt{1-e^2} \sqrt{(x^e_{eb})^2 + (y^e_{eb})^2}}.
$$

$1^o$ of longitude is about 110 km (60 nautical miles) at the equator, and 80 km at $45^o$ latitude.