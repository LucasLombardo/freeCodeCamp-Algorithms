function sym(args) {
	var result = diffArray(arguments[0], arguments[1]);
	for(var j=2; j<arguments.length; j++){
		result = diffArray(result, arguments[j]);
	}
	return result.filter(function(item, pos) {
		return result.indexOf(item) == pos;
	});
}

function diffArray(arr1, arr2) {
	var newArr = arr1.concat(arr2),
		  result = [];
	for(var i=0; i<newArr.length; i++){
		if(!(arr1.indexOf(newArr[i])!=-1 && arr2.indexOf(newArr[i])!=-1)){
			result.push(newArr[i]);
		}
	}
	return result;
}