import ordenarPrueba from "./vectores.js"
import {LoadLista,crearSeccion, Enviar} from "./articulos.js"
window.onload = main

function main(){
    document.getElementById("btnAdmin").addEventListener("click",crearSeccion)
    ordenarPrueba()//funcion importada desde vectores.js
    LoadLista()
}

// Puebas en git
