const chooseSex = () =>{
    const male = document.querySelector('.male');
    const female = document.querySelector('.female');
    const background = document.querySelector('.background');

    male.addEventListener('mouseover', () => {
        background.classList.add('blue');
    })
    male.addEventListener('mouseout', () => {
        background.classList.remove('blue');
    })

    female.addEventListener('mouseover', () => {
        background.classList.add('pink');
    })
    female.addEventListener('mouseout', () => {
        background.classList.remove('pink');
    })


}

export default chooseSex;