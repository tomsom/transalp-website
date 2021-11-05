

const s = document.querySelector("*");
const vars = getComputedStyle(s);

var picture = document.getElementById('pic');

var dotHolder = document.getElementById('dot-holder');
var dot = [];

//got to be set by stage buttons 1-6=>0-5
var stage = 1;

var picCount = [5, 5, 5, 5, 5, 5];

function prepareSlideshow(stg) {
  console.log("PREP"+picCount[stg]+stg);
  stage = stg;
  dot = [];

  for (let i = 0; i < 5; i++) {
    console.log("loop:"+i)
    dot[i] = document.createElement("SPAN");
    dot[i].classList.add("dot");
    dotHolder.appendChild(dot[i]);

    dot[i].onclick = function(i) {currentSlide(i);}
  }

  slideIndex = picCount[stg]+1;

  // currentSlide(1);
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


//current picture
var pic = 0;
//Amount of pictures-1 per stage
// const picCount = [5, 5, 5, 5, 5, 5];

var timer;

function showSlides(n) {
  prepareSlideshow(stage);
  console.log("SLIDE");
  var i;
  // var slides = document.getElementsByClassName("s1ss");
  var dots = document.getElementsByClassName("dot");


  if (n > picCount[stage]) {slideIndex = 1}
  if (n < 1) {slideIndex = picCount[stage]}

/*   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  } */

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // slides[slideIndex-1].style.display = "block";

  stage = 0;
  console.log("index"+slideIndex);

  var url = "../src/img/"+stage+slideIndex+".jpeg";
  console.log("URL: "+url)
  picture.style.backgroundImage = "url("+url+")";



  dots[slideIndex-1].className += " active";


  clearTimeout(timer);
//   timer = setTimeout(function(){ currentSlide(slideIndex + 1);}, 5000);
} 

var slideshow = document.querySelector(".slideshow");


