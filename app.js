//object.addEventListener("mouseleave", myScript);
//object.addEventListener("mouseenter", myScript);

const hunter = document.querySelectorAll(".hunter");
const bookmark = document.querySelectorAll(".bookmark");

hunter.forEach(function (item) {
  item.addEventListener("mouseenter", function (e) {
    e.currentTarget.classList.add("bookmark");
  });
  item.addEventListener("mouseleave", function (e) {
    e.currentTarget.classList.remove("bookmark");
  });
});
