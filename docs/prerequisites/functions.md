# Functions

## Definition

A function $f: D \rightarrow R$ means it takes an argument element of its
domain $D$ and returns an element of its range $R$; in particular we can
have a domain of $f$ as a proper subset of the set $D$. Thus, the notation
$f: \mathbb{R}^n \rightarrow \mathbb{R}^m$ means that $f$ maps (some) 
$n$-vectors into $m$-vectors; it does not mean that $f(\mathbf{x})$ is defined for
every $\mathbf{x} \in \mathbb{R}^n$. For example, 
$f(\mathbf{x}) = \sum^n_{j = 1} |x_j|$, with $D = \mathbb{R}^n$ and $R = \mathbb{R}_{+}$.

## Continuity

A function $f: D \rightarrow R$ is continuous at a point
$\mathbf{x}_0 \in D$, if for any sequence $\left\{ \mathbf{x}_i \right\}$
such that $\lim_{i \rightarrow \infty} \mathbf{x}_i = \mathbf{x}_0$, it holds
$\lim_{i \rightarrow \infty} f(\mathbf{x}_i) = f(\mathbf{x}_0)$. A function is
continuous if it is continuous at every point in its domain.

Continuity can also be defined in terms of an epsilon and delta. A function
$f: D \rightarrow R$ is continuous at $\mathbf{x} \in D$ if for all
$\epsilon > 0$ there exists a $\delta$ such that:

$$
\mathbf{y} \in D, \quad ||\mathbf{y} - \mathbf{x}||_2 \leq \delta \Rightarrow
||f(\mathbf{y}) - f(\mathbf{x})||_2 \leq \epsilon.
$$

Roughly, a function is continuous if it does not have any "jumps".

## Differentiability

A univariate function $f: \mathbb{R} \rightarrow \mathbb{R}$ is 
differentiable at a point $x_0$ if the derivative:

$$
f'(x_0) = \lim_{h \rightarrow 0} \frac{f(x_0 + h) - f(x_0)}{h}
$$

exists. A multivariate function $f: \mathbb{R}^n \rightarrow \mathbb{R}$ is
differentiable at a point $\mathbf{x}_0$ if all partial derivatives:

$$
\left. \frac{\partial f(\mathbf{x})}{\partial x_j} \right|_{\mathbf{x} = \mathbf{x}_0}
= \lim_{h \rightarrow 0} \frac{f(\mathbf{x}_0 + h \mathbf{e}_j) - f(\mathbf{x}_0)}{h}, \quad j = 1, \dots, n
$$

exists and are continuous. A function $f$ is differentiable if it is differentiable at every point in its domain.

## Convex, Concave, and Non-Convex Functions

A function $f: \mathbb{R}^n \rightarrow \mathbb{R}$ is **convex** if:

$$
f(\theta \mathbf{x} + (1 - \theta)\mathbf{y}) \leq
\theta f(\mathbf{x}) + (1 - \theta)f(\mathbf{y}) \quad
\forall \mathbf{x}, \mathbf{y} \in \mathbb{R}^n \ \text{and} \ \theta \in \left[0, 1 \right].
$$

Geometrically, this inequality means that the line segment between 
$\mathbf{x}, f(\mathbf{x})$ and $\mathbf{y}, f(\mathbf{y})$, which is the chord from $\mathbf{x}$ to $\mathbf{y}$,
lies above the graph of $f$.

A function $f$ is **concave** if $-f$ is convex, i.e., the inequality is reversed.
A linear function is both convex and concave. A function is **non-convex** if it is not convex. Non-convex functions can be modelled using mixed integer linear constraints.

## Examples

### Example Convex Functions

1. Affine: $ax + b$, $x \in \mathbb{R}$, $\forall a, b \in R$.
2. Affine: $\mathbf{a}^T \mathbf{x} + \mathbf{b}$, $\mathbf{x} \in \mathbb{R}^n$
2. Exponential: $e^{ax}$, $\forall a \in \mathbb{R}$.
3. Powers: $x^\alpha$, $x \in \mathbb{R}_{++}$, for $\alpha \geq 1$ or $\alpha \leq 0$
4. Powers of absolute value: $|x|^p$, $x \in \mathbb{R}$, for $p \geq 1$
5. Negative entropy: $x\log x$, $x \in \mathbb{R}_{++}$
6. Norms: $||\mathbf{x}||_p = \left( \sum^n_{i = 1} |\mathbf{x}_i|^p \right)^{1/p}$, $\mathbf{x} \in \mathbb{R}^n$, for $p \geq 1$; $||\mathbf{x}||_\infty = \max_k |\mathbf{x}_k|$

### Examples of Concave Functions

1. Affine: $ax + b$, $x \in \mathbb{R}$, $\forall a, b \in R$.
2. Powers: $x^\alpha$, $x \in \mathbb{R}_{++}$, for $0 \leq \alpha \leq 1$
3. Logarithm: $\log x$, $x \in \mathbb{R}_{++}$

## Restriction of a Convex Function to a Line

A function $f: \mathbb{R}^n \rightarrow \mathbb{R}$ is convex if and only if the function $g: \mathbb{R} \rightarrow \mathbb{R}$:

$$
g(t) = f(\mathbf{x} + t \mathbf{v}), \quad \textbf{dom}g = \left\{ t \ | \ \mathbf{x} + t \mathbf{v} \in \textbf{dom}f \right\}
$$

is convex for any $\mathbf{x} \in \textbf{dom}f$, $\mathbf{v} \in \mathbb{R}^n$.

## Conditions for Convexity

### First-Order Condition

A differentiable function $f: \mathbb{R}^n \rightarrow \mathbb{R}$ is convex if and only if:

$$
f(\mathbf{y}) \geq f(\mathbf{x}) + \nabla f(\mathbf{x})^T (\mathbf{y} - \mathbf{x}) \quad
\forall \mathbf{x}, \mathbf{y} \in \mathbb{R}^n,
$$

that is, the first-order Taylor approximation is a global under-estimator.

### Second-Order Condition

A twice differentiable univariate function $\mathbb{R} \rightarrow \mathbb{R}$ is 
convex if $f''(x) \geq 0$ for $\forall x \in \mathbb{R}$, i.e., the slopes (or gradients)
of $f$ are non-decreasing.

Twice differentiable function $f: \mathbb{R}^n \rightarrow \mathbb{R}$ is convex
if and only if its Hessian matrix $\nabla^2 f(\mathbf{x})$ is 
**positive semidefinite** for $\forall \mathbf{x} \in \mathbb{R}^n$. 

A $n \times n$ matrix $A$ is positive semidefinite if $\mathbf{x}^T A \mathbf{x} \geq 0$
for $\forall \mathbf{x} \in \mathbb{R}^n$. Equivalently, $A$ is positive semidefinite if all
its eigenvalues are nonnegative.

### Example

Consider a quadratic function:

$$
f(\mathbf{x}) = \frac{1}{2} \mathbf{x}^T \mathbf{P} \mathbf{x} + \mathbf{q}^T \mathbf{x}
+ r,
$$

where $\mathbf{P} \in \mathbb{S}^N_{+}$. The first and second-order derivatives will be:

$$
\begin{align}
\nabla f(\mathbf{x}) &= \mathbf{x}^T \mathbf{P} + \mathbf{q}^T \\
\nabla^2 f(\mathbf{x}) &= \mathbf{P}^T = \mathbf{P} \geq 0.
\end{align}
$$

Hence, convex. Note that these conditions are sufficient and not necessary.

## Establishing Convexity and Operations Preserving Convexity

A practical methods for establishing convexity of function is as follows:

1. Verify convexity definition (often simplified by restricting to a line)
2. For a twice differentiable functions, show $\nabla^2 f(\mathbf{x}) \geq 0$
3. Show that $f$ is obtained from simple convex functions by operations that preserve convexity:

    1. Nonnegative weighted sum of convex functions is convex, i.e., if $f_i$ is convex and $\alpha_x \geq 0$ for $\forall i = 1, \dots, m$, 
            then $g(\mathbf{x}) = \sum^m_{i = 1} \alpha_i f_i(\mathbf{x})$ is convex.
    2. Composition with affine function
    3. Maximum of convex functions is convex, i.e., if $f_i$ is convex for $\forall i = 1, \dots, m$, then $g(\mathbf{x}) = \text{max}_i \left\{ f_i(\mathbf{x}) \right\}$
            is convex.
    4. Composition: Let $f: \mathbb{R}^m \rightarrow \mathbb{R}$ be a convex function, and $g_i: \mathbb{R}^n \rightarrow \mathbb{R}$ be
            convex for $\forall i = 1, \dots, m$. Then the composition function 
            $h(\mathbf{x}) = f(g_1(\mathbf{x}), g_2(\mathbf{x}), \dots, g_m(\mathbf{x}))$ is convex if either $f$ is nondecreasing or 
            if each $g_i$ is a linear function.
    5. Minimization
    6. Perspective

For example, consider the function $f(\mathbf{x}) = \exp \left( \sum^m_{i = 1} |a^T_i \mathbf{x} - b_i| \right)$.

1. Let $g_i(\mathbf{x}) = |a^T_i \mathbf{x} - b_i|$. It is obtained by the composition of the convex function $|\cdot|$ and the linear function $a^T_i \mathbf{x} - b_i$. 
        Hence, $g_i$ is convex.
2. The function $h(\mathbf{x}) = \sum^m_{i = 1} g_i (\mathbf{x})$ is a sum of convex functions. Hence, $h$ is convex. 
3. $f$ is obtained by taking composition of the function $m(a) = \exp(a)$ with $h$, i.e., $f(\mathbf{x}) = m(h(\mathbf{x}))$. Since $m$ is nondecreasing 
        and h is convex, $f$ is convex.

## Convex Set and Convex Functions Relationship

### Epigraph

The epigraph of a function $f: \mathbb{R}^n \rightarrow \mathbb{R}$ is a set defined as:

$$
\text{epi} f = \left\{ (y, \mathbf{x}) \in \mathbb{R}^{n + 1} : y \geq f(\mathbf{x}) \right\}.
$$

"Epi" means "above", so epigraph means "above the graph". 

The link between convex sets and convex functions is via the epigraph: A
function is convex if and only if its epigraph is convex set.

### Sublevel Sets 

Given scalar $\alpha$, the $\alpha$-level set of a function $f: \mathbb{R}^n \rightarrow \mathbb{R}$ is a set defined as:

$$
X_\alpha = \left\{ \mathbf{x} \in \mathbb{R}^n : f(\mathbf{x}) \leq \alpha \right\}.
$$

The epigraph and the $\alpha$-level set ($\forall \alpha \in R$) of a convex function are convex sets.

