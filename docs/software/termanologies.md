## Device Controller and Device Driver

Device Controller is responsible for moving the data between peripheral devices that it controls and its local buffer storage. Typically, operating systems have a device driver for each device controller. This device driver understands the device controller and provides the rest of the operating system with a uniform interface to the device.

## System Processes or Daemons

Once a kernel is loaded and is executing, it can start providing services to the system and its users. Some services are provided outside of the kernel, by system programs that are loaded into memory at boot time to become **system processes**, or **system daemons** that run the entire time the kernel is running. On Linux, the first system program is "systemd", and it starts many other daemons.

## Word

A word is made up of one or more bytes. For example, a computer that has 64-bit registers and 64-bit memory addressing typically has 64-bit (8-byte) words. A computer executes many operations in its native word size rather than a byte at a time.

## DRAM

CPU can load instructions only from memory, so any programs must first be loaded into memory to run. General-purpose comptuers run most of their programs from rewritable memory, called main memory (RAM). Main memory commonly is implemented in a semiconductor technology called **dynamic random-access memory (DRAM)**. RAM is volatile, i.e., loses its content when power is turned off.

## ROM and EEPROM

For a computer to start running - for instance, when it is powered up or rebooted - it needs to have an initial program to run. This initial program, or **bootstrap program**, tends to be simple. Typicall, it is stored within the computer hardware in read-only memory (ROM) or electrically erasable programmable read-only memory (EEPROM), known by the general term firmware. Since ROM cannot be changed, only static programs, such as programs in game cartridges are stored there. EEPFROM can be changed but cannot be changed frequently and so contains mostly static programs. For example, smartphones have EEPROM to store their factory-installed programs, serial numbers, and hwardware information about the device.

# DMA

After setting up buffers, pointers, and counters for the I/O device, the device controller transfers an entire block of data directly to or from the device and the main memory, with no intervention by the CPU. Only one interrupt is generated per block, to tell the device driver that the operation has completed, rather than the one interrupt per byte generated for low-speed devices. This is a usage of **direct memory access (DMA)**.

## Computing Systems

**CPU** is the hardware that executes instructions. **Processor** is a physical chip that contains one or more CPUs. **Core** is the basic computation unit of the CPU. The core is the component that typo executes instructions and registers for storing data locally. The one main CPU with its core is capable of executing a general-purpose instruction set, including instructions from processes. *Multicore** includes multiple computing cores on the same CPU. 

## NUMA

Adding additional CPUs to a multiprocessor system will increase computing power; however, the concept does not scale very well, and once we add too many CPUs, contention for the system bus becomes a bottleneck and performance begins to degrade. An alternative approach is instead to provide each CPU (or group of CPUs) with its own local meory that is accessed via a small, fast local bus. The CPUs are connected by a **shared system interconnect**, so that all CPUs share one physical address space. This is known as **non-uniform memory access (NUMA)**.

## Process

Multiprogramming increases CPU utilization, as well as keeping users satisfied, by organizing programs so that the CPU always has one to execute. In a multiprogrammed system, a program in execution is called a **process**.

## Program Counter

A single-threaded process has one **program counter** specifying the next instruction to execute. The execution of such a process must be sequential. The CPU executes one instruction of the process after another, until the process completes. Further, at any time, one instruction at most is executed on behalf of the process. Thus, although, two processes may be associated with the same program, they are nevertheless considered two separate execution sequences. A multithreaded process has multiple program counters, each pointing to the next instruction to execute for a given thread.

