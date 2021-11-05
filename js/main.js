
//global consts
const s = document.querySelector("*");
const vars = getComputedStyle(s);

const transalp = document.querySelector(".trnslp-text");

var last_stage = null;

const btn = [];

// ADD BIKE ICONS TO BUTTON ON STAGES ON HOVER
const bk = [];
const bt = [];
for (let i = 1; i < 7; i++) {
    bk[i] = document.querySelector(".ico-bk"+i);
    
    bt[i] = document.getElementById("btn-s"+i);
    bt[i].addEventListener("mouseenter", e => {
        bk[i].style.display = "block";
        bt[i].style.opacity = "0";
    });
    bt[i].addEventListener("mouseleave", e => {
        bk[i].style.display = "none";
        bt[i].style.opacity = vars.getPropertyValue("--inactive-btn-opacity");
    });
}

// ROTATE ATW-LOGO ON SCROLL
// CHECK FOR TOPBAR UPDATE
window.onscroll = function () {
    scrollRotate();
    topbarTitle();
};

function scrollRotate() {
    let image = document.querySelector(".images-color");
    let image1 = document.querySelector(".images-light");
    //let image3 = document.querySelector(".bg-sproket");
    //let image4 = document.querySelector(".bg-disc");
    image.style.transform = "rotate(" + window.pageYOffset/-8 + "deg)";
    image1.style.transform = "rotate(" + window.pageYOffset/-8 + "deg)";
    //image3.style.transform = "rotate(" + window.pageYOffset/-18 + "deg)";
    //image4.style.transform = "rotate(" + window.pageYOffset/-18 + "deg)";
}


// Get the navbar
var navbar = document.querySelector("#topbar")

// Get the offset positions/ankers
var why_a = navbar.offsetTop;
var wbr_a = document.querySelector("#wbr-a").offsetTop;
var atw_a = document.querySelector("#atw-a").offsetTop;
var tra_a = document.querySelector(".donate-now").offsetTop;

// Position in page
var shown = "header";

// Prepare lower titles for animation
document.getElementById("t-wbr").style.transition = "all 0s";
document.getElementById("t-wbr").style.transform = ("scale(1, 0) skew(30deg)");
document.getElementById("t-atw").style.transition = "all 0s";
document.getElementById("t-atw").style.transform = "scale(1, 0) skew(30deg)";

// Shows respective title depending on scroll position in page
// Adds "cubic" switch animation
function topbarTitle() {

    var x = window.pageYOffset;

    switch (true) {
        case (x >= tra_a):

            navbar.style.transformOrigin = "top";
            navbar.style.transition = "all .3s";
            navbar.style.transform = "translateY(-3rem)";
            shown = "tra";
            break;

        case (x >= atw_a):
            navbar.style.display = "flex";

            if(shown == "wbr") {
                document.getElementById("t-atw").style.transformOrigin = "bottom";
                document.getElementById("t-atw").style.transition = "all .3s";
                document.getElementById("t-atw").style.transform = ("scale(1, 1) skew(0deg)");

                document.getElementById("t-wbr").style.transformOrigin = "top";
                document.getElementById("t-wbr").style.transition = "all .3s";
                document.getElementById("t-wbr").style.transform = ("scale(1, 0) skew(-30deg)");

                shown = "atw";
            }
            if(shown == "tra") {
                navbar.style.transformOrigin = "top";
                navbar.style.transition = "all .3s";
                navbar.style.transform = "translateY(0)";

                shown = "atw";
            }
            break;

        case(x >= wbr_a):
            if(shown == "why") {
                document.getElementById("t-wbr").style.transition = "all .3s ";
                document.getElementById("t-wbr").style.transformOrigin = "bottom";
                document.getElementById("t-wbr").style.transform = ("scale(1, 1) skew(0deg)");

                document.getElementById("t-why").style.transform = ("scale(1, 0) skew(-30deg)");

                shown = "wbr";
            }

            if(shown == "atw") {
                document.getElementById("t-atw").style.transformOrigin = "bottom";
                document.getElementById("t-atw").style.transition = "all .3s";
                document.getElementById("t-atw").style.transform = ("scale(1, 0) skew(30deg)");

                document.getElementById("t-wbr").style.transformOrigin = "top";
                document.getElementById("t-wbr").style.transition = "all .3s";
                document.getElementById("t-wbr").style.transform = ("scale(1, 1) skew(0deg)");

                shown = "wbr";
            }
            break;

        case (x >= why_a):
            if(shown == "header") {
                navbar.classList.add("sticky"); 
                document.getElementById("t-why").style.display = "block";
                shown = "why";
            }

            if (shown == "wbr") {
                document.getElementById("t-wbr").style.transformOrigin = "bottom";
                document.getElementById("t-wbr").style.transition = "all .3s";
                document.getElementById("t-wbr").style.transform = ("scale(1, 0) skew(30deg)");

                document.getElementById("t-why").style.transformOrigin = "top";
                document.getElementById("t-why").style.transition = "all .3s";
                document.getElementById("t-why").style.transform = ("scale(1, 1) skew(0deg)");

                shown = "why";
            }
            break;

        default:
            navbar.classList.remove("sticky");
            shown = "header";
            break;
    }
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
//   timer = setTimeout(function(){ currentSlide(slideIndex + 1);}, 5000);
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
  
    touchsurface.addEventListener("touchstart", function(e){
        var touchobj = e.changedTouches[0]
        swipedir = "none"
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener("touchmove", function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
  
    touchsurface.addEventListener("touchend", function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? "left" : "right" // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? "up" : "down" // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}
  
//USAGE:

swipedetect(slideshow, function(swipedir){
    //swipedir contains either "none", "left", "right", "top", or "down"
    if (swipedir =="left") {plusSlides(-1);}
    if (swipedir == "right") {plusSlides(+1);}
})


function st1(int) {

    resetStageButtons();    

    // SHOW SELECTED STAGE NAME, INFO AND DESCRIPTION
    for(let o=0; o<document.querySelectorAll(".stage"+int).length; o++) {
        document.querySelectorAll(".stage"+int)[o].style.display = "block";};

    // STYLE SELECTED STAGE BUTTON
    btn[int].style.opacity = "1";
    btn[int].style.backgroundColor = "transparent";
    btn[int].style.fontWeight = "bolder";
    btn[int].style.fontSize = ".9rem";
    //btn[int].style.backgroundColor = vars.getPropertyValue("--card-background");

    // REMOVE TRANSALP TEXT IF SHOWN + SHOW SLIDESHOW AGAIN
    if (last_stage == null) {
        transalp.style.display = "none";
        slideshow.style.display = "block";
    }

    // ADD TRANSALP TEXT IF NO STAGE SELECTED AND REMOVE STAGE
    if (btn[int] == last_stage) {
        transalp.style.display = "block";
        slideshow.style.display = "none";
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
        btn[i].style.opacity = vars.getPropertyValue("--inactive-btn-opacity");
        btn[i].style.backgroundColor = vars.getPropertyValue("--background");
        // REMOVE ALL ELEMENTS BY CLASS stageX AKA STAGE NAME, DATA AND DESCRIPTION 
        for(let o=0; o<document.querySelectorAll(".stage"+i).length; o++) {
            document.querySelectorAll(".stage"+i)[o].style.display = "none";};
            btn[i].style.fontWeight = "normal";
        btn[i].style.fontSize = ".8rem";
    };
}
  
