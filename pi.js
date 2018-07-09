// A script to calculate Pi (3.14)
// using one of the simplest infinte series
// sum = 1/(1*1) + 1/(2*2) + 1/(3*3) + 1/(4*4) + 1/(5*5)... infinte terms
// and where Pi = sqrt(sum*6)

console.time('Total time for Pi calculation: ');
let n=0, sum=0;
for (let i=1; i<1000000; i++) {
	n = 1 / (i*i);
	sum += n;
};
console.log("pi approximation = " + Math.sqrt(sum*6));
console.timeEnd('Total time for Pi calculation: ');

