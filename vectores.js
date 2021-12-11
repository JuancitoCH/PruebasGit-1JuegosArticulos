export default function ordenarPrueba(){
    let vec=[11,2,1,4,0,-1,99,8,1,-70]
    let aux=-11

    for(let j=0;j<vec.length-1;j++){

        for(let i=1+j;i<vec.length;i++){

            if(vec[j]>vec[i]){

                aux=vec[j]
                vec[j]=vec[i]
                vec[i]=aux
            }
        }
    }

    let p=""
    // for(let elem of vec){
    //     p+=elem+" "
    // }

    for(let i=0;i<vec.length;i++){
        p+=vec[i]+" "
    }

    console.log(p)
}

//export { ordenarPrueba }
export let variable=0


export function Saludo(){
    alert("hola")
}