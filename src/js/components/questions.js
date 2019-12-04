import maleQuestions from './maleQuestions';
import femaleQuestions from './femaleQuestions';

const questions = () => {

    setQuestionsAnswersChoices('male','.first__question');
    setQuestionsAnswerUnique('male','.second__question');

    setQuestionsAnswersChoices('female','.first__question');
    // setQuestionsAnswersPercent('female','.second__question');

    /**
     * gestion des choix et de la reponses juste / fausse
     * @param {string} questionNumber : classname of div
     */
    function setQuestionsAnswersChoices(sex,questionNumber){
        const parent = '.' + sex + '__questions ' + questionNumber;
        const choices = document.querySelectorAll(parent + ' .choice');
        const right_answer = document.querySelector(parent + ' .right__answer');
        const wrong_answer = document.querySelector(parent + ' .wrong__answer');
        choices.forEach(element => {
            element.addEventListener('click',() => {
                if(element.getAttribute('data-answer') == "true"){
                    right_answer.style.opacity = '1';
                    wrong_answer.style.opacity = '0';
                }else{
                    right_answer.style.opacity = '0';
                    wrong_answer.style.opacity = '1';
                }
            })
        });
    }

    /**
     * gestion des choix et de la réponse unique (pas de bonne ou mauvaise réponse)
     * @param {string} questionNumber : classname of div
     */
    function setQuestionsAnswerUnique(sex,questionNumber){
        const parent = '.' + sex + '__questions ' + questionNumber;
        const choices = document.querySelectorAll(parent + ' .choice');
        const answer = document.querySelector(parent + ' .answer');
        choices.forEach(element => {
            element.addEventListener('click',() => {
                answer.style.opacity = '1';
            })
        });
    }
    
}
export default questions;
