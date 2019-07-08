//JS do divisores
/*Quis fazer algo mais flexível, para caso eu quisesse voltar a mexer nisso mais tarde, tornando mais complexin.
Além disso, priorizei facilidade de manutenção e tentei fazer com uso de funções pra ficar fácil eu modificar.
Podia ter feito bem menor, mas sla... Dps dê uma olhada, Enzo do futuro! Vc será mais inteligente que eu!
 Data: Julho de 2019 
*/

var btnElement = document.getElementById("btn");
var resultElement = document.getElementById("result");
btnElement.onclick = function(){
    
    calcular(getNumeros()); 
    
};


function getNumeros (){
    console.log("Clicou!");
    var numeros = new Array(2);
    if (document.getElementById("n1").value % 1 != 0 || document.getElementById("n2").value % 1 != 0){
        alert("INSIRA APENAS NUMEROS POSITIVOS INTEIROS!")
    }
    //Pegando meus numeros. Quero ver uma forma de fazer isso c um loop dps, p caso quisesse adicionar + nmrs
    else{
    numeros[0] = parseInt(document.getElementById("n1").value);
    numeros[1] = parseInt(document.getElementById("n2").value);
    }
    console.log("Numeros pegos:", numeros[0], numeros[1]);

    return numeros;
    
}

//Metodo de calcular os DIVISORES dos numeros!

function  calcular(numeros){
    for (let i = 0; i<numeros.length; i++){
        if (numeros[i] == undefined){
            console.log("Array numeros["+i+"] = undefined");
            return;
        }
    }
    ordena(numeros);
    //POR ENQUANTO, ESSE CÁLCULO ABAIXO SÓ FUNCIONA C DOIS NÚMEROS!
    // Modificar dps de entregar o trab, quero fazer algo q funcione com x números!
    var resultados = [];
     for (let divisores = 1; divisores <= numeros[numeros.length-1]; divisores++){ 

        if((numeros[0] % divisores == 0) && (numeros[1] % divisores == 0)){
            resultados.push(divisores);
        }
    
      } 

      //Verifica o calculo
      resultados.forEach(function(valor, index){
          console.log("FOREACH:"+valor, index);
      })
      mostrar(resultados, numeros);

    
    
      return;
}
// Metodo para mostrar os numeros na page!
function mostrar(resultados, numeros){
    resultElement.value = "Divisores comuns entre "+numeros[0]+" e "+numeros[1]+": ";
    console.log("DENTRO DO MOSTRAR");
    resultados.forEach(function(valor){
        resultElement.value += valor+" "; 
    })
    console.log("saiu do mostrar!");
    return;
}



function ordena(numeros){ //Bubble sort para caso queira fazer os divisores de X nmrs dps de entregar o trab!
    for (let j = numeros.length-1; j>=1 ; j--){
        for (let i = 0; i<numeros.length; i++){
            let maior; 
            if (numeros[i] > numeros[i+1]){
                maior = numeros[i];
                numeros[i] = numeros[i+1];
                numeros[i+1] = maior;
            }
        }
    }

}