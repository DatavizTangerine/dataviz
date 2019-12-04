const changeState = (item) => {
    // Changement de question
    let oldNumber = window.currentNumber;
    window.currentNumber = item.getAttribute('data-number');
    window.currentState = item.getAttribute('data-State');

    hideAllStates();
    newState();
    displayState(oldNumber);

    screensEvent();
    hideAllScreens();
    showFirstScreen();
}

function newState(){
    let question = document.querySelector('.' + window.currentSex + '__questions .' + window.currentState + '__question');
    question.classList.add('slideOn');
    question.classList.remove('slideOff');
    question.classList.remove('fadeOut');
}

function hideAllStates()
{
    let questions = document.querySelectorAll('.' + window.currentSex + '__questions .question');
    questions.forEach(element => {
        element.classList.add('slideOff');
        element.classList.add('fadeOut');
        element.classList.remove('slideOn');
    });
}

const displayState = (oldNumber) => {
    // Display en fonction du précédent point
    let parent = '.' + window.currentSex + '__questions .' + window.currentState + '__question ';
    let before = document.querySelector(parent + '.text__before');
    let after = document.querySelector(parent + '.text__after');
    if (window.currentNumber >= oldNumber) {
        before.classList.remove('fadeOut');
        after.classList.add('fadeOut');
    }
    else {
        after.classList.remove('fadeOut');
        before.classList.add('fadeOut');
    }
}

function screensEvent(){
    let parent = '.' + window.currentSex + '__questions .' + window.currentState + '__question ';
    let screens = document.querySelector(parent).children;

    // Next screen jusqu'à la question
    let increment = 0;
    document.body.onkeyup = function(e){
        if(increment < screens.length-2 && e.keyCode == 32){
            screens[increment].classList.remove('active__screen');
            screens[increment].classList.add('fadeOut');
            screens[increment].classList.remove('fadeIn');
            increment++;
            screens[increment].classList.remove('fadeOut');
            screens[increment].classList.add('fadeIn');
            screens[increment].classList.add('active__screen');
        }
    }
}

function hideAllScreens()
{
    let parent = '.' + window.currentSex + '__questions .' + window.currentState + '__question ';
    let screens = document.querySelector(parent).children;
    for(let i = 0; i < screens.length; i++){
        screens[i].classList.add('fadeOut');
        screens[i].classList.remove('fadeIn');
    }
    screens[0].classList.add('active__screen');
    screens[0].classList.add('fadeIn');
}

function showFirstScreen(){
    let parent = '.' + window.currentSex + '__questions .' + window.currentState + '__question ';
    let intro = document.querySelector(parent + ' .active__screen');

    intro.classList.remove('fadeOut');
    intro.classList.add('active__screen');
    intro.classList.add('fadeIn');
}

export {changeState};