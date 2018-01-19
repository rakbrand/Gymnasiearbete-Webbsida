var result = "";
var degrees = true;
window.onload = function() {

	/*Nummer knappar.*/
	document.getElementById("b0").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";

		document.getElementById("txtArea").innerHTML += "0";
	});
	document.getElementById("b1").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "1";
	});
	document.getElementById("b2").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "2";
	});
	document.getElementById("b3").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "3";
	});
	document.getElementById("b4").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "4";
	});
	document.getElementById("b5").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "5";
	});
	document.getElementById("b6").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "6";
	});
	document.getElementById("b7").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "7";
	});
	document.getElementById("b8").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "8";
	});
	document.getElementById("b9").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "9";
	});
	/*Nummer knappar.*/
	/*Special tecken.*/
	document.getElementById("bp").addEventListener("click", function() {
		/*if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";*/
		if (!document.getElementById("txtArea").innerHTML.includes("."))
			document.getElementById("txtArea").innerHTML += ".";
	});
	document.getElementById("bE").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "1";
		document.getElementById("txtArea").innerHTML += "e";
	});
	document.getElementById("bSin").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "Sin(";
	});
	document.getElementById("bCos").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "Cos(";
	});
	document.getElementById("bTan").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "Tan(";
	});
	document.getElementById("bSqr").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "√(";
	});
	document.getElementById("bpv").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "(";
	});
	document.getElementById("bph").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += ")";
	});
	document.getElementById("bPI").addEventListener("click", function () {
		if (document.getElementById("txtArea").innerHTML == "0")
			document.getElementById("txtArea").innerHTML = "";
		document.getElementById("txtArea").innerHTML += "π";
	});
	document.getElementById("bPO").addEventListener("click", function () {
		document.getElementById("txtArea").innerHTML += "^";
	});
	/*Special tecken.*/
	/*Andra grejer.*/
	document.getElementById("bResult").addEventListener("click", function() {
		try {
			result = document.getElementById("txtArea").innerHTML

			if (result.includes("^")) {
				var powerTo = powerOf(result);
				// window.alert("\"" + result + "\"");
				// window.alert("\"" + powerTo[0] + "\"");
				// window.alert("\"" + powerTo[1] + "\"");
				result = result.replace(powerTo[0].toString() + "^" + powerTo[1].toString(), "Math.pow(powerTo[0],powerTo[1])");
			}

			result = result.replace("Sin", "Math.sin");
			result = result.replace("Cos", "Math.cos");
			result = result.replace("Tan", "Math.tan");
			result = result.replace("√", "Math.sqrt");
			result = result.replace("π", "Math.PI");

			result = result.replace(")(", ")*(");





			result = eval(result.toString());
			document.getElementById("txtArea").innerHTML = result;
			//window.alert(result);
		}
		catch (e) {
			window.alert(e);
			document.getElementById("txtArea").innerHTML = "0";
			result = "0";
		}
	});
	document.getElementById("bDel").addEventListener("click", function() {
		if (document.getElementById("txtArea").innerHTML.length < 2 && parseInt(document.getElementById("txtArea").innerHTML) > 0)
			document.getElementById("txtArea").innerHTML = "0";
		if (document.getElementById("txtArea").innerHTML.length > 1)
			document.getElementById("txtArea").innerHTML = document.getElementById("txtArea").innerHTML.substring(0, document.getElementById("txtArea").innerHTML.length-1);
	});
	document.getElementById("bClr").addEventListener("click", function() {
		document.getElementById("txtArea").innerHTML = "0";
	});
	/*Andra grejer.*/
	/*Operationer.*/
	document.getElementById("bAdd").addEventListener("click", function() {
		document.getElementById("txtArea").innerHTML += "+";
	});

	document.getElementById("bRemo").addEventListener("click", function() {
		document.getElementById("txtArea").innerHTML += "-";
	});

	document.getElementById("bMult").addEventListener("click", function() {
		document.getElementById("txtArea").innerHTML += "*";
	});

	document.getElementById("bDiv").addEventListener("click", function() {
		document.getElementById("txtArea").innerHTML += "/";
	});
	/*Operationer.*/

	try {

		/*fs = require("fs");*/


		/*var cmd = "window.alert('funkar det?')";
		eval(cmd);*/

		var ul = document.getElementById("konstanter");
		var antL = 40;

		for (var i = 0; i<antL; i++) {
			var li = document.createElement("LI");
		  	li.innerHTML = "Konstanter";
		  	ul.appendChild(li);
		}

		ul = document.getElementById("formler");
		for (var i = 0; i<antL; i++) {
			var li = document.createElement("LI");
		  	li.innerHTML = "Formler";
		  	ul.appendChild(li);
		}

	  }




	  catch(e){window.alert("Error {" + e + "}");}


	  /*var poop = powerOf("123^56");
	  window.alert(poop[0]);
	  window.alert(poop[1]);*/
	  //window.alert('hej'.includes('g'));

}

function powerOf(str) {

	var pSymbol = str.indexOf("^"),
	 	num1 = 0,
		num2 = 0,
		min = 0,
		max = 0;
	var	cSymbol = pSymbol;


	for (var i = pSymbol; i >= 0; i--) {
		if (parseInt(str.charAt(i)) === parseInt(str.charAt(i), 10) || str.charAt(i) == ".") {
			cSymbol--;
		}
	}

	num1 = str.substring(cSymbol,pSymbol);
	min = cSymbol;
	cSymbol = pSymbol;
	pSymbol++;
	cSymbol++;

	for (var i = 0; i < pSymbol; i++)  {
		if (parseInt(str.charAt(i)) === parseInt(str.charAt(i)) || str.charAt(i) == ".") {
			cSymbol++;
		}
	}
	num2 = str.substring(pSymbol,cSymbol);
	max = cSymbol;
	//window.alert(min);
	//window.alert(max);
	return [num1, num2];
}
