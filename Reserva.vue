<template>
<div class="box"><img src="../assets/logo_1.png" alt="star" class="width"></div>
<!-- <div class="titulo">RESERVA</div>  -->
  

  <header>
        <h1>{{titulo}}</h1> 
        <div class="titulo">RESERVA</div> 
        <div class="centrar"><img src="../assets/imagen_recepcion1.png" alt="Recepción Hotel"/></div>
        <h2 class="fondo_gris_oscuro1">Características del Hotel</h2>
        <h3 class="fondo_gris_oscuro2">Nuestro hotel en Bogotá le ofrece servicios de restaurant, lobby bar,
          spa con sauna y masajes, servicio de habitaciones, gimnasio, parqueadero,
          traslados al aeropuerto y wifi gratuito.</h3>
  </header>

    <main>

      
        <div>
        <form id="formulario_reservas" action="#" method="post">            
            <label class="label" for="fechaent">Fecha de Entrada:</label>
            <input class="fondo_amarillo" type="date" name="fechaentrada" v-model="reserva.fechaentrada">             
            <label class="label" for="fechasal">Fecha de Salida:</label>
            <input class="fondo_amarillo" type="date" name="fechasalida" v-model="reserva.fechasalida">             
            <label class="label" for="acomodacion">Habitaciones:</label>
                <select class="fondo_amarillo" name="habitacion" v-model="reserva.habitacion"> 
                    <option value="1">1 habitación</option>
                    <option value="2">2 habitaciones</option>
                    <option value="3">3 habitaciones</option>
                </select>
            <label class="label" for="huesped">Huéspedes:</label>
                <select class="fondo_amarillo" name="huesped" v-model="reserva.huesped">
                    <option value="1">1 huésped</option>
                    <option value="2">2 huéspedes</option>
                    <option value="3">3 huéspedes</option>
                    <option value="4">4 huéspedes</option>
                </select>             
            <label class="label" for="tipohab">Tipo de Habitación:</label> 
                <select class="fondo_amarillo" name="tipohab" v-model="reserva.tipohab">
                    <option value="Sencilla">Sencilla</option>
                    <option value="Doble Individual">Doble Individual</option>
                    <option value="Doble Matrimonial">Doble Matrimonial</option>
                    <option value="Multiple">Múltiple</option>
                </select> 
            
        </form>                    
        </div>  
        <div>
            <button @click.prevent="procesarInformacion" type="button" class="boton">RESERVA AQUI</button>
        </div>    
        <div class="separacion">
        <h2>RESUMEN DE SU RESERVA - {{cliente.nombre}}</h2>        
            <table border="1">
                <thead>
                    <tr class="fondo_gris_oscuro3">
                        <th>Nombre y Apellido</th>
                        <th>Fecha de Entrada</th>
                        <th>Fecha de Salida</th>
                        <th>Habitaciones</th>
                        <th>Huéspedes</th>
                        <th>Tipo de Habitación</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody id="datos_reservas">
                  <tr class="bloque" v-for="unaReserva, i in listaReservas" :key="unaReserva">                    
                    <td>{{unaReserva.fechaentrada}}</td>
                    <td>{{unaReserva.fechasalida}}</td>                    
                    <td>{{unaReserva.habitacion}}</td>
                    <td>{{unaReserva.huesped}}</td>
                    <td>{{unaReserva.tipohab}}</td>
                    <td><button @click.prevent="eliminar(i)">Eliminar</button></td>
                  </tr>
                </tbody>
            </table>
        </div>

    </main>
    <footer class="footer">Sabana Plaza Hotel Boutique</footer>
</template>

<script>
// @ is an alias to /src
import ClienteService from "@/services/clientes.js"
import ReservaService from "@/services/reserva.js"

export default {  
    mounted(){
        ClienteService.obtener().then((respuesta)=>{
            this.cliente=respuesta.data;
        });

        document.title="Reserva";
        ReservaService.obtenerPorCliente().then(respuesta)=>{
            this.listaReservas=respuesta.data;
        });       
    },  
  data(){
    return{      
      listaReservas:[],         
      reserva:{         
          nombre:"",
          fechaentrada:"",
          fechasalida:"",
          habitacion:{},
          huesped:{},
          tipohab:{},
          cliente:{}
      },
      habitacion:0,
      huesped:0,
      tipohab:0
    };
  },
  name: 'Reserva',
  components: {

  },
  methods:{

    eliminar(posicion){
        this.listaReservas.splice(posicion, 1);
    },

    limpiarFormulario(){
        this.reserva = {          
          nombre:"",
          fechaentrada:"",
          fechasalida:"",
          habitacion:{},
          huesped:{},
          tipohab:{}
      }
    },
    procesarInformacion(){ 
    this.reserva.cliente = this.cliente;
    
    console.log(this.reserva);
    ReservaService.registrar(this.reserva).then((respuesta)=>{

        alert("Reservación realizada");

        this.listaReservas.push(this.reserva);

        this.limpiarFormulario();

        });
            
    }
  }
}
</script>

<style scoped>

        header{
          background-color: #E2ECE9; 
          
         
        }

        main{
          background-color: #E2ECE9; 
          
        }  

        #formulario_reservas{
            display: grid;
            grid-template-columns: 5fr 5fr;
            margin-right: 35%;
            margin-left: 30%;
        }

        body{
            padding: 2rem;
        }

        table{
            width: 75%;
            margin: 0 auto;
        }

        .box{
          position: absolute;
          top: 10px;
          padding: 5px;
          height: 0%;
          width: 120px;
          padding: 40px;
        }

        .width{
          width: 150%;
        }

        .titulo{
        display: inline; 
        margin-left: 0%;
        margin-top: 20px;
        font-family:Baskerville old face;    
        font-size: 34px;
        color:#46586C;
        font-weight: bold;
        }

        .centrar{
        margin: auto;
        margin-top: 4%;  
        }

        h2{
            font-size: 20px;
            font-family: arial rounded MT;
            font-weight: bold;
        }

        .h3{
          margin-left: 20px;
        }

        .fondo_gris_oscuro1{
        background-color: #46586C;
        margin-top: 0.5%;
        margin-left: 20%;
        margin-right: 20%;
        margin-bottom: 0%;
        padding: 0.5%;
        text-align: center;
        color: white;
        font-family: arial rounded MT;
        font-weight: bold;
        font-size: 16pt;
        }

        .label{
        color: #121A3E;
        font-family: arial rounded MT;
        font-size: 13pt;  
        }

        .fondo_gris_oscuro2{
        background-color: #46586C;
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 0%;
        margin-bottom: 1%;
        padding-left: 1%;
        padding-right: 1%;
        padding-bottom: 1%;
        text-align: center;
        color: white;
        font-family: arial rounded MT;
        font-weight: bold;
        font-size: 12pt;
        }

        .fondo_gris_oscuro3{
        background-color: #46586C;
        color: white;
        font-family: arial rounded MT;
        font-weight: bold;
        font-size: 14pt;
        text-align: center;
        }

        .separacion{
          margin-top: 2%;
          margin-left: 0%;
        }

        .fondo_amarillo{
        background-color:#EFD979;
        color: #121A3E;
        font-family: arial rounded MT;
        font-size: 12pt;   
        margin-bottom: 2.5%;
        display: inline-block; 
        }

        .boton{
        cursor: pointer;
        padding: 1px;
        margin-top: 3%;
        margin-bottom: 5%;
        display: inline-block;
        background-color: #46586C;
        color: white;
        font-family: arial rounded MT;
        font-weight: bold;
        font-size: 16pt;
        text-decoration: none;
        width: 220px;
        text-align: center;
        }

        .bloque{
        color:#121A3E;
        font-family: arial rounded MT;
        font-size: 12pt;
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
        background-color: #EFD979;
        }

        .footer{
        background-color: #63758B;
        color:white; 
        font-family:arial Rounded MT;
        font-size: 16px;
        font-weight: bold; 
        text-align: center;
        margin-left: 0%;
        margin-top: 3%;
        }

</style>