const chooseSex = () =>{
    const male = document.querySelector('.male');
    const female = document.querySelector('.female');
    const background = document.querySelector('.background');

    male.addEventListener('mouseover', () => {
        background.classList.add('yellow');
        male.querySelector('path').classList.add('whitepath');
    })
    male.addEventListener('mouseout', () => {
        background.classList.remove('yellow');
        male.querySelector('path').classList.remove('whitepath');
    })

    female.addEventListener('mouseover', () => {
        background.classList.add('red');
        female.querySelector('path').classList.add('whitepath');
    })
    female.addEventListener('mouseout', () => {
        background.classList.remove('red');
        female.querySelector('path').classList.remove('whitepath');
    })


}

export default chooseSex;