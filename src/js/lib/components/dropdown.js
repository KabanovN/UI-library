import $ from '../core';

$.prototype.dropdown = function() {
    // нам необходимо сравнить id триггера и data- меню => fadeToggle, если совпадают
    for (let i = 0; i < this.length; i++) {
        const id = $(this[i]).getAttr('id');
        console.log(id);
        $(this[i]).click(() => {
            $(`[data-toggle-id = ${id}]`).fadeToggle(300);
        });
    }
};

$('.dropdown__btn').dropdown(); //реализация при имеющейся вёрстке
