const onboarding = () => {
    const btn = document.querySelector('.onboarding span');
    if (btn){
        const sectionOnboarding = document.querySelector('.onboarding');
        const sectionChoose = document.querySelector('.choose__sexe');
        btn.addEventListener('click', () => {
            sectionOnboarding.classList.add('fadeOut');
            sectionOnboarding.classList.remove('fadeIn');
            sectionChoose.classList.add('fadeIn');
        })
    }
}
export default onboarding;