var btn1 = document.getElementById("b1"),
	btn2 = document.getElementById("b2"),
	btn3 = document.getElementById("b3"),
	btn4 = document.getElementById("b4"),
	btn5 = document.getElementById("b5"),
	btn6 = document.getElementById("b6"),
	btn7 = document.getElementById("b7"),
	btn8 = document.getElementById("b8"),
	btn9 = document.getElementById("b9");

//var result = "0";




window.onload = function() {

	/*Number buttons.*/
	document.getElementById("b0").addEventListener("click", function () {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";

		document.getElementById("txtArea").innerHTML += "0";
	});
	document.getElementById("b1").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "1";
	});
	document.getElementById("b2").addEventListener("click", function () {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "2";
	});
	document.getElementById("b3").addEventListener("click", function () {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "3";
	});
	document.getElementById("b4").addEventListener("click", function () {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "4";
	});
	document.getElementById("b5").addEventListener("click", function () {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "5";
	});
	document.getElementById("b6").addEventListener("click", function () {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "6";
	});
	document.getElementById("b7").addEventListener("click", function () {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "7";
	});
	document.getElementById("b8").addEventListener("click", function () {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "8";
	});
	document.getElementById("b9").addEventListener("click", function () {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "9";
	});

	/*Other stuff.*/

	document.getElementById("bResult").addEventListener("click", function () {
		try {
			document.getElementById("txtArea").innerHTML = eval(document.getElementById("txtArea").innerHTML.toString());
			//window.alert(result);
		}
		catch (e) {
			window.alert(e);
			document.getElementById("txtArea").innerHTML = "0";
		}
	});

	document.getElementById("bDel").addEventListener("click", function () {

		if (document.getElementById("txtArea").innerHTML.length < 2 && parseInt(document.getElementById("txtArea").innerHTML) > 0)
			document.getElementById("txtArea").innerHTML = "0";
		//result = "";
		if (document.getElementById("txtArea").innerHTML.length > 1) {
			document.getElementById("txtArea").innerHTML = document.getElementById("txtArea").innerHTML.substring(0, document.getElementById("txtArea").innerHTML.length-1);

		}
	});

	document.getElementById("bClr").addEventListener("click", function () {

		document.getElementById("txtArea").innerHTML = "0";
	});

	/*Operations.*/
	document.getElementById("bAdd").addEventListener("click", function () {
		document.getElementById("txtArea").innerHTML += "+";
	});

	document.getElementById("bRemo").addEventListener("click", function () {
		document.getElementById("txtArea").innerHTML += "-";
	});

	document.getElementById("bMult").addEventListener("click", function () {
		document.getElementById("txtArea").innerHTML += "*";
	});

	document.getElementById("bDiv").addEventListener("click", function () {
		document.getElementById("txtArea").innerHTML += "/";
	});

}
