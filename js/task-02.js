const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  return item;
});

ingredientsListRef.append(...ingredientsItems);
