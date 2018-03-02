var result = "";
var degrees = true;
var secnd = false;
//var konstanter = KONST;

window.onload = function() {
	lists()

	/*Nummer knappar.*/
	document.getElementById("b0").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";

		document.getElementById("txtArea").value += "0";
	});
	document.getElementById("b1").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "1";
	});
	document.getElementById("b2").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "2";
	});
	document.getElementById("b3").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "3";
	});
	document.getElementById("b4").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "4";
	});
	document.getElementById("b5").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "5";
	});
	document.getElementById("b6").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "6";
	});
	document.getElementById("b7").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "7";
	});
	document.getElementById("b8").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "8";
	});
	document.getElementById("b9").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "9";
	});
	/*Nummer knappar.*/
	/*Special tecken.*/
	document.getElementById("bp").addEventListener("click", function() {
		/*if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";*/
		if (!document.getElementById("txtArea").value.includes("."))
			document.getElementById("txtArea").value += ".";
	});
	document.getElementById("bE").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "1";
		document.getElementById("txtArea").value += "ᴇ";
	});
	document.getElementById("bSin").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "Sin(";
	});
	document.getElementById("bCos").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "Cos(";
	});
	document.getElementById("bTan").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "Tan(";
	});
	document.getElementById("bSqr").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "√(";
	});
	document.getElementById("bpv").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "(";
	});
	document.getElementById("bph").addEventListener("click", function() {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += ")";
	});
	document.getElementById("bPI").addEventListener("click", function () {
		if (document.getElementById("txtArea").value == "0")
			document.getElementById("txtArea").value = "";
		document.getElementById("txtArea").value += "π";
	});
	document.getElementById("bPO").addEventListener("click", function () {
		document.getElementById("txtArea").value += "^";
	});
	/*Special tecken.*/
	/*Andra grejer.*/

	

	document.getElementById("bResult").addEventListener("click", function() {
		try {
			result = document.getElementById("txtArea").value;
			
			result = result.replace("ᴇ", "*10^");

			if (result.includes("^")) {

				var powerAnt = FindSymbol(result,"^");
				var pAnt = powerAnt;

				for (var i = 0; i < pAnt.length; i++) {
					var powerTo = PowerOf(result,powerAnt[0]);


					//window.alert("\"" + powerTo[0] + "\"");
					//window.alert("\"" + powerTo[1] + "\"");
					//window.alert("\"" + result + "\"");
					//window.alert(powerAnt[0]);
					var t = "pow(" + powerTo[0] + "," + powerTo[1] + ")";
					result = result.replace(powerTo[0].toString() + "^" + powerTo[1].toString(),math.pow(powerTo[0], powerTo[1])); //"Math.pow(powerTo[0],powerTo[1])"
					powerAnt = FindSymbol(result, "^");
					//window.alert("\"" + result + "\"");
				}
			}

			if (secnd) {
				result = result.replace("Sin", "asin");
				result = result.replace("Cos", "acos");
				result = result.replace("Tan", "atan");
			} else {
				result = result.replace("Sin", "sin"); //result = result.replace("Sin", "asin");
				result = result.replace("Cos", "cos");
				result = result.replace("Tan", "tan");
			}
			result = result.replace("√", "sqrt");
			result = result.replace("π", "PI");
			//window.alert(result);

			//result = result.replace(")(", ")*(");

			if (result.charAt(result.length-2) == "/" && result.charAt(result.length-1) == "0") {
				window.alert("Fatal Error: Divided by Zero!");
				//document.getElementById("txtArea").value = "ʇsǝɥ llǝus ǝ ƃɐɾ";
				//result = "ʇsǝɥ llǝus ǝ ƃɐɾ";
				
			}

			

			/*var geval = eval;
			result = geval(result.toString());
			document.getElementById("txtArea").value = result;
			//window.alert(result);
			*/


			result = math.eval(result,KONST);
			result = result.toString().replace("e", "ᴇ");
			if (degrees) {
				
			}
			document.getElementById("txtArea").value = result;
		}
		catch (e) {
			window.alert(e);
			document.getElementById("txtArea").value = "0";
			result = "0";
		}
	});
	document.getElementById("bDel").addEventListener("click", function() {
		if (document.getElementById("txtArea").value.length < 2 && parseInt(document.getElementById("txtArea").value) > 0)
			document.getElementById("txtArea").value = "0";
		if (document.getElementById("txtArea").value.length > 1)
			document.getElementById("txtArea").value = document.getElementById("txtArea").value.substring(0, document.getElementById("txtArea").value.length-1);
	});
	document.getElementById("bClr").addEventListener("click", function() {
		document.getElementById("txtArea").value = "0";
	});
	/*Andra grejer.*/
	/*Operationer.*/
	document.getElementById("bAdd").addEventListener("click", function() {
		document.getElementById("txtArea").value += "+";
	});

	document.getElementById("bRemo").addEventListener("click", function() {
		document.getElementById("txtArea").value += "-";
	});

	document.getElementById("bMult").addEventListener("click", function() {
		document.getElementById("txtArea").value += "*";
	});

	document.getElementById("bDiv").addEventListener("click", function() {
		document.getElementById("txtArea").value += "/";
	});
	/*Operationer.*/

	


	  /*for (var i = 0; i<'56+78'.length; i++) {
		  window.alert('56+78'.charAt(i));
	  }*/

	  /*var poop = FindSymbol("5+5-6*4+4","+")
	  for (var i = 0; i < poop.length; i++) {
		  window.alert(poop[i]);
	  }*/


	  /*var poop = powerOf("5.0+123.0^56.0+6.0", '5.0+123.0^56.0+6.0'.indexOf("^"));
	  window.alert(poop[0]);
	  window.alert(poop[1]);*/
	  //window.alert('hej'.includes('g'));

}

function PowerOf(str,start) {

	var pSymbol = start,
	 	num1 = 0,
		num2 = 0,
		min = 0,
		max = 0;
	var	cSymbol = pSymbol;


	for (var i = pSymbol; i >= 0; i--) {
		//window.alert(str.charAt(i));
		if (str.charAt(i) == "+" || str.charAt(i) == "-" || str.charAt(i) == "*" || str.charAt(i) == "/") {
			break;
		}
		if (parseInt(str.charAt(i)) === parseInt(str.charAt(i), 10) || str.charAt(i) == "." || str.charAt(i) == "e") {
			cSymbol--;
		}
	}

	num1 = str.substring(cSymbol,pSymbol);

	min = cSymbol;
	cSymbol = pSymbol;
	cSymbol++;
	pSymbol++;


	for (var i = pSymbol; i < str.length; i++)  {
		//window.alert(str);
		//window.alert(str.charAt(i));
		if (str.charAt(i) == "+" || str.charAt(i) == "*" || str.charAt(i) == "/" || str.charAt(i) == "^") {
			break;
		}
		if (parseInt(str.charAt(i)) === parseInt(str.charAt(i), 10) || str.charAt(i) == "." || str.charAt(i) == "-" || str.charAt(i) == "e") {
			cSymbol++;
		}
	}
	num2 = str.substring(pSymbol,cSymbol);
	max = cSymbol;
	//window.alert(min);
	//window.alert(max);
	return [num1, num2];
}

function FindSymbol(str,symbol) {
	var symbols = [];
	for (var i = 0; i < str.length; i++) {
		//window.alert(str.charAt(i));
		if (str.charAt(i).toString() == symbol.toString()) {
			symbols.push(i);
		}
	}
	if (symbols.length < 0)
		return null;
	else
		return symbols;
}
