
const leerValor=(valor)=>{
   document.getElementById("pantalla").value+=valor
   console.log(valor)
}

const calcular=()=>{
const obtenerValor=document.getElementById("pantalla").value
const resultado=eval(obtenerValor)
document.getElementById("pantalla").value=resultado

}

const borrar=()=>{
    document.getElementById("pantalla").value=""
}

const apareceGato=()=>{
    let cat=document.getElementsByClassName("gato")[0]
    console.log(cat)
    cat.style.display = (cat.style.display === 'none') ? 'block' : 'none';
    
    let miauw=document.getElementById("audio")
    console.log(miauw)
    miauw.style.display= (miauw.style.display === 'none') ? 'block' : 'none';
}
