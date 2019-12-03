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

            // Changement de question
            let oldNumber = window.currentNumber;
            window.currentNumber = item.getAttribute('data-number');
            window.currentState = item.getAttribute('data-State');
            newState();

            // Display en fonction du précédent point
            parent = '.' + window.currentSex + '__questions .' + window.currentState + '__question ';
            before = document.querySelector(parent + '.text__before');
            after = document.querySelector(parent + '.text__after');
            if(window.currentNumber >= oldNumber){
                before.classList.remove('fadeOut');
                after.classList.add('fadeOut');
            }
            else{
                after.classList.remove('fadeOut');
                before.classList.add('fadeOut');
            }

            // Jauge
            item.classList.add('clicked');
            dashTotal -= dash;
            circle.style.strokeDashoffset = dashTotal;
        })
    })

    function newState(){
        let question = document.querySelector('.' + window.currentSex + '__questions .' + window.currentState + '__question');
        let questions = document.querySelectorAll('.' + window.currentSex + '__questions .question');
        questions.forEach(element => {
            element.classList.add('slideOff');
            element.classList.add('fadeOut');
            element.classList.remove('slideOn');
        });
        question.classList.add('slideOn');
        question.classList.remove('slideOff');
        question.classList.remove('fadeOut');
    }
}

export default timeline;