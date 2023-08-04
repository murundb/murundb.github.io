
## Clock

A clock is a generator of periodic events (frequency source or resonator) and a counting mechanism (counter or integrator) for the events. The accuracy of such a clock to measure time would depend upon (i) erro in the initial frequency setting (accuracy), and (ii) ability to maintain the rate of the periodic process (frequency stability).

*Frequency stability* is a measure of the ability of a frequency source to operate at the specified frequency over a period of interest. The stability of a clock is commonly specified in terms of relative frequency deviation. 

## Solar and Sidereal Times

A complete revolution of the earth with respect to the sun (i.e., time between two successive transits of the sun across a local meridian plane) defines an *apparent solar day*. Due to the fact that no two apparent solar days are precisely the same length, *mean solar time* was introduced which corresponds to the earth in a hypothetical circular orbit around the sun with the same period, and its axis of rotation perpendicular to the orbital plane. The mean solar time at the Greenwich meridian is called the *Greenwich Mean Time* (GMT). 

A *sidereal day*, or twenty-four hours of sidereal time, is defined as the time the earth takes to rotate once on its axis relative to an inertial frame. The earth revolves once around the sun in a year (365.25 mean solar days), and there is one extra rotation of the earth to account for. Mean solar day is approximately four minutes longer than a sidereal day. The orbital period of a GPS satellite is one-half sidereal day. After two revolutions around the earth, each satellite rises at the same spot on the horizon relative to each observer, but four minutes earlier than the day before by the observer's watch. 

## International Atomic Time (TAI)

The System of Units (SI) second is defined as "the duration of 9,192,631,770" periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium-133 atom". The continuous time scale based on this definition of atomic second is called *International Atomic Time* (TAI). (SI day = 86,400 SI seconds). TAI is a precise and uniform time scale which is not tied to the earth's rotation on its axis or its revolution around the sun. 

## Coordinated Universal Time (UTC)

It is estimated that in about four thousand years. the earth could lose about twelve hours, or half a day, and the sun would be high in the sky while local time based on a TAI clock indicates midnight [Allan, Ashby, and Hodge (1997)]. The result has been a compromise time scale called the *Coordinated Universal Time* (UTC). The definition of the UTC second is the same as that for atomic time, and is based on the cesium atom. UTC is the scale for public time throughout the world and is the new GMT. 

UTC was set to agree with UT1 at 00 hours on January 1, 1958. At first, the two time scales were kept close by introducing 0.1-second steps in UTC, as needed. Since 1972, changes in the earth's spin rate have been accommodated by introducing leap seconds in UTC. Hence, UTC and TAI differ by an integer number of seconds. The difference between TAI and UTC is:

$$
TAI - UTC = 33 \ s.
$$

## GPS Time

GPS defines a time reference of its own called GPS Time (GPST) and keeps track of the offset between GPST and the international civil standard, UTC. Like UTC, GPST is a composite time kept by a "paper clock". There are two important differences between GPST and UTC:

1. GPST is defined in real time.
2. GPST is a continuous time scale (no leap seconds).

The relationship between GPST and UTC is:

$$
GPST = UTC + 18 \ s.
$$

A time epoch in GPST is defined in terms of the week number and number of seconds of the week (or seconds into the week). The GPS Week field in the navigation message is modulo 1024. The first GPS cycle of 1024 weeks began at the Standard Epoch of GPS: midnight of the transition between Saturday, 5 January 1980, and Sunday, 6 January 1980 (00:00:00 UTC, 6 January 1980, Julian Day 2,444,244.500). The number of seconds of the week is measured since the previous midnight (GPS Time) marking the transition between Saturday and Sunday. There are 604,800 seconds in a GPS week. 

