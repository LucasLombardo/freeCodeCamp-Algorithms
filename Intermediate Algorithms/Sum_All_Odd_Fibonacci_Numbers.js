function sumFibs(num){
	var sum  = 1;
	for(var i=1, j=1; i<=num; i+=j){
		if(i%2==1) sum+=i;
		if(i>1) j = i-j;
	}
	return sum;
}