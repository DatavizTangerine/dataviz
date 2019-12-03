const timeline = () => {
    const timeline = document.querySelector('.timeline');
    const items = timeline.querySelectorAll('.timeline__item');

    init();

    items.forEach(item =>{  
        item.addEventListener('click', () =>{
            items.forEach(item =>{
                item.classList.remove('is-active');
            })
            item.classList.add('is-active');
            window.currentState = item.getAttribute('data-state');
            console.log(window.currentState);
            newState();
        })
    })

    function init(){
        let questions = document.querySelectorAll('.question');
        questions.forEach(element => {
            element.style.opacity = '0';
        });

        let firsts = document.querySelectorAll('.first__question');
        firsts.forEach(element => {
            element.style.opacity = '1';
        });
    }

    function newState(){
        let question = document.querySelector('.' + window.currentSex + '__questions .' + window.currentState + '__question');
        let questions = document.querySelectorAll('.' + window.currentSex + '__questions .question');
        questions.forEach(element => {
            element.classList.add('slideOff');
            element.classList.remove('slideOn');
            element.classList.add('fadeOut');
        });
        question.classList.add('slideOn');
        question.classList.remove('slideOff');
        question.classList.remove('fadeOut');
    }
}

export default timeline;