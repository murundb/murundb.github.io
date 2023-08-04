In passive ranging or time of arrival (TOA) measurement, the receiver measures the time of arrival, $t^t_{sa, a}$, at receive antenna $a$ of a particular feature of the signal that was transmitted at a known time, $t^t_{st, a}$, from transmit antenna $t$. The transmission time can be a predetermined feature of the system or may be modulated onto the signal. By neglegting the error sources, the range can be obtained by:

$$
r_{at} = r_{ta} = \left( t^t_{sa, a} - t^t_{st, a} \right) c,
$$

where $c$ is the speed of light which is $299, 792, 478 \ ms^{-1}$ in free space.

The time of signal arrival is measured using the receiver clock, while the time of signal transmission is determined using the transmitter clock. These two clocks are not synchronized. 

If the receiver clock is ahead by $\delta t^a_c$ and the transmitter clock is ahead by $\delta t^t_c$, the range measurement will be (neglegting other error sources):

$$
\begin{align}
\rho^t_a &= \left( \tilde{t}^t_{sa, a} - \tilde{t}^t_{st, a} \right) c \\ 
&= \left( t^t_{sa, a} + \delta t^a_c - t^t_{sa, a} - \delta t^t_c \right) c \\
&= r_{at} + \left( \delta t^a_c - \delta t^t_c \right) c,
\end{align}
$$

where $\rho^t_a$ is called the **pseudo-range** to distinguish it from the range measured in the absence of clock errors. Note that this pseudo-range is from the transmitter antenna, $t$, to the receiver antenna, $a$. Unlike goemetric range, pseudo-range depends on the direction of transmission. The pseudo-range for a signal transmitted from $a$ to $t$ is:

$$
\begin{align}
\rho^a_t &= r_{ta} + \left( \delta t^t_c - \delta t^a_c \right) c \\ 
&= r_{at} + \left( \delta t^t_c - \delta t^a_c \right) c \\
&= \rho^t_a - 2 \left( \delta t^a_c - \delta t ^t_c \right)c.
\end{align}
$$

Figure 1 illustrates the effect of unsynchronized transmitter and receiver clocks on range measurement.

<figure markdown>
  ![Clock bias ranging](/assets/images/navigation/light/clock_bias_ranging.png#only-light){ width="500" }
  ![Clock bias ranging](/assets/images/navigation/dark/clock_bias_ranging.png#only-dark){ width="500" }
  <figcaption>Figure 1 Effect of clock bias in ranging (Groves, p263)</figcaption>
</figure>




