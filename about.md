---
layout: page
title: About Me
permalink: /about/
---

I'm Yutian Chen (陈昱天), currently a junior in Carnegie Mellon University majoring in Computer Science. My academic interest lies in the fields of *deep learning*, *computer vision* and *frontend technology*. If you'd like to learn more about me, please take a look at my <a href="/files/">resume</a>.

## Research Experience

{% 
    include fn/research-exp.html 
        avatar='assets/image/airlab.png' 
        topic='Differentiable Visual-Inertial SLAM'
        institute='AirLab, Robotics Institute'
        date='Sep 2022 - Now'
        description='            
            <p>
            Building a differentiable visual Simultaneous Localization and Mapping (SLAM) system using PyPose.
            Combining deep learning and self-supervised learning techniques into traditional SLAM system, allowing for
            self-adaptive performance and improving the robustness of traditional algorithm under challenging environment.
            </p>
        '
%}

{%
    include fn/research-exp.html
        avatar='assets/image/lti.png' 
        topic='Generated Text Detection'
        institute='Language Technology Institute'
        date='Mar 2023 - Aug 2023'
        description='
            <p>Using language models like BERT and T5 as backbone, built a GPT-generated content detector called "GPT-Sentinel". Reaches 98% accuracy on test dataset and outperform existing content detector by OpenAI and ZeroGPT. Collected a OpenGPTText dataset, a dataset contains 30k human written text from OpenWebText and its corresponding rephrased version by ChatGPT.</p>
            '
%}

{% 
    include fn/research-exp.html 
        avatar='assets/image/guangdong_cardiovescular_inst.jpg' 
        topic='Medical Image Segmentation'
        institute=' Guangdong Cardiovascular Institute'
        date='Dec 2018 - Jan 2020'
        description='
            <p>Working under <a href="https://scholar.google.com.hk/citations?hl=zh-CN&user=LrjbEkIAAAAJ">prof. Yiyu Shi</a> and <a href="https://scholar.google.com.hk/citations?user=1vVgUeQAAAAJ&hl=zh-CN">Dr. Xiaowei Xu</a>, I proposed an encoder-decoder architecture to perform semantic segmentation on cardiac MRI sequence. By introducing Temporal constraint on segmentation result, the model improved the accuracy by 2% on ACDC Dataset comparing to the baseline model.</p>
        '
%}

## Publications

{%
    include fn/publication-card.html
        title='Token Prediction as Implicit Classification to Identify LLM-Generated Text'
        pubto='EMNLP'
        year='2023'
        authors='<b>Yutian Chen</b>, Hao Kang, Vivian Zhai, Liangze Li, Rita Singh, Bhiksha Raj'
        firstauthor='true'
        arxiv='https://arxiv.org/abs/2311.08723'
%}

{%
    include fn/publication-card.html
        title='PyPose v0.6: The Imperative Programming Interface for Robotics'
        pubto='IROS'
        year='2023'
        authors='Zitong Zhan, Xiangfu Li, Qihang Li, Haonan He, Abhinav Pandey, Haitao Xiao, Yangmengfei Xu, Xiangyu Chen, Kuan Xu, Kun Cao, Zhipeng Zhao, Zihan Wang, Huan Xu, Zihang Fang, <b>Yutian Chen</b>, Wentao Wang, Xu Fang, Yi Du, Tianhao Wu, Xiao Lin, Yuheng Qiu, Fan Yang, Jingnan Shi, Shaoshu Su, Yiren Lu, Taimeng Fu, Karthik Dantu, Jiajun Wu, Lihua Xie, Marco Hutter, Luca Carlone, Sebastian Scherer, Daning Huang, Yaoyu Hu, Junyi Geng, Chen Wang'
        arxiv='https://arxiv.org/abs/2309.13035'
%}

{%
    include fn/publication-card.html
        title='GPT-Sentinel: Distinguishing Human and ChatGPT Generated Content'
        pubto='arXiv'
        year='2023'
        authors='<b>Yutian Chen</b>, Hao Kang, Vivian Zhai, Liangze Li, Rita Singh, Bhiksha Raj'
        arxiv='https://arxiv.org/abs/2305.07969'
        firstauthor='true'
%}

{%
    include fn/publication-card.html
        title='Myocardial Segmentation of Cardiac MRI Sequences With Temporal Consistency for Coronary Artery Disease Diagnosis'
        pubto='Frontiers in Cardiovascular Medicine'
        year='2022'
        authors='<b>Yutian Chen</b>, Wen Xie, Jiawei Zhang, Hailong Qiu, Dewen Zeng, Yiyu Shi, Haiyun Yuan, Jian Zhuang, Qianjun Jia, Yanchun Zhang, Yuhao Dong, Meiping Huang, Xiaowei Xu'
        arxiv='https://arxiv.org/abs/2012.14564'
        publink='https://www.frontiersin.org/articles/10.3389/fcvm.2022.804442/full'
        firstauthor='true'
%}



## Teaching Assistant

* 2023 Fall, Carnegie Mellon University, 10-701 Introduction to Machine Learning (PhD)
* 2022 Fall, Carnegie Mellon University, 15-122 Principles of Imperative Programming


## Personal Projects

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
{%
    include fn/project-card.html
        name='C0 Visualizer on the Cloud'
        img='assets/image/c0-visualizer.png'
        rel_url='https://cs122.andrew.cmu.edu/visualc0/'
        description='
            <p>A virtual machine on browser that executes the C0 bytecode and provides visualization / debugging tools like breakpoint and memory graph.</p>
            <p>Now deployed as course infrastructure for 15-122 Principles of Imperative programming and is used by 500+ students every semester.</p>
        '
%}
{%
    include fn/project-card.html
        name='The Fences'
        img='assets/image/the-fences.png'
        rel_url='https://github.com/MarkChenYutian/TartanHack-2022'
        description='
            <p>The Fence is a place where CMU students can express their thought and ideas freely. Using webGL and webRTC, we built an online AR application that allows everyone to turn everywhere in reality into a draw board without limit.</p>
​        '
%}

</div>


## Related Courses

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">

<div class="show-corner" style="padding: 1rem; flex: 1 1 0; min-width: 17rem;" markdown=1>
**Computer Science**
<!-- - 15-122 Principles of Imperative Programming -->
<!-- - 15-150 Principles of Functional Programming -->
- 15-213 Introduction to Computer System
- 15-251 Great Ideas in Theoretical Computer Science
- 15-210 Sequential and Parallel Algorithm & Data Structure
- 15-418 Parallel Computer Architecture and Programming
- 15-451 Algorithm Design & Analysis
</div>

<div class="show-corner" style="padding: 1rem; flex: 1 1 0; min-width: 17rem;" markdown=1>
**Mathematics**
- 21-241 Matrices and Linear Transformation
- 21-259 Calculus in 3-dimension
- 21-325 Probability
- 21-373 Algebraic Structure
- 21-341 Linear Algebra
</div>

<div class="show-corner" style="padding: 1rem; flex: 1 1 0; min-width: 17rem;" markdown=1>
**Artificial Intelligence**
- 16-385 Computer Vision
- 10-701 Intro to Machine Learning (PhD)
- 11-785 Intro to Deep Learning
</div>

</div>
