//Script for Single expandable accordion
document.addEventListener('DOMContentLoaded', function() {
  var headers = document.querySelectorAll('.list__qn');

  headers.forEach(function(header) {
      header.addEventListener('click', function() {
          var content = this.nextElementSibling;
          if (content.style.display === 'none') {
              content.style.display = 'block';
              this.classList.remove("close");
          } else {
              content.style.display = 'none';
              this.classList.add("close");
          }
      });
  });
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