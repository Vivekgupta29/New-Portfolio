var DarkTheme = false;

//Cursor Ball Animation
function cursorBallAnimation() {
  const cursorball = document.querySelector("#cursorball");
  window.addEventListener("mousemove", function (e) {
    cursorball.style.top = `${e.clientY}px`;
    cursorball.style.left = `${e.clientX}px`;
    console.log(e.clientY);
  });
}

// cursorBallAnimation();

//get Current Hour
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
            
            </div>`;
  }
  footerlines.innerHTML = verticallines;
}

createFooterLines();

function moveSlider() {
  const slider = document.querySelector("#scrollarrow");
  let isDragging = false;

  slider.addEventListener("click", function (e) {
    const arrowsvg = document.querySelector(".downarrowsvg");
    arrowsvg.style.transitionDuration = "500ms";
    const sliderRect = slider.getBoundingClientRect();
    const mouseX = e.clientX - sliderRect.left;
    const newPosition = mouseX;
    arrowsvg.style.left = `${newPosition}px`;
    setTimeout(() => {
      arrowsvg.style.transitionDuration = "100ms";
    }, 500);
  });

  slider.addEventListener("mousedown", function () {
    isDragging = true;
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      const arrowsvg = document.querySelector(".downarrowsvg");
      const sliderRect = slider.getBoundingClientRect();
      const mouseX = e.clientX - sliderRect.left;
      const sliderWidth = sliderRect.width;
      const newPosition = Math.min(Math.max(mouseX, 0), sliderWidth);
      arrowsvg.style.left = `${newPosition}px`;
    }
  });
}

moveSlider();

function changeActive() {
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const navList = document.querySelector("nav ul");

    navLinks.forEach((link, index) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        // const targetId = this.getAttribute("href").substring(1);
        // const targetSection = document.getElementById(targetId);

        // window.scrollTo({
        //   top: targetSection.offsetTop,
        //   behavior: "smooth",
        // });

        // Update active class
        document.querySelector("nav ul li.active").classList.remove("active");
        this.parentElement.classList.add("active");

        // Update the sliding background position
        const activeElement = document.querySelector("nav ul li.active");
        const activeRect = activeElement.getBoundingClientRect();
        const navRect = navList.getBoundingClientRect();
        const offsetLeft = activeRect.left - navRect.left;
        const offsetWidth = activeRect.width;

        navList.style.setProperty("--active-left", `${offsetLeft}px`);
        navList.style.setProperty("--active-width", `${offsetWidth}px`);
      });
    });

    // Initialize the sliding background position
    const initActiveElement = document.querySelector("nav ul li.active");
    if (initActiveElement) {
      const initActiveRect = initActiveElement.getBoundingClientRect();
      const navRect = navList.getBoundingClientRect();
      const initOffsetLeft = initActiveRect.left - navRect.left;
      const initOffsetWidth = initActiveRect.width;

      navList.style.setProperty("--active-left", `${initOffsetLeft}px`);
      navList.style.setProperty("--active-width", `${initOffsetWidth}px`);
    }
  });
}
changeActive();
