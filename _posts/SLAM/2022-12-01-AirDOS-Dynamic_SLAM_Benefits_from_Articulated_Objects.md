---
layout: post
title: "AirDOS: Dynamic SLAM Benefits from Articulated Objects"
tags: ["Computer Vision", "SLAM"]
category: ["Computer Vision"]
---

## Existing Problem

“Traditional” SLAM model assumes the world is (mostly) static: **Performance degradation and lack of robustness in dynamic world**

The actual world contains dynamic objects.

## Related Work

1. *Elimination Strategy* - Most work treated feature points on dynamic objects as outliers in pose estimation

    :+1: Fast and easy to implement

    :-1: Lost track easily in highly dynamic scene - can’t get enough static feature points to reconstruct motion / perform localization

2. *Motion Constraint* - Some work tried to estimate the pose/motion model for simple rigid objects

    :+1: Filters out the dynamic objects more accurately

    :-1: Can only keep track of simple rigid objects such as cubes, etc.

    :-1: Does not utilize the estimated pose/motion model of objects to improve SLAM quality

## Innovation in This Work

1. Utilize the motion model of dynamic objects in scene to **improve** the performance of SLAM
2. Extend the simple rigid body to **articulated rigid object**

### New Constraints on Articulated Rigid Object

1. Rigidity Constraint

    Given a rigid body $R$, the distance between some arbitrary feature point pairs $(_Rx_i, _Rx_j)$ must be constant over time.

2. Motion Constraint

    Given a rigid body $R$ and its motion model $T \in SE(3)$, then we should have $_Rx'_i = T (_Rx_i)$ for all feature point $_Rx_i$ on $R$.

### Modeling Rigidity Constraint & Motion Constraint

Graph Optimization - we represent the whole optimization problem as a graph:

* Each node (vertex) represents a variable to be estimated / optimized
* Each edge represents a measurement / constraint to be satisfied

<img src="https://markdown-img-1304853431.file.myqcloud.com/202211171533300.jpg" alt="IMG_3286" style="zoom: 33%;" />

> Note: The author uses the “constant velocity assumption” on each rigid body - each rigid body $R$ will have exactly the same transformation $T$ in time period $\Delta t$ .

## System Structure

![image-20221118111132690](https://markdown-img-1304853431.file.myqcloud.com/20221118111139.png)

### Preprocess

1. **Image segmentation** - semantic segmentation + distinguish objects with same label
2. **Human Pose Detection** - use Alpha-Pose to extract key points on human (joints in articulated rigid body model of human instance)
3. **Optical Flow Estimation** - use PWC-net estimate the movement of each human instance to obtain/verify motion model

### Tracking

1. Ego-motion estimation based on Static feature (rough estimation of new camera pose)
2. Use rough estimation of camera pose and stereo triangulation to reconstruct the human pose (rough)
3. Refine *Camera Pose* and *Object Pose* and *Static Features* jointly using Bundle Adjustment, with constraints
    1. Reprojection error
    2. Motion Constraint under Constant Motion Assumption
    3. Rigidity Constraint

## Ablation Study

Motion Constraint and Rigidity Constraint do work.

Basic SLAM + both Constraints > Basic SLAM + Motion Constraint > Basic SLAM + Rigidity Constraint

> Explanation: Motion Constraint implies Rigidity Constraint 
>
> **Question: Why do we need extra rigidity constraint then?**
>
> **If $x_i, x_j$ are on same object, and we apply the motion model $T$ to both of them, then the distance between $Tx_i$ and $Tx_j$ must be the same (?).**
