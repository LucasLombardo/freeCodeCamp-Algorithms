function whatIsInAName(collection, source) {
	//determine objects to remove
	var removeObj = [];
	for(var key in source){
		if (source.hasOwnProperty(key)){
			for(var i=0; i<collection.length; i++){
				if(source[key] !== collection[i][key]){
					removeObj.push(collection[i]);
				}
			}
		}
	}
	//remove objects from array
	for(var i=0; i<removeObj.length; i++){
		var index = collection.indexOf(removeObj[i]);
		if (index !== -1) collection.splice(index, 1);
	}
	return collection;
}