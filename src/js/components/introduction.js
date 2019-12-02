const introduction = () => {
    const btn = document.querySelector('.introduction p');
    if (btn){
        const sectionIntroduction = document.querySelector('.introduction');
        const sectionOnboarding = document.querySelector('.onboarding');
        btn.addEventListener('click', () => {
            sectionIntroduction.classList.add('slideOff');
            sectionOnboarding.classList.add('slideOn');
        })
    }

    const text = document.querySelectorAll('.introduction .content .text');
    text[0].classList.add('is-active');
    let word = text[0].querySelectorAll('span');
        word[word.length - 1].addEventListener('transitionend', () =>{
            text[0].classList.remove('is-active');

            text[1].classList.add('is-active');
            word = text[1].querySelectorAll('span');

            word[word.length - 1].addEventListener('transitionend', () =>{
                text[1].classList.remove('is-active');

                text[2].classList.add('is-active');
            })
        })
}
export default introduction;