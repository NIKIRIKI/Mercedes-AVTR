$(function () {
    $('.design__slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img src="images/arr-left.svg" alt="arrow-left" class="arrow arr-left">',
        nextArrow: '<img src="images/arr-right.svg" alt="arrow-right" class="arrow arr-right">',
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});

