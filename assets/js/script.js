/* Back to top knap start */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 525 || document.documentElement.scrollTop > 525) {
        document.querySelector("#backtoTop").style.display = "block";
    } else {
        document.querySelector("#backtoTop").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/* Back to top knap slut */

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

/*Scroll down page starts */

/* Fanger ID i html til overskrifterne for diverse sektioner og scroller ned til det. */

function scrolldownM() {
  var elmnt = document.querySelector("#musik");
  elmnt.scrollIntoView();
}

function scrolldownU() {
  var elmnt = document.querySelector("#udendors");
  elmnt.scrollIntoView();
}

function scrolldownO() {
  var elmnt = document.querySelector("#born");
  elmnt.scrollIntoView();
}

function scrolldownF() {
  var elmnt = document.querySelector("#food");
  elmnt.scrollIntoView();
}
/*Scroll down page slut */

/* Modal start */

/* Ét modal start */
/* Hele modalet ligger i et div og er gemt væk med CSS.  */
var modal = document.querySelector("#openModal");

/* Javascripten fortæller modal at det kan lægge sig over resten af siden (se class=.modal i CSS). Baggrunden slørres også med CSS */
var open = document.querySelector("#modalClick");

/* Span er en ikke eksisterende knap der ligger uden for modal. Når der klikkes udenfor modal kommer content fra forsiden tilbage og modal går tilbage til ikke at være displayed */
var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
/* Ét modal slut */


/* Denne procedure fortsætter blot ned af, hvor ID er ændret for hver kasse (modalCLick- 1/2/3 osv.) */



/* Alle andre Modals. Start */
var modal = document.querySelector("#openModal");

var open = document.querySelector("#modalClick1");

var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.querySelector("#openModal");

var open = document.querySelector("#modalClick2");

var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.querySelector("#openModal");

var open = document.querySelector("#modalClick3");

var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.querySelector("#openModal");

var open = document.querySelector("#modalClick4");

var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.querySelector("#openModal");

var open = document.querySelector("#modalClick5");

var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.querySelector("#openModal");

var open = document.querySelector("#modalClick6");

var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.querySelector("#openModal");

var open = document.querySelector("#modalClick7");

var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.querySelector("#openModal");

var open = document.querySelector("#modalClick8");

var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.querySelector("#openModal");

var open = document.querySelector("#modalClick9");

var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.querySelector("#openModal");

var open = document.querySelector("#modalClick10");

var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.querySelector("#openModal");

var open = document.querySelector("#modalClick11");

var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.querySelector("#openModal");

var open = document.querySelector("#modalClick12");

var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.querySelector("#openModal");

var open = document.querySelector("#modalClick13");

var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.querySelector("#openModal");

var open = document.querySelector("#modalClick14");

var span = document.querySelector("lukmodal");
open.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/* Alle andre Modals. Slut */
/* Modal slut */

/* Stjerne/favorit start */

function fav() {
var icon = document.querySelector("#favIcon");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

function fav1() {
var icon = document.querySelector("#favIcon1");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

function fav2() {
var icon = document.querySelector("#favIcon2");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

function fav3() {
var icon = document.querySelector("#favIcon3");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

function fav4() {
var icon = document.querySelector("#favIcon4");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

function fav5() {
var icon = document.querySelector("#favIcon5");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

function fav6() {
var icon = document.querySelector("#favIcon6");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

function fav7() {
var icon = document.querySelector("#favIcon7");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

function fav8() {
var icon = document.querySelector("#favIcon8");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

function fav9() {
var icon = document.querySelector("#favIcon9");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

function fav10() {
var icon = document.querySelector("#favIcon10");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

function fav11() {
var icon = document.querySelector("#favIcon11");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

function fav12() {
var icon = document.querySelector("#favIcon12");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

function fav13() {
var icon = document.querySelector("#favIcon13");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}

function fav14() {
var icon = document.querySelector("#favIcon14");
  if (icon.classList.contains("fa-star-o")) {
    icon.classList.remove("fa-star-o");
    icon.classList.add("fa-star");
  } else {
    icon.classList.remove("fa-star");
    icon.classList.add("fa-star-o");
  }
}
/* Stjerne/favorit slut */





/*login system*/
/*var brugertext = document.querySelector(".brugerbox");

function setLocal(localBruger) {
  var jsonBruger = JSON.stringify(localBruger);
}

function getLocal( ){
  var bruger = localStorage.getItem("bruger");

  if(bruger == null)
  {
    return [];
  }
  else
  {
    return JSON.parse(bruger);
  }
}

function submitSignup()
{
  var brugernavn = document.querySelector("#usertext").value; console.log(brugernavn);
  var password = document.querySelector("#passtext").value; console.log(password);
  var orgiBruger = getLocal();

  var newBruge = {
    brugerNavn:   brugernavn,
    adgangsKode:  password,
  };

  orgiBruger.push(newBruge)

  setLocal(origBruger);
}

function buildList();
{
  var userList = getLocal();
  var ulElm= document.querySelector("ul");

  ulElm.innerHTML = "";

  for(var i=0; i < userList.length; i++)
  {
    var pElm = document.querySelector("p");

    pElm.innerHTML = userList[i].text;
  }
}

*/
/*function validater() {
  var brugerNavn = document.getElementById("brugerNavn").value
  var adgangsKode = document.getElementById("adgangsKode").value

  for(i = 0; i < newBruge.length; i++)
  {
    if(brugerNavn == newBruge[i].brugerNavn && adgangsKode == newBruge[i].adgangsKode) {
      window.open("index.html") && window.close("login.html");
      console.log(brugerNavn + " er logget ind");
    } else {
      return console.log("forkert brugernavn eller adgangskode");
    }
  }
}*/
/*Login system end*/
