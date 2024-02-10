function themeToggle() {
  var toggleEl = document.querySelector("[data-toggle-theme]");
  const dataKey = toggleEl ? toggleEl.getAttribute('data-key') : "theme";
  (function (theme = localStorage.getItem(dataKey)) {
    if (localStorage.getItem(dataKey)) {
      document.documentElement.setAttribute("data-theme", theme);
      if (toggleEl) {
        [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
          el.classList.add(toggleEl.getAttribute('data-act-class'))
        });
      }
    }
  })();
  if (toggleEl) {
    [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
      el.addEventListener("click", function () {
        var themesList = el.getAttribute('data-toggle-theme');
        if (themesList) {
          var themesArray = themesList.split(",");
          if (document.documentElement.getAttribute('data-theme') == themesArray[0]) {
            if (themesArray.length == 1) {
              document.documentElement.removeAttribute("data-theme");
              localStorage.removeItem(dataKey);
            }else{
              document.documentElement.setAttribute("data-theme", themesArray[1]);
              localStorage.setItem(dataKey, themesArray[1]);
            }
          } else {
            document.documentElement.setAttribute("data-theme", themesArray[0]);
            localStorage.setItem(dataKey, themesArray[0]);
          }
        }
        [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
          el.classList.toggle(this.getAttribute('data-act-class'));
        });
      });
    });
  }
}
