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

chessButton.onclick = function() {
    chessModal.style.display = "block";
}

span.onclick = function() {
    chessModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == chessModal) {
        chessModal.style.display = "none";
    }
}