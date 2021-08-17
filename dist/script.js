/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  // нам необходимо сравнить id триггера и data- меню => fadeToggle, если совпадают
  for (let i = 0; i < this.length; i++) {
    const id = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('id');
    console.log(id);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id = ${id}]`).fadeToggle(300);
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown__btn').dropdown(); //реализация при имеющейся вёрстке

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target'); //реализуем привязку data-target к id модального окна

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${target}`).fadeIn(500);
      document.body.style.overflow = 'hidden'; //убираем прокрутку основной страницы(body)
    });
    const closeElements = document.querySelectorAll(`#${target} [data-close]`); //все триггеры закрытия окна

    closeElements.forEach(elem => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${target}`).fadeOut(500);
        document.body.style.overflow = '';

        if (created) {
          document.querySelector(`#${target}`).remove();
        }
      });
    }); // закрытие при клике на "подложку"

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${target}`).click(e => {
      if (e.target.classList.contains('modal')) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${target}`).fadeOut(500);
        document.body.style.overflow = '';

        if (created) {
          document.querySelector(`#${target}`).remove();
        }
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function ({
  text,
  btns
} = {}) {
  /* форматы аргументов text, btns:
  text = {title: title, descr: descr}
  btns = {count: num, settings: [[text, classNames = [], close, callback]]} */
  for (let i = 0; i < this.length; i++) {
    //создание модального окна
    let popup = document.createElement('div');
    popup.classList.add('modal');
    popup.setAttribute('id', this[i].getAttribute('data-target'));
    popup.style.display = 'block'; //добавление кнопок внутри шаблона модального окна в "modal__footer"

    const buttons = [];

    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement('button');
      btn.classList.add('btn', ...btns.settings[j][1]); //св-во classNames у btns

      btn.textContent = btns.settings[j][0]; //св-во text у btns
      //проверка на функционал закрытия модального окна

      if (btns.settings[j][2]) {
        btn.setAttribute('data-close', 'true');
      } // проверка наличия callback-функции в аргументе для обработчика событий


      if (btns.settings[j][3] && typeof btns.settings[j][3] === 'function') {
        btn.addEventListener('click', btns.settings[j][3]);
      }

      buttons.push(btn);
    } //шаблон модального окна


    popup.innerHTML = `
            <div class="modal__dialog">
                <div class="modal__content">
                    <button class="modal__close" data-close><span>&times;</span></button>
                    <div class="modal__header">
                        <h4 class="modal__title">${text.title}</h4>
                    </div>
                    <div class="modal__body">
                        <p class="modal__descr">${text.descr}</p>
                    </div>
                    <div class="modal__footer">
                    </div>
                </div>
            </div>
        `;
    popup.querySelector('.modal__footer').append(...buttons);
    document.body.append(popup);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute('data-target')).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/components/tabs.js":
/*!***************************************!*\
  !*** ./src/js/lib/components/tabs.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('click', () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('tab__item-active') //добавляем активный класс элементу
      .siblings() //находим соседей
      .removeClass('tab__item-active') //удаляем активный класс у соседей
      .closestElems('.tab') //находим общего родителя
      .findElems('.tab__content') //находим все элементы с контентом
      .removeClass('tab__content-active') //удаляем у всех активный класс
      .eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()) //обращаемся к текущему контент-элементу через его индекс i
      .addClass('tab__content-active'); //добавляем класс активности
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tabs] .tab__item').tab();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// корневой файл с основным методом init
const $ = function (selector) {
  return new $.prototype.init(selector); //f-я возвращает новый экземпляр объекта(ниже)
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; //если селектор не указан => пустой объект
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  } //если селектор = тэг => объект с 1м элементом


  Object.assign(this, document.querySelectorAll(selector)); //добавляем элементы с селектором в this

  this.length = document.querySelectorAll(selector).length; //добавляем св-во length к this

  return this; //в this хранятся созданные прототипы
}; // т.к. $.prototype.init возвращает объект - можно расширить методы этого объекта строкой ниже


$.prototype.init.prototype = $.prototype; //изначально прототип init относится только к возвращенному объекту(стр.17)

window.$ = $; //записываем ф-ю глобально

/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_eventActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/eventActions */ "./src/js/lib/modules/eventActions.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_elementMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/elementMethods */ "./src/js/lib/modules/elementMethods.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tabs */ "./src/js/lib/components/tabs.js");
// файл для объединения в библиотеку - "обогащение" функции $ методами










/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 //получение атрибута

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttr = function (attrName) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].getAttribute(attrName)) {
      return this;
    }

    return this[i].getAttribute(attrName);
  }

  return this;
}; //установка атрибута


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttr = function (attrName, value) {
  for (let i = 0; i < this.length; i++) {
    if (!value) {
      return this[i].setAttribute(attrName, '');
    } else {
      return this[i].setAttribute(attrName, value);
    }
  }

  return this;
}; // удаление атрибута


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttr = function (attrName) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute(attrName)) {
      continue;
    }

    return this[i].removeAttribute(attrName);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    for (let className of classNames) {
      if (!this[i].classList.contains(className)) {
        this[i].classList.add(className);
      }
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.remove(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(className);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      //проверка на наличие метода style
      continue;
    }

    this[i].style.display = '';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (duration, callback, finalFn) {
  let timeStart; //стартовое время
  //ф-я по вычислению времени анимации

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart;
    let complection = Math.min(timeElapsed / duration, 1); //изменение параметров на странице (opacity)

    callback(complection);

    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof finalFn === 'function') {
        finalFn();
      }
    }
  }

  return _animateOverTime;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (duration, display, finalFn) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block'; //block - по умолчанию

    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(duration, _fadeIn, finalFn);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (duration, finalFn) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;

      if (complection === 1) {
        this[i].style.display = 'none';
      }
    };

    const ani = this.animateOverTime(duration, _fadeOut, finalFn);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (duration, display, finalFn) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeIn(duration, display, finalFn);
    } else {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeOut(duration, display, finalFn);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/elementMethods.js":
/*!**********************************************!*\
  !*** ./src/js/lib/modules/elementMethods.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // 1.метод записи/получения содержимого элемента

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      //запись, если контент передан
      this[i].innerHTML = content;
    } else {
      //чтение, если контент не передан
      return this[i].innerHTML;
    }

    console.log(this);
    console.log(this.length);
    console.log(Object.keys(this));
  }

  return this;
}; // 2.метод выбора конкретного элемента (нумерация с 0) - в аргументе порядковый номер

/*т.к. вдальнейшем в core.js возможно расширение св-в помимо length, а идея данного метода предполагает удаление 
всех элементов, кроме выбранного, с указанием значения св-ва length, внутри создадим переменную objLength для 
нахождения кол-ва элементов, подобно this.length, для использования в цикле */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (index) {
  const objLength = Object.keys(this).length;
  const swap = this[index]; //временная переменная

  for (let i = 0; i < objLength; i++) {
    delete this[i]; //удаляем все элементы
  }

  this[0] = swap; //записываем единственный указанный в аргументе элемент

  this.length = 1;
  return this;
}; // 3.метод, который возвращает номер элемента в рамках одного родителя


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode; //находим родителя 1го элемента

  const childs = [...parent.children]; //создаём псевдоколлекцию через spread из потомков

  const findChildIndex = item => item === this[0]; //стрелочная, чтобы не потерять this


  return childs.findIndex(findChildIndex);
}; // 4.метод, который возвращает новый объект с найденными элементами по селектору после выполнения eq

/*общая логика: создаём копию объекта this, находим нужные элементы по селектору, 
переписываем this с новыми элементами по порядку(counter), удаляем неподходящие элементы из остатка this */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.findElems = function (selector) {
  let numberOfItems = 0,
      //общее количество элементов для св-ва length
  counter = 0; //индекс отфильтрованных по селектору элементов для создания объекта

  const copyObj = Object.assign({}, this); //для избежания багов
  //записываем удовлетворяющие селектору элементы в elems

  for (let i = 0; i < copyObj.length; i++) {
    const elems = copyObj[i].querySelectorAll(selector);

    if (elems.length === 0) {
      continue;
    } // записывем в объект this элементы elems


    for (let j = 0; j < elems.length; j++) {
      this[counter] = elems[j];
      counter++;
    }

    numberOfItems += elems.length;
  } // остаётся this с новыми от 0 до numberOfItems элементами и "хвостом" старых


  this.length = numberOfItems; // удаляем остаток ненужных элементов из объекта this

  const objLength = Object.keys(this).length;

  for (numberOfItems; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
}; // 5.метод поиска ближайшего родителя для ряда элементов (аналог .closest(), но для множества элементов)


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closestElems = function (selector) {
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
}; // 6.метод поиска соседних элементов без самого элемента


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
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

    numberOfItems += elems.length - 1; //минус сам элемент
  }

  this.length = numberOfItems; // удаляем остаток ненужных элементов из объекта this

  const objLength = Object.keys(this).length;

  for (numberOfItems; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/eventActions.js":
/*!********************************************!*\
  !*** ./src/js/lib/modules/eventActions.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");
 // console.log($('div').eq(2).findElems('.some'));
// console.log($('.some').closestElems('.parent'));
// console.log($('.more').eq(0).siblings());
// $('button').fadeIn(2000);
// $('#first').click(() => {
//     $('div').eq(1).fadeToggle(800);
// });
// $('[data-count="second"]').click(() => {
//     $('div').eq(2).fadeToggle(800);
// });
// $('button').eq(1).click(() => {
//     $('.w-500').fadeIn(800);
// });
// $('.wrapper').html(
//     `<div class="dropdown">
//         <button class="btn btn-warning dropdown__btn" id="dropdownMenuBtn">Dropdown menu</button>
//         <ul class="dropdown__list" data-toggle-id="dropdownMenuBtn">
//             <li class="dropdown__item">
//                 <a href="" class="dropdown__link">Action</a>
//             </li>
//             <li class="dropdown__item">
//                 <a href="" class="dropdown__link">Action#2</a>
//             </li>
//             <li class="dropdown__item">
//                 <a href="" class="dropdown__link">Action#3</a>
//             </li>
//         </ul>
//     </div>`
// );
// $('.dropdown__btn').dropdown();

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').click(() => Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').createModal({
  text: {
    title: 'Modal title#2',
    descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit..'
  },
  btns: {
    count: 3,
    settings: [['Close modal', ['btn-danger', 'mr-10'], true], ['Save Changes', ['btn-success'], false, () => {
      alert('Data have saved');
    }], ['Another', ['btn-warning', 'ml-10'], false, () => {
      alert('What\'re you waiting?');
    }]]
  }
}));

/***/ })

/******/ });
//# sourceMappingURL=script.js.map