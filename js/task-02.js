const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const List = document.querySelector("ul#ingredients")
console.log(List);
for (const el of ingredients) {
  const ListIngredients = document.createElement("li");
  ListIngredients.textContent = el;
  ListIngredients.classList.add("item");
  List.append(ListIngredients)
}

