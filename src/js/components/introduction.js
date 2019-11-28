const introduction = () => {
    const btn = document.querySelector('.introduction span');
    if (btn){
        const sectionIntroduction = document.querySelector('.introduction');
        const sectionOnboarding = document.querySelector('.onboarding');
        btn.addEventListener('click', () => {
            sectionIntroduction.classList.add('fadeOut');
            sectionOnboarding.classList.add('fadeIn');
        })
    }
}
export default introduction;