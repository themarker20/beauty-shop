// Link change Color on Click
const listItems = document.querySelectorAll("ul.filter-menu li");

const showAllButton = document.querySelector(
  'ul.filter-menu li[data-filter="all"]'
);

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    listItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("selected");
      }
    });
    item.classList.add("selected");
  });
});

// Shuffel Boxes by data type
const boxes = document.querySelectorAll(".product-box");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    const type = item.getAttribute("data-filter");
    boxes.forEach((box) => {
      if (type === "all" || box.classList.contains(type)) {
        box.style.display = "block";
        box.classList.add("show");
      } else {
        box.style.display = "none";
        box.classList.remove("show");
      }
    });
  });
});

showAllButton.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.style.display = "block";
    box.classList.add("show");
  });
});

// PopUp Function
const overlay = document.querySelector(".pop-up-overlay");
const lightbox = document.querySelector(".pop-up-lightbox");
const lightboxClose = document.querySelector(".close");
const lightboxImg = lightbox.querySelector(".image img");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const code = box.getAttribute("data-code");
    lightboxImg.src = `../imgs/products/${code}.jpg`;
    overlay.style.display = "block";
    lightbox.style.display = "flex";
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  lightbox.style.display = "none";
  const clone = document.querySelector(".clone");
  clone.classList.remove("clone");
  setTimeout(() => {
    clone.parentNode.removeChild(clone);
  }, 300);
});

lightboxClose.addEventListener("click", () => {
  overlay.style.display = "none";
  lightbox.style.display = "none";
});
