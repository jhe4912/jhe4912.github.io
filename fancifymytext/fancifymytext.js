function bigger() {
	document.getElementById("boringbetty").checked = false;
	document.getElementById("fancifymytextbox").style.fontSize = "24pt";
}

function fancifyalert() {
	alert("Fancifying activated");
}

function fancify() {
	let txtStyle = document.getElementById("fancifymytextbox").style;
	txtStyle.fontWeight = "bold";
	txtStyle.color = "blue";
	txtStyle.textDecoration = "underline";
}

function boring() {
	let txt = document.getElementById("fancifymytextbox");
	let txtStyle = txt.style;
	
	txtStyle.fontSize = "initial";
	txtStyle.fontWeight = "normal";
	txtStyle.color = "initial";
	txtStyle.textDecoration = "none";
	txtStyle.textTransform = "initial";
	
	txt.value = txt.value.split("-Moo").join(".");
}

function moo() {
	document.getElementById("boringbetty").checked = false;
	
	let txt = document.getElementById("fancifymytextbox");
	txt.style.textTransform = "uppercase";
	txt.value = txt.value.split(".").join("-Moo");
}
