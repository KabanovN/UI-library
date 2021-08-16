import $ from '../core';

$.prototype.modal = function(created) {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target'); //реализуем привязку data-target к id модального окна
        $(this[i]).click((e) => {
            e.preventDefault();
            $(`#${target}`).fadeIn(500);
            document.body.style.overflow = 'hidden'; //убираем прокрутку основной страницы(body)
        });

        const closeElements = document.querySelectorAll(`#${target} [data-close]`); //все триггеры закрытия окна
        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(`#${target}`).fadeOut(500);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(`#${target}`).remove();
                }
            });
        });
    
        // закрытие при клике на "подложку"
        $(`#${target}`).click((e) => {
            if (e.target.classList.contains('modal')) {
                $(`#${target}`).fadeOut(500);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(`#${target}`).remove();
                }
            }
        });
    }
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function({text, btns} = {}) {
    /* форматы аргументов text, btns:
    text = {title: title, descr: descr}
    btns = {count: num, settings: [[text, classNames = [], close, callback]]} */
    
    for (let i = 0; i < this.length; i++) {
        //создание модального окна
        let popup = document.createElement('div');
        popup.classList.add('modal');
        popup.setAttribute('id', this[i].getAttribute('data-target'));
        popup.style.display = 'block';

        //добавление кнопок внутри шаблона модального окна в "modal__footer"
        const buttons = [];
        for (let j = 0; j < btns.count; j++) {
            let btn = document.createElement('button');
            btn.classList.add('btn', ...btns.settings[j][1]); //св-во classNames у btns
            btn.textContent = btns.settings[j][0]; //св-во text у btns
            //проверка на функционал закрытия модального окна
            if (btns.settings[j][2]) {
                btn.setAttribute('data-close', 'true');
            }
            // проверка наличия callback-функции в аргументе для обработчика событий
            if (btns.settings[j][3] && typeof(btns.settings[j][3]) === 'function') {
                btn.addEventListener('click', btns.settings[j][3]);
            }

            buttons.push(btn);
        }

        //шаблон модального окна
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

        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};