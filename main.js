let sideItem = document.querySelectorAll(".sidebar-category-item");
let arrow = document.querySelectorAll;

sideItem.forEach((element) => {
  element.addEventListener("click", expand);
});

function expand(e) {
  e.currentTarget.classList.toggle("expand");
  e.currentTarget.children[0].classList.toggle("expand");
  e.currentTarget.nextElementSibling.classList.toggle("expand");
  //   var styles = window.getComputedStyle(e, ":after");
  //   var content = styles["content"];
  //   console.log(content);
}
