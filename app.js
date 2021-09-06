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
var chessModal = document.getElementById("chessModal");
var chessButton = document.getElementById("chessButton")
var span = document.getElementsByClassName("close")[0];

// Asteroids button
var asteroidsModal = document.getElementById("asteroidsModal");
var asteroidsButton = document.getElementById("asteroidsButton")
var span = document.getElementsByClassName("close")[0];

chessButton.onclick = function() {
    chessModal.style.display = "block";
}

asteroidsButton.onclick = function() {
    asteroidsModal.style.display = "block";
}

span.onclick = function() {
    chessModal.style.display = "none";
    asteroidsModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == chessModal) {
        chessModal.style.display = "none";
    }

    if (event.target == asteroidsModal) {
        asteroidsModal.style.display = "none";
    }
}

// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {
  
//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
  
//         // Store hash
//         var hash = this.hash;
  
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 800, function(){
  
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         });
//       } // End if
//     });
//   });