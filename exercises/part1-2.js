// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Add the 5 variables here
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code part 2 here:
// milesToMars is a number with the value of kilometersToMars * milesPerKilometer.
// hoursToMars is a number with the value of milesToMars / speedMph.
// daysToMars is a number with the value of hoursToMars / 24.
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
// Code the output statement here (use a template literal):
// Determination would take 332.67857142857144 days to get to Mars.
console.log(spacecraftName + " would take " + daysToMars + " days to get to Mars.");
