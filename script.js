function getCurrentHour() {
  const time = new Date();
  return time.getHours();
}

const CurrentTime = getCurrentHour();

///switch case laga

const footerlines = document.querySelector("#footerlines");

var verticallines = "";
const widtharr = ["width2px", "width3px", "width4px", "width5px"];
for (let i = 1; i <= 3; i++) {
  widtharr.forEach((elem) => {
    verticallines += `<div class="">
        <div class="vertical-line ${elem}"></div>
        <div></div>
        </div>`;
  });
}
footerlines.innerHTML = verticallines;

// 12am 3am 6am 9am 12pm 3pm 6pm 9pm
