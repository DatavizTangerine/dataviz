const conclusion = () => {
    const btnReload = document.querySelector('.conclusion span');

    btnReload.addEventListener('click', () => {
     location.reload();
    })
}

export default conclusion;