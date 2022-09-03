document.getElementById("btn_registrarse").addEventListener("click",register);
document.getElementById("btn_inciar-sesión").addEventListener("click",iniciarSesion);
document.getElementById("login").addEventListener("click",entrar);
document.getElementById("registerf").addEventListener("click", registerf);

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

function registerf(){
   const Nombres= document.getElementById("nombres");
   const Apellidos= document.getElementById("apellidos");
   const Correo= document.getElementById("Correo");
   const Usuario= document.getElementById("Usuario");
   const Contraseña= document.getElementById("Contraseña");
   const form= document.getElementById("form");
   const parrafo= document.getElementById("warnings");

    form.addEventListener("submit", es=>{
    entrar.preventDefault()
    var warnings=""
    var entrar=false
    var regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML="" //Lo reinicio

    if(Usuario.value.length <6){
       warnings += 'El nombre no es valido <br>'
       entrar = true
    }
    if(!regexEmail.test(Correo.value)){ //evalua que haya texto, @, texto y luego .com
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    if(Contraseña.value.length<8){
        warnings += 'La contraseña no es valida <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML=warnings
    }else{
        parrafo.innerHTML= "Enviado"
    }
   })

}

function entrar(){
    alert("entró")
   
   const user= document.getElementById("Usernamelogin");
   const pass= document.getElementById("passwordLogin");
   const form= document.getElementById("form");
   const parrafo= document.getElementById("warnings");

    form.addEventListener("submit", es=>{
        alert("entró")
    entrar.preventDefault()
    var warnings=""
    var entrar=false
    parrafo.innerHTML="" //Lo reinicio

    if(user.value.length <6){
       warnings += 'El nombre no es valido <br>'
       entrar = true
    }
    if(pass.value.length<8){
        warnings += 'La contraseña no es valida <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML=warnings
    }else{
        parrafo.innerHTML= "Enviado"
    }
   })

    //if(user=="Mel" && pass == "1234" || user=="Denisse" && pass== "1234"){
    //    window.location="good.html";
    //}
}


/*
form.addEventListener("submit", es=>{
    entrar.preventDefault()
    if(nombre.value.length <6){
        alert("Nombre muy corto")
    }
   })
*/ 