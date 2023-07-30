/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navBar() {
    var x = document.getElementById("blog_topnav");
    if (x.className === "blog_topnav") {
      x.className += "responsive";
    } else {
      x.className = "blog_topnav";
    }
  }