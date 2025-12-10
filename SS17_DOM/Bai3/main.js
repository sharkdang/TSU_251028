


let btnOpen = document.querySelector(".btn-open");

let btnClose = document.querySelector(".btn-close");

let overlay = document.querySelector(".overlay");

let modal = document.querySelector(".modal");

btnOpen.onclick = function () {
  overlay.style.display = "block";
};

btnClose.onclick = function () {
  overlay.style.display = "none";
};
overlay.onclick = function (e) {
  if (!modal.contains(e.target)) {
    overlay.style.display = "none";
  }
};
