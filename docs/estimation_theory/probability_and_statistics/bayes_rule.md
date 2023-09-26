# Bayes' Rule

## Definition

Bayes' rule reassesses the probabilities of events when new evidence about related outcomes becomes available. It concerns the transition from prior probabilities of hypothesis to the posterior probabilities once new information about the sample space is obtained:

$$
\mathbb{P}(H) \quad \xrightarrow{\text{Bayes' Rule}} \quad \mathbb{P}(H|A).
$$


!!! cnote "Bayes' Rule"
    Let the event of interest $A$ happen under any of the hypotheses $H_i$ with a known (conditional) probability $\mathbb{P}(A|H_i)$. Assume that the probabilities of hypotheses $H_1$, $\ldots$, $H_n$ are known (**prior** probabilities). Then the conditional (**posterior**) probability of the hypothesis $H_i$, $i = 1, 2, \ldots, n$ given that the event $A$ happened is:

    $$
    \mathbb{P}(H_i|A) = \frac{\mathbb{P}(A|H_i) \mathbb{P}(H_i)}{\mathbb{P}(A)},
    $$

    where:

    $$
    \mathbb{P}(A) = \mathbb{P}(A|H_1) \mathbb{P}(H_1) + \cdots + 
    \mathbb{P}(A|H_n) \mathbb{P}(H_n).
    $$

Bayes' rule reassesses the probabilities of events when new evidence about related outcomes becomes available.