import axios from "axios";

class ServicioService{
    
    url="http://localhost:8000/servicio"

    
    obtenerTodos(){
        return axios.get(`${this.url}/todos`);
    }
}
export default new ServicioService();