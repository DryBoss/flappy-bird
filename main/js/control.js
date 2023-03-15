const p2p = document.querySelector(".play");

//game variables
export let birdStatus = "drop";

window.addEventListener("keydown", event => {
  switch (event.key) {
    case "w":
    case "ArrowUp":
    case " ":
      p2p.style.display = "none";
  }
})