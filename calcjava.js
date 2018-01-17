window.onload = function() {


  var current,
      screen,
      output,
      limit,
      zero,
      period,
      operator;
    
      screen = document.getElementById("result");

  var elem = document.querySelectorAll(".num");
    
      var len = elem.length;
    
      for (var i = 0; i < len; i++) {
        
        elem[i].addEventListener("click",function() {
                  
            num = this.value;
                     
            output = screen.innerHTML += num;
                  
            limit = output.length;
         
         if (limit > 16 ) {
        
         alert("Sorry no more input is allowed");
             
       }
       
     },false);
        
    } 

    document.querySelector(".zero").addEventListener("click",function() {
        
        zero = this.value;
        
        if(screen.innerHTML === "") {
            
           output = screen.innerHTML = zero;  
        }
        
        else if(screen.innerHTML === output) {
            
         output = screen.innerHTML +=zero;
            
        }
          
    },false);
    
    document.querySelector(".period").addEventListener("click",function() {
        
        period = this.value;
        
        if(screen.innerHTML === "") {
            
         output = screen.innerHTML = screen.innerHTML.concat("0.");
            
         }
    
        else if(screen.innerHTML === output) {
        
          screen.innerHTML = screen.innerHTML.concat(".");
            
        }
        
    },false);
    
    
    document.querySelector("#eqn-bg").addEventListener("click",function() {
        
      if(screen.innerHTML === output) {
          
        screen.innerHTML = eval(output);
      }
        
      else {
            screen.innerHTML = "";
      }
          
    },false);
    
 document.querySelector("#delete").addEventListener("click",function() {
        
        screen.innerHTML = "";
        
    },false);
    
   
     var elem1 = document.querySelectorAll(".operator");
    
      var len1 = elem1.length;
    
      for(var i = 0; i < len1; i++ ) {
        
        elem1[i].addEventListener("click",function() {
         
        operator = this.value;
         
         if(screen.innerHTML === "") {
            
            screen.innerHTML = screen.innerHTML.concat("");
            
        }
        
        else if(output) {
        
            screen.innerHTML = output.concat(operator);
            
        }
           
    },false);
          
      }
      try {

        

      var ul = document.getElementById("konstanter");

      var antL = 80;

      for (var i = 0; i<antL; i++) {
        var li = document.createElement("LI");
        
        li.innerHTML = "Åsa";
        ul.appendChild(li);
      }
      
    }
    catch(e){window.alert("Error: " + e)}
      //window.alert("ajokdhsodf");


      
}
// JavaScript Document