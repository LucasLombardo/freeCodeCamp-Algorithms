function translatePigLatin(str) {
	if(['a','e','i','o','u'].indexOf(str[0]) !== -1) return str + "way";
	var index = 0,
		vowel = false;
	while(vowel === false){
		if(['a','e','i','o','u'].indexOf(str[index+1]) !== -1) vowel = true;
		index+=1;
	}
	return str.slice(index, str.length) + str.slice(0,index)+"ay";
}