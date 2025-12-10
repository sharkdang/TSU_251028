





let items = document.querySelectorAll(".box-item");

items.forEach((el) => {
  el.addEventListener("mouseover", function () {
    if (el.classList.contains('color-yellow')) el.style.backgroundColor = 'yellow';
    if (el.classList.contains('color-red')) el.style.backgroundColor = 'red';
    if (el.classList.contains('color-gray')) el.style.backgroundColor = 'gray';
  });

  el.addEventListener("mouseout", function () {
    el.style.backgroundColor = "green";
  });
});
