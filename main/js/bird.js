const gameBoard = document.querySelector(".game");
const bird = document.querySelector(".bird");

//game variables
export let birdStatus = "drop";
let birdWeight = 1;

export function resetBird() {
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
    parseFloat(getComputedStyle(bird).getPropertyValue("--bird-top")) - (birdWeight * 2)
  );
};
