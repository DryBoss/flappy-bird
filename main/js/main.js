import { checkCrash, dropBird, jumpBird, resetBird, birdStatus as birdStatusBird } from "./bird.js";
import { birdStatus as birdStatusControl } from "./control.js";
import { genarateObstacles } from "./obstacle.js";

resetBird();

genarateObstacles();

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