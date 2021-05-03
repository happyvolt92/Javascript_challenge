const container = document.querySelector(".container");

//changing color challenge//
var count = 0;

container.addEventListener("click", function () {
    if (count % 2 == 0) {
    container.style.background = "yellow";
    count++;
    } else {
    container.style.background = "green";
    count++;
    }
    if (count % 5 == 0) {
        container.style.background = "red";
    }
    console.log(count);
    });
    
    
//name message alert//
function show_alert() 
{     
  var name = document.getElementById('myname').value;
  alert("Hello "+ name);
} 

//alert with strange characters//
function show_alert() 
{     
  var name = document.getElementById('myname').value;
  alert("utilisation de charactères spéciaux interdit ! ");
} 