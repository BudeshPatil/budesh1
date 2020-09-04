function submit() {
	var x = document.getElementById("input").value;
	document.getElementById("message").innerHTML = x;
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
	var x = document.getElementById("navDemo");
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('myModal');
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

results = [];

var openFile = function (event) {
	var input = event.target;
	var reader = new FileReader();
	reader.onload = function () {
		var text = reader.result;
		csvParse(text);/*
		var node = document.getElementById('output');
		node.innerText = text;
		console.log(reader.result.substring(0, 200));*/
	};
	reader.readAsText(input.files[0]);
};



res2018 = [];
res2019 = [];

function csvParse(inputString) {
	var re = /("201\s|,\s)/;
	var res2018 = inputString.split("= {")[1].split(",")[0];
	var res2019 = '2019' + inputString.split("= {")[1].split("2019")[1].split("};")[0];
	document.getElementById("output").innerHTML = "";
	for (var I = 0; I < res2018.length; I++) {
		nameList = "<li>" + res2018[I] + "</li>";
		document.getElementById("output").innerHTML += nameList;
	}
};

