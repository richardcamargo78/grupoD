/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.unab.misiontic.grupoD.reservaapi.repositorios;

import co.edu.unab.misiontic.grupoD.reservaapi.modelos.Usuario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Francy Alvarez
 */
@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Long>{
  
    @Query(value =  "SELECT * FROM usuarios WHERE usuario=?1 AND password=?2", nativeQuery = true)
    public Usuario validar(String usuario, String password); 
}
