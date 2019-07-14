var divgameElement = document.querySelector("div.game");

createCards();

//Depois the cards were created!
const allCards = document.querySelectorAll("div.card");

let jaFlipou = false; 
let lockBoard = false; 
let carta1;
let carta2;

allCards.forEach(thisCard => { thisCard.addEventListener('click', flipCard)
});



//GAME -> card -> front[casaimg] and back 
// That's because we have frontface and backface
function createCards(){
    var nomecartas = ["arryn", "baratheon", "bolton", "greyjoy", "lannister", "stark", "targaryen", "tully", "tyrell"];
    var carta; 
    var casaimg; //The house wich the card belongs in the GoT XD
    var backcard;

    for (let i = 0; i<nomecartas.length; i++){
        for (let j=1; j<=2; j++){
            //Front
            carta = document.createElement("div");
            carta.setAttribute("class", "card");
            carta.setAttribute("data-id", "20zA1MA9"+(i*18)+"j0LH7");
            casaimg = document.createElement("img");
            casaimg.setAttribute("class", "front");
            casaimg.setAttribute("src", "img/"+nomecartas[i]+".png");
            casaimg.setAttribute("alt", nomecartas[i]);

            //Back
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


function flipCard(){
    if (lockBoard == true){ 
        return;
    }
    if(this == carta1){
        return;
    }
    this.classList.toggle("turn");
    if (jaFlipou == false){
        jaFlipou = true;
        carta1 = this;
        return;
    } 
    carta2 = this;
    checkMatch(carta1, carta2);
    
}

function checkMatch(carta1, carta2){ //Thanks to Marina Ferreira SPECIALLY on this function!
    if (carta1.getAttribute("data-id") == carta2.getAttribute("data-id")){    
        carta1.removeEventListener('click', flipCard);
        carta2.removeEventListener('click', flipCard);
        resetBoard();
    }
    else{ //Se as cartas não forem iguais:
        lockBoard = true;
        setTimeout(() => {                   //Arrow function!
            carta1.classList.remove('turn');
            carta2.classList.remove('turn');
            resetBoard();
        }, 1200);
    }
}
function resetBoard(){
    [lockBoard, jaFlipou] = [false, false];
    [carta1, carta2] = [null, null];
}

(function shuffleCards(){
    for(let card of allCards){
        let randomiza = Math.floor( Math.random()  * allCards.length);
        card.style.order = randomiza;
        

    }
})(); //Immediately Invoked Function Expression UHUUL
