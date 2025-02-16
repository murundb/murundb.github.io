# Digital Filters

## Types

Filter types according to impulse response:

### Finite Impulse Response (FIR) 

1. Impulse response has finite support. 
2. Only a finite number of samples are involved in the computation of each output sample. Typical example of FIR filter is a moving average filter.
3. FIR filters are always stable.

### Infinite Impulse REsponse (IIR)

1. Impulse response has infinite support. 
2. A potentially infinite number of samples are involved in the computation of each output sample. 
3. Surprisingly, in many cases the computation can still be performed in a finite amount of steps. For example, Leaky Integrator.
4. Stability needs to be explicitly checked for IIR filters.

### Causal vs Noncausal

Causal:

1. Impulse response is zero for $n < 0$.
2. Only past samples (with respect to the present) are involved in the computation of each output sample.
3. Causal filters can work online since they only need the past

E.g., causal is moving average filter.

Noncausal:

1. Impulse response is nonzero for some (or all) $n < 0$
2. Can still be implemented in a offline fashion (when all input data is available on storage, e.g. in Image Processing)
