const onboarding = () => {
    const btn = document.querySelector('.onboarding p');
    if (btn){
        const sectionOnboarding = document.querySelector('.onboarding');
        const sectionChoose = document.querySelector('.choose__sexe');
        const bottomLine = document.querySelector('.line-bottom');
        const leftLine = document.querySelector('.line__left');
        const rightLine = document.querySelector('.line__right');
        // const timeline = document.querySelector('.timeline');
        const topLine = document.querySelector('.line-top');


        btn.addEventListener('click', () => {
            sectionOnboarding.classList.add('fadeOut');
            sectionOnboarding.classList.remove('fadeIn');
            setTimeout(function () {
                sectionChoose.classList.add('fadeIn');
                leftLine.classList.remove('hidden');
                bottomLine.classList.add('hidden');
                rightLine.classList.remove('hidden');

                // timeline.classList.add('show');
                topLine.classList.remove('hidden');

            },1000)
        })
    }
}
export default onboarding;