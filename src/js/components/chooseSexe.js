const chooseSex = () =>{
    const male = document.querySelector('.male');
    const female = document.querySelector('.female');
    const background = document.querySelector('.background');
    const leftLine = document.querySelector('.line__left');
    const rightLine = document.querySelector('.line__right');
    const text = document.querySelector('.choose__sexe p');
    const sectionChoose = document.querySelector('.choose__sexe');
    const sectionTime = document.querySelector('.choose__time');
    const sectionFemale = document.querySelector('.female__questions');
    const sectionMale = document.querySelector('.male__questions');


    male.addEventListener('mouseover', () => {
        background.classList.add('yellow');
        male.querySelector('path').classList.add('whitepath');
        leftLine.classList.add('whitepath');
        text.classList.add('whitepath');
    })
    male.addEventListener('mouseout', () => {
        background.classList.remove('yellow');
        male.querySelector('path').classList.remove('whitepath');
        leftLine.classList.remove('whitepath');
        text.classList.remove('whitepath');
    })
    female.addEventListener('mouseover', () => {
        background.classList.add('red');
        female.querySelector('path').classList.add('whitepath');
        rightLine.classList.add('whitepath');
        text.classList.add('whitepath');

    })
    female.addEventListener('mouseout', () => {
        background.classList.remove('red');
        female.querySelector('path').classList.remove('whitepath');
        rightLine.classList.remove('whitepath');
        text.classList.remove('whitepath');

    })

    male.addEventListener('click', () => {
        sectionChoose.classList.remove('fadeIn');
        sectionChoose.classList.add('fadeOut');
        sectionTime.classList.add('fadeIn');
        rightLine.classList.add('hidden');
        leftLine.classList.add('hidden');
        sectionMale.classList.add('selected');
        sectionFemale.classList.add('not__selected');
        window.currentSex = 'male';
    })
    female.addEventListener('click', () => {
        sectionChoose.classList.remove('fadeIn');
        sectionChoose.classList.add('fadeOut');
        sectionTime.classList.add('fadeIn');
        rightLine.classList.add('hidden');
        leftLine.classList.add('hidden');
        sectionFemale.classList.add('selected');
        sectionMale.classList.add('not__selected');
        window.currentSex = 'female';
    })
}

export default chooseSex;