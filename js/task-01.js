// const listEl = document.querySelectorAll("ul#categories .item");
// console.log("Number of categories:", listEl.length);

// const titleEl = document.querySelectorAll("li.item");

// titleEl.forEach((item) => {
//   console.log(`Category:  ${item.querySelector("h2").textContent}`);
//   console.log(`Elements: ${item.querySelectorAll("ul > li").length}`);
// });

const categoriesList = document.querySelector("#categories");
// console.log(categoriesList);
const categoriesEl = Array.from(categoriesList.children);
console.log(`Number of categorias: ${categoriesEl.length}`);
categoriesEl.map((element) =>
  console.log(`Category: ${element.querySelector("h2").textContent}
  Elements: ${element.querySelectorAll("li").length}`)
);
