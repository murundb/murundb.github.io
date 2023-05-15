# Inertial Navigation Architecture

Figure 1 shows a schematic of an inertial navigation processor. IMU outputs are integrated to produce an updated position, velocity, 
and attitude solution in four steps:

1. Attitude update
2. Transformation of specific-force resolving axes from the IMU body frame to the 
coordinate frame used to resolve the position and velocity solutions
3. Velocity update, including transformation of specific force into accelration using
gravity or gravitation model
4. Position update

<figure markdown>
  ![Inertial Navigation Architecture](/assets/images/navigation/light/inertial_navigation_overview.png#only-light){ width="500" }
  ![Inertial Navigation Architecture](/assets/images/navigation/dark/inertial_navigation_overview.png#only-dark){ width="500" }
  <figcaption>Fig 1 Inertial Navigation Processor (source Groves, p167)</figcaption>
</figure>

Continuous-time navigation equations physicall describe a body's modion. Discrete-time navigation equations,
also known as **mechanization** equations, provide a means of updating a navigation solution over a discrete time interval.