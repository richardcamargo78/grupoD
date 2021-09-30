var listausuarios=null;
function obtenerUsuarios(){

    if (listausuarios == null){
        var listausuarios=[['1','wilson','123'],
        ['2','charly','456']]

    }
    
    return listausuarios;

}
function validarCredenciales(pnombreusuario, pclave){
    var listausuarios = obtenerUsuarios();
    var bacceso = false;
    for (var i = 0; i < listausuarios.length; i++){
        if (pnombreusuario == listausuarios[i][1] && pclave == listausuarios[i][2]){
            bacceso = true;
        }
    }
    return bacceso;
}




