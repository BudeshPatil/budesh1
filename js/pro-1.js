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
	var res2018 = inputString.split("2018\":")[1].split(",")[0];
	var feb = JSON.parse(res2018);
	if(feb){
		nameList = "<li>" + '2018' + "</li>";
		document.getElementById("output").innerHTML += nameList;
		nameList = "<li>" + 'feb' + "</li>";
		document.getElementById("output").innerHTML += nameList;
		nameList = "<li>" + feb.feb[0] + "</li>";
		document.getElementById("output").innerHTML += nameList;
	}
	
	var res2019 = inputString.split("2019\":")[1].replace("};",'').replace(/\s/g, '').replace(",\'js\'","");
	var resJan = res2019.split(",\"mar")[0] +'}';
	var jan = JSON.parse(resJan);
	
	if(jan){
		nameList = "<li>" + '2019' + "</li>";
		document.getElementById("output").innerHTML += nameList;
		nameList = "<li>" + 'jan' + "</li>";
		document.getElementById("output").innerHTML += nameList;
		if(jan.jan[3]){
			nameList = "<li>" + '3' + "</li>";
			document.getElementById("output").innerHTML += nameList;
			nameList = "<li>" + 'folder1' + "</li>";
			document.getElementById("output").innerHTML += nameList;
			nameList = "<li>" + 'subfolder1' + "</li>";
			document.getElementById("output").innerHTML += nameList;
			for(var I = 0; I < jan.jan[3].folder1.subfolder1.length; I++){
				nameList = "<li>" + jan.jan[3].folder1.subfolder1[I] + "</li>";
				document.getElementById("output").innerHTML += nameList
			}
			nameList = "<li>" + 'js' + "</li>";
			document.getElementById("output").innerHTML += nameList;
		}
		if(jan.jan[5]){
			nameList = "<li>" + '5' + "</li>";
			document.getElementById("output").innerHTML += nameList;
			nameList = "<li>" + 'folder1' + "</li>";
			document.getElementById("output").innerHTML += nameList;
			nameList = "<li>" + 'subfolder1' + "</li>";
			document.getElementById("output").innerHTML += nameList;
			for(var I = 0; I < jan.jan[5].folder1.subfolder1.length; I++){
				nameList = "<li>" + jan.jan[5].folder1.subfolder1[I] + "</li>";
				document.getElementById("output").innerHTML += nameList
			}
		}
	}

	var resMar = '{"mar' + res2019.split(",\"mar")[1];
	var mar = JSON.parse(resMar);
		if(mar){
			nameList = "<li>" + 'mar' + "</li>";
			document.getElementById("output").innerHTML += nameList;
			nameList = "<li>" + '15' + "</li>";
			document.getElementById("output").innerHTML += nameList;
			nameList = "<li>" + 'folder1' + "</li>";
			document.getElementById("output").innerHTML += nameList;
			nameList = "<li>" + 'subfolder1' + "</li>";
			document.getElementById("output").innerHTML += nameList;
			for(var I = 0; I < mar.mar[15].folder1.subfolder1.length; I++){
				nameList = "<li>" + mar.mar[15].folder1.subfolder1[I] + "</li>";
				document.getElementById("output").innerHTML += nameList
			}
		}
	/*
	var str = '{"jan":{"3": {"folder1":{"subfolder1":["hello.csv","world.csv","js"]}},"5":{"folder1":{"subfolder1":["john.csv","doe.csv"]}}}}';
	var obj2019 = JSON.parse(str);*//*
	var re = /("201\s|,\s)/;
	var res2018 = inputString.split("= {")[1].split(",")[0];
	var res2019 = '2019' + inputString.split("= {")[1].split("2019")[1].split("};")[0];
	document.getElementById("output").innerHTML = "";
	for (var I = 0; I < res2018.length; I++) {
		nameList = "<li>" + res2018[I] + "</li>";
		document.getElementById("output").innerHTML += nameList;
	}*/
};

