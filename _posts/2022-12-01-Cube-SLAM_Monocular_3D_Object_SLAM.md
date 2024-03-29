---
layout: post
title: "CubeSLAM: Monocular 3D Object SLAM"
tags: ["Computer Vision", "SLAM"]
category: ["Computer Vision"]
toc: true
---

## Existing Problem

**[Object SLAM]** Most existing monocular SLAM solves object detection and SLAM separately and depend on the prior object models.

Classic approach of SLAM and SfM is to track geometric features like points, lines, planes etc. Object as an important element in scene, is not well explored in SLAM.

**[Dynamic SLAM]** Dynamic features are generally discarded as outlier. However in many scene it is important to recognize & predict dynamic object's trajectory (motion model).

<!--more-->

## Related Work

**[3D Object Detection]** 

- w/ shape prior (e.g. CAD model of object to detect) - Align object by Perspective n-Point (PnP) matching
- w/o shape prior - combination of geometry & learning.

**[Object SLAM]**

* Decoupled - Object detection build upon SLAM system - only use the result point cloud generated by SLAM - May fail if SLAM can't produce high-quality map
* Coupled - Jointly optimize camera pose, objects, points and planes

**[Dynamic SLAM]**

* Most SLAM system eliminate the dynamic feature points and see them as "outlier" and relies on static background
* Some SLAM will try to detect, track, and optimize trajectory of dynamic objects to build a complete 3D map - but didn't utilize these information

## Innovation in This Work

1. Efficient, accurate and robust 3D box generation w/o prior object models
2. New method to measure cameras, objects and points
3. Showing that object detection and SLAM benefits each other
4. Utilize dynamic objects in scene to improve pose estimation

### 3D Box Proposal Generating & Scoring 

Generate 3D Box proposal based on vanishing points, omitted.

### Object in SLAM - BA Formulation & Measurement Error

Each box is represented as a $\mathbb{R}^9$ vector - representing the rotation matrix, center position, and dimension of the box.

$$
C^\star, O^\star, P^\star = argmin_{C, O, P} \sum{|e(c_i, o_j)|^2_{\sum_{ij}} + |e(c_i, p_k)|^2_{\sum_{ik}} + |e(o_j, p_k)|^2_{\sum_{jk}}}
$$

The graph optimization problem is solved by Gauss-newton or L-M algorithm.

**[Camera-Object Measurement]**  - *3D Mode* Suppose we already have some estimation of object's pose $(T_{om}, d_m)$ and an **accurate** measurement to current object (e.g. with RGBD cam), we can measure the error by defining error as a $\mathbb{R}^9$ vector containing the difference between measured object & previously estimated object's pose. ($T\in SE(3)$ is transformed into a vector in $\mathbb{R}^6$ in Lie-Algebra) 

*2D Measurement* - Otherwise (e.g. with monocular camera), Given the 2D bounding box of objects, the error is defined as the difference between center ($\mathbb{R}^2$ vector) and difference between dimension (of 2D box, $\mathbb{R}^2$ vector).

> ***Why there are two ways to measure Camera-Object error?***

**[Object-Point Measurement]** - All points on object $O$ must stay in $O$'s 3D bounding box

**[Camera-Point Measurement]** - Reprojection error as usual SLAM system

### Data Association (Feature/Object Matching)

A feature point is considered "on an object" if it is in 2D bounding box and < 1m from center of 3D bounding box.

Two objects are matched across frames if they have the most number of shared feature points between each other.

Points in overlapping area are not associated with any object.

### Dynamic Object 

Dynamic feature points are "anchored" on a dynamic object. The object is modeled using "nonholonomic wheel model" - roll/pitch = 0 and we can represent car's motion using only velocity and yaw.

When matching features across dynamic objects, we predict where we expect to see the feature point and do local search around the expected position.
