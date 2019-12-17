document.querySelector("button").addEventListener("click", e => {
  var r = confirm("Press a button!");
  if (r == true) {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("city").value = "";
  }
});
