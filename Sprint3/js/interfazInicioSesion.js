document.querySelector('#btnIngresar').addEventListener('click',
iniciarsesion);
function iniciarsesion(){
    var snombreUsuario='';
    var sclave='';
    bacceso = false;
    snombreUsuario = document.querySelector('#txtuserName').value;
    sclave = document.querySelector('#txtClave').value;

    bacceso = validarCredenciales(snombreUsuario,sclave);
    // console.log(bacceso);
        if (bacceso == true){
            ingresar();
        }
        if (bacceso == false){
            error();
        }
    }

function ingresar(){
    window.location.href = 'listadoreservas.html'
}

function error(){
    alert("Datos Invalidos");
}

