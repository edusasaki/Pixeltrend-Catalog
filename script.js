window.addEventListener("DOMContentLoaded", () => {
  const toggleIcon = document.getElementById("modoToggle");
  const savedTheme = localStorage.getItem("modoTema");
  const cartIcon = document.getElementById("cartIcon");
  const lupaIcon = document.getElementById("lupaIcon");
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");
  const h2 = document.querySelector("h2");
  const btn = document.querySelector("button");
  const main = document.querySelector("main");
  const btnns = document.querySelectorAll(".btnn");
  const boxes = document.querySelectorAll(".box");
  const title = document.getElementById("title");
  const home = document.getElementById("home");
  const produtos = document.getElementById("produtos");
  const iconGit = document.getElementById("iconGit");
  const footer = document.querySelector("footer");

  function setTheme(isDark) {
    document.body.classList.toggle("dark", isDark);
    if (footer) footer.classList.toggle("dark", isDark);
    if (header) header.classList.toggle("dark", isDark);
    if (nav) nav.classList.toggle("dark", isDark);
    if (main) main.classList.toggle("dark", isDark);
    if (btn) btn.classList.toggle("dark", isDark);
    if (h2) h2.classList.toggle("dark", isDark);
    if (title) title.classList.toggle("dark", isDark);
    if (home) home.classList.toggle("dark", isDark);
    if (produtos) produtos.classList.toggle("dark", isDark);

    btnns.forEach((b) => b.classList.toggle("dark", isDark));
    boxes.forEach((b) => b.classList.toggle("dark", isDark));

    iconGit.src = isDark
      ? "/assets/icon-github-white.png"
      : "/assets/icon-github.png";
    toggleIcon.src = isDark ? "/assets/sun-icon.png" : "/assets/moon-icon.png";
    cartIcon.src = isDark
      ? "/assets/carrinho-white.png"
      : "/assets/carrinho-black.png";
    lupaIcon.src = isDark ? "/assets/lupa-light.png" : "/assets/lupa-dark.png";

    localStorage.setItem("modoTema", isDark ? "dark" : "light");
  }

  if (savedTheme) {
    setTheme(savedTheme === "dark");
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark);
  }

  toggleIcon.addEventListener("click", () => {
    const isCurrentlyDark = document.body.classList.contains("dark");
    setTheme(!isCurrentlyDark);
  });
});

document.getElementById("verProdutosBtn").addEventListener("click", () => {
  document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
});
const searchInput = document.getElementById("search");

searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const termo = searchInput.value.toLowerCase().trim();
    const produtos = document.querySelectorAll(".box[data-nome]");

    let encontrado = false;

    produtos.forEach((produto) => {
      const nome = produto.dataset.nome.toLowerCase();
      if (nome.includes(termo)) {
        produto.scrollIntoView({ behavior: "smooth", block: "center" });
        produto.classList.add("produto-destaque");

        setTimeout(() => {
          produto.classList.remove("produto-destaque");
        }, 2000);

        encontrado = true;
      }
    });

    if (!encontrado) {
      alert("Produto não encontrado!");
    }
  }
});
