import { dropBird, jumpBird, resetBird } from "./bird.js";
import { birdStatus } from "./control.js";

resetBird();

setInterval(updateGame, 10);

function updateGame() {
  if (birdStatus === "jump") {
    jumpBird();
  }
  dropBird();
};