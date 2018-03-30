function myReplace(str, before, after) {
	if(before.toLowerCase()!==before) after = after.charAt(0).toUpperCase() + after.substr(1);
	var regex = new RegExp(before,"gi");
	str = str.replace(regex, after);
	return str;
}