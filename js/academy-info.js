const map_button = document.querySelector(".map"); // map버튼
const aca_wrapper = document.querySelector(".section"); // info
const info_wrapper = document.querySelector(".put-in-button");

map_button.addEventListener("click", () => {
  console.log("hi");
  // map누르면 info 나오게
  console.log(basket_wrapper.className);
  if (basket_wrapper.className === "wrapper click") {
    return;
  } else if (basket_wrapper.className === "wrapper") {
    aca_wrapper.classList.toggle("click");
  }
});
// bascket.js
// basket_wrapper click 에 aca_wrapper add
// button click 에 aca_wrapper remove
// 들어가있음