const range = () => {
    const volumeSlider = document.querySelector('.condom');
    const pillsSlider = document.querySelector('.range .pill');
    const pills = pillsSlider.querySelectorAll('svg g');

    const svgs = volumeSlider.querySelectorAll('svg .condom_svg');

    function SliderCondom(slider, range) {
        this.slider = slider;

        slider.addEventListener('input', function () {
            this.updateSliderOutput();
        }.bind(this), false);

        this.level = function () {
            const level = this.slider.querySelector(range);
            return level.value;
        }

        svgs.forEach(svg => {
            svg.style.transform = "translateX(" + (this.level()-100) + "%)"
        })

        for (let i = Math.floor(this.level()/10); i < pills.length; i++){
            pills[i].classList.add('hidden');
        }


        this.remaining = function () {
            return 99.5 - this.level();
        }

        this.remainingString = function () {
            return parseInt(this.remaining());
        }

        this.updateSliderOutput = function () {
            const output = this.slider.querySelector('.output__range');
            const remaining = this.slider.querySelector('.slider-remaining');

            output.style.left = this.level() + 1 + '%';
            if (this.level()-100 < -90){
                svg.style.transform = "translateX(" + (-10) + "%)"
            }
            else{
                output.style.transform = "translateX(" +  (this.level()-100) + "%)"
                svgs.forEach(svg => {
                    svg.style.transform = "translateX(" + (this.level()-100) + "%)"
                })
            }
        }

        this.updateSlider = function (num) {
            const input = this.slider.querySelector('.slider-input');
            input.value = num;
        }


    }
    function SliderPill(slider, range) {
        this.slider = slider;


        slider.addEventListener('input', function () {
            this.updateSliderOutput();
        }.bind(this), false);

        this.level = function () {
            const level = this.slider.querySelector(range);
            return level.value;
        }

        svgs.forEach(svg => {
            svg.style.transform = "translateX(" + (this.level()-100) + "%)"
        })

        for (let i = Math.floor(this.level()/10); i < pills.length; i++){
            pills[i].classList.add('hidden');
        }


        this.remaining = function () {
            return 99.5 - this.level();
        }

        this.remainingString = function () {
            return parseInt(this.remaining());
        }

        this.updateSliderOutput = function () {
             const output = this.slider.querySelector('.output__range');
            const remaining = this.slider.querySelector('.slider-remaining');

            output.value = this.level() + "%";
            output.style.left = this.level() + 1 + '%';

            for (let i = Math.floor(this.level()/10); i < pills.length; i++){
                pills[i].classList.add('hidden');
            }
            for (let i = 0; i < Math.floor(this.level()/10); i++){
                pills[i].classList.remove('hidden');
            }
            if (remaining) {
                remaining.style.width = this.remainingString() + '%';
            }
        }

        this.updateSlider = function (num) {
            const input = this.slider.querySelector('.slider-input');
            input.value = num;
        }


    }

    new SliderCondom(volumeSlider, '.range__condom');
    new SliderPill(pillsSlider, '.range__pill');
}


export default range;