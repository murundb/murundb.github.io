# Probability

## Inclusion-Exclusion Rule

!!! cnote "Inclusion-Exclusion Rule"
    For any two events $A$ and $B$, the probability that either $A$ or $B$ will occur is given by:

    $$
    \mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cdot B),
    $$

    where $\mathbb{P}(A \cdot B)$ or $\mathbb{P}(A \cap B)$ is the intersection of the two events, i.e., both events $A$ and $B$ occur.

    If events $A$ and $B$ are mutually exclusive, then $\mathbb{P}(A \cdot B) = 0$, and we get:

    $$
    \mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B).
    $$

The rule can be extended to unions of an arbitrary number of events. For example, for three events $A$, $B$, and $C$, we get:

$$
\begin{align}
\mathbb{P}(A \cup B \cup C) &= \mathbb{P}(A) + \mathbb{P}(B) + \mathbb{P}(C) \\
&- \mathbb{P}(A \cdot B) - \mathbb{P}(A \cdot C) - \mathbb{P}(B \cdot C) \\
&+ \mathbb{P}(A \cdot B \cdot C).
\end{align}
$$

## Event Complement

For every event defined on a space of elementary outcomes, $S$, we can define a counterpart event called its **compliment**. The complement $A^c$ of an event $A$ consists of all outcomes that are in $S$ but are not in $A$. Events $A$ and $A^c$ are mutually exclusive by definition. Consequently:

$$
\mathbb{P}(A \cup A^c) = \mathbb{P}(A) + \mathbb{P}(A^c).
$$

!!! cnote "Complementary Events"
    For any pair of complementary events $A$ and $A^c$:

    $$
    \begin{align}
    &\mathbb{P}(A) + \mathbb{P}(A^c) = \mathbb{P}(S) = 1 \\
    &\mathbb{P}(A) = 1 - \mathbb{P}(A^c) \\
    &\mathbb{P}(A^c) = 1 - \mathbb{P}(A).
    \end{align}
    $$

## Conditional Probability

!!! cnote "Conditional Probability"
    Given $\mathbb{P}(B) > 0$, the conditional probability of an event $A$ given that $B$ has occured is:

    $$
    \mathbb{P}(A | B) = \frac{\mathbb{P}(A \cdot B)}{\mathbb{P}(B).}
    $$

Figure 1 shows a graphical description of a conditional probability $\mathbb{P}(A | B)$. Once event $A$ is conditioned by $B$, $B$ "becomes the sample space" and $B$'s Venn diagram expands by a factor of $\frac{1}{\mathbb{P}(B)}$. The intersection $AB$ in the expanded $B$ becomes the event $A|B$.

<figure markdown>
  ![conditional probability](/assets/images/estimation_theory/light/conditional_probability.png#only-light){ width="400" }
  ![conditional probability](/assets/images/estimation_theory/dark/conditional_probability.png#only-dark){ width="400" }
  <figcaption>Figure 1 Graphical illustration of conditional probability (stab) </figcaption>
</figure>

!!! cnote "Prior and Posterior Probabilities"
    The probability of a single event ($\mathbb{P}(A)$ or $\mathbb{P}(B)$) is called a **prior** probability because it applies to the probability of an event apart from any previously known information.

    A conditional probability (e.g., $\mathbb{P}(A|B)$) is called a **posterior** probability because it applies to a probability given the fact that some information about a possibly related event is already known.

## Independence

If $A$ and $B$ are independent, then we have:

$$
\mathbb{P}(A \cdot B) = \mathbb{P}(A) \mathbb{P}(B).
$$

Equivalently, $A$ and $B$ are independent if:

$$
\mathbb{P}(A|B) = \mathbb{P}(A).
$$

## Chain Rule

!!! cnote "Chain Rule"

    The probability that events $A$ and $B$ will both occur is:

    $$
    \begin{align}
    \mathbb{P}(A \cdot B) &= \mathbb{P}(A) \mathbb{P}(B|A) \\
    &= \mathbb{P}(B) \mathbb{P}(A|B).
    \end{align}
    $$

    Generalizing the chain rule to $n$ events:

    $$
    \begin{align}
    \mathbb{P}(A_1 A_2 \ldots A_n) = \ &\mathbb{P}(A_1|A_2 \ldots A_n) \\
    &\mathbb{P}(A_2 | A_3 \ldots A_n) \\
    &\vdots \\
    &\mathbb{P}(A_{n-1} |A_n) \mathbb{P}(A_n),
    \end{align}
    $$

## Rule of Total Probability and Hypotheses

The rule of total probability expresses the probability of an event $A$ as the weighted average of its conditional probabilities. The events that $A$ is condition upon need to be exclusive and should partition the sampe space $S$.

Events $H_1$, $H_2$, $\ldots$, $H_n$ form a partition of the sample space $S$ iff:

1. They are mutually exclusive ($H_i \cdot H_j = \emptyset, \ i \neq j$)
2. Their union is the sample space $S$, i.e., $\cup^n_{i = 1} H_i = S$.

The events $H_1$, $\ldots$, $H_n$ are called **hypotheses**. By definition, we have:

$$
\mathbb{P}(H_1) + \cdots \mathbb{P}(H_n) = \mathbb{P}(S) = 1.
$$

!!! cnote "Total Probability"

    Let the event of interest $A$ happen under any of the hypotheses $H_i$ with a known (conditional) probability $\mathbb{P}(A|H_i)$. Assume, in addition, that the probability of hypotheses $H_1$, $\ldots$, $H_n$ are known. Then we have:

    $$
    \mathbb{P}(A) = \mathbb{P}(A|H_1) \mathbb{P}(H_1) + \cdots + 
    \mathbb{P}(A|H_n) \mathbb{P}(H_n).
    $$

