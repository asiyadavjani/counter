// ✅ FIXED FOR TESTING: Target time ko globally abhi ke time se theek 10 seconds aage set karein
const targetTime = new Date();
targetTime.setSeconds(targetTime.getSeconds() + 10); 

function updateCountdown() {
    const now = new Date(); // Current time har second refresh hota rahega
    
    const timeDifference = targetTime - now;
    
    // 1. Jaise hi 10 seconds poore hon aur difference 0 ya minus me chala jaye
    if (timeDifference <= 0) {
        document.getElementById("status-heading").innerText = "💼 Back to Work! Let's Crush Our Goals.";
        document.getElementById("timer-box").style.display = "none"; // Timer cards ko hide karein
        
        // Video ko screen se mukammal chupana
        const videoBg = document.getElementById("bg-video");
        if (videoBg) {
            videoBg.style.display = "none";
        }
        
        // Body par work-mode class lagana taake office background image show ho jaye
        document.body.classList.add("work-mode");
        
        clearInterval(countdownInterval); // Timer ke loop ko hamesha ke liye rokna
        return;
    }
    
    // 2. Countdown calculate karne ka baki math logic
    let hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    let seconds = Math.floor((timeDifference / 1000) % 60);
    
    // AM/PM Marker aapke system time ke mutabiq
    let currentHour = now.getHours();
    let ampmMarker = currentHour >= 12 ? "PM" : "AM";
    
    // UI par numbers print karna (0 lagane ke setup ke sath)
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("ampm").innerText = ampmMarker;
}

// Music Play/Mute toggle control
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

// Har 1 second (1000ms) baad function ko chalana
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Page load hote hi instant execute karne ke liye