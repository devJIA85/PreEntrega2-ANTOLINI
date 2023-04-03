/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const   tabs = document.querySelectorAll('[data-target]'),
        tabContent = document.querySelectorAll('[data-content]')

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const target = document.querySelector(tab.dataset.target)

                tabContent.forEach(tabContents => {
                    tabContents.classList.remove('skills__active')
                })

                target.classList.add('skills__active')

                tabs.forEach(tab => {
                    tab.classList.remove('skills__active')
                })

                tab.classList.add('skills__active')
            })
        })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
/* buscar!

/*===== Link Active Work =====*/


/*===== Work Popup =====*/


/*=============== SERVICES MODAL ===============*/
/* buscar!

/*=============== SWIPER TESTIMONIAL ===============*/
/* buscar!

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(" input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc() {
    let parent = this.parentNode;
    if(this .value == "") {
        parent.classList.remove("focus");
    }
}
inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurfunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// toma todas sections que tienen un id definido
const sections = document.querySelectorAll("section[id]");

// agrega un event listener para el scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
    //get current scroll position
    let scrollY = window.pageYOffset;
    //loop through sections para tener height, Top e ID values paracada una
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
        /* - If our current scroll position enters the space where current section on screen is, add active class to corresponding navigation link, else remove it
        - To know which Link needs an active class, we use sectionId variable we are getting while looping through sections as an selector */
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
        })
}

/*=============== SHOW SCROLL UP ===============*/


