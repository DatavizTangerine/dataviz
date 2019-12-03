const timelineHorizontal = () => {
    const timeline = document.querySelector('.timeline');
    const items = document.querySelectorAll('.timeline__horizontal .timeline__item');
    const chooseTime = document.querySelector('.choose__time');
    const percent = document.querySelector('.percent');
    const selected = document.querySelector('.female__questions');
    const bottomLine = document.querySelector('.line-bottom');
    const topLine = document.querySelector('.line-top');


    items.forEach(item => {
        item.addEventListener('click', () => {
            chooseTime.classList.remove('fadeIn');
            chooseTime.classList.add('fadeOut');
            percent.classList.add('fadeIn');
            selected.classList.add('fadeIn');
            bottomLine.classList.remove('hidden');
            topLine.classList.remove('hidden');
            timeline.classList.add('fadeIn');
        })
    })
}
export default timelineHorizontal;