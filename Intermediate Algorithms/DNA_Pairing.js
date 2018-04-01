function pairElement(str) {
	var result = [],
		pairs  = {"A":"T", "C":"G", "T":"A", "G":"C"};
	for(var i=0; i<str.length; i++){
		result.push([str[i], pairs[str[i]]]);
	}
	return result;
}