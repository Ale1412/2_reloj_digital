// funcion flecha 
const getHora = ()=>{
    // sentencias = instrucciones 
    const fecha  = new Date(); // creación de objeto Date 
    // console.log(fecha.getHours())
    const tiempo = {hora: fecha.getHours(), minuto: fecha.getMinutes(), segundos: fecha.getSeconds()}
    document.querySelector(".reloj").innerHTML= `${tiempo.hora}:${tiempo.minuto}: ${tiempo.segundos}`
}

setInterval(getHora,1000)

function nombre() {
    let desc = document.querySelector("#des")
    setTimeout(() =>{
        desc.textContent="Reloj digital";
    },0);
    setTimeout(() => {
        desc.textContent = "Ale Quino";
    }, 3000);


}

