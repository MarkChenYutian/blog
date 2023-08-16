---
layout: post
title: "Deep Patch Visual Odometry"
tags: ["Computer Vision", "SLAM"]
category: ["Computer Vision"]
toc: true
draft: true
---

> This post is my notes after reading paper and source code of Deep Patch Visual Odometry (DPVO)
>
> DPVO Source Code - [princeton-vl/DPVO: Deep Patch Visual Odometry (github.com)](https://github.com/princeton-vl/DPVO)
>
> DPVO Paper - [https://arxiv.org/pdf/2208.04726.pdf](https://arxiv.org/pdf/2208.04726.pdf)

The DPVO is a differentiable, monocular visual odometry using deep learning methods to perform efficient optical flow estimation and camera pose estimation.

Comparing to DROID-SLAM, which run bundle adjustment with dense optical flow, the DPVO only sample patches of image from the input sequence and estimate the camera pose based on the trajectory of patches. This significantly lower the memory consumption and allows the system to run in up to 100 fps.

## Patch, Patch Trajectory, and Patch Graph

In DPVO, all pixels in an image patch are considered to have the same depth. This means that DPVO assumes the image patch comes from a fronto-parallel plane with respect to the frame from which it is extracted.

<img src="https://markdown-img-1304853431.file.myqcloud.com/20230524155733.jpeg" alt="d2cf30523e127fa05e6da58aca6b9dc" style="zoom: 25%;" />

The **trajectory** of a patch refers to the reprojection of patches onto all of its connected frames.

The **Patch Graph** is a bipartite graph that connects patches and up to $2r$ frames, where $r$ is a hyperparameter of the system. A vertex in the patch graph can be either a patch or a frame.

When a patch is extracted from a frame, it is automatically connected to $r$ previous frames. It is also connected to the next $r$ frames when they arrive.

## Architecture (1) - Feature and Patch Extractor

Two residual networks are used to extract features from the input image - one network extracts **instance feature** while the other extracts **context feature**. Two networks have same architecture (`BasicEncoder4` in `./dpvo/extractor.py`), but the network extracting matching features has [instance normalization](https://pytorch.org/docs/stable/generated/torch.nn.InstanceNorm2d.html), while the context feature network does not.

Instance feature extractor will generate a feature map of with $128$ dimension while the Context feature extractor will generate a feature map with $384$ dimension.

The feature map of instance feature extractor will then be used to generate a feature pyramid with two levels - full-resolution and $1/4$ resolution.

<img src="https://markdown-img-1304853431.file.myqcloud.com/20230524153734.jpg" alt="171bcbf00df01f32be6d9f3840d89ba" style="zoom: 15%;" />

## Architecture (2) - Update Operator

### Correlation

This component calculates the correlation between a patch and the estimated reprojection result on connected frame. For a patch with size of $p \times p$, a 4D correlation volume will be generated with shape of $7 \times 7 \times p \times p$.

<img src="https://markdown-img-1304853431.file.myqcloud.com/20230524160657.jpg" alt="Image Result" width="200"/>

According to current pose and position estimation, we can reproject the center of patch $P$, on to some connected frame $F$ to get the reprojection center $c$.

Then we can get the $7\times 7$ grid from 

### 1D Temporal Convolution



### Soft Aggregation



### Transition



### Factor Head

