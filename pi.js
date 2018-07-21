// A script to calculate Pi (π = 3.14159...)
// using one of the simplest infinte series
// sum = 1/(1*1) + 1/(2*2) + 1/(3*3) + 1/(4*4) + 1/(5*5)... infinte terms
// and where Pi = sqrt(sum*6)
// This series converges very slowly so we need to add
// many terms to get an acceptable aproximation for Pi
// Adding 10 terms results in 1 correct Pi digit (3)
// Adding 100 trems results in 2 correct Pi digits (3.1)
// Adding 1.000 terms results in 3 correct Pi digits (3.14)
// Adding 1.000.000 terms results in 6 correct Pi digits (3.14159)

// The Greek phrase "Αεί, ο Θεός ο Μέγας γεωμετρεί"
// corresponds to the 3,14159 when counting each word's letters.

// Adding 1.000.000.000 terms results in 8 correct Pi digits (3.1415926)
// The 1 billion terms calculation requires around 2 minutes
// on the latest Chrome running on a current Windows 10 laptop

// Try also to change the variable declarations with var
// and check the time that the script needs to run.

// It is suggested to use as the maximun number
// for the loop the number 1 billion, otherwise
// the script becomes extremely slow.

// The output will also provide the time
// in milliseconds that was required
// for the calculation.

console.time('Total time for Pi calculation: ');
let n=0, sum=0;
for (let i=1; i<1000000; i++) {
	n = 1 / (i*i);
	sum += n;
};
console.log("pi approximation = " + Math.sqrt(sum*6));
console.timeEnd('Total time for Pi calculation: ');
