import introduction from './components/introduction';
import onboarding from './components/onboarding';
import chooseSexe from './components/chooseSexe';
import timeline from './components/timeline';
import questions from './components/questions';
import percent from './components/percent';
import maleBtn from './components/maleBtn';
import femaleBtn from './components/femaleBtn';
import timelineHorizontal from './components/timelineHorizontal';
import range from './components/range';
import about from './components/about';
import conclusion from './components/conclusion';

import histogram from './graph/child/female/histogram';
import lineWomen from './graph/job/lineWomen';
import lineMen from './graph/job/lineMen';
import histogramWomen from './graph/street/women';
import histogramMen from './graph/street/histogramMen';
import mapWomenChoice from './graph/pension/choice/mapWomenChoice';


document.addEventListener("DOMContentLoaded", () =>{
    window.currentState = "first";
    window.currentNumber = "1";
    window.currentSex = 'female';

    introduction();
    onboarding();
    chooseSexe();
    timeline();
    questions();
    percent();
    maleBtn();
    femaleBtn();
    timelineHorizontal();
    range();
    about();
    conclusion();

    histogramMen();
    histogramWomen();
    mapWomenChoice();
    histogram();
    lineWomen();
    lineMen();
});