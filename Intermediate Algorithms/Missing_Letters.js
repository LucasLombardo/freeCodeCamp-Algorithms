function fearNotLetter(str) {
	count = str[0].charCodeAt();
	for(var i=1; i<str.length; i++){
		if(str[i].charCodeAt() != count+1) return String.fromCharCode(count+1);
		count++;
	}
	return undefined;
}