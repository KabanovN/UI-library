import $ from '../core';

$.prototype.tab = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', () => {
            $(this[i])
                .addClass('tab__item-active') //добавляем активный класс элементу
                .siblings() //находим соседей
                .removeClass('tab__item-active') //удаляем активный класс у соседей
                .closestElems('.tab') //находим общего родителя
                .findElems('.tab__content') //находим все элементы с контентом
                .removeClass('tab__content-active') //удаляем у всех активный класс
                .eq($(this[i]).index()) //обращаемся к текущему контент-элементу через его индекс i
                .addClass('tab__content-active'); //добавляем класс активности
        });
    }
};

$('[data-tabs] .tab__item').tab();