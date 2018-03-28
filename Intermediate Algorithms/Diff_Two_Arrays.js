function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2),
  	  result = []
  for(i=0; i<newArr.length; i++){
  	if(!(arr1.indexOf(newArr[i])!=-1 && arr2.indexOf(newArr[i])!=-1)){
  		result.push(newArr[i]);
  	}
  }
  return result;
}