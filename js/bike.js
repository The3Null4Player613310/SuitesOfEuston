function bike()
{
}

function bikeSubmit()
{
  var msg = document.getElementById("H-MSG").value;
  var dateStart = document.getElementById("DATE-START").value;
  var dateEnd = document.getElementById("DATE-END").value;
  var body = ("").concat(msg, " ", dateStart, " - ", dateEnd);
  alert(body);
  document.getElementById("H-BODY").value = body;
  return true;
}