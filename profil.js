window.addEventListener('load', function(){
    if(this.localStorage.getItem('Nazwa')===null && this.localStorage.getItem('Hasło')===null){
        localStorage.setItem('czyzalogowano','nie')
    }
})
//Definiowanie rzeczy ogólnych
let left = document.querySelector("#left")
let right = document.querySelector("#right")
let between = document.querySelector('#beetwen')
//Menu Definiowanie
let menu_scroll = document.querySelector('#left_menu_scroll')
let menu = document.querySelector('#left_menu');
let Options = document.querySelector('.Options')
let darker = document.querySelector('.ss')
//logowanie
let profil = document.querySelector('.profile')
let profil_background = document.querySelector('.kk')
let logowanie = document.querySelector('.login')
let Zmiana_na_Rejestracje = document.querySelector('#Napis')
let register = document.querySelector('.register')
let back_login = document.querySelector('#Napis_login')
let profil_after_login = document.querySelector(".profil_po_logowaniu")
//Ciemna strona
function dark(){
    left.style.backgroundColor = 'black'
    right.style.backgroundColor = 'black'
    between.style.backgroundColor = 'black'
}
//Jasna strona
function light(){
    left.style.backgroundColor = 'lightblue'
    right.style.backgroundColor = 'lightblue'
    between.style.backgroundColor = '#cccccc'
}
//#Zmiana koloru strony
let move = false;
circle_move = document.querySelector('#little_click')
circle_move.addEventListener('click', function (){
    if(!move)
    {
    move = true;
    circle_move.style.transform="translateX(30px)"
    light()
    }
    else{
    move = false;
    circle_move.style.transform="translateX(-0.7px)"
    dark()
    }

})

//Opcje
Options.addEventListener('click',function(){
    menu_scroll.style.opacity = "1";
    menu_scroll.style.top=('30%')
    darker.style.top=('0%')
})
darker.addEventListener('click',function(event)
{
    if(darker!==event.target) return;
    menu_scroll.style.top=('-130%')
    menu_scroll.style.opacity = "0";
    darker.style.top=('-100%')
})
//logwanie
profil.addEventListener('click',function(){
profil_background.style.top=('0%')
logowanie.style.top='30%'
logowanie.style.opacity='1'

})
profil_background.addEventListener('click',function(){
    profil_background.style.top=('-130%')
    logowanie.style.top='-130%'
    logowanie.style.opacity='0'
    register.style.top='-130%'
    register.style.opacity='0'
})
//Rejestracja
Zmiana_na_Rejestracje.addEventListener('click',function(){
    logowanie.style.top='-130%'
    logowanie.style.opacity='0'
    register.style.top='30%'
    register.style.opacity='1'
})
//Zmiana na login
back_login.addEventListener('click', function(){
    logowanie.style.top='30%'
    logowanie.style.opacity='1'
    register.style.top='-130%'
    register.style.opacity='0'
})
//Program do pobierania 
let button_register = document.querySelector('#register')
let button_login = document.querySelector('#submit')
let Nazwa_register = document.querySelector('#name')
let Hasło_register = document.querySelector('#Haslo')
let Nazwa_login = document.querySelector('#name1')
let Haslo_login = document.querySelector('#password')
let Profil_tak = document.querySelector('.profil_po_logowaniu')
button_register.addEventListener('click', save)
function save() {
    if(Nazwa_register.value=="") return;
    if(Hasło_register.value=="") return;
localStorage.setItem('Nazwa', JSON.stringify(Nazwa_register.value));
localStorage.setItem('Hasło', JSON.stringify(Hasło_register.value));
}
button_login.addEventListener('click', odczyt)
function odczyt(){
    if('"'+Nazwa_login.value+'"' !== localStorage.getItem('Nazwa') || '"'+Haslo_login.value+'"' !== localStorage.getItem('Hasło')){
        prompt('Podałeś błędne hasło lub login')
    }
    else if('"'+Nazwa_login.value+'"' == localStorage.getItem('Nazwa') && '"'+Haslo_login.value+'"' == localStorage.getItem('Hasło'))
    {   
        profil_background.style.top='-100%'
        logowanie.style.top='-100%'
        setTimeout(()=>{location.reload()},2000)
    }
}
window.addEventListener('load', function(){
    if(this.localStorage.getItem('Nazwa')!==null){
    profil.addEventListener('click',function(){
        logowanie.style.top='-100%'
        logowanie.style.opacity='0'
        profil_background.style.top='-100%'
        window.location.href = "profil.html"
})
    }
    else{
        prompt("nie")
    }
})
photos = [
    'profile/1.jpg',
    'profile/2.png',
    'profile/3.png',
    'profile/4.jpg',
    'profile/5.png',
    'profile/6.png',
    'profile/7.png',
    'profile/8.png',
    'profile/9.png',
    'profile/10.png',
    'profile/11.png',
    'profile/12.png',
    'zdjecia/pobrany_plik.png',
    'profile_images/1.jpg',
    'profile_images/2_1.png',
    'profile_images/3.jpg',
    'profile_images/4.jpg',
    'profile_images/5.jpg',
    'profile_images/6.png',
    'profile_images/7.png',
    'profile_images/8.png',
]
function RandomPhotosnorepeats(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }
  var chooser_photos = RandomPhotosnorepeats(photos);

//losowy backgorund profil
let profiles = document.querySelector('#profil_beetwen_down')
window.addEventListener('load', (event) =>{
    profiles.style.backgroundImage='url(' + chooser_photos() + ')';
})





//Powrot glowna strona
// let Home = document.querySelector('#Home_page')
// window.addEventListener('load', (event) =>{
//     Home.style.left='21.1%'
// }

// )
// Home.addEventListener('click', function(){
//     window.location.href = "index.html"
// })

//Nick pisanie 
let beetwen_high = document.querySelector('#beetwen_high')
window.addEventListener('load', (event) =>{
    beetwen_high.innerHTML = localStorage.getItem("Nazwa").slice(1,localStorage.getItem("Nazwa".length)-1)
})

//Wylogowanie
let log_out = document.querySelector('#Log_out')
log_out.addEventListener('click', function(){
    window.location.href = "index.html"
    localStorage.clear()
})


//
let following = document.querySelector('#Following')
let followers = document.querySelector('#Followers')
window.addEventListener('load', (event) =>{
    following.innerHTML += Math.round(Math.random()*1000)
    followers.innerHTML += Math.round(Math.random()*10)
})

//galleria
let photo1 = document.querySelector('.gallery_photo1')
let photo2 = document.querySelector('.gallery_photo2')
let photo3 = document.querySelector('.gallery_photo3')
let photo4 = document.querySelector('.gallery_photo4')
let photo_show = document.querySelector('.big')
photo1.addEventListener('click', function(){
    photo_show.style.backgroundImage = "url('zdjecia/las.png')";
})
photo2.addEventListener('click', function(){
    photo_show.style.backgroundImage = "url('zdjecia/lotnisko.png')";
})
photo3.addEventListener('click', function(){
    photo_show.style.backgroundImage = "url('zdjecia/morze.png')";
})
photo4.addEventListener('click', function(){
    photo_show.style.backgroundImage = "url('zdjecia/góry.png')";
})
//Wracanie do main
function back(){
    window.location.href='index.html'
}
//Posty profilu 
let zakladka_posty = document.querySelector('#Posts')
let posty_napis = document.querySelector('.napis_posty')
let zakladka_images = document.querySelector('#Images')
zakladka_posty.addEventListener('click', function(){
    photo1.className='gallery_photos_after_refresh'
    photo2.className='gallery_photos_after_refresh'
    photo3.className='gallery_photos_after_refresh'
    photo4.className='gallery_photos_after_refresh'
    photo_show.className='gallery_photos_after_refresh'
    posty_napis.className='napis_posty_po'
})
zakladka_images.addEventListener('click',function(){
    photo1.className='gallery_photo1 g'
    photo2.className='gallery_photo2 g'
    photo3.className='gallery_photo3 g'
    photo4.className='gallery_photo4 g'
    photo_show.className='big'
    posty_napis.className='ll'
})
let add_post = document.querySelector('.ADD_POSTS')
add_post.addEventListener('click', function(){
    if(posty_napis.className=='napis_posty_po'){
        
    }
    else{
        prompt('Przejdź do zakładki posty')
    }
})