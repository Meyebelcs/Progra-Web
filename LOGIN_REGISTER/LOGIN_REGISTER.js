//BOTONES
document.getElementById("btn_registrarse").addEventListener("click",register);
document.getElementById("btn_inciar-sesión").addEventListener("click",iniciarSesion);
document.getElementById("registerf").addEventListener("click", registerf); 
document.getElementById("entrar").addEventListener("click",login);

//Animaciones
let contenedorLoginRegister=document.querySelector(".contenedor_login-register");
let formularioLogin=document.querySelector(".formulario_login");
let formularioRegister=document.querySelector(".formulario_register");
let cajaTraseraLogin=document.querySelector(".caja_trasera-login");
let cajaTraseraRegister=document.querySelector(".caja_trasera-register");

//LOGIN
const formlogin = document.getElementById("login");

const Username= document.getElementById("Usernamelogin");
const password= document.getElementById("passwordLogin");

//REGISTRO
const form= document.getElementById("register");

const Nombres= document.getElementById("nombres");
const Apellidos= document.getElementById("apellidos");
const Correo= document.getElementById("Correo");
const Usuario= document.getElementById("Usuario");
const Contraseña= document.getElementById("Contraseña");
const Contraseña2= document.getElementById("ConfirmarContraseña");
const Foto= document.getElementById("foto");
const Fecha= document.getElementById("fecha");

//variables
let num=0;

function login(){

    //se agrega el detector de eventos del formulario de login utilizando el método:submit addEventListener()
    formlogin.addEventListener('submit', (e)=>{
        e.preventDefault(); //Para evitar que se envíe el formulario, llame al método del objeto dentro del controlador de eventos de la siguiente manera
        
        num=0;
        // trim to remove the whitespaces
	    const userLogin = Username.value.trim();
        const passLogin = password.value.trim();
        
       
        if(userLogin.length<1){
            setErrorFor(Username,"El usuario no puede estar vacío");
         }else{
             setSuccesFor(Username);
             num+=1;
         }
         if(passLogin.length<1){
             setErrorFor(password,"La contraseña no puede estar vacía");
          }else{
             setSuccesFor(password);
             num+=1;
          }

         //si llega a este punto logró todas las validaciones correctamente
      
         if(num===2){
         alert("Inició sesión correctamente");
         return;
         }
         

    })

   
/*
 let nameValid = hasValue(formlogin.elements["Username"], "Ingrese el nombre de usuario");
    let password = hasValue(formlogin.elements["passwordLogin"], "Ingrese el nombre de usuario");
    
    if (nameValid && password) {
		alert("Inició sesion correctamente");
	}


    -------------------------------------------
       num=0;
        if(Username.value.length<1){
            alert("El usuario no puede estar vacío");
           setErrorFor(Username,"El usuario no puede estar vacío");
           
        }else{
            setSuccesFor(Username);
            alert("Ehi username");
            num+=1;
        }
        if(password.value.length<1){
            setErrorFor(password,"La contraseña no puede estar vacía");
            alert("La contraseña no puede estar vacío");
         }else{
            setSuccesFor(password);
            num+=1;
         }
        //si llega a este punto logró todas las validaciones correctamente
       
        if(num==2){
        alert("Inició sesión correctamente");
        num=0;
        }
        
*/
}


function registerf(){

    //se agrega el detector de eventos del formulario de registro utilizando el método:submit addEventListener()
    form.addEventListener('submit', (e)=>{
        e.preventDefault(); //Para evitar que se envíe el formulario, llame al método del objeto dentro del controlador de eventos de la siguiente manera
        
        num=0;
        // trim to remove the whitespaces
	    const Nombresnew = Nombres.value.trim();
	    const Apellidosnew  = Apellidos.value.trim();
	    const Correonew  = Correo.value.trim();
	    const Usuarionew  = Usuario.value.trim();
        const Contraseñanew = Contraseña.value.trim();
        const Contraseña2new = Contraseña2.value.trim();
       
        if(Nombresnew.length<1){
            setErrorFor(Nombres,"El nombre no puede estar vacío");
         }else{
             setSuccesFor(Nombres);
             num+=1;
         }

         if(Apellidosnew.length<1){
             setErrorFor(Apellidos,"El apellido no puede estar vacío");
          }else{
             setSuccesFor(Apellidos);
             num+=1;
          }

          if(Foto.value.length<1){
             setErrorFor(Foto,"No ha agregado ninguna foto");
          }else{
             setSuccesFor(Foto);
             num+=1;
          }
          
          if(Correonew === '') {
            setErrorFor(Correo, 'No puede dejar el email en blanco');
          } else if (!isEmail(Correonew)) {
            setErrorFor(Correo, 'No ingreso un email válido');
          } else {
             setSuccesFor(Correo);
             num+=1;
          }
 
          if(Usuarionew.length<1){
             setErrorFor(Usuario,"El Usuario no puede estar vacío");
          }else{
              setSuccesFor(Usuario);
              num+=1;
          }

          if(Contraseñanew === '') {
            setErrorFor(Contraseña,"La contraseña no puede estar vacía");
          } else if (!isPassword(Contraseñanew)) {
            setErrorFor(Contraseña, 'No ingresó una contraseña válida');
          } else {
             setSuccesFor(Contraseña);
             num+=1;
          }

          if(Contraseña2new.length<1){
             setErrorFor(Contraseña2,"Favor de confirmar la contraseña");
          }else{
             if(Contraseña2new==Contraseñanew){
                 setSuccesFor(Contraseña2);
                 num+=1;
             }else{
             setErrorFor(Contraseña2,"La contraseña es diferente a la ingresada, inténtalo de nuevo");
             }
          }

          if(Fecha.value.length<1){
            setErrorFor(Fecha,"No seleccionó ninguna fecha");
          }else if(validateDate(Fecha.value)){
            setErrorFor(Fecha,"La fecha no puede ser mayor al día actual");
          }else if(validaEdad(Fecha.value)<13){
            setErrorFor(Fecha,"Debe ser mayor a 13 años");
          }else{ 
            setSuccesFor(Fecha);
            num+=1;
          }
         
         //si llega a este punto logró todas las validaciones correctamente
         //Entonces guardará la informacion
        // if(num===8){
          //  alert("Se registró correctamente");
            //return;
         //}
         

    })

}

function validaLetras(e){
    //Aceptará unicamente letras
    //ayudará a la deteccion de la letra al momento de presionar
    key= e.keyCode || e.which;
    tecla= String.fromCharCode(key).toString();
    letras= "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyzáéíóú ";

    //tecla enter y retroceso con codigo ascii
    especiales=[8, 13];
    tecla_especial=false
    for(var i in especiales){
        if(key==especiales[i]){
            tecla_especial=true;
            break;
        }
    }

    //En caso de que de clic a otra tecla
    if(letras.indexOf(tecla)== -1 && !tecla_especial){
        alert("Ingresar solo letras");
        return false;
    }
}
function isPassword(contra){
return /^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.])\S{8}$/.test(contra);

}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validaEdad(date){
    
    var today=new Date();
    var birthday= new Date(date);
    var year= today.getFullYear()-birthday.getFullYear();
    var month=today.getMonth()-birthday.getMonth();
    if(month<0||(month==0 && today.getDate()-1<birthday.getDate())){
        year--;
    }
    return year;
}

function validateDate(date){
    
    var today=new Date();
    var birthday= new Date(date);
    if(birthday>today){
        return true;
    }else{
        return false;
    }
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