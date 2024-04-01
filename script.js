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
let login_name = document.querySelector("#name1")
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




//Automatyczne generowanie postów
description = 
[
    'Czemu on ma czarne włosy ?',
    'Mioder wojna to najlepsze co widziałem w życiu autor opowiada jak bardzo boryka się z małpami kiedy wstaje i musi je powstrzymywać mocą aby nic mu nie ukradły. Akcja utworu dzieje się w latach współczesnych',
    'Freestyle parisa platynova to jest lepsze od tego g**na "Mioder wojna" jeżeli małpy mu się nie podobają to niech nie mieszka w lesie. Paris platynov w swoich tekstach nawiązuje do swoich rodziców do mamy która upornie trze ser na tarce i tacie, który utyrany po pracy wraca i ręcznie musi prać wypocone rzeczy',
    'Ence pomnożony x 3 (w produkcji) i pomnożony x 10 (w rozszerzeniu). Czyli wielka aberracja. A oni chcieli to przemycić, nie przekazując nikomu żadnych informacji. Teraz widzą, że się budzimy i spieszą się, żeby przyjechać do głównych dotkniętych gmin, żeby „wyjaśnić się”*.',
    'W dzisiejszym zgiełku życia łatwo zapomnieć o prostych radościach, takich jak ciepły uścisk bliskiej osoby czy chwila spokoju przy filiżance ulubionej herbaty.',
    'Nauka nowych rzeczy to nic innego jak nieustająca podróż poznawcza, która sprawia, że życie jest pełniejsze i bardziej interesujące.',
    'Czasem najpiękniejsze widoki są tylko dla tych, którzy zatrzymują się na chwilę i patrzą z pełną uwagą na świat wokół siebie.',
    'Marzenia są jak kompas w morzu życia - wskazują kierunek, ale to my musimy podjąć kroki, by osiągnąć cel.',
    'Szczęście nie polega na posiadaniu wszystkiego, ale na umiejętności cieszenia się tym, co się ma, i docenianiu chwil obecnych.',
    'Każdy dzień niesie ze sobą nowe możliwości i wyzwania - warto podejmować je z odwagą i determinacją.',
    'Miłość to siła, która pozwala nam pokonać nawet najtrudniejsze przeszkody i daje nam siłę do stawiania czoła życiowym wyzwaniom.',
    'Każdy człowiek ma w sobie potencjał do osiągnięcia wielkich rzeczy - kluczem jest wiara we własne możliwości i nieustanny wysiłek.',
    'W dzisiejszym zabieganym świecie warto pamiętać o potrzebie czasu dla siebie - chwile samotności mogą przynieść spokój i klarowność myśli.',
    'Radość płynie z drobnych rzeczy - uśmiech dziecka, ciepłe promienie słońca na skórze, czy zapach ulubionej potrawy.',
    'Życie to podróż pełna niespodzianek i wyzwań - warto czerpać z niej pełnymi garściami i otwierać się na nowe doświadczenia.',
    'Więzi rodzinne są fundamentem naszego życia - dają nam oparcie i siłę do stawiania czoła trudnościom.',
    'Wspólne chwile spędzone z najbliższymi są cenniejsze niż najdroższe skarby - to one tworzą niezapomniane wspomnienia, które pozostaną z nami na zawsze.',
    'Każdy dzień to nowa szansa na zaczęcie od nowa i zrealizowanie swoich marzeń - warto korzystać z każdej możliwości, jaką nam daje życie.',
    'Równowaga między pracą a życiem prywatnym jest kluczem do szczęśliwego i spełnionego życia - warto dbać o siebie i swoje relacje z bliskimi.',
    'W dzisiejszym szybkim tempie życia łatwo zapomnieć o potrzebie odpoczynku i regeneracji - warto pamiętać o tym, że czasem trzeba zwolnić i odetchnąć głęboko.',
    'Życie to nie tylko bieganie po szczytach sukcesu, ale także cieszenie się drobnymi chwilami szczęścia i spokoju.',
    'Każdy z nas ma w sobie coś wyjątkowego - warto odkrywać swoje talenty i rozwijać je, by osiągnąć pełnię swojego potencjału.',
    'Wspólne cele i marzenia są tym, co zbliża ludzi i tworzy więzi, które przetrwają próbę czasu.',
    'Szczęśliwe życie nie polega na posiadaniu wszystkiego, ale na umiejętności doceniania tego, co się ma, i dzielenia się tym z innymi.'
]

nicks = [
    'dawido',
    'LobotomyMrBeast',
    'Hexir',
    'Prostokątny uchwyt samochodowy',
    'Sawi',
    'TibeQ',
    'Tutel',
    '_Sledzik_',
    'Kusy_77',
    'frqncuz',
    'Pasja',
    'patsnape',
    'sz00wary',
    'Admin',
    'AR Monke',
    'Blek',
    'Decak',
    'Kłoda',
    'limon',
    'makiro_',
    'Bekon',
    'chudyJones',
    'dawido_V2',
    'DoorMan',
    'dresiaraa',
    'FeniO',
    'Fiało',
    'jedrys',
    'Kapeć',
    'kapi',
    'koguciko2',
    'Kubuloツ',
    'L1GH7N1NG',
    'lena_xx',
    'Majkel',
    'mikunew',
    'Morton',
    'Noviu',
    'okk333',
    'PiO',
    'piżmak',
    'Quicior',
    'Rudyyy',
    'Scarlett',
    'staryds',
    'szczepix',
    'twiciaa',
    'tymoteuszthetworca',
    'waltuh_80',
    'Wieczor',
    'zakolega',
    'świerk',
    'Bo Sinn',
    'GamerHQW',
    'Kamilek',
    'Kuchnia',
    'obrzyganiec nr2',
    'OpalSoPL',
    'Sernik',
    'tonieoskar123',
    'Yase',
    'Tayron',
    'Johny'
]
photos = [
    'profile/3.png',
    'profile/1.jpg',
    'profile/2.png',
    'profile/4.jpg',
    'profile/5.png',
    'profile/6.png',
    'profile/7.png',
    'profile/8.png',
    'profile/9.png',
    'profile/10.png',
    'profile/11.png',
    'profile/12.png',
]

/////

function Randomdescription(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }
  var chooser_descriptin = RandomPhotosnorepeats(description);

///////
function Randomnicks(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }
  var chooser_nicks = Randomnicks(nicks);

/////
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
/////
for(i =0;i<15; i++){
var Website_description =document.createElement('Description')
var Nick = document.createElement("Nick")
var logo = document.createElement("logo")
var post_withoutimg = document.createElement("post");
var comment = document.createElement("Comment")
Website_description.className='description_look'
post_withoutimg.className='posty'
post_withoutimg.id='p'+i
logo.style.backgroundImage = 'url(' + chooser_photos() + ')';
logo.className='logo_look'
Nick.className='Nick_look'
Website_description.innerHTML = chooser_descriptin()
Nick.innerHTML = chooser_nicks()
comment.className='comment_look'
between.appendChild(post_withoutimg)
post_withoutimg.appendChild(logo)
post_withoutimg.appendChild(Nick)
post_withoutimg.appendChild(Website_description)
post_withoutimg.appendChild(comment)
}



function music(){
var audio = new Audio('Windows_xp.mp3');
audio.play();
}
window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "13") {
        music()
    }
}
login_name.addEventListener('click', function(){
    login_name.style.transform='scale(1.2, 1.2)'
})
//Wyszukiwanie
const Search  = document.getElementById('Search_child')

    Search.addEventListener('keyup', e =>{
        let conapisane = e.target.value.toLowerCase();
        let post = document.getElementsByClassName('posty')
        var nick = document.getElementsByClassName('Nick_look');
        for(i=0;i<15;i++){
        if(nick[i].innerHTML.toLowerCase().includes(conapisane)){
            post[i].style.display='flex';
        }else{
            post[i].style.display='none';
        }
    }
    })