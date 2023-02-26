function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


{/* <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div> */}

const backgroundColor = document.querySelector("body")
const titleColor = document.querySelector(".color");

const changeButton = document.querySelector(".change-color")
changeButton.addEventListener("click", (event) => {
  backgroundColor.style.backgroundColor = getRandomHexColor();
  titleColor.textContent = getRandomHexColor();
})