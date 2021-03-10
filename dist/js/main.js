window.onscroll = function showHeader() {
    var header = document.querySelector('.header__top');
    var move_block = document.querySelectorAll('.move_block');
    var footer = document.querySelector('.footer');
    var phone__menu__btn = document.querySelector('.phone__menu__btn');
    var i = 0;

    // console.log(move_block.length)

    if (window.pageYOffset > (window.innerHeight - 200)) {
        header.classList.add('fixed');
        phone__menu__btn.classList.add('fixed');
    } else {
        header.classList.remove('fixed')
        phone__menu__btn.classList.remove('fixed')
    }
    if (move_block.length > 0) {
        if (window.pageYOffset > (move_block[i].offsetTop + 150)) {

            if (i < move_block.length && move_block.length != 1) {
                i++;

            }

        }
    }
    if (move_block.length > 2) {
        if (window.pageYOffset > (move_block[i].offsetTop + 150)) {

            if (i < move_block.length && move_block.length != 1) {
                i++;

            }

        }
    }

    if (move_block.length > 0) {
        if (window.pageYOffset < (move_block[i].offsetTop - 400) || window.pageYOffset > (move_block[i].offsetTop + 100)) {
            move_block[i].classList.remove('active');
        } else {
            move_block[i].classList.add('active')
        }
    }

    if (window.pageYOffset > (footer.offsetTop - 200)) {
        footer.classList.add('active')
    } else {
        footer.classList.remove('active')
    }
    console.log(i)
}
$(document).ready(function() {

    $(".btn").on("click", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href

        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь

            // top = $(id).offset().top;
            top = window.innerHeight;
        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({ scrollTop: top }, 1500);

    });



    $(".footer__btn").on("click", function(event) {

        event.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 1500);
    
    });

    var header__btn = document.querySelector('#menu__toggle');




});

var header_menu_phone = document.querySelector('.menu__phone');
$('#menu__toggle').on('click', function () {
    if ( $(this).is(':checked') ) {

        header_menu_phone.classList.add('active');
        console.log("true")
    } else {
        console.log("false")
        header_menu_phone.classList.remove('active');
    }
})


