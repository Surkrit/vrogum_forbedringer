var userData = [];

function opBegivenhed() {

  var overSkrift = document.getElementById("beOv").value;
  var arrangør = document.getElementById("beAr").value;
  var adresse = document.getElementById("beAd").value;
  var tid = document.getElementById("beTid").value;
  var dato = document.getElementById("beDato").value;
  var beskrivelse = document.getElementById("beBe").value;

  var infoBe = {titel:overSkrift, person:arrangør, sted:adresse, klokken:tid, datum:dato, forklaring:beskrivelse};
  userData.push(infoBe);
  localStorage.setItem("begivenhed1" , JSON.stringify(userData));
}
