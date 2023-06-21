const probability = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];
let currentLevel = 0;
let attempts = 0;

function getRandomBinaryResult(prob) {
  const randomNum = Math.floor(Math.random() * 100); //0~99
  if (randomNum < prob) return true;
  else return false;
}

function tryLevelUp() {
  const loopId = setInterval(() => {
    attempts++;
    const success = getRandomBinaryResult(probability[currentLevel]);
    if (success) {
      currentLevel++;
      document.getElementById("current-level").innerText = currentLevel;
      document.getElementById("gauge-bar").style.width =
        30 * currentLevel + "px";
    }
    document.getElementById("attempts").innerText = attempts;
    if (currentLevel >= 10) clearInterval(loopId);
  }, 50);
}
