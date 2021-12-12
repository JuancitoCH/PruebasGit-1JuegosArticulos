export function LoadLista(){
   
    let p =""
    axios.get("http://192.168.18.28:3000/lista")
    .then(lista=>{
        for(let juego of lista.data)
        {
            p+=`<article>
            <h2>${juego.nombre}</h2>
            <p>${juego.descripcion}</p>
            <div>
            <img src="./resources/images/${juego.nombreFoto}" alt="${juego.nombreFoto}">            
            </div>
            <ul>
                <li><a href="https://www.playstation.com" target="blank">Ps4</a></li>
                <li><a href="">Pc</a></li>
                <li><a href="https://www.xbox.com" target="blank">Xbox</a></li>
            </ul>
        </article>`
        }
        document.getElementById("containerPrincipal").innerHTML+= p
    })
    .catch(error=>{
        //alert(error)
        console.log(error)
    })
}
export function crearSeccion(){
    document.getElementById("containerPrincipal").innerHTML=`
    <div id="inputDinamico">
        <label for="">Nombre</label>
        <input type="text" id="nombreArticulo">
        <label for="">Descripcion</label>
        <input type="text"  id="descripcionArticulo">
        <label for="">Link de la Imagen</label>
        <input type="text" id="LinkImagen"></input>
        <button id="envioDatos"onclick="Enviar()" >Enviar</button>
        `
    LoadLista()
    
}
export function Enviar(){
    let nombre = document.getElementById("nombreArticulo").value
    let descripcion =document.getElementById("descripcionArticulo").value
    let imagen=document.getElementById("LinkImagen").value
    // axios.put()
}


export async function loadListaFetch(){
    let p=""
    try{
        const list = await fetch("http://192.168.18.28:3000/lista")
        if(list.ok){
            console.log("Succes")
            const lista = await list.json()
            console.log(lista)
            lista.forEach(juego => {
                console.log (juego)
                p+=`<article>
                <h2>${juego.nombre}</h2>
                <p>${juego.descripcion}</p>
                <div>
                <img src="./resources/images/${juego.nombreFoto}" alt="${juego.nombreFoto}">            
                </div>
                <ul>
                    <li><a href="https://www.playstation.com" target="blank">Ps4</a></li>
                    <li><a href="">Pc</a></li>
                    <li><a href="https://www.xbox.com" target="blank">Xbox</a></li>
                </ul>
                </article>`
            });
            document.getElementById("containerPrincipal").innerHTML+= p
        }
        if(!list.ok) return console.log("Error fatal xD No se encontro la direcion que se deseaba")
       
    }
    catch(error){
        console.log(error)
    }
   
}

