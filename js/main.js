
//global consts
const s = document.querySelector("*");
const vars = getComputedStyle(s);

let rainbow = ['#be616b', '#cf876f', '#eaca8b', '#a3bd8d', '#88c0cf', '#b38ead']


const transalp = document.querySelector(".trnslp-text");

var last_stage = null;

const btn = [];

// ADD BIKE ICONS TO BUTTON ON STAGES ON HOVER
const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

const bk = [];
const bt = [];
if (isMobile != true) {
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
} else {
    for (let i = 1; i < 7; i++) {
        console.log("ACTION")
        
        bt[i] = document.getElementById("btn-s"+i);
        bt[i].textContent = i;
    }
}
    


// ROTATE ATW-LOGO ON SCROLL
// CHECK FOR TOPBAR UPDATE
window.onscroll = function () {
    scrollRotate();
    topbarTitle();
};
// UPDATE TOPBAR ON RESIZE
window.onresize = (function() {
    updateAnchors();
  });


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
var why_a = document.getElementById("why-a").offsetTop;
var wbr_a = document.querySelector("#wbr-a").offsetTop;
var atw_a = document.querySelector("#atw-a").offsetTop;
var tra_a = document.querySelector(".donate-now").offsetTop;

function updateAnchors() {
    why_a = document.getElementById("why-a").offsetTop;
    wbr_a = document.querySelector("#wbr-a").offsetTop;
    atw_a = document.querySelector("#atw-a").offsetTop;
    tra_a = document.querySelector(".donate-now").offsetTop;
    console.log("RESIZE!");

    topbarTitle();
}

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

    // updateAnchors();
    var x = window.pageYOffset;
/*     console.log(x);
    console.log(shown);
    console.log("tra: "+tra_a);
    console.log("awt: "+atw_a);
    console.log("wbr: "+wbr_a);
    console.log("why: "+why_a); */


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
            }

            if(shown == "tra") {
                navbar.style.transformOrigin = "top";
                navbar.style.transition = "all .3s";
                navbar.style.transform = "translateY(0)";
            }

            shown = "atw";
            break;

        case(x >= wbr_a):
            if(shown == "why") {
                document.getElementById("t-wbr").style.transition = "all .3s ";
                document.getElementById("t-wbr").style.transformOrigin = "bottom";
                document.getElementById("t-wbr").style.transform = ("scale(1, 1) skew(0deg)");

                document.getElementById("t-why").style.transform = ("scale(1, 0) skew(-30deg)");
            }

            if(shown == "atw") {
                document.getElementById("t-atw").style.transformOrigin = "bottom";
                document.getElementById("t-atw").style.transition = "all .3s";
                document.getElementById("t-atw").style.transform = ("scale(1, 0) skew(30deg)");

                document.getElementById("t-wbr").style.transformOrigin = "top";
                document.getElementById("t-wbr").style.transition = "all .3s";
                document.getElementById("t-wbr").style.transform = ("scale(1, 1) skew(0deg)");
            }

            shown = "wbr";
            break;

        case (x >= why_a):
            if(shown == "header") {
                navbar.classList.add("sticky"); 
                document.getElementById("t-why").style.display = "block";
            }

            if (shown == "wbr") {
                document.getElementById("t-wbr").style.transformOrigin = "bottom";
                document.getElementById("t-wbr").style.transition = "all .3s";
                document.getElementById("t-wbr").style.transform = ("scale(1, 0) skew(30deg)");

                document.getElementById("t-why").style.transformOrigin = "top";
                document.getElementById("t-why").style.transition = "all .3s";
                document.getElementById("t-why").style.transform = ("scale(1, 1) skew(0deg)");
            }
            shown = "why";
            break;

        default:
            navbar.classList.remove("sticky");
            shown = "header";
            break;
    }
} 

// SLIDESHOW //

// DIV WHERE BG-IMAGE IS SET
var picFrame = document.getElementById('pic');
// CURRENT SLIDE/PICTURE
var slideIndex = 1;
// HOLDS NAV/INDEX DOTS
var dotHolder = document.getElementById('dot-holder');
// DOT ARRAY
var dots = [];
// CURRENT STAGE SHOWN, GOT TO BE SET BY STAGE BUTONS 1-6=>0-5
var stage = 0;
// GIVES PICTURE COUNT PER STAGE, HARDCODED
// Stage:       1  2  3   4   5   6
var picCount = [5, 5, 10, 10, 10, 8];

// CREATES DOTS AFTER EVERY STAGE CHANGE
function prepareSlideshow(stg) {
    console.log("stage: "+stg);
  // remove all current dots
  document.querySelectorAll('.dot').forEach(e => e.remove());
  dots = [];

  // create new dots
  for (let i = 0; i < picCount[stg]; i++) {
    console.log("loop:"+i)

    dots[i] = document.createElement("SPAN");
    dots[i].classList.add("dot");
    dots[i].onclick = function() {currentSlide(i+1);}
    dotHolder.appendChild(dots[i]);
  }

  slideIndex = 1;
  showSlides(slideIndex);

}

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
  console.log("pc: "+picCount[stage]+"si:"+slideIndex);
  var i;

   console.log("DOTS: "+dots)


  if (n > picCount[stage]) {slideIndex = 1}
  if (n < 1) {slideIndex = picCount[stage]}


  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  console.log("index"+slideIndex);

  var url = "./src/img/slideshow/"+(stage+1)+slideIndex+".jpg";
  console.log("URL: "+url)
  picFrame.style.backgroundImage = "url("+url+")";


  console.log("si: "+slideIndex);
  dots[slideIndex-1].className += " active";


  clearTimeout(timer);
//   timer = setTimeout(function(){ currentSlide(slideIndex + 1);}, 5000);
} 

var slideshow = document.querySelector(".slideshow");


const stageInfo = document.getElementById("stage-info");

function st1(int) {

    resetStageButtons();    

    // SHOW SELECTED STAGE NAME, INFO AND DESCRIPTION
    for(let o=0; o<document.querySelectorAll(".stage"+int).length; o++) {
        document.querySelectorAll(".stage"+int)[o].style.display = "block";};

    // STYLE SELECTED STAGE BUTTON
    btn[int].style.opacity = "1";
    btn[int].style.fontWeight = "bolder";
    btn[int].style.fontSize = ".9rem";
    // BG COLOR DEPENDENT ON ISMOBILE
    btn[int].style.backgroundColor = rainbow[int-1];
    if(isMobile ==  false) {
        btn[int].style.backgroundColor = "transparent";
    }

    stage = int-1;
    prepareSlideshow(stage);

    // REMOVE TRANSALP TEXT IF SHOWN + SHOW SLIDESHOW AGAIN
    if (last_stage == null) {
        transalp.style.display = "none";
        slideshow.style.display = "block";
        stageInfo.style.display = "grid";
    }

    // ADD TRANSALP TEXT IF NO STAGE SELECTED AND REMOVE STAGE
    if (btn[int] == last_stage) {
        transalp.style.display = "block";
        slideshow.style.display = "none";
        stageInfo.style.display = "none";
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
        btn[i].style.backgroundColor = vars.getPropertyValue("--inactive-btn-bg");
        // REMOVE ALL ELEMENTS BY CLASS stageX AKA STAGE NAME, DATA AND DESCRIPTION 
        for(let o=0; o<document.querySelectorAll(".stage"+i).length; o++) {
            document.querySelectorAll(".stage"+i)[o].style.display = "none";};
            btn[i].style.fontWeight = "normal";
        btn[i].style.fontSize = ".8rem";
    };
}
  
