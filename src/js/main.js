import introduction from './components/introduction';
import onboarding from './components/onboarding';
import chooseSexe from './components/chooseSexe';
import timeline from './components/timeline';
import cursor from './components/cursor';
import questions from './components/questions';
import percent from './components/percent';
import maleBtn from './components/maleBtn';
import femaleBtn from './components/femaleBtn';
import histogram from './graph/child/female/histogram';
import line from './graph/job/line';

document.addEventListener("DOMContentLoaded", () =>{
    window.currentState = "first";
    window.currentSex = '';

    introduction();
    onboarding();
    chooseSexe();
    timeline();
    cursor();
    questions();
    percent();
    maleBtn();
    femaleBtn();
    histogram();
    line();

});