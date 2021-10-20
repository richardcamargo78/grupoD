/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unab.misiontic.grupoD.reservaapi.servicios;

import co.edu.unab.misiontic.grupoD.reservaapi.modelos.Servicio;
import co.edu.unab.misiontic.grupoD.reservaapi.repositorios.ServicioRepository;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Francy Alvarez
 */
@Service
public class ServicioService {
        
    @Autowired
    private ServicioRepository servicioRepository;
    
    public Optional<Servicio> getPorId(Long id){
        return servicioRepository.findById(id);
    }
    
    public ArrayList<Servicio> getTodos(){
        return (ArrayList<Servicio>) servicioRepository.findAll();
    }
    
    public Servicio crear(Servicio miServicio){
        return servicioRepository.save(miServicio);
    }
}
