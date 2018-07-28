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

<em>where sum is the total sume from 1 to infinity</em>
 
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
on an average Windows 10 current laptop).

It worths mentioning though that the above time depends
mainly on the declarations of the variables used.

Using `let` to declare the variables, makes the code
to run much faster, especially on Firefox while
on Chrome the differences are minimal.

It worths noting that if the variables are
declared with `var`, Firefox becomes 80% slower
compared when the variables are declared with `let`.

On Google Chrome though, `var` declarations make
the code only slightly slower.

This intensive code can be used to compare 
the speed of different computers and browsers. 
Thus, it could be considered as a very simple
benchmark test.

<h3>Pi calculation current record</h3>
It worths noting that in November 2016, Peter Trueb
calculated 22,459,157,718,361 fully verified digits of pi.
The calculation and the verification process took 105 days.

<h3>Pi calculation history</h3>
number of correct decimal digits / year / details
<ul>
<li>1 digit, 2000 BC, Ancient Babylonians</li>
<li>2 digits, 250 BC, Archimedes</li>
<li>3 digits, 150 AD, Ptolemy</li>
<li>7 digits, 480 AD, Zu Chongzhi</li>
<li>10 digits, 1400 AD, Madhava of Sangamagrama</li>
<li>16 digits, 1424 AD, Jamshīd al-Kāshī</li>
<li>100 digits, 1706 AD, John Machin</li>
<li>527 digits, 1874, William Shanks</li>
<li>2037 digits, 1949,	John Wrench, and L. R. Smith using the ENIAC computer</li>
<li>10 K digits, 1958, Francois Genuys using IBM 704</li>
<li>100 K digits, 1961, Daniel Shanks and John Wrench using IBM 7090</li>
<li>250 K digit, 1966, Jean Guilloud and J. Filliatre using IBM 7030</li>
<li>500 K digits, 1967, Jean Guilloud and M. Dichampt using CDC 6600</li>
<li>1 million digits, 1973, Jean Guilloud and Martin Bouyer using CDC 7600</li>
<li>2 million digits, 1981, Jean Guilloud</li>
<li>8 million digits, 1983, Yoshiaki Tamura and Yasumasa Kanada	using HITAC M-280H</li>
<li>33 million digits, 1986, Yasumasa Kanada, Yoshiaki Tamura	using HITAC S-810/20</li>
<li>200 million digits, 1988, Yasumasa Kanada and Yoshiaki Tamura using HITAC S-820/80</li>
<li>1 billion digits, 1989, Gregory V. Chudnovsky & David V. Chudnovsky using IBM 3090</li>
</ul>
