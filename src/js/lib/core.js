// корневой файл с основным методом init
const $ = function(selector) {
    return new $.prototype.init(selector); //f-я возвращает новый экземпляр объекта(ниже)
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; //если селектор не указан => пустой объект
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    } //если селектор = тэг => объект с 1м элементом

    Object.assign(this, document.querySelectorAll(selector)); //добавляем элементы с селектором в this
    this.length = document.querySelectorAll(selector).length; //добавляем метод length к this
    return this;
};

// т.к. $.prototype.init возвращает объект - можно расширить методы этого объекта строкой ниже
$.prototype.init.prototype = $.prototype; //изначально прототип init относится только к возвращенному объекту(стр.12)

window.$ = $; //записываем ф-ю глобально

export default $;