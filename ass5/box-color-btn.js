const box = document.getElementsByClassName("box")[1];
function changeBoxColor() {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  const newColor = "rgb(" + R + "," + G + "," + B + ")"; //rgb(1,1,1)
  box.style.backgroundColor = newColor;
}
