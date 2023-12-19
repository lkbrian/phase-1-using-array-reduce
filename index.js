const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here



// const totalBatteries = (accumulator,item) => {
//   return accumulator + item
// };
const totalBatteries = batteryBatches.reduce(
    (accumulator,item) => accumulator + item,0
);
console.log(totalBatteries)
