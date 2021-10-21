import axios from "axios";

class ClienteService{
    url="http://localhost:8000/cliente";

    validar(miUsuario, miPassword){
        
        let datos={usuario:miUsuario, password:miPassword};

        return axios.post(`${this.url}/validar`, datos);
        
    }

    obtener(){
        let id = localStorage.cliente;
        return axios.get(`${this.url}/${id}`);
    }

    }
    export default new ClienteService();
