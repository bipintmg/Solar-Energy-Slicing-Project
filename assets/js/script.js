// // Script for Single expandable accordion
document.addEventListener("DOMContentLoaded", function() {
  var acc = document.getElementsByClassName("list__qn");
  var panels = document.getElementsByClassName("list__ans");

  // Activate the first three accordions
  for (var i = 0; i < 3; i++) {
      acc[i].classList.add("active");
      panels[i].classList.add("show");
  }

  // Add click event listener to all accordions
  for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          panel.classList.toggle("show");
      });
  }
});

//menu
let burger_toggle = 0;

function burger() {
  let header = document.getElementsByTagName("header")[0];
  if (burger_toggle == 0) {
    header.setAttribute("class", "burger-on");
    burger_toggle = 1;
    document.body.style.overflow = "hidden";
  } else if (burger_toggle == 1) {
    header.setAttribute("class", null);
    burger_toggle = 0;
    document.body.style.overflow = "auto";
  }
}

// Event listener for window resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 767 && burger_toggle == 1) {
    burger();
  }
});