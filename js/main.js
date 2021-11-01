
//global consts
const s = document.querySelector("*");
const vars = getComputedStyle(s);

const transalp = document.querySelector('.trnslp-text');

var last_stage = null;

const btn = [];
const stg = [];

// ADD BIKE ICONS TO BUTTON ON STAGES ON HOVER
const bk = [];
const bt = [];
for (let i = 1; i < 7; i++) {
    bk[i] = document.querySelector(".ico-bk"+i);
    
    bt[i] = document.getElementById('btn-s'+i);
    bt[i].addEventListener('mouseenter', e => {
        bk[i].style.display = "block";
        bt[i].style.opacity = '0';
    });
    bt[i].addEventListener('mouseleave', e => {
        bk[i].style.display = "none";
        bt[i].style.opacity = vars.getPropertyValue('--inactive-btn-opacity');
    });
}

// ROTATE ATW-LOGO ON SCROLL
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.querySelector('.images-color');
    let image1 = document.querySelector('.images-dark');
    let image2 = document.querySelector('.images-light');
    //let image3 = document.querySelector('.bg-sproket');
    //let image4 = document.querySelector('.bg-disc');
    image.style.transform = "rotate(" + window.pageYOffset/-8 + "deg)";
    image1.style.transform = "rotate(" + window.pageYOffset/-8 + "deg)";
    image2.style.transform = "rotate(" + window.pageYOffset/-8 + "deg)";
    //image3.style.transform = "rotate(" + window.pageYOffset/-18 + "deg)";
    //image4.style.transform = "rotate(" + window.pageYOffset/-18 + "deg)";
}

/*
const bt1 = document.getElementById('btn-s1');
bt1.addEventListener('mouseenter', e => {
    const bk1 = document.querySelector('.ico-bk1');
    bk1.style.display = "block";
} );
/*
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector(".stage-lines")

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    const below_sl = document.querySelector(".below-sl");
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        below_sl.style.marginTop = vars.getPropertyValue('--sl-height');
    } else {
        navbar.classList.remove("sticky");
        below_sl.style.marginTop = "0";
    }
} 
  */

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

var timer;

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("s1ss");
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

  clearTimeout(timer);
  timer = setTimeout(function(){ currentSlide(slideIndex + 1);}, 5000);
} 

var slideshow = document.querySelector(".slideshow");

function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}
  
//USAGE:

swipedetect(slideshow, function(swipedir){
    //swipedir contains either "none", "left", "right", "top", or "down"
    if (swipedir =='left') {plusSlides(-1);}
    if (swipedir == 'right') {plusSlides(+1);}
})


function st1(int) {

    resetStageButtons();    

    // SHOW SELECTED STAGE
    stg[int].style.display = "flex";

    // STYLE SELECTED STAGE BUTTON
    btn[int].style.opacity = "1";
    btn[int].style.backgroundColor = "transparent";
    btn[int].style.fontWeight = "bolder";
    btn[int].style.fontSize = ".9rem";
    //btn[int].style.backgroundColor = vars.getPropertyValue('--card-background');

    // REMOVE TRANSALP TEXT IF SHOWN
    if (last_stage == null) {
        transalp.style.display = 'none';
    }

    // ADD TRANSALP TEXT IF NO STAGE SELECTED AND REMOVE STAGE
    if (btn[int] == last_stage) {
        transalp.style.display = 'block';
        resetStageButtons();
        btn[int] = null;
    }

    
    
    // SCROLL DOWN TO TRANSALP SECTION
    window.location.href = "#btn-s1";

    last_stage = btn[int];

}

function resetStageButtons() {

    // INIT BUTTONS AND STAGES + STYLE NORMAL IF WERE SELECTED BEFORE 
    for (let i = 1; i < 7; i++) {
        btn[i] = document.querySelector("#btn-s"+i);
        btn[i].style.opacity = vars.getPropertyValue('--inactive-btn-opacity');
        btn[i].style.backgroundColor = vars.getPropertyValue('--background');
        stg[i] = document.querySelector("#stage"+i);
        stg[i].style.display = "none";
        btn[i].style.fontWeight = "normal";
        btn[i].style.fontSize = ".8rem";
    }
}
  