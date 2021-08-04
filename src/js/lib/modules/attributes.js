import $ from '../core';

//получение атрибута
$.prototype.getAttr = function(attrName) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attrName)) {
            return this;
        }
        return this[i].getAttribute(attrName);
    }

    return this;
};

//установка атрибута
$.prototype.setAttr = function(attrName, value) {
    for (let i = 0; i < this.length; i++) {
        if (!value) {
            return this[i].setAttribute(attrName, '');
        } else {
            return this[i].setAttribute(attrName, value);
        }
    }

    return this;
};

// удаление атрибута
$.prototype.removeAttr = function(attrName) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].hasAttribute(attrName)) {
            continue;
        }

        return this[i].removeAttribute(attrName);
    }

    return this;
};