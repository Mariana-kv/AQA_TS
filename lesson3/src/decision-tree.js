const temperature = 20;
const isRaining = true;

if (temperature < 0 && isRaining) {
    console.log("Stay at home");
} else  {
    console.log("Do as you wish");
}

console.log('-------------------------');

if (temperature < 0 && isRaining) {
    console.log("Stay at home");
} else if (temperature <= 0 && !isRaining) {
    console.log("Still stay at home");
} else if (temperature > 0 && isRaining) {
    console.log("Better stay at home");
} else {
    console.log("Go outside");
}
