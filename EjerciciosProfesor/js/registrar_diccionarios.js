//Eventos con diccionarios


let salonNormal = {"nombre":"Normal",
                   "precio":1000000,
                   "extra_mesero":150000,
                   "cantidad_meseros": 1,
                   "plato":50000};
let salonGrande = {"nombre":"Grande",
                    "precio":2000000,
                    "extra_mesero":100000,
                    "cantidad_meseros": 4,
                    "plato":40000};

let listaSalones = [salonNormal , salonGrande];
let ListaEventos = [];
let continuar;

do{
    let evento = {};
    
    evento['cliente'] = prompt("Escrba su nombre");
    evento['documento']  = prompt("Escrba su documento");
    
    let salon = parseInt(prompt("Seleccione el salón (1. Normal / 2. Grande)"));
    evento['salon'] = listaSalones[salon-1];
    
    evento['meseros']=0;
    let meseroExtra = confirm("Desea meseros extras???");
    if(meseroExtra){
        evento['meseros'] = parseInt(prompt("Escriba la cantidad de meseros..."));
    }
    // else{
        // evento['meseros']=0;
    // }
    
    evento['platos']=0;
    let servicioComida = confirm("Desea incluir servicio de comida???");
    if(servicioComida){
        evento['platos']= parseInt(prompt("Escriba la cantidad de platos..."));
    }
    // else{
        // evento['platos']=0;
    // }
    
    let valorMeseros = evento.meseros * evento.salon.extra_mesero;
    let valorComida = evento.platos * evento.salon.plato;
    
    evento['total'] = valorComida + valorMeseros + evento.salon.precio;

    ListaEventos.push(evento);
    continuar = confirm("Registrar un nuevo evento? ");

}while (continuar);

let xhtml = `<table>
                <thead>
                    <tr>
                        <th>CLIENTE</th>
                        <th>SALON</th>
                        <th>MESEROS</th>
                        <th>PLATOS</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <TBody>`

for (let evento of ListaEventos) {
    let meseros = evento.meseros + evento.salon.cantidad_meseros;
    xhtml += `<TR>
                <TD>${evento.cliente} - ${evento.documento}</TD>
                <TD>${evento.salon.nombre}</TD>
                <TD>${meseros}</TD>
                <TD>${evento.platos}</TD>
                <TD>${evento.total}</TD>
            </TR>`                    
}
xhtml += `</TBody>
        </table>`;

document.write(xhtml);

