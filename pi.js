// A script to calculate Pi (3.14)
// using one of the simplest infinte series
// sum = 1/(1*1) + 1/(2*2) + 1/(3*3) + 1/(4*4) + 1/(5*5)... infinte terms
// and where Pi = sqrt(sum*6)
// This series converges very slowly so we need to add
// many terms to get an acceptable aproximation for Pi
// Adding 10 terms results in 1 correct Pi digit (3)
// Adding 100 trems results in 2 correct Pi digits (3.1)
// Adding 1.000 terms results in 3 correct Pi digits (3.14)
// Adding 1.000.000 terms results in 6 correct Pi digits (3.14159)

console.time('Total time for Pi calculation: ');
let n=0, sum=0;
for (let i=1; i<1000000; i++) {
	n = 1 / (i*i);
	sum += n;
};
console.log("pi approximation = " + Math.sqrt(sum*6));
console.timeEnd('Total time for Pi calculation: ');
