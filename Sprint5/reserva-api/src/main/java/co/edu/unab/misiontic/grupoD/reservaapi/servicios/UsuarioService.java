/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unab.misiontic.grupoD.reservaapi.servicios;

import co.edu.unab.misiontic.grupoD.reservaapi.modelos.Usuario;
import co.edu.unab.misiontic.grupoD.reservaapi.repositorios.UsuarioRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Francy Alvarez
 */
@Service
public class UsuarioService {
     @Autowired
    private UsuarioRepository usuarioRepository;
    
    public Optional<Usuario> getPorId(Long id){
        return usuarioRepository.findById(id);
      }
    
    public Usuario registrar(Usuario miUsuario){
     return usuarioRepository.save(miUsuario);
    }
    
    public Usuario validar(String usuario, String password){
        return usuarioRepository.validar(usuario, password);
    } 
    
}
