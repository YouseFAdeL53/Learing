// OptionBackground

let backgroundOption = true;
let backgroundInterval;

let localBackground = localStorage.getItem("background");

if (localBackground !== null) {
  document.querySelectorAll(".option-Background span").forEach((element) => {
    element.classList.remove("active");
    if (element.dataset.background === localBackground) {
      element.classList.add("active");
    }
    if (localBackground == "yes") {
      backgroundOption = true;
      changeBackground();
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
    }
  });
}

// LocalStorage --- GetItem

let localColor = localStorage.getItem("pageColor");

// Check

if (localColor !== null) {
  document.body.style.setProperty("--main-color", localColor);
  document.querySelectorAll(".color-option li").forEach((element) => {
    element.classList.remove("active");
    // Check
    if (element.dataset.color === localColor) {
      element.classList.add("active");
    }
  });
}

// Toggle

let myToggle = document.querySelector(".toggle");
let theLinks = document.querySelector(".links");

myToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".links").classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (e.target !== myToggle && e.target !== theLinks) {
    theLinks.classList.remove("show");
  }
});
theLinks.onclick = function (e) {
  e.stopPropagation();
};

// UpButton 15px
let up = document.querySelector(".up");
let whatsapp = document.querySelector(".whatsapp");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1000) {
    up.classList.add("show");
    whatsapp.classList.add("show")
  } else {
    up.classList.remove("show");
    whatsapp.classList.remove("show")
  }
});

up.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

// Setting-box

let myGear = document.querySelector(".fa-gear");
myGear.addEventListener("click", (e) => {
  // Add Class To This Element
  e.target.classList.toggle("fa-spin");
  // Add Class To Setting-box
  document.querySelector(".setting-box").classList.toggle("open");
});

let settingBox = document.querySelector(".setting-box");

window.addEventListener("scroll", () => {
  if (window.scrollY != settingBox) {
    settingBox.classList.remove("open");
  }
  if (myGear.classList.contains("fa-spin")) {
    myGear.classList.remove("fa-spin");
  }
});

let myOptionBullte = document.querySelectorAll(".option-bullte span");
let navBulltes = document.querySelector(".nav-builtes");

// Check LocalStorage

let LocalBullte = localStorage.getItem("bullte");

if (LocalBullte != null) {
  myOptionBullte.forEach((bullte) => {
    bullte.classList.remove("active");
  });
  if (LocalBullte == "block") {
    document.querySelector(".option-bullte .yes").classList.add("active");
    navBulltes.style.display = "block";
  } else {
    document.querySelector(".option-bullte .no").classList.add("active");
    navBulltes.style.display = "none";
  }
}

myOptionBullte.forEach((bullte) => {
  bullte.addEventListener("click", (e) => {
    addClassRem(e);
    if (e.target.dataset.bullte === "show") {
      navBulltes.style.display = "block";
      localStorage.setItem("bullte", "block");
    } else {
      navBulltes.style.display = "none";
      localStorage.setItem("bullte", "hide");
    }
  });
});

// Select Font's
let myFonts = document.querySelector(".fonts");
let fontStorage = localStorage.getItem("fonts");

myFonts.onchange = function () {
  document.body.style.fontFamily = myFonts.value;
  localStorage.setItem("fonts", myFonts.value);
}

if (fontStorage !== null) {
  document.body.style.fontFamily = fontStorage;
  myFonts.value = fontStorage;
}
// Change Color

let myLis = document.querySelectorAll(".color-option li");
myLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    addClassRem(e);
    document.body.style.setProperty("--main-color", e.target.dataset.color);
    //LocalStorage
    localStorage.setItem("pageColor", e.target.dataset.color);
  });
});

// Change Background

let myBackground = document.querySelectorAll(".option-Background span");

myBackground.forEach((span) => {
  span.addEventListener("click", (e) => {
    addClassRem(e);
    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      changeBackground();
      localStorage.setItem("background", "yes");
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background", "no");
    }
  });
});

// Change Background

let myImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg","6.jpg","7.jpg"];
let app = document.querySelector(".app");

function changeBackground() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * myImages.length);
      app.style.backgroundImage = 'url("image/' + myImages[randomNumber] + '")';
    }, 3000);
  }
}
changeBackground();

// Start Progressbar

let myProgress = document.querySelectorAll(".progressbar span");
let skillSection = document.querySelector(".skills");
window.addEventListener("scroll", () => {
  if (window.scrollY >= skillSection.offsetTop) {
    myProgress.forEach((prog) => {
      prog.style.width = prog.dataset.width;
    });
  }
});

// Bulltes
let linksUp = document.querySelectorAll(".links li");
let myBulltes = document.querySelectorAll(".nav-builtes .built");

function moveToSection(ev) {
  ev.forEach((bullt) => {
    bullt.addEventListener("click", (ev) => {
      document.querySelector(ev.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

moveToSection(myBulltes);
moveToSection(linksUp);

// Function Add Class And Remove

function addClassRem(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  ev.target.classList.add("active");
}

myBulltes.forEach((bullt) => {
  bullt.addEventListener("click", (e) => {
    addClassRem(e);
  });
});

// gallery

let theGallery = document.querySelectorAll(".gallery .content img");

theGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create OverLay
    let overly = document.createElement("div");
    overly.className = "overly";
    document.body.appendChild(overly);
    let theBox = document.createElement("div");
    theBox.className = "theBox";
    let theImage = document.createElement("img");
    theImage.className = "theImage";
    theImage.src = e.target.src;
    theBox.appendChild(theImage);
    let theTitle = document.createElement("h1");
    let altImage = document.createTextNode(e.target.alt);
    theTitle.appendChild(altImage);
    theBox.appendChild(theTitle);
    let X = document.createElement("span");
    X.className = "del";
    let xText = document.createTextNode("X");
    X.appendChild(xText);
    theBox.appendChild(X);
    document.body.appendChild(theBox);
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    e.target.parentNode.remove();
    document.querySelector(".overly").remove();
  }
});

let scroller = document.querySelector(".scroller");

window.addEventListener("scroll", () => {
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

// Start Slider

let allBoxes = document.querySelectorAll(".slider .box");

// Get Length

let boxesLength = allBoxes.length;

// currentSlide

let currentSlide = 1;

// Prev And Next Button

let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");

prevButton.onclick = prev;
nextButton.onclick = next;

// Create Ul

let newUl = document.createElement("ul");
newUl.className = "slide-bullt";

for (var i = 1; i <= boxesLength; i++) {
  let myLi = document.createElement("li");
  myLi.setAttribute("data-id", `${i}`);
  newUl.appendChild(myLi);
}
document.querySelector(".slider").appendChild(newUl);

let theUl = document.querySelector(".slide-bullt");
let theLi = document.querySelectorAll(".slide-bullt li");

for (var x = 0; x < theLi.length; x++) {
  theLi[x].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-id"));
    checker();
  }
}

function checker() {
  removeActive();
  allBoxes[currentSlide - 1].classList.add("active");
  theUl.children[currentSlide - 1].classList.add("active");
  // Check
  if (currentSlide === 1) {
    prevButton.classList.add("disapled");
  } else {
    prevButton.classList.remove("disapled");
  }
  if (currentSlide == boxesLength) {
    nextButton.classList.add("disapled");
  } else {
    nextButton.classList.remove("disapled");
  }
}
checker();

setInterval(() => {
  checker();
  currentSlide++;
  if (currentSlide == boxesLength + 1) {
    currentSlide = 1;
  }
}, 5000);

// Function Remove Class Active

function removeActive() {
  allBoxes.forEach((box) => {
    box.classList.remove("active");
  });
  theLi.forEach((li) => {
    li.classList.remove("active");
  });
}

function prev() {
  if (prevButton.classList.contains("disapled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
}

function next() {
  if (nextButton.classList.contains("disapled")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
}

// Clear LocalStorage
let resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", (e) => {
  localStorage.clear();
  location.reload();
});
