var confirm = [
  {
    username: "Eal12345",
    password: "123456"
  }
]

function validator(){
  var username = document.querySelector("#user").value;
  var password = document.querySelector("#pass").value;

  for(i = 0; i < confirm.length; i++) {
    if (username == confirm[i].username && password == confirm[i].password) {
      window.open("index.html") && window.close("login.html");
    }
  }
  alert("Forkert brugernavn eller kodeord")
}

function myFunction(){
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
