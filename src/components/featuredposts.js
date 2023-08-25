var modal = document.getElementById("modal1");
var btton = document.getElementById("modalbtnf1");
var span = document.getElementsByClassName("close")[0];
btton.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}