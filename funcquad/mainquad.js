//COMMENTS ARE IN PORTUGUESE! (pt-br)
//JS da função quadrática [Calculos]
var btnElement = document.getElementById("btn");
var canvasElement = document.getElementById("canvas");
var raizesElement = document.getElementById("roots");
var vertElement = document.getElementById("vertices");

btnElement.onclick = function(){
    
    funcQuad(getNumeros());
 

}



function funcQuad(numeros){ //Numeros[0] == a, numeros[1] == b, numeros[2] == c!
    console.log("Entrou aqui");
    if (numeros[0] == undefined || numeros[1] == undefined || numeros[2] == undefined){
        return;
    }
    console.log("Dentro do funcQuad: "+ numeros[0], numeros[1], numeros[2]);
    var delta = Math.pow(numeros[1], 2) - (4 * numeros[0] * numeros[2]);
    var r1, r2; // Raizes
    var vx, vy; // vertices
    if (delta < 0){
        raizesElement.textContent = "It has no real roots!";

    }
    if (delta == 0){
        r1 = ((-numeros[1]) + Math.sqrt(delta))/ 2 * numeros[0];
        raizesElement.textContent =  "Only one root: "+ r1;
    }
    
    if(delta > 0){
        r1 = (-numeros[1] + Math.pow(delta, 0.5)) / (2 * numeros[0]);
        r2 = ((-numeros[1]) - Math.sqrt(delta))/ (2 * numeros[0]);
        raizesElement.textContent = "Duas raízes! R1: "+r1+" e R2: "+r2;
    }
    
    vy = -delta / (4*numeros[0]);
    vx =  -numeros[1] / (2*numeros[0]); 
    console.log("VERTICES:"+ vx, vy);

    vertElement.textContent = "Vertice X: "+vx+"Vertice Y: "+vy;

    //Canvas

    constroiCanvas();
    console.log("SUAS RAIZES:" +r1, r2)
    drawRoots(r1, r2);
    drawVert(vx, vy);
    drawParabola(r1, r2, vx, vy, delta, numeros);


    
    


}


function getNumeros(){
    console.log("Entrou no getNumeros");
    if( document.getElementById("a").value % 1 != 0 || document.getElementById("b").value %1 != 0 || 
    document.getElementById("c").value % 1 != 0){
        alert("ONLY INTEGERS ARE ACCEPTED!");

    } 
    
    else{ 
        var numeros = new Array(3);
        numeros[0] = parseInt(document.getElementById("a").value);
        numeros[1] = parseInt(document.getElementById("b").value);
        numeros[2] = parseInt(document.getElementById("c").value);
    }
    return (numeros);
}