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
  var dots = document.getElementsByClassName("dot");
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



function add(){
  let valInput = $("#num").val();
  valInput = (valInput == "") ? 1 : parseInt(valInput) + 1;
  if(valInput > 10){
    return;
  }
  $("#num").val(valInput);
}


function subtract(){
  let valInput = $("#num").val();
  if(valInput > 0){
    valInput = (valInput == "") ? 1 : parseInt(valInput) - 1;
    $("#num").val(valInput);
  }
  
}

// ADD TO CART functionality
function showCart(){
  if($(".container_1").hasClass("cartHide")){
    $(".container_1").removeClass("cartHide");
    $(".container_1").addClass("showCart");
    
  }

  else if($(".container_1").hasClass("showCart")){
    $(".container_1").removeClass("showCart");
    $(".container_1").addClass("cartHide");
  }

}

