# Parallel Loops

=== "Base"

    ``` cpp linenums="1"
    for (i = 0; i < n; ++i)
    {
        a[i] += foo (i);
    }
    ```

=== "OpenMP"

    ``` cpp linenums="1" hl_lines="1 8"
    #pragma omp parallel // Activates the team of threads
    {
        #pragma omp for shared (a, n) private (i) // Declares work sharing loop
        for (i = 0; i < n; ++i)
        {
            a[i] += foo (i);
        } // Implicit join
    } // Implicit join
    ```

=== "OpenMP v2"

    ``` cpp linenums="1" hl_lines="1 8"
    #pragma omp parallel
    {
        foo(a, n);
    } // Implicit join


    void foo(item* a, int n)
    {
        int i;
        #pragma omp for shared (a, n) private (i)
        for (i = 0; i < n; ++i)
        {
            a[i] += foo(i);
        } // Implicit join
    } // Note: If foo() is called outside a parallel region, it is orphaned
    ```

=== "OpenMP v3"

    ``` cpp linenums="1" hl_lines="1 8"
    #pragma omp parallel for default (none) shared (a, n) private (i)
    for (i = 0; i < n; ++i)
    {
        a[i] += foo (i);
    } // Implicity join
    ```

## If Statement

``` linenums="1"
const int B = ...;
#pragma omp parallel for if (n > B) default (none) shared (a, n) private (i)
for (i = 0; i < n; ++i)
{
    a[i] += foo (i);
} // Implicit join
```
