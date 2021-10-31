
//global consts
const s = document.querySelector("*");
const vars = getComputedStyle(s);

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
    let image3 = document.querySelector('.bg-sproket');
    let image4 = document.querySelector('.bg-disc');
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
function st1(int) {
    const btn = [];
    const stg = [];

    for (let i = 1; i < 7; i++) {
        btn[i] = document.querySelector("#btn-s"+i);
        btn[i].style.opacity = vars.getPropertyValue('--inactive-btn-opacity');
        btn[i].style.backgroundColor = vars.getPropertyValue('--background');
        stg[i] = document.querySelector("#stage"+i);
        stg[i].style.display = "none";
        btn[i].style.fontWeight = "normal";
        btn[i].style.fontSize = ".8rem";
    }

    console.log("INT is: "+int);
    console.log("BTN is: "+btn[1]);

    btn[int].style.opacity = "1";
    btn[int].style.backgroundColor = "transparent";
    btn[int].style.fontWeight = "bolder";
    btn[int].style.fontSize = ".9rem";
    //btn[int].style.backgroundColor = vars.getPropertyValue('--card-background');

    stg[int].style.display = "block";
    

    window.location.href = "#btn-s1";

}
  