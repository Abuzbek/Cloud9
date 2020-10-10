$(window).scroll(function () {
    $scroll = $(this).scrollTop();
    console.log($scroll);
    if ($scroll >= $('header').height()) {
        $('#nav').addClass('fixed-top');
    }
    else {
        $('#nav').removeClass('fixed-top');
    }

});
let $linking = $('.nav-links')
console.log($linking)
$linking.click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('header').height(),
    })
})
// ===== wowjs setup =====
new WOW().init();
// ===== wowjs setup =====
// ===== owl-carousel setup =========

$('.owl-carousel').owlCarousel({
    loop:false,
    items:5,
    margin:40,
    autoplay:true,
    nav:true,
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
$('.owl-prev').html('<i class="fas fa-chevron-left" />')
$('.owl-next').html('<i class="fas fa-chevron-right" />')

// ===== owl-carousel setup =========

//  ==== portfolio gallery ==========
$('.btn.filter').click(function(){
   let thisAttr = $(this).attr('data-rel')
   if($('#gallery .pics').hasClass(thisAttr)){
    $(`#gallery .pics`).fadeOut()
    $(`#gallery .pics.${thisAttr}`).fadeIn()  
   }
})




//  ==== portfolio gallery ==========


