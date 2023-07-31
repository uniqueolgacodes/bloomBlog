/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function navBar() {
//   var x = document.getElementById("blog_topnav");
//   if (x.className.indexOf("responsive") === -1) {
//     x.className += " responsive";
//   } else {
//     x.className = x.className.replace(" responsive", "");
//   }
// }
// }function navBar() {
//     var x = document.getElementById("blog_topnav");
//     if (x.className === "blog_topnav") {
//       x.className += "responsive";
//     } else {
//       x.className = "blog_topnav";
//     }
//   }
document.getElementById("navbar_icon").addEventListener("click", function(){
  document.getElementById("dropdown_content").style.display = "block";
});