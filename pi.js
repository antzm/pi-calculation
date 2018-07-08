console.time('Total time for Pi calculation: ');
let n=0, sum=0;
for (let i=1; i<1000000; i++) {
	n = 1 / (i*i);
	sum += n;
};
console.log("pi approximation = " + Math.sqrt(sum*6));
console.timeEnd('Total time for Pi calculation: ');
