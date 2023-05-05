---
layout: post
title: Why Functional Programming Matters
tags: [Notes, Random]
category: ["Notes"]
banner: "/assets/images/banners/whyFPMatters.png"
toc: true
---

> This is the notes I wrote when reading paper - *Why Functional Programming Matters*, John Hughes, “*Research Topics in Functional Programming*”, pp 17-42.

Functional Programming is so called because its fundamental operation is the application of functions to arguments.

## Characteristics of Functional Programs

<!--more-->

* There’s no assignment statements, so variables will never change once given a value.
* Functional programs contain no side-effects at all.
    * Order of execution does not matter.
    * Therefore, one can replace variables by their values and vice versa - that is, programs are “referentially transparent”.

Yet, the argument above only mentions what functional program “is *not*”. Below of this paper will focus on **what good can function programming actually provides to programmers**.

## Programming Better: Modularity

Making program in a modular way have two straight-forward benefits:

1. Small modules can be coded quickly and nicely
2. General-purpose modules can be reused, leading to faster development of subsequent programs.
3. Modules of a program can be tested independently, reducing the work of testing

When writing a modular program to solve problem, people first divide problem into subproblems, then solve them saparately, then combine the solutions.

> The ways in which one can divide up the original problem depend directly on the ways in which one can glue solutions together.

**Functional Programming provides two new kinds of glue**, thus making it easier to write modular programs.

## How Functional Programming Provides Better Support to Modularity?

### Gluing Functions Together - Higher Order Function

To show how higher order functions works, we begin a simple example of adding up all elements in a `list`. Suppose we have a `listof *` datatype defined as:

```
listof * ::= Nil | Cons * (listof *)
```

* An empty list is defined as `Nil`
* A list is defined by the first element of type `*` and its subsequent elements in another `list`.

```
[] => Nil
[1] => Cons(1, Nil)
[1, 2] => Cons(1, Cons(2, Nil))
...
```

Then we can have function `sum` defined as follow:

```
sum (Nil) = 0
sum (Cons(n, list)) = n + sum(list)
```

In the definition above, only the constant `0` and `+` operators are specific to computing a sum.

Therefore, we can abstract the action to traverse through the list as a new function called `foldr`. In this way, we can express the `sum` as 

```
sum = foldr(+, 0)
```

Where `foldr` is defined as

```
foldr(f, x)(Nil) = x
foldr(f, x)(Cons(a, l)) = f(a, foldr(f, x)(l))
```

Using similar way, we can quickly construct other functions that need to traverse the list:

```
product = foldr(*, 1)
anytrue = foldr(or, False)
alltrue = foldr(and, True)
```

All these can be achieved since functional language allow functions that are indivisible in conventional programming languages to be expressed as a combination of parts - **a general higher-order function and some particular specializing functions**.

Once the higher-order function is defined, many specific operations can be programmeed very easily.

### Gluing Programs Together - Lazy Evaluation

As described before, a complete functional program is just a function from its input to its output. If $f$ and $g$ are such programs, then $g\cdot f$ is a program that when applied with some input $input$, computes
$$
g(f(input))
$$
In conventional language, this can be done by storing the results of $f$ into temporary files. In some situation, tramendous amount of temporary files will be created, making it impossible to combine programs in this way.

The functional programming, however, provides a solution to this problem

$f$ and $g$ will run in strict synchronization, $f$ will be executed only when $g$ tries to read some input, and runs only long enough to deliver the output $g$ is trying to read. Then, $f$ suspends until $g$ requires next input.

Since this method of evaluation executes $f$ as little as possible, it is also called **lazy evaluation**.

This feature can’t be implemented in other non-functional langauges, since lazy evaluation need programmers give up the direct control over the order in which parts the program are executed.
