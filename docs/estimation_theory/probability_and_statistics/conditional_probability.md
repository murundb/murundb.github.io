# Conditional Probability

## Definition

!!! cnote "Conditional Probability"
    Given $\mathbb{P} > 0$, the conditional probability of an event $A$ given that $B$ has occured is:

    $$
    \mathbb{P}(A | B) = \frac{\mathbb{P}(A \cdot B)}{\mathbb{P}(B).}
    $$

Figure 1 shows a graphical description of a conditional probability $\mathbb{P}(A | B)$. Once event $A$ is conditioned by $B$, $B$ "becomes the sample space" and $B$'s Venn diagram expands by a factor of $\frac{1}{\mathbb{P}(B)}$. The intersection $AB$ in the expanded $B$ becomes the event $A|B$.

<figure markdown>
  ![conditional probability](/assets/images/estimation_theory/light/conditional_probability.png#only-light){ width="400" }
  ![conditional probability](/assets/images/estimation_theory/dark/conditional_probability.png#only-dark){ width="400" }
  <figcaption>Figure 1 Graphical illustration of conditional probability (stab) </figcaption>
</figure>

## Independence

Events $A$ and $B$ are independent if:

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

    Let the event of interest $A$ happen under any of the hypotheses $H_i$ with a known (conditional) probability \mathbb{P}(A|H_i). Assume, in addition, that the probability of hypotheses $H_1$, $\ldots$, $H_n$ are known. Then we have:

    $$
    \mathbb{P}(A) = \mathbb{P}(A|H_1) \mathbb{P}(H_1) + \cdots + 
    \mathbb{P}(A|H_n) \mathbb{P}(H_n).
    $$
