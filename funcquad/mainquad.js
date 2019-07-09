//COMMENTS ARE IN PORTUGUESE! (pt-br)
//JS da função quadrática [Calculos]
var btnElement = document.getElementById("btn");
var canvasElement = document.getElementById("canvas");
var root1Element = document.getElementById("root1");
var root2Element = document.getElementById("root2");
var ver1Element = document.getElementById("vertex1");
var ver2Element = document.getElementById("vertex2");
btnElement.onclick = function(){
    funcQuad(getNumeros());
}



function funcQuad(numeros){ //Numeros[0] == a, numeros[1] == b, numeros[2] == c!
    if (numeros[0] == undefined || numeros[1] == undefined || numeros[2] == undefined){
        return;
    }
    var delta = Math.pow(numeros[1], 2) - (4 * numeros[0] * numeros[2]);
    var r1, r2; // Raizes
    var vx, vy; // vertices
    if (delta < 0){
        root1Element.value = "It has no real root!";
        root2Element.value = "It has no real root!";


    }
    if (delta == 0){
        r1 = ((-numeros[1]) + Math.sqrt(delta))/ 2 * numeros[0];
        root1Element.value = "Same root as r2: "+r1;
        root2Element.value = "Same root as r1: "+r1;
    }
    if(delta > 0){
        r1 = (-numeros[1] + Math.pow(delta, 0.5)) / (2 * numeros[0]);
        r2 = ((-numeros[1]) - Math.sqrt(delta))/ (2 * numeros[0]);
        root1Element.value = "Root 1: "+r1;
        root2Element.value = "Root 2:"+ r2;
    }
    vy = -delta / (4*numeros[0]);
    vx =  -numeros[1] / (2*numeros[0]); 
    //Teste dos vertices
    console.log("VERTICES:"+ vx, vy);
    //Teste das raízes
    console.log("SUAS RAIZES:" +r1, r2)

    ver1Element.value = "Vertex X: "+vx;
    ver2Element.value = "Vertex Y: "+vy;
    

    //canvasconf

    constroiCanvas();
    drawRoots(r1, r2);
    drawVert(vx, vy);
    drawParabola(r1, r2, vx, vy, delta, numeros); //NECESSITA DE REVISÃO!

}


function getNumeros(){
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