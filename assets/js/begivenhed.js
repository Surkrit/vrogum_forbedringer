/*bygger et array for begivenhederne*/
/*var userData = [];

function opBegivenhed(overSkrift, arrangør, adresse, tid, dato, beskrivelse) {

  var overSkrift = document.getElementById("beOv").value;
  var arrangør = document.getElementById("beAr").value;
  var adresse = document.getElementById("beAd").value;
  var tid = document.getElementById("beTid").value;
  var dato = document.getElementById("beDato").value;
  var beskrivelse = document.getElementById("beBe").value;

  var infoBe = {titel:overSkrift, person:arrangør, sted:adresse, klokken:tid, datum:dato, forklaring:beskrivelse};
  userData.push(infoBe);
  localStorage.setItem("begivenhed1" , JSON.stringify(userData));
}*/
var infoUser = document.querySelector("#infoUser");

function setLocal(localUser)
{
  var jsonUser = JSON.stringify(localUser);

  localStorage.setItem("user", jsonUser);
}

function getLocal()
{
  var user = localStorage.getItem("user");

  if(user == null)
  {
    return [];
  }
  else {
    return JSON.parse(user);
  }
}

function submitUser(overSkrift, arrangør, adresse, tid, dato, beskrivelse){
  var origUser = getLocal();

  var newUser = {
    overSkrift:   overSkrift,
    arrangør:     arrangør,
    adresse:      adresse,
    tid:          tid,
    dato:         dato,
    beskrivelse:  beskrivelse,
  };

  origUser.push(newUser);

  setLocal(origUser);
}
/*bygger den fysiske liste som bliver vist*/
function buildList() {
  var dataList = getLocal();
  var ulElm = document.querySelector("ul");

  ulElm.innerHTML ="";

  for(var i = 0; i < dataList.length; i++)
  {
    var liElm = document.createElement("li");
    var ovElm = document.createElement("h2");
    var arElm = document.createElement("p");
    var adElm = document.createElement("p");
    var tiElm = document.createElement("p");
    var daElm = document.createElement("p");
    var beElm = document.createElement("p");

    liElm.style.borderColor = "#388c01";

    pElm.innerHTML = dataList[i].text;

    liElm.appendChild(ovElm);
    liElm.appendChild(arElm);
    liElm.appendChild(adElm);
    liElm.appendChild(tiElm);
    liElm.appendChild(adElm);
    liElm.appendChild(beElm);

    ulElm.appendChild(liElm);
  }
}

function submitUserEvent(event)
{
 console.log("submit new User goes here");

 var userText = document.querySelector("#beOv");
 var userArr = document.querySelector("#beAr");
 var userAdre = document.querySelector("#beAd");
 var userTim = document.querySelector("#beTid");
 var userDat = document.querySelector("#beDato");
 var userBeskriv = document.querySelector("#beBe");

 submitUser(userText.value, userArr.value, userAdre.value, userTim.value, userDat.value, userBeskriv.value);
 buildList();
 infoUser.style.display = "none";
}

window.onload = function()
{
  buildList();
}

var opBeBtn = document.querySelector("#opBe");

opBeBtn.addEventListener("click", function(event)
{

  infoUser.style.display = "block";
});

var submitUserBtn = document.querySelector("#opBe");

submitUserBtn.addEventListener("click", submitUserEvent);
