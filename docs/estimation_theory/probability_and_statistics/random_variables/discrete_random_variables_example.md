# Discrete Random Variables - Example

## Cells

Randomly observed circular cells on a plate have a diameter $D$ that is a random variable with the following PMF:

|  $D$  | 8   | 12  | 16  |
| ----- | --- | --- | --- |
|  Prob | 0.4 | 0.3 | 0.3 |

### Finding the CDF for D

$$
F_D(d) =
\begin{align}
\begin{cases}
0 \quad &d < 8 \\
0.4 \quad &8 \leq d < 12 \\
0.7 \quad &12 \leq d < 16 \\
1.0 \quad &16 \geq d
\end{cases}
\end{align}
$$

### Finding the PMF for the Area of the Cell

The area of the cell is $A(D) = \frac{D^2 \pi}{4}$. Then we have:

$$
\begin{alignat}{2}
A(8) &= 16, \pi &&\quad p_{D = 8} = 0.4 \\
A(12) &= 36, \pi &&\quad p_{D = 12} = 0.3  \\
A(16) &= 64, \pi &&\quad p_{D = 16} = 0.3.\\
\end{alignat}
$$

The expectation of $A$ and $D$ are:

$$
\begin{align}
\mathbb{E} A &= A(8) p_{D = 8} + A(12) p_{D = 12} + A(16) p_{D = 16} = 114.3540 \\
\mathbb{E} D &= 8 p_{D = 8} + 12 p_{D = 12} + 16 p_{D = 16} = 11.6.
\end{align}
$$

Note that the expectation is a linear operator.

### Finding the Variance of A

$$
\mathbb{Var}A = \mathbb{E}A^2 - (\mathbb{E}A)^2 = 1720 \pi^2 - 1324.96 \pi^2 = 395.04 \pi^2,
$$

since:

$$
\begin{alignat}{2}
A^2(8) &= 16^2, \pi^2 &&\quad p_{D = 8} = 0.4 \\
A^2(12) &= 36^2, \pi^2 &&\quad p_{D = 12} = 0.3  \\
A^2(16) &= 64^2, \pi^2 &&\quad p_{D = 16} = 0.3.\\
\end{alignat}
$$

### Finding the  Moment-Generating Functions

Recall that the moment generating function for discrete random variables is:

$$
m_X(t) = \mathbb{E}e^{tX} = \sum_n p_n e^{t x_n}.
$$

For $D$ and $A$:

$$
\begin{align}
m_D(t) &= \mathbb{E}e^{tD} = 0.4 e^{8t} + 0.3 e^{12t} + 0.3 e^{16t} \\
m_A(t) &= \mathbb{E}e^{tA} = 0.4 e^{16 \pi t} + 0.3 e^{36 \pi t} + 0.3 e^{64 \pi t}.
\end{align}
$$

Recall that the $k$'th derivative of the moment-generating function evaluated at $t = 0$ yields to the $k$'th moment of the random variable. Using this fact, the expectation and variance can be computed.

### Finding the Posterior

It is known that a cell with $D > 8$ is observed. To find the probability of $D = 12$ taking into this information, we use the conditional probability rule:

$$
\mathbb{P}(D=12 | D > 8) = \frac{\mathbb{P}(D=12 \cdot D > 8)}{\mathbb{P}(D > 8)} = \mathbb{P} (D= 12) / \mathbb{P} (D > 8) = 1.2.
$$
