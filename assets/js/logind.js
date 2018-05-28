var userData = [];

function submitBr() {
  //her henter jeg info som man skriver ind så det er tilgængelig til funktion//
  var brugerNavn = document.getElementById("userText").value;
  console.log(brugerNavn);
  var adgangsKode = document.getElementById("passText").value;
  console.log(adgangsKode);
//Her laver jeg et object og pusher datoen til det øverste array i toppen hvorefter jeg bruger json og sætter det i local storage//
  var infoObj = {navn:brugerNavn , "password":adgangsKode};
  userData.push(infoObj);
  localStorage.setItem("bruger1" ,JSON.stringify(userData));
}

function validator() {
//henter dataen fra local storage og parser den med Json//
  var localData = localStorage.getItem('bruger1');
  var convertedData = JSON.parse(localData);
  console.log(convertedData);
//finder de items jeg skal bruge fra objected. ps skriver 0 fordi det sidder i et array//
  var storedEmail = convertedData[0].navn;
  var storedPassword = convertedData[0].password;
//her renamer jeg de items jeg lige hentede for at gøre det nemmere for mig selv//
  var enteredEmail = document.getElementById('user');
  var enteredPassword = document.getElementById('pass')
//login check//
  if(enteredEmail.value !== storedEmail ||
    enteredPassword.value !== storedPassword) {
      alert('Fejl forkert brugernavn eller Adgangskode');
      return false;
  }else {
      alert('Sucess!');
      location.href = "index.html";
  }
}
function myFunction(){
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
