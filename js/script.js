// Forms
function validate() {
    document.getElementById('form').classList.add('was-validated');
}

// Navbar
const nav = document.getElementById('navbar');
document.onscroll = function() {
    if(nav) {
        nav.style.transition = '.2s';
        if(scrollY > 3) {
            makeDark();
        }
        else {
            makeTransparent();
        }
    }
}

function makeDark() {
    nav.classList.add('bg-black');
}

function makeTransparent() {
    nav.classList.remove('bg-black');
}