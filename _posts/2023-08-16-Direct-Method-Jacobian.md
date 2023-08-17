---
layout: post
title: "Direct Method SLAM - Jacobian Formulation"
tags: ["Machine Learning", "SLAM"]
category: ["Computer Vision"]
---

<!-- # Direct Method SLAM - Jacobian Formulation -->

> This post is mainly a re-formulation and detailed expansion for the section 8.4, "Direct Method" in ["14 lectures on Visual SLAM"](https://github.com/gaoxiang12/slambook-en).
> 
> When I was working on direct method SLAM, I found the notations used on the book is hard to understand and many details to derive the final equation are omitted. Hence, I wrote this post as a note and record for my own derivation of the Jacobian in Direct Method of SLAM.

<!--more-->

## Coordinate System and Symbol Table

**Assumption**

Cam1 and Cam2 have same intrinsic matrix $K$ and are pinhole camera with no distortion (or distortion is corrected for resulting image in pre-process step).

**Coordinate System**

There are two 3D coordinate systems: the camera 1 (where optic center $O_1$ is the same as world coordinate origin) and the camera 2 (with transformation of cam1 &rarr; cam2 is $T_1^2 = \xi$)

There are two 2D coordinate systems (pixel coordinates): the image 1 and image 2. I will use uv coordinate when refer to them.

**Symbol Table**

| Symbol | Domain | Shape | Meaning |
| ------ | ------ | ----- | ------- |
| $P_i$  | $\mathbb{R}^3$ | (1, 3) |i-th point in the 3-dimentional space (under cam1 coordinate) |
| $p_{1,i}$  | $\mathbb{R}^2$ | (1, 2) | i-th point's projection on cam1's sensor plane |
| $p_{2,i}$  | $\mathbb{R}^2$ | (1, 2) | i-th point's projection on cam2's sensor plane |
| $K$    | $\mathbb{R}^{3\times 3}$ | (3, 3) | Camera intrinsic matrix |
| $\xi$  | $\mathfrak{se}(3)$ | (1, 6) | Cam2's pose w.r.t. world coordinate (cam1) |
| $I_1$  | $\mathbb{R^2} \to \mathbb{R}$ | - | Illuminance map from cam1 (w/ bilinear interpolation) |
| $I_2$  | $\mathbb{R^2} \to \mathbb{R}$ | - | Illuminance map from cam2 (w/ bilinear interpolation) |
| $Exp(\cdot)$ | $\mathfrak{se}(3) \to \mathbb{R}^{4\times 4}$ | - | vector to matrix + Exponential Mapping (Lie Algebra &rarr; Transformation Matrix) |
| $Log(\cdot)$ | $\mathbb{R}^{4\times 4} \to \mathfrak{se}(3)$ | - | Logarithm Mapping + Matrix to vector (Transformation Matrix &rarr; Lie Algebra)  |
| $exp(\cdot)$ | $\mathfrak{se}(3) \to SE(3)$ | - | Exponential Mapping (Lie Algebra &rarr; Lie Group) |
| $\cdot^\wedge$ | $\mathbb{R}^{6}\to \mathbb{R}^{4\times 4}$ | - | $\mathfrak{se}(3)$ vector representation to matrix representation |
| $\tilde{\cdot}$ | - | - | Homogenous coordinate system |

*Unless explicitly specified, all the coordinates are represented under heterogeneous coordinate.*

## Step 1. Reprojection Model

According to the pinhole camera model, we have $\tilde{p_{1, i}} = KP_i$ and 
$\tilde{p_{2, i}} = K(Exp(\xi)\tilde{P_i})_{1:3}$.

By converting homogenous coordinate to heterogeneous coordinate, we can retrieve the $p_{1, i}$ and $p_{2, i}$ from $\xi$ and $K$.

## Step 2. Photometric Error as Model Residual

In direct method, we **do not** do feature point matching as this process (extracting feature point, convert to feature descriptor, run descriptor matching with or without epipolar geo constraint) is computationally heavy and error-prone.

Instead, we use the "illuminance consistency assumption". That is, between two camera frames $t$ and $t + 1$, the illuminance of a point in 3D space should be consistent. That is, 

$$
I_t(P) = I_{t + 1}(P)
$$

Naturally, the photometric error is the difference in illuminance between same point in 2 adjacent frames.

$$
e_i(\xi) = \left(I_1(p_{1, i}) - I_2(p_{2, i})\right)^2
$$

Direct SLAM make use of this assumption heavily. In the bundle adjustment process, we define the total residual of current state estimation as:

$$
\mathbf{R}(\xi) = \sum_{i = 1}^N{e_i(\xi)} = \sum_{i = 1}^N{\left(I_1(p_{1, i}) - I_2(p_{2, i})\right)^2}
$$

## Step 3. Optimization Problem Formulation

During the (local) bundle adjustment stage, we want to optimize the pose of cam2, namely $\xi \in \mathfrak{se}(3)$, to minimize the residual of state estimation. The mathematical formulation of this optimization problem is:

$$\begin{aligned}
\xi^\star &= \arg\min_{\xi}{\mathbf{R}(\xi)}\\
    &= \arg\min_{\xi}{\sum_{i = 1}^N{e_i(\xi)}}\\
    &= \arg\min_{\xi}{\sum_{i = 1}^N{\|I_1(p_{1, i}) - I_2(p_{2, i})\|_2^2}}\\
    &= \arg\min_{\xi}{\sum_{i = 1}^N{\|I_1(KP_i) - I_2(K(Exp(\xi)\tilde{P_i})_{1:3}\|_2^2}}
\end{aligned}$$

## Step 4. Perturbation Model and Jacobian for Direct Method

To solve this optimization problem, we can use optimizers like Gauss-Newton or Lagrange-Marquadt. These optimizers typically requires us to provide the jacobian of model. Hence, we need to derive the jacobian $\mathbf{J}$ for cam2 pose $\xi$ w.r.t. $\mathbf{R}$. Since $\mathbf{R}$ is a simple summation from $e_i(\xi)$, we will only derive $\partial e_i(\xi) / \partial \xi$ here.

To calculate the jacobian of $\mathbf{R}$ w.r.t. $\xi$, there are two main methods: the direct differentiation and perturbation model.

**Direct Differentiation** (which, we will not use)

$$\begin{aligned}
\frac{\partial e_i(\xi)}{\partial \xi} &= \lim_{\delta\xi \to 0}\frac{e_i(\xi \oplus \delta\xi) - e_i(\xi)}{\delta\xi}\\
&= \lim_{\delta\xi\to 0}{\frac{\|I(KP_i) - I_2(K(Exp(\xi\oplus\delta\xi)\tilde{P_i})_{1:3})\|_2^2 - e_i(\xi)}{\delta\xi}}
\end{aligned}$$

However, we have $\xi\oplus\delta\xi \neq Log(Exp(\xi)Exp(\delta\xi))$ in Lie algebra. Instead, we need to follow the [BCH formula](https://en.wikipedia.org/wiki/Baker%E2%80%93Campbell%E2%80%93Hausdorff_formula) with first-order approximation (when $\delta\xi$ is sufficiently small)

$$
Log(Exp(\delta\xi)Exp(\xi)) \approx \mathbf{J}_l(\xi)^{-1}\delta\xi + \xi
$$

However, using BCH formula requires us to calculate the $\mathbf{J}_l$, which is undesired due to its computation complexity. Hence, we will use the perturbation model to calculate the differentiation instead.

**Perturbation Model**

Comparing to the direct differentiation, where BCH formula is required, perturbation model *first* add a small perturbation on target function $e_i$, then calculate the derivative of residual w.r.t. *the perturbation term*.

That is, we will calculate $\frac{\partial e_i(\xi \oplus \delta\xi)}{\partial \delta\xi}$ instead of $\frac{\partial e_i(\xi)}{\partial \xi}$.

First, we will derive $e_i(\xi \oplus \delta\xi)$ (using left-perturbation, the result is different from right-perturbation).

$$\begin{aligned}
e_i(\xi\oplus\delta\xi) &= I_1(KP_i) - I_2(K(Exp(\delta\xi)Exp(\xi)\tilde{P_i})_{1:3})\\
\end{aligned}$$

The taylor expansion for $Exp(\delta \xi)$ is of form

$$
Exp(\delta\xi) = exp(\delta\xi^\wedge) = \sum_{n = 0}^\infty{\frac{1}{n!}(\delta\xi^\wedge)^n}
$$

Using a first-order taylor approximation here (should be accurate as $\delta\xi$ is a minute perturbation term), we have

$$
Exp(\delta\xi) \approx 1 + \delta\xi^\wedge
$$

Then, we have

$$\begin{aligned}
e_i(\xi\oplus\delta\xi) &= I_1(KP_i) - I_2(K(Exp(\delta\xi)Exp(\xi)\tilde{P}_i)_{1:3})\\
    &\approx I_1(KP_i) - I_2(K((1 + \delta\xi^\wedge)Exp(\xi)\tilde{P}_i)_{1:3}) \\
    &= I_1(KP_i) - I_2(K(Exp(\xi)\tilde{P}_i)_{1:3} + K(\delta\xi^\wedge Exp(\xi)\tilde{P}_i)_{1:3})
\end{aligned}$$

Then we apply another first-order taylor approximation

$$\begin{aligned}
&\phantom{\approx}I_2(K(Exp(\xi)\tilde{P}_i)_{1:3} + K(\delta\xi^\wedge Exp(\xi)\tilde{P}_i)_{1:3}) \\
&\approx I_2(K(Exp(\xi)\tilde{P}_i)_{1:3}) + \frac{\partial I_2(p_2)}{\partial p_2} \frac{\partial p_2}{\partial \xi} \delta\xi
\end{aligned}$$

And we have the fully expanded form of $e(\xi\oplus\delta\xi)$

$$
e(\xi \oplus \delta\xi) = I_1(KP_i) - \left(I_2(K(Exp(\delta\xi)Exp(\xi)P_i)_{1:3}) + \frac{\partial I_2(p_2)}{\partial p_2} \frac{\partial p_2}{\partial \xi} \delta\xi \right)
$$

where we can derive the derivative under left perturbation

$$
\frac{\partial e(\xi \oplus \delta\xi)}{\partial \delta\xi} \approx -\frac{\partial I_2(p_2)}{\partial p_2}\frac{\partial p_2}{\partial \xi}
$$
