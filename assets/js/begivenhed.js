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

function setLocal(localUser) //noget vi gerne vil gemme
{
  var jsonUser = JSON.stringify(localUser);

  localStorage.setItem("user", jsonUser);
  //nu kan vi gemme vores noter
}

function getLocal()
{
  var user = localStorage.getItem("user");
// vi vil gerne hente det array der er inde i notes
  if(user == null)
  {
    return [];
    //hvis der ikke er nogen array i notes, så er det bare tomt
  }
  else {
    return JSON.parse(user);
    //JSON laver det om til javascript
  }
}

function submitUser(overSkrift, arrangør, adresse, tid, dato, beskrivelse)
{
  var origUser = getLocal();

  var newUser = { //denne variabel opbevarer bare data
    overSkrift:   overSkrift,
    arrangør:     arrangør,
    adresse:      adresse,
    tid:          tid,
    dato:         dato,
    beskrivelse:  beskrivelse,
  };

  origUser.push(newUser);
  //tilføjelse newNote ind på arrayet

  setLocal(origUser);
  //vi har testet origNotes og nu vil vi sætte det ind på setLocal
}
/*bygger den fysiske liste som bliver vist*/
function buildList() {
  var dataList = getLocal();
  //Nu ved ved den hvor den skal hente notelisten
  var ulElm = document.querySelector("ul");
  //for at kalde på et html element - vi kalder på ul(listen)

  ulElm.innerHTML ="";
  //så den ikke tilføjer hele listen igen når man tilføjer en note

  for(var i = 0; i < dataList.length; i++)
  //dette er et loop
  {
    var liElm = document.createElement("li");
    var ovElm = document.createElement("h2");
    var arElm = document.createElement("p");
    var adElm = document.createElement("p");
    var tiElm = document.createElement("p");
    var daElm = document.createElement("p");
    var beElm = document.createElement("p");
    var delBtnEml = document.createElement("button");
    //Her laver vi 2 kanapper
    var ediBtnEml  = document.createElement("button");
    //vi laver et html element - vi gør det for at gøre det dynamisk

    //nu har vi tilføjet tekst fra setLocal
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

    //Man sætter Elementer på liElm(som er vores liste)
    liElm.appendChild(ovElm);
    liElm.appendChild(arElm);
    liElm.appendChild(adElm);
    liElm.appendChild(tiElm);
    liElm.appendChild(adElm);
    liElm.appendChild(beElm);
    liElm.appendChild(delBtnEml);
    liElm.appendChild(ediBtnEml);
    //Her sætter vi vore liElm ind i vores ulElm
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
   // vi kalder på variabelen for at hente data fra getLocal, aarIndex= nr. note (0-..) og den er = promEdi, fordi det er der hvor vores prompt er
 }
 else
 {
   alert("Du skrev ikke noget");
 }

 setLocal(user);
 buildList();
 // genopbygger vores liste
}

function submitDelEvent(event)
{
 var arrIndex = event.target.getAttribute("data-index");
 var user = getLocal();

 user.splice(arrIndex, 1);
 //splice bruges til at kunne slette et note

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
 infoUser.style.display = "none";

}

window.onload = function()
//call back struktur - det er her vi bygger vores liste

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
