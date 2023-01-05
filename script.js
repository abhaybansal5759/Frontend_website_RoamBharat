
const element = document.getElementById("msg");
element.addEventListener("click", myFunction);

function myFunction() {
  alert("10 peope from your location has vsited this place in last months!!");
}

const element2 = document.getElementById("msg2");
element2.addEventListener("click", myFunction);

function myFunction() {
  alert("22 peope from your location has vsited this place in last months!!");
}

const element3 = document.getElementById("msg3");
element3.addEventListener("click", myFunction);

function myFunction() {
  alert("20 peope from your location has vsited this place in last months!!");
}

const element4 = document.getElementById("msg4");
element4.addEventListener("click", myFunction);

function myFunction() {
  alert("25 peope from your location has vsited this place in last months!!");
}
// locatio logic


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            // Success function
            showPosition, 
            // Error function
            null, 
            // Options. See MDN for details.
            {
               enableHighAccuracy: true,
               timeout: 5000,
               maximumAge: 0
            });
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;  
}
// search 
function openPage(){
  var x=document.getElementById("search").value;
  if(x==="T"){
      window.open("/test1.html");
  }
}