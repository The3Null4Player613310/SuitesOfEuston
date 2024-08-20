/*
################################################################
#SoE: Website
#Copyright © 2024 Allison Munn
#FULL COPYRIGHT NOTICE IS IN README
################################################################
*/

function bikeSubmit(e)
{
  //event.preventDefault();
  var ws = document.getElementById("H-WS").value;
  var msg = document.getElementById("H-MSG").value;
  var dateStart = document.getElementById("DATE-START").value;
  var dateEnd = document.getElementById("DATE-END").value;
  var body = ("").concat(msg, ws, "\n", "FROM:", ws, dateStart, ws, "TO:", ws, dateEnd);
  //alert(body);
  //alert(navigator.platform);
  if(dateStart > dateEnd)
  {
    return false;
  }
  document.getElementById("H-BODY").value = body;
  
  if(navigator.platform === "iPhone") return true;
  if(navigator.platform === "MacIntel") return false;
  return true;
}

function bike()
{
  //var bikeForm = document.getElementById("FORM-RENT");
  //bikeForm.addEventListener("submit", bikeSubmit);
}
