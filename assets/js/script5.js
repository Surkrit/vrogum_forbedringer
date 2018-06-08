/* Slider next/previous start */

/*

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("forsidebilleder");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

*/

/* Slider next/previous slut */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
        document.getElementById("backtoTop").style.display = "block";
    } else {
        document.getElementById("backtoTop").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.getElementById("favIcon").classList.toggle('fas fa-heart');
document.getElementById("favIcon").classList.toggle('far fa-heart');
