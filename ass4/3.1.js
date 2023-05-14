function isValidNumber(num) {
  const validNum = parseInt(num);
  if (validNum != num || !isFinite(validNum) || isNaN(validNum)) return false;
  else if (validNum >= 1 && validNum <= 9) return true;
  else return false;
}

console.log(isValidNumber(9));
console.log(isValidNumber("4"));
console.log(isValidNumber("abc"));
console.log(isValidNumber(-5));
console.log(isValidNumber(3.5));
console.log(isValidNumber(3 / 0));
