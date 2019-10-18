let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;


// The variables that are commented out will be moved into the Spacecraft class
// let spaceCraft: string = "Space Shuttle";
// let speedMph: number = 17500;
// let milesPerKilometer: number = 0.621;

// This function will also be moved into the Spacecraft class   


// Define your Spacecraft class here:

class Spacecraft {
    spaceCraft: string = "Space Shuttle";
    speedMph: number = 17500;
    milesPerKilometer: number = 0.621;
    name: string;
    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hours: number = milesAway / this.speedMph;
        return hours / 24;
    }
}

// class Astronaut {
//     name: string;
//     constructor(firstName: string, lastName: string) {
//        this.name = firstName + " " + lastName;
//     }
//     greet() {
//        return "Hello, " + this.name;
//     }
//  }
// 
//  let Bob = new Astronaut("Bob","Smith");

// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);

// Print two outputs - one for the trip to Mars and one for the trip to the moon.

// ${spaceShuttle.getDaysToLocation(kilometersToMars)} and ${spaceShuttle.name}.
// Determination would take 332.67857142857144 days to get to Mars.
console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`);
   
// ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} and ${spaceShuttle.name}.
// Determination would take 0.5683628571428571 days to get to the Moon.
console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);
