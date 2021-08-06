import $ from './lib/lib';

// console.log($('div').eq(2).findElems('.some'));

// console.log($('.some').closestElems('.parent'));

// console.log($('.more').eq(0).siblings());

// $('button').fadeIn(2000);

$('#first').click(() => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').click(() => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).click(() => {
    $('.w-500').fadeToggle(800);
});

