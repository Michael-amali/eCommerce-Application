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



// js of aj


//stores previously clicked images properties
let previous;
// showImage function
function changeImage(event){
      let imageSrc  = $(event).attr("src");
      let currentDiv;
      
      // console.log(imageSrc);

      
      if(String(imageSrc) === String("/images/mini_coat_front.jpg")){
           

        $(".mySlides .img1").attr("src","/images/coat_pic_front.jpg");
        let man_1 = $(".mySlides .img1").attr("src");
        // console.log(man_1);

        $(".mySlides .img2").attr("src","/images/kid_model.jpg");
        $(".mySlides .img3").attr("src","/images/coat_pic_back.jpg");

            currentDiv = $(event).parent().addClass("borderAdd");



           if(typeof previous === 'undefined'){
              previous = currentDiv;
           }else{
            previous.removeClass("borderAdd");
            previous = currentDiv;
           }
           
      }else if(String(imageSrc) === String("/images/mini_kid_model.jpg")){

            $(".mySlides .bigProductImg").attr("src","/images/kid_model.jpg");
           
             currentDiv =$(event).parent().addClass("borderAdd");
        
             



             if(typeof previous == 'undefined'){
                previous = currentDiv;
             }else{
              previous.removeClass("borderAdd");
              previous = currentDiv;
             }
             

      }else if(String(imageSrc) === String("/images/mini_coat_back.jpg")){
        $(".mySlides .bigProductImg").attr("src","/images/coat_pic_back.jpg");
        
        currentDiv =   $(event).parent().addClass("borderAdd");

        if(typeof previous == 'undefined'){
            previous = currentDiv;
         }else{
          previous.removeClass("borderAdd");
          previous = currentDiv;
         }
         
      }

    
      changeDetails(event);
}


//function to change product details starts here
function changeDetails(event){
  // console.log(event)

  imageSrc = $(event).attr("src");

  if(String(imageSrc) === String("/images/coat_pic_front.jpg")){
      //name of product
      $("h3 .reduced_1").text("Uk made Shoes");
      //price on dicount
      $(".money_div").text(180.00);
      //previous  price
      $("p span del").text(280.99);
     
  }
  else if(String(imageSrc) === String("/images/kid_model.jpg")){
      
       //name of product
       $("#text h2").text("Corporate Office Suits");
       //price on dicount
       $(".delivery-div h2 #price").text(580.00);
       //previous  price
       $(".delivery-div h2 #oldprice").text(780.99);

  }else if(String(imageSrc) === String("/images/coat_pic_back.jpg")){
      //name of product
      $("#text h2").text("Boy's Cardigan with Zip");
        
      //price on dicount
      $(".delivery-div h2 #price").text(120.00);
      //previous  price
      $(".delivery-div h2 #oldprice").text(200.99);

  }
  
}
