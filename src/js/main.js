import introduction from './components/introduction';
import onboarding from './components/onboarding';
import chooseSexe from './components/chooseSexe';
import timeline from './components/timeline';
import cursor from './components/cursor';
import questions from './components/questions';

document.addEventListener("DOMContentLoaded", () =>{
    window.currentState = "first";
    window.currentSex = '';

    introduction();
    onboarding();
    chooseSexe();
    timeline();
    cursor();
    questions();
});