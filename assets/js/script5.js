/* Slider next/previous start */
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
/* Slider next/previous slut */


/* Back to top knap start */
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

/* Back to top knap slut */

/* Stjerne/favorit start */
/*
function fav() {
var icon = document.getElementById("favIcon");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

*/
/* Stjerne/favorit slut */
