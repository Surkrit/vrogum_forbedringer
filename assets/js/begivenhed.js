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

function submitUser(overSkrift, arrangør, adresse, tid, dato, beskrivelse)
{
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
    var delBtnEml = document.createElement("button");
    var ediBtnEml  = document.createElement("button");
    var deltagBtnEml = document.createElement("button");

    ovElm.innerHTML = dataList[i].text;
    arElm.innerHTML = dataList[i].text;
    adElm.innerHTML = dataList[i].text;
    tiElm.innerHTML = dataList[i].text;
    daElm.innerHTML = dataList[i].text;
    beElm.innerHTML = dataList[i].text;

    ediBtnEml.innerHTML = "Edite";
    ediBtnEml.setAttribute("data-index", i);

    ediBtnEml.addEventListener("click", submitEdiEvent);

    delBtnEml.innerHTML = "Delete";
    delBtnEml.setAttribute("data-index", i);

    delBtnEml.addEventListener("click", submitDelEvent);

    deltagEml.innerHTML = "Deltag";
    deltagEml.setAttribute("data-index", i);

    deltagBtnEml.addEventListener("click", submitDeltagEvent);


    liElm.appendChild(ovElm);
    liElm.appendChild(arElm);
    liElm.appendChild(adElm);
    liElm.appendChild(tiElm);
    liElm.appendChild(adElm);
    liElm.appendChild(beElm);
    liElm.appendChild(delBtnEml);
    liElm.appendChild(ediBtnEml);
    liElm.appendChild(deltagBtnEml);

    ulElm.appendChild(liElm);
  }
}

function submitEdiEvent(event)
{
 var arrIndex = event.target.getAttribute("data-index");
 var user = getLocal();
 var promEdi = prompt();

console.log(user[arrIndex].text);
 if(promEdi.length > 0)
 {
   user[arrIndex].text = promEdi;
 }
 else
 {
   alert("Du skrev ikke noget");
 }

 setLocal(user);
 buildList();
}

function submitDelEvent(event)
{
 var arrIndex = event.target.getAttribute("data-index");
 var user = getLocal();

 user.splice(arrIndex, 1);

 setLocal(user);
 buildList();
}

function submitUserEvent(event)
{
 console.log("submit new User goes here");

 var beOv = document.querySelector("#beOv");
 var beAr = document.querySelector("#beAr");
 var beAd = document.querySelector("#beAd");
 var beTid = document.querySelector("#beTid");
 var beDato = document.querySelector("#beDato");
 var beBe = document.querySelector("#beBe");

 submitUser(beOv.value, beAr.value, beAd.value, beTid.value, beDato.value, beBe.value);
 buildList();
 infoUser.style.border = "5px solid green";
 infoUser.style.display = "none";

}

function submitDeltagEvent(event)
{
  
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
