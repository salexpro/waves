// eslint-disable-next-line no-unused-vars
// import polyfill from '@babel/polyfill';
import $ from 'jquery';


import svg4everybody from 'svg4everybody';
import './lib/foundation-explicit-pieces';

svg4everybody();

$(document).scroll(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= 600){
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
    })