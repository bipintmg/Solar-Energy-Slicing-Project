// Script for Single expandable accordion

var prevBtnID = new String();
prevBtnID = null;
var defOn = new Number();
let defListID = new Number();
let defListIDs = new Array(); // Holds the list ids to be expanded at default
let defLiCount = 3; // Number of lists to expand on default

document.addEventListener("DOMContentLoaded", () => {
  let defLists = document.getElementsByClassName("faq__list")[0].children;
  let i = 0;
  for (let list of defLists) {
    i += 1;
    defListID = list.getAttribute("id");
    expand_collapse(defListID, true);
    defListIDs.push(defListID);
    if (i == defLiCount) break;
  }
});

function expand_collapse(liID, isDef) {
  if (isDef) {
    DefBtnID = document
      .getElementById(liID)
      .firstElementChild.lastElementChild.getAttribute("id");
    expand(DefBtnID);
    defOn = 1;
  } else {
    btnID = document
      .getElementById(liID)
      .firstElementChild.lastElementChild.getAttribute("id");

    // Default first 3 collapse
    if (defOn == 1) {
      for (let listID of defListIDs) {
        DefBtnID = document
          .getElementById(listID)
          .firstElementChild.lastElementChild.getAttribute("id");
        collapse(DefBtnID, false);
      }
    }

    // Collapse logic
    if (prevBtnID != null && prevBtnID != btnID) {
      expand(btnID);
      collapse(prevBtnID);
      prevBtnID = btnID;
    } else if (prevBtnID != null && prevBtnID == btnID) {
      collapse(btnID);
      prevBtnID = null;
    }
    // Expand logic
    else {
      expand(btnID);
      prevBtnID = btnID;
    }
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