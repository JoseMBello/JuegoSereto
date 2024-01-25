// let parrafo=document.querySelector("p");
// parrafo.innerHTML="Elije un número del 1 al 10";
let listaNumerosSorteados = [];//Me daba error ya que tenía esta linea declarada en la linea 5 y en la linea 4, la llamaba pero aun no la reconocía JS
let numeroMaximo=10;
let numsecreto=generaNumSec();
let intentos=1;

console.log(numsecreto);

function textoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById("valorUsuario").value);
    /*console.log(typeof(numsecreto));
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario===numsecreto);*/
    console.log(intentos);
    if (numsecreto===numeroDeUsuario){ //El Usuario Acertó
        textoElemento("p",`Acertaste en ${intentos}${(intentos=== 1)? " Intento" : " Intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else { //El Usuario no Acertó
        if (numsecreto<numeroDeUsuario){
        textoElemento("p","El Número es menor");
        } else{
            textoElemento("p","El Número es mayor");
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";
}

function generaNumSec() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya se sortearon todos los números
    if (listaNumerosSorteados.length==numeroMaximo){
        textoElemento("p","Ya se sortearon todos los números posibles");
    } else{
        //Si el Número generado está incluído en la lista entonces:
        if (listaNumerosSorteados.includes(numeroGenerado)) {    
            return generaNumSec();
        } else {
            console.log(listaNumerosSorteados);
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
    }
}

function condicionesIniciales(){
    textoElemento("h1","Juego del Número Secreto 2.1");
    textoElemento("p","Adivina el Número del 1 al 10");
    numsecreto=generaNumSec();
    console.log(numsecreto);
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar Caja
    limpiarCaja();
    //Indicar inicio e intervalo de números
    condicionesIniciales();
    //Generar número aleatorio
    //Deshabilitar Botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

textoElemento("h1","Juego del Número Secreto 2.1");
textoElemento("p","Adivina el Número del 1 al 10");
