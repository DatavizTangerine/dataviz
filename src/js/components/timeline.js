import * as questionsScreens from './questionsScreens';

const timeline = () => {
    const timeline = document.querySelector('.timeline');
    const items = timeline.querySelectorAll('.timeline__item');
    const circle = document.querySelector('.percent svg #bar');

    let parent = '.' + window.currentSex + '__questions .' + window.currentState + '__question ';
    let before = document.querySelector(parent + '.text__before');
    let after = document.querySelector(parent + '.text__after');

    before.classList.remove('fadeOut');
    after.classList.add('fadeOut');

    let dashTotal = 500;
    let dash = dashTotal / items.length;
    circle.style.strokeDashoffset = dashTotal;

    items.forEach(item =>{  
        item.addEventListener('click', () =>{
            items.forEach(item =>{
                item.classList.remove('is-active');
            })
            item.classList.add('is-active');

            questionsScreens.changeState(item);

            // Jauge
            item.classList.add('clicked');
            dashTotal -= dash;
            circle.style.strokeDashoffset = dashTotal;
        })
    })
}

export default timeline;