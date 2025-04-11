const card = document.getElementById("card");
const randomText = document.getElementById("random-text");

const funFacts = [
  "Bananas are berries, but strawberries are not.",
  "Some turtles can breathe through their butts."
];

function getRandomFact() {
  const index = Math.floor(Math.random() * funFacts.length);
  return funFacts[index];
}

card.addEventListener("click", () => {
  card.classList.toggle("is-flipped");

  // Only update content if card is being flipped to the back
  if (card.classList.contains("is-flipped")) {
    randomText.textContent = getRandomFact();
  }
});
