function bike()
{
}

function bikeSubmit()
{
  var ws = document.getElementById("H-WS").value;
  var msg = document.getElementById("H-MSG").value;
  var dateStart = document.getElementById("DATE-START").value;
  var dateEnd = document.getElementById("DATE-END").value;
  var body = ("").concat(msg, "\n", ws, "FROM:", ws, dateStart, ws, "TO:", ws, dateEnd);
  alert(body);
  document.getElementById("H-BODY").value = body;
  return true;
}
