function truthCheck(collection, pre){
	val result = true;
	collection.forEach(function(obj){
		if(!obj[pre]) result = false;
	});
	return result;
}