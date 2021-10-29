
  

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector(".stage-lines")

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 
  
      function st1(int) {
        const btn = [];
        const stg = [];
        const s = document.querySelector("*");
        const vars = getComputedStyle(s);
  
        for (let i = 1; i < 7; i++) {
        
        btn[i] = document.querySelector("#btn-s"+i);
        btn[i].style.color = vars.getPropertyValue('--foreground')
        stg[i] = document.querySelector("#stage"+i);
        stg[i].style.display = "none";
        console.log(i);
        console.log(btn[i]);
        //const stg = [];
        //stg[i]
      }
  
      console.log("INT is: "+int);
      console.log("BTN is: "+btn[1]);
  
        btn[int].style.color = "#f00";
        stg[int].style.display = "inline";
      }
  