var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  


  const heroElem = document.querySelector(".section-hero");
  const footerElem = document.querySelector(".section-footer");


  const scrollElement =document.createElement('div');
  scrollElement.classList.add("scrollTop-style");

  scrollElement.innerHTML= '<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>';

  footerElem.after(scrollElement);

  const scrollTop=()=>{
    heroElem.scrollIntoView({behavior:"smooth"})
  };

  scrollElement.addEventListener("click",scrollTop);

  const mobile_nav=document.querySelector(".mobile-navbar-btn");
  const headElem= document.querySelector(".header");

  mobile_nav.addEventListener("click", ()=>{
    headElem.classList.toggle("active");
  });


  


// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
