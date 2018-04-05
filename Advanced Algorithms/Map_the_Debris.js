function orbitalPeriod(arr) {
	var GM 			= 398600.4418,
		earthRadius = 6367.4447;
	arr.forEach(function(obj){
		var radius  = obj.avgAlt + earthRadius;
		delete obj.avgAlt;
		obj.orbitalPeriod = Math.round(Math.PI*2*Math.sqrt(Math.pow(radius,3)/GM));
	});
	return arr;
}