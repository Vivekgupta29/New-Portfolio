var DarkTheme = false;

function getCurrentHour() {
  const time = new Date();
  return time.getHours();
}

function IsDarkTheme() {
  const CurrentTime = getCurrentHour();
  if (
    (CurrentTime > 0 && CurrentTime < 6) ||
    (CurrentTime > 18 && CurrentTime < 24)
  ) {
    DarkTheme = true;
  }
  return DarkTheme;
}

IsDarkTheme();

function getOpacityofBar(i) {
  if ((i >= 0 && i < 6) || (i > 18 && i < 24)) {
    return "nightopacity";
  }
  return "";
}

function createFooterLines() {
  const footerlines = document.querySelector("#footerlines");
  var verticallines = "";

  const widtharr = ["width2px", "width3px", "width4px", "width5px"];

  for (let i = 0; i < 24; i++) {
    verticallines += `<div class="everybar">
            <div class="vertical-line ${
              i > 3 ? widtharr[i % 3] : widtharr[i]
            } ${getOpacityofBar(i)}"></div>
            <div>${i + 1}</div>
            </div>`;
  }
  footerlines.innerHTML = verticallines;
}

createFooterLines();

function moveSlider() {
  const slider = document.getElementById("myRange");
  const thumbWidth = 48; // Adjust the width of the SVG
  document.querySelector("#scrollarrow::before").style.left = "0%";
  slider.addEventListener("input", function () {
    const rangeValue = this.value;
    const sliderWidth = this.offsetWidth;
    const newPosition = (sliderWidth - thumbWidth) * (rangeValue / 24);
    document.querySelector("#scrollarrow::before").style.left =
      newPosition + "px";
  });
}

moveSlider();
