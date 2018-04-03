function steamrollArray(arr) {
	arr = arr.reduce((acc, val) => acc.concat(val), []);
	if(areMoreLevels(arr)) arr = steamrollArray(arr);
	return arr;
}

function areMoreLevels(arr){
	for(var i=0; i<arr.length; i++){
		if(Array.isArray(arr[i])) return true;
	}
	return false;
}