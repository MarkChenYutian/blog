---
layout: post
title: On the principles of Parsimony and Self-consistency for the Emergence of Intelligence
tags: [ "Machine Learning", "Notes" ]
category: [ "Machine Learning" ]
banner: "/assets/images/banners/NeuralNetworkBackground.jpg"
toc: true
---

> This post is the notes I wrote when reading paper *On the principle of Parsimony and Self-consistency for the Emergence of Intelligence* [arXiv Link](https://arxiv.org/abs/2207.04630).

## Context and Motivation

### Key features of Intelligence Agent

For an autonomous intelligence agent to survive and function in complex world, it must **efficiently** and **effectively** learn models that reflect both its past experience and the current environment being perceived.

That is, it must be able to:

1. Utilize knowledge from past experience 
2. Reflect on immediate sensory inputs (new perception)

<!--more-->

### Problem with "Brute-force" Machine Learning

Research in neural science suggests that **structured model**[^1] is the key for brain's efficiency and effectiveness in perceiving, predicting and making intelligent decisions.

However, currently most artificial intelligence relies on training "tried-and-tested" models with largely **homogeneous structures** using **brute-force engineering approach**. Such approach has lead to many problems in current machine learning systems:

1. Lack of richness in final learned representations due to **Neural Collapse**[^2]

    Specifically, Neural Collapse refers to a series of phenomenon occurs in the *Terminal Phase of Training* (TPT)[^3] of neural network:

    * Variability Collapse: Within-class variation of activations become negligible - the activation value neurons on last layer converges to their class-means
    * Simplification to Nearest Class-Center: The network classifier converges to choosing whichever class has the nearest train class-mean in Euclidean distance.
    * ... (see original paper[^2] for the other two Neural Collapse phenomenon)

2. Lack of stability in training due to **Mode Collapse**[^4]

3. Lack of adaptiveness and susceptibility due to **Catastrophic Forgetting**[^5]

4. Lack of robustness to deformations or adversarial attacks

### Two Fundamental Principles in Intelligent System

This paper introduce two fundamental principles: *Parsimony* and *Self-consistency* that can govern the function of any intelligent system, artificial or natural.

These two principles respectively aim to answer two fundamental questions about following:

1. What to learn - what is the objective for learning from data and how can it be measured
2. How to learn - how can we achieve such an objective via efficient and effective computation.

<figure>
    <img src="https://markdown-img-1304853431.file.myqcloud.com/20220731225118.jpg"/>
    <figcaption>Fig 1. How Two Principles of Intelligent System Interact</figcaption>
</figure>

The answers of these two questions are somehow straight forward:

1. What to learn

    The answer to this question fall into **information/coding theory**. We want to accurately quantify and measure the information of data and then seek the most compact representations of the information.

2. How to learn

    The answer to this question falls into **Control/game theory**. These theories provides universal effective computational framework (i.e. closed-loop feedback system) for achieving any measurable objective consistently.

## Principle of Parsimony

> **The Principle of Parsimony**: The objective of learning for an intelligent system is to identify low-dimensional structures in observations of the external world and reorganize them in the most *compact and structured* way.

Intelligence would be impossible without this principle: If observations of the external world had no low-dimensional structures, there would be nothing worth learning or memorizing!

### Parsimony != Most Compressed Representation

While the principle of parsimony do mention the importance of extracting low-dimensional, compact structure from external world, this does not mean the intelligent system should ever achieve the "best possible compression".

There is no point of an intelligent system to achieve the Shannon compression limit for internal representation of external world data. Such compression itself will be extremely expensive (if it is ever possible) and doesn't bring any benefit for the intelligent agent itself.

Instead, intelligent agents should pursue a **compact and structured** internal representation.

* Compact - means economic to store
* Structured - means efficient to access

### Modeling Parsimony in Machine Learning

Let $x$ denote the input sensory data (say an image), and $z$ as its internal representation. The sensory data sample $x$ is typically high-dimensional[^6] but has low-dimensional intrinsic structures.

Under this perspective, the purpose of learning is to establish a mapping $f$ with parameter $\theta$ in parametric family $\Theta$, from $\mathbb{R}^D$ to a much lower dimensional representation $z\in \mathbb{R}^d$, that is:


$$
x\in \mathbb{R}^D \xrightarrow{f(x, \theta)} z\in \mathbb{R}^d
$$


In previous paragraph (*Parsimony != Most compressed representation*), we mentioned that the goal of learning is to learn the mapping between external world data and compact and structured internal representation. A formal definition to this principle of parsimony can be summarized as:

* **Compression**: Map high-dimensional sensory data $x$ to low dimensional representation $z$

    Otherwise, the model (even the learning process) will be meaningless.

* **Linearization**: Map each class of object distributed on *nonlinear* submanifold to *linear* subspace.

    Since linear model are easier to extrapolate than non-linear model.

* **Sparsification**: Map different classes into subspaces with independent or maximally incoherent bases

    Sparsity of internal representation help us classify input sensory data better.

<figure>
    <img src="https://markdown-img-1304853431.file.myqcloud.com/20220802231946.jpg"/>
    <figcaption>Fig 2. Learning, as a process of mapping high-dimensional sensory data to low-dimensional and structured internal representation</figcaption>
</figure>



Such model is called a **linear discriminative representation** (LDR).

A classification model that maps input data into one-hot vectors can be seen as an LDR where target subspace is one-dimensional and orthogonal to each other.

### Quantifying Parsimony with Information Theorem

Given an LDR, we can compute the total "volume" spanned by all features on all subspaces and the sum of volumes spanned by features of each class.

The ratio between these two volumes suggests how good the LDR model is - the larger, the better. That is, we want "**The whole is maximally greater than the sum of its parts**".

<figure>
    <img src="https://markdown-img-1304853431.file.myqcloud.com/20220806112604.jpg"/>
    <figcaption>Fig 3. The higher the ratio between "total volume" and "sum of volume on each subspace" is, the sparser (better) the LDR model is.</figcaption>
</figure>

However, since subspace $S_n$ of class $n$ may not (in fact, almost certainly) have different dimension with feature space $Z$, we will need some method to compare their "volume" under same dimension.

Suppose the feature space $Z$ is filled with spheres with radius of $\varepsilon$ (these spheres are called $\varepsilon$-spheres), each with a volume of $V$. Then we can count the volume of each subspace by this method:

>  For each $\varepsilon$-sphere $P$ in $Z$
>
> * If $P \cap S_n \neq \emptyset$, then volume of $S_n$ will increment by $V$ (the volume of sphere is counted as the volume of $S_n$)

With this method, we can calculate the ratio between sum of subspaces and the feature space as a whole in this way:


$$
\frac{\sum_n{\mathrm{vol}(S_n)}}{\mathrm{vol}(Z)} = 
\frac{\sum_n{\left(\text{#}\mathrm{sphere\;in\;}S_n\right)}}{\text{#}\mathrm{sphere\;in\;}Z}
$$


Suppose we want to encode a random sample drawn from feature space $Z$ with precision $\varepsilon$, then we can encode all points in an $\varepsilon$-sphere as  same information. Then, to represent arbitrary sample drawn from $Z$ with precision of $\varepsilon$, we will need $\log_{2}{(\text{\#}\mathrm{sphere\;in\;}Z)}$ bits. This value is called the "description length" of $Z$.

Similarly, we can calculate the description length of each feature space.

The description length can also be called as the **"rate distortion"**.

### Rate Reduction of Resulted Feature Space

Let $R$ be the rate distortion of the joint distribution of all features, $Z = \langle z_1, z_2, \cdots, z_n\rangle$ of sampled data $X = \langle x^1, \cdots, x^n \rangle$ from $k$ classes. Let $R^C$ be the average rate distortion for $k$ classes.

For each class, we have a set of feature $Z_i \subseteq Z$, where $Z_1 \cup \cdots Z_k = Z$.

Then, denote $R^C$ as the average rate distortion among $k$ classes, 

$$
R^C(Z) = \frac{1}{k}\left(
    R(Z_1) + R(Z_2) + \cdots + R(Z_k)
\right)
$$

Let $R(Z)$ denote the rate distortion of all features - $Z$.

Then, we can define the *rate reduction* of resulted feature space of a neural network as 

$$
\Delta R(Z) = R(Z) - R^C(Z)
$$

The larger $\Delta R(Z)$ is, the better the feature representation $Z$ is since larger $\Delta R(Z)$ means subspaces (classes) in this feature representation is more sparse (in the best case, all subspaces should be orthogonal to each other).

> For principle of self-consistency, see the post **On the principles of Parsimony and Self-consistency for the Emergence of Intelligence (2)**!

---

## Footnotes

[^0]: *On the principles of parsimony and self-consistency for the emergence of intelligence* [link]()
[^1]: Study reveals that brain's world model is highly structured anatomically, that is, there are modular brain areas and [columnar organizations](https://neuronaldynamics.epfl.ch/online/Ch12.S1.html) in brain's biological structure.
[^2]: See [*Prevalence of Neural Collapse during the terminal phase of deep learning training*](https://arxiv.org/abs/2008.08186) by Papyan et al. 
[^3]: Terminal Phase of Training: The training process trying to pursue zero-loss after model achieves zero-error.
[^4]: Mode Collapse: In GAN training process, the generator network constantly generate very similar or even identical output to the discriminator in order to ensure it is able to "fool" the discriminator network. ([source](https://machinelearning.wtf/terms/mode-collapse/))
[^5]: Catastrophic Forgetting: Neural network completely and abruptly forget previously learned information upon learning new information ([source](https://en.wikipedia.org/wiki/Catastrophic_interference))

[^6]: An image usually have millions of pixels, meaning that $x \in \mathbb{R}^D$ where $D$ has magnitude of $10^6$.
