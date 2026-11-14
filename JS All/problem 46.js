function trackElevator(startFloor, minFloor, maxFloor, commands) {
  let floor = startFloor;

  for (const command of commands) {
    if (command === "UP") {
      floor = Math.min(maxFloor, floor + 1);
    } else if (command === "DOWN") {
      floor = Math.max(minFloor, floor - 1);
    }
  }

  return floor;
}

console.log(trackElevator(0, 0, 10, ["UP", "UP", "DOWN", "UP"]));
console.log(trackElevator(9, 0, 10, ["UP", "UP", "UP", "DOWN"]));
console.log(trackElevator(5, 0, 10, []));
console.log(trackElevator(0, 0, 10, ["DOWN", "DOWN", "DOWN"]));
console.log(trackElevator(10, 0, 10, ["UP", "UP"]));
console.log(trackElevator(-5, -10, -2, ["UP", "UP", "UP", "UP", "UP"]));
console.log(trackElevator(3, 3, 3, ["UP", "DOWN", "UP"]));