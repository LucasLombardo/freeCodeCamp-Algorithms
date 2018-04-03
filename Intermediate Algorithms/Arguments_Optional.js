function addTogether(){
	var sum = 0;
	for(i=0; i<arguments.length; i++){
		if(typeof arguments[i] !== "number") return undefined;
		sum+=arguments[i];
	}
	if(arguments.length===1){
		return n => (typeof n == "number")? n + arguments[0]: undefined;
	}
	return sum;
}