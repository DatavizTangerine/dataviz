const compare = () => {

    function btnCompare(sex,questions) {
        const sexe = document.querySelector(sex);
        const question = sexe.querySelector(questions);
        const sectionCompare = document.querySelector(questions + "-compare");
        const btn = question.querySelector('.btn__compare');

        const btnBack = sectionCompare.querySelector('.btnBack');

        btn.addEventListener('click', () => {
            sectionCompare.classList.remove('fadeOut');
            sectionCompare.classList.add('fadeIn')
        })

        btnBack.addEventListener('click', () => {
            sectionCompare.classList.remove('fadeIn');
            sectionCompare.classList.add('fadeOut');
        })
    }

    btnCompare('.male__questions', '.first__question');
    btnCompare('.female__questions', '.first__question');

    btnCompare('.male__questions', '.third__question');
    btnCompare('.female__questions', '.third__question');

    btnCompare('.male__questions', '.fourth__question');
    btnCompare('.female__questions', '.fourth__question');
}
export  default compare;