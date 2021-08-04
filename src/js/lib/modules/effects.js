import $ from '../core';

$.prototype.animateOverTime = function(duration, callback, finalFn) {
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

$.prototype.fadeIn = function(duration, display, finalFn) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block'; //block - по умолчанию

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(duration, _fadeIn, finalFn);
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeOut = function(duration, finalFn) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.opacity = 'none';
            }   
        };

        const ani = this.animateOverTime(duration, _fadeOut, finalFn);
        requestAnimationFrame(ani);
    }

    return this;
};