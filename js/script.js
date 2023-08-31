let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}


function validateForm() {
    if (document.forms["mesaggeForm"]["name"].value == "") {
        alert("Name can't be empty.");
        document.forms["mesaggeForm"]["name"].focus();
        return false;
    }
    if (document.forms["mesaggeForm"]["email"].value == "") {
        alert("Input your email.");
        document.forms["mesaggeForm"]["email"].focus();
        return false;
    }
    if (document.forms["mesaggeForm"]["phone"].value == "") {
        alert("Input your phone number.");
        document.forms["mesaggeForm"]["phone"].focus();
        return false;
    }
    if (document.forms["mesaggeForm"]["message"].value == "") {
        alert("What your thoughts?");
        document.forms["mesaggeForm"]["message"].focus();
        return false;
    }
}