document.getElementById("btn_registrarse").addEventListener("click",register);
document.getElementById("btn_inciar-sesión").addEventListener("click",iniciarSesion);

let contenedorLoginRegister=document.querySelector(".contenedor_login-register");
let formularioLogin=document.querySelector(".formulario_login");
let formularioRegister=document.querySelector(".formulario_register");
let cajaTraseraLogin=document.querySelector(".caja_trasera-login");
let cajaTraseraRegister=document.querySelector(".caja_trasera-register");

function iniciarSesion(){
    
    formularioRegister.style.display="none";
    contenedorLoginRegister.style.top="-650px";
    formularioLogin.style.display="block";
    cajaTraseraRegister.style.opacity="1";
    cajaTraseraLogin.style.opacity="0";
}

function register(){

    formularioRegister.style.display="block";
    contenedorLoginRegister.style.top="-150px";
    formularioLogin.style.display="none";
    cajaTraseraRegister.style.opacity="0";
    cajaTraseraLogin.style.opacity="1";
}