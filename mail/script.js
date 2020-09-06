var userMail = prompt("inserisci la tua mail:");

var mail = ["stefano@hotmail.com", "roberto@hotmail.com", "alessandro@hotmail.com", "francesco@hotmail.com", "massimo@hotmail.com", "angela@hotmail.com",];

var msg = document.getElementById('message');
var nonEsiste = true;


// if (mail.indexOf(userMail) === -1) {
//    document.getElementById('message').innerHTML = "this mail doesn't exist"
// } else {
//    document.getElementById('message').innerHTML = "WELCOME"
// };

for (var i = 0; i < mail.length; i++) {
   if (mail[i] == userMail ) {
      msg.innerHTML = "WELCOME";
      nonEsiste = false;
      console.log(userMail);
   } 
};

if(nonEsiste) {
   msg.innerHTML = "la mail non esiste";
}

// else {
//    j++;
// }
// if (j == mail.length) {
//    msg.innerHTML = "la mail non esiste";
// }

// var prova = [];
//  prova [2] = "qualcosa";
//  console.log(prova);
 