import { checkCrash, dropBird, jumpBird, resetBird, birdStatus as birdStatusBird } from "./bird.js";
import { birdStatus as birdStatusControl } from "./control.js";

resetBird();

setInterval(updateGame, 10);

function updateGame() {
  if (birdStatusBird === "alive") {
    if (birdStatusControl === "jump") {
      jumpBird();
    }
    dropBird();
    checkCrash();
  }
};