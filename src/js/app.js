// eslint-disable-next-line no-unused-vars
// import polyfill from '@babel/polyfill';
import $ from 'jquery';


import svg4everybody from 'svg4everybody';
import './lib/foundation-explicit-pieces';

svg4everybody();

$(document).scroll(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= 600) {
        $('.up').addClass('is_visible');
    } else {
        $('.up').removeClass('is_visible');
    }
});

$('#menu')
    .on('opened.zf.offcanvas', () => {
        $('.header').addClass('is_opened');
        $(this).attr('aria-expanded', true);
    })
    .on('closed.zf.offcanvas', () => {
        $('.header').removeClass('is_opened');
        $('#menu, #subcribe').foundation('close');
    });


function sendDataToForm(form_data, form) {
    $.ajax({
        url: 'ajaxsubscribe.php',
        data: {
            'action': 'setEmail',
            'email': form_data
        },
        type: 'POST',
        dataType: 'json',
        success: data => {
            alert('Спасибо за подписку!');
            form.find('input[type="email"]').val('');
        },
        error: data => {
            alert('Спасибо за подписку!');
            form.find('input[type="email"]').val('');
        }
    });
}

$('.subscribe_form').submit(function(e) {
    e.preventDefault();
    let formData = $(this).find('input').val();
    if (formData != '') {
        // let form_data = form.serialize();
        sendDataToForm(formData, $(this));
    }
})