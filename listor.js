function lists() {
    
    try {
		var ul = document.getElementById("konstanter");
		for (var i in KONST) {
			var li = document.createElement("LI");
		  	li.innerHTML = "<a>" +  i + " = " + KONST[i] + "</a>";
		  	ul.appendChild(li);
		}

		ul = document.getElementById("formler");
		for (var i in FORM) {
			var li = document.createElement("LI");
		  	li.innerHTML = "<a>$$\b" + i + ": " + FORM[i] + "$$</a>";
		  	ul.appendChild(li);
		}

	  }
	  catch(e){window.alert("Error {" + e + "}");}
}
function searchingKonst() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchFilterKonst");
    filter = input.value; //filter = input.value.toUpperCase();
    ul = document.getElementById("konstanter");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.indexOf(filter) > -1) { //if (a.innerHTML.toUpperCase().indexOf(filter) > -1)
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

function searchingForm() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchFilterForm");
	filter = input.value.toUpperCase(); //filter = input.value.toUpperCase();
    ul = document.getElementById("formler");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) { //if (a.innerHTML.toUpperCase().indexOf(filter) > -1)
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}