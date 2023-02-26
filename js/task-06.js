// {/* <input
//     type="text"
//     id="validation-input"
//     data-length="6"
//     placeholder="Please enter 6 symbols"
// /> */}

const inputText = document.querySelector("#validation-input");
const value = inputText.getAttribute("data-length");

inputText.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === parseInt(value)) {
        inputText.classList.add("valid");
        inputText.classList.remove("invalid");

    } else {
        inputText.classList.add("invalid");
        inputText.classList.remove("valid");
    }
})