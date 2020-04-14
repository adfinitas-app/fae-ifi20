var toggle = true

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
        arrows: false
    });

    $('#amount-don').on('input', function() {
        var value = $(this).val()

        $('#amount-btn').text(value)

    });


    $('#switch').click(() => {
        var value = $('#amount-don').val()

        if (toggle) { // IR
            toggle = false
            $('.switch p:nth-child(3)').css('opacity', '0.3')
            $('.switch p:nth-child(4)').css('opacity', '1')
            $('.switch p:nth-child(4)').css('color', '#DF514D')


            $('#name-btn').text('IR')
        }
        else { // IFI
            toggle = true
            $('.switch p:nth-child(3)').css('opacity', '1')
            $('.switch p:nth-child(4)').css('opacity', '0.3')
            $('.switch p:nth-child(4)').css('color', '#2F2444')


            $('#name-btn').text('IFI')


        }
    })


    $('#open-menu').click((e) => {
        e.preventDefault()
        $('#open-menu').hide()
        $('#menu-mobile').show()
    })

    $('#close-menu').click((e) => {
        e.preventDefault()
        $('#open-menu').show()
        $('#menu-mobile').hide()
    })

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

function 	scrollToTabs(nb){
    handleTabContent(nb)
    scrollToNext($('#tabs'))
}

function 	scrollToNext(next){
    $('#open-menu').show()
    $('#menu-mobile').hide()

    $('html, body').stop().animate({
        scrollTop: $(window).width() > 640 ? $(next).offset().top - 44 : $(next).offset().top - 0
    }, 700, 'swing');
}