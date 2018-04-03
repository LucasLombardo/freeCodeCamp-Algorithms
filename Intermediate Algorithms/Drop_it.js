function dropElements(arr, func){
	while(arr[0]!==undefined){
		if(func(arr[0])!==true){
			arr.shift()
		} else {
			return arr;
		}
	}
	return arr;
}