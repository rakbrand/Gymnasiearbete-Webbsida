function lists() {
    
    try {
		var ul = document.getElementById("konstanter");
		for (var i in KONST) {
            var li = document.createElement("LI");
            var t = KONST[i];
            //t = t.replace('e','^');
            //t = t + 'fdfdf';
            //li.innerHTML = "<a>$$\b" +  i + " = " + t + "$$</a>";
            li.setAttribute('dataKONST', i + ": " + KONST[i]);
		  	li.innerHTML = "<a>$$\b" +  i + " = " + t + "$$</a>";
		  	ul.appendChild(li);
		}
        /*.setAttribute('data', "icon: 'base2.gif', url: 'output.htm', target: 'AccessPage', output: '1'");*/



		ul = document.getElementById("formler");
		for (var i in FORM) {
			var li = document.createElement("LI");
              li.innerHTML = "<a>$$\b" + i + ": " + FORM[i] + "$$</a>";
              li.setAttribute('dataFORM', i + ": " + FORM[i]);
		  	ul.appendChild(li);
		}

	  }
	  catch(e){window.alert("Error {" + e + "}");}
}
function searchingKonst() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchFilterKonst");
    filter = input.value.toUpperCase(); //filter = input.value.toUpperCase();
    ul = document.getElementById("konstanter");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        //a = li[i].getElementsByTagName("a")[0];
        a = li[i].getAttribute("dataKONST");
        //console.log(a.innerHTML.toUpperCase().indexOf(filter));
        if (a.toUpperCase().indexOf(filter) > -1) { //if (a.innerHTML.toUpperCase().indexOf(filter) > -1)
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
        //a = li[i].getElementsByTagName("a")[0];
        a = li[i].getAttribute("dataFORM");
        //console.log(a.innerHTML.toUpperCase().indexOf(filter),a.innerHTML.toUpperCase());
        if (a.toUpperCase().indexOf(filter) > -1) { //if (a.innerHTML.toUpperCase().indexOf(filter) > -1)
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}