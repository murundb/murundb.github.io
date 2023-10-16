# Bayesian Inference

## Introduction

In Bayesian inference, the unobserved parameters in a statistical model are treated as random variables. Before the data is collected, **prior distributions** are elicited to quantify our knowledge about the parameters. The **prior distribution** comes from expert opinion, theoretical considerations, or previous similar experiments. When data is available, the prior distributions are updated to the posterior distributions. These are conditional distributions that incorporate the observed data. The transition from prior to the posterior is possible via Bayes' theorem.

Prior to observing whether an event $A$ has appeared or not, we set the probabilities of $n$ hypotheses, $H_1, H_2, \ldots, H_n$, under which event $A$ may happen. These are called **prior** probabilities of the hypotheses, $\mathbb{P}(H_1), \ldots, \mathbb{P}(H_n)$. Bayes' rule gives recipe to update these prior probabilities to the posterior probabilities once we obtained additional information from the experiment (information about the event $A$):

$$
\mathbb{P}(H_i | A) = \frac{\mathbb{P}(A | H_i) \mathbb{P}(H_i)}{\mathbb{P}(A)}.
$$

Suppose that before the data is observed, a description of the population parameter $\theta$ is given by a probability density $\pi(\theta)$. The process of specifying the prior distribution is called **prior elicitation**. The data is modeled via the likelihood, which depends on $\theta$ and is denoted by $f(x | \theta)$. Bayes' theorem updates the prior $\pi(\theta)$ to the posterior $\pi(\theta | x)$ by incorporating observations $x$ summarized via the likelihood:

$$
\pi(\theta | x) = \frac{f(x | \theta) \pi (\theta)}{m(x)},
$$

where $m(x)$ is a normalization factor so that the posterior is a proper density and is a **constant** once the prior is specified and the data is observed. Given the parameter $\theta$, with values in the parameter space $\Theta$, the normalization factor is:

$$
m(x) = \int_{\Theta} (h, \theta) d \theta = \int_{\Theta} f(x | \theta) \pi (\theta)d \theta,
$$

where the joint distribution of $X$ and $\theta$, $h(x, \theta)$ is:

$$
h(x, \theta) = f(x | \theta) \pi (\theta) = \pi(\theta | x) m(x).
$$

All information about $\theta$ coming from the prior distribution and the observations are contained in the posterior distribution. The posterior distribution is the ultimate summary of the parameter and serves as the basis for all Bayesian inferences.

!!! cnote "Hyperparameters"

    The parameter $\theta$, with values in the parameter space $\Theta$, is not directly observable and is considered a random variable. This is the key difference between Bayesian and classical approaches. Classical statistics consider the parameter to be fixed number or vector of numbers, while Bayesians express the uncertainty about $\theta$ by considering it as a random variable. This random variable has a distribution $\pi(\theta)$ (prior). The prior distribution not only quantifies available knowledge, it also describes the uncertainty about a parameter before data is observed. If the prior distribution for $\theta$ is specified up to a parameter $\tau$, $\pi(\theta | \tau)$, then $\tau$ is called a **hyperparameter**. Hyperparameters are parameters of a prior distribution, and they are either specified or may have their own priors. 

!!! cnote "Bayesian inference"
    \begin{align}
    \mathbb{P}(\text{hypothesis}) \quad &\xrightarrow{\text{Bayes' Rule}} \quad \mathbb{P}(\text{hypothesis}|\text{evidence}) \\
    \pi(\theta) \quad &\xrightarrow{\text{Bayes' Theorem}} \quad \pi(\theta | \text{data})
    \end{align}

## Bayesian Inference Advantages

1. Valuable prior information is often available (e.g., medical devices).
2. Use of prior information may alleviate the need for a larger sized trial. We don't need to do millions of experimental trials to deduce an inference.
3. The Bayesian approach can sometimes be used to obtain an exact analysis when the corresponding frequentist analysis is only approximate or is too difficult to implement.
4. Bayesian methods allow for great flexibility in dealing with missing data.
