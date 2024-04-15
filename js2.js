//Napisz skrypt, który dla każdego elementu tablicy ingredients:
//Utworzy oddzielny element <li>. Pamiętaj, aby użyć metody document.createElement().
//Doda nazwę składnika jako jego zawartość tekstową.
//Doda klasę item do elementu.
//Wstawi wszystkie <li> w jednej operacji do listy ul#ingredients.

const ingredientsList = document.getElementById("ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");

  listItem.textContent = ingredient;

  listItem.classList.add("item");

  ingredientsList.appendChild(listItem);
});
