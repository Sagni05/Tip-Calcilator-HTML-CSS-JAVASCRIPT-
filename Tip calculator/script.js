function cal() {
  var amt = document.getElementById("main2").value;

  var ser = document.getElementById("main4").value;

  var pep = document.getElementById("main6").value;

  var result = (amt * ser) / pep;
  document.getElementById("main8").innerHTML = result;
}
