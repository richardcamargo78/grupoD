//Eventos con listas paralelas


let cliente = prompt("Escrba su nombre");
let documento = prompt("Escrba su documento");
let salon = parseInt(prompt("Seleccione el salón (1. Normal / 2. Grande)"));
let cantidadComida=0;
let cantidadMeseros=0;
let total =0;
let nombreSalones = ["Normal","Grande"];
let precioSalones = [1000000 , 2000000];
let precioMeseros = [150000 , 100000];
let precioComida = [50000 , 40000];

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

total+= precioSalones [salon - 1];
valorMesero = cantidadMeseros * precioMeseros[salon-1];
valorComida = cantidadComida * precioComida[salon - 1];


total +=valorComida + valorMesero;

document.write (`
                <h3> Estimado, ${cliente}</h3>
                <h4>La cotizacion de evento es:</h4>
                <ul>
                    <li><b>Salon: ${nombreSalones[salon-1]}</b></li>
                    <li><b>Cantidad Meseros: </b>${cantidadMeseros}</li>
                    <li><b>Cantidad Platos: </b>${cantidadComida}</li>
                </ul>
                <h3>total cotizacion evento:$ ${total}</h3></>
                `);