const femaleQuestions = () => {
    const sex = '.female__questions ';
    setQuestionsAnswersChoices('.first__question');
    setQuestionsAnswersPercent('.second__question');

    /**
     * gestion des choix et de la reponses juste / fausse
     * @param {string} questionNumber : classname of div
     */
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

    /**
     * gestion des choix en pourcentage et réponses
     * @param {string} questionNumber : classname of div
     */
    function setQuestionsAnswersPercent(questionNumber){
        const parent = sex + questionNumber;
        // const choices = document.querySelectorAll(parent + ' .choice');
        // const right_answer = document.querySelector(parent + ' .right__answer');
        // const wrong_answer = document.querySelector(parent + ' .wrong__answer');

        "use strict";

        var volumeSlider = document.getElementById('volume');

        function Slider(slider) {
        this.slider = slider;
        slider.addEventListener('input', function() {
            this.updateSliderOutput();
            this.updateSliderLevel();
        }.bind(this), false);
        
        this.level = function() {
            var level = this.slider.querySelector('.slider-input');
            return level.value;
        }
        
        this.levelString = function() {
            return parseInt(this.level());
        }
        
        this.remaining = function() {
            return 99.5 - this.level();
        }
        
        this.remainingString = function() {
            return parseInt(this.remaining());
        }
        
        this.updateSliderOutput = function() {
            var output = this.slider.querySelector('.slider-output');
            var remaining = this.slider.querySelector('.slider-remaining');
            var thumb = this.slider.querySelector('.slider-thumb');
            output.value = this.levelString();
            output.style.left = this.levelString()+1 + '%';
            thumb.style.left = this.levelString() + '%';
            if (remaining) { 
                remaining.style.width = this.remainingString() + '%';
            }
        }
        
        this.updateSlider = function(num) {
            var input = this.slider.querySelector('.slider-input');
            input.value = num;
        }
        
        this.updateSliderLevel =function() {
            var level = this.slider.querySelector('.slider-level');
            level.style.width = this.levelString() + '%';
        }
        }

        new Slider(volumeSlider);
    }
}
export default femaleQuestions;