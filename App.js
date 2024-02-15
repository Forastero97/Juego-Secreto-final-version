let numeroSecreto =0;
let intentos = 0;
function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}


function verificarIntentos() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Felicidades, adivinaste el numero secreto en ${intentos} ${intentos===1 ? 'vez' : 'veces '}`);
                document.getElementById('reiniciar').removeAttribute('disabled');
        }else {
        /*Aca se hara una funcion que limpie la caja cuando el jugador se equivoque*/
            if(numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El numero es menor');
            } else {
                asignarTextoElemento('p', 'El numero es mayor');
            }if(intentos === 10) {
                asignarTextoElemento('p', 'Se acabaron los intentos, el numero era ' + numeroSecreto);
                document.getElementById('reiniciar').removeAttribute('disabled');
                }
            intentos++;
            
            limpiarCaja();
        }
        return;    

    }

    

function limpiarCaja() {
   let valorCaja = document.querySelector('#valorUsuario').value = '';
}
    
function generarNumeroSecreto() {
   return  Math.floor(Math.random()*100)+1;
}

function condicionesIniciales() {
asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del 1 al 100 ');
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

function reiniciarJuego() {
    /*Generar el numero aleatorio*/
    /*Inicializar el numero de intentos*/
    condicionesIniciales();
    intentos = 1;
    /*Limpiar la caja de texto*/
    limpiarCaja();
    /*Deshabiilitar el boton reiniciar*/
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    return;
}

condicionesIniciales();