/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unab.misiontic.grupoD.reservaapi.controladores;

import co.edu.unab.misiontic.grupoD.reservaapi.modelos.Reserva;
import co.edu.unab.misiontic.grupoD.reservaapi.servicios.ReservaService;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Francy Alvarez
 */
@RestController
@CrossOrigin
@RequestMapping("/reserva")
public class ReservaController {
 
    @Autowired
    private ReservaService reservaService;
    
    @GetMapping(path = "/todos")
    public ArrayList<Reserva> getTodos(){
        return reservaService.getTodos();
    }
    
    @PostMapping()
    public Reserva registrar(@RequestBody Reserva miReserva){
        
       return reservaService.crear(miReserva);
    }
    
    @GetMapping(path = "/usuario/{id}")
    public ArrayList<Reserva> getPorUsuario(@PathVariable("id") Long id){
        return reservaService.getPorUsuario(id);
    }
}
