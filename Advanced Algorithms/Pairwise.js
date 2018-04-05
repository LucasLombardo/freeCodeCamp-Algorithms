function pairwise(arr, arg){
	var result = 0;
	//iterate through arr 1 num at a time, then iterate through
	//the arr again checking for other nums that sum to arg
	for(var i=0; i<arr.length; i++){
		for(var j=0; j<arr.length; j++){
			if(arr[i]+arr[j]===arg && i!==j){
				//add indexes to result
				result+= i+j;
				//pull both elements
				arr[i]="";
				arr[j]="";
			}
		}
	}
	return result;
}