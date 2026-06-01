const targetTime =new Date();
targetTime.setSeconds(targetTime.getSeconds()+10);
function updateCountDown(){
const now = new Date();
const timeDifference = targetTime - now ;

if( timeDifference <= 0){
    document.getElementById("status-heading").innerText="Back to Work! Let's Crush Our Goals.";
    document.getElementById("timer-box").style.display="none";

    document.getElementById("hours").parentElement.style.display = "none";
    document.getElementById("minutes").parentElement.style.display = "none";
    document.getElementById("seconds").parentElement.style.display = "none";


const vedioBg = document.getElementById("bg-video");
if(vedioBg){
vedioBg.style.display="none";}

document.body.classList.add("work-mode");

clearInterval(countdownInterval);
return;

}
let hours =Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
let minutes =Math.floor((timeDifference/(1000*60))%60);
let seconds =Math.floor((timeDifference/(1000))%60);

let currentHour =now.getHours();

 document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

}
function toggleAudio() {
    var video = document.getElementById("bg-video");
    var btn = document.getElementById("audio-btn");
    
    if (video.muted) {
        video.muted = false;
        btn.innerText = "🔇 Mute Music";
    } else {
        video.muted = true;
        btn.innerText = "🔊 Play Music";
    }
}
const countdownInterval = setInterval(updateCountDown,1000);
updateCountDown();