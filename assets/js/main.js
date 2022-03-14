// START HEADER SCROLL
const theHeader = document.getElementById("header");
function toggleHeaderScrollStyle() {
    if(window.scrollY > 100) {
        theHeader.classList.add("scrolled");
    }
    else {
        theHeader.classList.remove("scrolled");
    }
}
window.addEventListener("scroll",() => {toggleHeaderScrollStyle()})
window.addEventListener("load",() => {toggleHeaderScrollStyle()})
// END HEADER SCROLL
// START SCROLL TO TOP 
const scrollToTop = document.getElementById("scroll-to-top");
function toggleScrollToTopActive() {
    if(window.scrollY > 100) {
        scrollToTop.classList.add("active");
    }
    else {
        scrollToTop.classList.remove("active");
    }
}
window.addEventListener("scroll",() => {toggleScrollToTopActive()})
window.addEventListener("load",() => {toggleScrollToTopActive()})
scrollToTop.addEventListener("click",(e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    const homeLinkActive = document.querySelector("#navbar-links [href='#hero']");
    homeLinkActive.click();
})
// END SCROLL TO TOP 
// START MOBILE NAVBAR TOGGLE
const menuToggler = document.querySelector("#toggle-menu"),
    navbarLinksList = document.querySelector("#navbar-links");
    menuToggler.addEventListener("click", () => {
        menuToggler.classList.toggle("close");
        navbarLinksList.classList.toggle("open");
        navbarLinksList.classList.toggle("container");
    })
    window.addEventListener("resize",() => {
        if(screen.width >= 1200) {
            navbarLinksList.classList.remove("container");
            navbarLinksList.classList.remove("open");
            menuToggler.classList.remove("close");
        }
    })
// END MOBILE NAVBAR TOGGLE
// START : ADD AND REMOVE ACTIVE CLASS FROM NAVBAR LINKS
const navbarLinks = document.querySelectorAll(".navbar-links .nav-link");
navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbarLinks.forEach((item) => {
            item.classList.remove("active");
        })
        link.classList.add("active");
    })
})
// END : ADD AND REMOVE ACTIVE CLASS FROM NAVBAR LINKS
// START SPEAKERS CAROUSEL
$('.speakers-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        750: {
            items:3
        },
        1000:{
            items:4
        }
    }
})
// END SPEAKERS CAROUSEL
// START SCHEDULE TABS
const scheduleTabs = document.querySelectorAll(".schedule .schedule-tabs button");
scheduleTabs.forEach((tab) => {
    tab.addEventListener("click",() => {
        scheduleTabs.forEach((item) => {
            item.classList.remove("active");
        });
        const scheduleTabsContents = document.querySelectorAll(".schedule .schedule-tabs .tabs-content .panel");
        scheduleTabsContents.forEach((item) => {
            item.classList.remove("show");
            item.classList.add("fade");
            item.classList.add("hide");
        })
        tab.classList.add("active");
        document.getElementById(tab.dataset.content).classList.remove("hide");
        setTimeout(() => {
            document.getElementById(tab.dataset.content).classList.remove("fade");
            document.getElementById(tab.dataset.content).classList.add("show");
        },150)
    })
})
// END SCHEDULE TABS
// START SPONSORS CAROUSEL
$('.sponsors-carousel').owlCarousel({
    center: true,
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// END SPONSORS CAROUSEL