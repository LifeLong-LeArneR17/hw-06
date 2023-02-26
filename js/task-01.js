// 1 задание
const numberCategory = document.querySelector("#categories")
const elementLi = numberCategory.children
console.log(`Number of categories: ${numberCategory.children.length}`);



const categoriesLi = document.querySelectorAll("li.item")
categoriesLi.forEach(el => {
    const element = el.firstElementChild.textContent
    console.log(` Category: ${element}`);
    const result = el.lastElementChild.children.length;
    console.log(` Elements: ${result}`);
})



