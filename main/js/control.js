import { birdStatus as birdStatusBird, resetBird } from "./bird.js";

export const p2p = document.querySelector(".play");

//game variables
export let birdStatus = "drop";

window.addEventListener("keydown", event => {
  switch (event.key) {
    case "w":
    case "ArrowUp":
    case " ":
      if (birdStatusBird === "dead") {
        resetBird();
        p2p.style.display = "none";
      } else {
        birdStatus = "jump";
        setTimeout(() => {
          birdStatus = "drop";
        }, 300);
      }
  }
})