## Unix Epoch 

The Unix epoch is the number of seconds that have elapsed since January 1, 1970 at midnight UTC time minus the leap seconds. This means that at midnight of January 1, 1970, Unix time was 0. The Unix epoch is also called Unix time, POSIX time, or Unix timestamp. On systems where the representation of Unix time is as a signed 32-bit number, the representation will end after $2^31 - 1$ seconds which will happen at 3:14:08 on 19 January 2038 UTC. This is called the Year 2038 problem where the 32-bit signed Unix time will overflow.

The [Linux](https://linux.die.net/man/2/time) ```time()``` returns ```time_t``` which is the time as the number of seconds since the Epoch, 1970-01-01 00:00:00 +0000 (UTC).

An easy way to get Unix timestamp via chrono is:

``` cpp
auto unix_timestamp = std::chrono::seconds(std::time(NULL));
```

