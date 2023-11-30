# ORB

## Definition

Oriented FAST and Rotated BRIEF (ORB) solves the problem that the FAST detector does not have descriptors and uses the extremely fast binary descriptor BRIEF. It composes of two parts: **ORB key points** and **ORB descriptor**. The extraction of ORB features consists of two steps:

1. **FAST corner point extraction**

    Find the corner points in the image. Compared to the original FAST, the main direction of the feature points are calculated in ORB, making the subsequent BRIEF descriptor rotation-invariant.

2. **Binary Robust Independent Elementary Feature (BRIEF) descriptor**

    Describe the surrounding image area where the feature points were extracted in the previous step. ORB has made some improvements to BRIEF, mainly referring to utilizing the previously calculated direction.

## FAST Key Point and Oriented FAST

FAST detects the local grayscale changes and is known for its fast speed. If a pixel is very different from the neighboring pixels (either too bright or too dark), it is more likely to be a corner point. FAST procedure is as follows:

!!! cnote "FAST Key Point Algorithm"

    1. Select pixel $p$ in the image. Denote its intensity as $I_p$.
    2. Select a threshold $T$ (for example, 20\% of $I_p$).
    3. Take the pixel $p$ as the center and select 16 pixels on a circle with a radius of 3.   
    4. If there are $N$ consecutive points on the selected circle whose intensity is greater than $I_p + T$ or less than $I_p - T$, then the central pixel $p$ can be considered a feature point. $N$ usually takes 12, which is FAST-12.  
    5. Iterative through 1-4 on each pixel.

For speed up, the intensity of the 1, 5, 9, and 13 pixels on the circle can be checked to quickly exclude many pixels that are not corner points. Furthermore, the original FAST corners are often clustered, meaning a lot of FAST corners may be present in the same area. Hence, non-maximal suppresion is often required.

FAST corner points do not include direction information and has scaling problem. ORB adds the secription of scale and rotation. The scale invariance is achieved by the image pyramid. The rotation of features is realized by the intensity centroid method.

!!! cnote "Intensity Centroid Method"

    1. In a small image block $B$, define the moment of the image block as:

        $$
        m_{pq} = \sum_{x, y \in B} x^p y^q I(x, y), \quad p, q = \left\{0, 1 \right\}.
        $$

    2. Calculate the centroid of the image block by the moment:

        $$
        C = \left(\frac{m_{10}}{m_{00}}, \frac{m_{01}}{m_{00}} \right).
        $$

    3. Connect the geometric center $O$ and the centroid $C$ of the image block to get a direction vector $\overrightarrow{OC}$, so the direction of the feature point can be defined as:

        $$
        \theta = \arctan(m_{01} / m_{10}).
        $$

This improved FAST is called **oriented FAST** in ORB.

## BRIEF Descriptor

BRIEF is a binary descriptor. Its description vector consists of many zeroes and ones, which encode the size relationship between two random pixels near the key point (such as $p$ and $q$). If $p$ is greater than $q$, then take 1, otherwise take 0. BRIEF descriptor does not have rotation invariance. The ORB calculates the direction of the key points in the FAST feature corner point extraction stage. The direction information can be used to calculate the Steer BRIEF feature after the rotation so that the ORB descriptor has better rotation invariance.

## Example ORB Features

Figure 1 shows the two views of the same setup along with their ORB features and matched features.

<figure markdown>
  ![orb_feature_matching](/assets/images/computer_vision/light/orb_feature_matching.png#only-light){ width="800" }
  ![orb_feature_matching](/assets/images/computer_vision/dark/orb_feature_matching.png#only-dark){ width="800" }
  <figcaption>Figure 1 ORB Feature Matching</figcaption>
</figure>

=== "OpenCV"

    ``` python linenums="1"
    import numpy as np
    import cv2 as cv
    from matplotlib import pyplot as plt

    img_1 = cv.imread("1.png", cv.IMREAD_GRAYSCALE)
    img_2 = cv.imread("2.png", cv.IMREAD_GRAYSCALE)

    # Initiate ORB detector
    orb_1 = cv.ORB_create()
    orb_2 = cv.ORB_create()

    # Find the ORB keypoints
    kp_1 = orb_1.detect(img_1, None)
    kp_2 = orb_2.detect(img_2, None)

    # Compute the ORB descriptors
    kp_1, des_1 = orb_1.compute(img_1, kp_1)
    kp_2, des_2 = orb_2.compute(img_2, kp_2)

    # Create Brute Force Matches object
    bf = cv.BFMatcher(cv.NORM_HAMMING, crossCheck=True)

    # Match descriptors
    matches = bf.match(des_1, des_2)

    # Sort them in the order of their distnace
    matches = sorted(matches, key = lambda x : x.distance)


    # Draw only the keypoints location, not size and orientation
    img_1_orb = cv.drawKeypoints(img_1, kp_1, None, color=(0, 255, 0), flags = 0)
    img_2_orb = cv.drawKeypoints(img_2, kp_2, None, color=(0, 255, 0), flags = 0)

    # Draw the first 50 matches
    img_3 = cv.drawMatches(img_1, kp_1, img_2, kp_2, matches[:50], None, flags=cv.DrawMatchesFlags_NOT_DRAW_SINGLE_POINTS)


    plt.subplot(2, 2, 1)
    plt.imshow(img_1_orb)

    plt.subplot(2, 2, 2)
    plt.imshow(img_1_orb)

    plt.subplot(2, 1, 2)
    plt.imshow(img_3)

    plt.savefig("orb_features.png", bbox_inches="tight", dpi=1000)
    ```
