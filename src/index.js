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
var gasCostPerMileVar = gasCostPerMile(commuteDistance, carMPG, gasPrice);
var gasCostPerTripVar = gasCostPerTrip(gasCostPerMileVar, commuteDistance);
var gasMoneySavedPerSwapVar = gasMoneySavedPerSwap(gasCostPerTripVar);
var wearTearCostPerSwapVar = wearTearCostPerSwap(wearTearCostPerMile, commuteDistance);
var totalMoneySavedPerSwapVar = totalMoneySavedPerSwap(gasMoneySavedPerSwapVar, wearTearCostPerSwapVar, busFare);


function gasCostPerMile (commuteDistance, carMPG, gasPrice) {
    return (commuteDistance/carMPG) * gasPrice;
}

function gasCostPerTrip (gasCostPerMile, commuteDistance) {
    return gasCostPerMile * commuteDistance;
}

function gasMoneySavedPerSwap (gasCostPerTrip) {
    return gasCostPerTrip * 2;
}

function wearTearCostPerSwap (wearTearCostPerMile, commuteDistance) {
    return 2 * wearTearCostPerMile * commuteDistance;
}

function totalMoneySavedPerSwap (gasCostPerSwap, wearTearCostPerSwap, busFare) {
    return gasCostPerSwap + wearTearCostPerSwap - (2 * busFare);
}

// CALCULATIONS FROM CALENDAR INFO
function weeklytoMonthly (weeklyCounter) {
    return weeklyCounter * 4;
}
function weeklyGasSavings (gasCostPerSwap, counterWeekToDate) {
    return gasCostPerSwap * counterWeekToDate;
}
function monthlyGasSavings (gasCostPerSwap, counterMonthToDate) {
    return gasCostPerSwap * counterMonthToDate;
}

// CALCULATIONS FOR GOAL PAGE
var weeklySavingsGoal = 10;

function maxSavingsWeek (totalMoneySavedPerSwap) {
    return 5 * totalMoneySavedPerSwap;
}

function currentSavingsWeek (counterWeekToDate, moneySavedPerSwap) {
    return counterWeekToDate * moneySavedPerSwap
}

function currentSavingsMonth (counterMonthToDate, moneySavedPerSwap) {
    return counterMonthToDate * moneySavedPerSwap;
}

function swapsNeededPerWeek (weeklySavingsGoal, totalMoneySavedPerSwap) {
    return weeklySavingsGoal/totalMoneySavedPerSwap; // floor or ceiling...?
}

function swapsLeftToGo (swapsNeededPerWeek, counterWeekToDate) {
    return swapsNeededPerWeek - counterWeekToDate;
}









