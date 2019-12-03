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
    console.log('=========');
    let parent = '.' + window.currentSex + '__questions .' + window.currentState + '__question ';
    let screens = document.querySelector(parent).children;

    //boarding to base / choices
    let interval = 5000;
    setTimeout(() => {
        screens[0].classList.remove('active__screen');
        screens[0].classList.add('fadeOut');
        screens[1].classList.remove('fadeOut');
        screens[1].classList.add('active__screen');
        
    },interval);

    if(screens[1].getAttribute('class').match(/base/) != null){
        setTimeout(() => {
            screens[1].classList.remove('active__screen');
            screens[1].classList.add('fadeOut');
            screens[2].classList.remove('fadeOut');
            screens[2].classList.add('active__screen');
        },interval*2);
    }
}

function hideAllScreens()
{
    let parent = '.' + window.currentSex + '__questions .' + window.currentState + '__question ';
    let screens = document.querySelector(parent).children;
    for(let i = 0; i < screens.length; i++){
        screens[i].classList.add('fadeOut');
    }
    screens[0].classList.add('active__screen');
}

function showFirstScreen(){
    let parent = '.' + window.currentSex + '__questions .' + window.currentState + '__question ';
    let intro = document.querySelector(parent + ' .active__screen');
    intro.classList.remove('fadeOut');
}

export {changeState};