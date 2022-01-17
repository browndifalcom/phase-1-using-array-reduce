const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const sum = batteryBatches.reduce((accumulator, totalBatteries) => {
    return accumulator + totalBatteries;
}, 0);

console.log(sum);