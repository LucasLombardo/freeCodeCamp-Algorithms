function binaryAgent(str){
	str = str.split(" ").map(x=> parseInt(x, 2));
	return str.map(x=> String.fromCharCode(x)).join(" ");
}