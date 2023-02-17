# Open and Closed Sets
## Open Sets
An element $\mathbf{x} \in C \subseteq \mathbb{R}^n$ is called an <b>interior point</b> of $C$ if there exists and $\epsilon > 0$ for which:

$$
\left\{ \mathbf{y} \ | \ ||\mathbf{y} - \mathbf{x}||_2 \leq \epsilon \right\},
$$

i.e., there exists a ball centered at $\mathbf{x}$ that lies entirely in $C$. The set of all points interior to $C$ is called the <b>interior</b>
of $C$. 

A set $C$ is open if the interior of $C$ is equal to $C$, i.e., every point in $C$ is an interior point.

## Closed Sets
A set $C \subseteq \mathbb{R}^n$ is closed if its complement $\mathbb{R}^n \setminus C = \left\{ \mathbf{x} \in \mathbb{R}^n \ | \ \mathbf{x} \notin C \right\}$ is open, i.e., a set is closed if it includes its boundary points. 
Formally, a set $X$ is closed if for any convergent sequence 
in $X$, its limit point also belongs to $X$, i.e., 
if $\left\{ \mathbf{x}^i \right\} \in X$ and 
$\lim_{i \rightarrow \infty} \mathbf{x}^i = \mathbf{x}^0$ then
$\mathbf{x}^0 \in X$. For example, $X = \mathbb{R}^2$ is a closed set. In contrast,
$X = \left\{x: 0 < x \leq 1 \right\}$ is not a closed set. Note that intersection 
of closed sets is closed.

## Bounded Sets
A set is bounded if it can be enclosed in a large enough (hyper)-sphere or a box.
Formally, the set $X$ is bounded if there exists $M \geq 0$ such that
$||\mathbf{x}|| \leq M \) for all \( \mathbf{x} \in X$.

## Compact Sets
A set that is both bounded and closed is called a compact set.