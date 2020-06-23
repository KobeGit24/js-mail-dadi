var btn = document.getElementById('btn');

btn.addEventListener("click", function() {

    var giocatore = Math.floor( Math.random() * 6 + 1);
    var computer = Math.floor( Math.random() * 6 + 1);

if (giocatore>computer) {
        console.log("vince giocatore");        
     } else if (computer>giocatore) {
        console.log("vince computer");        
     } else {
        console.log("pareggio");
     };
});