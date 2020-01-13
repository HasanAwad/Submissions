document.querySelector("button").addEventListener("click", () => {
    if (
      document.getElementById("password").value !=
      document.getElementById("confirmation").value
    ) {
      document.getElementById("password").style.borderColor = "red";
      document.getElementById("confirmation").style.borderColor = "red";
    }
  });