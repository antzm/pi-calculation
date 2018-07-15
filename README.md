# pi-calculation

This is a small script to calculate the PI number = 3,14159

Pi (Greek π) calculation is based on the calculation
of a sum of an infinite series.

There are infinite series which converge fast and thus,
they provide a good approximation of Pi after adding
a small number of terms.

There are also other infinite series where we need to
calculate a great number of terms and find their sum
in order to provide a Pi aproximation with only 
a few correct decimal digits.

In this case, the following infinite series will be used:

<strong>Σ(sum) = 1/(1^2) + 1/(2^2) + 1/(3^2) + 1/(4^2) + 1/(5^2) +...+ 1/(n^2) </strong>

<strong> Σ(sum) = (π^2)/6 </strong>
 
The above sum had been calculated for the first time,
in the year 1734 by the mathematician Leonhard Euler.

The problem to calculate this series first appeared
in 1644 by Pietro Mengoli and the first one to calculate
it's sum was Leonhard Euler after 90 years.

In bibliography is known as the "Basel Problem".

Using this seriess to calculate Pi, we need to calculate
the sum of the first 1000 terms in order to find
the number 3,14 i.e. the Pi with an accuracy of two decimals.

 Adding 1.000.000 terms, results in 5 correct Pi digits (3.14159)
 
Adding 1.000.000.000 terms results in 7 correct Pi digits (3.1415926)
(The 1 billion terms calculation requires around 2 minutes
on an average current laptop).

It worths mentioning though that the above time depends
mainly on the declarations of the variables used.

Using `let` to declare the variables, makes the code
to run much faster, especially on Firefox while
on Chrome the differences are minimal.

It worths noting that if the variables are
declared with `var` Firefox becomes 80% slower
compared when the variables are declared with `let`.

On Google Chrome though, `var` declarations makes
the code only slightly slower.

This intensive code could be used to compare 
the speed of different computers and browsers. 
Thus, it could be considered as a very simple
benchmark test.
