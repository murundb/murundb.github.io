## ECI Frame 
$F_i$ - <https://en.wikipedia.org/wiki/Earth-centered_inertial>

## ECEF Frame
$F_e$ - <https://en.wikipedia.org/wiki/Earth-centered,_Earth-fixed_coordinate_system>

## Local Navigation Frame
$F_n$ - <https://en.wikipedia.org/wiki/Local_tangent_plane_coordinates#Local_north,_east,_down_(NED)_coordinates>

## Local Tangent-Plane Frame
$F_l$ - <https://en.wikipedia.org/wiki/Local_tangent_plane_coordinates>

## Body Frame

Body frame, $F_b$, comprises the origin and orientation of the object described by the navigation solution. Its origin coincides with 
local navigation frame and the axes remain fixed with respect to the vehicle. $x^b$ is the forward axis, pointing in the usual direction of travel; 
$z^b$ is the down axis, pointing in the usual direction of gravity; and $y^b$ is the right axis, completing the orthogonal set. Body frame is shown in Figure 1.

<figure markdown>
  ![Body Frame](/assets/images/navigation/light/body_frame.png#only-light){ width="400" }
  ![Body Frame](/assets/images/navigation/dark/body_frame.png#only-dark){ width="400" }
  <figcaption>Figure 1 Body Frame (source Groves, p29)</figcaption>
</figure>