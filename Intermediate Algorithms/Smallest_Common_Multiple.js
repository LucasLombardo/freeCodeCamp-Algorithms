function smallestCommons(arr) {
	var range  = [],
		result = 0;
	if(arr[0]>arr[1]) arr.reverse();
	for(var i=arr[0]; i<=arr[1]; i++){
		range.push(i);
	}
	var j = arr[1];
	while(true){
		if(commonArr(j, range)) return j;
		j+=arr[1];
	}
}

function commonArr(n, arr){
	for(var i=0; i<arr.length; i++){
		if(n%arr[i] !== 0) return false;
	}
	return true;
}