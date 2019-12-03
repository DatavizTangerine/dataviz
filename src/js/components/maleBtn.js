const maleBtn = () => {
    const section = document.querySelector('.choose__sexe');
    const btn = section.querySelector('.male');


    btn.addEventListener('click', () => {
        section.classList.add('choose__done', 'male__choose');
    })
}

export default maleBtn;