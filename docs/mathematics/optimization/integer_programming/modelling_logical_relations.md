## Modelling with Binary Variables

Consider the following investment example:

1. We would like to invest in 5 assets, labelled $\left\{ 1, 2, 3, 4, 5 \right\}$.
2. We can invest only nonnegative amounts, and have a total budget of $1000 dollars. 

Let $x_j$ to denote the amount invested in asset $j$. Then we can formulate an optimization model:

$$
0 \leq x_j, \ \forall j = 1, \ldots, 5, \ \sum^5_{j = 1} x_j \leq 1000.
$$

Let $y_j$ be a binary variable which will take a value $1$ if $x_j > 0$. Then we have:

$$
0 \leq x_j \leq 1000 y_j, \ y_j \in \left\{0, 1 \right\}, \ \forall j = 1, \ldots, 5.
$$

## OR Constraint

Consider a case where we have to invest at least $100 in asset 1 **or** asset 5.
Logically, this constraint is:

$$
(x_1 \geq 100) \lor (x_5 \geq 100).
$$

Algebraically, we can write this as:

$$
x_1 \geq 100 y_1, \ x_5 \geq 100 y_2, \ y_1 + y_2 \geq 1.
$$

## XOR Constraint

Consider a case where we have to invest at least $100 in asset 1 or asset 5 but not both. 
Logically, this constraint is:

$$
(x_1 \geq 100) \oplus (x_5 \geq 100).
$$

Algebraically, we can write this as:

$$
x_1 \geq 100 y_1, \ x_5 \geq 100 y_2, \ y_1 + y_2 = 1.
$$



## Implications

Consider a case where if we invest $100 or more in asset 1, **then** we must invest $100 or more in asset 5. 
Logically, this constraint is:

$$
(x_1 \geq 100) \Rightarrow (x_5 \geq 100).
$$

Let $z$ be a binary variable that gets set to 1 if $x_1 \geq 100$. Algebraically, we can write this as:

$$
z \in \left\{ 0, 1\right\}, \ z \geq \frac{(x_1 - (100 - \epsilon))}{(900 + \epsilon)}, \ 100z \leq x_5,
$$

where $\epsilon$ is a small positive number.

## Examples

1. If $x_1 > 0$, then $x_2 = 0$ or $x_3 = 0$. Constraint:

    $$
    y_2 + y_3 \leq 2 - y_1.
    $$

2. If $x_1 > 0$ or $x_2 > 0$, then $x_5 = 0$. Constraint:

    $$
    y_5 \leq 1 - y_1, y_5 \leq 1 - y_2.
    $$