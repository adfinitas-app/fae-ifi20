var toggle = true

$(window).scroll(function() {

});

$(window).resize( function() {
});

$(document).ready( function() {
    handleTabContent('tab1')
    fillLink()
    fillLinkCalculette()

    $('#slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 10000,
        dots: true,
        arrows: false
    });

    $('#amount-don').on('keypress', function (event) {
        var regex = new RegExp("^[0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });

    $('#amount-don').on('input', function() {
        var input = $('#amount-don')
        var value = input.val()

        if (value.charAt(0) === '0')
            input.val(value.substring(1, value.length))
        if ($('#amount-don').val() === '')
            $('#amount-don').val(0)
        handleCalculette()
    });


    $('#switch').click(function () {
        handleSwitch()
        handleCalculette()
    })


    $('#open-menu').click(function (e) {
        e.preventDefault()
        $('#open-menu').hide()
        $('#menu-mobile').show()
    })

    $('#close-menu').click(function (e) {
        e.preventDefault()
        $('#open-menu').show()
        $('#menu-mobile').hide()
    })

});

$('#tabs .menu a').click(function (el) {
    handleTabContent($(el.target).attr('target'))
})

function handleSwitch() {
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
}
function handleCalculette() {
    var input = $('#amount-don')
    var value = input.val().replace(' ', '')
    input.val(value)

    var valueDeduction
    var valueAfterDeduction
    var jalon

    if (toggle) { // IFI
        jalon = 50000
        valueDeduction = value * 0.75

        if (valueDeduction > jalon)
            valueDeduction = jalon

        $('#btn-don').attr('href', 'https://donner.actionenfance.org/b?cid=97&lang=fr_FR&amount=' + value + '00')
    }
    else { // IR
        jalon = 1333
        valueDeduction = value * 0.75

        if (value > jalon)
            valueDeduction = 1000 + ((value - 1333) * 0.66)
        else
            valueDeduction = value * 0.75

        $('#btn-don').attr('href', 'https://donner.actionenfance.org/b?cid=106&lang=fr_FR&amount=' + value + '00')
    }
    fillLinkCalculette()

    valueAfterDeduction = value - valueDeduction

    $('#amount-btn').text(value)
    $('#deduction-don').text(valueDeduction.toFixed(2))
    $('#after-deduction-don').text(valueAfterDeduction.toFixed(2))
}

function handleTabContent(nb) {
    $('#tabs .menu a').each(function (el) {
        if ($('#tabs .menu a').eq(el).attr('target') === nb) {
            $('#tabs .menu a').eq(el).addClass('active')
        } else {
            $('#tabs .menu a').eq(el).removeClass('active')
        }
    })

    $('.tab-content').each(function (el) {
        if ($('.tab-content').eq(el).attr('target') === nb) {
            $('.tab-content').eq(el).show()
        } else {
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

function fillLinkCalculette() {
    let p = extractUrlParams();
    let string = ''


    if (p['email'] && p['email'] !== "undefined")
        string += ("&email=" + p['email']);
    if (p['wv_email'] && p['wv_email'] !== "undefined")
        string += ("&email=" + p['wv_email']);
    if (p['wv_firstname'] && p['wv_firstname'] !== "undefined")
        string += ("&firstname=" + p['wv_firstname']);
    if (p['firstname'] && p['firstname'] !== "undefined")
        string += ("&firstname=" + p['firstname']);
    if (p['wv_lastname'] && p['wv_lastname'] !== "undefined")
        string += ("&lastname=" + p['wv_lastname']);
    if (p['lastname'] && p['lastname'] !== "undefined")
        string += ("&lastname=" + p['lastname']);
    if (p['reserved_code_media'] && p['reserved_code_media'] !== "undefined")
        string += ("&reserved_code_media=" + p['reserved_code_media']);
    if (p['utm_campaign'] && p['utm_campaign'] !== "undefined")
        string += ("&utm_campaign=" + p['utm_campaign']);
    if (p['utm_source'] && p['utm_source'] !== "undefined")
        string += ("&utm_source=" + p['utm_source']);
    if (p['utm_medium'] && p['utm_medium'] !== "undefined")
        string += ("&utm_medium=" + p['utm_medium']);

    $('#btn-don').attr('href', $('#btn-don').attr('href') + string)
}

function fillLink() {
    let p = extractUrlParams();
    let string = ''


    if (p['email'] && p['email'] !== "undefined")
        string += ("&email=" + p['email']);
    if (p['wv_email'] && p['wv_email'] !== "undefined")
        string += ("&email=" + p['wv_email']);
    if (p['wv_firstname'] && p['wv_firstname'] !== "undefined")
        string += ("&firstname=" + p['wv_firstname']);
    if (p['firstname'] && p['firstname'] !== "undefined")
        string += ("&firstname=" + p['firstname']);
    if (p['wv_lastname'] && p['wv_lastname'] !== "undefined")
        string += ("&lastname=" + p['wv_lastname']);
    if (p['lastname'] && p['lastname'] !== "undefined")
        string += ("&lastname=" + p['lastname']);
    if (p['reserved_code_media'] && p['reserved_code_media'] !== "undefined")
        string += ("&reserved_code_media=" + p['reserved_code_media']);
    if (p['utm_campaign'] && p['utm_campaign'] !== "undefined")
        string += ("&utm_campaign=" + p['utm_campaign']);
    if (p['utm_source'] && p['utm_source'] !== "undefined")
        string += ("&utm_source=" + p['utm_source']);
    if (p['utm_medium'] && p['utm_medium'] !== "undefined")
        string += ("&utm_medium=" + p['utm_medium']);

    $('.link-don').each(function (el) {
        $('.link-don').eq(el).attr('href', $('.link-don').eq(el).attr('href') + string)
    })


}

function extractUrlParams(){
    var t = document.location.search.substring(1).split('&'); var f = [];
    for (var i=0; i<t.length; i++){
        var x = t[ i ].split('=');
        f[x[0]]=decodeURIComponent(x[1]);
    }
    return f;
};
