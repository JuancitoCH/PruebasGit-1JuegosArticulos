const http= require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req,res){
    res.writeHead(200, { 'content-type': 'application/json' })
    fs.readFile('../database.json' , function(error,data){
        if(error){
            res.writeHead(404)
            res.write('Error: Archivo no encontrado')
        }else{
            res.write(data)
        }
        res.end()
    })
    

})

server.listen(port,function(error){
    //verificamos si es que el error existe
    if(error){
        console.log("Ups... Algo salio mal",error)
    } else {
        console.log("Server Escuchando en el puerto :"+port)
    }

})