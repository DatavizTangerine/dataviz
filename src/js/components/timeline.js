import * as questionsScreens from './questionsScreens';

const timeline = () => {
    const timeline = document.querySelector('.timeline');
    const items = timeline.querySelectorAll('.timeline__item');
    const circle = document.querySelector('.percent svg #bar');
    const bottomLine = document.querySelector('.line-bottom');
    const values = document.querySelectorAll('.timeline__values .timeline__value');

    let parent = '.' + window.currentSex + '__questions .' + window.currentState + '__question ';
    let before = document.querySelector(parent + '.text__before');
    let after = document.querySelector(parent + '.text__after');

    let percentSpan = document.querySelector('.percent .value');

    before.classList.remove('fadeOut');
    after.classList.add('fadeOut');

    let percent = 0;
    let percentStep = Math.round((100 / items.length));

    let dashTotal = 500;
    let dash = 127 / items.length;
    percentSpan.innerHTML = percent + "%";
    circle.style.strokeDashoffset = dashTotal;


    items.forEach(item => {

        //affichage value hover
        item.addEventListener('mouseover', () => {
            values[item.getAttribute('data-id')].classList.remove('fadeOut');
            values[item.getAttribute('data-id')].classList.add('fadeIn');
        })
        item.addEventListener('mouseout', () => {
            values[item.getAttribute('data-id')].classList.add('fadeOut');
            values[item.getAttribute('data-id')].classList.remove('fadeIn');
        })


        item.addEventListener('click', () => {
            items.forEach(item => {
                item.classList.remove('is-active');
            })
            item.classList.add('is-active');

            if (bottomLine.classList.contains('hidden')) {
                bottomLine.classList.remove('hidden');
            }
            questionsScreens.changeState(item);

            if (!item.classList.contains('clicked')) {
                dashTotal -= dash;
                circle.style.strokeDashoffset = dashTotal;

                percent += percentStep;

                if (percent > 100) {
                    percent = 100;
                }
                percentSpan.innerHTML = percent + "%";
            }
            item.classList.add('clicked');
        })
    })
}

export default timeline;