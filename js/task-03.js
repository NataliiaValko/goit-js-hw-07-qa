const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListRef = document.querySelector(".gallery");

galleryListRef.style.display = "flex";
galleryListRef.style.gap = "20px";

const galleryItemsMarkup = images
  .map((item) => {
    const itemMarkup = `<li><img src=${item.url} alt=${item.alt} width="320" /></li>`;
    return itemMarkup;
  })
  .join("");
console.log("galleryItemsMarkup:", galleryItemsMarkup);

galleryListRef.insertAdjacentHTML("afterbegin", galleryItemsMarkup);
