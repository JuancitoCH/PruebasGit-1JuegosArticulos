import ordenarPrueba from "./vectores.js"
import {LoadLista,crearSeccion, Enviar,loadListaFetch} from "./articulos.js"
window.onload = main

function main(){
    document.getElementById("btnAdmin").addEventListener("click",crearSeccion)
    ordenarPrueba()//funcion importada desde vectores.js
    //LoadLista()
    loadListaFetch()
   
}

// Puebas en git
// prueba con comando git commit -m "mensaje"