const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle)

function navToggle() {
   btn.classList.toggle('open')
//    menu.classList.toggle('flex')
//    menu.classList.toggle('hidden')
   menu.classList.toggle('translate-x-full')
   menu.classList.toggle('translate-x-0')
}


