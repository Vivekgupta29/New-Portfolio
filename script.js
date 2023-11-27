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
