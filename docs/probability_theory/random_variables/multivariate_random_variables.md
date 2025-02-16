# Multiple Random Variables

## Definition

When two or more random variables constitute the coordinates of a random vector, their joint distribution is often of interest. For a random vector $(x, y)$, the joint distribution function is defined via the probability of the event $\left\{ x \leq \xi, y \leq \eta \right\}$.

## Cumulative Distribution Function

| | Continuous Random Variable | Discrete Random Variable |
| - | - | - |
| **Joint Cumulative Distribution** | $\begin{align*} P_{x, y}(\xi, \eta) &= \mathbb{P}\left\{x \leq \xi, y \leq \eta \right\} \\ &= \int^{\xi}_{x = -\infty} \int^{\eta}_{y = -\infty} p_{x, y}(x, y) dx dy \end{align*}$ | |
| **Properties** | $\begin{align*}     P_{x, y} &\in \left[0, 1 \right] \\ P_{x, y}(\xi, -\infty) = P_{x, y}(-\infty, \eta) &= 0 \\ P_{x, y}(\infty, \infty) &= 1 \\ P_{x, y}(a, c) &\leq P_{x, y}(b, d) \quad \text{if} \ a \leq b \ \text{and} \ c \leq d\\ \mathbb{P}(a < x \leq b, c < y \leq d) &= P_{x, y}(b, d) + P_{x, y}(a, c) - P_{x, y}(a, d) - P_{x, y}(b, c) \\ P_{x, y}(\xi, \infty) = P_{x}(\xi) \\ P_{x, y}(\infty, \eta) = P_y(\eta) \end{align*}$ | |

## Probability Distribution Function

| | Continuous Random Variables | Discrete Random Variables |
| - | - | - |
| **Joint Probability Distribution** | $\begin{align*} p_{x, y}(\xi, \eta) \triangleq \lim_{d\xi \rightarrow 0, d\eta \rightarrow 0} \frac{\mathbb{P} \left\{ \left\{ \xi - d\xi < x \leq \xi \right\} \cap \left\{ \eta - d \eta < y < \eta \right\} \right\} }{d \xi d \eta} \end{align*}$ | $\begin{align*} p_{x, y}(\xi, \eta) = \mathbb{P}\left\{ x = \xi, y = \eta \right\} \end{align*}$ |
| **Marginal Densities** | $\begin{align*} &p_x(\xi) = \int^{\infty}_{-\infty} p_{x, y}(\xi, \eta) d\eta \rightarrow p(x) = \int^{\infty}_{-\infty} p(x, y) dy \\ &p_y(\eta) = \int^{\infty}_{-\infty} p_{x, y}(\xi, \eta) d\xi \rightarrow p(y) = \int^{\infty}_{-\infty} p(x, y) dx \end{align*}$ | $\begin{align*}&p(x) = \sum_y p_{x, y}(x, y) \\ &p(y) = \sum_x p_{x, y}(x, y)\end{align*}$ |
| **Covariance** | $\begin{align*} \mathbb{C}\text{ov}(x, y) &\triangleq \mathbb{E}\left[(x - \bar{x})(y - \bar{y}) \right] \\ &= \int^{\infty}_{-\infty} \int^{\infty}_{-\infty} (x - \bar{x})(y - \bar{y}) p(x, y) dx dy \\ &\triangleq \sigma^2_{xy}  \end{align*}$ | |
| **Correlation** | $\begin{align*} \rho_{xy} \triangleq \frac{\sigma^2_{xy}}{\sigma_x \sigma_y} \end{align*}$ | |
| **Independence** | $\begin{align*} p(x, y) = p(x) p(y) \end{align*}$ | |
| **Conditional pdf** | $\begin{align*} p(x \rvert y) = \frac{p(x, y)}{p(y)} \end{align*}$ | |
| **Bayes' Formula** | $\begin{align*} p(x \rvert y) = \frac{p(y \rvert x) p(x)}{ p(y)} = \frac{p(y \rvert x) p(x)}{\int p(y \rvert x) p(x) dx}\end{align*}$ | |

## Conditional Expectations

| | Continuous Random Variables |
| - | - |
| **Conditional Expectations** | $\begin{align*} \mathbb{E}\left[ x \rvert y\right] = \int^{\infty}_{-\infty} x p(x \rvert y) dx \end{align*}$ |
| **Conditional Expectation of a Function** | $\begin{align*} \mathbb{E}\left[ g(x, y) \rvert y\right] = \int^{\infty}_{-\infty} g(x,y) p(x \rvert y) dx \end{align*}$ |

## Mixture Probability Density Functions

A **mixture pdf** is a weighted sum of pdfs with the weights summing up to unity. A **Gaussian mixture** is a pdf consisting of a weighted sum of Gaussian densities:

$$
p(x) = \sum^{n}_{j = 1} p_j \mathcal{N}(x; \bar{x}_j, P_j), \quad \sum^{n}_{j = 1} p_j = 1.
$$
