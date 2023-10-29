document.querySelector("#cancel").addEventListener("click", () => {
    // document.getElementById("nav-top").style.backgroundColor = "violet";
    document.getElementById("nav-top").style.display = "none";
})

document.getElementById("hidden").addEventListener("mouseenter", ()=>{
  document.getElementById("catt").style.display = "block"
})
document.getElementById("hidden1").addEventListener("mouseenter", ()=>{
  document.getElementById("catt").style.display = "block"
})
document.getElementById("hidden2").addEventListener("mouseenter", ()=>{
  document.getElementById("catt").style.display = "block"
})
document.getElementById("hidden3").addEventListener("mouseenter", ()=>{
  document.getElementById("catt").style.display = "block"
})
document.getElementById("hidden1").addEventListener("mouseleave", ()=>{
  document.getElementById("catt").style.display = "none"
})
document.getElementById("hidden2").addEventListener("mouseleave", ()=>{
  document.getElementById("catt").style.display = "none"
})
document.getElementById("hidden3").addEventListener("mouseleave", ()=>{
  document.getElementById("catt").style.display = "none"
})
document.getElementById("hidden").addEventListener("mouseleave", ()=>{
  document.getElementById("catt").style.display = "none"
})
document.getElementById("catt").addEventListener("mouseenter", ()=>{
  document.getElementById("catt").style.display = "block"
})
document.getElementById("catt").addEventListener("mouseleave", ()=>{
  document.getElementById("catt").style.display = "none"
})


document.getElementById("book-hover1").addEventListener("mouseenter", ()=>{
  document.getElementById("e-books").style.display = "block"
})
document.getElementById("book-hover1").addEventListener("mouseleave", ()=>{
  document.getElementById("e-books").style.display = "none"
})
document.getElementById("e-books").addEventListener("mouseenter", ()=>{
  document.getElementById("e-books").style.display = "block"
})
document.getElementById("e-books").addEventListener("mouseleave", ()=>{
  document.getElementById("e-books").style.display = "none"
})


document.querySelector("#head-1").addEventListener("click", () => {
    // document.getElementById("nav-top").style.backgroundColor = "violet";
    if(document.querySelector("#head1").style.display == "none"){

      document.querySelector("#head1").style.display = "block";
    }
    else{
      document.querySelector("#head1").style.display = "none";
    }
    if(document.querySelector("#head2").style.display == "none"){

      document.querySelector("#head2").style.display = "block";
    }
    else{
      document.querySelector("#head2").style.display = "none";
    }
    if(document.querySelector("#head3").style.display == "none"){

      document.querySelector("#head3").style.display = "block";
    }
    else{
      document.querySelector("#head3").style.display = "none";
    }
    if(document.querySelector("#head4").style.display == "none"){

      document.querySelector("#head4").style.display = "block";
    }
    else{
      document.querySelector("#head4").style.display = "none";
    }
    if(document.querySelector("#head5").style.display == "none"){

      document.querySelector("#head5").style.display = "block";
    }
    else{
      document.querySelector("#head5").style.display = "none";
    }
    if(document.querySelector("#head6").style.display == "none"){

      document.querySelector("#head6").style.display = "block";
    }
    else{
      document.querySelector("#head6").style.display = "none";
    }
    if(document.querySelector("#head7").style.display == "none"){

      document.querySelector("#head7").style.display = "block";
    }
    else{
      document.querySelector("#head7").style.display = "none";
    }
    if(document.querySelector("#head8").style.display == "none"){

      document.querySelector("#head8").style.display = "block";
    }
    else{
      document.querySelector("#head8").style.display = "none";
    }
    if(document.querySelector("#head9").style.display == "none"){

      document.querySelector("#head9").style.display = "block";
    }
    else{
      document.querySelector("#head9").style.display = "none";
    }
    
})


// scroll
var responsiveSlider = function() {

    var slider = document.getElementById("right-div");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 5000);
    
    };
    
    window.onload = function() {
    responsiveSlider();
    }

// document.querySelector("#right-btn").addEventListener("click", () => {
//     document.getElementById("slider").scrollBy(690, 0)
// })
// document.querySelector("#left-btn").addEventListener("click", () => {
//     document.getElementById("slider").scrollBy(-690, 0)
// })


// books scroll
document.querySelector("#next1").addEventListener("click", () => {
    document.getElementById("books").scrollBy(230, 0)
    document.getElementById("books1").scrollBy(230, 0)
})
document.querySelector("#prev1").addEventListener("click", () => {
    document.getElementById("books").scrollBy(-235, 0)
    document.getElementById("books1").scrollBy(-235, 0)
})
document.querySelector("#next4").addEventListener("click", () => {
    document.getElementById("books21").scrollBy(230, 0)
    document.getElementById("books22").scrollBy(230, 0)
})
document.querySelector("#prev4").addEventListener("click", () => {
    document.getElementById("books21").scrollBy(-235, 0)
    document.getElementById("books22").scrollBy(-235, 0)
})

document.querySelector("#next2").addEventListener("click", () => {
    document.getElementById("books-scroll-1").scrollBy(220, 0)
})
document.querySelector("#prev2").addEventListener("click", () => {
    document.getElementById("books-scroll-1").scrollBy(-220, 0)
})

document.querySelector("#next3").addEventListener("click", () => {
    document.getElementById("books-scroll-3").scrollBy(220, 0)
})
document.querySelector("#prev3").addEventListener("click", () => {
    document.getElementById("books-scroll-3").scrollBy(-220, 0)
})

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.querySelector("#next1").addEventListener("click", () => {
      document.getElementById("books").scrollBy(206, 0)
      document.getElementById("books1").scrollBy(206, 0)
  })
  document.querySelector("#prev1").addEventListener("click", () => {
      document.getElementById("books").scrollBy(-210, 0)
      document.getElementById("books1").scrollBy(-210, 0)
  })
  document.querySelector("#next4").addEventListener("click", () => {
      document.getElementById("books21").scrollBy(206, 0)
      document.getElementById("books22").scrollBy(206, 0)
  })
  document.querySelector("#prev4").addEventListener("click", () => {
      document.getElementById("books21").scrollBy(-210, 0)
      document.getElementById("books22").scrollBy(-210, 0)
  })


    // document.getElementById("books21").style.backgroundColor = "brown";
    // document.getElementById("books22").style.backgroundColor = "brown";
    // document.getElementById("books1").style.backgroundColor = "brown";
    // document.getElementById("books").style.backgroundColor = "brown";
  } else {
  //  document.getElementById("books21").style.backgroundColor = "pink";
  //  document.getElementById("books22").style.backgroundColor = "pink";
  //  document.getElementById("books1").style.backgroundColor = "pink";
  //  document.getElementById("books").style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function Func(y){
  if(document.getElementById("right-div").style.display == "block"){
    document.getElementById("right-div").style.display = "none"
    document.getElementById("con").style.marginTop = "0px";
  }
  else{
    document.getElementById("right-div").style.display = "block"
  }
}

var y = window.matchMedia("(max-width: 450px)")
Func(y) // Call listener function at run time
y.addListener(Func) // Attach listener function on state changes



// slideshow
let slideIndex1 = 0;
showSlides1();

function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("c1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) { slideIndex1 = 1 }
    slides[slideIndex1 - 1].style.display = "block";
    setTimeout(showSlides1, 4000); // Change image every 2 seconds
}

let slideIndex2 = 0;
showSlides2();

function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("c2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) { slideIndex2 = 1 }
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides2, 4250); // Change image every 2 seconds
}

let slideIndex3 = 0;
showSlides3();

function showSlides3() {
    let i;
    let slides = document.getElementsByClassName("c3");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex3++;
    if (slideIndex3 > slides.length) { slideIndex3 = 1 }
    slides[slideIndex3 - 1].style.display = "block";
    setTimeout(showSlides3, 4500); // Change image every 2 seconds
}

document.querySelector("#btn").addEventListener("click", () => {
    if (document.querySelector(".link-top-desc").style.display == "none") {
        document.querySelector(".link-top-desc").style.display = "flex"
    } else {
        document.querySelector(".link-top-desc").style.display = "none"
    }
})

// function display(){
//     if(document.querySelector(".head").style.display == "none"){
//         document.querySelector(".haed").style.display = "block"
//     }
// }


// function cancel(){
//     document.getElementById("nav-top").style.display = "none";
// }

// function cancel(){
//     // document.getElementById("nav-top").style.display = "none";
//     document.getElementById("nav-top").style.backgroundColor = "violet";
// }





function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}

function disable(){
  document.querySelector('#books').addEventListener('wheel', preventScroll);
  document.querySelector('#books1').addEventListener('wheel', preventScroll);
  document.querySelector('#books-scroll-1').addEventListener('wheel', preventScroll);
}


document.querySelector('#prev').addEventListener('click', disable);
document.querySelector('#next').addEventListener('click', disable);
document.querySelector('#prev2').addEventListener('click', disable);
document.querySelector('#next2').addEventListener('click', disable);