const timeline = () => {
    const timeline = document.querySelector('.timeline');
    const items = timeline.querySelectorAll('.timeline__item');

    items.forEach(item =>{  
        item.addEventListener('click', () =>{
            items.forEach(item =>{
                item.classList.remove('is-active');
            })
            item.classList.add('is-active');
        })
    })

}

export default timeline;