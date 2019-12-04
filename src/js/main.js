import introduction from './components/introduction';
import onboarding from './components/onboarding';
import chooseSexe from './components/chooseSexe';
import timeline from './components/timeline';
import cursor from './components/cursor';
import questions from './components/questions';
import percent from './components/percent';
import maleBtn from './components/maleBtn';
import femaleBtn from './components/femaleBtn';
import timelineHorizontal from './components/timelineHorizontal';
import range from './components/range';
import about from './components/about';

import histogram from './graph/child/female/histogram';
import lineWomen from './graph/job/lineWomen';
import lineMen from './graph/job/lineMen';
import histogramWomen from './graph/street/women';
import histogramMen from './graph/street/histogramMen';
import map from './graph/pension/map';


document.addEventListener("DOMContentLoaded", () =>{
    window.currentState = "first";
    window.currentNumber = "1";
    window.currentSex = 'female';

    introduction();
    onboarding();
    chooseSexe();
    timeline();
    cursor();
    questions();
    percent();
    maleBtn();
    femaleBtn();
    timelineHorizontal();
    range();
    about();

    histogramMen();
    histogramWomen();
    map();
    histogram();
    lineWomen();
    lineMen();
});