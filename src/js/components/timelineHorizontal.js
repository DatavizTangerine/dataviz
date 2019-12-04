import * as questionsScreens from './questionsScreens';

const timelineHorizontal = () => {
    const timeline = document.querySelector('.timeline');
    const items = document.querySelectorAll('.timeline__horizontal .timeline__item');
    const chooseTime = document.querySelector('.choose__time');
    const percent = document.querySelector('.percent');
    // const selected = document.querySelector('.female__questions');
    const bottomLine = document.querySelector('.line-bottom');
    const topLine = document.querySelector('.line-top');

    let percentSpan = document.querySelector('.percent .value');
    const circle = document.querySelector('.percent svg #bar');

    let value = 0;
    let percentStep = Math.round((100 / items.length));

    let dashTotal = 500;
    let dash = 127 / items.length;
    percentSpan.innerHTML = value + "%";
    circle.style.strokeDashoffset = dashTotal;

    items.forEach(item => {
        item.addEventListener('click', () => {
            chooseTime.classList.remove('fadeIn');
            chooseTime.classList.add('fadeOut');
            percent.classList.add('fadeIn');
            bottomLine.classList.remove('hidden');
            topLine.classList.remove('hidden');
            timeline.classList.add('fadeIn');

            window.currentState = item.getAttribute('data-state');
            window.currentNumber= item.getAttribute('data-number');

            if (!item.classList.contains('clicked')){
                dashTotal -= dash;
                circle.style.strokeDashoffset = dashTotal;

                value += percentStep;

                if (value > 100) {
                    value = 100;
                }
                percentSpan.innerHTML = value + "%";
            }

            questionsScreens.changeState(item);
        })
    })
}
export default timelineHorizontal;