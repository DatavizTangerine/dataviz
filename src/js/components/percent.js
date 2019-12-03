const percent = () => {
    const numberOfElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    const initialRender = numberOfElement.slice(0, 17); // TAKIT: Modified to test

    function renderAngle(data) {
        const angles = [120];
        data.forEach(function(item, index) {
            angles.push((angles[index] + 20) % 360);      // TAKIT: Added modulo
        })
        return angles;
    }

        let html = '';
        const angles = renderAngle(initialRender);
        angles.forEach(function(item, index) {
            // TAKIT: Added use of a CSS var here, so all the CSS is in the CSS!
            html += '<div class="shapes' + '" style="--deg:' + item + 'deg;"></div>';
        });
        document.querySelector('.percent svg').insertAdjacentHTML("afterend", html); // TAKIT: Moved it here, after the loop

}

export default percent;