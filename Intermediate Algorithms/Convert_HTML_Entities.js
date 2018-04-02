function convertHTML(str){
	var pairs  = {
		"&":"&amp;",
		"<":"&lt;",
		">":"&gt;",
		"'":"&apos;",
		'"':"&quot;"
	}
	return str.replace(/[&<>'"]/g, function(c){
		return pairs[c];
	});
}