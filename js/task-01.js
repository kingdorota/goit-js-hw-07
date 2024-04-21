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
