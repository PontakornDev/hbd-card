function showWish() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("wishAlert").style.display = "block";
}

function closeWish() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("wishAlert").style.display = "none";
}

// Create minion emojis as confetti
function createConfetti() {
  const emojis = ["🍌", "👖", "🥽", "💛", "🔧"];
  const confetti = document.createElement("div");
  confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  confetti.className = "minion-confetti";

  // Random position, size and animation duration
  const size = Math.random() * 20 + 10;
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.fontSize = size + "px";
  const animationDuration = Math.random() * 3 + 2;
  confetti.style.animationDuration = animationDuration + "s";

  document.body.appendChild(confetti);

  // Remove after animation completes
  setTimeout(() => {
    confetti.remove();
  }, animationDuration * 1000);
}

// Create confetti periodically
setInterval(createConfetti, 300);
