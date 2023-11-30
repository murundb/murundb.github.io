# Epipolar Geometry

## Basic Stereo Geometry

Figure 1 shows the geometry of a basic stereo view. We have:

1. **Scene point**: World point, $P$.
2. **Image planes**: Two frames, $I_1$ and $I_2$.
3. **Optical centers**: Centers of the two cameras, $O_1$ and $O_2$.
4. **Feature points**: Projection of $P$ in $I_1$, $p_1$ and in $I_2$, $p_2$.

<figure markdown>
  ![stereo_geometry](/assets/images/computer_vision/light/stereo_geometry.png#only-light){ width="600" }
  ![stereo_geometry](/assets/images/computer_vision/dark/stereo_geometry.png#only-dark){ width="600" }
  <figcaption>Figure 1 Stereo Geometry (Gao, p140)</figcaption>
</figure>

## Epipolar Geometry Terms

From Figure 1:

1. **Baseline**, $B$: Line joining the camera centers, $O_1$ and $O_2$.
2. **Epipolar plane**: Plane containing the baseline ($O_1$ and $O_2$) and the world point ($P$).
3. **Epipoles**, $e_1$ and $e_2$: Point of intersection of baseline ($O_1$ and $O_2$) with the image planes $I_1$ and $I_2$.
4. **Epipolar lines**, $l_1$ and $l_2$: Intersection of epipolar plane with the image planes.

## Stereo Correspondence Constraints

The epipolar constraint gives the spatial relationship of two matching points concicely.

From the first frame, the ray $\overrightarrow{O_1 p_1}$ represents the possible spatial locations where a pixel may appear since all points on the ray will be projected to the same pixel. In perspective projection, lines project into lines. Hence, the line containing the center of projection and the point $P$ in $I_1$ must project to a line $l_2$ or $\overrightarrow{e_2 p_2}$. This is further illustrated in Figure 2.

<figure markdown>
  ![stereo_correspondence](/assets/images/computer_vision/light/stereo_correspondence.png#only-light){ width="600" }
  ![stereo_correspondence](/assets/images/computer_vision/dark/stereo_correspondence.png#only-dark){ width="600" }
  <figcaption>Figure 1 Stereo Correspondence</figcaption>
</figure>

Now, since we have determined the pixel location of $p_2$ through feature matching, we can infer the spatial location of $P$ and the camera movement as long as the feature matching is correct. If there is no feature matching, we cannot determine where $p_2$ is on the epipolar line. Hence, we must search on the epipolar line $p_2$ to get the correct match. This is called the **epipolar constraint** and reduces the correspondance problem to a 1D search along the epipolar line.

Define the motion from the first frame to the second frame as $\mathbf{R}^2_1$ and $\mathbf{t}^1_{1 \rightarrow 2}$. Let the spatial position of P in the first camera frame to be:

$$
\mathbf{P} = \left[\begin{array}{ccc}X & Y & Z \end{array} \right]^T.
$$

Using pinhole camera model, the pixel positions in $I_1$ and $I_2$ are:

$$
s_1 \mathbf{p}_1 = \mathbf{K} \mathbf{P}, \quad s_2 \mathbf{p}_2 = \mathbf{K} \left( \mathbf{R}^2_1 \mathbf{P} + \mathbf{t}^1_{1 \rightarrow 2} \right),
$$

where $\mathbf{K}$ is the camera intrinsic. Sometimes, it is useful to use homogeneous coordinates to represent pixels. When using homogeneous coordinates, a vector will be equal to itself multiplied by any non-zero constant. This is usually used to express a projection relationship. For example, $s_1 \mathbf{p}_1$ and $\mathbf{p}_1$ form a projection relationship, and they are equal in the sense of homogeneous coordinates. We call this equal **up to a scale**, denoted as:

$$
s \mathbf{p} \simeq \mathbf{p}.
$$

The relationship between the two projections can be rewritten as:

$$
\mathbf{p}_1 \simeq \mathbf{K} \mathbf{P}, \quad \mathbf{p}_2 \simeq \mathbf{K} \left( \mathbf{R} \mathbf{P} + \mathbf{t} \right).
$$

Let $\mathbf{x}_1$ and $\mathbf{x}_2$ be the coordinates on the normalized plane of the two pixels:

$$
\mathbf{x}_1 = \mathbf{K}^{-1} \mathbf{p}_1, \quad \mathbf{x}_2 = \mathbf{K}^{-1} \mathbf{p}_2.
$$

Then we have:

$$
\begin{align}
\mathbf{x}_2 &\simeq \mathbf{R} \mathbf{x}_1 + \mathbf{t} \Rightarrow \\
\left[ \mathbf{t} \right]_\times \mathbf{x}_2 &\simeq \left[ \mathbf{t} \right]_\times \mathbf{R} \mathbf{x}_1 \Rightarrow \\
\mathbf{x}^T_2 \left[ \mathbf{t} \right]_\times \mathbf{x}_2 &\simeq \mathbf{x}^T_2 \left[ \mathbf{t} \right]_\times \mathbf{R} \mathbf{x}_1.
\end{align}
$$

On the left side, $\left[ \mathbf{t} \right]_\times \mathbf{x}_2$ is a vector orthogonal to both $\mathbf{t}$ and $\mathbf{x}_2$ so it is inner product with $\mathbf{x}_2$ will be zero. Hence we have:

$$
\begin{align}
&\mathbf{x}^T_2 \left[ \mathbf{t} \right]_\times \mathbf{R} \mathbf{x}_1 = 0 \Rightarrow \\
&\mathbf{p}^T_2 \left( \mathbf{K}^{-1} \right)^T \left[ \mathbf{t} \right]_\times \mathbf{R} \mathbf{K}^{-1} \mathbf{p}_1 = 0,
\end{align}
$$

which is called the **epipolar constraint** equation. Geometrically, it means $O_1$, $P$, and $O_2$ are coplanar. The epipolar constraint encodes both translation and rotation.
