const femaleBtn = () => {
    const section = document.querySelector('.choose__sexe');
    const btn = section.querySelector('.female');


    btn.addEventListener('click', () => {
        section.classList.add('choose__done', 'female__choose');
    })
}

export default femaleBtn;