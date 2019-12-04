const questions = () => {
    setQuestionsNoAnswers('female','.first__question');
    setQuestionsNoAnswers('male','.first__question');
    setQuestionsNoAnswers('female','.second__question');

    setQuestionsNoAnswers('male','.third__question');

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
     * gestion des choix et de la reponses juste / fausse
     * @param {string} questionNumber : classname of div
     */
    function setQuestionsNoAnswers(sex,questionNumber){
        const parent = '.' + sex + '__questions ' + questionNumber;
        const choices = document.querySelectorAll(parent + ' .choice');

        const thisSection = document.querySelector(parent + ' .question__choices');

        const answersSection = document.querySelector(parent + ' .question__answers');
        const bottomLine = document.querySelector('.line-bottom');

        choices.forEach(element => {
            element.addEventListener('click',() => {
                thisSection.classList.remove('fadeIn');
                thisSection.classList.add('fadeOut');

                answersSection.classList.remove('fadeOut');
                answersSection.classList.add('fadeIn');

                bottomLine.classList.add('hidden');
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
