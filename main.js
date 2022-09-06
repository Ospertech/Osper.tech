const body = document.querySelector("body");
const content = document.querySelector(".content");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    menu.classList.add("active")
    menuBtn.classList.add("hide")
    body.classList.add("disabledScroll")
}

cancelBtn.onclick = () => {
    menu.classList.remove("active")
    menuBtn.classList.remove("hide")
    body.classList.remove("disabledScroll")

}

window.onscroll = () => {
    this.scrollY > 50 ? content.classList.add("sticky")
        :
        content.classList.remove("sticky");
}






// ---------------Progress Bar----------------

// const progress = document.getElementById('progressbar');
// const totalHeight = document.body.scrollHeight - window.innerHeight;

// window.onscroll = () => {
//     let progressHeight = (window.pageYOffset / totalHeight) * 100;
//     progress.style.height = progressHeight + "%";
// }


//SCROLL REVEAL

ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2500,
    Delay: 400
});

ScrollReveal().reveal('.title, .contentAboutThree__bakcground h2, .about_title, .aboutTrhee_title, .service_title, .portfolio_title, .contact_title ', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.parrafo,  .formulario_contacto', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.cards .card, .slide-track, .contenido_secundario', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.footer ul li a i', { delay: 100, origin: 'top', interval: 150 });
ScrollReveal().reveal('.contentAbout button, .btnac, .inputSubmit', { delay: 100, origin: 'rigth' });







// ----------------Loader----------------

window.addEventListener("load", () => {
    document.getElementById('loader').classList.toggle('loader2')
})








// --------------------VIDEOS---------------------

const video1 = document.querySelector('.video1')
const video2 = document.querySelector('.video2')
const video3 = document.querySelector('.video3')

video1.onended = () => {
    video2.play();
    video1.style.opacity = 0;
    video2.style.opacity = 1;
}

video2.onended = () => {
    video3.play();
    video2.style.opacity = 0;
    video3.style.opacity = 1;
}

video3.onended = () => {
    video1.play();
    video3.style.opacity = 0;
    video1.style.opacity = 1;
}







// ---------------typed---------------

const typed = new Typed('.typed', {
    strings: [
        '<i class="mascota">Custom Web Design</i>',
        '<i class="mascota">Institutional or Business</i>',
        '<i class="mascota">Personal Portfolios</i>',
        '<i class="mascota">E-commerce</i>'
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});


// ---------------Menu color scroll----------------

const li = document.querySelectorAll('.links');
const sec = document.querySelectorAll('section');


function activeMenu() {
    let len = sec.length;

    while (--len && window.scrollY + 97 < sec[len].offsetTop) {

    }
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
