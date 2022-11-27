//------------------------------PROFILE INFO EDIT---------------------------------
//document.getElementById("registerf").addEventListener("click", registerf); 

const profileclick = document.querySelector('#profile-edit');
const profileModal = document.querySelector('.customize-profile');

//-----------------------SPOILER FEED------------------------
const acceptspoiler = document.querySelector('#spoiler-feed');
const imageDataTitle = document.querySelector('.image-data_title');
const imageDataText = document.querySelector('.image-data_text');
const buttonSpoiler = document.querySelector('.image-data .btn-primary');
const backspoiler = document.querySelector('.middle .feed .photo');

//-------------------------SIDEBAR--------------------------
const menuItems = document.querySelectorAll('.menu-item');

//-----------------------SHOW COMMENTS---------------------------
const ShowComments = document.querySelector('#showComments');
const comments = document.querySelector('.contenedor-comentarios');

//--------------------LIKE--------------------------------
const liked = document.querySelector('#likeheart');
const LikeChange = document.querySelectorAll('.likedHeart');

//-------------------------NIGHT MODE--------------------------
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

//BACKGROUND

const Bg1= document.querySelector('.bg-1');
const Bg2= document.querySelector('.bg-2');
const Bg3= document.querySelector('.bg-3');

//============================SPOILER FEED===================================
//Desactive spoiler
const DesactiveSpoiler = () => {
    imageDataTitle.style.transform ='translateX(-150%)';
    imageDataText.style.transform ='translateX(200%)';
    buttonSpoiler.style.transform ='translateY(800%)';
    backspoiler.style.setProperty('--photo-after', 'translateY(100%)');

}

acceptspoiler.addEventListener('click', DesactiveSpoiler);
//==========================LIKE=================================

//SHOW LIKE
const paintLike = () => {

    if( document.getElementById('likeheart').style.color == 'var(--color-heart-active)'){
        document.getElementById('likeheart').style.color = 'var(--color-heart)'; 
    }else{
        document.getElementById('likeheart').style.color = 'var(--color-heart-active)'
    }
}

liked.addEventListener('click', paintLike);
//==========================SHOW COMMENTS=================================

//opens comments
const showComments = () => {
    if(comments.style.display == 'flex'){
        comments.style.display = 'none'
    }else{
        comments.style.display = 'flex'
    }
}

ShowComments.addEventListener('click', showComments);
//==========================PROFILE INFO EDIT=================================

//opens modal
const openProfileModal = () => {
    profileModal.style.display = 'grid';
}

//close modal
const closeProfileModal = (e) => {
    if(e.target.classList.contains('customize-profile')){
        profileModal.style.display = 'none';
    }
}
profileModal.addEventListener('click', closeProfileModal);

profileclick.addEventListener('click', openProfileModal);

/*
let num=0;

const form= document.getElementById("register");

const Nombres= document.getElementById("nombres");
const Apellidos= document.getElementById("apellidos");
const Correo= document.getElementById("Correo");
const Contraseña= document.getElementById("Contraseña");
const Contraseña2= document.getElementById("ConfirmarContraseña");
const Foto= document.getElementById("foto");
const Fecha= document.getElementById("fecha");


function registerf(){

    //se agrega el detector de eventos del formulario de registro utilizando el método:submit addEventListener()
    form.addEventListener('submit', (e)=>{
        e.preventDefault(); //Para evitar que se envíe el formulario, llame al método del objeto dentro del controlador de eventos de la siguiente manera
        
        num=0;
        // trim to remove the whitespaces
	    const Nombresnew = Nombres.value.trim();
	    const Apellidosnew  = Apellidos.value.trim();
	    const Correonew  = Correo.value.trim();
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
            setErrorFor(Correo, 'El email no puede estar vacío');
          } else if (!isEmail(Correonew)) {
            setErrorFor(Correo, 'No ingreso un email válido');
          } else {
             setSuccesFor(Correo);
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

*/



//=======================SIDEBAR============================
//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item =>{
    item.addEventListener('click', () =>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications . notification-count').style.display= 'none';
        }
    })
})

//=======================NIGHT MODE============================

//opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//close modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}


themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

//=======================BACKGROUND============================
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//changes background color
const changeBG = () =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () =>{
    //add active class
    Bg1.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customized changes from local storage
    window.location.reload();
});

Bg2.addEventListener('click', () =>{
    darkColorLightness ='95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () =>{
    darkColorLightness ='95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});

//=======================PUBLICATIONS============================

$(document).ready(function () {

    $("#btn-create-post").click(function () {
            if($( "#create-post" ).val().trim()===""){
                alert("campos vacíos");
                return;
            }
            markup = "<div class=\"feed\">"+
            "<div class=\"head\">"+
                "<div class=\"user\">"+
                    "<div class=\"profile-photo\">"+
                        "<img src=\"../images/profile-13.jpg\">"+
                    "</div>"+
                    "<div class=\"ingo\">"+
                        "<h3>  Denisse Cardoza</h3>"+
                        "<small>  FCFM, HACE 15 MINUTOS</small>"+
                    "</div>"+
                "</div>"+
                "<span class=\"edit\">"+
                    "<i class=\"uil uil-ellipsis-h\"></i>"+
                "</span>"+
            "</div>"+

            "<div class=\"caption\">"+
            "<p> "+$( "#create-post" ).val()+"</p>"+

            "</div>"+

            "<div class=\"action-buttons\">"+
                "<div class=\"interaction-buttons\">"+
                    "<span><i class=\"uil uil-heart\"></i></span>"+
                    "<span><i class=\"uil uil-comment-dots\"></i></span>"+
                    "<span><i class=\"uil uil-share\"></i></span>"+
                "</div>"+
                "<div class=\"bookmark\">"+
                    "<span><i class=\"uil uil-bookmark\"></i></span>"+
                "</div>"+
            "</div>"+
            
            "<div class=\"liked-by\">"+
                "<span><img src=\"../images/profile-15.jpg\"></span>"+
                "<span><img src=\"../images/profile-12.jpg\"></span>"+
                "<span><img src=\"../images/profile-11.jpg\"></span>"+
                "<p>Le gusta a <b>Boing Eguia</b> y <b>57 personas más</b> </p>"+
            "</div>"+

            
            "<div class=\"comments text-muted\">Ver los 15 comentarios</div>"+
        "</div>";

            $( "#create-post" ).val("");
            tableBody = $("body .feeds");
            tableBody.prepend(markup);
});
}); 