const sideNavBtns = [...document.querySelectorAll(".side-nav__item")];

sideNavBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    const activeBtn = sideNavBtns.find((btn) =>
      btn.classList.contains("side-nav__item--active")
    );
    activeBtn
      ? activeBtn.classList.remove("side-nav__item--active")
      : undefined;

    btn.classList.add("side-nav__item--active");
  })
);
