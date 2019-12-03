import maleQuestions from './maleQuestions';
import femaleQuestions from './femaleQuestions';

const questions = () => {
    btnEvent('male');
    btnEvent('female');

    maleQuestions();
    femaleQuestions();

    function btnEvent(sex){
        const btn = document.querySelector('.choose__sexe .' + sex);
        if (btn){
            const sectionQuestions = document.querySelector('.' + sex + '__questions');
            const sectionChoose = document.querySelector('.choose__sexe');
    
            btn.addEventListener('click', () => {
                window.currentSex = sex;
                sectionChoose.classList.add('slideOff');
                sectionChoose.classList.remove('slideOn');
                sectionQuestions.classList.add('slideOn');
            })
        }
    }
}
export default questions;
