//const num = document.getElementById("number").value;
const result = document.getElementById("times-result");
function displayTimes() {
  const num = document.getElementById("number").value;
  const intNum = parseInt(num);
  console.log(num);
  console.log(intNum);
  if (intNum > 1 && intNum < 9) {
    const gugudan = [];
    for (let i = 1; i <= 9; i++) {
      gugudan.push(intNum + " x " + i + " = " + intNum * i);
    }
    result.innerText = gugudan.join("\n");
  } else result.innerText = "input Error!";
}
