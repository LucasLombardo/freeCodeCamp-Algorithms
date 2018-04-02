function spinalCase(str) {
	var noCamelCase = "",
		indexCamel	= 0,
		spaceChars	= " _-";
	for(i=1; i<str.length; i++){
		if(str[i] === str[i].toUpperCase() &&
		  (spaceChars.indexOf(str[i-1]) === -1) && 
		  (spaceChars.indexOf(str[i]) === -1)){
			noCamelCase+= str.slice(indexCamel, i)+" ";
			indexCamel = i;
		}
	}
	str = noCamelCase + str.slice(indexCamel, str.length);
	return str.toLowerCase().replace(/[ _]/g, "-");
}