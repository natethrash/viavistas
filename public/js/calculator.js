// USER INPUT PT. 1
var commuteDistance = 20;
var carMPG = 25;

// USER INPUT PT. 2
var walkDistance = 0.6;
var busTime = 45;
var busFare = 1.3;

// USER INPUT PT. 3
var gasPrice = 2.50;
var caloriesPerMile = 100;
var wearTearCostPerMile = 0.17;

// counter
var counterWeektoDate;
var counterMonthToDate;

// CALCULATIONS
//var gasCostPerMileVar = gasCostPerMile(commuteDistance, carMPG, gasPrice);
var gasCostPerTripVar = gasCostPerTrip(commuteDistance, carMPG, gasPrice);
var gasMoneySavedPerSwapVar = gasMoneySavedPerSwap(gasCostPerTripVar);
var wearTearCostPerSwapVar = wearTearCostPerSwap(wearTearCostPerMile, commuteDistance);
var totalMoneySavedPerSwapVar = totalMoneySavedPerSwap(gasMoneySavedPerSwapVar, wearTearCostPerSwapVar, busFare);


function gasCostPerTrip (commuteDistance, carMPG, gasPrice) {
    return (commuteDistance/carMPG) * gasPrice;
}

// function gasCostPerTrip (gasCostPerMile, commuteDistance) {
//    return gasCostPerMile * commuteDistance;
//}

function gasMoneySavedPerSwap (gasCostPerTrip) {
    return gasCostPerTrip * 2;
}

function wearTearCostPerSwap (wearTearCostPerMile, commuteDistance) {
    return 2 * wearTearCostPerMile * commuteDistance;
}

function totalMoneySavedPerSwap (gasMoneySavedPerSwap, wearTearCostPerSwap, busFare) {
    return Math.floor(gasMoneySavedPerSwap + wearTearCostPerSwap - (2 * busFare));
}

// CALCULATIONS FROM CALENDAR INFO
function weeklytoMonthly (weeklyCounter) {
    return weeklyCounter * 4;
}
function weeklyGasSavings (gasMoneySavedPerSwap, counterWeekToDate) {
    return gasMoneySavedPerSwap * counterWeekToDate;
}
function monthlyGasSavings (gasMoneySavedPerSwap, counterMonthToDate) {
    return gasMoneySavedPerSwap * counterMonthToDate;
}

// CALCULATIONS FOR GOAL PAGE
function maxSavingsWeek (totalMoneySavedPerSwap) {
    return Math.floor(5 * totalMoneySavedPerSwap);
}

var maxSavingsWeekVar = maxSavingsWeek(totalMoneySavedPerSwapVar);

function currentSavingsWeek (counterWeekToDate, moneySavedPerSwap) {
    return Math.floor(counterWeekToDate * moneySavedPerSwap);
}

function currentSavingsMonth (counterMonthToDate, moneySavedPerSwap) {
    return Math.floor(counterMonthToDate * moneySavedPerSwap);
}

function swapsNeededPerWeek (weeklySavingsGoal, totalMoneySavedPerSwap) {
    return Math.ceil(weeklySavingsGoal/totalMoneySavedPerSwap); // floor or ceiling...?
}

function swapsLeftToGo (swapsNeededPerWeek, counterWeekToDate) {
    if ((swapsNeededPerWeek - counterWeekToDate) >= 0) {
        return swapsNeededPerWeek - counterWeekToDate;
    }

    return 0;
}









