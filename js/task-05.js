// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

// < input type = "text" id = "name-input" placeholder = "Please enter your name" />
//     <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const inputText = document.querySelector("#name-input");

const textInfo = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
    textInfo.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        textInfo.textContent = "Anonymous";
    } else {
      textInfo.textContent = event.currentTarget.value;
    }
})