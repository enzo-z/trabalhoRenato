var divgameElement = document.querySelector("div.game");
createCards();


//GAME -> card -> front e back!
//Dentro de card, tenho q ter front e back!
function createCards(){
    var nomecartas = ["baratheon", "bolton", "greyjoy", "lannister", "stark", "targaryen"];
    var carta; //Div card
    var casaimg; //IMG da carta [FRONT]
    var backcard; //BACK 


    for (let i = 0; i<nomecartas.length; i++){
        for (let j=1; j<=2; j++){
        //Frente
            carta = document.createElement("div");
            carta.setAttribute("class", "card");
            casaimg = document.createElement("img");
            casaimg.setAttribute("class", "front");
            casaimg.setAttribute("src", "img/"+nomecartas[i]+".png");
            casaimg.setAttribute("alt", nomecartas[i]);

            //Verso
            backcard = document.createElement("img");
            backcard.setAttribute("class", "back");
            backcard.setAttribute("src", "img/zcorvo.jpg");
            backcard.setAttribute("alt", "trono");

            carta.appendChild(casaimg);
            carta.appendChild(backcard);
            divgameElement.appendChild(carta);
        }
    }

}