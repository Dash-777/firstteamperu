  
  
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
  TESTIMONIOS
  ////////////////// */
 function scrollTestimonials(direction) {
            const slider = document.getElementById('testimonialSlider');
            const cardWidth = window.innerWidth < 640 ? 275 : window.innerWidth < 768 ? 360 : 420;
            
            if (direction === 'left') {
                slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
            }
        }

        // Event listeners
        const slider = document.getElementById('testimonialSlider');
        
        // Touch events for mobile
        let startX;
        let scrollLeft;

        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const x = e.touches[0].pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });

        // Auto-scroll disabled - only manual navigation available




        /* nosotros imagenes */
  // Función para abrir el modal con la imagen
        function openModal(element) {
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            
            // Establecer la fuente de la imagen en el modal
            modalImage.src = element.src;
            
            // Mostrar el modal
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevenir scroll
        }

        // Función para cerrar el modal
        function closeModal() {
            const modal = document.getElementById('imageModal');
            
            // Ocultar el modal
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Permitir scroll nuevamente
        }

        // Cerrar modal con la tecla Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });

        // Inicializar todas las imágenes de la galería
        document.addEventListener('DOMContentLoaded', function() {
            const galleryImages = document.querySelectorAll('.gallery-img');
            
            galleryImages.forEach(img => {
                // Ya tenemos el evento onclick configurado en el HTML
                // Pero podríamos agregar más funcionalidad aquí si es necesario
            });
        });










      