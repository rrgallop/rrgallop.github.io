// /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// } 

// Chess button
// var chessModal = document.getElementById("chessModal");
// var chessButton = document.getElementById("chessButton")
// var span = document.getElementsByClassName("close")[0];

// // Asteroids button
// var asteroidsModal = document.getElementById("asteroidsModal");
// var asteroidsButton = document.getElementById("asteroidsButton")
// var span = document.getElementsByClassName("close")[0];

// chessButton.onclick = function() {
//     chessModal.style.display = "block";
// }

// asteroidsButton.onclick = function() {
//     asteroidsModal.style.display = "block";
// }

// span.onclick = function() {
//     chessModal.style.display = "none";
//     asteroidsModal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == chessModal) {
//         chessModal.style.display = "none";
//     }

//     if (event.target == asteroidsModal) {
//         asteroidsModal.style.display = "none";
//     }
// }

document.getElementById("formSubmit").addEventListener("click", function(event){
    window.alert("Thanks for reaching out!\n\nThis message will be routed to my personal email.\n\nI will be sure to reply as soon as possible.");
  });
  
$(document).ready(function(){
    $(window).scroll(function(e){
      parallax();
    });
    
    function parallax(){
      var scrolled = $(window).scrollTop();
      $('.hero >').css('top',-(scrolled*3)+'rem');
      $('.hero >').css('top',(scrolled*-0.03)+'rem');
    //   $('.hero-text >').css('opacity',1-(scrolled*.00175));
    };
});

// accordian menu
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {



    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});