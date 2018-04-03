function sumPrimes(num){
	var sum = 0;
	for(var i=0; i<=num; i++){
		if(isPrime(i)) sum+= i;
	}
	return sum;
}

function isPrime(num){
	for(var i=2, sqr=Math.sqrt(num); i<=sqr; i++){
		if(num % i === 0){
			return false; 
		}
	}
	return num !== 1;
}