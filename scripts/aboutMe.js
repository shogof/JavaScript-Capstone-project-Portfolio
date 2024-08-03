let number = document.getElementById("number");
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");

let counter = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
setInterval(() => {
  if (counter == 90) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }

  if (counter1 == 95) {
    clearInterval();
  } else {
    counter1 += 1;
    number1.innerHTML = counter1 + "%";
  }

  if (counter2 == 80) {
    clearInterval();
  } else {
    counter2 += 1;
    number2.innerHTML = counter2 + "%";
  }

  if (counter3 == 98) {
    clearInterval();
  } else {
    counter3 += 1;
    number3.innerHTML = counter3 + "%";
  }
}, 20);

// slider part

const sliderContainer = document.getElementById("slid");

const sliderData = [
  {
    src: "img/elevate.jpg",
    alt: "Image 1",
    link: "https://github.com/",
  },
  {
    src: "img/html cer.png",
    alt: "Image 2",
    link: "https://example.com/image2",
  },
  { src: "img/elevate.jpg", alt: "Image 3", link: "#" },
  { src: "img/ayla.jpg", alt: "Image 4", link: "https://example.com/image4" },
  { src: "img/js.jpg", alt: "Image 5", link: "https://example.com/image5" },
  {
    src: "img/elevate.jpg",
    alt: "Image 6",
    link: "https://example.com/image6",
  },
  {
    src: "img/html cer.png",
    alt: "Image 7",
    link: "https://example.com/image7",
  },
];

function createSlider() {
  sliderData.forEach((item, index) => {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img");

    const linkElement = document.createElement("a");
    linkElement.href = item.link;
    linkElement.innerHTML = "connect";
    linkElement.classList.add("linkm");

    const imgElement = document.createElement("img");
    imgElement.src = item.src;
    imgElement.alt = item.alt;

    linkElement.appendChild(imgElement);
    imgDiv.appendChild(linkElement);
    sliderContainer.appendChild(imgDiv);
  });
}

createSlider();

const slider = document.querySelector(".slider");
const btns = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".img");
const options = document.querySelectorAll(".option");

var index = 1;
var op_index = 0;
var size = slides[index].clientWidth;

update();

function update() {
  slider.style.transform = "translateX(" + -size * index + "px)";
  options.forEach((option) => option.classList.remove("colored"));
  options[op_index].classList.add("colored");
}

function slide() {
  slider.style.transition = "transform .5s ease-in-out";
  update();
}

function btnCheck() {
  if (this.id === "prev") {
    index--;
    if (op_index === 0) {
      op_index = 4;
    } else {
      op_index--;
    }
  } else {
    index++;
    if (op_index === 4) {
      op_index = 0;
    } else {
      op_index++;
    }
  }

  slide();
}

function optionFunc() {
  let i = Number(this.getAttribute("op-index"));
  op_index = i;
  index = i + 1;

  slide();
}

slider.addEventListener("transitionend", () => {
  if (slides[index].id === "first") {
    slider.style.transition = "none";
    index = slides.length - 2;
    slider.style.transform = "translateX(" + -size * index + "px)";
  } else if (slides[index].id === "last") {
    slider.style.transition = "none";
    index = 1;
    slider.style.transform = "translateX(" + -size * index + "px)";
  }
});

btns.forEach((btn) => btn.addEventListener("click", btnCheck));
options.forEach((option) => option.addEventListener("click", optionFunc));
