/*
################################################################
#SoE: Website
#Copyright © 2024 Allison Munn
#FULL COPYRIGHT NOTICE IS IN README
################################################################
*/

function roomSubmit(event)
{
  
  var valR = true;
  //var ws = document.getElementById("H-WS").value;
  //var msg = document.getElementById("H-MSG").value;
  var dateStart = document.getElementById("FORM-ROOM-DATE-CHECK-IN").value;
  var dateEnd = document.getElementById("FORM-ROOM-DATE-CHECK-OUT").value;
  //var body = ("").concat(msg, ws, "\n", "FROM:", ws, dateStart, ws, "TO:", ws, dateEnd);
  //alert(body);
  //alert(navigator.platform);
  
  //if(navigator.platform === "iPhone") valR = true;
  //if(navigator.platform === "MacIntel") valR = false;
  
  //document.getElementById("FORM-ROOM-H-BODY").value = msg;
  
  if(dateStart > dateEnd)
  {
    alert("Invalid Dates");
    valR = false;
  }
  
  if(valR)
  {
    //document.getElementById("FORM-ROOM-H-BODY").value = body;
  }
  else
  {
    event.preventDefault();
  }
  
  return valR;
}

function room()
{
  //var bikeForm = document.getElementById("FORM-RENT");
  //bikeForm.addEventListener("submit", bikeSubmit);
}