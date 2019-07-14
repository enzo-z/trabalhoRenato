var divgameElement = document.querySelector("div.game");

createCards();
//Depois que as cartas foram criadas...

const allCards = document.querySelectorAll("div.card");

let jaFlipou = false; 
let lockBoard = false; 
let carta1;
let carta2;
//O que eu tentei fazer: 
/*for(let thisCard of allCards){
    thisCard.onclick = function(){
        flipCard(thisCard);
    }
}*/
allCards.forEach(thisCard => { thisCard.addEventListener('click', flipCard)
});


console.log(allCards); 



//GAME -> card -> front e back!
//Dentro de card, tenho q ter front e back!
function createCards(){
    var nomecartas = ["arryn", "baratheon", "bolton", "greyjoy", "lannister", "stark", "targaryen", "tully", "tyrell"];
    var carta; //Div card
    var casaimg; //IMG da carta [FRONT], a casa do GoT q ela representa!
    var backcard; //BACK 


    for (let i = 0; i<nomecartas.length; i++){
        for (let j=1; j<=2; j++){
        //Frente
            carta = document.createElement("div");
            carta.setAttribute("class", "card");
            carta.setAttribute("data-id", "20zA1MA9"+(i*18)+"j0LH7");
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
        console.log('CARTA1:');
        console.log(carta1);
        return;
    } 
    
    
    carta2 = this;
    console.log('CARTA2:');
    console.log(carta2);

    checkMatch(carta1, carta2);
    
}

function checkMatch(carta1, carta2){ //Thanks to Marina Ferreira SPECIALLY on this function!
    if (carta1.getAttribute("data-id") == carta2.getAttribute("data-id")){
        console.log("Cartas iguais!");
        
        carta1.removeEventListener('click', flipCard);
        carta2.removeEventListener('click', flipCard);

        resetBoard();
    }
    else{ //Se as cartas não forem iguais:

        lockBoard = true;
        setTimeout(() => { //Arrow function
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

// "main":



