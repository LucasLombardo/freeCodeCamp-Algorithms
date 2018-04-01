function uniteUnique(arr) {
	var newArr = [],
		unique = [];
	for(i=0; i<arguments.length; i++){
		newArr = newArr.concat(arguments[i]);
	}
	for(var i=0; i<newArr.length; i++){
		if(unique.indexOf(newArr[i])===-1) unique.push(newArr[i]);
	}
	return unique;
}