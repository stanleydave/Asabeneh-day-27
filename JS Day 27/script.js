let image = document.querySelector(".image");
let text = document.querySelector("#text");
image.style.width = "2rem";
image.style.height = "2rem";

// changing image and text slide
function changeImage() {
  image.src = "img/index.jpg";
  text.textContent = "";
  setTimeout(function () {
    text.textContent = "web developer";
    text.style.marginLeft = "2rem";
  }, 220);
  setTimeout(function () {
    text.style.marginLeft = "3rem";
  }, 320);
  setTimeout(function () {
    text.style.marginLeft = "4rem";
  }, 320);
  setTimeout(function () {
    image.src = "img/Linth.png";
    text.textContent = "";
    text.style.marginLeft = "1rem";
  }, 2000);
  setTimeout(function () {
    text.textContent = "Graphics Designer";
  }, 2220);
  setTimeout(function () {
    text.style.marginLeft = "2rem";
  }, 2420);
  setTimeout(function () {
    text.style.marginLeft = "3rem";
  }, 2620);
  setTimeout(function () {
    text.style.marginLeft = "4rem";
  }, 2820);
  setTimeout(function () {
    image.src = "img/pngwing.com (1).png";
    text.textContent = "";
    text.style.marginLeft = "1rem";
  }, 4500);
  setTimeout(function () {
    text.textContent = "Agriculturist";
  }, 4700);
  setTimeout(function () {
    text.style.marginLeft = "3rem";
  }, 4900);
  setTimeout(function () {
    text.style.marginLeft = "4rem";
  }, 5100);
  setTimeout(function () {
    image.src = "img/index.jpg";
    text.textContent = "";
    text.style.marginLeft = "1rem";
  }, 6780);
}
changeImage();
setInterval(changeImage, 6780);

// technologies
const color = () => {
  let technologies = document.querySelector(".tech");
  technologies.style.fontSize = "2rem";
  technologies.style.fontWeight = "bold";
  setTimeout(function () {
    technologies.textContent = "RUBY";
    technologies.style.color = "red";
  }, 0);
  setTimeout(function () {
    technologies.textContent = "REACT";
    technologies.style.color = "yellow";
  }, 2000);
  setTimeout(function () {
    technologies.textContent = "JAVASCRIPT";
    technologies.style.color = "orange";
  }, 4000);
  setTimeout(function () {
    technologies.textContent = "REDUX";
    technologies.style.color = "skyblue";
  }, 6000);
  setTimeout(function () {
    technologies.textContent = "MONGOSDB";
    technologies.style.color = "green";
  }, 8000);
  setTimeout(function () {
    technologies.textContent = "PANDAS";
    technologies.style.color = "blue";
  }, 10000);
  setTimeout(function () {
    technologies.textContent = "NUMPY";
    technologies.style.color = "skyblue";
  }, 12000);
  setTimeout(function () {
    technologies.textContent = "HTML";
    technologies.style.color = "yellow";
  }, 14000);
};
color();
setInterval(color, 16000);