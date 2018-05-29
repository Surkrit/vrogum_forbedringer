/* Slider start */
var i=0;
var kage = document.querySelector('.sliderimg');
var els = kage.querySelectorAll(':not(:first-child)');
for (i=0; i < els.length; i++) {
  els[i].classList.add('hidden');
}
kage.addEventListener('transitionend', function(){
  kage.insertBefore(kage.querySelector(':first-child.hidden'), null);
});
setInterval(function(){
  kage.querySelector(':first-child').classList.add('hidden');
  kage.querySelector(':nth-child(2)').classList.remove('hidden');
}, 5000)
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
