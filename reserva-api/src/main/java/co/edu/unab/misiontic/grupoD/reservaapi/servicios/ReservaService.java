/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unab.misiontic.grupoD.reservaapi.servicios;

import co.edu.unab.misiontic.grupoD.reservaapi.modelos.Reserva;
import co.edu.unab.misiontic.grupoD.reservaapi.repositorios.ReservaRepository;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Francy Alvarez
 */
@Service
public class ReservaService {
     @Autowired
    private ReservaRepository reservaRepository;
    
    public Optional<Reserva> getPorId(Long id){
        return reservaRepository.findById(id);
    }
    
    public ArrayList<Reserva> getTodos(){
        return (ArrayList<Reserva>) reservaRepository.findAll();
    }
    
    public Reserva crear(Reserva miReserva){
        return reservaRepository.save(miReserva);
    }
    
    public ArrayList<Reserva> getPorUsuario(Long id){
        return reservaRepository.getPorUsuario(id);
    }
}
