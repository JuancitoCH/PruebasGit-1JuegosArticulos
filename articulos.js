
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
        //img.src=`./resources/images/${nfoto}`
        img.setAttribute('src',`./resources/images/${nfoto}`)

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


export function crearSeccion(){
    const boton = document.getElementById('btnAdmin')
    const contenedor = document.getElementById("containerCrear")
    //boton.value = boton.value ?? "1"
    if(!boton.value ?? "1")
    {
        contenedor.innerHTML=`
        <div id="inputDinamico">
        <label for="">Nombre</label>
        <input type="text" placeholder= "Nombre"id="nombreArticulo">
        </div>
        <div id="inputDinamico">
        <label for="">Descripcion</label>
        <input type="text" placeholder= "Descripcion"  id="descripcionArticulo">
        </div>
        <div id="inputDinamico">
        <label for="">Link de la Imagen</label>
        <input type="text" placeholder= "Link Imagen" id="LinkImagen"></input>
        </div>
        <button id="envioDatos"onclick="Enviar()" >Enviar</button>
        `
        boton.value = "1"
        contenedor.style.opacity=1        
        return ""
    }
    if(boton.value)
    {
        boton.value=''
        contenedor.style.opacity=0
        // contenedor.clientHeight
        setTimeout(()=>{contenedor.innerHTML=""},450)
    }
}


export function Enviar(){
    const nombre = document.getElementById("nombreArticulo").value
    const descripcion =document.getElementById("descripcionArticulo").value
    const imagen=document.getElementById("LinkImagen").value
    // axios.put()
}

export function esperar(segundos){
    
}
