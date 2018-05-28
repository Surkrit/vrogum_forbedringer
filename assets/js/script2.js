
/* Deltag start */
var input = document.getElementById("quantityfield");
function subtract(){
  var total = +input.value;
  total--;
  input.value = total;
}
function add(){
  var total = +input.value;
  total++;
  input.value = total;
}{
document.getElementById("buttonminus").onclick = subtract;
document.getElementById("buttonplus").onclick = add;
}

/* Deltag slut */
