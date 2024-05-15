let textSpace = document.querySelector('.textSpace');
var form = document.querySelector('.container');
var submitBtn = document.querySelector('.transformBtn');
var pauseBtn = document.querySelector('.pauseBtn');
var playBtn = document.querySelector('.playBtn');
var repeatBtn = document.querySelector('.repeatBtn');

submitBtn.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(textSpace.value);
    utterance.rate = 1.0;
    let speed = [];
    speed = document.querySelectorAll('.speedControl');
    for (let i = 0; i < speed.length; i++) {
        speed[i].addEventListener('click', () => {
            utterance.rate = speed[i].innerHTML.slice(0, -1);
        })
    }
    utterance.lang = 'en-IN';
    window.speechSynthesis.speak(utterance);

    pauseBtn.addEventListener("click", () => {
        pauseBtn.classList.toggle("hidden");
        playBtn.classList.toggle("hidden");
        if(window.speechSynthesis.speaking){
            window.speechSynthesis.pause();
        }
    })
    playBtn.addEventListener("click", () => {
        pauseBtn.classList.toggle("hidden");
        playBtn.classList.toggle("hidden");
        if(window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
        }
    })
    repeatBtn.addEventListener("click", () => {
        window.speechSynthesis.speak(utterance);
    })
})
