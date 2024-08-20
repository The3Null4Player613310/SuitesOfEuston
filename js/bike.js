/*
################################################################
#SoE: Website
#Copyright © 2024 Allison Munn
#FULL COPYRIGHT NOTICE IS IN README
################################################################
*/

function bikeSubmit(event)
{
  
  var valR = true;
  var ws = document.getElementById("FORM-BIKE-H-WS").value;
  var msg = document.getElementById("FORM-BIKE-H-MSG").value;
  var dateStart = document.getElementById("FORM-BIKE-DATE-START").value;
  var dateEnd = document.getElementById("FORM-BIKE-DATE-END").value;
  var body = ("").concat(msg, ws, "\n", "FROM:", ws, dateStart, ws, "TO:", ws, dateEnd);
  //alert(body);
  //alert(navigator.platform);
  
  if(navigator.platform === "iPhone") valR = true;
  if(navigator.platform === "MacIntel") valR = false;
  
  document.getElementById("FORM-BIKE-H-BODY").value = msg;
  
  if(dateStart > dateEnd)
  {
    alert("Invalid Dates");
    valR = false;
  }
  
  if(valR)
  {
    document.getElementById("FORM-BIKE-H-BODY").value = body;
  }
  else
  {
    event.preventDefault();
  }
  
  return valR;
}

function bike()
{
  //var bikeForm = document.getElementById("FORM-RENT");
  //bikeForm.addEventListener("submit", bikeSubmit);
}
