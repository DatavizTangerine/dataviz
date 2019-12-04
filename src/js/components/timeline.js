import * as questionsScreens from './questionsScreens';

const timeline = () => {
    const timeline = document.querySelector('.timeline');
    const items = timeline.querySelectorAll('.timeline__item');
    const circle = document.querySelector('.percent svg #bar');
    const bottomLine = document.querySelector('.line-bottom');

    let parent = '.' + window.currentSex + '__questions .' + window.currentState + '__question ';
    let before = document.querySelector(parent + '.text__before');
    let after = document.querySelector(parent + '.text__after');
    const percentBtn = document.querySelector('.percent');
    let percentSpan = document.querySelector('.percent .value');

    before.classList.remove('fadeOut');
    after.classList.add('fadeOut');

    let percent = 0;
    let percentStep = Math.round((100 / items.length));

    let dashTotal = 500;
    let dash = 127 / items.length;
    percentSpan.innerHTML = percent + "%";
    circle.style.strokeDashoffset = dashTotal;


    items.forEach(item =>{  
        item.addEventListener('click', () =>{
            items.forEach(item =>{
                item.classList.remove('is-active');
            })
            item.classList.add('is-active');

            if (bottomLine.classList.contains('hidden')){
                bottomLine.classList.remove('hidden');
            }
            questionsScreens.changeState(item);

            if (!item.classList.contains('clicked')){
                dashTotal -= dash;
                circle.style.strokeDashoffset = dashTotal;

                percent += percentStep;

                if (percent > 100) {
                    percent = 100;
                    percentBtn.classList.add('show__conclusion');
                }
                percentSpan.innerHTML = percent + "%";


            }
            item.classList.add('clicked');
        })
    })
}

export default timeline;