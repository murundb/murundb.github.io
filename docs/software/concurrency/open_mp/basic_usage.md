# Simple Example

## Adding OpenMP

=== "Base"

    ``` cpp linenums="1"
    // Base Example
    
    int main()
    {




        {
            printf("hello, world!\n"); // Execute in parallel
        } // Implicity join
        return 0;
    }
    ```

=== "Adding OpenMP"

    ``` cpp linenums="1" hl_lines="1 8"
    #include <omp.h>

    int main()
    {
        omp_set_num_threads(16); // OPTIONAL - Can also use 
                                // OMP_NUM_THREADS environment variable

        #pragma omp parallel
        {
            printf("hello, world!\n"); // Execute in parallel
        } // Implicity join
        return 0;
    }
    ```

=== "Restricting Team Size"

    ``` cpp linenums="1" hl_lines="1 8"
    #include <omp.h>

    int main()
    {
        omp_set_num_threads(16); // OPTIONAL - Can also use 
                                // OMP_NUM_THREADS environment variable

        #pragma omp parallel num_threads(8) // Restrict team size locally
        {
            printf("hello, world!\n"); // Execute in parallel
        } // Implicity join
        return 0;
    }
    ```

## Compiling


    gcc -fopenmp ...
    icc -openmp ...
