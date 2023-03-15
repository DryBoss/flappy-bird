import { dropBird } from "./bird.js";

const p2p = document.querySelector(".play");

window.addEventListener("keydown", event => {
  switch (event.key) {
    case "w":
    case "ArrowUp":
    case " ":
      p2p.style.display = "none";
  }
})

setInterval(updateGame(), 1000);

function updateGame() {
  dropBird();
};