const revealBtn = document.getElementById("reveal-btn");
const mysteryBox = document.getElementById("mystery-box");
const mainContent = document.getElementById("main-content");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const response = document.getElementById("response");
const container = document.querySelector(".container");

// Revelar conteúdo
revealBtn.addEventListener("click", () => {
  mysteryBox.style.display = "none";
  mainContent.classList.remove("hidden");
  mainContent.classList.add("show");

  document.body.style.background =
    "linear-gradient(135deg, #fce4ec, #fff9c4)";
});

// Função para mover o botão "Não" DENTRO do container
noBtn.addEventListener("mouseenter", () => {
  const containerRect = container.getBoundingClientRect();

  const maxX = containerRect.width - noBtn.offsetWidth;
  const maxY = containerRect.height - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Clique no Sim
yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";

  response.innerHTML = `
    <div style="font-size: 40px;">💖</div>
    <h2 style="color:#d81b60;">Sabia que você ia dizer sim 😊</h2>
    <p>Obrigada por me dar essa chance.</p>
  `;
});
