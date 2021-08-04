import $ from '../core';

// 1.метод записи/получения содержимого элемента
$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {                      //запись, если контент передан
            this[i].innerHTML = content; 
        } else {                            //чтение, если контент не передан
            return this[i].innerHTML;
        }
        console.log(this);
        console.log(this.length);
        console.log(Object.keys(this));
    }
    return this;
};

// 2.метод выбора конкретного элемента (нумерация с 0) - в аргументе порядковый номер
/*т.к. вдальнейшем в core.js возможно расширение св-в помимо length, а идея данного метода предполагает удаление 
всех элементов, кроме выбранного, с указанием значения св-ва length, внутри создадим переменную objLength для 
нахождения кол-ва элементов, подобно this.length, для использования в цикле */
$.prototype.eq = function(index) {
    const objLength = Object.keys(this).length; 
    const swap = this[index];                   //временная переменная

    for (let i = 0; i < objLength; i++) {
        delete this[i];                         //удаляем все элементы
    }

    this[0] = swap; //записываем единственный указанный в аргументе элемент
    this.length = 1;
    return this;
};

// 3.метод, который возвращает номер элемента в рамках одного родителя
$.prototype.index = function() {
    const parent = this[0].parentNode; //находим родителя 1го элемента
    const childs = [...parent.children]; //создаём псевдоколлекцию через spread из потомков

    const findChildIndex = item => item === this[0];   //стрелочная, чтобы не потерять this

    return childs.findIndex(findChildIndex);
};

// 4.метод, который возвращает новый объект с найденными элементами по селектору после выполнения eq
/*общая логика: создаём копию объекта this, находим нужные элементы по селектору, 
переписываем this с новыми элементами по порядку(counter), удаляем неподходящие элементы из остатка this */
$.prototype.findElems = function(selector) {
    let numberOfItems = 0, //общее количество элементов для св-ва length
        counter = 0; //индекс отфильтрованных по селектору элементов для создания объекта

    const copyObj = Object.assign({}, this); //для избежания багов

    //записываем удовлетворяющие селектору элементы в elems
    for (let i = 0; i < copyObj.length; i++) {
        const elems = copyObj[i].querySelectorAll(selector);
        if (elems.length === 0) {
            continue;
        }

        // записывем в объект this элементы elems
        for (let j = 0; j < elems.length; j++) {
            this[counter] = elems[j];
            counter++;
        }
        
        numberOfItems += elems.length;
    }
    // остаётся this с новыми от 0 до numberOfItems элементами и "хвостом" старых

    this.length = numberOfItems;
    
    // удаляем остаток ненужных элементов из объекта this
    const objLength = Object.keys(this).length;
    for (numberOfItems; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

// 5.метод поиска ближайшего родителя для ряда элементов (аналог .closest(), но для множества элементов)
$.prototype.closestElems = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        if (!this[i].closest(selector)) {
            console.log('внимательней будь - нет такого элемента');
            return this;
        } 

        this[i] = this[i].closest(selector);
        counter++;
    }

    const objLength = Object.keys(this).length;
    for (counter; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
};

// 6.метод поиска соседних элементов без самого элемента
$.prototype.siblings = function() {
    let numberOfItems = 0,
        counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const elems = copyObj[i].parentNode.children;

        for (let j = 0; j < elems.length; j++) {
            if (copyObj[i] === elems[j]) {
                continue;
            }
            this[counter] = elems[j];
            counter++;
        }
        numberOfItems += elems.length -1; //минус сам элемент
    }

    this.length = numberOfItems;
    
    // удаляем остаток ненужных элементов из объекта this
    const objLength = Object.keys(this).length;
    for (numberOfItems; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};
