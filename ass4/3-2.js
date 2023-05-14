function getDivisors(num) {
  const arr = [];
  let i = 1;
  for (i; i <= Math.sqrt(num); i++) {
    if (i * i === num) arr.push(i);
    else if (num % i == 0) {
      arr.push(i);
      arr.push(num / i);
    }
  }
  arr.sort((first, second) => {
    return first - second;
  });
  return arr;
}

console.log(getDivisors(5));
console.log(getDivisors(24));
console.log(getDivisors(196));
