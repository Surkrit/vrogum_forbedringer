/* Deltag start */
/* quantityfield er feltet inde imellem plus og minus knappen. */
var input = document.getElementById("quantityfield");

/* En funktion skabes for de to knapper "plus og minus" (i dette tilfælde add/subtract). Funktionen går ind og har en effekt på input(quantityfield) */
function subtract(){
  var total = +input.value;
  total--;
  input.value = total;
}
function add(){
  var total = +input.value;
  total++;
  input.value = total;
}

/* onclick udfører funktionen når der trykkes på knappen. Aktiveres vha. ID(button-plus/minus). */ 
{
document.getElementById("buttonminus").onclick = subtract;
document.getElementById("buttonplus").onclick = add;
}

/* Deltag slut */
