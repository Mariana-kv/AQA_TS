const temperature = 20;
const isRaining = true;


switch(true) {
    case (temperature < 0 && isRaining):
        console.log("Stay at home");
        break;
    case (temperature <= 0 && !isRaining):
        console.log("Still stay at home");
        break;
    case (temperature > 0 && isRaining):
        console.log("Better stay at home");
        break;
    default: console.log("Go outside");
}

