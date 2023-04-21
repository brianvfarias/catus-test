const btnMenu = document.querySelector("#btnMenu img");
const menu = document.getElementById("menu");
btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  let index = window.location.href.indexOf("#");
  let siteUrl =
    index > -1
      ? window.location.href.substring(0, index)
      : window.location.href;
  if (btnMenu.src == `${siteUrl}assets/menu.svg`) {
    btnMenu.src = "./assets/close.svg";
    btnMenu.ariaLabel = "fechar menu";
  } else {
    btnMenu.src = "./assets/menu.svg";
    btnMenu.ariaLabel = "abrir menu";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    menu.classList.remove("active");
    btnMenu.src = "./assets/menu.svg";
    return;
  }
});

const sideButton = document.querySelectorAll(".sideButton");
const products = document.querySelectorAll(".product");
const numberOfProducts = products.length;
let current = 0;

sideButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    products.forEach((product) => product.classList.remove("current"));
    const toLeft = btn.classList.contains("left");
    if (toLeft) {
      current -= 1;
    } else {
      current += 1;
    }

    if (current >= numberOfProducts) {
      current = 0;
    }
    if (current < 0) {
      current = numberOfProducts - 1;
    }

    products[current].classList.add("current");
    products[current].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  });
});
