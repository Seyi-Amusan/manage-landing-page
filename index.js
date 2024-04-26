const menuBtn = document.querySelector('#mobileMenuButton')
const menu = document.querySelector('#mobileMenu')

let perViewValue

if (window.innerWidth <= 1023) {
  perViewValue = 1; 
} else {
  perViewValue = 3; 
}

if (window.innerWidth > 767) {
  document.querySelector('#simplifySection').setAttribute('src', 'images/bg-simplify-section-desktop.svg')
}

const glide = new Glide('.glide', {
    type: 'carousel',
    perView: perViewValue,      
    autoplay: 4000,   
    hoverpause: true,
    animationDuration: 2000, 
}).mount();

if (window.innerWidth <= 1023) {
  glide.on('run', function () {
    const bullets = document.querySelectorAll('.glide__bullet');
    const activeIndex = glide.index;
  
    bullets.forEach((bullet, index) => {
      if (index === activeIndex) {
        bullet.classList.add('active');
      } else {
        bullet.classList.remove('active');
      }
    });
  });
}

menuBtn.addEventListener('click', () => {
  if (menu.getAttribute('visible') === "false") {
    menu.classList.remove('opacity-0');
    menu.classList.add('opacity-100');
    menu.setAttribute('visible', 'true');
  } else {
    menu.classList.remove('opacity-100');
    menu.classList.add('opacity-0');
    menu.setAttribute('visible', 'false');
  }
});
