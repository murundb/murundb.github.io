## Mean Sea Level and Orthometric Height

**Mean sea level** (MSL) is an average surface level of one or more among Earth's coastal bodies of water from which height can be measured. It maintains a
surface of approximately equal gravity potential, i.e., potential energy
required to overcome gravity. The **geoid** is a model of the Earth's equipotential surface i.e., a surface with a constant gravity potential. The geoid is usually within 1 meter
of MSL. Physical surface of the Earth, known as terrain, is generally above the geoid. The gravity vector at any point on the Earth's surface is perpendicular to the geoid, not the
ellipsoed or the terrain, although, in practice, the difference is small.

Height above MSL is a measure of the vertical distance of a location in reference to a historic mean sea level taken as a 
vertical datum (geoid model). This is known as  **orthometric height**, $H$, or altitude above MSL (AMSL):

$$
H_b \approx h_b - N(L_b, \lambda_b),
$$

where $N$ is the height of the geoid (also known as undulation) with respect to the ellipsoid (WGS 84 - 4,730,400m).
The approximation is due to the geodetic heigh tis measured normal to the ellipsoid, whereas the orthometric heigh is measured normal to the geoid. The following figure shows the various height illustrations.

<figure markdown>
  ![Body Frame](/assets/images/navigation/light/orthometric_and_geodetic_height.png#only-light){ width="400" }
  ![Body Frame](/assets/images/navigation/dark/orthometric_and_geodetic_height.png#only-dark){ width="400" }
  <figcaption>Geoid and Orthometric Height (source Groves, p65)</figcaption>
</figure>