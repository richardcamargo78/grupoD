//Eventos


let cliente = prompt("Escrba su nombre");
let documento = prompt("Escrba su documento");
let salon = parseInt(prompt("Seleccione el salón (1. Normal / 2. Grande)"));
let cantidadComida=0;
let cantidadMeseros=0;
let total =0;

let meseroExtra = confirm("Desea meseros extras???");
if(meseroExtra){
    cantidadMeseros= parseInt(prompt("Escriba la cantidad de meseros..."));
}

let servicioComida = confirm("Desea incluir servicio de comidad???");
if(servicioComida){
    cantidadComida= parseInt(prompt("Escriba la cantidad de platos..."));
}
let valorMesero = 0;
let valorComida = 0;
if(salon==1){
    nombreSalon="Normal";
    total+=1000000;
    valorMesero = cantidadMeseros * 150000;
    valorComida = cantidadComida * 50000;
}else{
    nombreSalon="Grande";
    total+=2000000;
    valorMesero = cantidadMeseros * 100000;
    valorComida = cantidadComida * 40000;
}

total +=valorComida + valorMesero;

document.write (`
                <h3> Estimado, ${cliente}</h3>
                <h4>La cotizacion de evento es:</h4>
                <ul>
                    <li><b>Salon: ${nombreSalon}</b></li>
                    <li><b>Cantidad Meseros: </b>${cantidadMeseros}</li>
                    <li><b>Cantidad Platos: </b>${cantidadComida}</li>
                </ul>
                <h3>total cotizacion evento:$ ${total}</h3></>
                `);