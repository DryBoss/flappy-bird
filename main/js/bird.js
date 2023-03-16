import { p2p } from "./control.js";

const gameBoard = document.querySelector(".game");
const bird = document.querySelector(".bird");

//game variables
let birdWeight = 1;
export let birdStatus = "alive";

export function resetBird() {
  birdStatus = "alive"
  bird.style.setProperty(
    "--bird-top", 
    parseFloat(getComputedStyle(gameBoard).getPropertyValue("height")) / 2
  );
};

export function dropBird() {
  bird.style.setProperty(
    "--bird-top", 
    parseFloat(getComputedStyle(bird).getPropertyValue("--bird-top")) + birdWeight
  );
};

export function jumpBird() {
  bird.style.setProperty(
    "--bird-top", 
    parseFloat(getComputedStyle(bird).getPropertyValue("--bird-top")) - 5
  );
};

export function checkCrash() {
  if ( bird.getBoundingClientRect().top < 25 || 
    bird.getBoundingClientRect().bottom > (window.innerHeight - 1)
  ) {
    p2p.style.display = "flex";
    birdStatus = "dead";
  }
}
