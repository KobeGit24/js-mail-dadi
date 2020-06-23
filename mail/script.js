var userMail = prompt("inserisci la tua mail:");

var mail = ["stefano@hotmail.com", "roberto@hotmail.com", "alessandro@hotmail.com", "francesco@hotmail.com", "massimo@hotmail.com", "angela@hotmail.com",];

if (mail.indexOf(userMail) === -1) {
   document.getElementById('message').innerHTML = "this mail doesn't exist"
} else {
   document.getElementById('message').innerHTML = "WELCOME"
};