// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftName = "Deteremination";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
// In the space indicated, define a function that calculates the days it would take 
//      to travel.
// Function name getDaysToLocation
// Parameters
//  kilometersAway must be a number.
//      Returns the number of days to Mars.
//  Use the same calculations as in Part 2.1.
//  Inside the function, make the variable names generic. Use milesAway and hours 
//      instead of milesToMars and hoursToMars.
//  The function should declare that it returns a number.
//  Print out the days to Mars.
//  Use a template literal, ${getDaysToLocation(kilometersToMars)} and 
//      ${spacecraftName}.
//  Print out the days to the Moon.
//  Use template literals, ${getDaysToLocation(kilometersToTheMoon)} and 
//      ${spacecraftName}.
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hours = milesAway / speedMph;
    var daysAway = hours / 24;
    return daysAway;
}
;
// Call the function and print the outputs for the Mars trip and the moon trip:
// Determination would take 332.67857142857144 days to get to Mars.
// Determination would take 0.5683628571428571 days to get to the Moon.
console.log(spacecraftName + " would take " + getDaysToLocation(kilometersToMars) + " days to get to Mars.");
console.log(spacecraftName + " would take " + getDaysToLocation(kilometersToTheMoon) + " days to get the Moon.");
