canvasElement.width = 400;
canvasElement.height = 400;

var c = canvasElement.getContext("2d");  //Setando canvas pra 2d
c.height = canvasElement.height;
c.width = canvasElement.width;
var intervalo = c.height/10; //<<--- [REVISAR ISTO AQUI!] 

function constroiCanvas(){
    c.clearRect(0, 0, c.width, c.height); //Atualizar canvas

    //Desenhando o plano cartesiano
    //Eixo x
    c.beginPath();
    c.moveTo(0, c.height/2);
    c.lineTo(c.width, c.height/2);
    c.stroke();
    c.closePath();

    //Eixo y
    c.beginPath();
    c.moveTo(c.width/2, c.height);
    c.lineTo(c.width/2, 0);
    c.stroke();
    c.closePath();

    //Bolinha vermelha no eixo(0,0)
    c.beginPath();
    c.arc(c.width/2, c.height/2, 3, 0, Math.PI *2, false);
    c.fillStyle = "rgba(255, 0, 0, 1)";
    c.fill();
    
    //Criando os tracinhos nos eixos. VER SE CONSIGO ADICIONAR NÚMEROS DEPOIS!
    numeraLinha(c.width/2, c.height/2);



}

function numeraLinha(linhaX, linhaY){
    console.log(intervalo);
    for(let i = 0; i<=10; i++){
        c.beginPath();
        c.moveTo(i*intervalo , linhaY +10);
        c.lineTo(i*intervalo , linhaY -10 );
        c.stroke();
        c.closePath();
    }
    for(let i = 0; i<=10; i++){
        c.beginPath();
        c.moveTo(linhaX+10, i*intervalo);
        c.lineTo(linhaX-10 ,i*intervalo);
        c.stroke();
        c.closePath();
    }
}

function drawRoots(r1, r2){
    c.beginPath();
    console.log("DENTRO DO DRAW ROOTS: " +r1);
    c.fillStyle = "rgba(255, 255, 0, 1)";
    c.arc(c.width/2+(r1*intervalo), c.height/2, 3, 0, Math.PI *2, false);
    c.arc(c.width/2+(r2*intervalo), c.height/2, 3, 0, Math.PI *2, false);
    c.fill();
    c.closePath();

}

function drawVert(vx, vy){
    c.beginPath();
    console.log(vy);
    c.fillStyle = "rgba(0, 255, 0, 1)";
    c.arc(c.width/2 + (vx * intervalo), (c.height/2)-(vy*intervalo), 3, 0, Math.PI*2, false);
    c.fill();
    c.closePath();
}


function drawParabola(r1, r2, vx, vy, delta, numeros){ //ALERTA DE GAMBIARRA PRO ENZO DO FUTURO!
    c.beginPath();

    if (delta == 0){ //Gambiarríssima [VERIFICAR URGENTEMENTE]
        if (numeros[0] > 0){
            c.moveTo(c.width/2, 0);
            c.quadraticCurveTo(c.width/2+r1*intervalo, c.height, c.width/2 + (r1*intervalo*2), 0);
            c.stroke();
        }
        if (numeros[0] < 0){
            c.moveTo(c.width/2, c.height*2);
            c.quadraticCurveTo(c.width/2+r1*intervalo, c.height, c.width/2 + (r1*intervalo*2), c.height*2);
            c.stroke();
        }

    }

    //Se tem duas raizes reais: (Não é gambiarra), MAS BOM REVISAR
    if (delta > 0){
    c.moveTo(c.width/2 + (r1 * intervalo), c.height/2);
    c.quadraticCurveTo(c.width/2 + (vx * intervalo), (c.height/2)-vy*intervalo*2, c.width/2 + (r2*intervalo), c.height/2);    
    c.stroke();
    }

    //Gambiarra [VERIFICAR]
    if(delta < 0){
        if(vy>0){
            c.moveTo(c.width/2 + (vx*intervalo*2), 0);
            c.quadraticCurveTo(c.width/2 + (vx * intervalo), 0 + ((5-vy)*intervalo*2) , c.width/2 - (vx), 0);
            c.stroke();         

        }

        if (vy<0){
            c.moveTo(c.width/2 +(vx*intervalo*2), c.height);
            c.quadraticCurveTo(c.width/2 + (vx * intervalo), (c.height)-((4-vy)*intervalo), c.width/2 - (vx), c.height);
            c.stroke();
        }


    }
    c.closePath();
}






