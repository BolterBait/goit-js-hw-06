const listEl = document.querySelectorAll("ul#categories .item");
console.log("Number of categories:", listEl.length);

const titleEl = document.querySelectorAll("li.item");

titleEl.forEach((item) => {
  console.log(`Category:  ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("ul > li").length}`);
});

// titleEl.forEach((item) => {
//   const category = item.textContent;
//   console.log(`Category:  ${category}`);
// });

// const listItemEl = document.querySelectorAll("li.item");
// listItemEl.forEach((element) => {
//   const elements = element.childElementCount;
//   console.log(`Elements: ${elements}`);
// });

// item.querySelector("h2");
// item.querySelectorAll("ul > li");
// el.firstElementChild.textContent)
// el.lastElementChild.children.length)
