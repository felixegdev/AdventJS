function maxGifts(houses) {
  // if there are no gifts, then we return 0. 
  if (houses.length === 0) return 0;

  // We initialize an array to store the max gifts given
  const maxGiftsDP = new Array(houses.length).fill(0);

  // For the first house, santa can give the amount on that house
  maxGiftsDP[0] = houses[0];

  // On the second house, santa can give the maximum in both houses.
  maxGiftsDP[1] = Math.max(houses[0], houses[1]);

  // Now we calculate the maximum´s gift santa can give
  for (let i = 2; i < houses.length; i++) {
      // the maximum gifts santa can give in the actual house goes between:
      // 1. the amount of gifts he can give in the actual house plus the maximum amount he can give 2 house before.
      // 2. the maximum amount he can give the house before.
      maxGiftsDP[i] = Math.max(houses[i] + maxGiftsDP[i - 2], maxGiftsDP[i - 1]);
  }

  // The maximum amount of gifts santa can give is the last value on the array.
  return maxGiftsDP[houses.length - 1];
}


maxGifts([2, 4, 2]) // 4 (4)
console.log(maxGifts([2, 4, 2]))

maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
console.log(maxGifts([5, 1, 1, 5]))

maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
console.log(maxGifts([4, 1, 1, 4, 2, 1]))

maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)
console.log(maxGifts([1, 3, 1, 3, 100]))