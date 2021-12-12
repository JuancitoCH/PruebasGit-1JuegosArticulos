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
    try{
        const list = await fetch("http://192.168.18.28:3000/lista")
        if(list.ok){
            console.log("Succes")
            const lista = await list.json()
            crearArticulo(lista)            
        }
        if(!list.ok) return console.log("Error fatal xD No se encontro la direcion que se deseaba")
       
    }
    catch(error){
        console.log(error)
    }
   
}

export function crearArticulo(lista){
    
    lista.forEach(juego => {
        let{nombre : njuego , descripcion:desc , nombreFoto:nfoto} =juego
        
        const contenedor = document.querySelector('#containerPrincipal')
        const article = document.createElement('article')
        const h2=document.createElement('h2')
        const p = document.createElement('p')
        const div = document.createElement('div')
        const img = document.createElement('img')
        const ul= document.createElement('ul')
        const li = document.createElement('li')
        const aps4 = document.createElement('a')
        const axbox = document.createElement('a')
        const apc = document.createElement('a')

        h2.textContent = njuego
        p.textContent = desc
        img.src=`./resources/images/${nfoto}`

        aps4.href = "https://www.playstation.com"
        aps4.target ="blank"
        aps4.textContent="Ps4"

        axbox.href = "https://www.xbox.com"
        axbox.target ="blank"
        axbox.textContent="Xbox"

        apc.href = "https://www.playstation.com"
        apc.target ="blank"
        apc.textContent="Pc"

        contenedor.appendChild(article)
        article.appendChild(h2)
        article.appendChild(p)
        article.appendChild(div)
        div.appendChild(img)
        article.appendChild(ul)
        ul.appendChild(li)
        li.appendChild(aps4)
        li.appendChild(axbox)
        li.appendChild(apc)
    });
    
}

