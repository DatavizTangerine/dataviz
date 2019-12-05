const deathWomen = () => {
    const years = document.querySelectorAll('.answers__deathWomen .years p');

    years.forEach(year => {
        year.addEventListener('click', () => {
            years.forEach(year => {
                year.classList.remove('selected');
            })
            year.classList.add('selected');
            let value = year.getAttribute("data-death");
            const itemCross = document.querySelector('.items__cross');
            itemCross.innerHTML = "";
           itemCross.classList.add('show');
            for (let i = 0; i < value; i++){
                itemCross.insertAdjacentHTML('afterbegin', '<span class="cross"><svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<path fill-rule="evenodd" clip-rule="evenodd" d="M0.802711 7.00274C0.802711 6.62692 1.12821 6.32227 1.52974 6.32227H14.1801C14.5816 6.32227 14.9071 6.62692 14.9071 7.00274C14.9071 7.37856 14.5816 7.68322 14.1801 7.68322H1.52974C1.12821 7.68322 0.802711 7.37856 0.802711 7.00274Z" fill="#FF614C" style="mix-blend-mode:darken"/>\n' +
                    '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.85492 0.507812C8.2649 0.507812 8.59725 0.832548 8.59725 1.23313L8.59725 21.9289C8.59725 22.3294 8.2649 22.6542 7.85492 22.6542C7.44493 22.6542 7.11258 22.3294 7.11258 21.9289L7.11258 1.23313C7.11258 0.832548 7.44494 0.507812 7.85492 0.507812Z" fill="#FF614C" style="mix-blend-mode:darken"/>\n' +
                    '</svg></span>');
            }


        })

    })

}

export default deathWomen;