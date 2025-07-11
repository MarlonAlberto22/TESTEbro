document.addEventListener('DOMContentLoaded', () => {
  // ========== MENU HAMBÚRGUER ==========
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
      menuToggle.innerHTML = navbar.classList.contains('active') ? '&#10005;' : '&#9776;';
    });
  }

  // ========== CARROSSEL MOBILE ==========
  const carrosselContainer = document.querySelector('.carrossel-container');
  if (carrosselContainer && window.innerWidth <= 630) {
    const carrossel = carrosselContainer.querySelector('.logos-empresas');
    const logos = carrossel.querySelectorAll('img');

    // Mostra apenas o primeiro logo inicialmente
    logos.forEach((logo, index) => {
      logo.style.display = index === 0 ? 'block' : 'none';
    });

    // Rotação das logos
    let currentIndex = 0;
    setInterval(() => {
      logos[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % logos.length;
      logos[currentIndex].style.display = 'block';
    }, 3000); // A cada 3 segundos
  }

  // ========== ABRIR FORMULÁRIO TOMTICKET EM POP-UP ==========
  window.abrirChat = function () {
    const url = 'https://broadmedia.tomticket.com/chat/balao/EP42696/2732544P27032020021858'
      + '?ts=' + new Date().getTime()
      + '&ref=' + encodeURIComponent(document.URL);

    window.open(url, '_blank', 'width=400,height=600,resizable=yes');
  };
});
