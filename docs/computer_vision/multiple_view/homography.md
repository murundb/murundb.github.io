# Homography

## Definition

Homography describes the mapping relationship between two planes if the center of projection of the planes are the same. For example, homography can be used to transform one image to another, or a planar surface in a 3D world to a 2D image. Homography is also called projectivity, or a collineation, ora projective transformation. More precisely:

**Theorem**. A mapping $h \ : \ \mathbb{P}^2 \rightarrow \mathbb{P}^2$ is a projectivity if and only if there exists a non-singular $3 \times 3$ matrix $\mathbf{H}$ such that for any point in $\mathbb{P}^2$ represented by a vector $\mathbf{x}$ it is true that $h(\mathbf{x}) = \mathbf{H} \mathbf{x}$.

A planar projective transformation is a linear transformation on a homogeneous 3-vectors represented by a non-singular $3 \times 3$ matrix:

$$
\left[
\begin{array}{c}
x'_1 \\
x'_2 \\
x'_3
\end{array}
\right]
=
\left[
\begin{array}{ccc}
h_{11} & h_{12} & h_{13} \\
h_{21} & h_{22} & h_{23} \\
h_{31} & h_{32} & h_{33} \\
\end{array}
\right]
\left[
\begin{array}{c}
x_1 \\
x_2 \\
x_3
\end{array}
\right],
$$

or more briefly, $\mathbf{x}' = \mathbf{H} \mathbf{x}$. Note that the matrix $\mathbf{H}$ may be changed by multiplication by an arbitrary non-zero scale factor without altering the projective transformation. Consequently, we say that $\mathbf{H}$ is a homogeneous matrix, since as in the homogeneous representation of a point, only the ratio of the matrix elements is significant. There are eight independent ratios amongst the nine elements of the homography matrix, and it follows that a projective transformation has 8 DOF. Figure 1 shows a projectivity.

<figure markdown>
  ![projective_transformation](/assets/images/computer_vision/light/projective_transformation.png#only-light){ width="600" }
  ![stereo_correspondence](/assets/images/computer_vision/dark/projective_transformation.png#only-dark){ width="600" }
  <projective_transformation>Figure 1 Projective transformation (Hartley, p34)</figcaption>
</figure>

If both planes in Figure 1 are using Euclidean coordinate system, then it is called **perspectivity** and the DOF can be reduced to 6.

## Computing Homography - Direct Linear Transfromation (DLT)

Projective transformation has 8 DOF. We'd need four pairs of points since each pair would provide two linear equations. Let the inhomogeneous coordinates of a pair of matching points $\mathbf{x}$ and $\mathbf{x}'$ in the world and image plane be $(x, y)$ and $(x', y')$ respectively. We have:

$$
\left[
\begin{array}{c}
x' \\
y' \\
1
\end{array}
\right] =
\left[
\begin{array}{ccc}
h_{11} & h_{12} & h_{13} \\
h_{21} & h_{22} & h_{23} \\
h_{31} & h_{32} & h_{33} \\
\end{array}
\right]
\left[
\begin{array}{c}
x \\
y \\
1
\end{array}
\right],
$$

or equivalently, in inhomogeneous form:

$$
\begin{align}
x' & = \frac{x'_1}{x'_3} = \frac{h_{11} x + h_{12} y + h_{13}}{h_{31}x + h_{32} y + h_{33}} \\
y' & = \frac{x'_2}{x'_3} = \frac{h_{21} x + h_{22} y + h_{23}}{h_{31}x + h_{32} y + h_{33}}.
\end{align}
$$

In practice, we can set $h_{33} = 1$. Rearranging it yields to:

$$
\begin{align}
h_{11} x + h_{12}y + h_{13} - h_{31}x x' - h_{32} yx' = x' \\
h_{21}x + h_{22}y + h_{23} - h_{31} x y' - h_{32} y y' = y'.
\end{align}
$$

Let $\mathbf{h}$ be the flattened column vector of $\mathbf{H}$:

$$
\mathbf{h} = \left[ \begin{array}{ccccccccc} h_{11} & h_{12} & h_{13} & h_{21} & h_{22} & h_{23} & h_{31} & h_{32} \end{array} \right]^T,
$$

Then we have:

$$
\left[
\begin{array}{cccccccc}
x & y & 1 & 0 & 0 & 0 & -x x' & -yx' \\
0 & 0 & 0 & x & y & 1 & -xy' & -y y'
\end{array}
\right] \mathbf{h}
=
\left[
\begin{array}{c}
x' \\
y'
\end{array}
\right].
$$

Four point correspondences lead to eight such linear equations in the entries of $\mathbf{H}$, which are sufficient to solve for $\mathbf{H}$. Note that the four points must be in "general position", which means that no three are collinear.

## Projective Transformation Specializations

### Translation

Translation preserves lengths, areas, angles, orientation, and lines. Translation is represented as:

$$
\left[
\begin{array}{c}
x' \\
y' \\
1
\end{array}
\right]
=
\left[
\begin{array}{ccc}
\mathbf{I} & \mathbf{t} \\
\mathbf{0}^T & 1
\end{array}
\right]
\left[
\begin{array}{c}
x \\
y \\
1
\end{array}
\right].
$$

### Euclidean Transform

Euclidean transformation is represented as:

$$
\left[
\begin{array}{c}
x' \\
y' \\
1
\end{array}
\right]
=
\left[
\begin{array}{cc}
\mathbf{R} & \mathbf{t} \\
\mathbf{0}^T & 1
\end{array}
\right]
\left[
\begin{array}{c}
x \\
y \\
1
\end{array}
\right].
$$

Rotation preserves lengths, areas, angles, and lines.

### Similarity Transform

Similarity is a combination of translation, rotation, and scaling. It is represented as:

$$
\left[
\begin{array}{c}
x' \\
y' \\
1
\end{array}
\right]
=
\left[
\begin{array}{cc}
s\mathbf{R} & \mathbf{t} \\
\mathbf{0}^T & 1
\end{array}
\right]
\left[
\begin{array}{c}
x \\
y \\
1
\end{array}
\right],
$$

where $s$ is the isotropic scaling. Similarity preserves ratios of areas, angles, and lines.

### Affine Transformation

An affine transformation is a non-singular linear transformation followed by a translation. It has the matrix representation:

$$
\left[
\begin{array}{c}
x' \\
y' \\
1
\end{array}
\right]
=
\left[
\begin{array}{cc}
\mathbf{A} & \mathbf{t} \\
\mathbf{0}^T & 1
\end{array}
\right]
\left[
\begin{array}{c}
x \\
y \\
1
\end{array}
\right].
$$

Affine transformation preserves parallel lines, ratio of areas, and lines.

## Example - 3D Planar and 2D Image

Consider a plane with four marker points as shown in Figure 2.

<figure markdown>
  ![homography_example_1](/assets/images/computer_vision/light/homography_example_1.png#only-light){ width="400" }
  ![homography_example_1](/assets/images/computer_vision/dark/homography_example_1.png#only-dark){ width="400" }
  <projective_transformation>Figure 2 Base planar wall</figcaption>
</figure>

Assume that the four marker points are known (e.g., can be computed using Harris corner detection or template matching etc.). The four marker points' coordinates are given as $(105, 84)$ for top-left, $(100, 677)$ for bottom-left, $(943, 207)$ for top-right, and $(932, 557)$ for bottom-right. We are interested in placing a custom image in the rectangular region defined by the four marker points. The image to be placed is shown in Figure 3.

<figure markdown>
  ![homography_example_2](/assets/images/computer_vision/light/homography_example_2.png#only-light){ width="400" }
  ![homography_example_2](/assets/images/computer_vision/dark/homography_example_2.png#only-dark){ width="400" }
  <projective_transformation>Figure 3 Image to be warped and placed</figcaption>
</figure>

The four corner points of the image placed can directly be extracted from its dimension and is given as $(0, 0)$ for top-left, $(0, 557)$ for bottom-left, $(907, 0)$ for top-right, and $(907, 557)$ for bottom-right.

The homography can be solved directly since we have eight unknowns and four pairs of points.

``` python
def compute_homography(src_points, dst_points):
    """Solves for and returns a perspective transform.

    Each source and corresponding destination point must be at the
    same index in the lists.

    Args:
        src_points (list): List of four (x,y) source points.
        dst_points (list): List of four (x,y) destination points.

    Returns:
        numpy.array: 3 by 3 homography matrix of floating point values.
    """

    # Note here that the src_points is the image to be warped and placed
    # and the dst_points is the wall

    # h = [a, b, c, d, e, f, g, h, i].T

    A_matrix = np.empty([0, 9], dtype=np.float32)

    for src_point, dst_point in zip(src_points, dst_points):

        row = np.array([src_point[0], src_point[1], 1, 0, 0, 0, -src_point[0] * dst_point[0], -dst_point[0] * src_point[1], -dst_point[0]])
        A_matrix = np.vstack([A_matrix, row])
        row = np.array([0, 0, 0, src_point[0], src_point[1], 1, -src_point[0] * dst_point[1], -src_point[1] * dst_point[1], -dst_point[1]])
        A_matrix = np.vstack([A_matrix, row])
    
    # Using SVD
    # A = UDV^T where D is diagonal and U and V are orthogonal matrices
    U, D, Vh = np.linalg.svd(A_matrix, full_matrices=True)

    # h_vec is the last column of V
    V = Vh.transpose()
    h_vec = V[:, -1]

    homography_matrix = np.zeros([3, 3], dtype=np.float32)

    homography_matrix[0][0] = h_vec[0]
    homography_matrix[0][1] = h_vec[1]
    homography_matrix[0][2] = h_vec[2]
    homography_matrix[1][0] = h_vec[3]
    homography_matrix[1][1] = h_vec[4]
    homography_matrix[1][2] = h_vec[5]
    homography_matrix[2][0] = h_vec[6]
    homography_matrix[2][1] = h_vec[7]
    homography_matrix[2][2] = h_vec[8]

    return homography_matrix
```

We do an inverse wrapping such that homography will be a transformation from the image to be warped and placed to the wall.

``` python
def project_imageA_onto_imageB(imageA, imageB, homography):
    """Projects imageA into the marked area in imageB.

    Using the four markers in imageB, project imageA into the marked area.

    Use your find_markers method to find the corners.

    Args:
        imageA (numpy.array): image array of uint8 values.
        imageB (numpy.array: image array of uint8 values.
        homography (numpy.array): Transformation matrix, 3 x 3.

    Returns:
        numpy.array: combined image
    """
    imageB_temp = np.copy(imageB)

    ## Remapping from dst->src
    #Find inverse of the homography
    homography_inv = np.linalg.inv(homography)

    # We know that, p = H^(-1) p' where p' is the pixel location in destination, i.e., imageB
    x_max, y_max = imageB.shape[1], imageB.shape[0]
    ind_y, ind_x = np.indices((y_max, x_max), dtype=np.float32)
    lin_homg_ind = np.array([ind_x.ravel(), ind_y.ravel(), np.ones_like(ind_x).ravel()])

    # Do inverse homography transform, i.e., dst->src
    map_ind = homography_inv.dot(lin_homg_ind)

    # Find non-homogeneous coordinates
    map_x, map_y = map_ind[:-1] / map_ind[-1]
    map_x = map_x.reshape(y_max, x_max).astype(np.float32)
    map_y = map_y.reshape(y_max, x_max).astype(np.float32)

    # Remap
    dst = cv2.remap(imageA, map_x, map_y, cv2.INTER_LINEAR, imageB, cv2.BORDER_TRANSPARENT)
    return dst
```

The final result is shown in Figure 4.

<figure markdown>
  ![homography_example_3](/assets/images/computer_vision/light/homography_example_3.png#only-light){ width="400" }
  ![homography_example_3](/assets/images/computer_vision/dark/homography_example_3.png#only-dark){ width="400" }
  <projective_transformation>Figure 3 Image after it is placed</figcaption>
</figure>