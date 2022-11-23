function getMinJump(obstacles) {
  let val = 1;
	const orderedObstacles = obstacles.sort((a,b) => a-b);

	while(!orderedObstacles.every((obstacle) => obstacle%val !== 0)) {
		val++;
	}

  return val
}

const obstacles = [2, 4, 6, 8, 10]
console.log(getMinJump(obstacles)) // -> 4