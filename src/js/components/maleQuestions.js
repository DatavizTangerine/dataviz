const maleQuestions = () => {
    const sex = '.male__questions ';

    setQuestionsAnswersChoices('.first__question');
    setQuestionsAnswerUnique('.second__question');

    function setQuestionsAnswersChoices(questionNumber){
        const parent = sex + questionNumber;
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
    function setQuestionsAnswerUnique(questionNumber){
        const parent = sex + questionNumber;
        const choices = document.querySelectorAll(parent + ' .choice');
        const answer = document.querySelector(parent + ' .answer');
        choices.forEach(element => {
            element.addEventListener('click',() => {
                answer.style.opacity = '1';
            })
        });
    }
}
export default maleQuestions;