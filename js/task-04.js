const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }

    
}

const valueEl = document.querySelector('#value');
const btnIncrement = document.querySelector('[data-action = "increment"]');
const btnDecrement = document.querySelector('[data-action = "decrement"]');

btnIncrement.addEventListener("click", () => {
    counterValue.increment()
    valueEl.textContent = counterValue.value;
})



btnDecrement.addEventListener("click", () => {
    counterValue.decrement()
    valueEl.textContent = counterValue.value;
})
