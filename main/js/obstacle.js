let obstacleGap = 120;

export function genarateObstacles () {
  const obstacles = document.createElement("div")
  const topObstacle = document.createElement("div")
  const bottomObstacle = document.createElement("div")
  obstacles.classList.add("obstacles")
  topObstacle.classList.add("top")
  bottomObstacle.classList.add("bottom")
  obstacles.append(topObstacle)
  obstacles.append(bottomObstacle)

  obstacles.style.setProperty("--obstacle-position",
    Math.floor(Math.random() * (
        (window.innerHeight - obstacleGap * 0.5) - (obstacleGap * 1.5) + 1
      ) + (
          obstacleGap * 1.5
        )
    )
  )

  obstacles.style.setProperty("--obstacle-distance", window.innerWidth)

  setInterval(() => {
    obstacles.style.setProperty("--obstacle-distance", ("--obstacle-distance" - 1))
  }, 10);

  document.body.append(obstacles)
}