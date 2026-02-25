const app = document.getElementById("app");

const stages = [
  {
    icon: "🔒",
    text: "Você confia em mim?",
    button: "Sim..."
  },
  {
    icon: "✨",
    text: "Então me deixa te mostrar algo…",
    button: "Eu quero ver"
  },
  {
    icon: "🌸",
    text: "Eu pensei muito antes de fazer isso…",
    button: "Por quê?"
  },
  {
    icon: "💌",
    text: "Porque você é importante pra mim.",
    button: "Continua..."
  },
  {
    final: true
  }
];

let current = 0;

function renderStage() {
  const stage = stages[current];

  if (!stage.final) {
    app.className = "screen dark";

    app.innerHTML = `
      <div class="content fade">
        <div class="icon">${stage.icon}</div>
        <h1>${stage.text}</h1>
        <button class="next">${stage.button}</button>
      </div>
    `;

    document.querySelector(".next").addEventListener("click", () => {
      current++;
      renderStage();
    });

  } else {
    renderFinalQuestion();
  }
}

function renderFinalQuestion() {

  app.className = "screen question-bg";

  app.innerHTML = `
    <div class="content fade">
      <div class="icon">🌙</div>
      <h1>Podemos nos encontrar para conversar com calma?</h1>
      <div class="buttons">
        <button id="yes">Sim ❤️</button>
        <button id="no">Não 😢</button>
      </div>
    </div>
  `;

  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");

  // Botão "Não" foge suavemente
  noBtn.addEventListener("mouseenter", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  });

  yesBtn.addEventListener("click", showFinal);
}

function showFinal() {

  app.className = "screen light";

  app.innerHTML = `
    <div class="content fade">
      <div class="icon">🌷</div>
      <h1>Obrigada por me encontrar.</h1>
      <p>Eu prometo que vai ser leve, sincero e com carinho.</p>
    </div>
  `;

  startFlowers();
}

function startFlowers() {
  setInterval(() => {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerText = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 5 + Math.random() * 5 + "s";

    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), 10000);
  }, 500);
}

renderStage();
