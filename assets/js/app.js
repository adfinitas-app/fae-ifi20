

$(window).scroll(function() {

});

$(window).resize( function() {
});

$(document).ready( function() {
    handleTabContent('tab1')

    $('#slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 10000,
        dots: true,
    });

});

$('#tabs .menu a').click((el) => {
    handleTabContent($(el.target).attr('target'))
})

function handleTabContent(nb) {
    $('#tabs .menu a').each((el) => {
        if ($('#tabs .menu a').eq(el).attr('target') === nb) {
            $('#tabs .menu a').eq(el).addClass('active')
        }
        else {
            $('#tabs .menu a').eq(el).removeClass('active')
        }
    })

    $('.tab-content').each((el) => {
        if ($('.tab-content').eq(el).attr('target') === nb) {
            $('.tab-content').eq(el).show()
        }
        else {
            $('.tab-content').eq(el).hide()
        }
    })


}
