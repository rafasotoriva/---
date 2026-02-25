const revealBtn = document.getElementById("reveal-btn");
const mysteryBox = document.getElementById("mystery-box");
const mainContent = document.getElementById("main-content");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const response = document.getElementById("response");

// Revela a pergunta
revealBtn.addEventListener("click", () => {
  mysteryBox.style.display = "none";
  mainContent.classList.remove("hidden");
  mainContent.classList.add("show");

  document.body.style.background =
    "linear-gradient(135deg, #fce4ec, #fff9c4)";
});

// Botão "Não" foge
noBtn.addEventListener("mouseenter", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Ao clicar em Sim
yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";

  response.innerHTML = `
    <div style="font-size: 40px;">💖</div>
    <h2 style="color:#d81b60;">Obrigada Linda, sabia que vc era incrível!</h2>
    <p>Espero te ver logo, estou ansiosa!💖</p>
  `;
});
