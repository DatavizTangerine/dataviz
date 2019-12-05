import timeline from './components/timeline';
import percent from './components/percent';
import maleBtn from './components/maleBtn';
import femaleBtn from './components/femaleBtn';
import timelineHorizontal from './components/timelineHorizontal';
import range from './components/range';

import about from './Layouts/about';
import conclusion from './Layouts/conclusion';
import compare from './Layouts/compare';
import questions from './Layouts/questions';
import introduction from './Layouts/introduction';
import onboarding from './Layouts/onboarding';
import chooseSexe from './Layouts/chooseSexe';
import deathWomen from './Layouts/deathWomen';

import histogram from './graph/child/female/histogram';
import lineWomen from './graph/job/lineWomen';
import lineMen from './graph/job/lineMen';
import lineAll from './graph/job/lineAll';
import histogramWomen from './graph/street/women';
import histogramMen from './graph/street/histogramMen';
import streetMixte from './graph/street/mixte';
import menDeath from './graph/death/men';
import babyMen from './graph/baby/men';
import babyWomen from './graph/baby/women';
import mixteBaby from './graph/baby/mixte';
import menRadial from './graph/child/men/men';


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
    compare();

    histogramMen();
    histogramWomen();
    histogram();
    lineWomen();
    lineMen();
    lineAll();
    menDeath();
    babyMen();
    mixteBaby();
    babyWomen();
    menRadial();
    streetMixte();

    deathWomen();
});