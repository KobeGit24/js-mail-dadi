var userMail = prompt("inserisci la tua mail:");

var mail = ["stefano@hotmail.com", "roberto@hotmail.com", "alessandro@hotmail.com", "francesco@hotmail.com", "massimo@hotmail.com", "angela@hotmail.com",];

var msg = document.getElementById('message');

// if (mail.indexOf(userMail) === -1) {
//    document.getElementById('message').innerHTML = "this mail doesn't exist"
// } else {
//    document.getElementById('message').innerHTML = "WELCOME"
// };

for (var i = 0; i < mail.length; i++) {
   if (mail[i] == userMail) {
      msg.innerHTML = "WELCOME"
   } else {
      msg.innerHTML = "this mail doesn't exist"
   }
};