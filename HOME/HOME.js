//-------------------------SIDEBAR--------------------------
const menuItems = document.querySelectorAll('.menu-item');

//-------------------------NIGHT MODE--------------------------
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

//BACKGROUND

const Bg1= document.querySelector('.bg-1');
const Bg2= document.querySelector('.bg-2');
const Bg3= document.querySelector('.bg-3');


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