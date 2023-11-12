## Signals

In legacy architecture, each GPS satellite transmits continuously using two radio frequencies in the L-band referred to as Link 1 (L1) and Link 2 (L2). The L-band covers frequencies between 1 GHz and 2 GHz, and is a subset of the UHF band. The center frequencies are are:

$$
L1: \ f_{L1} = 1575.42 MHz, \ and \ L2: \ f_{L2} = 1227.60 MHz.
$$

The GPS signals are well below the background RF noise level sensed by an antenna. It is the knowledge of the signal structure (i.e., PRN code) that allows a receiver to extract the signal buried in noise and make precise measurements.

## Signal structure

Refer to ICD for full description. In general, each GPS signal consists of three components:

1. **Carrier**, $f(t)$: RF sinusoidal signal with frequency $f_{L1}$ or $f_{L2}$.
2. **Ranging code**, $C(t)$: Associated with each service (i.e., SPS and PPS) is a family of 
   binary codes called *pseudo-random noise* (PNR) sequences or PRN codes. The PRN codes
   have special mathematical properties which allow all satellites to transmit at the same frequency without interfering with each other. These codes allow precise range measurements, and mitigate the deleterious effects of reflected and interfering signals received by a GPS antenna. The SPS codes are called coarse/acquisition codes (C/A-codes) and PPS codes are referred to as precision (encrypted codes), or P(Y)-codes. Each satellite transmits a unique C/A-code on L1 and unique P(Y)-codes on both L1 and L2. Each C/A-code is a unique sequence of 1023 bits, called *chips*, which is repeated each millisecond.  P-code on the other hand is a unique segment of an extremely long ($\approx 10^14$ chips) PRN sequence. The chipping rate is ten times of C/A code and the chip width is about 30 meters which is about ten times smaller than C/A. The smaller wavelength results in greater precision in the range measurements than C/A-codes.

3. **Navigation data**, $D(T)$: A binary-coded message consisting of data on the satellite health status, ephemeris (satellite position and velocity), clock bias parameters, and an almanac giving reduced-precision ephemeris data on all satellites in the constellation. The navigation message is transmitted at a leisurely 50 bits per second (bps), with a bit duration of 20 ms. It takes 12.5 minutes for the entire message to be received.  