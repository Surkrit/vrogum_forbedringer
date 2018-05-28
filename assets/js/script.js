/*login system*/
var brugertext = document.querySelector(".brugerbox");

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
