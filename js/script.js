
// Forms
function validate() {
  document.getElementById("form").classList.add("was-validated");
}

// Navbar
const nav = document.getElementById("navbar");
document.onscroll = function () {
  if (nav) {
    nav.style.transition = ".2s";
    if (scrollY > 3) {
      makeDark();
    } else {
      makeTransparent();
    }
  }
};

function makeDark() {
  nav.classList.add("bg-black");
}

function makeTransparent() {
  nav.classList.remove("bg-black");
}

// Our Shop (Price Range Slider) 18/01/22
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 50;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});




// Dashboard
const sidebar = document.getElementById('sidebar');
if(sidebar) {
  function showSidebar() {  
    sidebar.style.visibility = 'visible';
    sidebar.style.width = '100%';
    sidebar.style.opacity = '1';
    sidebar.style.position = 'absolute';
  }
  
  function hideSidebar() {
    sidebar.style.opacity = '0';
    sidebar.style.width = '0';
    sidebar.style.position = 'relative';
    sidebar.style.visibility = 'hidden';
  }
}

// Search bar
const searchbar = document.getElementById('searchbar');
const searchIcon = document.getElementById('searchbarSmall');

function showSearch() {
  searchbar.classList.remove('d-none');
  document.getElementById('searchbarInput').focus();
  searchIcon.style.display = 'none';
}

function hideSearch() {
  document.getElementById('searchbar').classList.add('d-none');
}
window.onclick = function () {
if(document.getElementById('searchbarInput') && document.activeElement != document.getElementById('searchbarInput')) {
    hideSearch();
    searchIcon.style.display = 'flex';
  }
}


// Horizonal Scrolling
// document.getElementById()

// function SlideLeft(containerID) {
//   document.getElementById(containerID).scrollLeft += 10;
// }
// function SlideRight(containerID) {
//   document.getElementById(containerID).scrollLeft -= 10;
// }

var button = document.getElementById('slide');
button.onclick = function () {
    var container = document.getElementById('scrollContainer');
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('slideBack');
back.onclick = function () {
    var container = document.getElementById('scrollContainer');
    sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}

