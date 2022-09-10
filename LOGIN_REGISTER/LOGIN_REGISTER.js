document.getElementById("btn_registrarse").addEventListener("click",register);
document.getElementById("btn_inciar-sesión").addEventListener("click",iniciarSesion);
/* document.getElementById("login").addEventListener("click",entrar);*/
document.getElementById("registerf").addEventListener("click", registerf); 

let contenedorLoginRegister=document.querySelector(".contenedor_login-register");
let formularioLogin=document.querySelector(".formulario_login");
let formularioRegister=document.querySelector(".formulario_register");
let cajaTraseraLogin=document.querySelector(".caja_trasera-login");
let cajaTraseraRegister=document.querySelector(".caja_trasera-register");

const Nombres= document.getElementById("nombres");
const Apellidos= document.getElementById("apellidos");
const Correo= document.getElementById("Correo");
const Usuario= document.getElementById("Usuario");
const Contraseña= document.getElementById("Contraseña");
const Contraseña2= document.getElementById("ConfirmarContraseña");
const Foto= document.getElementById("foto");
const form= document.getElementById("register");
const parrafo= document.getElementById("warnings");

function registerf(){

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        if(Nombres.value.length<1){
           setErrorFor(Nombres,"El nombre no puede estar vacío");
        }else{
            setSuccesFor(Nombres);
        }
        if(Apellidos.value.length<1){
            setErrorFor(Apellidos,"El apellido no puede estar vacío");
         }else{
            setSuccesFor(Apellidos);
         }
         if(Foto.value.length<1){
            setErrorFor(Foto,"No ha agregado ninguna foto");
         }else{
            setSuccesFor(Foto);
         }
    
    })

}

function setErrorFor(input, message){
    const formControl=input.parentElement;//.form-control
    const small=formControl.querySelector('small');

    if(input=Foto){
        //add error message inside mall
        small.innerText=message;

        //add error class
        formControl.className='form-control error';
    }else{
        //add error message inside mall
        small.innerText=message;

        //add error class
        formControl.className='form-control error';
    }
}

function setSuccesFor(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}


function iniciarSesion(){
    
    formularioRegister.style.display="none";
    contenedorLoginRegister.style.top="-530px";
    formularioLogin.style.display="block";
    cajaTraseraRegister.style.opacity="1";
    cajaTraseraLogin.style.opacity="0";
}

function register(){

    formularioRegister.style.display="block";
    contenedorLoginRegister.style.top="5px";
    formularioLogin.style.display="none";
    cajaTraseraRegister.style.opacity="0";
    cajaTraseraLogin.style.opacity="1";
}

/* function registerf(){
   const Nombres= document.getElementById("nombres");
   const Apellidos= document.getElementById("apellidos");
   const Correo= document.getElementById("Correo");
   const Usuario= document.getElementById("Usuario");
   const Contraseña= document.getElementById("Contraseña");
   const Contraseña2= document.getElementById("ConfirmarContraseña");
   const form= document.getElementById("register");
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
} */


/*
form.addEventListener("submit", es=>{
    entrar.preventDefault()
    if(nombre.value.length <6){
        alert("Nombre muy corto")
    }
   })
*/ 