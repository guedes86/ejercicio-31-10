function contador(){
    let contador = 1;
    var entrada = parseInt(prompt('por favor ingressar el valor de entrada'));

    while(contador < (entrada+1)){
        alert(contador);
        contador++;
    }

}

function sumar(){
    
    let suma = 0;


    alert("Sumar Números hasta que el Usuario Ingrese 0")
    var entrada = parseInt(prompt('por favor ingressar el valor de entrada'));

    while(entrada != 0){
        suma = suma + entrada;
        alert(`O resultado da suma es igual a ${suma}`)
        entrada = 0;
        entrada = parseInt(prompt('por favor ingressar el valor de entrada'));
    }
    alert(`La suma final es igual a ${suma}`)
}

function edad(){
        var entrada = parseInt(prompt('por favor ingressar el valor de entrada'));

    while(entrada < 0 || entrada > 120 ){
        
        entrada = parseInt(prompt('Dado inserido incorrecto por favor inserir una edad entre 1 a 120'));

    }
    alert("Edad inserida con sucesso")

}

function pares(){
    var entrada = parseInt(prompt('por favor ingressar el valor de entrada'));

    while( entrada % 2 != 0){

        entrada = parseInt(prompt('Por favor inserir un valor de un numero par'));

    }
    alert("El valor es PAR")
}

function salir(){
    var entrada = prompt('por favor ingressar el valor de entrada').toLowerCase();

    while( entrada !== "salir"){

        entrada = prompt('Insera outro valor ou nome, para salir escribir la palabra salir').toLowerCase();

    }
    alert("Salida realizada con sucesso")
}
