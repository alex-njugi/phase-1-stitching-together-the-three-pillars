// Step 1: Select the heart elements
const articleHearts = document.querySelectorAll(".like-glyph");

// Step 2: Mock server function
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulating random server failures
      if (Math.random() < 0.2) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Step 3: Add event listeners to hearts
articleHearts.forEach(heart => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (heart.textContent === "♡") {
          heart.textContent = "♥";  // Change to solid heart
          heart.classList.add("activated-heart");
        } else {
          heart.textContent = "♡";  // Revert to empty heart
          heart.classList.remove("activated-heart");
        }
      })
      .catch(error => {
        alert(error);  // Show error message on failure
      });
  });
});
