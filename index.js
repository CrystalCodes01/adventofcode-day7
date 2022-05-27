const nums = [2, 4, 6, 8, 10, 12, 13, 20];

// can use Array.reduce() to find the maximum in array by comparing each value //
// const getMax = nums.reduce((a, b) => {
//     return Math.max(a, b);
// });

// refactored to use spread operator //

const getMax = Math.max(...nums);
const getMin = Math.min(...nums);

// calculate difference between each current position and future alignment position //

const getFuelTotal = ((nums, position) => {
    let fuel = 0;
    // align all nums to postions & calculate fuel total //
    for (let i = 0; i < nums.length; i++) {
      // fuel == current pos - future pos //
      // math.abs for horizontal movement - no negative //
      fuel += Math.abs(nums[i] - position);
    }  
    return (
      fuel
   )
});

let lowestFuelUsed;
let bestPosition;

for (i = getMin; i <= getMax; i++) {
   const fuel = getFuelTotal(nums, i);
    // if current fuel less than lowest fuel - assign lowest //
   if (!lowestFuelUsed || fuel < lowestFuelUsed) {
      lowestFuelUsed = fuel
      // log position //
      bestPosition = i
  }
}

console.log(lowestFuelUsed, bestPosition);
// based on current array: lowest fuel: 35 best position: 8 //
