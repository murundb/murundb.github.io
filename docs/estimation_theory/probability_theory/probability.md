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

## Independence

If $A$ and $B$ are independent, then we have:

$$
\mathbb{P}(A \cdot B) = \mathbb{P}(A) \mathbb{P}(B).
$$
