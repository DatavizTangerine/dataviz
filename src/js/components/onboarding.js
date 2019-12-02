const onboarding = () => {
    const btn = document.querySelector('.onboarding span');
    if (btn){
        const sectionOnboarding = document.querySelector('.onboarding');
        const sectionChoose = document.querySelector('.choose__sexe');
        const timeline = document.querySelector('.timeline');
        const topLine = document.querySelector('.line-top');

        btn.addEventListener('click', () => {
            sectionOnboarding.classList.add('slideOff');
            sectionOnboarding.classList.remove('slideOn');
            sectionChoose.classList.add('slideOn');
            timeline.classList.add('show');
            topLine.classList.remove('hidden');
        })
    }
}
export default onboarding;