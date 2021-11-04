// <------ Burger START ------>
const iconMenu = document.querySelector('.burger-menu');
if (iconMenu) {
    const headerMenu = document.querySelector('.header-menu');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
}
// <------ Burger END ------>


// <------ Scroll-up START ------>
const scrollUp = document.querySelector('.scroll-up');
const scrollUpButton = scrollUp.querySelector('.scroll-up__button');

if (scrollUpButton) {
    scrollUpButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: "smooth"});
    });
}
// <------ Scroll-up END ------>


// <------ Slider START ------>
$('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1150,
            settings: {
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1000,
            settings: {
                arrows:false,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 870,
            settings: {
                arrows:false,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// <------ Slider END ------>


// <------ MOBILE MENU START ------>
const menuBtnRef = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");
const mobileMenuClose = document.querySelector("[data-menu-close]");
const mobileMenuContent = document.querySelector("[ data-menu-content]");


function onCloseMenu() {
    menuBtnRef.classList.toggle('is-open');
    menu.classList.toggle("is-open");
    document.body.classList.toggle('modal-open');
}

function onEscKeyPress(e) {
    if (e.code === 'Escape') {
        onCloseMenu();
    }
}

if (menuBtnRef && menu && mobileMenuClose) {
    menuBtnRef.addEventListener("click", () => {
        onCloseMenu();
        window.addEventListener('keydown', onEscKeyPress);
    })

    mobileMenuClose.addEventListener("click", () => {
        onCloseMenu();
        window.removeEventListener('keydown', onEscKeyPress);
    })

    document.addEventListener('click', (e) => {
        if (e.target === menu) {
            onCloseMenu();
            window.removeEventListener('keydown', onEscKeyPress);
        }
    });
}
// <------ MOBILE MENU END ------>


// <------ SEARCH START ------>
$(document).ready(function () {
    var searchBlock = $('#form');
    $(document).on('click', '#open', function () {
        searchBlock.slideToggle();
        return false;
    });
});
// <------ SEARCH END ------>
