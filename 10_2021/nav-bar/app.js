const links = document.querySelectorAll(".navbar-link");

links.forEach((link,e) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
      links.forEach(link => {
        link.className = "navbar-link";
      })
    link.classList.add("change");

    link.previousElementSibling.classList.add("prevElChange");
    link.nextElementSibling.classList.add("nextElChange");
  });
});