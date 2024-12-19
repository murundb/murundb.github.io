# GNSS Signal Model

## Signal Model and Modulation

### Signal Model

$$
\begin{align}
s(t) = \underbrace{\sqrt{2 P_I} x_I (t) D_I (t) \cos \left(2 \pi f_c t + \phi \right)}_{\text{In-phase}}
+ \underbrace{\sqrt{2 P_Q} x_Q (t) D_Q (t) \cos \left(2 \pi f_c t + \phi \right)}_{\text{Quadrature}} \\
\end{align},
$$

where,

| Properties  | Definition |
| ----- | --------------------------------------- |
| $P_I$ | In-phase signal power (W) |
| $P_Q$ | Quadrature signal power (W) |
| $x_I(t)$ | In-phase ranging code. Modulation with the C/A-code, $x_I(t)$ using BPSK modulation: $x(t) = \begin{cases} \exp \left( j0 \right) &= +1, \quad \text{if code bit = 0} \\ \exp\left(j \pi \right) &= -1, \quad \text{if code bit = 1}  \end{cases}$ |
| $x_Q(t)$ | Quadrature ranging code (Modulation by the P(Y) code, i.e., military usage)|
| $D_I(t)$ | In-phase navigation signal |
| $D_Q(t)$ | Quadrature navigation signal |
| $f_c$ | Carrier Frequency (Hz) |
| $\phi$ | Carrier phase offset (rad) |

### Modulation

<figure markdown>
  ![modulation](/assets/images/sensors/light/gnss_signal_modulation.png#only-light){ width="400" }
  ![modulation](/assets/images/sensors/dark/factor_graph.png#only-dark){ width="400" }
  <figcaption>Figure 1 A factor graph representation (Factor Graph Tutorial, ION, GNSS+ 2023)</figcaption>
</figure>

## GPS Signals

### GPS Frequencies

| Carrier Band | L1 | L2 | L3 | L4 | L5 |
| - | - | - | - | - | - |
| Center Frequency | 1575.42MHz | 1227.60MHz | 1381.05MHz | 1379.91MHz | 1176.45MHz |
| Carrier Wavelength ($c / f_0$)| 19cm | 24cm | | | 25cm | 
| Quadrature| I/Q | I/Q | I/Q | I/Q | I/Q |
| Legacy Usage| C/A, P(Y) | P(Y) | | | |
| Modern Usage | C/A, P(Y), M, L1C<sub>D</sub>, L1C<sub>P</sub> | P(Y), M, L2C | | | I5-code, Q5-code |


### GPS Navigation Signals

| | LNAV | L2 CNAV | L5 CNAV | CNAV-2 | MNAV |
| - | - | - | - | - | - |
| Definition | Legacy navigation | L2 civilian navigation | L5 civilian navigation | Civilian navigation | Military navigation |
| Data | <ol><li>GPS date, time and the satellite status</li><li>Ephemeris. Received in 18-36 seconds and is valid up to 4 hours</li><li>Almanac (up to 32 satellites). Received in 12.5 minutes and is valid for up to 2 weeks</li></lo> | <ol><li>GPS date, time and the satellite status</li><li>Ephemeris. Received in 18-36 seconds and is valid up to 4 hours</li><li>Almanac (up to 64 satellites). Received in 12.5 minutes and is valid for up to 2 weeks</li></lo> | <ol><li>GPS date, time and the satellite status</li><li>Ephemeris. Received in 18-36 seconds and is valid up to 4 hours</li><li>Almanac (up to 64 satellites). Received in 12.5 minutes and is valid for up to 2 weeks</li></lo> | | Unknown |
| Properties | Modulated onto C/A and P(Y) codes at 50b/s (very slow) | <ol><li>Forward error correction (FEC) via convolution codes with rate 1/2</li><li>Modulated onto L2C code at 50b/s. Navigation data at 25b/s (50% FEC overhead)</li><li> Improved data structure (packet based instead of frame based)</li><li>Better interoperability with other constellations and has excess bandiwdth to include more data in future</li></ol> | <ol><li>Forward error correction (FEC) via convolution codes with rate 1/2</li><li>Modulated onto L5 code at 50b/s. Navigation data at 25b/s (50% FEC overhead)</li><li> Improved data structure (packet based instead of frame based)</li><li>Better interoperability with other constellations and has excess bandiwdth to include more data in future</li></ol> | Modulated onto L1C code at 100b/s, navigation data at 50b/s (50% FEC overhead), and has similar data structure and FEC to L2 CNAV and L5 CNAV | Packet based and uses FEC |

### GPS Ranging Signals

|   | C/A | P(Y) | L2C | L5 | L1C | M |
| - | - | - | - | - | - | - |
| Definition | Coarse / Acquisition code | Precision code | Second civilian signal | Third civilian signal | Fourth civilian signal | Military code |
| Type | Legacy | Legacy | Modernized | Modernized | Modernized | Modernized |
| Frequency Band | L1 | L1 and L2 | L2 | L5 | L1 | L1 and L2 |
| Usage | Civilian | Military | Civilian | Civilian | Civilian | Military |
| Properties | <ol><li> Short code at 1.023Mb/s</li><li>Repeats every 1 ms (1023 code bits, i.e., chips)</li></ol> | <ol><li>Long code at 10.23Mb/s</li><li>Main P-code repeats every 37 weeks (2.289214E14 chips)</li><li>Each satellite transmits a different segment of the main code (6.187104E12 chips, repeats every 1 week)</li><li>P-code is XORed with a secret cryptographic W-code to give P(Y)</li><li>P(Y) is robust to interference and spoofing</li></ol> | <ol><li>Contains two distinct codes multiplexed at 1.023Mb/s: CM, CL</li><li>**CM** (civil-moderate code): Medium code at 511.5kb/s, repeats every 20ms (10230 chips), and has a new navigation signal (L2 CNAV) modulated onto it</li><li>**CL** (civil-long-code): Long code at 511.5kb/s, repeats every 1.5 seconds (767250 chips), no navigation data modulation (dataless sequence), and improved SNR</li><li>2.7dB higher SNR than C/A at 2.3dB less power</li><li>As of 2021, broadcasting from 23 GPS satellites</li></ol> | <ol><li>Contains two codes transmitted in quadrature (I/Q) at 10.23Mb/s</li><li>**I5-code** (in-phase code): Medium code at 10.23Mb/s, repeats every 1 ms (10230 chips), has a new navigation signal (L5 CNAV), has a synchronization sequence modulated onto it (10 bit Neuman-Hofman code)</li><li>**Q5-code** (quadrature code): Medium code at 10.23Mb/s, repeats every 1 millisecond (10230 chips), no navigation data modulation (dataless sequence), has a synchronization sequence modulated onto it (20-bit Neuman-Hofman code)</li><li>3dB higher power and 10x higher bandwidth than other civil signals</li><li>As of 2022, broadcasting from 17 GPS satellites</li></ol> | <ol><li>Contains two codes transmitted in quadrature (I/Q) at 1.023Mb/s</li><li>**L1C<sub>D</sub>** (in-phase data signal): Repeats every 10 milliseconds (10230 chips), Binary Offset Carrier (BOC) modulation (not BPSK), has a new navigation signal (CNAV-2) modulated onto it</li><li>**L1C<sub>P</sub>** (quadrature pilot signal): Repeats every 10ms (10230 chips), Multiplexed Binary Offset Carrier (MBOC) modulation (not BPSK), additional overlay code (L1C<sub>O</sub>) modulated onto it for better acquisition</li><li>1.5dB higher power and improved tracking compared to C/A</li><li>As of 2021, broadcasting from 4 GPS satellites</li></ol> | <ol><li>Improves the security, performance and robustness of legacy P(Y)</li><li>5.115Mb/s bitrate, BOC modulation</li><li>Has new navigation signal (MNAV) modulated onto it</li><li>Block III and later satellites will broadcast the M code from a dedicated directional high gain antenna in addition to the full-earth antenna. Providing 20dB signal gain in selective regions</li></lo> |
