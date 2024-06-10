// Script for Single expandable accordion

var prevBtnID = new String();
prevBtnID = null;

function expand_collapse(liID) {
  btnID = document
    .getElementById(liID)
    .firstElementChild.lastElementChild.getAttribute("id");
  // Collapse logic
  if (prevBtnID != null && prevBtnID != btnID) {
    console.log(`collapsed: ${prevBtnID} \nexpanded: ${btnID}`);
    expand(btnID);
    collapse(prevBtnID);
    prevBtnID = btnID;
    // console.log(`After:-  collapsed: ${prevBtnID} and expanded: ${btnID}`);
  } else if (prevBtnID != null && prevBtnID == btnID) {
    collapse(btnID);
    console.log(`collapsed: ${prevBtnID}`);
    prevBtnID = null;
    // console.log(`prevBtnID: ${prevBtnID} & btnID: ${btnID}`);
  }
  // Expand logic
  else {
    expand(btnID);
    console.log(`expanded: ${btnID}`);
    prevBtnID = btnID;
    // console.log(`prevBtnID: ${prevBtnID} & btnID: ${btnID}`);
  }
}

function expand(btnID) {
  let btnClicked = document.getElementById(btnID);
  let pathVertical = btnClicked.children[0].firstElementChild;
  let content = btnClicked.parentElement.parentElement.lastElementChild;

  pathVertical.style.display = "none";
  content.style.display = "block";
}

function collapse(btnID) {
  let prevBtn = document.getElementById(btnID);
  let pathVertical = prevBtn.children[0].firstElementChild;
  let content = prevBtn.parentElement.parentElement.lastElementChild;

  pathVertical.style.display = "block";
  content.style.display = "none";
}

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
