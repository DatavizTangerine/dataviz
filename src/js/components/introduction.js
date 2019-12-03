const introduction = () => {
    const btn = document.querySelector('.introduction p');
    if (btn){
        const sectionIntroduction = document.querySelector('.introduction');
        const sectionOnboarding = document.querySelector('.onboarding');
        btn.addEventListener('click', () => {
            sectionIntroduction.classList.add('fadeOut');
            setTimeout(function () {
                sectionOnboarding.classList.add('fadeIn');
            }, 1000)
        })
    }

    const text = document.querySelectorAll('.introduction .content .text');
    text[0].classList.add('is-active');

}
export default introduction;