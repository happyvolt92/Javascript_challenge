const container = document.querySelector(".container");
const myname = document.getElementById("myname");
const form = document.getElementById("formu");

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
let rule = /^[a-zA-Z]+$/;


function letterrules() {
    if ( myname.value.match(rule) )
    { console.log("ok"); show_alert(); }
    else {
        console.log("notok");
        myname.style.border = " solid red";
    }

}

form.addEventListener("submit", function (e)
{ e.preventDefault();
    letterrules();
    
});

