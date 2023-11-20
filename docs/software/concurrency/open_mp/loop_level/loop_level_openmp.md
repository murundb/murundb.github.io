# Loop-level OpenMP

## Applications Characteristics

Standard OpenMP starts from the bottom-up and applies the parallelism constructs at the loop level. Some characteristics are:

1. Modest parallelism
2. Has plenty of memory resources (low memory requirements)
3. Expensive part of calculation is in just a few `for` or `do` loops.

OpenMP relies on the OS kernel for its memory handling. OpenMP has a relaxed memory model. Each thread has a temporary view of memory so that it doesn't have the cost of storing memory with every operation. When the temporary view finally must be reconciled with main memory, an OpenMP barrier or flush operation is required to synchronize memory.

Threads are allocated by cores, and thread binding is enabled using the following OpenMP enviornment variables to reduce the performance variation of runs:

    export OMP_PLACES=cores
    export OMP_CPU_BIND=true
