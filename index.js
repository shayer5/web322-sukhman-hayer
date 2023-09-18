'use strict';

console.log('Hello world');

// Event Emmitter
const { EventEmitter } = require("events")

const trafficLightsEventEmitter = new EventEmitter()

// on / emit

// Structuring data
const lights = [
    { color: "red", duration: 5000 },
    { color: "yellow", duration: 2000 },
    { color: "green", duration: 5000 },
]


let colorIdx = 0


// Create a changle color methods
function changeColor() {
    const light = console.log(lights[0].color)
    console.log(lights[colorIdx].color)
    colorIdx++

    if (colorIdx == 3) {
        colorIdx = 0;
    }
    changeColor()
}

// setInterval ot setTimeout
changeColor()


// this was on the hints im not really sure what to do with it, since it looked good, im sorry I missed thursdays class due to a family problem,so not sure if it was already done in class together.
