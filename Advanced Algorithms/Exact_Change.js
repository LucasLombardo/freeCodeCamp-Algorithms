function checkCashRegister(price, cash, cid) {
	var change 	 = [],
		values 	 = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100],
		amount 	 = cash - price,
		totalCID = Math.round(cid.map(arr => arr[1]).reduce((a,b)=> a+b)*100)/100;
	if(totalCID===amount) return "Closed";
	for(var i=values.length; i>=0; i--){
		if(Math.floor(amount/values[i])>0 && cid[i][1]>0){
			var unitValue = Math.min(Math.floor(amount/values[i])*values[i], cid[i][1]);
			change.push([cid[i][0], unitValue]);
			amount-=unitValue;
			amount = Math.round(100*amount)/100;
		}
	}
	return amount == 0? change : "Insufficient Funds";
}