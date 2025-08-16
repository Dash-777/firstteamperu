  
  
  /* ////////////////
  Toggle mobile menu 
  ////////////////// */
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOpen = document.getElementById('mobile-menu-open');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  mobileMenuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden');
    mobileMenuOpen.classList.toggle('hidden');
    mobileMenuClose.classList.toggle('hidden');
  });
  // Toggle desktop programs dropdown
  const programsDropdownButton = document.getElementById('programs-dropdown-button');
  const programsDropdown = document.getElementById('programs-dropdown');
  const dropdownArrow = document.getElementById('dropdown-arrow');

  programsDropdownButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = programsDropdown.classList.toggle('hidden');
    dropdownArrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
  });
  // Toggle mobile programs dropdown
  const mobileProgramsButton = document.getElementById('mobile-programs-button');
  const mobileProgramsDropdown = document.getElementById('mobile-programs-dropdown');
  const mobileProgramsArrow = document.getElementById('mobile-programs-arrow');

  mobileProgramsButton.addEventListener('click', () => {
    const isOpen = mobileProgramsDropdown.classList.toggle('hidden');
    mobileProgramsArrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
  });
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!programsDropdownButton.contains(e.target) && !programsDropdown.contains(e.target)) {
      programsDropdown.classList.add('hidden');
      dropdownArrow.style.transform = 'rotate(0deg)';
    }
  });


/* ////////////////
  ANIMACION DE CONTEO
  ////////////////// */

  document.addEventListener('DOMContentLoaded', function() {
            // Configuración de los contadores
            const counters = [
                { element: 'counter1', target: 25, prefix: '', suffix: '+' },
                { element: 'counter2', target: 5, prefix: '', suffix: 'K+' },
                { element: 'counter3', target: 3, prefix: '+', suffix: '' }
            ];
            
            const duration = 2000; // Duración de la animación en ms
            const interval = 50; // Intervalo de actualización en ms
            
            counters.forEach(counter => {
                const element = document.getElementById(counter.element);
                const start = 0;
                const increment = (counter.target - start) / (duration / interval);
                let current = start;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= counter.target) {
                        clearInterval(timer);
                        current = counter.target;
                    }
                    element.textContent = counter.prefix + Math.floor(current) + counter.suffix;
                }, interval);
            });
        });





document.addEventListener('DOMContentLoaded', function() {
    // Inicialización del carrusel
    const carousel = new Carousel(document.getElementById('default-carousel'), {
        // tus opciones aquí
    });
});
