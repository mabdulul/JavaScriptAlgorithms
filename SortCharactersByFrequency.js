function frequencySort(str1) {
	let str = str1.split("");
	var strObj = {};
	for (let letter of str) {
		strObj[letter] = (strObj[letter] || 0) + 1;
	}
	console.log("The obj", strObj);
	let keys = Object.keys(strObj);
	keys.sort((a, b) => strObj[b] - strObj[a]);

	let checking = strObj.c;

	let newletter = "";
	for (let i = 0; i < keys.length; i++) {
		newletter += keys[i].repeat(strObj[keys[i]]);
	}
	console.log(newletter);
}
frequencySort("caaatttttt");
