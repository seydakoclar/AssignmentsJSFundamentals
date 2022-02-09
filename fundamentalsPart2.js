/*
ASSIGNMENT 1
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/

//uncomment to activate strict mode for security
//'use strict'; 

function describeCountry(_country, _population, _capitalCity) {
    return `${_country} has ${_population} million peopleand its capital city is ${_capitalCity}`;
}

const finland = describeCountry('Finland', 6, 'Helsinki');
const turkey = describeCountry('Turkey', 80, 'Ankara');
const poland = describeCountry('Poland', 38, 'Warsaw');

console.log(finland);
console.log(turkey);
console.log(poland);

/*
ASSIGNMENT 2
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/
const worldPopulation = 7900;
function percentageOfWorld1(_population) {
    return (_population / worldPopulation) * 100;
}

const finlandPopulationPercentage1 = percentageOfWorld1(6);
const turkeyPopulationPercentage1 = percentageOfWorld1(80);
const polandPopulationPercentage1 = percentageOfWorld1(38);

console.log(finlandPopulationPercentage1, turkeyPopulationPercentage1, polandPopulationPercentage1);

const percentageOfWorld2 = function (_population) {
    return (_population / worldPopulation) * 100;
}

const finlandPopulationPercentage2 = percentageOfWorld2(6);
const turkeyPopulationPercentage2 = percentageOfWorld2(80);
const polandPopulationPercentage2 = percentageOfWorld2(38);

console.log(finlandPopulationPercentage2, turkeyPopulationPercentage2, polandPopulationPercentage2);

/* 
ASSIGNMENT 3
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

const percentageOfWorld3 = _population => (_population / worldPopulation) * 100;

const finlandPopulationPercentage3 = percentageOfWorld2(6);
const turkeyPopulationPercentage3 = percentageOfWorld2(80);
const polandPopulationPercentage3 = percentageOfWorld2(38);

console.log(finlandPopulationPercentage3, turkeyPopulationPercentage3, polandPopulationPercentage3);