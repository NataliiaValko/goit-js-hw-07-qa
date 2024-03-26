const categoryListRef = document.querySelector("#categories");
// console.log("categoryListRef:", categoryListRef);

const categoryItemsRef = categoryListRef.querySelectorAll(".item");
// console.log("categoryItemsRef:", categoryItemsRef);

console.log(`Number of categories: ${categoryItemsRef.length}`);

categoryItemsRef.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsQuantity = category.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsQuantity}`);
});
