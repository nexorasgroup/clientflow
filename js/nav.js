// Menu mobile ClientFlow
(function () {
  var btn = document.getElementById("menu-toggle");
  var menu = document.getElementById("nav-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", function () {
    menu.classList.toggle("open");
  });

  // Fermer si on clique un lien
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("open");
    });
  });
})();
