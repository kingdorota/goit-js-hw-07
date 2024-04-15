//Napisz skrypt, który:

//Policzy i wyświetli w konsoli liczbę kategorii w ul#categories,
//czyli elementów li.item.

//Dla każdego elementu li.item na liście ul#categories, znajdzie i wyświetli w konsoli tekst
//tytułu elementu (tagu <h2>) oraz liczbę elementów w kategorii (wszystkie <li>, w nim zagnieżdżone).

const categoriesList = document.getElementById("categories");

const categoriesItems = categoriesList.querySelectorAll("li.item");

const categoriesCount = categoriesItems.length;
console.log("Liczba kategorii:", categoriesCount);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;

  const categoryElements = item.querySelectorAll("ul li");

  const elementsCount = categoryElements.length;

  console.log("Kategoria:", categoryTitle);
  console.log("Liczba elementów:", elementsCount);
});
