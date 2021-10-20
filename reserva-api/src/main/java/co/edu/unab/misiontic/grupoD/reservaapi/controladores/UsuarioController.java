/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unab.misiontic.grupoD.reservaapi.controladores;

import co.edu.unab.misiontic.grupoD.reservaapi.modelos.Usuario;
import co.edu.unab.misiontic.grupoD.reservaapi.servicios.UsuarioService;
import java.util.Optional;
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
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;
    
    @GetMapping( path = "/{id}")
    public Optional<Usuario> getPorId(@PathVariable("id") Long id){
        return usuarioService.getPorId(id);
    }
    
    @PostMapping(path = "/validar")
    public Usuario validar(@RequestBody Usuario miUsuario){
        return usuarioService.validar(miUsuario.getUsuario(), miUsuario.getPassword());
    }
    
    @PostMapping()
    public Usuario registrar(@RequestBody Usuario miUsuario){
        return usuarioService.registrar(miUsuario);
    }

}
