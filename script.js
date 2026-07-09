// Open Invitation
const openCard = document.getElementById("openCard");
const card = document.getElementById("card");

openCard.addEventListener("click", () => {
    openCard.style.display = "none";
    card.style.display = "block";
});

// Countdown
const weddingDate = new Date("September 7, 2026 07:00:00").getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML =
            "<h2>💖 Today is Our Wedding Day 💖</h2>";
    }

}, 1000);
