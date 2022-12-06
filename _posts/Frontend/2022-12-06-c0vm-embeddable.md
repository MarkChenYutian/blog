---
layout: post
title: "C0VM.ts: C0 Visualizer on the cloud"
tags: ["Web", "React"]
category: ["Frontend"]
banner: "/assets/images/banners/C0VM_banner.jpg"
---

## What is C0 Language

The programming language C0 is a carefully crafted subset of the C aimed at teaching introductory algorithms and imperative programming. It is used in **15-122 Principles of Imperative Programming** and **15-411 Compiler Design** by more than 600 students each semester.

## About This Project

This project is my project for Summer Undergraduate Research Fellowship (SURF) in CMU. More importantly, it's an attempt to improve students' 15-122 learning experience.

By employing various visualization and front-end technology, we make it possible to execute and visualize C0 Language on any device with modern browser. This project also allows instructors of 15-122 to embed runnable code exerciese in Learning Material System (LMS) like Canvas or Diderot thus creating a more interactive learning environment.

## Live Demo

Try copy the following C0 code segment into the *Code Editor* then hit Compile & Run to see the result!

```c
#use <conio>

int main() {
    int*[] A = alloc_array(int*, 4);
    A[1] = alloc(int);
    *A[1] = 2;
    printf("The value @ A[1] is a pointer pointing to %d", *A[1]);
    return 0;
}
```

You can also set breakpoint on **Line 8** by clicking on the left of line number. A red dot 🔴 will appear if the breakpoint is set successfully.

<iframe 
    src  ="https://visualc0.tk" 
    width="100%" 
    style="border:1px solid silver; height:80vh; border-radius: .3rem;"
    title="C0 Visualizer Demo"
>
</iframe>

## Main Features

![Slide2](https://user-images.githubusercontent.com/47029019/188786107-2c936dd6-f0c8-4102-9e97-f93d9c37dd39.png)
![Slide3](https://user-images.githubusercontent.com/47029019/188786109-3a2f0b60-d1ed-4edd-a8c8-74effcd206e2.png)
![Slide4](https://user-images.githubusercontent.com/47029019/188786411-43c66821-0f21-434f-a270-c0f500c5f5d2.png)
![Slide5](https://user-images.githubusercontent.com/47029019/188787516-47821a85-5cd3-4394-9b8a-318138442aa0.png)
