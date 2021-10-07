const iconMenu = document.querySelector('.menu-burger__header');
if (iconMenu) {
    const headerMenu = document.querySelector('.header-menu');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
}
const scrollUp = document.querySelector('.scroll-up');
const scrollUpButton = scrollUp.querySelector('.scroll-up__button');

if (scrollUpButton) {
    scrollUpButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: "smooth"});
    });
}

    $('.slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:5,
        slidesToScroll:2,
        responsive:[
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow:4,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    dots: false,
                    slidesToShow:3,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    dots: false,
                    slidesToShow:2,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
        ]
    });

