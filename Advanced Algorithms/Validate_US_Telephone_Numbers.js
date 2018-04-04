function telephoneCheck(str){
	var nums = str.replace(/[ ()-]/g, "");
	var hasCountryCode = nums.length===11;
	return validSpacing(str, hasCountryCode) && validParas(str, hasCountryCode);
}

function validParas(str, cc){
	//check if string has 2 paras
	var paraCount = str.replace(/[^()]/g, "").length;
	if(paraCount === 0) return true;
	if(paraCount !== 2) return false;
	//check para order
	str = str.replace(/[^()0-9]/g, "");
	if(cc) return str[1]==="(" && str[5]===")";
	return str[0]==="(" && str[4]===")";
}


function validSpacing(str, cc){
	//checks spacing and length
	str = str.replace(/-/g, " ");
	str = str.replace(/[^ 0-9]/g, "");
	//trim country code;
	if(cc){
		if(str[0]==="1"){	
			str[1]===" "? str = str.slice(2,str.length): str = str.slice(1,str.length);
		} else {
			return false;
		}
	}
	//check for valid spacing
	var arr = str.split(" ");
	if(arr.length===3){
		return arr[0].length === 3 && arr[1].length === 3 && arr[2].length === 4;
	} else if(arr.length===2){
		return (arr[0].length === 6 && arr[1].length === 4) || (arr[0].length === 3 && arr[1].length === 7);
	}
	return arr.length===1 && arr[0].length===10;
}