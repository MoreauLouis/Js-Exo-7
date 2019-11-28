var validation = document.getElementById (`submit`);
validation.addEventListener ( `click`, f_valid)
function f_valid() {
  var number1 = document.getElementById('number1').value;
  if (number1 <= 18) {
    alert("Tu rentres pas");
  } else {
    alert("Bonjour Monsieur");
  }
}
