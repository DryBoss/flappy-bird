const bird = document.querySelector(".bird");

export function dropBird() {
  let birdTop = parseFloat(getComputedStyle(bird).getPropertyValue(top));
  console.log(birdTop)
};
