import $ from '../core';

$.prototype.slider = function() {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel__inner')).width;
        const slidesField = this[i].querySelector('.carousel__slides');
        const slides = this[i].querySelectorAll('.carousel__item');
        const dots = this[i].querySelectorAll('.carousel__indicators li');
        
        slidesField.style.width = slides.length * 100 + '%'; //нам нужно, чтобы все слайды полноразмерно встали в ряд
        slides.forEach(slide => {
            slide.style.width = width; //"подгоняем" каждое изображение под размер carousel__inner
        });

        let offset = 0; //переменная для смещения слайдов, определяет положение в px
        let slideIndex = 0; //значение для data-slide-to индикаторов

        $(this[i].querySelector('[data-slide="next"]')).click((evt) => {
            evt.preventDefault();
            //если мы на последнем слайде (offset равен длине всех слайдов) => возвращаемся в начало
            //иначе - увеличиваем offset на width
            if (offset === (+width.replace(/\D/g, '')) * (slides.length - 1)) { 
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`; //перемещаем положение img справа налево

            //если slideIndex >= последнему значению data-slide-to => перемещаемся к 1му
            //иначе увеличиваем на 1
            if (slideIndex >= (slides.length - 1)) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            //убираем класс активности у всех индикаторов - добавляем для текущего
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');

        });

        $(this[i].querySelector('[data-slide="prev"]')).click((evt) => {
            evt.preventDefault();
            //обратная логика относительно next
            if (offset === 0) { 
                offset = (+width.replace(/\D/g, '')) * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex <= 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id'); //для избежания возможных багов находим блок
        $(`.carousel__indicators li`).click(evt => {
            const slideTo = evt.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = (+width.replace(/\D/g, '')) * slideTo;
            
            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
    }
};

$('#slider').slider();

$.prototype.createSlider = function(obj = {}) {
    // obj = {count: 2, img: [url1, url2]}
    for (let i = 0; i < this.length; i++) {
        this[i].innerHTML = `
            <ol class="carousel__indicators"></ol>
            <div class="carousel__inner">
                <div class="carousel__slides"></div>

                <a href="#" class="carousel__prev" data-slide="prev">
                    <span class="carousel__prev__icon">&lt;</span>
                </a>
                <a href="#" class="carousel__next" data-slide="next">
                    <span class="carousel__next__icon">&gt;</span>
                </a>
            </div>
        `;
    
        for (let j = 0; j < obj.count; j++) {
            let item = document.createElement('div');
            item.classList.add('carousel__item');
            let image = document.createElement('img');
            image.src = obj.img[j];
            item.append(image);
            this[i].querySelector('.carousel__slides').appendChild(item);

            let dot = document.createElement('li');
            dot.setAttribute('data-slide-to', `${j}`);
            this[i].querySelector('.carousel__indicators').append(dot);
        }

        $(this[i]).slider();
    }   
};

