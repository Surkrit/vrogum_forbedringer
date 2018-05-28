/* Slider start */
var Slider = 0;
imageSlide();

function imageSlide() {
    var i;
    var x = document.getElementsByClassName("forsidebilleder");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    Slider++;
    if (Slider > x.length) {Slider = 1}
    x[Slider-1].style.display = "block";
    setTimeout(imageSlide, 7000);
}
/* Slider slut */

/*Scroll down page starts */
function scrolldownM() {
  var elmnt = document.getElementById("musik");
  elmnt.scrollIntoView();
}

function scrolldownU() {
  var elmnt = document.getElementById("udendors");
  elmnt.scrollIntoView();
}

function scrolldownO() {
  var elmnt = document.getElementById("born");
  elmnt.scrollIntoView();
}

function scrolldownF() {
  var elmnt = document.getElementById("food");
  elmnt.scrollIntoView();
}
/*Scroll down page slut */
