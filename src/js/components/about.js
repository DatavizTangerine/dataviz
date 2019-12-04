const about = () => {
    const btnShow = document.querySelector('.aboutBtn');
    const btnHide = document.querySelector('.about .close');

    const about = document.querySelector('.about');


    btnShow.addEventListener('click', () => {
        about.classList.remove('fadeOut');
        about.classList.add('fadeIn');
    })

    btnHide.addEventListener('click', () => {
        about.classList.remove('fadeIn');
        about.classList.add('fadeOut');
    })
}

export default about;