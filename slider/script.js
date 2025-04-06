document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
   function goToSlide(slideIndex) 
   {
      slider.style.transform = `translateX(-${slideIndex * 100}%)`;
      document.querySelector('.slide.active').classList.remove('active');
      document.querySelector('.dot.active').classList.remove('active');
      
      slides[slideIndex].classList.add('active');
      dots[slideIndex].classList.add('active');
      
      currentSlide = slideIndex;
    }

    function nextSlide() 
    {
      if (currentSlide === totalSlides - 1) 
      {
        goToSlide(0);
      } else 
      {
        goToSlide(currentSlide + 1);
      }
    }
    
    function prevSlide() 
    {
      if (currentSlide === 0) {
        goToSlide(totalSlides - 1);
      } else {
        goToSlide(currentSlide - 1);
      }
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach(dot => {
      dot.addEventListener('click', function() 
      {
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        goToSlide(slideIndex);
      });
    });
    
    let slideInterval = setInterval(nextSlide, 3000);
    
    // Pause on hover (optional)
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, 3000);
    });
  });