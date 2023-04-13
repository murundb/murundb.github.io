Order of the filter depends on the frequency components of the signal you are trying to estimate.

If it has a combination of two frequency signals (5Hz and 50Hz) and you want to treat anything 50Hz+ as noise, you set a second order filter with two time constants (0.2s and 0.02s). You can use combination of two first-order filter (which would effectively be a 2nd order filter).

given y(i) = coef * x(i) + (1 - coef) * y(i - 1)

coef = dt / (dt + tau)


https://elib.dlr.de/144642/1/2021__ION__Baro_Modeling__Simonetti_GarciaCrespillo.pdf
https://academic.csuohio.edu/simon-daniel/state-estimation/