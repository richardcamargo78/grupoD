import axios from "axios";

class EventoService {
    url="http://localhost:8000/evento";
    eventos = [];
    eventoActual={};

    constructor() {

        this.eventoActual = {
            cliente: "",
            documento: "",
            salon: {},
            meseros: 0,
            platos: 0,
            total: 0
        };

        this.eventos = [
            {
                cliente: "Jose",
                documento: "741963852",
                meseros: 2,
                platos: 150,
                salon: {
                    "nombre": "Normal",
                    "precio": 1000000,
                    "extra_mesero": 150000,
                    "cantidad_meseros": 1,
                    "plato": 50000
                },
                total: 3200000,
            },
            {
                cliente: "Laura",
                documento: "852753951",
                meseros: 5,
                platos: 50,
                salon: {
                    "nombre": "Grande",
                    "precio": 2000000,
                    "extra_mesero": 100000,
                    "cantidad_meseros": 4,
                    "plato": 40000
                },
                total: 3200000
            }
        ];
    }

    obtenerTodos() {
        return this.eventos;
    }

    obtenerPorCliente(){
        let id= localStorage.cliente;
        return axios.get(`${this.url}/cliente/${id}`);

    }

    obtenerEventoActual(){
        return this.eventoActual;
    }

    registrar(evento){
        return axios.post(`${this.url}`,evento);
    }


} export default new EventoService();