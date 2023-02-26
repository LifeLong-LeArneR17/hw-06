// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

// < input id = "font-size-control" type = "range" min = "16" max = "96" />
// <br />
// <span id="text">Abracadabra!</span>


const textEl = document.querySelector("#font-size-control");
const sizeEl = document.querySelector("#text");
const firstAttribute = textEl.getAttribute("min");
const secondAttribute = textEl.getAttribute("max");


textEl.addEventListener("input", (event) => {
    const result = event.currentTarget.value;
    sizeEl.style.fontSize = result + "px";
})
